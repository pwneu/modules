"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[381],{7325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(4848),r=t(8453);const s={title:"JSON Web Tokens"},a=void 0,o={id:"cryptography/jwt",title:"JSON Web Tokens",description:"Introduction to JSON Web Tokens (JWT)",source:"@site/modules/03-cryptography/jwt.mdx",sourceDirName:"03-cryptography",slug:"/cryptography/jwt",permalink:"/learn/modules/cryptography/jwt",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/modules/03-cryptography/jwt.mdx",tags:[],version:"current",frontMatter:{title:"JSON Web Tokens"},sidebar:"tutorialSidebar",previous:{title:"Morse Code",permalink:"/learn/modules/cryptography/morse-code"},next:{title:"Python",permalink:"/learn/modules/reverse-engineering/python"}},l={},d=[{value:"Introduction to JSON Web Tokens (JWT)",id:"introduction-to-json-web-tokens-jwt",level:2},{value:"Structure of a JWT",id:"structure-of-a-jwt",level:2},{value:"Header",id:"header",level:3},{value:"Payload",id:"payload",level:3},{value:"Signature",id:"signature",level:3},{value:"How JWT Works",id:"how-jwt-works",level:2},{value:"Example of a JWT",id:"example-of-a-jwt",level:2},{value:"Decoding a JWT",id:"decoding-a-jwt",level:3},{value:"Verifying the Signature",id:"verifying-the-signature",level:2},{value:"External Resources",id:"external-resources",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction-to-json-web-tokens-jwt",children:"Introduction to JSON Web Tokens (JWT)"}),"\n",(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/jsonwebtoken/jsonwebtoken.github.io/master/img/website/pic_logo.svg",alt:"ffuf logo",height:"150"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"JSON Web Tokens (JWT) are an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair (using RSA or ECDSA)."}),"\n",(0,i.jsx)(n.p,{children:"JWTs are commonly used for authorization. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token."}),"\n",(0,i.jsx)(n.h2,{id:"structure-of-a-jwt",children:"Structure of a JWT"}),"\n",(0,i.jsx)(n.p,{children:"A JSON Web Token consists of three parts:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Header"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Payload"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Signature"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Each part is encoded in Base64Url, and the token is represented as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"header.payload.signature\n"})}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,i.jsx)(n.p,{children:"The header typically consists of two parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The type of the token, which is JWT."}),"\n",(0,i.jsx)(n.li,{children:"The signing algorithm being used, such as HMAC SHA256 or RSA."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example of a JWT header:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "alg": "HS256",\n  "typ": "JWT"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"payload",children:"Payload"}),"\n",(0,i.jsx)(n.p,{children:"The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered claims"}),": A set of predefined claims which are not mandatory but recommended. Some of them are ",(0,i.jsx)(n.code,{children:"iss"})," (issuer), ",(0,i.jsx)(n.code,{children:"exp"})," (expiration time), ",(0,i.jsx)(n.code,{children:"sub"})," (subject), and ",(0,i.jsx)(n.code,{children:"aud"})," (audience)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public claims"}),": These can be defined at will, but to avoid collisions, they should be defined in the IANA JSON Web Token Registry."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Private claims"}),": Custom claims created to share information between parties that agree on using them."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example of a JWT payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "admin": true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(n.p,{children:"To create the signature part, you must take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign it."}),"\n",(0,i.jsx)(n.p,{children:"HMAC SHA256 example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);\n'})}),"\n",(0,i.jsx)(n.p,{children:"The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way."}),"\n",(0,i.jsx)(n.h2,{id:"how-jwt-works",children:"How JWT Works"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The user logs in using their credentials."}),"\n",(0,i.jsx)(n.li,{children:"The server generates a JWT and sends it to the user."}),"\n",(0,i.jsx)(n.li,{children:"The client (usually a browser) stores the JWT."}),"\n",(0,i.jsxs)(n.li,{children:["With every request, the client sends the JWT as a Bearer token in the ",(0,i.jsx)(n.code,{children:"Authorization"})," header."]}),"\n",(0,i.jsx)(n.li,{children:"The server verifies the token and responds with the requested data if valid."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-of-a-jwt",children:"Example of a JWT"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n"})}),"\n",(0,i.jsx)(n.h3,{id:"decoding-a-jwt",children:"Decoding a JWT"}),"\n",(0,i.jsxs)(n.p,{children:["You can decode a JWT by splitting the string by the ",(0,i.jsx)(n.code,{children:"."})," character. The first part is the header, the second is the payload, and the third is the signature. The header and payload are Base64Url encoded and can be decoded easily."]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-the-signature",children:"Verifying the Signature"}),"\n",(0,i.jsx)(n.p,{children:"To verify the signature, the server will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Take the received JWT's header and payload."}),"\n",(0,i.jsx)(n.li,{children:"Recompute the signature using the stored secret."}),"\n",(0,i.jsx)(n.li,{children:"Compare the recomputed signature with the received signature."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If they match, the token is valid; otherwise, it has been tampered with."}),"\n",(0,i.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://jwt.io",children:"JWT.io"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://auth0.com/learn/json-web-tokens/",children:"Auth0: Introduction to JWT"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);