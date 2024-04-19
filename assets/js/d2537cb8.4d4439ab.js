"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[913],{79585:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(85893),i=s(11151);const r={sidebar_position:6},o="Version Control",c={id:"system-architecture/version-control",title:"Version Control",description:"Overview",source:"@site/docs/system-architecture/version-control.md",sourceDirName:"system-architecture",slug:"/system-architecture/version-control",permalink:"/project-blastpad/docs/system-architecture/version-control",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/system-architecture/version-control.md",tags:[],version:"current",lastUpdatedBy:"Mustafa Wedee",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Electrical Diagrams",permalink:"/project-blastpad/docs/system-architecture/electrical-diagrams"},next:{title:"Design-ClassDiagramDesign",permalink:"/project-blastpad/docs/system-architecture/Design-ClassDiagramDesign"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Branching",id:"branching",level:2},{value:"Branch Protection",id:"branch-protection",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Webpack",id:"webpack",level:3},{value:"Docusaurus Build",id:"docusaurus-build",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"version-control",children:"Version Control"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["We're managing BlastPad using ",(0,t.jsx)(n.strong,{children:"git"})," and ",(0,t.jsx)(n.strong,{children:"GitHub"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Our git repository serves as a ",(0,t.jsx)(n.strong,{children:"monorepo"})," combining four distinct parts of our project"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docusaurus Documentation"}),"\n",(0,t.jsxs)(n.li,{children:["On-device Python software","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tkinter GUI"}),"\n",(0,t.jsx)(n.li,{children:"Flask Server"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Local block code editor"}),"\n",(0,t.jsx)(n.li,{children:"Remote community hub website"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"branching",children:"Branching"}),"\n",(0,t.jsxs)(n.p,{children:["Branches are created based on the latest ",(0,t.jsx)(n.strong,{children:"main"})," branch commit."]}),"\n",(0,t.jsxs)(n.p,{children:["Branches are named after and linked to Jira issues. These issue-based branches are always prefixed ",(0,t.jsx)(n.code,{children:"BP-XX"})," where XX is the issue number the branch is linked to."]}),"\n",(0,t.jsx)(n.h2,{id:"branch-protection",children:"Branch Protection"}),"\n",(0,t.jsxs)(n.p,{children:["We have 3 branch protection rules enabled on our GitHub that apply to the ",(0,t.jsx)(n.strong,{children:"main"})," branch:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Require a pull request before merging","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Require 2 pull request approvals before merging"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Do not allow bypassing the above settings"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: these settings currently conflict with the webpack GitHub Action we have setup. Work should be done to resolve this conflict so that both setups can co-exist."})}),"\n",(0,t.jsx)(n.h2,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,t.jsx)(n.h3,{id:"webpack",children:"Webpack"}),"\n",(0,t.jsxs)(n.p,{children:["We use a ",(0,t.jsx)(n.strong,{children:"GitHub Action"})," on our ",(0,t.jsx)(n.strong,{children:"main"})," branch to compile our block code editor website using Webpack. Webpack compiles this website into just two files: one HTML file and one JavaScript file. This serves to link the many components of the website and also minimizes the code for smaller file sizes and faster load times."]}),"\n",(0,t.jsx)(n.h3,{id:"docusaurus-build",children:"Docusaurus Build"}),"\n",(0,t.jsxs)(n.p,{children:["We use a ",(0,t.jsx)(n.strong,{children:"GitHub Action"})," on our ",(0,t.jsx)(n.strong,{children:"main"})," brnach to build our Docusaurus project documentation. Docusaurus uses the text and configuration details from Markdown and JSON files to build an HTML-based documentation website."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);