"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{99012:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(85893),a=s(11151);const i={sidebar_position:2},r="Integration tests",o={id:"testing/integration-testing",title:"Integration tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-blastpad/docs/testing/integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Jeffin Johnykutty",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-blastpad/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-blastpad/docs/testing/acceptence-testing"}},l={},c=[{value:"Integration Test for use case 7",id:"integration-test-for-use-case-7",level:2},{value:"Integration Test for use case 8",id:"integration-test-for-use-case-8",level:2},{value:"Integration Test for use case 9",id:"integration-test-for-use-case-9",level:2},{value:"Integration Test for use case 10",id:"integration-test-for-use-case-10",level:2},{value:"Integration Test for use case 1",id:"integration-test-for-use-case-1",level:2},{value:"Integration Test for use case 3",id:"integration-test-for-use-case-3",level:2},{value:"Integration Test for Use Case 2",id:"integration-test-for-use-case-2",level:2},{value:"Assertions",id:"assertions",level:3},{value:"Integration Test for Use Case 11",id:"integration-test-for-use-case-11",level:2},{value:"Assertions",id:"assertions-1",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"integration-tests",children:"Integration tests"}),"\n",(0,n.jsx)(t.p,{children:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-7",children:"Integration Test for use case 7"}),"\n",(0,n.jsx)(t.p,{children:"A user would like to view their classmate's games and play one."}),"\n",(0,n.jsx)(t.p,{children:"Stubbed functional units: ClassroomManager, example database with classrooms, BlocklyCompiler"}),"\n",(0,n.jsx)(t.p,{children:"\u2022   Verify that ClassroomManager can initialize correctly\n\u2022   Verify that ClassroomManager can communicate with the example database\n\u2022   Verify that ClassroomManager returns classrooms from the example database when viewClassrooms() is called\n\u2022   Verify that ClassroomManager can view the games stored inside one of the returned classrooms\n\u2022   Verify that BlocklyCompiler can compile one of the games stored in the classroom"}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-8",children:"Integration Test for use case 8"}),"\n",(0,n.jsx)(t.p,{children:"A user would like to upload a game to a Classroom"}),"\n",(0,n.jsx)(t.p,{children:"Stubbed functional units: ClassroomManager, example database with classrooms"}),"\n",(0,n.jsx)(t.p,{children:"\u2022   Verify that ClassroomManager can initialize correctly\n\u2022   Verify that ClassroomManager can communicate with the example database\n\u2022   Verify that ClassroomManager can call a classroom's uploadGame() method"}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-9",children:"Integration Test for use case 9"}),"\n",(0,n.jsx)(t.p,{children:"A user/teacher would like to a create a classroom to host BlastPad projects for students"}),"\n",(0,n.jsx)(t.p,{children:"Stubbed functional units: BlastPad website, example database with classrooms"}),"\n",(0,n.jsx)(t.p,{children:"\u2022   Verify that a classroom can be added to the example database with a query.\n\u2022   Verify that a shortlink to the classroom can be generated."}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-10",children:"Integration Test for use case 10"}),"\n",(0,n.jsx)(t.p,{children:"A user/teacher would like to approve an uploaded game to be visible in the Classroom"}),"\n",(0,n.jsx)(t.p,{children:"Stubbed functional units: BlastPad website, example database with classrooms"}),"\n",(0,n.jsx)(t.p,{children:"\u2022   Verify that a classroom's games can be retrieved from the example database with a query.\n\u2022   Verify that a game in a pending state can be filtered from a list of retrieved games.\n\u2022   Verify that this game can be downloaded from the database with a query.\n\u2022   Verify that the game's pending state can be changed to an approved state with a query."}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-1",children:"Integration Test for use case 1"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Runs ",(0,n.jsx)(t.code,{children:"compileBlocklyToPython()"})," unit tests."]}),"\n",(0,n.jsxs)(t.li,{children:["Runs ",(0,n.jsx)(t.code,{children:"startGame()"})," unit tests."]}),"\n",(0,n.jsx)(t.li,{children:"Passes if all tests pass."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-3",children:"Integration Test for use case 3"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Runs ",(0,n.jsx)(t.code,{children:"createNewGame()"})," unit tests."]}),"\n",(0,n.jsxs)(t.li,{children:["Runs ",(0,n.jsx)(t.code,{children:"saveGame()"})," unit tests."]}),"\n",(0,n.jsx)(t.li,{children:"Passes if all tests pass."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-2",children:"Integration Test for Use Case 2"}),"\n",(0,n.jsx)(t.p,{children:"A user would like to develop a game using the BlastPad"}),"\n",(0,n.jsx)(t.p,{children:"Stubbed Functional Units: Blockly Code Editor, Device Manager, Gallery"}),"\n",(0,n.jsx)(t.h3,{id:"assertions",children:"Assertions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen (Device Manager: loadGallery() unit test)"}),"\n",(0,n.jsx)(t.li,{children:'Upon pressing the "Code Editor" button the user is sent to the Blockly Code Editor (Gallery: openCodeEditor() unit test)'}),"\n",(0,n.jsx)(t.li,{children:'Upon Pressing the "Create New Game" button the user is able to manipulate blocks in the editor and save the game to storage (BlocklyEditor: saveWorkSpace() unit test)'}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"integration-test-for-use-case-11",children:"Integration Test for Use Case 11"}),"\n",(0,n.jsx)(t.p,{children:"A user would like to configure the WiFi"}),"\n",(0,n.jsx)(t.p,{children:"Stubbed Functional Units: Configuration, Device Manager, Gallery"}),"\n",(0,n.jsx)(t.h3,{id:"assertions-1",children:"Assertions"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen (Device Manager: loadGallery() unit test)"}),"\n",(0,n.jsx)(t.li,{children:'After pressing the "WiFi" button the user is sent to the WiFi configuration screen (Gallery: openConfiguration() unit test)'}),"\n",(0,n.jsx)(t.li,{children:"The user is shown a list of available networks on the Configuration screen (Configuration: scan() unit test)"}),"\n",(0,n.jsx)(t.li,{children:'Then a network is selected and the user enters in a security key and presses the "Connect" button (Configuration: connect(SSID, securityKey) unit test)'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var n=s(67294);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);