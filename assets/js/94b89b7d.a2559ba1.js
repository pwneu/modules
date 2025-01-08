"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[342],{2741:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=s(4848),l=s(8453);const i={title:"Text Searching",sidebar_position:2},a=void 0,c={id:"general-skills/grep",title:"Text Searching",description:"Introduction to GREP Command",source:"@site/modules/01-general-skills/grep.mdx",sourceDirName:"01-general-skills",slug:"/general-skills/grep",permalink:"/learn/modules/general-skills/grep",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/modules/01-general-skills/grep.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Text Searching",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux Fundamentals",permalink:"/learn/modules/general-skills/linux"},next:{title:"Extracting Metadata",permalink:"/learn/modules/general-skills/metadata"}},t={},d=[{value:"Introduction to GREP Command",id:"introduction-to-grep-command",level:2},{value:"Practice file",id:"practice-file",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Basic Regular Expressions",id:"basic-regular-expressions",level:3},{value:"Extended Regular Expressions",id:"extended-regular-expressions",level:3},{value:"Searching Recursively",id:"searching-recursively",level:3},{value:"Inverting Match",id:"inverting-match",level:3},{value:"Cleanup",id:"cleanup",level:2},{value:"External Resources",id:"external-resources",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction-to-grep-command",children:"Introduction to GREP Command"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"grep"})," (Global Regular Expression Print) is a powerful command-line utility used for searching text using patterns. It is commonly used in Unix-based systems like Linux and macOS to search for specific strings or patterns within files."]}),"\n",(0,r.jsx)(n.h2,{id:"practice-file",children:"Practice file"}),"\n",(0,r.jsxs)(n.p,{children:["You can download this file to practice ",(0,r.jsx)(n.code,{children:"grep"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget -O sample.txt https://raw.githubusercontent.com/Donders-Institute/hpc-wiki-v2/master/docs/linux/exercise/gcutError_recon-all.log\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To search for a specific text within a file:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep "used" sample.txt\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To perform a case-insensitive search:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -i "home" sample.txt\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["My apologies for the large output. Type ",(0,r.jsx)(n.code,{children:"clear"})," in the terminal to remove all your output."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To search for whole words only:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -w "Program" sample.txt\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To display line numbers along with matching lines:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -n "used" sample.txt\n'})}),"\n",(0,r.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,r.jsx)(n.h3,{id:"basic-regular-expressions",children:"Basic Regular Expressions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"."}),": Matches any single character."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*"}),": Matches zero or more of the preceding character."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep "a.b" sample.txt\n'})}),"\n",(0,r.jsx)(n.h3,{id:"extended-regular-expressions",children:"Extended Regular Expressions"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"-E"})," to enable extended regular expressions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"|"}),": Alternation (OR)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"+"}),": Matches one or more of the preceding character."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"?"}),": Matches zero or one of the preceding character."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Search for ",(0,r.jsx)(n.code,{children:"cat"})," or ",(0,r.jsx)(n.code,{children:"dog"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -E "cat|dog" sample.txt\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To search for multiple patterns:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -e "max" -e "limited" sample.txt\n'})}),"\n",(0,r.jsx)(n.h3,{id:"searching-recursively",children:"Searching Recursively"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To search recursively through directories:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -r "home" /etc/defaults\n'})}),"\n",(0,r.jsx)(n.h3,{id:"inverting-match",children:"Inverting Match"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To display lines that do not match the pattern:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'grep -v "hi" sample.txt\n'})}),"\n",(0,r.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You can now remove the sample file once you're done:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm sample.txt\n"})}),"\n",(0,r.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://man7.org/linux/man-pages/man1/grep.1.html",children:"GREP Manual"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"grep"})," command is an essential tool for searching and processing text data. Mastering its usage will greatly enhance your ability to manage and analyze large volumes of text efficiently."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var r=s(6540);const l={},i=r.createContext(l);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);