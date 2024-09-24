"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[750],{1907:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(4848),a=i(8453);const t={title:"Databases",sidebar_position:4},l=void 0,o={id:"forensics/databases",title:"Databases",description:"Using sqlite3",source:"@site/docs/06-forensics/databases.mdx",sourceDirName:"06-forensics",slug:"/forensics/databases",permalink:"/learn/docs/forensics/databases",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/06-forensics/databases.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Databases",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Version Control",permalink:"/learn/docs/forensics/version-control"},next:{title:"Web Exploitation",permalink:"/learn/docs/category/web-exploitation"}},r={},d=[{value:"Using <code>sqlite3</code>",id:"using-sqlite3",level:2},{value:"Installation",id:"installation",level:2},{value:"Linux (Debian/Ubuntu)",id:"linux-debianubuntu",level:3},{value:"Basic Commands",id:"basic-commands",level:2},{value:"Opening a Database",id:"opening-a-database",level:3},{value:"Viewing Tables",id:"viewing-tables",level:3},{value:"Querying Data",id:"querying-data",level:3},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Updating Data",id:"updating-data",level:3},{value:"Deleting Data",id:"deleting-data",level:3},{value:"Importing and Exporting Data",id:"importing-and-exporting-data",level:2},{value:"Importing CSV Files",id:"importing-csv-files",level:3},{value:"Exporting Data",id:"exporting-data",level:3},{value:"SQLite in Forensics",id:"sqlite-in-forensics",level:2},{value:"Common Uses in Forensics",id:"common-uses-in-forensics",level:3},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"using-sqlite3",children:["Using ",(0,s.jsx)(n.code,{children:"sqlite3"})]}),"\n",(0,s.jsxs)("svg",{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"sqlite-original-a",x1:"-15.615",x2:"-6.741",y1:"-9.108",y2:"-9.108",gradientTransform:"rotate(90 -90.486 64.634) scale(9.2712)",gradientUnits:"userSpaceOnUse",children:[(0,s.jsx)("stop",{"stop-color":"#95d7f4",offset:"0"}),(0,s.jsx)("stop",{"stop-color":"#0f7fcc",offset:".92"}),(0,s.jsx)("stop",{"stop-color":"#0f7fcc",offset:"1"})]})}),(0,s.jsx)("path",{d:"M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88.68 1.169 3.54 6.192 4.118 7.81.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162.286 162.286 0 012.004-6.265c.973 1.71 3.313 5.859 3.828 7.3.102.293.192.543.27.774.023-.137.05-.274.074-.414-.59-2.504-1.75-6.86-3.336-10.082 3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a118.657 118.657 0 01-.297-14.652",fill:"#0b7fcc"}),(0,s.jsx)("path",{d:"M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a164.535 164.535 0 012.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328 3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 00-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614-.672-2.605-1.441-4.96-2.25-6.324-.414-.707.043-3.597 1.207-7.879",fill:"url(#sqlite-original-a)"}),(0,s.jsx)("path",{d:"M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44.347 44.347 0 00-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895 1.262 2.563 2.25 5.832 2.894 8.328.168.64.32 1.242.442 1.754.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773-.043-.125-.105-.274-.172-.434-.734-1.703-2.765-5.305-3.656-6.867-.762 2.25-1.437 4.36-2.004 6.265 2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809-1.164 4.281-1.625 7.172-1.207 7.88.809 1.362 1.574 3.722 2.25 6.323 1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a118.653 118.653 0 00.297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156.48-12.793 3.422-28.215 8.856-44.289 9.191-24.27 21.938-43.738 33.602-53.035-10.633 9.602-25.023 40.684-29.332 52.195-4.82 12.891-8.238 24.984-10.301 36.574 3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621",fill:"#003956"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sqlite3"})," is a command-line tool for interacting with SQLite databases. SQLite is a lightweight, serverless database engine commonly used for applications, including mobile apps and embedded systems. It stores data in a single file, making it easy to manage and transfer."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Pre-installed with Kali Linux.\nYou can also download the GUI version at the ",(0,s.jsx)(n.a,{href:"https://sqlitebrowser.org/dl/",children:"SQLite Download Page"})]})}),"\n",(0,s.jsx)(n.h3,{id:"linux-debianubuntu",children:"Linux (Debian/Ubuntu)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install sqlite3\n"})}),"\n",(0,s.jsx)(n.h2,{id:"basic-commands",children:"Basic Commands"}),"\n",(0,s.jsx)(n.h3,{id:"opening-a-database",children:"Opening a Database"}),"\n",(0,s.jsx)(n.p,{children:"To open an SQLite database file, use the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sqlite3 database.db\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command opens the specified ",(0,s.jsx)(n.code,{children:"database.db"})," file. If the file does not exist, a new database will be created."]}),"\n",(0,s.jsx)(n.h3,{id:"viewing-tables",children:"Viewing Tables"}),"\n",(0,s.jsx)(n.p,{children:"To list all tables in the database, use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".tables\n"})}),"\n",(0,s.jsx)(n.p,{children:"This command displays the names of all tables in the currently opened database."}),"\n",(0,s.jsx)(n.h3,{id:"querying-data",children:"Querying Data"}),"\n",(0,s.jsx)(n.p,{children:"You can execute SQL queries to retrieve data. For example, to select all records from a table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELECT * FROM table_name;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"inserting-data",children:"Inserting Data"}),"\n",(0,s.jsx)(n.p,{children:"To insert new records into a table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"INSERT INTO table_name (column1, column2) VALUES (value1, value2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updating-data",children:"Updating Data"}),"\n",(0,s.jsx)(n.p,{children:"To update existing records:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"UPDATE table_name SET column1 = value1 WHERE condition;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deleting-data",children:"Deleting Data"}),"\n",(0,s.jsx)(n.p,{children:"To delete records from a table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DELETE FROM table_name WHERE condition;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"importing-and-exporting-data",children:"Importing and Exporting Data"}),"\n",(0,s.jsx)(n.h3,{id:"importing-csv-files",children:"Importing CSV Files"}),"\n",(0,s.jsx)(n.p,{children:"You can import data from a CSV file using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".mode csv\n.import file.csv table_name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This sets the mode to CSV and imports data from ",(0,s.jsx)(n.code,{children:"file.csv"})," into ",(0,s.jsx)(n.code,{children:"table_name"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"exporting-data",children:"Exporting Data"}),"\n",(0,s.jsx)(n.p,{children:"To export data to a CSV file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".headers on\n.mode csv\n.output output.csv\nSELECT * FROM table_name;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This sets the output mode to CSV and saves the results to ",(0,s.jsx)(n.code,{children:"output.csv"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"sqlite-in-forensics",children:"SQLite in Forensics"}),"\n",(0,s.jsx)(n.p,{children:"SQLite databases are often encountered in digital forensics investigations, especially on mobile devices and applications. Their lightweight nature makes them a popular choice for storing user data, settings, and application logs."}),"\n",(0,s.jsx)(n.h3,{id:"common-uses-in-forensics",children:"Common Uses in Forensics"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Recovery"}),": Forensic analysts can extract and analyze data from SQLite databases to recover deleted records, which can provide critical evidence in investigations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User Activity Analysis"}),": SQLite databases often contain logs and user activity records. By examining these logs, investigators can reconstruct user behavior and timeline events."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Application Data"}),": Many applications store user preferences, chat histories, and other important data in SQLite databases. Forensics tools can access these databases to retrieve relevant information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Integrity Verification"}),": By comparing data from SQLite databases with known sources, forensic analysts can verify the integrity of the data, helping to identify tampering or unauthorized changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sqlite3"})," is a great tool for managing SQLite databases, and its role in digital forensics is significant. Using ",(0,s.jsx)(n.code,{children:"sqlite3"})," enables forensic analysts to extract valuable insights from database files, aiding in investigations and data recovery efforts."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);