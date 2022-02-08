"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4408],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=l.createContext({}),p=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),h=p(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return a?l.createElement(d,r(r({ref:e},m),{},{components:a})):l.createElement(d,r({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9048:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,assets:()=>m,toc:()=>c,default:()=>u});var l=a(7462),n=a(3366),i=(a(7294),a(3905)),r=["components"],o={author:"Tomasz Godzik",title:"Metals v0.9.6 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s=void 0,p={permalink:"/metals/blog/2020/11/20/lithium",source:"@site/blog/2020-11-20-lithium.md",title:"Metals v0.9.6 - Lithium",description:"We're happy to announce the release of Metals v0.9.6, which mostly concentrates",date:"2020-11-20T00:00:00.000Z",formattedDate:"November 20, 2020",tags:[],readingTime:3.625,truncated:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.9.6 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.9.7 - Lithium",permalink:"/metals/blog/2020/11/26/lithium"},nextItem:{title:"Metals v0.9.5 - Lithium",permalink:"/metals/blog/2020/11/10/lithium"}},m={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Show implicit conversions and classes",id:"show-implicit-conversions-and-classes",children:[],level:2},{value:"Navigating stacktrace",id:"navigating-stacktrace",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2},{value:"Merged PRs",id:"merged-prs",children:[],level:2},{value:"v0.9.6 (2020-11-20)",id:"v096-2020-11-20",children:[],level:2}],h={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,r);return(0,i.kt)("wrapper",(0,l.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're happy to announce the release of Metals v0.9.6, which mostly concentrates\non adding support for the newly released Scala 2.13.4, but also adds some\nimprovements for already existing features."),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Commits since last release"),(0,i.kt)("td",{align:"center"},"59")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Merged PRs"),(0,i.kt)("td",{align:"center"},"31")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Contributors"),(0,i.kt)("td",{align:"center"},"4")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Closed issues"),(0,i.kt)("td",{align:"center"},"2")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"New features"),(0,i.kt)("td",{align:"center"},"2")))),(0,i.kt)("p",null,"For full details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/29?closed=1"},"https://github.com/scalameta/metals/milestone/29?closed=1")),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,i.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scala 2.13.4 support."),(0,i.kt)("li",{parentName:"ul"},"Show implicit conversions and classes."),(0,i.kt)("li",{parentName:"ul"},"Navigating stacktrace in debug console."),(0,i.kt)("li",{parentName:"ul"},"New troubleshooting page.")),(0,i.kt)("h2",{id:"show-implicit-conversions-and-classes"},"Show implicit conversions and classes"),(0,i.kt)("p",null,"Last\n",(0,i.kt)("a",{parentName:"p",href:"/metals/blog/2020/11/10/lithium#show-implicits-and-type-decorations"},"release"),"\nintroduced the option to display additional data inferred from the code to a\nuser. Starting with this release it's also possible to show implicit conversions\nand classes, which can be enabled by the additional\n",(0,i.kt)("inlineCode",{parentName:"p"},"showImplicitConversionsAndClasses")," setting. Moreover, Visual Studio Code\nextension has 3 new commands to toggle all these new options, which enables\nusers to quickly peek at the additional information about their code and then\nturn it back off. All these commands can be bound to a shortcut to further\nimprove the user experience."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/k6GRgue.gif",alt:"implicits"})),(0,i.kt)("p",null,"Any editor that allows for quickly changing these settings will also benefit\nfrom this change, as the file's decorations are refreshed instantly upon\nchanging any of those settings."),(0,i.kt)("h2",{id:"navigating-stacktrace"},"Navigating stacktrace"),(0,i.kt)("p",null,"Previously, it was possible to navigate a stacktrace using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Analyze stacktrace")," command which was added in the\n",(0,i.kt)("a",{parentName:"p",href:"/metals/blog/2020/09/21/lithium#analyze-stacktrace-command"},"v0.9.4"),"\nrelease. It turns out, we can reuse the same mechanism to show file links in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Debug Console")," in Visual Studio code:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qeitymN.gif",alt:"navigate-stacktrace"})),(0,i.kt)("p",null,"This was achieved by adding additional information to the output already sent to\nthe editor, so this additional file links should also be reused by any other DAP\nclients."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"As an addition to these new features, we've also recently added a new\n",(0,i.kt)("a",{parentName:"p",href:"/metals/docs/troubleshooting/faq"},"troubleshooting page")," that should answer\nthe most basic questions you can have. As the page is fairly new we would appreciate\nany help in improving it so let us know if you feel anything is missing."),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix continuous compilation when opening tree view in sbt BSP"),(0,i.kt)("li",{parentName:"ul"},"Add 0.27.0-RC1 back to supported versions")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.9.5..v0.9.6\nTomasz Godzik\nScala Steward\nChris Kipp\nGabriele Petronella\nKrzysiek Bochenek\ndependabot[bot]\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v096-2020-11-20"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.9.6"},"v0.9.6")," (2020-11-20)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.9.5...v0.9.6"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refresh synthetics when user settings change\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2246"},"#","2246"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalameta to 4.4.0 and add support for Scala 2.13.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2247"},"#","2247"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add source and line to debug output in case of stack traces\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2243"},"#","2243"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix continuous compilation when opening tree view in sbt BSP\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2242"},"#","2242"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Add option to show implicit conversions as decorations\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2232"},"#","2232"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Bump olafurpg/setup-gpg from v2 to v3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2240"},"#","2240"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dependabot%5Bbot%5D"},"dependabot[bot]"),")"),(0,i.kt)("li",{parentName:"ul"},"Move dependabot config file to right location\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2239"},"#","2239"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,i.kt)("li",{parentName:"ul"},"Configure dependabot to update github-actions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2237"},"#","2237"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,i.kt)("li",{parentName:"ul"},"Reorganize docs and add in FAQ.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2234"},"#","2234"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scribe, scribe-slf4j to 3.0.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2222"},"#","2222"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update org.eclipse.lsp4j, ... to 0.10.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2230"},"#","2230"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,i.kt)("li",{parentName:"ul"},"Update munit-docs, sbt-munit to 0.7.17\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2231"},"#","2231"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-ci-release to 1.5.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2221"},"#","2221"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.5-6-4768184c\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2220"},"#","2220"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-dotty to 0.4.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2219"},"#","2219"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update coursier to 2.0.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2223"},"#","2223"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update munit to 0.7.17 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2228"},"#","2228"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update mdoc-interfaces to 2.2.12\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2227"},"#","2227"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update mdoc, sbt-mdoc to 2.2.12\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2226"},"#","2226"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 7.2.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2225"},"#","2225"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Add 0.27.0-RC1 back to supported versions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2213"},"#","2213"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add additional newline to fix problems with markdown\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2215"},"#","2215"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add additional troubleshooting section for mirrors\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2211"},"#","2211"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add testing for DownloadDependencies\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2206"},"#","2206"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update docs to mention ",(0,i.kt)("inlineCode",{parentName:"li"},"inlineDecorationProvider"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2209"},"#","2209"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix release notes to mention emacs\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2205"},"#","2205"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix scala3Dependency for various binary scala3/dotty versions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2203"},"#","2203"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Update release docs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2199"},"#","2199"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Correct typos in blog and Doctor\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2202"},"#","2202"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Add release notes for 0.9.5\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2197"},"#","2197"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add in blog post about sbt BSP\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2193"},"#","2193"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")")))}u.isMDXComponent=!0}}]);