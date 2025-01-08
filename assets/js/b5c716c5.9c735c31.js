"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[279],{4791:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const r={title:"Web Fuzzing",sidebar_position:5},l=void 0,o={id:"web-exploitation/web-fuzzing",title:"Web Fuzzing",description:"Introduction to FFUF",source:"@site/modules/07-web-exploitation/web-fuzzing.mdx",sourceDirName:"07-web-exploitation",slug:"/web-exploitation/web-fuzzing",permalink:"/learn/modules/web-exploitation/web-fuzzing",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/modules/07-web-exploitation/web-fuzzing.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Web Fuzzing",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hypertext Transfer Protocol",permalink:"/learn/modules/web-exploitation/http"},next:{title:"SQL Injection",permalink:"/learn/modules/web-exploitation/sql-injection"}},a={},d=[{value:"Introduction to FFUF",id:"introduction-to-ffuf",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Installing FFUF",id:"installing-ffuf",level:2},{value:"Using Go",id:"using-go",level:3},{value:"Binary Releases",id:"binary-releases",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Fuzzing Multiple Parameters",id:"fuzzing-multiple-parameters",level:3},{value:"Using Custom Headers",id:"using-custom-headers",level:3},{value:"Filtering Results",id:"filtering-results",level:3},{value:"External Resources",id:"external-resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-ffuf",children:"Introduction to FFUF"}),"\n",(0,s.jsx)("img",{src:"https://raw.githubusercontent.com/ffuf/ffuf/master/_img/ffuf_run_logo_600.png",alt:"ffuf logo",height:"150"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["FFUF (Fuzz Faster U Fool) is a fast web fuzzer written in ",(0,s.jsx)(n.strong,{children:"Go"})," that is used to discover hidden resources and vulnerabilities in web applications. It is highly configurable and supports a wide range of fuzzing techniques, making it a powerful tool for penetration testers and security researchers."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Do not use FFUF on this website, or any other website without permissions."})}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"High Performance:"})," FFUF is designed to be fast, using Go's concurrency model to maximize performance and speed up the fuzzing process."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Customizable Payloads:"})," Supports custom payloads for directory and file enumeration, parameter fuzzing, and other types of web application testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Flexible Output Options:"})," Provides various output formats, including JSON and simple text, to integrate with other tools and processes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Extensible:"})," Offers a range of options for customizing requests, including user-agent headers, cookies, and HTTP methods."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installing-ffuf",children:"Installing FFUF"}),"\n",(0,s.jsx)(n.p,{children:"FFUF can be installed on different ways:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Pre-installed with Kali Linux."})}),"\n",(0,s.jsx)(n.h3,{id:"using-go",children:"Using Go"}),"\n",(0,s.jsxs)(n.p,{children:["If you have ",(0,s.jsx)(n.strong,{children:"Go"})," installed, you can install FFUF using the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go install github.com/ffuf/ffuf@latest\n"})}),"\n",(0,s.jsx)(n.h3,{id:"binary-releases",children:"Binary Releases"}),"\n",(0,s.jsxs)(n.p,{children:["You can also download precompiled binaries from the ",(0,s.jsx)(n.a,{href:"https://github.com/ffuf/ffuf/releases",children:"FFUF GitHub releases page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.p,{children:"You can download the sample wordlists from ffuf website:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget http://ffuf.me/wordlist/common.txt\nwget http://ffuf.me/wordlist/parameters.txt\nwget http://ffuf.me/wordlist/subdomains.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"To perform a basic directory fuzzing scan, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffuf -u http://testphp.vulnweb.com/FUZZ -w common.txt\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-u"})," specifies the URL to fuzz, with ",(0,s.jsx)(n.code,{children:"FUZZ"})," being the placeholder for where the payloads will be inserted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-w"})," specifies the path to the wordlist file containing the payloads."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(n.h3,{id:"fuzzing-multiple-parameters",children:"Fuzzing Multiple Parameters"}),"\n",(0,s.jsx)(n.p,{children:"To fuzz multiple parameters simultaneously:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffuf -u http://example.com/page?param1=FUZZ1&param2=FUZZ2 -w /path/to/wordlist1.txt -w /path/to/wordlist2.txt\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-custom-headers",children:"Using Custom Headers"}),"\n",(0,s.jsx)(n.p,{children:"To include custom headers in your requests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ffuf -u http://example.com/FUZZ -w /path/to/wordlist.txt -H "Authorization: Bearer YOUR_TOKEN"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"filtering-results",children:"Filtering Results"}),"\n",(0,s.jsx)(n.p,{children:"To filter results based on status codes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffuf -u http://example.com/FUZZ -w /path/to/wordlist.txt -fc 404\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-fc"})," specifies status codes to filter out from the results."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ffuf/ffuf",children:"FFUF GitHub Repository"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ffuf/ffuf#readme",children:"FFUF Documentation"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"FFUF is a versatile and efficient tool for web application security testing, offering powerful features for discovering hidden vulnerabilities and resources. Whether you're a security researcher or a penetration tester, FFUF can enhance your fuzzing capabilities and streamline your workflow."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);