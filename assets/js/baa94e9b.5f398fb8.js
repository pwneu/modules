"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[830],{3893:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(4848),l=i(8453);const r={title:"Linux Fundamentals",sidebar_position:1},c=void 0,d={id:"general-skills/linux",title:"Linux Fundamentals",description:"Introduction to Linux",source:"@site/docs/01-general-skills/linux.mdx",sourceDirName:"01-general-skills",slug:"/general-skills/linux",permalink:"/learn/docs/general-skills/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/pwneu/learn/tree/main/docs/01-general-skills/linux.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Linux Fundamentals",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"General Skills",permalink:"/learn/docs/category/general-skills"},next:{title:"Text Searching",permalink:"/learn/docs/general-skills/grep"}},t={},a=[{value:"Introduction to Linux",id:"introduction-to-linux",level:2},{value:"Why Learn Linux?",id:"why-learn-linux",level:2},{value:"Basic Linux Commands",id:"basic-linux-commands",level:2},{value:"Navigating the File System",id:"navigating-the-file-system",level:3},{value:"Managing Files and Directories",id:"managing-files-and-directories",level:3},{value:"Viewing and Editing Files",id:"viewing-and-editing-files",level:3},{value:"User and Permission Management",id:"user-and-permission-management",level:3},{value:"Checking Network Configuration",id:"checking-network-configuration",level:2},{value:"External Resources",id:"external-resources",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-linux",children:"Introduction to Linux"}),"\n",(0,s.jsx)(n.p,{children:"Linux is a powerful and flexible open-source operating system widely used in servers, desktops, embedded systems, and more. Understanding Linux fundamentals is crucial for anyone working in IT, cybersecurity, or software development."}),"\n",(0,s.jsx)(n.h2,{id:"why-learn-linux",children:"Why Learn Linux?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Open Source:"})," Linux is free and open-source, allowing users to modify and distribute the software."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Security:"})," Linux is known for its strong security model, making it a preferred choice for servers and critical systems."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stability:"})," Linux systems are highly stable and can run for long periods without needing a reboot."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Community Support:"})," A large, active community provides extensive documentation, forums, and tools."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-linux-commands",children:"Basic Linux Commands"}),"\n",(0,s.jsx)(n.h3,{id:"navigating-the-file-system",children:"Navigating the File System"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ls"}),": Lists files and directories in the current directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cd"}),": Changes the current directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pwd"}),": Prints the current working directory."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigates to the home directory using ",(0,s.jsx)(n.code,{children:"~"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~ \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This shows what directory you are currently on."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwd \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List all files in the current directory including hidden files."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls -la \n"})}),"\n",(0,s.jsx)(n.h3,{id:"managing-files-and-directories",children:"Managing Files and Directories"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"touch"}),": Creates a file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cp"}),": Copies files or directories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mv"}),": Moves or renames files or directories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rm"}),": Removes files or directories."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mkdir"}),": Creates a new directory."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Creates a file named ",(0,s.jsx)(n.code,{children:"file.txt"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"touch file.txt\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Creates a copy of ",(0,s.jsx)(n.code,{children:"file.txt"})," named ",(0,s.jsx)(n.code,{children:"copiedFile.txt"})," in the current directory using ",(0,s.jsx)(n.code,{children:"."}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp file.txt copiedFile.txt\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can autocomplete the name of the existing file or a directory by pressing the ",(0,s.jsx)(n.code,{children:"Tab"})," key."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Renames ",(0,s.jsx)(n.code,{children:"copiedFile.txt"})," to ",(0,s.jsx)(n.code,{children:"renamedFile.txt"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mv copiedFile.txt renamedFile.txt \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deletes a file."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm renamedFile.txt \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Another way of deleting a file but it's not advisable."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mv file.txt /dev/null\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Creates a directory named ",(0,s.jsx)(n.code,{children:"new_directory"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir new_directory\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removes a directory named ",(0,s.jsx)(n.code,{children:"new_directory"})," by specifying ",(0,s.jsx)(n.code,{children:"-r"})," meaning recursive."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rm -r new_directory\n"})}),"\n",(0,s.jsx)(n.h3,{id:"viewing-and-editing-files",children:"Viewing and Editing Files"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cat"}),": Displays the contents of a file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"less"}),": Views the contents of a file page by page."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nano"}),": Opens a file in the ",(0,s.jsx)(n.code,{children:"Nano"})," text editor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vim"}),": Opens a file in the ",(0,s.jsx)(n.code,{children:"Vim"})," text editor."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shows the content of a file."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat file.txt \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Similar to ",(0,s.jsx)(n.code,{children:"cat"})," but with scrolling when the content is large."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"less file.txt \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edits a file using ",(0,s.jsx)(n.code,{children:"Nano"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano file.txt \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Edits a file using ",(0,s.jsx)(n.code,{children:"Vim"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim file.txt\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Exiting Vim",type:"info",children:(0,s.jsxs)(n.p,{children:["If you're stuck in Vim. You can exit without saving changes by pressing ",(0,s.jsx)(n.code,{children:"Esc"})," 3 times (or more) and typing ",(0,s.jsx)(n.code,{children:":q!"})," and ",(0,s.jsx)(n.code,{children:"Enter"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"user-and-permission-management",children:"User and Permission Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sudo"}),": Executes a command as the superuser or another user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chmod"}),": Changes file or directory permissions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chown"}),": Changes the owner of a file or directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"passwd"}),": Changes the user password."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Similar to checking for updates in Windows."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Updates all your packages."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get upgrade\n"})}),"\n",(0,s.jsx)(n.h2,{id:"checking-network-configuration",children:"Checking Network Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Installs network-related commands."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt install net-tools\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Displays network interfaces and their configurations."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ifconfig\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Displays network connections, routing tables, and interface statistics."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"netstat\n"})}),"\n",(0,s.jsx)(n.p,{children:"Tests connectivity to another host."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ping google.com\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Cancelling commands",type:"info",children:(0,s.jsxs)(n.p,{children:["You can cancel commands by pressing ",(0,s.jsx)(n.code,{children:"Ctrl + C"}),". In most linux terminals, you copy text using the ",(0,s.jsx)(n.code,{children:"Ctrl + Shift + C"})," command."]})}),"\n",(0,s.jsx)(n.h2,{id:"external-resources",children:"External Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.tldp.org/",children:"Linux Documentation Project"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/",children:"Linux Command Cheat Sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.gnu.org/gnu/linux-and-gnu.html",children:"GNU/Linux Beginner's Guide"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linuxfoundation.org/",children:"The Linux Foundation"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(6540);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);