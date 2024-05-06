"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2257],{26442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(85893),a=n(11151);const o={sidebar_position:1},i="Class Diagram",r={id:"system-architecture/class-diagram",title:"Class Diagram",description:"Class Relationships",source:"@site/docs/system-architecture/class-diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/class-diagram",permalink:"/project-blastpad/docs/system-architecture/class-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/system-architecture/class-diagram.md",tags:[],version:"current",lastUpdatedBy:"tuk05348",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-blastpad/docs/category/system-architecture"},next:{title:"Sequence Diagrams",permalink:"/project-blastpad/docs/system-architecture/sequence-diagrams"}},l={},c=[{value:"Class Relationships",id:"class-relationships",level:2},{value:"Flask",id:"flask",level:3},{value:"Block",id:"block",level:3},{value:"BlocklyEditor",id:"blocklyeditor",level:3},{value:"ClassroomPage",id:"classroompage",level:3},{value:"ClassroomSettingsPage",id:"classroomsettingspage",level:3},{value:"CodeCompiler",id:"codecompiler",level:3},{value:"NetworkSettings",id:"networksettings",level:3},{value:"Game",id:"game",level:3},{value:"CommunityPage",id:"communitypage",level:3},{value:"ProfileSettingsPage",id:"profilesettingspage",level:3},{value:"HomePage",id:"homepage",level:3},{value:"Icons",id:"icons",level:3},{value:"NavBar",id:"navbar",level:3}];function m(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,s.jsx)(t.mermaid,{value:'---\ntitle: BlastPad Class Diagram\n---\nclassDiagram\n    BlocklyEditor o-- "0..*" Game\n\tClassroomPage o-- "0..*" Game\n    Flask o-- "0..*" HomePage\n    Flask --\x3e "1" CodeCompiler\n\n\tProfileSettingsPage --o "0..*" HomePage\n\tBlocklyEditor o-- "0..*" Block\n\tProfileSettingsPage o-- "0..*" ClassroomPage\n\tCommunityPage <-- "1" BlocklyEditor\t\n\tClassroomSettingsPage *-- "0..*" ClassroomPage\n\tProfileSettingsPage <-- "1" CommunityPage\n\tCommunityPage --\x3e NetworkSettings\t\n\tGame <-- "1" CodeCompiler\n\n\tNavBar --\x3e Icons\n\tHomePage --\x3e NavBar\n\tClassroomPage --\x3e NetworkSettings\n\t\t\n    class Game{\n        -title: String\n\t\t-imageFile: String\n        -version: String\n\t\t-author: String\n\t\t\n\t\t+startGame()\n\t\t+pauseGame()\n\t\t+quitGame()\n\t\t+uploadToClassroom(Classroom)\n\t\t+compileGame() String\n    }\n    class BlocklyEditor{\n        -workspaces: Game[]\n\t\t-availableBlocks: Block[]\n\t\t\n\t\t+saveWorkspace()\n\t\t+loadWorkspace(game: Game)\n    }\n    class Block {\n        +type: String\n\t\t+message0: String\n\t\t+message1: String\n\t\t+args0: Object[]\n\t\t+args1: Object[]\n\t\t+previousStatement: String\n\t\t+nextStatment: String\n\t\t+tooltip: String\n\t\t+helpurl: String\n\t\t+style: String\n    }\n    class ClassroomPage {\n        -createdAt: Date\n\t\t+classroomID: int\n\t\t+invite_code: int\n\t\t+students: int\n\t\t+teacher: String\n\t\t+title: String\n\t\t+description: String\n\t\t+success: Boolean\n\t\t+gameDownloading: Boolean\n\t\t+statusMessage: String\n\t\t+selectedGameIndex: int\n\t\t+searchQuery: String\n\t\t+availableGames: Game[]\n\t\t+selectedGame: Game\n\n\t\t+setSuccess(Boolean)\n\t\t+setGameDownloading(Boolean)\n\t\t+setStatusMessage(String)\n\t\t+setAvailableGames(Game[])\n\t\t+selectGame(Game)\n\t\t+selectedGameIndex(int)\n\t\t+getGamesWithTerm(String)\n\t\t+setSearchQuery(String)\n\t\t+downloadFromClassroom(): Game\n\t\t+useTheme(theme)\n\t}\n\tclass ProfileSettingsPage {\n\t\t-email: String\n\t\t-password: String\n\n\t\t+setEmail(String)\n\t\t+setPassword(String)\n\t\t-loginUser(email,password): Boolean\n\t\t-signOut(): Boolean\n    }\n    class NetworkSettings {\n\t\t+connectedNetWork: Network\n\t\t+wifiNetworks: Networks[]\n\n\t\t+setConnectedNetwork(Network)\n\t\t+setWifiNetworks(Network[]) \n\t\t+fetchNetworks(): Network[]\n\t\t+connectNetwork(): Boolean\n\t\t+handleNetworkConnection(): Boolean\n\t\t\n    }\n    class CommunityPage {\n    \t+availableGames: Game[]\n\t\t+selectedGame: Game\n\t\t+selectedGameIndex: int\n\t\t+success: Boolean\n\t\t+gameDownloading: Boolean\n\t\t+statusMessage: String\n\t\t+searchQuery: String\n\t\t+theme: theme\n\n\t\t+setAvailableGames(Game[])\n\t\t+setSelectedGame(Game)\n\t\t+setSelectedGameIndex(int)\n\t\t+setSuccess(Boolean)\n\t\t+setGameDownloading(Boolean)\n\t\t+setStatusMessage(String)\n\t\t+setSearchQuery(String)\n\t\t+useTheme(theme)\n\t\t+downloadFromCommunity(Game)\n\t\t+getGamesWithTerm(String)\n    }\n\tclass ClassroomSettingsPage{\n\t\t+classroom: Classroom\n\t\t+classroomJoining: Boolean\n\t\t+statusMessage: String\n\t\t+success: Boolean\n\t\t+invite: String\n\t\t+menu: int\n\t\t+formData: formData\n\n\t\t+setClassroom(Classroom)\n\t\t+setClassroomJoining(Boolean)\n\t\t+setStatusMessage(String)\n\t\t+setSuccess(Boolean)\n\t\t+setInvite(String)\n\t\t+setMenu(int)\n\t\t+setFormData(Form)\n\t\t+joinClassroom(): Boolean\n\t\t+leaveClassroom(): Boolean\n\t\t+createClassroom(): Classroom\n\t}\n\tclass HomePage{\n\t\t+gameList: Game[]\n\t\t+availableGames: Game[]\n\t\t+selectedGame: Game\n\t\t+selectedGameIndex: int\n\t\t+shareMenuOpen: Boolean\n\t\t+gameLoading: Boolean\n\t\t+gameSharing: Boolean\n\t\t+statusMessage: String\n\t\t+success: Boolean\n\t\t+theme: Theme\n\n\t\t+setAvailableGames(Games[])\n\t\t+setSelectedGame(Game)\n\t\t+setSelectedGameIndex(int)\n\t\t+setShareMenuOpen(Boolean)\n\t\t+setGameLoading(Boolean)\n\t\t+setGameSharing(Boolean)\n\t\t+setStatusMessage(String)\n\t\t+setSuccess(Boolean)\n\t\t+useTheme(theme)\n\t\t+shareToCommunity(): Boolean\n\t\t+shareToClassroom(): Boolean\n\t\t+editGame(): Void\n\t\t+newGame(): Void\n\t}\n\tclass Icons{\n\t\t+HomeIcon(): svgObject\n\t\t+CommunityIcon(): svgObject\n\t\t+ClassroomIcon() svgObject\n\t\t+SettingIcon(): svgObject\n\t\t+NewGameIcon(): svgObject\n\t\t+PlayIcon(): svgObject\n\t\t+PencilIcon(): svgObject\n\t\t+UploadIcon(): svgObject\n\t\t+SearchIcon(): svgObject\n\t\t+ProfileIcon(): svgObject\n\t\t+SensorsIcon(): svgObject\n\t\t+WifiIcon(): svgObject\n\t\t+ThemeIcon(): svgObject\n\t\t+RefreshIcon(): svgObject\n\t\t+NoSignalIcon(): svgObject\n\t\t+FullBatteryFrameIcon(): svgObject\n\t\t+MediumBatteryFrameIcon(): svgObject\n\t\t+LowBatteryFrameIcon(): svgObject\n\t\t+DynamicBatteryIcon(level,theme): svgObject\n\t}\n\tclass NavBar{\n\t\t+navIcons: Icons[]\n\t\t+activePage: Page\n\t\t+isConnected: Boolean\n\t\t+currentTime: dateObject\n\t\t+batteryLevel: BatteryLevel\n\t\t+theme: Theme\n\n\t\t+formatTime(date): date\n\t\t+updateBatteryLevel(): BatteryLevel\n\t\t+updateTime(): DateObject\n\t}\n\tclass CodeCompiler {\n\t\t+hexToRgb(String): Int[]\n        +bmap_representation(Int[][]): String\n        +append_bitmaps_to_code(String): String\n        +scaleBitmap(Int[][], Int): Int[][]\n        +saveBitmap(Int[][])\n        +unrollWorkspaceBlocks(json):Object[]\n        +findPathToExit(json):Boolean\n        +getVariableName(String, json): String\n        +getBitmapSize(String, Object[]): Int[]\n        +compile(String, String, String?, Boolean?)\n\t}\n\n\tclass Flask {\n        +unrollWorkspaceBlocks(json):Object[]\n        +editor()\n        +index()\n        +send_report(String): Image\n        +save(Object)\n        +saveWithoutRun(Object)\n        +allgames()\n        +onegame()\n        +compile_game(String)\n        +save_game_icon(String)\n        +compile_and_run(String)\n        +just_compile(String)\n        +run_game(String)\n        +test_game(String)\n        +test_run_game(String)\n        +get_wifi_networks()\n        +disconnect_wifi()\n        +found_password(String)\n        +connect_to_wifi(String, String)\n        +communityhubgames(String)\n        +classroomgames(String)\n        +createclassroom(String)\n        +sharetocommunityhub(String)\n        +sharetoclassroom(String)\n        +joinclassroom(String)\n        +leaveclassroom(String)\n        +downloadfromcommunityhub(String)\n        +downloadfromclassroom(String, String)\n        +running_test()\n\t}'}),"\n",(0,s.jsx)(t.h2,{id:"class-relationships",children:"Class Relationships"}),"\n",(0,s.jsxs)(t.p,{children:["The class diagram above demonstrates various relationships between different classes within the BlastPad system. The ",(0,s.jsx)(t.strong,{children:"ProfileSettingsPage"})," is responsible for the user settings which is linked to the ",(0,s.jsx)(t.strong,{children:"HomePage"}),". Furthermore, the ",(0,s.jsx)(t.strong,{children:"CommunityPage"})," is dependent on the user's ",(0,s.jsx)(t.strong,{children:"ProfileSettingsPage"})," to upload and share games. The ",(0,s.jsx)(t.strong,{children:"CommunityPage"})," and the ",(0,s.jsx)(t.strong,{children:"ClassroomPage"})," are both dependant on the ",(0,s.jsx)(t.strong,{children:"NetworkSettings"})," class to provide an internet connection in order to share and download games. The ",(0,s.jsx)(t.strong,{children:"NavBar"})," is responsible for allowing navigation and information about battery and wifi connection through different elements. This class depends on the ",(0,s.jsx)(t.strong,{children:"Icons"})," class which returns different SVG elements for buttons and icons to render. The ",(0,s.jsx)(t.strong,{children:"HomePage"})," also makes use of the ",(0,s.jsx)(t.strong,{children:"Icons"})," class in a similar fashion."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Game"}),", ",(0,s.jsx)(t.strong,{children:"CodeCompiler"}),", ",(0,s.jsx)(t.strong,{children:"BlocklyEditor"})," and the ",(0,s.jsx)(t.strong,{children:"Block"})," classes are all dependent on each other. This is because together, they form the most vital part of the BlastPad which is game creation and compilation. This is what makes the BlastPad such an amazing and fun learning tool."]}),"\n",(0,s.jsx)(t.h3,{id:"flask",children:"Flask"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Describes the Flask server which is in charge of running the compiler, hosting the editor, and hosting the home screen."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"block",children:"Block"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Describes the properties necessary to define and create a Blockly code block"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"blocklyeditor",children:"BlocklyEditor"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Allows the user to work on Blockly based projects and create/place code blocks within it"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"classroompage",children:"ClassroomPage"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Acts as a platform to host user-created Blockly games belonging in a classroom"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"classroomsettingspage",children:"ClassroomSettingsPage"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Lets the user interact with classrooms"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"codecompiler",children:"CodeCompiler"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Converts the raw Blockly JSON definition into a runnable code Block in Python"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"networksettings",children:"NetworkSettings"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Manages the BlastPad's WiFi connection supporting scanning for new networks, connecting to one, and disconnecting from one"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"game",children:"Game"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Contains the metadata of a Blockly game, allows users to play the game it defines, and upload it to a Classroom"}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"communitypage",children:"CommunityPage"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Allows for all users to upload their games and download games without belonging to a classroom."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"profilesettingspage",children:"ProfileSettingsPage"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Allows for users to create an account."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"homepage",children:"HomePage"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The main screen for the BlastPad allowing for game edits, sharing and other features."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"icons",children:"Icons"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A list of functions which return different SVG objects for the Navbar and other components to render."}),"\n"]})}),"\n",(0,s.jsx)(t.h3,{id:"navbar",children:"NavBar"}),"\n",(0,s.jsx)(n,{open:"True",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The Navigation Bar of the BlastPad featuring buttons for navigating the UI and Wifi/Battery elements."}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(67294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);