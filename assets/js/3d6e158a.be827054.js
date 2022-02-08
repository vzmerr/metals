"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[448],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,h=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return o?n.createElement(h,s(s({ref:t},m),{},{components:o})):n.createElement(h,s({ref:t},m))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9847:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>c,assets:()=>m,toc:()=>p,default:()=>d});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],l={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3.2 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},i=void 0,c={permalink:"/metals/blog/2018/12/14/iron",source:"@site/blog/2018-12-14-iron.md",title:"Metals v0.3.2 - Iron",description:"We are pleased to announce the release of Metals v0.3.2. Metals is a language",date:"2018-12-14T00:00:00.000Z",formattedDate:"December 14, 2018",tags:[],readingTime:1.595,truncated:!0,authors:[{name:"\xd3lafur P\xe1ll Geirsson",url:"https://twitter.com/olafurpg",imageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"}],frontMatter:{author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3.2 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},prevItem:{title:"Low-memory symbol indexing with bloom filters",permalink:"/metals/blog/2019/01/22/bloom-filters"},nextItem:{title:"Fast goto definition with low memory footprint",permalink:"/metals/blog/2018/12/12/fast-goto-definition"}},m={authorsImageUrls:[void 0]},p=[{value:"Metals server",id:"metals-server",children:[{value:"Improved sbt launcher",id:"improved-sbt-launcher",children:[],level:3},{value:"Build server discovery",id:"build-server-discovery",children:[],level:3},{value:"Blog post on fast goto definition with low memory footprint",id:"blog-post-on-fast-goto-definition-with-low-memory-footprint",children:[],level:3}],level:2},{value:"VS Code",id:"vs-code",children:[{value:"Improved Java home detection",id:"improved-java-home-detection",children:[],level:3},{value:"Outdated server version detection",id:"outdated-server-version-detection",children:[],level:3}],level:2},{value:"Sublime Text",id:"sublime-text",children:[],level:2},{value:"Emacs",id:"emacs",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are pleased to announce the release of Metals v0.3.2. Metals is a language\nserver for Scala that works with VS Code, Atom, Vim, Sublime Text and Emacs.\nMetals is developed at the ",(0,a.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," with\ncontributors from the community."),(0,a.kt)("h2",{id:"metals-server"},"Metals server"),(0,a.kt)("p",null,"Full details: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/3?closed=1"},"https://github.com/scalameta/metals/milestone/3?closed=1")),(0,a.kt)("p",null,"In this release we closed 7 issues and merged 17 PRs."),(0,a.kt)("h3",{id:"improved-sbt-launcher"},"Improved sbt launcher"),(0,a.kt)("p",null,"Metals now respects ",(0,a.kt)("inlineCode",{parentName:"p"},".sbtopts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".jvmopts")," when running ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt bloopInstall"),'.\nIf you need further customization like reading environment variables, then you\ncan configure the "Sbt Script" setting (',(0,a.kt)("inlineCode",{parentName:"p"},"-Dmetals.sbt-script=/path/to/sbt"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/50009698-e4f29000-ffb7-11e8-8d05-acb11f575748.png",alt:"sbt script"})),(0,a.kt)("h3",{id:"build-server-discovery"},"Build server discovery"),(0,a.kt)("p",null,"Metals now works with any build tool that implements\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/bsp/blob/master/docs/bsp.md#bsp-connection-protocol"},'"BSP Connection Protocol"'),".\nSee the Metals docs for more information:\n",(0,a.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/integrations/new-build-tool#custom-build-server"},"https://scalameta.org/metals/docs/integrations/new-build-tool#custom-build-server")),(0,a.kt)("h3",{id:"blog-post-on-fast-goto-definition-with-low-memory-footprint"},"Blog post on fast goto definition with low memory footprint"),(0,a.kt)("p",null,"New blog post on how Metals implements Goto Definition:\n",(0,a.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/blog/2018/12/12/fast-goto-definition.html"},"https://scalameta.org/metals/blog/2018/12/12/fast-goto-definition.html")),(0,a.kt)("h2",{id:"vs-code"},"VS Code"),(0,a.kt)("p",null,"Release notes: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-vscode/releases/tag/v1.1.0"},"https://github.com/scalameta/metals-vscode/releases/tag/v1.1.0")),(0,a.kt)("h3",{id:"improved-java-home-detection"},"Improved Java home detection"),(0,a.kt)("p",null,"The extension now automatically detects a Java 8 home directory even if Java 11\nis installed on the computer. Also, the extension now works for ",(0,a.kt)("inlineCode",{parentName:"p"},"jenv")," users."),(0,a.kt)("h3",{id:"outdated-server-version-detection"},"Outdated server version detection"),(0,a.kt)("p",null,'The extension now automatically detects when you have a custom "Server Version"\nsetting with an outdated version.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/50012764-cdb7a080-ffbf-11e8-9549-82ec6c216376.jpg",alt:"Reload Window"})),(0,a.kt)("h2",{id:"sublime-text"},"Sublime Text"),(0,a.kt)("p",null,"The Metals process now exits when Sublime Text quits so that you no longer end\nup with zombie ",(0,a.kt)("inlineCode",{parentName:"p"},"metals-sublime")," processes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ayoub-benali"},"@ayoub-benali")," has contributed several\nimprovements to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tomv564/LSP"},"tomv564/LSP")," to improve the\nexperience of using Metals with Sublime Text."),(0,a.kt)("p",null,"Watch the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-sublime/"},"scalameta/metals-sublime"),"\nrepository for updates on further improvements to the Sublime Text integration."),(0,a.kt)("h2",{id:"emacs"},"Emacs"),(0,a.kt)("p",null,"The website now documents the installation steps for Emacs:\n",(0,a.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/editors/emacs.html"},"https://scalameta.org/metals/docs/editors/emacs.html")),(0,a.kt)("p",null,"Note that the Emacs LSP client has several known issues so the experience is not\nas good as it could be."),(0,a.kt)("h2",{id:"contributors"},"Contributors"),(0,a.kt)("p",null,"Big thanks to all contributors who reported issues, reviewed PRs and contributed\ncode!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git shortlog -sn --no-merges v0.3.1..v0.3.2\n\xd3lafur P\xe1ll Geirsson\nGabriele Petronella\nChris\nJakub Koz\u0142owski\n")))}d.isMDXComponent=!0}}]);