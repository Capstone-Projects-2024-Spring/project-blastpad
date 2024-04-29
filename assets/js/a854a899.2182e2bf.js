"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{98379:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=o(85893),i=o(11151);const a={sidebar_position:1},n="System Overview",r={id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-blastpad/docs/requirements/system-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Neil",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-blastpad/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-blastpad/docs/requirements/system-block-diagram"}},c={},d=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}];function l(e){const t={h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"system-overview",children:"System Overview"}),"\n",(0,s.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,s.jsx)(t.p,{children:"The BlastPad is a  kid-friendly handheld gaming device and block-based coding suite that makes it easy to create, play, and share custom games. Existing products in the STEM teaching tools space struggle to balance both performance and ease-of-use, whereas the BlastPad will offer a good mix of both. Built around a small but mighty Raspberry Pi single-board computer, the device will be an all-in-one solution for learning to make games and playing them. The device will also feature a number of sensors for students to experiment with alongside buttons and switches found on traditional handheld consoles like the Nintendo Gameboy."}),"\n",(0,s.jsx)(t.p,{children:"The BlastPad features a kid-friendly user interface for navigating the downloaded game library, and starting the code editor, and for changing the settings of the BlastPad. Akin to existing handheld gaming devices like the Nintendo Switch, users can scroll through a list of games and choose to either play each game or edit them. Choosing to edit a game will start a web server for the block-based code editor. Choosing to play a game will launch the game directly, replacing the main interface until the game is complete. In the settings panel, users can configure their WiFi setup, volume settings, and parental controls."}),"\n",(0,s.jsx)(t.p,{children:"The block-based code editor is hosted directly on the BlastPad device itself in the form of a web server and shared with other devices locally via a WiFi network. The BlastPad has the ability to set up its own WiFi access point in the absence of another network, or to connect to an existing WiFi network. As mentioned above, the WiFi setup will be configurable via the settings panel."}),"\n",(0,s.jsx)(t.p,{children:"Users can use a web-based drag-and-drop block code editor to create programs and games from the BlastPad itself or their personal device (computer, phone, tablet). The code editor features a toolbox of existing \u201ccode blocks\u201d representing different programming constructs such as variables, if statements, loops, and functions. These code blocks snap together\u2014either on top of each other or one inside of another\u2014to form a cohesive program. Under the hood, this block code program translates directly to Python and runs on the device as a Python program. Users can click a \u201cRun\u201d button on the code editor that downloads the program from the web browser to the BlastPad and run it using Python.\nUsers can share their own games and download others\u2019 games through a public website hosted on a remote server. Each game uploaded to the site has its own title and description, perhaps in the form of a markdown README file for customizability."}),"\n",(0,s.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,s.jsx)(t.p,{children:"The BlastPad will be based on the Raspberry Pi computer. On-board, there will be a stripped down version of Linux running the main interface in Tkinter, the games in Pygame, and the web server using Flask. A Chromium-based browser will load the code block editor on-device, but when connecting from another computer any browser should be compatible."}),"\n",(0,s.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(t.p,{children:["The inspiration for this project proposal came from years of tutoring students in programming and embedded systems. When working with devices such as the BBC micro",":bit",", the most experienced students would run out of projects for the devices after 20 lessons or so due to limiting hardware or software, after which it becomes a paper weight. Our goal for this project is to provide students with powerful hardware while also providing an easy to use interface to get started programming. Two competitors of the BlastPad include similar embedded system devices such as the BBC micro",":bit"," and the CircuitMess Nibble."]}),"\n",(0,s.jsxs)(t.p,{children:["The BBC micro",":bit"," is the most popular of these competitors but features only a measly 5x5 LED matrix display and 2 tactile buttons. Similar to the BlastPad, students can use a block-based editor to interface with the micro",":bit",", but the lackluster hardware tends to bore even excited learners when compared to the iPads and iPhones they grew up with.\nThe Nibble is less popular but features a small color screen and a block-based IDE. The downside of the Nibble is that it is far less powerful than the latest Raspberry Pi. The Nibble also requires an active internet connection to access the block-based IDE, meaning the device could become unusable without an active internet connection or if CircuitMess discontinues their online services."]}),"\n",(0,s.jsx)(t.p,{children:"The BlastPad would be more powerful than both devices, featuring a Raspberry Pi that can run an entire operating system and web server. The BlastPad would also be more engaging for young students, featuring a bright high-definition RGB screen that makes their accomplishments feel more tangible. The BlastPad\u2019s on-device block-based code editor allows users to quickly write and test their code while also giving them the security of using the device without an internet connection."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>n});var s=o(67294);const i={},a=s.createContext(i);function n(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);