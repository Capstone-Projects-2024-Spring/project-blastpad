"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1877],{25958:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(85893),c=s(11151);const t={sidebar_position:4},o="configuration.py",r={id:"api-specification/backend-api-config",title:"configuration.py",description:"class Configuration",source:"@site/docs/api-specification/backend-api-config.md",sourceDirName:"api-specification",slug:"/api-specification/backend-api-config",permalink:"/project-blastpad/docs/api-specification/backend-api-config",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/api-specification/backend-api-config.md",tags:[],version:"current",lastUpdatedBy:"Jacob Snarr",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"BlastPad",permalink:"/project-blastpad/docs/api-specification/BlastPadSphinxGeneratedDoc"},next:{title:"Test Procedures",permalink:"/project-blastpad/docs/category/test-procedures"}},d={},l=[{value:"<code>class Configuration</code>",id:"class-configuration",level:2},{value:"<code>connectionStatus</code>",id:"connectionstatus",level:2},{value:"<code>listOfAvailNetworks</code>",id:"listofavailnetworks",level:2},{value:"<code>SSID</code>",id:"ssid",level:2},{value:"<code>securityKey</code>",id:"securitykey",level:2},{value:"<code>scan()</code>",id:"scan",level:2},{value:"<code>connect(SSID: string, securityKey: string)</code>",id:"connectssid-string-securitykey-string",level:2},{value:"<code>close()</code>",id:"close",level:2},{value:"<code>class Sensor</code>",id:"class-sensor",level:2},{value:"<code>sensorID</code>",id:"sensorid",level:2},{value:"<code>sensorData</code>",id:"sensordata",level:2},{value:"<code>getSensorData()</code>",id:"getsensordata",level:2},{value:"<code>recalibrateSensor()</code>",id:"recalibratesensor",level:2},{value:"<code>clearSensorData()</code>",id:"clearsensordata",level:2},{value:"<code>class Documentation</code>",id:"class-documentation",level:2},{value:"<code>header</code>",id:"header",level:2},{value:"<code>body</code>",id:"body",level:2},{value:"<code>loadContent(type: String)</code>",id:"loadcontenttype-string",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configurationpy",children:"configuration.py"}),"\n",(0,i.jsx)(n.h2,{id:"class-configuration",children:(0,i.jsx)(n.code,{children:"class Configuration"})}),"\n",(0,i.jsx)(n.p,{children:"This class runs the backend functions allowing a user to connect to a wifi network, list available networks, scan, and close a connection."}),"\n",(0,i.jsx)(n.h2,{id:"connectionstatus",children:(0,i.jsx)(n.code,{children:"connectionStatus"})}),"\n",(0,i.jsx)(n.p,{children:"This is a boolean variable that shows if the device is connected"}),"\n",(0,i.jsx)(n.h2,{id:"listofavailnetworks",children:(0,i.jsx)(n.code,{children:"listOfAvailNetworks"})}),"\n",(0,i.jsx)(n.p,{children:"This is a list that holds the list of names of available networks"}),"\n",(0,i.jsx)(n.h2,{id:"ssid",children:(0,i.jsx)(n.code,{children:"SSID"})}),"\n",(0,i.jsx)(n.p,{children:"This is the string of the name of the network a user wants to connect to"}),"\n",(0,i.jsx)(n.h2,{id:"securitykey",children:(0,i.jsx)(n.code,{children:"securityKey"})}),"\n",(0,i.jsx)(n.p,{children:"This is the string to which the user's security key to the network is saved"}),"\n",(0,i.jsx)(n.h2,{id:"scan",children:(0,i.jsx)(n.code,{children:"scan()"})}),"\n",(0,i.jsx)(n.p,{children:"Function to scan for avialble wifi networks."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"String []"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connectssid-string-securitykey-string",children:(0,i.jsx)(n.code,{children:"connect(SSID: string, securityKey: string)"})}),"\n",(0,i.jsx)(n.p,{children:"Function to connect to a wifi network."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSID"})," \u2014 ",(0,i.jsx)(n.code,{children:"String"})," representing the name of the desired wifi network"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"securityKey"})," \u2014 ",(0,i.jsx)(n.code,{children:"String"})," representing the network key of said network"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"close",children:(0,i.jsx)(n.code,{children:"close()"})}),"\n",(0,i.jsx)(n.p,{children:"Function to close the current connection to a wifi network."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pre-condition:"})," Must be connected to a WiFi network"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"class-sensor",children:(0,i.jsx)(n.code,{children:"class Sensor"})}),"\n",(0,i.jsx)(n.p,{children:"This class communicates between blockly blocks and sensors on the Raspberry Pi to get sensor information for user-created programs"}),"\n",(0,i.jsx)(n.h2,{id:"sensorid",children:(0,i.jsx)(n.code,{children:"sensorID"})}),"\n",(0,i.jsx)(n.p,{children:"This is an integer that holds the ID of the current sensor"}),"\n",(0,i.jsx)(n.h2,{id:"sensordata",children:(0,i.jsx)(n.code,{children:"sensorData"})}),"\n",(0,i.jsx)(n.p,{children:"This is an array of integers that holds the sensor data"}),"\n",(0,i.jsx)(n.h2,{id:"getsensordata",children:(0,i.jsx)(n.code,{children:"getSensorData()"})}),"\n",(0,i.jsx)(n.p,{children:"Function to get data from the current sensor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pre-condition:"})," Must have run for at least some time to get enough valid data"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"Int []"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"recalibratesensor",children:(0,i.jsx)(n.code,{children:"recalibrateSensor()"})}),"\n",(0,i.jsx)(n.p,{children:"Recalibrate the current sensor."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clearsensordata",children:(0,i.jsx)(n.code,{children:"clearSensorData()"})}),"\n",(0,i.jsx)(n.p,{children:"Function to clear the current buffer of saved sensor data."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pre-condition:"})," Must have a full buffer of data"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"class-documentation",children:(0,i.jsx)(n.code,{children:"class Documentation"})}),"\n",(0,i.jsx)(n.p,{children:"This class stores and displays the help documentation for Blockly blocks"}),"\n",(0,i.jsx)(n.h2,{id:"header",children:(0,i.jsx)(n.code,{children:"header"})}),"\n",(0,i.jsx)(n.p,{children:"This is a string that holds the important information of the current doc to distinguish it from others"}),"\n",(0,i.jsx)(n.h2,{id:"body",children:(0,i.jsx)(n.code,{children:"body"})}),"\n",(0,i.jsx)(n.p,{children:"This is a string that holds the content of the documentation block"}),"\n",(0,i.jsx)(n.h2,{id:"loadcontenttype-string",children:(0,i.jsx)(n.code,{children:"loadContent(type: String)"})}),"\n",(0,i.jsx)(n.p,{children:"Function to get data from the current sensor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"})," \u2014 ",(0,i.jsx)(n.code,{children:"String"})," representing the ID of the block we are getting documentation for"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," ",(0,i.jsx)(n.code,{children:"String"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(67294);const c={},t=i.createContext(c);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);