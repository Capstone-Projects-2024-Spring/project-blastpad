"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{39749:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=s(85893),n=s(11151);const a={sidebar_position:2},i="System Block Diagram",o={id:"requirements/system-block-diagram",title:"System Block Diagram",description:"System Block Diagram For Blast Pad",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-blastpad/docs/requirements/system-block-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Neil",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-blastpad/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-blastpad/docs/requirements/general-requirements"}},l={},c=[];function d(e){const t={h1:"h1",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"system-block-diagram",children:"System Block Diagram"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/Capstone-Projects-2024-Spring/project-blastpad/assets/SystemBlockDiagram.svg",alt:"System Block Diagram For Blast Pad"})}),"\n",(0,r.jsx)(t.p,{children:"This diagram depicts the high-level design of the application from a user's BlastPad device."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Buttons"})," at the hardware level will be used to interface with the device."]}),"\n",(0,r.jsxs)(t.p,{children:["All internal BlastPad code will sit on Raspberry Pi 4 ",(0,r.jsx)(t.strong,{children:"Hardware"})," running the Linux ",(0,r.jsx)(t.strong,{children:"Operating System"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["A Flask ",(0,r.jsx)(t.strong,{children:"Local Server"})," will serve as the primary interface for getting and setting information on the ",(0,r.jsx)(t.strong,{children:"Operating System"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["On the BlastPad itself, the Flask ",(0,r.jsx)(t.strong,{children:"Local Server"})," will serve the BlastUI main interface and the Blockly Editor via a ",(0,r.jsx)(t.strong,{children:"Browser"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["On the BlastPad itself, Flask ",(0,r.jsx)(t.strong,{children:"Local Server"})," will also execute the ",(0,r.jsx)(t.strong,{children:"Python"})," code for games developed by users."]}),"\n",(0,r.jsxs)(t.p,{children:["For a ",(0,r.jsx)(t.strong,{children:"Companion Device"}),", the BlastPad's Flask ",(0,r.jsx)(t.strong,{children:"Local Server"})," will serve the Blockly Editor via a ",(0,r.jsx)(t.strong,{children:"Browser"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The Flask ",(0,r.jsx)(t.strong,{children:"Local Server"})," will also store and recall data from a ",(0,r.jsx)(t.strong,{children:"Supabase"})," database on the ",(0,r.jsx)(t.strong,{children:"Internet"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var r=s(67294);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);