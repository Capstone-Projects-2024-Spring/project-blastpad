"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5071],{93398:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var d=n(85893),i=n(11151);const t={sidebar_position:3},r="BlastPad",l={id:"api-specification/BlastPadSphinxGeneratedDoc",title:"BlastPad",description:"(generated using Sphinx)",source:"@site/docs/api-specification/BlastPadSphinxGeneratedDoc.md",sourceDirName:"api-specification",slug:"/api-specification/BlastPadSphinxGeneratedDoc",permalink:"/project-blastpad/docs/api-specification/BlastPadSphinxGeneratedDoc",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/api-specification/BlastPadSphinxGeneratedDoc.md",tags:[],version:"current",lastUpdatedBy:"Jacob Snarr",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"API 1 - Swagger Petstore",permalink:"/project-blastpad/docs/api-specification/openapi-spec"},next:{title:"configuration.py",permalink:"/project-blastpad/docs/api-specification/backend-api-config"}},c={},a=[{value:"Wireless Manager API",id:"wireless-manager-api",level:2},{value:"<code>scan_wifi_networks()</code>",id:"scan_wifi_networks",level:3},{value:"Usage:",id:"usage",level:4},{value:"Returns:",id:"returns",level:4},{value:"<code>list_wifi_networks()</code>",id:"list_wifi_networks",level:3},{value:"Usage:",id:"usage-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"<code>connect_to_wifi(ssid, password=None)</code>",id:"connect_to_wifissid-passwordnone",level:3},{value:"Usage:",id:"usage-2",level:4},{value:"<code>disconnect_wifi()</code>",id:"disconnect_wifi",level:3},{value:"Usage:",id:"usage-3",level:4},{value:"<code>show_wifi_security(ssid)</code>",id:"show_wifi_securityssid",level:3},{value:"Usage:",id:"usage-4",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"Teacher Class",id:"teacher-class",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Methods",id:"methods",level:3},{value:"<code>get_teacher_id()</code>",id:"get_teacher_id",level:4},{value:"Usage:",id:"usage-5",level:5},{value:"Returns:",id:"returns-3",level:5},{value:"<code>set_teacher_id(teacher_id)</code>",id:"set_teacher_idteacher_id",level:4},{value:"Usage:",id:"usage-6",level:5},{value:"Classroom Class",id:"classroom-class",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Methods",id:"methods-1",level:3},{value:"<code>get_room_number()</code>",id:"get_room_number",level:4},{value:"Usage:",id:"usage-7",level:5},{value:"Returns:",id:"returns-4",level:5},{value:"<code>set_room_number(room_number)</code>",id:"set_room_numberroom_number",level:4},{value:"Usage:",id:"usage-8",level:5},{value:"Student Class",id:"student-class",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Methods",id:"methods-2",level:3},{value:"<code>get_student_id()</code>",id:"get_student_id",level:4},{value:"Usage:",id:"usage-9",level:5},{value:"Returns:",id:"returns-5",level:5},{value:"<code>set_student_id(student_id)</code>",id:"set_student_idstudent_id",level:4},{value:"Usage:",id:"usage-10",level:5},{value:"Game Class",id:"game-class",level:2},{value:"Attributes",id:"attributes-3",level:3},{value:"Methods",id:"methods-3",level:3},{value:"<code>get_game_name()</code>",id:"get_game_name",level:4},{value:"Usage:",id:"usage-11",level:5},{value:"Returns:",id:"returns-6",level:5},{value:"<code>set_game_name(game_name)</code>",id:"set_game_namegame_name",level:4},{value:"Usage:",id:"usage-12",level:5}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"blastpad",children:"BlastPad"}),"\n",(0,d.jsxs)(s.p,{children:["(generated using ",(0,d.jsx)(s.a,{href:"../../../build/html/index.html",children:"Sphinx"}),")"]}),"\n",(0,d.jsx)(s.h1,{id:"api-documentation",children:"API Documentation"}),"\n",(0,d.jsx)(s.h2,{id:"wireless-manager-api",children:"Wireless Manager API"}),"\n",(0,d.jsx)(s.h3,{id:"scan_wifi_networks",children:(0,d.jsx)(s.code,{children:"scan_wifi_networks()"})}),"\n",(0,d.jsx)(s.p,{children:"Scans for available Wi-Fi networks on the 'wlan0' network interface."}),"\n",(0,d.jsx)(s.h4,{id:"usage",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"result = subprocess.run(     ['iw', 'dev', 'wlan0', 'scan'], capture_output=True, text=True)"})}),"\n",(0,d.jsx)(s.h4,{id:"returns",children:"Returns:"}),"\n",(0,d.jsxs)(s.p,{children:["Command-Line response\n",(0,d.jsx)(s.code,{children:"result.stdout"})]}),"\n",(0,d.jsx)(s.h3,{id:"list_wifi_networks",children:(0,d.jsx)(s.code,{children:"list_wifi_networks()"})}),"\n",(0,d.jsx)(s.p,{children:"Lists the SSIDs of available Wi-Fi networks."}),"\n",(0,d.jsx)(s.h4,{id:"usage-1",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"scan_result = wirelessManager.scan_wifi_networks() networks = re.findall(r'SSID: (.+)', scan_result)"})}),"\n",(0,d.jsx)(s.h4,{id:"returns-1",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:"list of available networks"}),"\n",(0,d.jsx)(s.h3,{id:"connect_to_wifissid-passwordnone",children:(0,d.jsx)(s.code,{children:"connect_to_wifi(ssid, password=None)"})}),"\n",(0,d.jsx)(s.p,{children:"Connects to a Wi-Fi network with the specified SSID and optional password."}),"\n",(0,d.jsx)(s.h4,{id:"usage-2",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"wirelessManager.connect_to_wifi('SSID', 'password')"})}),"\n",(0,d.jsx)(s.h3,{id:"disconnect_wifi",children:(0,d.jsx)(s.code,{children:"disconnect_wifi()"})}),"\n",(0,d.jsx)(s.p,{children:"Disconnects from the currently connected Wi-Fi network."}),"\n",(0,d.jsx)(s.h4,{id:"usage-3",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"wirelessManager.disconnect_wifi()"})}),"\n",(0,d.jsx)(s.h3,{id:"show_wifi_securityssid",children:(0,d.jsx)(s.code,{children:"show_wifi_security(ssid)"})}),"\n",(0,d.jsx)(s.p,{children:"Shows the type of Wi-Fi security on a network."}),"\n",(0,d.jsx)(s.h4,{id:"usage-4",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"result = subprocess.run(     ['iw', 'dev', 'wlan0', 'scan', 'essid', 'SSID'], capture_output=True, text=True) security_info = re.search(r'WPA2?-(?:PSK|EAP)', result.stdout)"})}),"\n",(0,d.jsx)(s.h4,{id:"returns-2",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:'Security Info Type or "Security information not available."'})}),"\n",(0,d.jsx)(s.h2,{id:"teacher-class",children:"Teacher Class"}),"\n",(0,d.jsx)(s.p,{children:"Represents a teacher."}),"\n",(0,d.jsx)(s.h3,{id:"attributes",children:"Attributes"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"teacher_id"})," (int): The unique identifier for the teacher."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"first_name"})," (string): The first name of the teacher."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"last_name"})," (string): The last name of the teacher."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"username"})," (string): The username of the teacher."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"password"})," (string): The password of the teacher."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(s.h4,{id:"get_teacher_id",children:(0,d.jsx)(s.code,{children:"get_teacher_id()"})}),"\n",(0,d.jsx)(s.p,{children:"Get the teacher's ID."}),"\n",(0,d.jsx)(s.h5,{id:"usage-5",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"teacher.get_teacher_id()"})}),"\n",(0,d.jsx)(s.h5,{id:"returns-3",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"teacher.teacher_id"})}),"\n",(0,d.jsx)(s.h4,{id:"set_teacher_idteacher_id",children:(0,d.jsx)(s.code,{children:"set_teacher_id(teacher_id)"})}),"\n",(0,d.jsx)(s.p,{children:"Set the teacher's ID."}),"\n",(0,d.jsx)(s.h5,{id:"usage-6",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"teacher.set_teacher_id(42069)"})}),"\n",(0,d.jsx)(s.h2,{id:"classroom-class",children:"Classroom Class"}),"\n",(0,d.jsx)(s.p,{children:"Represents a classroom."}),"\n",(0,d.jsx)(s.h3,{id:"attributes-1",children:"Attributes"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"room_number"})," (int): The unique identifier for the classroom."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"teacher_id"})," (int): The foreign key referencing the teacher of the classroom."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"methods-1",children:"Methods"}),"\n",(0,d.jsx)(s.h4,{id:"get_room_number",children:(0,d.jsx)(s.code,{children:"get_room_number()"})}),"\n",(0,d.jsx)(s.p,{children:"Get the room number."}),"\n",(0,d.jsx)(s.h5,{id:"usage-7",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"classroom.get_room_number()"})}),"\n",(0,d.jsx)(s.h5,{id:"returns-4",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"classroom.room_number"})}),"\n",(0,d.jsx)(s.h4,{id:"set_room_numberroom_number",children:(0,d.jsx)(s.code,{children:"set_room_number(room_number)"})}),"\n",(0,d.jsx)(s.p,{children:"Set the room number."}),"\n",(0,d.jsx)(s.h5,{id:"usage-8",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"classroom.set_room_number(69420)"})}),"\n",(0,d.jsx)(s.h2,{id:"student-class",children:"Student Class"}),"\n",(0,d.jsx)(s.p,{children:"Represents a student."}),"\n",(0,d.jsx)(s.h3,{id:"attributes-2",children:"Attributes"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"student_id"})," (int): The unique identifier for the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"first_name"})," (string): The first name of the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"last_name"})," (string): The last name of the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"username"})," (string): The username of the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"room_number"})," (int): The foreign key referencing the classroom of the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"password"})," (string): The password of the student."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"games"})," (string): The games associated with the student."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"methods-2",children:"Methods"}),"\n",(0,d.jsx)(s.h4,{id:"get_student_id",children:(0,d.jsx)(s.code,{children:"get_student_id()"})}),"\n",(0,d.jsx)(s.p,{children:"Get the student's ID."}),"\n",(0,d.jsx)(s.h5,{id:"usage-9",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"student.get_student_id()"})}),"\n",(0,d.jsx)(s.h5,{id:"returns-5",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"student.student_id"})}),"\n",(0,d.jsx)(s.h4,{id:"set_student_idstudent_id",children:(0,d.jsx)(s.code,{children:"set_student_id(student_id)"})}),"\n",(0,d.jsx)(s.p,{children:"Set the student's ID."}),"\n",(0,d.jsx)(s.h5,{id:"usage-10",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"student.set_student_id(420)"})}),"\n",(0,d.jsx)(s.h2,{id:"game-class",children:"Game Class"}),"\n",(0,d.jsx)(s.p,{children:"Represents a game on the BlastPad owned by a student."}),"\n",(0,d.jsx)(s.h3,{id:"attributes-3",children:"Attributes"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"game_name"})," (string): The name of the game."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"game_id"})," (int): The unique identifier for the game."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"name"})," (string): The general name of the game."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"last_edited_date"})," (date): The last edited date of the game."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"json_file"})," (bytes): The JSON file associated with the game."]}),"\n",(0,d.jsxs)(s.li,{children:[(0,d.jsx)(s.code,{children:"image_icon"})," (bytes): The image icon associated with the game."]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"methods-3",children:"Methods"}),"\n",(0,d.jsx)(s.h4,{id:"get_game_name",children:(0,d.jsx)(s.code,{children:"get_game_name()"})}),"\n",(0,d.jsx)(s.p,{children:"Get the name of the game."}),"\n",(0,d.jsx)(s.h5,{id:"usage-11",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"game.get_game_name()"})}),"\n",(0,d.jsx)(s.h5,{id:"returns-6",children:"Returns:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"game.game_name"})}),"\n",(0,d.jsx)(s.h4,{id:"set_game_namegame_name",children:(0,d.jsx)(s.code,{children:"set_game_name(game_name)"})}),"\n",(0,d.jsx)(s.p,{children:"Set the name of the game."}),"\n",(0,d.jsx)(s.h5,{id:"usage-12",children:"Usage:"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:'game.set_game_name("New Game")'})}),"\n",(0,d.jsx)(s.h1,{id:"database-schema",children:"Database Schema"}),"\n",(0,d.jsx)(s.p,{children:"The following is our database schema. A visual version of the schema exists in the Design Document in the form of an Entity-Relationship diagram. Our API will be responsible for CRUD, creating, reading, updating and deleting records into the database. Children's information will be especially restricted with COPPA (Children's Online Privacy Protection Act in mind."}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Table"}),(0,d.jsx)(s.th,{children:"Fields"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Constraints"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Teachers"}),(0,d.jsx)(s.td,{children:"teacher_id"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"PK"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"first_name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"last_name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"username"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"password"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Classrooms"}),(0,d.jsx)(s.td,{children:"room_number"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"PK"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"teacher_id"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"FK (Teachers.teacher_id)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Students"}),(0,d.jsx)(s.td,{children:"student_id"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"PK"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"first_name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"last_name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"username"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"room_number"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"FK (Classrooms.room_number)"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"password"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"games"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Games"}),(0,d.jsx)(s.td,{children:"game_id"}),(0,d.jsx)(s.td,{children:"INT"}),(0,d.jsx)(s.td,{children:"PK"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"game_name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"name"}),(0,d.jsx)(s.td,{children:"VARCHAR(255)"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"last_edited_date"}),(0,d.jsx)(s.td,{children:"DATE"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"json_file"}),(0,d.jsx)(s.td,{children:"BLOB"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{}),(0,d.jsx)(s.td,{children:"image_icon"}),(0,d.jsx)(s.td,{children:"BLOB"}),(0,d.jsx)(s.td,{})]})]})]})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>r});var d=n(67294);const i={},t=d.createContext(i);function r(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);