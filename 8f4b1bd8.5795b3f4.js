(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,j=p["".concat(l,".").concat(O)]||p[O]||s[O]||i;return n?b.a.createElement(j,c(c({ref:t},o),{},{components:n})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=O;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));var a=n(2),b=n(6),i=(n(0),n(115)),l={},c={unversionedId:"actionability",id:"actionability",isDocsHomePage:!1,title:"actionability",description:"Actionability",source:"@site/docs/actionability.md",slug:"/actionability",permalink:"/playwright-docusaurus/docs/actionability",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/actionability.md",version:"current"},r=[{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receiving events",id:"receiving-events",children:[]},{value:"Attached",id:"attached",children:[]}],o={rightToc:r};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"actionability"},"Actionability"),Object(i.b)("p",null,"Playwright does a range of actionability checks on the elements before performing certain actions. These checks ensure that action behaves as expected, for example Playwright does not click on a disabled button."),Object(i.b)("p",null,"Playwright waits until all the relevant actionability checks pass before performing an action. This means that action will fail with ",Object(i.b)("inlineCode",{parentName:"p"},"TimeoutError")," if checks do not pass within the specified ",Object(i.b)("inlineCode",{parentName:"p"},"timeout"),"."),Object(i.b)("p",null,"Some actions like ",Object(i.b)("inlineCode",{parentName:"p"},"page.click()")," support ",Object(i.b)("inlineCode",{parentName:"p"},"{force: true}")," option that disable non-essential actionability checks, for example passing ",Object(i.b)("inlineCode",{parentName:"p"},"force")," to ",Object(i.b)("inlineCode",{parentName:"p"},"click()")," method will not check that the target element actually receives click events."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Actions"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Performed checks"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"check()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"click()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"dblclick()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"uncheck()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"hover()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#receiving-events",title:"Receiving Events"}),"Receiving Events"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fill()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#enabled",title:"Enabled"}),"Enabled"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#editable",title:"Editable"}),"Editable"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"dispatchEvent()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"focus()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"press()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"setInputFiles()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"selectOption()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"type()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"scrollIntoViewIfNeeded()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"screenshot()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#stable",title:"Stable"}),"Stable"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"selectText()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#visible",title:"Visible"}),"Visible"),Object(i.b)("br",null),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"getAttribute()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"innerText()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"innerHTML()"),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"textContent()")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#attached",title:"Attached"}),"Attached"))))),Object(i.b)("h3",{id:"visible"},"Visible"),Object(i.b)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",Object(i.b)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",Object(i.b)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),Object(i.b)("h3",{id:"stable"},"Stable"),Object(i.b)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),Object(i.b)("h3",{id:"enabled"},"Enabled"),Object(i.b)("p",null,"Element is considered enabled when it is not a ",Object(i.b)("inlineCode",{parentName:"p"},"<button>"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<select>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," with a ",Object(i.b)("inlineCode",{parentName:"p"},"disabled")," property set."),Object(i.b)("h3",{id:"editable"},"Editable"),Object(i.b)("p",null,"Element is considered editable when it does not have ",Object(i.b)("inlineCode",{parentName:"p"},"readonly")," property set."),Object(i.b)("h3",{id:"receiving-events"},"Receiving events"),Object(i.b)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",Object(i.b)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",Object(i.b)("inlineCode",{parentName:"p"},"(10;10)"),"."),Object(i.b)("h3",{id:"attached"},"Attached"),Object(i.b)("p",null,"Element is considered attached when it is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"}),"connected")," to a Document or a ShadowRoot."),Object(i.b)("p",null,"Attached check differs between selector-based and handle-based actions, like ",Object(i.b)("inlineCode",{parentName:"p"},"page.click(selector, options)")," as opposite to ",Object(i.b)("inlineCode",{parentName:"p"},"elementHandle.click(options)"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For selector-based actions, Playwright first waits for an element matching ",Object(i.b)("inlineCode",{parentName:"li"},"selector")," to be attached to the DOM, and then checks that element is still attached before performing the action. If element was detached, the action is retried from the start."),Object(i.b)("li",{parentName:"ul"},"For handle-based actions, Playwright throws if the element is not attached.")),Object(i.b)("p",null,"For example, consider a scenario where Playwright will click ",Object(i.b)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",Object(i.b)("inlineCode",{parentName:"p"},"page.click()")," call was made:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"page is checking that user name is unique and ",Object(i.b)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),Object(i.b)("li",{parentName:"ul"},"after checking with the server, the disabled ",Object(i.b)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}d.isMDXComponent=!0}}]);