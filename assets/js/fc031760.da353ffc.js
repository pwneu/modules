"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[735],{3791:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(4848),i=t(8453);const s={title:"Python"},a=void 0,o={id:"reverse-engineering/python",title:"Python",description:"Introduction to Python",source:"@site/docs/04-reverse-engineering/python.mdx",sourceDirName:"04-reverse-engineering",slug:"/reverse-engineering/python",permalink:"/learn/docs/reverse-engineering/python",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/04-reverse-engineering/python.mdx",tags:[],version:"current",frontMatter:{title:"Python"},sidebar:"tutorialSidebar",previous:{title:"JSON Web Tokens",permalink:"/learn/docs/cryptography/jwt"},next:{title:"Steganography",permalink:"/learn/docs/category/steganography"}},l={},c=[{value:"Introduction to Python",id:"introduction-to-python",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows 11",id:"windows-11",level:4},{value:"Debian",id:"debian",level:4},{value:"Python in CyberSecurity",id:"python-in-cybersecurity",level:2},{value:"Simple Port Scanner",id:"simple-port-scanner",level:3},{value:"Analyzing HTTP Headers",id:"analyzing-http-headers",level:3},{value:"Python in Reverse Engineering",id:"python-in-reverse-engineering",level:2},{value:"Analyzing a Binary File",id:"analyzing-a-binary-file",level:3},{value:"Extracting Strings from Binary",id:"extracting-strings-from-binary",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"introduction-to-python",children:"Introduction to Python"}),"\n",(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"150",height:"150",children:[(0,r.jsxs)("linearGradient",{id:"python-original-a",gradientUnits:"userSpaceOnUse",x1:"70.252",y1:"1237.476",x2:"170.659",y2:"1151.089",gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",children:[(0,r.jsx)("stop",{offset:"0","stop-color":"#5A9FD4"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#306998"})]}),(0,r.jsxs)("linearGradient",{id:"python-original-b",gradientUnits:"userSpaceOnUse",x1:"209.474",y1:"1098.811",x2:"173.62",y2:"1149.537",gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",children:[(0,r.jsx)("stop",{offset:"0","stop-color":"#FFD43B"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#FFE873"})]}),(0,r.jsx)("path",{fill:"url(#python-original-a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z",transform:"translate(0 10.26)"}),(0,r.jsx)("path",{fill:"url(#python-original-b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z",transform:"translate(0 10.26)"}),(0,r.jsxs)("radialGradient",{id:"python-original-c",cx:"1825.678",cy:"444.45",r:"26.743",gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0","stop-color":"#B8B8B8","stop-opacity":".498"}),(0,r.jsx)("stop",{offset:"1","stop-color":"#7F7F7F","stop-opacity":"0"})]}),(0,r.jsx)("path",{opacity:".444",fill:"url(#python-original-c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.p,{children:"Python is a versatile programming language known for its readability and ease of use. While it is widely used in software engineering, it also has significant applications in reverse engineering and cybersecurity. Python\u2019s rich ecosystem of libraries and tools makes it a powerful choice for tasks related to security analysis, vulnerability assessment, and reverse engineering."}),"\n",(0,r.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(e.h4,{id:"windows-11",children:"Windows 11"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"winget install -e --id Python.Python.3.11\n"})}),"\n",(0,r.jsx)(e.h4,{id:"debian",children:"Debian"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"sudo apt install steghide\n"})}),"\n",(0,r.jsx)(e.h2,{id:"python-in-cybersecurity",children:"Python in CyberSecurity"}),"\n",(0,r.jsx)(e.p,{children:"In cybersecurity, Python is used for a wide range of tasks including penetration testing, malware analysis, and network security. Its flexibility and the availability of specialized libraries make it an excellent choice for developing security tools and automating security tasks."}),"\n",(0,r.jsx)(e.h3,{id:"simple-port-scanner",children:"Simple Port Scanner"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import socket\n\ndef scan_ports(host, ports):\n    open_ports = []\n    for port in ports:\n        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:\n            sock.settimeout(1)\n            result = sock.connect_ex((host, port))\n            if result == 0:\n                open_ports.append(port)\n    return open_ports\n\n# Usage\nhost = '127.0.0.1'\nports = [22, 80, 443, 8080]\nopen_ports = scan_ports(host, ports)\nprint(f'Open Ports: {open_ports}')\n"})}),"\n",(0,r.jsx)(e.h3,{id:"analyzing-http-headers",children:"Analyzing HTTP Headers"}),"\n",(0,r.jsx)(e.p,{children:"Python can be used to analyze HTTP headers for security testing or information gathering."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import requests\n\ndef get_http_headers(url):\n    response = requests.get(url)\n    headers = response.headers\n    return headers\n\n# Usage\nurl = 'http://example.com'\nheaders = get_http_headers(url)\nfor key, value in headers.items():\n    print(f'{key}: {value}')\n"})}),"\n",(0,r.jsx)(e.h2,{id:"python-in-reverse-engineering",children:"Python in Reverse Engineering"}),"\n",(0,r.jsx)(e.p,{children:"In reverse engineering, Python is used to analyze and understand software, uncover vulnerabilities, and deconstruct malicious code. Its extensive libraries and easy syntax make it a popular choice for developing tools and scripts for various reverse engineering tasks."}),"\n",(0,r.jsx)(e.h3,{id:"analyzing-a-binary-file",children:"Analyzing a Binary File"}),"\n",(0,r.jsxs)(e.p,{children:["Python can be used to analyze binary files and extract information. The ",(0,r.jsx)(e.code,{children:"struct"})," module helps in unpacking binary data into a readable format."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import struct\n\ndef unpack_binary_file(file_path):\n    with open(file_path, 'rb') as f:\n        data = f.read()\n\n    # Example: Unpacking an integer from binary data\n    integer_value = struct.unpack('I', data[:4])[0]\n    print(f'Unpacked Integer: {integer_value}')\n\n# Usage\nunpack_binary_file('example.bin')\n"})}),"\n",(0,r.jsx)(e.h3,{id:"extracting-strings-from-binary",children:"Extracting Strings from Binary"}),"\n",(0,r.jsx)(e.p,{children:"You can use Python to extract human-readable strings from binary files, which can be useful in reverse engineering to identify embedded data or strings."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"def extract_strings(file_path, min_length=4):\n    with open(file_path, 'rb') as f:\n        data = f.read()\n    \n    # Extract printable ASCII strings\n    strings = []\n    current_string = []\n    for byte in data:\n        if 32 <= byte <= 126:\n            current_string.append(chr(byte))\n        else:\n            if len(current_string) >= min_length:\n                strings.append(''.join(current_string))\n            current_string = []\n    \n    if len(current_string) >= min_length:\n        strings.append(''.join(current_string))\n    \n    return strings\n\n# Usage\nstrings = extract_strings('example.bin')\nfor string in strings:\n    print(f'Extracted String: {string}')\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);