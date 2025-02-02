package scala.meta.internal.pc.completions

import scala.meta.internal.metals.Fuzzy
import scala.meta.internal.mtags.MtagsEnrichments.*
import scala.meta.internal.mtags.MtagsEnrichments.given
import scala.meta.internal.pc.CompletionFuzzy
import scala.meta.internal.pc.IndexedContext
import scala.meta.internal.pc.InterpolationSplice

import dotty.tools.dotc.ast.tpd.*
import dotty.tools.dotc.core.Constants.Constant
import dotty.tools.dotc.core.Contexts.Context
import dotty.tools.dotc.core.Names.TermName
import dotty.tools.dotc.core.Symbols.Symbol
import dotty.tools.dotc.interactive.Completion
import dotty.tools.dotc.interactive.Interactive
import dotty.tools.dotc.util.SourcePosition
import org.eclipse.{lsp4j as l}

object InterpolatorCompletions:

  def contribute(
      pos: SourcePosition,
      completionPos: CompletionPos,
      indexedContext: IndexedContext,
      lit: Literal,
      path: List[Tree],
      completions: Completions,
      snippetsEnabled: Boolean,
  )(using Context) =
    val text = pos.source.content().mkString
    InterpolationSplice(pos.span.point, pos.source.content(), text) match
      case Some(interpolator) =>
        InterpolatorCompletions.contributeScope(
          lit,
          pos,
          completionPos,
          interpolator,
          indexedContext,
          completions,
          snippetsEnabled,
          hasStringInterpolator =
            path.tail.headOption.exists(_.isInstanceOf[SeqLiteral]),
        )
      case None =>
        InterpolatorCompletions.contributeMember(
          lit,
          path,
          text,
          pos,
          completionPos,
          completions,
          snippetsEnabled,
        )
    end match
  end contribute

  /**
   * Find the identifier that corresponds to the previous interpolation splice.
   * For string `s" $Main.metho@@ "` we want to get `Main` identifier.
   * The difference with Scala 2 is that we search for it through the path using
   * the created partial function.
   */
  private def interpolatorMemberArg(
      lit: Literal,
      parent: Tree,
  ): PartialFunction[Tree, Option[Ident | Select]] =
    case tree @ Apply(
          _,
          List(Typed(expr: SeqLiteral, _)),
        ) if expr.elems.exists {
          case _: Ident => true
          case _: Select => true
          case _ => false
        } =>
      val allLiterals = parent match
        case SeqLiteral(elems, _) =>
          elems
        case _ => Nil
      expr.elems.zip(allLiterals.tail).collectFirst {
        case (i: (Ident | Select), literal) if literal == lit =>
          i
      }
  end interpolatorMemberArg

  /**
   * A completion to select type members inside string interpolators.
   *
   * Example: {{{
   *   // before
   *   s"Hello $name.len@@!"
   *   // after
   *   s"Hello ${name.length()$0}"
   * }}}
   */
  private def contributeMember(
      lit: Literal,
      path: List[Tree],
      text: String,
      cursor: SourcePosition,
      completionPos: CompletionPos,
      completions: Completions,
      areSnippetsSupported: Boolean,
  )(using Context): List[CompletionValue] =
    def newText(
        name: String,
        suffix: Option[String],
        identOrSelect: Ident | Select,
    ): String =
      val snippetCursor = suffixEnding(suffix, areSnippetsSupported)
      new StringBuilder()
        .append('{')
        .append(
          text.substring(identOrSelect.span.start, identOrSelect.span.end)
        )
        .append('.')
        .append(name.backticked)
        .append(snippetCursor)
        .append('}')
        .toString
    end newText

    val memberCompletions = for
      parent <- path.tail.headOption.toList
      if text.charAt(lit.span.point - 1) != '}'
      identOrSelect <- path
        .collectFirst(interpolatorMemberArg(lit, parent))
        .flatten
    yield identOrSelect.symbol.info.allMembers.collect {
      case m
          if CompletionFuzzy.matches(
            completionPos.query,
            m.symbol.name.toString(),
          ) =>
        val sym = m.symbol
        val label = sym.name.decoded
        completions.completionsWithSuffix(
          sym,
          label,
          (name, sym, suffix) =>
            CompletionValue.Interpolator(
              sym,
              label,
              Some(newText(name, suffix, identOrSelect)),
              Nil,
              Some(cursor.withStart(identOrSelect.span.start).toLSP),
              // Needed for VS Code which will not show the completion otherwise
              Some(identOrSelect.show + "." + label),
            ),
        )
    }.flatten
    memberCompletions.flatten
  end contributeMember

  private def suffixEnding(
      suffix: Option[String],
      areSnippetsSupported: Boolean,
  ): String =
    suffix match
      case Some(suffix) if areSnippetsSupported && suffix == "()" =>
        suffix + "$0"
      case Some(suffix) => suffix
      case None if areSnippetsSupported => "$0"
      case _ => ""

  /**
   * contributeScope provides completions to convert a string literal into splice,
   * example `"Hello $na@@"`.
   *
   * When converting a string literal into an interpolator we need to ensure a few cases:
   *
   * - escape existing `$` characters into `$$`, which are printed as `\$\$` in order to
   *   escape the TextMate snippet syntax.
   * - wrap completed name in curly braces `s"Hello ${name}_` when the trailing character
   *   can be treated as an identifier part.
   * - insert the  leading `s` interpolator.
   * - place the cursor at the end of the completed name using TextMate `$0` snippet syntax.
   */
  private def contributeScope(
      lit: Literal,
      position: SourcePosition,
      completionPos: CompletionPos,
      interpolator: InterpolationSplice,
      indexedContext: IndexedContext,
      completions: Completions,
      areSnippetsSupported: Boolean,
      hasStringInterpolator: Boolean,
  )(using ctx: Context): List[CompletionValue] =

    val text = position.source.content().mkString
    val offset: Int = position.span.point
    val span = position.span
    val nameStart =
      span.withStart(span.start - interpolator.name.size)
    val nameRange = position.withSpan(nameStart).toLSP
    val hasClosingBrace: Boolean = text.charAt(span.point) == '}'
    val hasOpeningBrace: Boolean = text.charAt(
      span.start - interpolator.name.size - 1
    ) == '{'

    def additionalEdits(): List[l.TextEdit] =
      val interpolatorEdit =
        if !hasStringInterpolator then
          val range = lit.sourcePos.withEnd(lit.span.start).toLSP
          List(new l.TextEdit(range, "s"))
        else Nil
      val dollarEdits = for
        i <- lit.span.start to lit.span.end
        if !hasStringInterpolator &&
          text.charAt(i) == '$' && i != interpolator.dollar
      yield new l.TextEdit(lit.sourcePos.focusAt(i).toLSP, "$")
      interpolatorEdit ++ dollarEdits
    end additionalEdits

    def newText(symbolName: String, suffix: Option[String]): String =
      val out = new StringBuilder()
      val identifier = symbolName.backticked
      val symbolNeedsBraces =
        interpolator.needsBraces ||
          identifier.startsWith("`") ||
          suffix.isDefined
      if symbolNeedsBraces && !hasOpeningBrace then out.append('{')
      out.append(identifier)
      out.append(suffixEnding(suffix, areSnippetsSupported))
      if symbolNeedsBraces && !hasClosingBrace then out.append('}')
      out.toString
    end newText

    indexedContext.scopeSymbols.collect {
      case sym
          if CompletionFuzzy.matches(interpolator.name, sym.name.decoded) =>
        val label = sym.name.decoded
        completions.completionsWithSuffix(
          sym,
          label,
          (name, sym, suffix) =>
            CompletionValue.Interpolator(
              sym,
              label,
              Some(newText(name, suffix)),
              additionalEdits(),
              Some(nameRange),
              None,
            ),
        )
    }.flatten
  end contributeScope

end InterpolatorCompletions
