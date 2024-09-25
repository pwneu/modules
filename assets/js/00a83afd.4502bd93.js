"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[538],{7417:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=i(4848),r=i(8453);const c={title:"Hexadecimal",sidebar_position:3},l=void 0,o={id:"cryptography/hexadecimal",title:"Hexadecimal",description:"Introduction to Hexadecimal",source:"@site/docs/03-cryptography/hexadecimal.mdx",sourceDirName:"03-cryptography",slug:"/cryptography/hexadecimal",permalink:"/learn/docs/cryptography/hexadecimal",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/03-cryptography/hexadecimal.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Hexadecimal",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Base 64",permalink:"/learn/docs/cryptography/base64"},next:{title:"Morse Code",permalink:"/learn/docs/cryptography/morse-code"}},t={},d=[{value:"Introduction to Hexadecimal",id:"introduction-to-hexadecimal",level:2},{value:"Converting Hexadecimal to Words",id:"converting-hexadecimal-to-words",level:2},{value:"Example",id:"example",level:3},{value:"Applications of Hexadecimal to Words Conversion",id:"applications-of-hexadecimal-to-words-conversion",level:2},{value:"External Resources",id:"external-resources",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-hexadecimal",children:"Introduction to Hexadecimal"}),"\n",(0,s.jsx)(n.p,{children:"Hexadecimal, or hex, is a base-16 number system that uses sixteen symbols to represent values: 0-9 for values zero to nine and A-F for values ten to fifteen. Hexadecimal is commonly used in computing as a more human-friendly representation of binary-coded values."}),"\n",(0,s.jsx)(n.h2,{id:"converting-hexadecimal-to-words",children:"Converting Hexadecimal to Words"}),"\n",(0,s.jsx)(n.p,{children:"To convert hexadecimal values into words, you need to follow a few steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Group the Hex Digits"}),": Split the hexadecimal string into pairs. Each pair of hex digits represents one byte (8 bits)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Convert Hex to Decimal"}),": For each pair of hex digits, convert the hexadecimal value to its decimal equivalent. You can use the following formula for conversion:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If your hex pair is ",(0,s.jsx)(n.code,{children:"AB"}),", the conversion is calculated as:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A in decimal is 10 (A = 10)"}),"\n",(0,s.jsx)(n.li,{children:"B in decimal is 11 (B = 11)"}),"\n",(0,s.jsx)(n.li,{children:"Therefore, AB = (10 * 16^1) + (11 * 16^0) = 160 + 11 = 171 in decimal."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Map Decimal Values to ASCII Characters"}),": Each decimal value corresponds to an ASCII character. You can use an ASCII table to find the character that matches the decimal value."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, if you convert the hex ",(0,s.jsx)(n.code,{children:"48"}),", the decimal equivalent is ",(0,s.jsx)(n.code,{children:"72"}),", which corresponds to the character ",(0,s.jsx)(n.code,{children:"H"})," in ASCII."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Combine the Characters"}),": Once you have converted all pairs of hex digits to their respective characters, concatenate them to form the final word or phrase."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Let's convert the hexadecimal string ",(0,s.jsx)(n.code,{children:"48656c6c6f"})," to words."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Grouping"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"48"}),", ",(0,s.jsx)(n.code,{children:"65"}),", ",(0,s.jsx)(n.code,{children:"6c"}),", ",(0,s.jsx)(n.code,{children:"6c"}),", ",(0,s.jsx)(n.code,{children:"6f"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hex to Decimal Conversion"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"48"})," -> 72"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"65"})," -> 101"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"6c"})," -> 108"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"6c"})," -> 108"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"6f"})," -> 111"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Decimal to ASCII Mapping"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"72"})," -> ",(0,s.jsx)(n.code,{children:"H"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"101"})," -> ",(0,s.jsx)(n.code,{children:"e"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"108"})," -> ",(0,s.jsx)(n.code,{children:"l"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"108"})," -> ",(0,s.jsx)(n.code,{children:"l"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"111"})," -> ",(0,s.jsx)(n.code,{children:"o"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Combine the Characters"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Result: ",(0,s.jsx)(n.code,{children:"Hello"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This process can be applied to any hexadecimal string to convert it into human-readable text."}),"\n",(0,s.jsx)(n.h2,{id:"applications-of-hexadecimal-to-words-conversion",children:"Applications of Hexadecimal to Words Conversion"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Encoding"}),": Hexadecimal representation is commonly used in data encoding schemes, and converting it to words can help interpret and understand the encoded data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Debugging and Reverse Engineering"}),": Converting hex to words can be useful in debugging scenarios or reverse engineering applications where you need to understand the underlying data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Networking and Communication"}),": Hexadecimal is often used in network protocols, and converting hex values to words can help in analyzing network traffic and communication."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.asciitable.com/",children:"ASCII Table"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.rapidtables.com/convert/number/hex-to-ascii.html",children:"Hex to ASCII Converter Online Tool"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const r={},c=s.createContext(r);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);