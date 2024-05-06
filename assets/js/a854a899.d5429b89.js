"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{98379:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var o=s(85893),i=s(11151);const a={sidebar_position:1},r="System Overview",n={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-blastpad/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"tuk05348",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-blastpad/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-blastpad/docs/requirements/system-block-diagram"}},l={},c=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}];function d(e){const t={h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,o.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,o.jsx)(t.p,{children:"The BlastPad is a kid-friendly handheld gaming device and block-based coding suite that makes it easy to create, play, and share custom games. Existing products in the STEM teaching tools space struggle to balance both performance and ease-of-use, whereas the BlastPad will offer a good mix of both. Built around a small but mighty Raspberry Pi single-board computer, the device will be an all-in-one solution for learning to make games and playing them. The device will also feature a number of sensors for students to experiment with alongside buttons and switches found on traditional handheld consoles like the Nintendo Game Boy."}),"\n",(0,o.jsx)(t.p,{children:"The BlastPad will feature a kid-friendly user interface for navigating the downloaded game library, editing games, and for changing the settings of the BlastPad. Akin to existing handheld gaming devices like the Nintendo Switch, users will scroll through a list of games and choose to either play each game or edit them. Choosing to edit a game will launch the block-based code editor, where users can edit their games. Choosing to play a game will launch the game directly, replacing the main interface until the game is complete. In the settings panel, users will configure their WiFi setup, configure private groups called Classrooms, manage their Community Account, and change the colors of the user interface."}),"\n",(0,o.jsx)(t.p,{children:"Users will use a web-based drag-and-drop block code editor to create programs and games from the BlastPad itself or their personal device (computer, phone, tablet). The code editor will feature a toolbox of existing \u201ccode blocks\u201d representing different programming constructs such as variables, if statements, loops, and functions. These code blocks will snap together\u2014either on top of each other or one inside of another\u2014to form a cohesive program. Under the hood, the block code program will translate directly to Python and run on the device as a Python program. Users will click a \u201cRun\u201d button on the code editor that downloads the program from the web browser to the BlastPad and runs it using Python."}),"\n",(0,o.jsx)(t.p,{children:"Users will share their own games and download others\u2019 games through a public website hosted on a remote server. Each game uploaded to the site will have its own title and description, perhaps in the form of a markdown README file for customizability."}),"\n",(0,o.jsx)(t.h2,{id:"high-level-requirement",children:"High Level Requirement"}),"\n",(0,o.jsx)(t.p,{children:"Users can connect to the BlastPad\u2019s locally hosted web-based block coding editor on their device of choice or the BlastPad itself. Within the block-based coding editor, users can choose from a large collection of pre-existing code blocks including I/O, control statements, sprite drawing, and even sensor measurement blocks. When finished, users will save the program to the BlastPad so a user can test the program instantly after making their edits. If the user is satisfied with their program and wants to share it, they can upload it to a public repository where they can also find games that other people made."}),"\n",(0,o.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,o.jsx)(t.p,{children:"The BlastPad will be based on the Raspberry Pi computer. On-board, there will be a stripped down version of Linux that runs games in Pygame and a web server using Flask. On the device, a  browser will display the main user interface and the block code editor received from the Flask server. Companion devices connected to the same Wi-Fi network can access the block code editor, allowing users to make changes their programs and push them to the BlastPad. Additional electronics such as sensors and switches will be attached to the Raspberry Pi using the GPIO connections."}),"\n",(0,o.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(t.p,{children:["The inspiration for this project proposal came from years of tutoring students in programming and embedded systems. When working with devices such as the BBC micro",":bit",", the most experienced students would run out of projects for the devices after 20 lessons or so due to limiting hardware or software, after which it becomes a paper weight. Our goal for this project is to provide students with powerful hardware while also providing an easy to use interface to get started programming. Two competitors of the BlastPad include similar embedded system devices such as the BBC micro",":bit"," and the CircuitMess Nibble."]}),"\n",(0,o.jsxs)(t.p,{children:["The BBC micro",":bit"," is the most popular of these competitors but features only a measly 5x5 LED matrix display and 2 tactile buttons. Similar to the BlastPad, students can use a block-based editor to interface with the micro",":bit",", but the lackluster hardware tends to bore even excited learners when compared to the iPads and iPhones they grew up with."]}),"\n",(0,o.jsx)(t.p,{children:"The Nibble is less popular but features a small color screen and a block-based IDE. The downside of the Nibble is that it is far less powerful than the latest Raspberry Pi. The Nibble also requires an active internet connection to access the block-based IDE, meaning the device could become unusable without an active internet connection or if CircuitMess discontinues their online services."}),"\n",(0,o.jsx)(t.p,{children:"The BlastPad would be more powerful than both devices, featuring a Raspberry Pi that can run an entire operating system and web server. The power of the Raspberry Pi will allow the BlastPad coding suite to grow alongside its user base. The BlastPad would also be more engaging for young students, featuring a bright high-definition RGB screen that makes students' accomplishments feel more tangible. The BlastPad\u2019s on-device block-based code editor allows users to quickly write and test their code while also giving them the security of using the device without an internet connection."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>n,a:()=>r});var o=s(67294);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);