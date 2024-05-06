"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{99012:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(85893),i=n(11151);const o={sidebar_position:2},r="Integration Tests",l={id:"testing/integration-testing",title:"Integration Tests",description:"You can find the generated integration test report here.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-blastpad/docs/testing/integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Neil",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit Tests",permalink:"/project-blastpad/docs/testing/unit-testing"},next:{title:"Acceptance Tests",permalink:"/project-blastpad/docs/testing/acceptance-testing"}},a={},d=[{value:"Integration Test for Use Case 1",id:"integration-test-for-use-case-1",level:2},{value:"Integration Test for Use Case 2",id:"integration-test-for-use-case-2",level:2},{value:"Integration Test for Use Case 3",id:"integration-test-for-use-case-3",level:2},{value:"Integration Test for Use Case 4",id:"integration-test-for-use-case-4",level:2},{value:"Integration Test for Use Case 5",id:"integration-test-for-use-case-5",level:2},{value:"Integration Test for Use Case 6",id:"integration-test-for-use-case-6",level:2},{value:"Integration Test for Use Case 7",id:"integration-test-for-use-case-7",level:2},{value:"Integration Test for Use Case 8",id:"integration-test-for-use-case-8",level:2},{value:"Integration Test for Use Case 9",id:"integration-test-for-use-case-9",level:2},{value:"Integration Test for Use Case 10",id:"integration-test-for-use-case-10",level:2},{value:"Integration Test for Use Case 11",id:"integration-test-for-use-case-11",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,t.jsxs)(s.p,{children:["You can find the generated integration test report ",(0,t.jsx)(s.a,{href:"https://htmlpreview.github.io/?https://github.com/Capstone-Projects-2024-Spring/project-blastpad/blob/assets/integration-report.html",children:"here."})]}),"\n",(0,t.jsx)(s.p,{children:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-1",children:"Integration Test for Use Case 1"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to play a game on their BlastPad."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Code Editor" button the user is sent to the Blockly Code Editor.'}),"\n",(0,t.jsx)(s.li,{children:'Upon Pressing the "Create New Game" button the user is able to manipulate blocks in the editor and save the game to storage.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Compiled Game Runs"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-2",children:"Integration Test for Use Case 2"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to develop a game using the BlastPad."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Code Editor" button the user is sent to the Blockly Code Editor.'}),"\n",(0,t.jsx)(s.li,{children:'Upon Pressing the "Create New Game" button the user is able to manipulate blocks in the editor and save the game to storage.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Editor"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Save Game"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-3",children:"Integration Test for Use Case 3"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to develop a game for the BlastPad with their laptop."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon startup, the BlastPad starts the flask server."}),"\n",(0,t.jsx)(s.li,{children:"Upon connecting to blastpad.local:8000/editor, the user is presented with the editor."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Save Game" button, the workspace is saved to the BlastPad.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Editor"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Save Game"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-4",children:"Integration Test for Use Case 4"}),"\n",(0,t.jsx)(s.p,{children:"A user\u2019s Blockly code fails during compilation and they would like to view the error message in order to debug their blocks."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon startup, the BlastPad starts the flask server."}),"\n",(0,t.jsx)(s.li,{children:"Upon connecting to blastpad.local:8000/editor, the user is presented with the editor."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Save Game" button, the workspace is not saved and an error message is displayed.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Editor"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Fail to Save Game"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-5",children:"Integration Test for Use Case 5"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to join a classroom from the BlastPad."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Settings" button the settings page is displayed.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Join Classroom" button, the user is able to join a classroom.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Retrieve Games from a Classroom"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-6",children:"Integration Test for Use Case 6"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to view their classmate's games and play one."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Settings" button the settings page is displayed.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Join Classroom" button, the user is able to join a classroom.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Classroom" button, the user is able to view games in a classroom.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Download Game" button, the user is able to download and play a game from the classroom.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Retrieve Games from a Classroom"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Download Game from Classroom"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Compiled Game Runs"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-7",children:"Integration Test for Use Case 7"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to upload a game to a Classroom"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Settings" button the settings page is displayed.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Join Classroom" button, the user is able to join a classroom.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Share to Classroom" button, the user is able to share their game to a classroom.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Retrieve Games from a Classroom"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Upload Game to Classroom"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-8",children:"Integration Test for Use Case 8"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to view the games on the Community Hub and play one."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Community Hub" button, the user is able to join a classroom.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Download Game" button, the user is able to download and play a game from the community hub.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Retrieve Games from the Community Hub"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Download Game from Community Hub"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Game Compiles"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Blockly Compiler / Compiled Game Runs"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-9",children:"Integration Test for Use Case 9"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to upload a game to the Community Hub."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Share to Community Hub" button, the user is able to share their game to a community hub.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Retrieve Games from the Community Hub"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Upload Game to Community Hub"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-10",children:"Integration Test for Use Case 10"}),"\n",(0,t.jsx)(s.p,{children:"A user/teacher would like to a create a classroom to host BlastPad projects for students"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen."}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Settings" button the settings page is displayed.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Create" tab, the create classroom dialog is displayed.'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Create Classroom" button, the user\'s classroom is added to the database of classrooms.'}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Saved Games"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Create Classroom"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})}),"\n",(0,t.jsx)(s.h2,{id:"integration-test-for-use-case-11",children:"Integration Test for Use Case 11"}),"\n",(0,t.jsx)(s.p,{children:"A user would like to configure the WiFi for the BlastPad."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Upon turning on the BlastPad the user is routed to the Homescreen"}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Settings" button the user is sent to the settings page'}),"\n",(0,t.jsx)(s.li,{children:'Upon pressing the "Wi-Fi" tab, the user is presented with the wifi configuration dialog.'}),"\n",(0,t.jsx)(s.li,{children:"The user is shown a list of available networks on the configuration dialog."}),"\n",(0,t.jsx)(s.li,{children:"Upon selecting a network, the user is able to enter the network's password."}),"\n",(0,t.jsx)(s.li,{children:"Upon successfully entering the network's password, the BlastPad is connected to the network."}),"\n"]}),"\n",(0,t.jsx)(n,{open:"True",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Access Home Screen"})," unit test."]}),"\n",(0,t.jsxs)(s.li,{children:["Runs ",(0,t.jsx)(s.code,{children:"Flask / Get Local Wifi Networks"})," unit test."]}),"\n",(0,t.jsx)(s.li,{children:"Passes if all tests pass."}),"\n"]})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var t=n(67294);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);