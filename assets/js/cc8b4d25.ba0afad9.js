(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[46139],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return f}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,o(o({ref:e},p),{},{components:r})):a.createElement(m,o({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35567:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o={title:"Manage Traits",description:"Manage traits for application"},l={unversionedId:"how-to/dashboard/trait/overview",id:"how-to/dashboard/trait/overview",isDocsHomePage:!1,title:"Manage Traits",description:"Manage traits for application",source:"@site/docs/how-to/dashboard/trait/overview.md",sourceDirName:"how-to/dashboard/trait",slug:"/how-to/dashboard/trait/overview",permalink:"/docs/next/how-to/dashboard/trait/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/trait/overview.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642586648,formattedLastUpdatedAt:"1/19/2022",frontMatter:{title:"Manage Traits",description:"Manage traits for application"},sidebar:"docs",previous:{title:"Delete Application",permalink:"/docs/next/how-to/dashboard/application/delete-application"},next:{title:"Integrate with CI system by Triggers",permalink:"/docs/next/how-to/dashboard/trigger/overview"}},c=[{value:"Bind new traits",id:"bind-new-traits",children:[]},{value:"Update traits",id:"update-traits",children:[]},{value:"Delete traits",id:"delete-traits",children:[]},{value:"More",id:"more",children:[]}],s={toc:c};function p(t){var e=t.components,o=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After deploying an application, VelaUX will automatically bind a ",(0,i.kt)("inlineCode",{parentName:"p"},"scaler")," trait to the application. You can update, delete or bind other traits in the dashboard."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"trait-list",src:r(26350).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: You need to re-deploy the application after updating traits.")),(0,i.kt)("h2",{id:"bind-new-traits"},"Bind new traits"),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Trait")," to bind traits for the application."),(0,i.kt)("p",null,"You can select different type of traits. In addition, addons can be enabled to enable more traits."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"new-trait",src:r(40453).Z})),(0,i.kt)("h2",{id:"update-traits"},"Update traits"),(0,i.kt)("p",null,"Click the gear icon to enter the edit page of the trait. You can set the number of replicas to 5:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit-trait",src:r(56503).Z})),(0,i.kt)("h2",{id:"delete-traits"},"Delete traits"),(0,i.kt)("p",null,"Click the trash icon to delete the trait."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delete-trait",src:r(87563).Z})),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("p",null,"For more information about all traits, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../../../end-user/traits/scaler"},"Traits"),"."))}p.isMDXComponent=!0},87563:function(t,e,r){"use strict";e.Z=r.p+"assets/images/delete-trait-72df2c0c6e790a041907e45e7ee550c6.png"},56503:function(t,e,r){"use strict";e.Z=r.p+"assets/images/edit-trait-b0f474f3729b3c997405fa10562f9ff8.png"},40453:function(t,e,r){"use strict";e.Z=r.p+"assets/images/new-trait-2eadc8a8e8c7988a39a6d67a797ff744.png"},26350:function(t,e,r){"use strict";e.Z=r.p+"assets/images/trait-list-19a8fc29f12ee365eed051bd0b4505aa.png"}}]);