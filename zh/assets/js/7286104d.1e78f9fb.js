(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[29156],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,h=d["".concat(o,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27689:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"\u4ea4\u4ed8 Helm Chart",description:"\u672c\u6587\u4ecb\u7ecd\u901a\u8fc7 KubeVela \u4ea4\u4ed8 Helm Chart"},p={unversionedId:"deliver-app/helm",id:"deliver-app/helm",isDocsHomePage:!1,title:"\u4ea4\u4ed8 Helm Chart",description:"\u672c\u6587\u4ecb\u7ecd\u901a\u8fc7 KubeVela \u4ea4\u4ed8 Helm Chart",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deliver-app/helm.md",sourceDirName:"deliver-app",slug:"/deliver-app/helm",permalink:"/zh/docs/next/deliver-app/helm",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/deliver-app/helm.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1642055446,formattedLastUpdatedAt:"2022/1/13",frontMatter:{title:"\u4ea4\u4ed8 Helm Chart",description:"\u672c\u6587\u4ecb\u7ecd\u901a\u8fc7 KubeVela \u4ea4\u4ed8 Helm Chart"},sidebar:"docs",previous:{title:"\u4ea4\u4ed8 Docker \u955c\u50cf",permalink:"/zh/docs/next/deliver-app/webservice"},next:{title:"\u4ea4\u4ed8\u4e91\u670d\u52a1",permalink:"/zh/docs/next/deliver-app/consume-cloud-services"}},o=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u542f\u7528 fluxcd \u63d2\u4ef6",id:"\u542f\u7528-fluxcd-\u63d2\u4ef6",children:[]},{value:"\u901a\u8fc7 Chart \u521b\u5efa Redis \u5e94\u7528",id:"\u901a\u8fc7-chart-\u521b\u5efa-redis-\u5e94\u7528",children:[]},{value:"\u4fee\u6539\u90e8\u7f72\u53c2\u6570",id:"\u4fee\u6539\u90e8\u7f72\u53c2\u6570",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],u={toc:o};function c(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u901a\u8fc7 KubeVela \u4ea4\u4ed8 Helm Chart \u5305\u4ea4\u4ed8\u5230\u591a\u4e2a\u76ee\u6807\u73af\u5883\u548c\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 Helm Chart \u5305\u4ea4\u4ed8\u5e94\u7528\u4e3b\u8981\u7684\u5e94\u7528\u573a\u666f\u662f\u4ea4\u4ed8\u5f00\u6e90\u4e2d\u95f4\u4ef6\u5e94\u7528\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts"},"bitnami")," \u4e2d\u5305\u62ec\u4e86\u5e38\u7528\u7684\u751f\u4ea7\u53ef\u7528\u4e2d\u95f4\u4ef6\uff1b\u4ea4\u4ed8\u5f00\u6e90\u5de5\u5177\u5e94\u7528\uff0c\u6bd4\u5982 Gitlab\u3001Jenkins \u7b49\u7b49\uff0c\u8fd9\u4e9b\u5e94\u7528\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://hub.helm.sh/"},"Helm \u5b98\u65b9\u4ed3\u5e93")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u3002KubeVela \u53ef\u4ee5\u5e2e\u52a9\u4f60\u5c06\u8fd9\u4e9b\u5e94\u7528\u4fbf\u6377\u5730\u90e8\u7f72\u5230\u7ba1\u7406\u7684\u4efb\u4f55\u96c6\u7fa4\uff0c\u5e76\u7ba1\u7406\u4ed6\u4eec\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u672c\u6587\uff0c\u4f60\u5c06\u5b66\u4e60\u4f7f\u7528 KubeVela \u63d2\u4ef6\u4f53\u7cfb\u5b89\u88c5\u6269\u5c55\u63d2\u4ef6\u3002Helm Chart \u5305\u7684\u4ea4\u4ed8\u80fd\u529b\u76ee\u524d\u7531 FluxCD \u63d2\u4ef6\u652f\u6491\uff0cFluxCD \u63d2\u4ef6\u9664\u4e86\u5e26\u6765 Helm \u7c7b\u578b\u7684\u5e94\u7528\u4ea4\u4ed8\u80fd\u529b\u4ee5\u5916\u8fd8\u5e26\u6765\u4e86 Kustomize \u7684\u4ea4\u4ed8\u80fd\u529b\u3002"),(0,l.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u4e2a\u4f60\u5e0c\u671b\u4ea4\u4ed8\u7684 Chart \u5305\uff0c\u672c\u6587\u6211\u4eec\u4ee5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/bitnami/charts/tree/master/bitnami/redis"},"bitnami/redis")," \u4e3a\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u4f60\u4ea4\u4ed8\u7684\u96c6\u7fa4\u5177\u6709\u53ef\u7528\u7684\u9ed8\u8ba4 StorageClass\uff0c\u6211\u4eec\u4ea4\u4ed8\u4e2d\u95f4\u4ef6\u5927\u591a\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\uff0c\u9700\u8981\u9ed8\u8ba4\u7684 StorageClass \u6765\u5206\u914d PV\u3002")),(0,l.kt)("h2",{id:"\u542f\u7528-fluxcd-\u63d2\u4ef6"},"\u542f\u7528 fluxcd \u63d2\u4ef6"),(0,l.kt)("p",null,"\u63d2\u4ef6\u7684\u542f\u7528\u4f60\u5728 KubeVela \u7684\u5b89\u88c5\u8fc7\u7a0b\u5e94\u8be5\u5df2\u7ecf\u4f53\u9a8c\u8fc7\uff0c\u5373\u5b89\u88c5 VelaUX \u7684\u8fc7\u7a0b\u3002\u672c\u6587\u6848\u4f8b\u6211\u4eec\u5c06\u901a\u8fc7 UI \u9875\u9762\u5b8c\u6210\u63d2\u4ef6\u7684\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"Addon")," \u9875\u9762\u4e2d\uff0c\u8be5\u9875\u9762\u6b63\u5e38\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u5217\u51fa\u53ef\u4ee5\u5b89\u88c5\u7684\u793e\u533a\u63d2\u4ef6\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u6765\u6e90\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/tree/master/addons"},"\u5b98\u65b9\u4ed3\u5e93"),"\uff0c\u6211\u4eec\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"fluxcd")," \u5373\u53ef\u67e5\u8be2\u8be5\u63d2\u4ef6\u7684\u8be6\u60c5\u548c\u542f\u7528\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u4ece\u8be6\u60c5\u4e2d\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5230\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Definitions\uff1a\u8be5\u63d2\u4ef6\u63d0\u4f9b\u7684\u6269\u5c55\u80fd\u529b\uff0c\u5b83\u53ef\u80fd\u5305\u62ec\u7ec4\u4ef6\u7c7b\u578b\u6269\u5c55\u3001\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b\u6269\u5c55\u7b49\u3002\u5bf9\u4e8e fluxcd \u63d2\u4ef6\uff0c\u5b83\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"kustomize")," \u4e24\u79cd\u7ec4\u4ef6\u7c7b\u578b\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," \u662f\u6211\u4eec\u4eca\u5929\u9700\u8981\u5173\u6ce8\u548c\u4f7f\u7528\u7684\u7c7b\u578b\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Readme\uff1a\u63d2\u4ef6\u8bf4\u660e\uff0c\u5bf9\u8be5\u63d2\u4ef6\u7684\u80fd\u529b\u548c\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u89e3\u8bfb\u8bf4\u660e\u3002"))),(0,l.kt)("p",null,"\u6211\u4eec\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Enable")," \u6309\u94ae\u5373\u53ef\uff0c fluxcd \u63d2\u4ef6\u542f\u7528\u540e\u4f1a\u5b89\u88c5\u5230\u6240\u6709\u63a5\u5165\u5230 KubeVela \u7684\u96c6\u7fa4\uff0c\u56e0\u6b64\u5176\u9700\u8981\u4e00\u5b9a\u7684\u65f6\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fluxcd addon",src:n(2785).Z})),(0,l.kt)("p",null,"\u5f53\u89c2\u5bdf\u5230\u63d2\u4ef6\u663e\u793a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"enabled")," \u72b6\u6001\uff0c\u5373\u4ee3\u8868\u63d2\u4ef6\u542f\u7528\u5df2\u7ecf\u5b8c\u6210\u3002\u53ef\u4ee5\u5f00\u59cb\u4ea4\u4ed8 Helm \u5e94\u7528\u4e86\u3002"),(0,l.kt)("h2",{id:"\u901a\u8fc7-chart-\u521b\u5efa-redis-\u5e94\u7528"},"\u901a\u8fc7 Chart \u521b\u5efa Redis \u5e94\u7528"),(0,l.kt)("p",null,"\u76f8\u4fe1\u4f60\u901a\u8fc7\u4e4b\u524d\u7684\u6587\u7ae0\uff0c\u5df2\u7ecf\u638c\u63e1\u4e86\u5e94\u7528\u7684\u521b\u5efa\u80fd\u529b\u3002\u6211\u4eec\u9700\u8981\u4f7f\u7528 Chart \u521b\u5efa Redis \u5e94\u7528\uff0c\u53ea\u9700\u8981\u9009\u62e9\u5e94\u7528\u90e8\u7f72\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"helm"),"\uff0c\u7136\u540e\u9009\u62e9\u4f60\u51c6\u5907\u597d\u7684\u5177\u6709\u9ed8\u8ba4 StorageClass \u53ef\u4ee5\u63d0\u4f9b PV \u7684\u96c6\u7fa4 Target\uff0c\u7136\u540e\u8fdb\u5165\u90e8\u7f72\u53c2\u6570\u914d\u7f6e\u9875\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"helm app config",src:n(42868).Z})),(0,l.kt)("p",null,"\u53c2\u8003\u4e0a\u56fe\uff0c\u9700\u8981\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Repo Type: \u4ed3\u5e93\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 Git\u3001Helm \u548c OSS \u4e09\u79cd\uff0c\u672c\u4f8b\u6211\u4eec\u9009\u62e9 Helm \u7c7b\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Repo URL: \u4ed3\u5e93\u5730\u5740\uff0c\u57fa\u4e8e\u4e0d\u540c\u7684\u4ed3\u5e93\u7c7b\u578b\u586b\u5199\u4ed3\u5e93\u5730\u5740\uff0c\u8fd9\u91cc\u6211\u4eec\u586b\u5199\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://charts.bitnami.com/bitnami"},"https://charts.bitnami.com/bitnami")),(0,l.kt)("li",{parentName:"ul"},"Chart Path: Chart \u5305\u8def\u5f84\uff0c\u8fd9\u91cc\u6211\u4eec\u586b\u5199: redis"),(0,l.kt)("li",{parentName:"ul"},"Values: Chart \u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u53c2\u6570\uff0c\u8fd9\u91cc\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u7684\u662f ACK \u96c6\u7fa4\uff0cPV \u6709\u6700\u5c0f\u5bb9\u91cf\u8981\u6c42\uff0c\u8fd9\u91cc\u586b\u5199 15Gi\u3002\u540c\u7406\uff0c\u5176\u4ed6\u914d\u7f6e\u53c2\u6570\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u5f0f\u8fdb\u884c\u914d\u7f6e\uff0c\u4f60\u9700\u8981\u6839\u636e\u4f60\u7684\u96c6\u7fa4\u60c5\u51b5\u8fdb\u884c\u914d\u7f6e\u3002")),(0,l.kt)("p",null,"\u5982\u4e0a\u53c2\u6570\u586b\u5199\u5b8c\u6210\u540e\uff0c\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")," \u5b8c\u6210\u5e94\u7528\u521b\u5efa\u8fdb\u5165\u5e94\u7528\u7ba1\u7406\u9875\u9762\u3002\u540e\u7eed\u7684\u90e8\u7f72\u6d41\u7a0b\u4e0e\u4f60\u5728 ",(0,l.kt)("a",{parentName:"p",href:"../quick-start"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528")," \u7684\u5b66\u4e60\u5185\u5bb9\u5c31\u4e00\u81f4\u4e86\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539\u90e8\u7f72\u53c2\u6570"},"\u4fee\u6539\u90e8\u7f72\u53c2\u6570"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u89e3\u9501\u65b0\u6280\u80fd\uff0c\u4fee\u6539\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570\u3002\u5bf9\u4e8e\u4efb\u4f55\u5e94\u7528\u7c7b\u578b\uff0c\u5b83\u90fd\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u901a\u8fc7\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Baseline Config")," \u9875\u9762\u53f3\u4e0a\u65b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit Properties")," \u6309\u94ae\u8fdb\u5165\u90e8\u7f72\u53c2\u6570\u7684\u4fee\u6539\u9875\u9762\u3002\u8be5\u9875\u9762\u4e0e\u6211\u4eec\u521b\u5efa\u5e94\u7528\u65f6\u8bbe\u7f6e\u5e94\u7528\u90e8\u7f72\u53c2\u6570\u7684\u9875\u9762\u5b8c\u5168\u4e00\u81f4\uff0c\u5b83\u662f\u7531\u6bcf\u4e00\u4e2a\u5e94\u7528\u7c7b\u578b\u7684 Definition \u5b9a\u4e49\u7684\u53c2\u6570\u7ed3\u5408 KubeVela UISchema \u89c4\u8303\u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u90e8\u7f72\u53c2\u6570\u540e\uff0c\u5fc5\u987b\u6267\u884c\u73af\u5883\u7684\u5de5\u4f5c\u6d41\u624d\u80fd\u5c06\u4fee\u6539\u540e\u7684\u53c2\u6570\u5728\u6307\u5b9a\u7684\u73af\u5883\u751f\u6548\uff0c\u7531\u4e8e\u7248\u672c\u7ba1\u7406\u7684\u673a\u5236\u5b58\u5728\uff0c\u5386\u53f2\u914d\u7f6e\u53c2\u6570\u4f1a\u5728\u7248\u672c\u4e2d\u5f97\u4ee5\u4fdd\u5b58\u3002"),(0,l.kt)("p",null,"\u5230\u6b64\uff0c\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86 Helm \u5e94\u7528\u7684\u4ea4\u4ed8\u80fd\u529b\uff0c\u5feb\u53bb\u4ea4\u4ed8\u66f4\u591a\u7684 Helm \u5e94\u7528\u5427\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./k8s-object"},"\u5b66\u4e60\u76f4\u63a5\u90e8\u7f72 Kubernetes \u539f\u751f\u8d44\u6e90"))))}c.isMDXComponent=!0},2785:function(e,t,n){"use strict";t.Z=n.p+"assets/images/addon-fluxcd-04a0b195ce4f3ea6e981bca6c8928c81.jpg"},42868:function(e,t,n){"use strict";t.Z=n.p+"assets/images/helm-app-config-91914c84d2aad9128e0d93c9cca224dd.jpg"}}]);