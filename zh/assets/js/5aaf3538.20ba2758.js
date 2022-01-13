(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[51195],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71866:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o={title:"Jenkins CI/CD"},p={unversionedId:"case-studies/jenkins-cicd",id:"case-studies/jenkins-cicd",isDocsHomePage:!1,title:"Jenkins CI/CD",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u540c\u5df2\u6709\u7684 CI/CD \u5de5\u5177\uff08\u6bd4\u5982 Jenkins\uff09\u5171\u540c\u534f\u4f5c\u6765\u8fdb\u884c\u5e94\u7528\u7684\u6301\u7eed\u4ea4\u4ed8\uff0c\u5e76\u89e3\u91ca\u8fd9\u6837\u96c6\u6210\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/case-studies/jenkins-cicd.md",sourceDirName:"case-studies",slug:"/case-studies/jenkins-cicd",permalink:"/zh/docs/next/case-studies/jenkins-cicd",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/jenkins-cicd.md",version:"current",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1631664450,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"Jenkins CI/CD"},sidebar:"docs",previous:{title:"\u7ba1\u7406\u5e94\u7528\u5de5\u4f5c\u6d41",permalink:"/zh/docs/next/deliver-app/workflows"},next:{title:"GitOps \u4ea4\u4ed8",permalink:"/zh/docs/next/case-studies/gitops"}},l=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u5bf9\u63a5 Jenkins \u4e0e KubeVela apiserver",id:"\u5bf9\u63a5-jenkins-\u4e0e-kubevela-apiserver",children:[]},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[]}],s={toc:l};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u540c\u5df2\u6709\u7684 CI/CD \u5de5\u5177\uff08\u6bd4\u5982 Jenkins\uff09\u5171\u540c\u534f\u4f5c\u6765\u8fdb\u884c\u5e94\u7528\u7684\u6301\u7eed\u4ea4\u4ed8\uff0c\u5e76\u89e3\u91ca\u8fd9\u6837\u96c6\u6210\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u666e\u9002\u7684\u5e94\u7528\u4ea4\u4ed8\u63a7\u5236\u5e73\u9762\uff0c\u53ea\u9700\u8981\u4e00\u70b9\u70b9\u96c6\u6210\u5de5\u4f5c\u5c31\u53ef\u4ee5\u540c\u4efb\u4f55\u73b0\u6709\u7684 CI/CD \u7cfb\u7edf\u5bf9\u63a5\u8d77\u6765\uff0c\u5e76\u4e14\u4e3a\u5b83\u4eec\u5e26\u6765\u4e00\u7cfb\u5217\u73b0\u4ee3\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u7684\u80fd\u529b\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6df7\u5408\u4e91/\u591a\u4e91\u5e94\u7528\u4ea4\u4ed8\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u8de8\u73af\u5883\u53d1\u5e03\uff08Promotion\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Service Mesh \u7684\u53d1\u5e03\u4e0e\u56de\u6eda\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u5404\u79cd\u4f9d\u8d56\u5173\u7cfb\u548c\u62d3\u6251\u7ed3\u6784\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8fdb\u884c\u4e91\u670d\u52a1\u7684\u58f0\u660e\u3001\u90e8\u7f72\u548c\u670d\u52a1\u7ed1\u5b9a\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u5f3a\u8feb\u4f60\u7684\u56e2\u961f\u91c7\u7eb3\u5b8c\u6574\u7684 GitOps \u534f\u4f5c\u65b9\u5f0f\u5373\u53ef\u4eab\u53d7 GitOps \u6280\u672f\u672c\u8eab\u7684",(0,i.kt)("a",{parentName:"li",href:"https://www.weave.works/blog/what-is-gitops-really"},"\u4e00\u7cfb\u5217\u597d\u5904"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u2026\u2026 \u4ee5\u53ca\u66f4\u591a\u3002")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u672c\u6587\u5c06\u4f1a\u4ee5\u4e00\u4e2a HTTP \u670d\u52a1\u7684\u5f00\u53d1\u90e8\u7f72\u4e3a\u4f8b\uff0c\u4ecb\u7ecd KubeVela + Jenkins \u65b9\u5f0f\u4e0b\u5e94\u7528\u7684\u6301\u7eed\u96c6\u6210\u4e0e\u6301\u7eed\u4ea4\u4ed8\u6b65\u9aa4\u3002\u8fd9\u4e2a\u5e94\u7528\u7684\u5177\u4f53\u4ee3\u7801\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Somefive/KubeVela-demo-CICD-app"},"\u8fd9\u4e2a GitHub \u5e93\u4e2d"),"\u3002"),(0,i.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u5728\u5bf9\u63a5\u4e4b\u524d\uff0c\u7528\u6237\u9996\u5148\u9700\u8981\u786e\u4fdd\u4ee5\u4e0b\u73af\u5883\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5df2\u90e8\u7f72\u597d Jenkins \u670d\u52a1\u5e76\u914d\u7f6e\u4e86 Docker \u5728 Jenkins \u4e2d\u7684\u73af\u5883\uff0c\u5305\u62ec\u76f8\u5173\u63d2\u4ef6\u53ca\u955c\u50cf\u4ed3\u5e93\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5df2\u914d\u7f6e\u597d\u7684 Git \u4ed3\u5e93\u5e76\u5f00\u542f Webhook\u3002\u786e\u4fdd Git \u4ed3\u5e93\u5bf9\u5e94\u5206\u652f\u7684\u53d8\u5316\u80fd\u591f\u901a\u8fc7 Webhook \u89e6\u53d1 Jenkins \u6d41\u6c34\u7ebf\u7684\u8fd0\u884c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u51c6\u5907\u597d\u9700\u8981\u90e8\u7f72\u7684 Kubernetes \u96c6\u7fa4\u73af\u5883\uff0c\u5e76\u5728\u73af\u5883\u4e2d\u5b89\u88c5 KubeVela \u57fa\u7840\u7ec4\u4ef6\u53ca apiserver\uff0c\u786e\u4fdd KubeVela apiserver \u80fd\u591f\u4ece\u516c\u7f51\u8bbf\u95ee\u5230\u3002")),(0,i.kt)("h2",{id:"\u5bf9\u63a5-jenkins-\u4e0e-kubevela-apiserver"},"\u5bf9\u63a5 Jenkins \u4e0e KubeVela apiserver"),(0,i.kt)("p",null,"\u5728 Jenkins \u4e2d\u4ee5\u4e0b\u9762\u7684 Groovy \u811a\u672c\u4e3a\u4f8b\u8bbe\u7f6e\u90e8\u7f72\u6d41\u6c34\u7ebf\u3002\u53ef\u4ee5\u5c06\u6d41\u6c34\u7ebf\u4e2d\u7684 Git \u5730\u5740\u3001\u955c\u50cf\u5730\u5740\u3001apiserver \u7684\u5730\u5740\u3001\u5e94\u7528\u547d\u540d\u7a7a\u95f4\u53ca\u5e94\u7528\u66ff\u6362\u6210\u81ea\u5df1\u7684\u914d\u7f6e\uff0c\u540c\u65f6\u5728\u81ea\u5df1\u7684\u4ee3\u7801\u4ed3\u5e93\u4e2d\u5b58\u653e Dockerfile \u53ca app.yaml\uff0c\u7528\u6765\u6784\u5efa\u53ca\u90e8\u7f72 KubeVela \u5e94\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n    agent any\n    environment {\n        GIT_BRANCH = 'prod'\n        GIT_URL = 'https://github.com/Somefive/KubeVela-demo-CICD-app.git'\n        DOCKER_REGISTRY = 'https://registry.hub.docker.com'\n        DOCKER_CREDENTIAL = 'DockerHubCredential'\n        DOCKER_IMAGE = 'somefive/kubevela-demo-cicd-app'\n        APISERVER_URL = 'http://47.88.24.19'\n        APPLICATION_YAML = 'app.yaml'\n        APPLICATION_NAMESPACE = 'kubevela-demo-namespace'\n        APPLICATION_NAME = 'cicd-demo-app'\n    }\n    stages {\n        stage('Prepare') {\n            steps {\n                script {\n                    def checkout = git branch: env.GIT_BRANCH, url: env.GIT_URL\n                    env.GIT_COMMIT = checkout.GIT_COMMIT\n                    env.GIT_BRANCH = checkout.GIT_BRANCH\n                    echo \"env.GIT_BRANCH=${env.GIT_BRANCH},env.GIT_COMMIT=${env.GIT_COMMIT}\"\n                }\n            }\n        }\n        stage('Build') {\n            steps {\n                script {\n                    docker.withRegistry(env.DOCKER_REGISTRY, env.DOCKER_CREDENTIAL) {\n                        def customImage = docker.build(env.DOCKER_IMAGE)\n                        customImage.push()\n                    }\n                }\n            }\n        }\n        stage('Deploy') {\n            steps {\n                sh 'wget -q \"https://github.com/mikefarah/yq/releases/download/v4.12.1/yq_linux_amd64\"'\n                sh 'chmod +x yq_linux_amd64'\n                script {\n                    def app = sh (\n                        script: \"./yq_linux_amd64 eval -o=json '.spec' ${env.APPLICATION_YAML} | sed -e 's/GIT_COMMIT/$GIT_COMMIT/g'\",\n                        returnStdout: true\n                    )\n                    echo \"app: ${app}\"\n                    def response = httpRequest acceptType: 'APPLICATION_JSON', contentType: 'APPLICATION_JSON', httpMode: 'POST', requestBody: app, url: \"${env.APISERVER_URL}/v1/namespaces/${env.APPLICATION_NAMESPACE}/applications/${env.APPLICATION_NAME}\"\n                    println('Status: '+response.status)\n                    println('Response: '+response.content)\n                }\n            }\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\u4e4b\u540e\u5411\u6d41\u6c34\u7ebf\u4e2d\u4f7f\u7528\u7684 Git \u4ed3\u5e93\u7684\u5206\u652f\u63a8\u9001\u4ee3\u7801\u53d8\u66f4\uff0cGit \u4ed3\u5e93\u7684 Webhook \u4f1a\u89e6\u53d1 Jenkins \u4e2d\u65b0\u521b\u5efa\u7684\u6d41\u6c34\u7ebf\u3002\u8be5\u6d41\u6c34\u7ebf\u4f1a\u81ea\u52a8\u6784\u5efa\u4ee3\u7801\u955c\u50cf\u5e76\u63a8\u9001\u81f3\u955c\u50cf\u4ed3\u5e93\uff0c\u7136\u540e\u5bf9 KubeVela apiserver \u53d1\u9001 POST \u8bf7\u6c42\uff0c\u5c06\u4ed3\u5e93\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u6587\u4ef6\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u4e2d\u3002\u5176\u4e2d app.yaml \u53ef\u4ee5\u53c2\u7167\u4ee5\u4e0b\u6837\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: kubevela-demo-app\nspec:\n  components:\n    - name: kubevela-demo-app-web\n      type: webservice\n      properties:\n        image: somefive/kubevela-demo-cicd-app\n        imagePullPolicy: Always\n        port: 8080\n      traits:\n        - type: rollout\n          properties:\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\n            batchPartition: 0\n            targetSize: 5\n        - type: labels\n          properties:\n            jenkins-build-commit: GIT_COMMIT\n        - type: ingress\n          properties:\n            domain: <your domain>\n            http:\n              "/": 8088\n')),(0,i.kt)("p",null,"\u5176\u4e2d GIT_COMMIT \u4f1a\u5728 Jenkins \u6d41\u6c34\u7ebf\u4e2d\u88ab\u66ff\u6362\u4e3a\u5f53\u524d\u7684 git commit id\u3002\u8fd9\u65f6\u53ef\u4ee5\u901a\u8fc7 kubectl \u547d\u4ee4\u67e5\u770b Kubernetes \u96c6\u7fa4\u4e2d\u5e94\u7528\u7684\u90e8\u7f72\u60c5\u51b5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get app -n kubevela-demo-namespace   \nNAME            COMPONENT               TYPE         PHASE     HEALTHY   STATUS   AGE\ncicd-demo-app   kubevela-demo-app-web   webservice   running   true               102s\n$ kubectl get deployment -n kubevela-demo-namespace\nNAME                       READY   UP-TO-DATE   AVAILABLE   AGE\nkubevela-demo-app-web-v1   2/2     2            2           111s\n$ kubectl get ingress -n kubevela-demo-namespace \nNAME                    CLASS    HOSTS                                                                                 ADDRESS          PORTS   AGE\nkubevela-demo-app-web   <none>   <your domain>   198.11.175.125   80      117s\n")),(0,i.kt)("p",null,"\u5728\u90e8\u7f72\u7684\u5e94\u7528\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u7070\u5ea6\u53d1\u5e03(Rollout)\u7684\u7279\u6027\uff0c\u5e94\u7528\u521d\u59cb\u53d1\u5e03\u5148\u521b\u5efa 2 \u4e2a Pod\uff0c\u4ee5\u4fbf\u8fdb\u884c\u91d1\u4e1d\u96c0\u9a8c\u8bc1\u3002\u5f85\u9a8c\u8bc1\u5b8c\u6bd5\uff0c\u4f60\u53ef\u4ee5\u5c06\u5e94\u7528\u914d\u7f6e\u4e2d Rollout \u7279\u6027\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"batchPatition: 0")," \u5220\u53bb\uff0c\u4ee5\u4fbf\u5b8c\u6210\u5269\u4f59\u5b9e\u4f8b\u7684\u66f4\u65b0\u53d1\u5e03\u3002\u8fd9\u4e2a\u673a\u5236\u5927\u5927\u63d0\u9ad8\u53d1\u5e03\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u9700\u8981\uff0c\u8c03\u6574 Rollout \u53d1\u5e03\u7b56\u7565\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl edit app -n kubevela-demo-namespace   \napplication.core.oam.dev/cicd-demo-app edited\n$ kubectl get deployment -n kubevela-demo-namespace\nNAME                       READY   UP-TO-DATE   AVAILABLE   AGE\nkubevela-demo-app-web-v1   5/5     5            5           4m16s\n$ curl http://<your domain>/\nVersion: 0.1.2\n")),(0,i.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,i.kt)("p",null,"\u8be6\u7ec6\u7684\u73af\u5883\u90e8\u7f72\u6d41\u7a0b\u4ee5\u53ca\u66f4\u52a0\u5b8c\u6574\u7684\u5e94\u7528\u6eda\u52a8\u66f4\u65b0\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/09/02/kubevela-jenkins-cicd"},"\u535a\u5ba2"),"\u3002"))}c.isMDXComponent=!0}}]);