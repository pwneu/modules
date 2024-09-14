"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[514],{1521:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const o={title:"Version Control"},r=void 0,a={id:"forensics/version-control",title:"Version Control",description:"Introduction to Git",source:"@site/docs/06-forensics/version-control.mdx",sourceDirName:"06-forensics",slug:"/forensics/version-control",permalink:"/learn/docs/forensics/version-control",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/06-forensics/version-control.mdx",tags:[],version:"current",frontMatter:{title:"Version Control"},sidebar:"tutorialSidebar",previous:{title:"Forensics",permalink:"/learn/docs/category/forensics"},next:{title:"Web Exploitation",permalink:"/learn/docs/category/web-exploitation"}},c={},l=[{value:"Introduction to Git",id:"introduction-to-git",level:2},{value:"Installing Git",id:"installing-git",level:2},{value:"Windows 11",id:"windows-11",level:3},{value:"Debian",id:"debian",level:3},{value:"Git Basics",id:"git-basics",level:2},{value:"Cloning a Repository",id:"cloning-a-repository",level:3},{value:"Git Branches",id:"git-branches",level:3},{value:"Showing Commit History",id:"showing-commit-history",level:3},{value:"External Resources",id:"external-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-to-git",children:"Introduction to Git"}),"\n",(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",width:"150",height:"150",children:(0,t.jsx)("path",{fill:"#F34F29",d:"M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Git is a distributed version control system, widely used for managing and tracking changes in software projects. It is not a cybersecurity tool in the traditional sense because it doesn\u2019t directly protect systems, detect vulnerabilities, or respond to threats. Instead, Git is designed to help developers and teams manage their code and collaborate more effectively."}),"\n",(0,t.jsx)(n.p,{children:"However, Git is incredibly valuable in the field of cybersecurity and digital forensics:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Version Control for Scripts and Tools:"})," Cybersecurity professionals often create scripts and tools to automate tasks or conduct analyses. Using Git allows them to track changes over time, revert to previous versions if needed, and collaborate with others without conflicts."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tracking Configuration Changes:"})," In digital forensics, maintaining an accurate history of changes is crucial. Git helps you keep a detailed record of every modification, which is essential for ensuring the integrity of an investigation and for providing clear documentation in legal or audit scenarios."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Collaboration on Security Projects:"})," When working on cybersecurity projects, such as developing security tools or analyzing malware, Git enables teams to work together efficiently. It ensures that everyone has access to the latest files and can contribute without overwriting each other's work."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Audit Trails and Documentation:"})," In cybersecurity, having a clear audit trail is important for accountability and transparency. Git automatically records who made what changes and when, which can be invaluable in forensic investigations and incident response."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In summary, while Git is not a tool designed specifically for cybersecurity, it plays a crucial supporting role by enabling effective version control, collaboration, and documentation\u2014key aspects of many cybersecurity and digital forensics tasks."}),"\n",(0,t.jsx)(n.h2,{id:"installing-git",children:"Installing Git"}),"\n",(0,t.jsx)(n.p,{children:"Here are the commands to install Git on your system:"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Pre-installed with Kali Linux."})}),"\n",(0,t.jsx)(n.h3,{id:"windows-11",children:"Windows 11"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"winget install -e --id Git.Git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"debian",children:"Debian"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"git-basics",children:"Git Basics"}),"\n",(0,t.jsx)(n.p,{children:"You can verify the installation using this command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git --version\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here is how you can show the list of all commands."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git -h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"cloning-a-repository",children:"Cloning a Repository"}),"\n",(0,t.jsx)(n.p,{children:"Here is how you can clone a repository using Git."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/pwneu/pwneu.git\n"})}),"\n",(0,t.jsx)(n.h3,{id:"git-branches",children:"Git Branches"}),"\n",(0,t.jsx)(n.p,{children:"To see a list of all the branches in your repository, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git branch\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command shows you all the branches you have, and highlights the branch you're currently working on."}),"\n",(0,t.jsx)(n.p,{children:"To change from one branch to another, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout <branch_name>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<branch_name>"})," with the name of the branch you want to switch to. This command updates your working directory to match the selected branch."]}),"\n",(0,t.jsx)(n.h3,{id:"showing-commit-history",children:"Showing Commit History"}),"\n",(0,t.jsx)(n.p,{children:"To see the history of changes made in the current branch, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git log\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command lists all the commits, showing details like who made each change, when it was made, and a brief description of what was changed. It helps you track the evolution of the project over time."}),"\n",(0,t.jsx)(n.p,{children:"You can use the following command to switch your working directory to the exact state of the repository at a specific commit:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout <commit_hash>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command puts you in a special mode where you're not on any branch. Instead, your files will look exactly as they did at that specific commit. In this mode, you can look at or test the old code, but any changes you make won\u2019t be saved to any branch. If you want to keep changes or work on this state, you\u2019ll need to create a new branch from here."}),"\n",(0,t.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,t.jsx)(n.p,{children:"You can extend you knowledge in Git with these sites:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.w3schools.com/git/",children:"https://www.w3schools.com/git/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learngitbranching.js.org/",children:"https://learngitbranching.js.org/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.codecademy.com/learn/learn-git",children:"https://www.codecademy.com/learn/learn-git"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.atlassian.com/git",children:"https://www.atlassian.com/git"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);