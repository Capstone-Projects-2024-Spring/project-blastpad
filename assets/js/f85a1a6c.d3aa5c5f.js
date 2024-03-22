"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{64225:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=n(85893),l=n(11151);const r={sidebar_position:1},t="Unit tests",a={id:"testing/unit-testing",title:"Unit tests",description:"BlocklyEditor",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-blastpad/docs/testing/unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Jacob Snarr",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-blastpad/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-blastpad/docs/testing/integration-testing"}},c={},o=[{value:"BlocklyEditor",id:"blocklyeditor",level:2},{value:"+saveWorkspace()",id:"saveworkspace",level:3},{value:"+loadWorkspace()",id:"loadworkspace",level:3},{value:"+loadGalleryTest()",id:"loadgallerytest",level:3},{value:"ClassroomManager",id:"classroommanager",level:2},{value:"+joinClassroom(c: Classroom)",id:"joinclassroomc-classroom",level:3},{value:"+leaveClassroom(c: Classroom)",id:"leaveclassroomc-classroom",level:3},{value:"+viewClassrooms()",id:"viewclassrooms",level:3},{value:"Classroom",id:"classroom",level:2},{value:"+deleteGame(userID: int): bool",id:"deletegameuserid-int-bool",level:3},{value:"+approveGame(userID: int): bool",id:"approvegameuserid-int-bool",level:3},{value:"+uploadGame(game: Game)",id:"uploadgamegame-game",level:3},{value:"Game",id:"game",level:2},{value:"+startGame()",id:"startgame",level:3},{value:"+pauseGame()",id:"pausegame",level:3},{value:"+quitGame()",id:"quitgame",level:3},{value:"+uploadToClassroom(Classroom)",id:"uploadtoclassroomclassroom",level:3},{value:"+compileGame()",id:"compilegame",level:3},{value:"Sensor",id:"sensor",level:2},{value:"+getSensorData()",id:"getsensordata",level:3},{value:"+recalibrateSensor()",id:"recalibratesensor",level:3},{value:"+clearSensorData()",id:"clearsensordata",level:3},{value:"Documentation",id:"documentation",level:2},{value:"+loadContent(type: String) : String",id:"loadcontenttype-string--string",level:3},{value:"Configuration",id:"configuration",level:2},{value:"+scan() : String[]",id:"scan--string",level:3},{value:"+connect(SSID: String, securityKey: String)",id:"connectssid-string-securitykey-string",level:3},{value:"+close()",id:"close",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsx)(s.h2,{id:"blocklyeditor",children:"BlocklyEditor"}),"\n",(0,i.jsx)(s.h3,{id:"saveworkspace",children:"+saveWorkspace()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed test class: blocklyEditor\nRequires access to sandboxed filesystem."}),"\n",(0,i.jsx)(s.p,{children:"Unit test checks if a workspace's contents have been updated after method is called."}),"\n",(0,i.jsx)(s.h3,{id:"loadworkspace",children:"+loadWorkspace()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed test class: blocklyEditor\nRequires some sort of sandboxed browser. Cypress is ideal for this."}),"\n",(0,i.jsx)(s.p,{children:"Unit test checks that the correct workspace has been loaded and displayed in the editor."}),"\n",(0,i.jsx)(s.h1,{id:"devicemanager-class",children:"DeviceManager Class"}),"\n",(0,i.jsx)(s.h3,{id:"loadgallerytest",children:"+loadGalleryTest()"}),"\n",(0,i.jsx)(s.p,{children:'This unit test is for the loadGallery() method in the DeviceManager class. The test calls the loadGallery method and tests if the "currentScreen" variable was changed to "Gallery".'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Stubbed test class: instance of DeviceManager class"}),"\n",(0,i.jsx)(s.li,{children:"Input: Void"}),"\n",(0,i.jsx)(s.li,{children:"Expected Output: True"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'public loadGalleryTest(Void) -> Boolean\n    deviceManager = New DeviceManager()\n    deviceManager.loadGallery()\n    return deviceManager.currentScreen == "Gallery"\n'})}),"\n",(0,i.jsx)(s.h2,{id:"classroommanager",children:"ClassroomManager"}),"\n",(0,i.jsx)(s.h3,{id:"joinclassroomc-classroom",children:"+joinClassroom(c: Classroom)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates an empty list of ",(0,i.jsx)(s.code,{children:"Classroom"})," objects."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"expected_size"})," is set to the current list size plus one."]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"Classroom"})," object is instantiated with random IDs and a ",(0,i.jsx)(s.code,{children:"Game"})," list."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"joinClassroom()"})," with the ",(0,i.jsx)(s.code,{children:"Classroom"})," object."]}),"\n",(0,i.jsxs)(s.li,{children:["Checks if the ",(0,i.jsx)(s.code,{children:"Classroom"})," list size has increased by one."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"leaveclassroomc-classroom",children:"+leaveClassroom(c: Classroom)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates an empty list of ",(0,i.jsx)(s.code,{children:"Classroom"})," objects."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"expected_size"})," is set to the current list size minus one."]}),"\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.code,{children:"Classroom"})," object is instantiated with random IDs and a ",(0,i.jsx)(s.code,{children:"Game"})," list."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"leaveClassroom()"})," with the ",(0,i.jsx)(s.code,{children:"Classroom"})," object."]}),"\n",(0,i.jsxs)(s.li,{children:["Checks if the ",(0,i.jsx)(s.code,{children:"Classroom"})," list size has decreased by one."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"viewclassrooms",children:"+viewClassrooms()"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Instantiates several ",(0,i.jsx)(s.code,{children:"Classroom"})," objects and stores them in a list."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"viewClassrooms()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if all ",(0,i.jsx)(s.code,{children:"Classroom"})," objects are displayed."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"classroom",children:"Classroom"}),"\n",(0,i.jsx)(s.h3,{id:"deletegameuserid-int-bool",children:"+deleteGame(userID: int): bool"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Instantiates a ",(0,i.jsx)(s.code,{children:"Classroom"})," and two ",(0,i.jsx)(s.code,{children:"Game"})," objects."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"userID"})," matches one of the ",(0,i.jsx)(s.code,{children:"Game"})," objects' author attribute."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"deleteGame()"})," with ",(0,i.jsx)(s.code,{children:"userID"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"approvegameuserid-int-bool",children:"+approveGame(userID: int): bool"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Classroom"})," and a ",(0,i.jsx)(s.code,{children:"Game"})," object."]}),"\n",(0,i.jsxs)(s.li,{children:["Sets ",(0,i.jsx)(s.code,{children:"userID"})," to the ",(0,i.jsx)(s.code,{children:"Game"})," object's author."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"approveGame()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"uploadgamegame-game",children:"+uploadGame(game: Game)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Classroom"})," with a ",(0,i.jsx)(s.code,{children:"Game"})," list."]}),"\n",(0,i.jsxs)(s.li,{children:["Sets ",(0,i.jsx)(s.code,{children:"expected"})," to the ",(0,i.jsx)(s.code,{children:"Game"})," list's size plus one."]}),"\n",(0,i.jsxs)(s.li,{children:["Instantiates a ",(0,i.jsx)(s.code,{children:"Game"})," object with random attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"uploadGame()"})," with the ",(0,i.jsx)(s.code,{children:"Game"})," object."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if ",(0,i.jsx)(s.code,{children:"Game"})," list size equals ",(0,i.jsx)(s.code,{children:"expected"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"game",children:"Game"}),"\n",(0,i.jsx)(s.h3,{id:"startgame",children:"+startGame()"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Game"})," object with random attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"startGame()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"pausegame",children:"+pauseGame()"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Game"})," object with random attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"startGame()"})," then ",(0,i.jsx)(s.code,{children:"pauseGame()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"quitgame",children:"+quitGame()"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Game"})," object with random attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"startGame()"})," then ",(0,i.jsx)(s.code,{children:"quitGame()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"uploadtoclassroomclassroom",children:"+uploadToClassroom(Classroom)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Instantiates a ",(0,i.jsx)(s.code,{children:"Classroom"})," with a ",(0,i.jsx)(s.code,{children:"Game"})," list."]}),"\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Game"})," object."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"expected"})," is set to the ",(0,i.jsx)(s.code,{children:"Game"})," list's size plus one."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"uploadToClassroom()"})," with the ",(0,i.jsx)(s.code,{children:"Classroom"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if ",(0,i.jsx)(s.code,{children:"Game"})," list size equals ",(0,i.jsx)(s.code,{children:"expected"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"compilegame",children:"+compileGame()"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Game"})," object with random attributes."]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"compileGame()"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if it returns ",(0,i.jsx)(s.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"sensor",children:"Sensor"}),"\n",(0,i.jsx)(s.h3,{id:"getsensordata",children:"+getSensorData()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: sensor\nRequires hardware to be connected to a sensor"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if sensorData is a non-empty array and if the calibration parameter is set to false."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Sensor"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"getSensorData()"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if it returns a non-zero integer array and calibration is set to false"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"recalibratesensor",children:"+recalibrateSensor()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: sensor\nRequires hardware to be connected to a sensor"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if the calibration parameter has been changed to True."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Sensor"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"getSensorData()"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if the calibration parameter is set to True."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"clearsensordata",children:"+clearSensorData()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: sensor\nRequires hardware to be connected to a sensor"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if the sensorData array is set to all zeroes."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Sensor"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"clearSensorData()"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if the sensorData array is composed of all zeroes."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(s.h3,{id:"loadcontenttype-string--string",children:"+loadContent(type: String) : String"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: documentation\nRequires an existing blockly documentation file assigned a type"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if a documentation string has been returned from the requested dummy content (given by type)."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Documentation"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"expected"})," is set to the documentation string manually"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"loadContent(type)"})]}),"\n",(0,i.jsxs)(s.li,{children:["Passes if ",(0,i.jsx)(s.code,{children:"Documentation"})," returned equals ",(0,i.jsx)(s.code,{children:"expected"})," string."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(s.h3,{id:"scan--string",children:"+scan() : String[]"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: configuration\nRequires absence of connections to any network"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if scan returns a non-empty array of available networks to connect to."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Configuration"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"scan()"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if returned String array is non-empty"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"connectssid-string-securitykey-string",children:"+connect(SSID: String, securityKey: String)"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: configuration\nRequires access to the wireless adapter hardware"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if connect(SSID, securityKey) sets the connectionStatus to True"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Configuration"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"connect(SSID, securityKey)"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if connectionStatus is True"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"close",children:"+close()"}),"\n",(0,i.jsx)(s.p,{children:"Stubbed Test Class: configuration\nRequires a network connection"}),"\n",(0,i.jsx)(s.p,{children:"This unit test checks if close() sets the connectionStatus to False"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Creates a ",(0,i.jsx)(s.code,{children:"Configuration"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:["Calls ",(0,i.jsx)(s.code,{children:"close()"})]}),"\n",(0,i.jsx)(s.li,{children:"Passes if connectionStatus is False"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>t});var i=n(67294);const l={},r=i.createContext(l);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);