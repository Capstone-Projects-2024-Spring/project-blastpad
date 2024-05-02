"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3581],{75620:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var d=s(85893),r=s(11151);const n={sidebar_position:5},i="Database Schema",c={id:"system-architecture/DataBaseSchema",title:"Database Schema",description:"The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind.",source:"@site/docs/system-architecture/DataBaseSchema.md",sourceDirName:"system-architecture",slug:"/system-architecture/DataBaseSchema",permalink:"/project-blastpad/docs/system-architecture/DataBaseSchema",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/system-architecture/DataBaseSchema.md",tags:[],version:"current",lastUpdatedBy:"tuk05348",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-blastpad/docs/system-architecture/development-environment"},next:{title:"Electrical Diagrams",permalink:"/project-blastpad/docs/system-architecture/electrical-diagrams"}},a={},l=[];function h(e){const t={h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"database-schema",children:"Database Schema"}),"\n",(0,d.jsx)(t.p,{children:"The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Table"}),(0,d.jsx)(t.th,{children:"Fields"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Constraints"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Teachers"}),(0,d.jsx)(t.td,{children:"teacher_id"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"PK"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"first_name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"last_name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"username"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"password"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Classrooms"}),(0,d.jsx)(t.td,{children:"room_number"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"PK"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"teacher_id"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"FK (Teachers.teacher_id)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Students"}),(0,d.jsx)(t.td,{children:"student_id"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"PK"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"first_name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"last_name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"username"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"room_number"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"FK (Classrooms.room_number)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"password"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"games"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Games"}),(0,d.jsx)(t.td,{children:"game_id"}),(0,d.jsx)(t.td,{children:"INT"}),(0,d.jsx)(t.td,{children:"PK"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"game_name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"name"}),(0,d.jsx)(t.td,{children:"VARCHAR(255)"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"last_edited_date"}),(0,d.jsx)(t.td,{children:"DATE"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"json_file"}),(0,d.jsx)(t.td,{children:"BLOB"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"image_icon"}),(0,d.jsx)(t.td,{children:"BLOB"}),(0,d.jsx)(t.td,{})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var d=s(67294);const r={},n=d.createContext(r);function i(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);