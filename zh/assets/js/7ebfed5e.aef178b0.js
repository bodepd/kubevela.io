(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[50060],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32402:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"\u8c03\u6574\u526f\u672c\u6570\u91cf",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u5982\u4f55\u8fdb\u884c\u5e94\u7528\u526f\u672c\u6570\u91cf\u7684\u8bbe\u7f6e\u548c\u8c03\u8282\u3002"},o={unversionedId:"deliver-app/scaler",id:"deliver-app/scaler",isDocsHomePage:!1,title:"\u8c03\u6574\u526f\u672c\u6570\u91cf",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u5982\u4f55\u8fdb\u884c\u5e94\u7528\u526f\u672c\u6570\u91cf\u7684\u8bbe\u7f6e\u548c\u8c03\u8282\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deliver-app/scaler.md",sourceDirName:"deliver-app",slug:"/deliver-app/scaler",permalink:"/zh/docs/next/deliver-app/scaler",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/scaler.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1642055446,formattedLastUpdatedAt:"2022/1/13",frontMatter:{title:"\u8c03\u6574\u526f\u672c\u6570\u91cf",description:"\u672c\u6587\u4ecb\u7ecd KubeVela \u5982\u4f55\u8fdb\u884c\u5e94\u7528\u526f\u672c\u6570\u91cf\u7684\u8bbe\u7f6e\u548c\u8c03\u8282\u3002"},sidebar:"docs",previous:{title:"GitOps \u4ea4\u4ed8",permalink:"/zh/docs/next/case-studies/gitops"},next:{title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",permalink:"/zh/docs/next/deliver-app/workflows"}},p=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u4f7f\u7528\u8fd0\u7ef4\u7279\u5f81",id:"\u4f7f\u7528\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u76f4\u63a5\u7f16\u8f91\u5e94\u7528\u90e8\u7f72\u53c2\u6570",id:"\u76f4\u63a5\u7f16\u8f91\u5e94\u7528\u90e8\u7f72\u53c2\u6570",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:p};function u(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u5c0f\u8282\u4f1a\u4ecb\u7ecd\uff0c\u57fa\u4e8e KubeVela \u624b\u52a8\u8c03\u6574\u5e94\u7528\u7684\u526f\u672c\u6570\u91cf\u3002"),(0,i.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5df2\u53c2\u8003\u4e4b\u524d\u7684\u6587\u6863\u5b8c\u6210\u4e86\u81f3\u5c11\u4e00\u79cd\u7c7b\u578b\u7684\u5e94\u7528\u4ea4\u4ed8\u90e8\u7f72\u3002")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u8fd0\u7ef4\u7279\u5f81"},"\u4f7f\u7528\u8fd0\u7ef4\u7279\u5f81"),(0,i.kt)("p",null,"KubeVela \u9ed8\u8ba4\u5185\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"scaler")," \u8fd0\u7ef4\u7279\u5f81\uff0c\u8be5\u7279\u5f81\u652f\u6301\u5e38\u89c4\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b\u5e94\u7528\u7684\u526f\u672c\u6570\u8c03\u6574\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"webservice")," \u7c7b\u578b\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-objects")," \u7c7b\u578b\u7684\u5e94\u7528\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"k8s-objects \u7c7b\u578b\u7684\u5e94\u7528\uff0c\u6d89\u53ca\u591a\u4e2a\u8d44\u6e90\u65f6\u8bf7\u5c06 Deployment\u3001Statefulset\u3001Job \u7b49\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u8d44\u6e90\u7f6e\u4e8e\u7b2c\u4e00\u4e2a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"scaler")," \u8fd0\u7ef4\u7279\u5f81\u5373\u53ef\u751f\u6548\u3002")),(0,i.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528")," \u4e2d\u7684 first-vela-app \u4e3a\u4f8b\u3002\u9996\u5148\u6253\u5f00\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Baseline Config"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"Properties")," \u9875\u9762\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"app-trait-scaler",src:r(37214).Z})),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u70b9\u51fb Set Replicas \u53f3\u4fa7\u7684\u8bbe\u7f6e\uff08\u9f7f\u8f6e\uff09\u6309\u94ae\uff0c\u5c06\u5e94\u7528\u5b9e\u4f8b\u6570\u8c03\u6574\u4e3a 3\uff0c\u70b9\u51fb\u4fdd\u5b58\u540e\u6b64\u6b21\u66f4\u6539\u88ab\u6682\u5b58\u3002\u6211\u4eec\u9700\u8981\u4f7f\u5176\u5728\u67d0\u4e2a\u73af\u5883\u751f\u6548\uff0c\u9700\u8981\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," \u6309\u94ae\u6216\u65c1\u8fb9\u7684\u591a\u73af\u5883\u5de5\u4f5c\u6d41\u9009\u62e9\u6309\u94ae\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u73af\u5883\u6267\u884c\u90e8\u7f72\u5373\u53ef\u3002\u90e8\u7f72\u5b8c\u6210\u540e\u53ef\u8fdb\u5165\u73af\u5883\u5b9e\u4f8b\u67e5\u8be2\u9875\u9762\u67e5\u770b\u5230\u5b9e\u4f8b\u5217\u8868\u4e2d\u5df2\u7ecf\u51fa\u73b0 3 \u6761\u6570\u636e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"instance-trait-scaler",src:r(34805).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd0\u7ef4\u7279\u5f81\u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u7684\u526f\u672c\u6570\u8c03\u6574\u80fd\u529b\uff0c\u6bd4\u5982 HPA\u3002")),(0,i.kt)("h2",{id:"\u76f4\u63a5\u7f16\u8f91\u5e94\u7528\u90e8\u7f72\u53c2\u6570"},"\u76f4\u63a5\u7f16\u8f91\u5e94\u7528\u90e8\u7f72\u53c2\u6570"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 Helm \u6216\u5176\u4ed6\u81ea\u5b9a\u4e49\u7c7b\u578b\u90e8\u7f72\u7c7b\u578b\u7684\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5982\u679c\u8fd0\u7ef4\u7279\u5f81\u4e0d\u9002\u7528\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u7f16\u8f91\u90e8\u7f72\u53c2\u6570\u8fbe\u5230\u8c03\u6574\u5e94\u7528\u5b9e\u4f8b\u6570\u91cf\u7684\u6548\u679c\u3002\u6bd4\u5982 Helm \u7c7b\u5e94\u7528\uff0c\u4e00\u822c Chart \u5305\u5728\u8bbe\u8ba1\u65f6\u90fd\u63d0\u4f9b\u4e86\u526f\u672c\u6570\u8bbe\u7f6e\u7684\u53c2\u6570\uff0c\u901a\u8fc7\u8bbe\u7f6e Values \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u4ee5 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/apache"},"apache chart")," \u4e3a\u4f8b\uff0c \u5728 Values \u4e2d\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"replicaCount=3")," \u5373\u53ef\u8c03\u6574\u526f\u672c\u6570\u91cf\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../platform-engineers/traits/customize-trait"},"\u5b9a\u4e49\u7b26\u5408\u4f01\u4e1a\u9700\u6c42\u7684\u526f\u672c\u6570\u8c03\u6574\u8fd0\u7ef4\u7279\u5f81"))))}u.isMDXComponent=!0},37214:function(e,t,r){"use strict";t.Z=r.p+"assets/images/app-scaler-88d46ea79d4db878b6a6e787d79b63ac.jpg"},34805:function(e,t,r){"use strict";t.Z=r.p+"assets/images/instance-trait-scaler-3f5c69977e4d301055a6c8d1c0c3f541.jpg"}}]);