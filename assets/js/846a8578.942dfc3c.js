"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7647],{53020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(85893),s=t(11151);const o={sidebar_position:3},r="Entity Relation Diagram",i={id:"system-architecture/entity-relation-diagram",title:"Entity Relation Diagram",description:"According to the following Entity-Relationship diagram below, there are four different relationships we can observe.",source:"@site/docs/system-architecture/entity-relation-diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/entity-relation-diagram",permalink:"/project-blastpad/docs/system-architecture/entity-relation-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/system-architecture/entity-relation-diagram.md",tags:[],version:"current",lastUpdatedBy:"tuk05348",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Sequence Diagrams",permalink:"/project-blastpad/docs/system-architecture/sequence-diagrams"},next:{title:"Development Environment",permalink:"/project-blastpad/docs/system-architecture/development-environment"}},m={},l=[];function c(e){const n={h1:"h1",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"entity-relation-diagram",children:"Entity Relation Diagram"}),"\n",(0,a.jsx)(n.p,{children:"According to the following Entity-Relationship diagram below, there are four different relationships we can observe."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:['"Teaches in" Relationship\nThis is a One-to-Many (1',":N",") relationship between Teachers and Classrooms. Each teacher can belong to multiple classrooms but each Classroom may only have a single Teacher.\nFurthermore, a Teacher belongs to 1 or many Classrooms and a Classroom may have one and only one Teacher."]}),"\n",(0,a.jsxs)(n.li,{children:['"Contains"\nA One-to-Many (1',":N",") relationship between Classrooms and Students. Each Classroom may contain multiple Students, but each Student belongs to a single Classroom.\nFurthermore, Classrooms have one or many Students and a Student may belong to one and only one Classroom."]}),"\n",(0,a.jsxs)(n.li,{children:['"Played by"\nA Many-to-Many (N',":N",") relationship between Students and Games. A Student may play multiple Games and a Game may be played by multiple Students.\nFurthermore, Games may belong to one or many Students and Students may have one or many Games."]}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:'---\ntitle: "E-R Diagram SQL Database"\n---\nerDiagram\n    Teachers {\n        teacher_id INT PK\n        first_name VARCHAR(255)\n        last_name VARCHAR(255)\n        username VARCHAR(255)\n\t\tpassword VARCHAR(255)\n    }\n    Classrooms {\n        room_number INT PK\n        teacher_id INT FK\n    }\n    Students {\n        student_id INT PK\n        first_name VARCHAR(255)\n        last_name VARCHAR(255)\n\t\tusername VARCHAR(255)\n        room_number INT FK\n        password VARCHAR(255)\n        games VARCHAR(255)\n    }\n    Games {\n\t\tgame_name VARCHAR(255)\n        game_id INT PK\n        name VARCHAR(255)\n        last_edited_date DATE\n        json_file BLOB\n        image_icon BLOB\n    }\n    \n    Teachers ||--|{ Classrooms : "Teaches in"\n    Classrooms ||--|{ Students : "Contains"\n    Games |{--|{ Students : "Played by"'})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(67294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);