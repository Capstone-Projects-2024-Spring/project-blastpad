"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{40812:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=s(85893),t=s(11151);const l={sidebar_position:5},r="Use-case descriptions",o={id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1 \u2013\xa0Playing a Game",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-blastpad/docs/requirements/use-case-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Jacob Snarr",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-blastpad/docs/requirements/features-and-requirements"},next:{title:"Bill of Materials",permalink:"/project-blastpad/docs/requirements/bill-of-materials"}},i={},d=[{value:"Use Case 1 \u2013\xa0Playing a Game",id:"use-case-1-playing-a-game",level:2},{value:"Use Case 2 - Develop a Game using the BlastPad",id:"use-case-2---develop-a-game-using-the-blastpad",level:2},{value:"Use Case 3 - Develop game using laptop",id:"use-case-3---develop-game-using-laptop",level:2},{value:"Use Case 4 - Debugging your game",id:"use-case-4---debugging-your-game",level:2},{value:"Use Case 5 - Joining a Classroom",id:"use-case-5---joining-a-classroom",level:2},{value:"Use Case 6 - Downloading a Game from a Classroom",id:"use-case-6---downloading-a-game-from-a-classroom",level:2},{value:"Use Case 7 - Uploading a game to a Classroom",id:"use-case-7---uploading-a-game-to-a-classroom",level:2},{value:"Use Case 8 - Downloading a Game from the Community Hub",id:"use-case-8---downloading-a-game-from-the-community-hub",level:2},{value:"Use Case 9 - Uploading a game to the Community Hub",id:"use-case-9---uploading-a-game-to-the-community-hub",level:2},{value:"Use Case 10 - Creating a Classroom",id:"use-case-10---creating-a-classroom",level:2},{value:"Use Case 11 - Configuring the WiFi",id:"use-case-11---configuring-the-wifi",level:2}];function c(e){const a={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"use-case-descriptions",children:"Use-case descriptions"}),"\n",(0,n.jsx)(a.h2,{id:"use-case-1-playing-a-game",children:"Use Case 1 \u2013\xa0Playing a Game"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to play a game on their BlastPad."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad, and is presented with the Home Screen."}),"\n",(0,n.jsx)(a.li,{children:"The user selects a game from their downloaded games, and is presented with the Play, Edit, and Upload buttons."}),"\n",(0,n.jsx)(a.li,{children:"The user presses the Play button. BlastPad compiles the game and launches it."}),"\n",(0,n.jsx)(a.li,{children:"The user plays the game!"}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:"---\ntitle: Sequence Diagram 1 \u2013\xa0Playing a Game\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\n\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\nUser->>Blastpad: Select Game & Press Run\n\nBlastpad->>+Flask: GET startGame?game=game.json\nFlask->>+Blockly Compiler: Compile selected game\nBlockly Compiler->>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Flask: Compilation Successful\nFlask->>Flask: Attempt to start game\nFlask--\x3e>-Blastpad: Game started\n\n\ndeactivate Blastpad"}),"\n",(0,n.jsx)(a.h2,{id:"use-case-2---develop-a-game-using-the-blastpad",children:"Use Case 2 - Develop a Game using the BlastPad"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to develop a game using the BlastPad with Blockly."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad and is presented with the home screen."}),"\n",(0,n.jsx)(a.li,{children:'The user selects the "New Game" icon from the home screen\'s game gallery and is presented with the code editor.'}),"\n",(0,n.jsx)(a.li,{children:"The user creates a new game in the editor."}),"\n",(0,n.jsx)(a.li,{children:"The user saves their game."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 2 - Develop a Game using the BlastPad"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\n\nUser->>Blastpad: Press "Create New Game"\nBlastpad->>+Flask: GET Editor\nFlask--\x3e>-Blastpad: Render Editor\nUser->>Blastpad: Press "Save Game"\nBlastpad->>+Flask: Attempt to save workspace\nFlask--\x3e>-Blastpad: Return Success Status\n\ndeactivate Blastpad\n\n'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-3---develop-game-using-laptop",children:"Use Case 3 - Develop game using laptop"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to develop a game for the BlastPad with their laptop."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"The user connects to the BlastPad's hotspot and accesses the Block Editor from their browser."}),"\n",(0,n.jsx)(a.li,{children:"The user is presented with the games on their BlastPad and the option to create a new game. The user chooses to create a new game."}),"\n",(0,n.jsx)(a.li,{children:"The user creates their game and presses the save button."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 3 - Develop game using laptop"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\n\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\n\nUser->>+Flask: GET blastpad.local/editor\nFlask--\x3e>-User: Render Editor in External Mode\nUser->>+Flask: Press "Save Game"\nFlask->>Flask: Attempt to save workspace\nFlask--\x3e>-User: Return Success Status\n\ndeactivate Blastpad\n'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-4---debugging-your-game",children:"Use Case 4 - Debugging your game"}),"\n",(0,n.jsx)(a.p,{children:"A user\u2019s Blockly code fails during compilation and they would like to view the error message in order to debug their blocks."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user starts the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"Then chooses the saved created game from menu."}),"\n",(0,n.jsx)(a.li,{children:"Then the user runs the game/hits play."}),"\n",(0,n.jsx)(a.li,{children:"When the code compilation fails, the user will receive an error message stating which block failed to compile."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 4 - Debugging your game"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\n\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\n\nUser->>Blastpad: Press "Create New Game"\nBlastpad->>+Flask: GET Editor\nFlask--\x3e-Blastpad: Render Editor\nUser->>Blastpad: Press "Save Game"\nBlastpad->>+Flask: Attempt to save workspace\nFlask--\x3e>Flask: Game fails to compile\nFlask--\x3e>-Blastpad: Return Verbose Error Message\n\ndeactivate Blastpad'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-5---joining-a-classroom",children:"Use Case 5 - Joining a Classroom"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to join a classroom from the BlastPad."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:'Then clicks on the Settings Page and clicks on the "Classroom" option on the sidebar .'}),"\n",(0,n.jsx)(a.li,{children:'Then selects the \u201cJoin\u201d option on the displayed "Classroom" page.'}),"\n",(0,n.jsx)(a.li,{children:"Then the user types in the invite code given to them by their instructor and hits enter."}),"\n",(0,n.jsx)(a.li,{children:'The user will be shown a successful "Joined" message.'}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 5: Joining a Classroom"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\nUser->>Blastpad: Select Settings\nBlastpad->>+Flask: GET Settings\nFlask--\x3e>-Blastpad: Render Settings Page\n\n\nUser->>Blastpad: Enter Classroom Invite Code\nBlastpad->>+Flask: POST Join Classroom Request\nFlask->>+Supabase: Check Invite Code\nSupabase--\x3e>-Flask: Invite Code Valid\nFlask--\x3e>-Blastpad: Return Classroom Data\n\n\ndeactivate Blastpad'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-6---downloading-a-game-from-a-classroom",children:"Use Case 6 - Downloading a Game from a Classroom"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to view their classmate's games and play one."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"Then selects the \u201cClassroom\u201d option on the main menu of the home screen."}),"\n",(0,n.jsx)(a.li,{children:"The user scrolls through the list of published games in the Classroom and selects one for download."}),"\n",(0,n.jsx)(a.li,{children:"The user plays the downloaded game on their BlastPad."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 6 - Viewing and playing a published game"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\nUser->>Blastpad: Select Settings\nBlastpad->>+Flask: GET Settings\nFlask--\x3e>-Blastpad: Render Settings Page\n\n\nUser->>Blastpad: Enter Classroom Invite Code\nBlastpad->>+Flask: POST Join Classroom Request\nFlask->>+Supabase: Check Invite Code\nSupabase--\x3e>-Flask: Invite Code Valid\nFlask--\x3e>-Blastpad: Return Classroom Data\n\nUser->>Blastpad: Select Classroom Gallery\nBlastpad->>+Flask: GET Classroom Page\nFlask->>+Supabase: Retrieve Games in Classroom\nSupabase--\x3e>-Flask: Array of Classroom Games\nFlask--\x3e>-Blastpad: Render Classroom Page\n\n\nUser->>Blastpad: Press Download on a game\nBlastpad->>+Flask: GET Classroom/x/game\nFlask->>+Supabase: Download Workspace JSON\nSupabase--\x3e>-Flask: Workspace JSON\nFlask->>+Supabase: Download Workspace Image\nSupabase--\x3e>-Flask: Workspace Image\nFlask--\x3e>-Blastpad: Return Successful Download\n\n\nUser->>Blastpad: Select Home Screen\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\n\nUser->>Blastpad: Select Game & Press Run\nBlastpad->>+Flask: GET startGame?game=game.json\nFlask->>+Blockly Compiler: Compile selected game\nBlockly Compiler->>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Flask: Compilation Successful\nFlask->>Flask: Attempt to start game\nFlask--\x3e>-Blastpad: Game started\n\n\n\ndeactivate Blastpad\n'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-7---uploading-a-game-to-a-classroom",children:"Use Case 7 - Uploading a game to a Classroom"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to upload a game to a Classroom"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"Then selects the menu to publish a game file."}),"\n",(0,n.jsx)(a.li,{children:'Then the user selects the "Upload to Classroom" button.'}),"\n",(0,n.jsx)(a.li,{children:"The user receives a confirmation message that the game was uploaded to the Classroom."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 7 - Uploading a game to a Classroom"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\n\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\nUser->>Blastpad: Select Game & Press Share to Classroom\n\nBlastpad->>+Flask: POST /Classrooms/x/share\nFlask->>+Supabase: Upload Workspace JSON\nSupabase--\x3e>-Flask: Return Successful Upload\n\nFlask->>+Supabase: Upload Workspace Image\nSupabase--\x3e>-Flask: Return Successful Upload\n\nFlask--\x3e>-Blastpad: Return Successful Share\n\ndeactivate Blastpad'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-8---downloading-a-game-from-the-community-hub",children:"Use Case 8 - Downloading a Game from the Community Hub"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to view the games on the Community Hub and play one."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:'Then selects the "Community Hub" option on the main menu of the home screen.'}),"\n",(0,n.jsx)(a.li,{children:"The user scrolls through the list of published games in the Community Hub and selects one for download."}),"\n",(0,n.jsx)(a.li,{children:"The user plays the downloaded game on their BlastPad."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 6 - Viewing and playing a published game"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\nUser->>Blastpad: Select Settings\nBlastpad->>+Flask: GET Settings\nFlask--\x3e>-Blastpad: Render Settings Page\n\nUser->>Blastpad: Select Community Hub\nBlastpad->>+Flask: GET Community Hub Page\nFlask->>+Supabase: Retrieve Games in the Community Hub\nSupabase--\x3e>-Flask: Array of Games\nFlask--\x3e>-Blastpad: Render Community Hub Page\n\n\nUser->>Blastpad: Press Download on a game\nBlastpad->>+Flask: GET Community/game\nFlask->>+Supabase: Download Workspace JSON\nSupabase--\x3e>-Flask: Workspace JSON\nFlask->>+Supabase: Download Workspace Image\nSupabase--\x3e>-Flask: Workspace Image\nFlask--\x3e>-Blastpad: Return Successful Download\n\n\nUser->>Blastpad: Select Home Screen\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\n\nUser->>Blastpad: Select Game & Press Run\nBlastpad->>+Flask: GET startGame?game=game.json\nFlask->>+Blockly Compiler: Compile selected game\nBlockly Compiler->>Blockly Compiler: Attempt Compilation\nBlockly Compiler--\x3e>-Flask: Compilation Successful\nFlask->>Flask: Attempt to start game\nFlask--\x3e>-Blastpad: Game started\n\n\n\ndeactivate Blastpad\n'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-9---uploading-a-game-to-the-community-hub",children:"Use Case 9 - Uploading a game to the Community Hub"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to upload a game to the Community Hub."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"Then selects the menu to publish a game file."}),"\n",(0,n.jsx)(a.li,{children:'Then the user selects the "Upload to Community Hub" button.'}),"\n",(0,n.jsx)(a.li,{children:"The user receives a confirmation message that the game was uploaded to the Community Hub."}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 9 - Uploading a game to the Community Hub"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\n\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\nUser->>Blastpad: Select Game & Press Share to Community Hub\n\nBlastpad->>+Flask: POST /community/share\nFlask->>+Supabase: Upload Workspace JSON\nSupabase--\x3e>-Flask: Return Successful Upload\n\nFlask->>+Supabase: Upload Workspace Image\nSupabase--\x3e>-Flask: Return Successful Upload\n\nFlask--\x3e>-Blastpad: Return Successful Share\n\ndeactivate Blastpad'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-10---creating-a-classroom",children:"Use Case 10 - Creating a Classroom"}),"\n",(0,n.jsx)(a.p,{children:"A user/teacher would like to a create a classroom to host BlastPad projects for students"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The instructor turns on the BlastPad."}),"\n",(0,n.jsx)(a.li,{children:"Then connects a keyboard and mouse to the BlastPad"}),"\n",(0,n.jsx)(a.li,{children:'Then clicks on the Settings Page and clicks on the "Classroom" option on the sidebar .'}),"\n",(0,n.jsx)(a.li,{children:'Then selects the \u201cCreate\u201d option on the displayed "Classroom" page.'}),"\n",(0,n.jsx)(a.li,{children:"Then the instructor types in a classroom name, description, their own name, and an invite code."}),"\n",(0,n.jsx)(a.li,{children:"Then hits the \u201cCreate Classroom\u201d button"}),"\n",(0,n.jsx)(a.li,{children:'The instructor will be shown a successful "Created" message and be returned to the "Classroom" page automatically joined in the created Classroom.'}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 10 - Creating a Classroom"\n---\n\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\nUser->>Blastpad: Select Settings\nBlastpad->>+Flask: GET Settings\nFlask--\x3e>-Blastpad: Render Settings Page\n\n\nUser->>Blastpad: Select "Create" And Enter Classroom Information\nBlastpad->>+Flask: POST Create Classroom Request\nFlask->>+Supabase: Create new Classroom Record\nSupabase--\x3e>-Flask: New Classroom Created\nFlask--\x3e>-Blastpad: Return Classroom Data\n\ndeactivate Blastpad\n\n\n'}),"\n",(0,n.jsx)(a.h2,{id:"use-case-11---configuring-the-wifi",children:"Use Case 11 - Configuring the WiFi"}),"\n",(0,n.jsx)(a.p,{children:"A user would like to configure the WiFi for the BlastPad."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"The user turns on the BlastPad (likely for the first time)."}),"\n",(0,n.jsx)(a.li,{children:"Then selects the \u201cSetting\u201d icon on the main menu of the home screen."}),"\n",(0,n.jsx)(a.li,{children:'Then selects the "WiFi" icon on the sidebar menu of the "Settings" page'}),"\n",(0,n.jsx)(a.li,{children:'Then selects the network they want to connect to from the scrollable list of available networks in the displayed "WiFi" page.'}),"\n",(0,n.jsx)(a.li,{children:"Then the user types in the Network key and hits enter."}),"\n",(0,n.jsx)(a.li,{children:'The user is successfully connected and returned to the "WiFi" page displaying their connection status.'}),"\n"]}),"\n",(0,n.jsx)(a.mermaid,{value:'---\ntitle: "Sequence Diagram 11 - Configuring the WiFi"\n---\nsequenceDiagram\nactor User\nUser->>+Blastpad: Power On\nBlastpad->>+Flask: Start Flask Server\nFlask--\x3e>-Blastpad: Flask Server Started\nBlastpad->>Blastpad: Start X Server\nBlastpad->>Blastpad: Launch Chromium Browser\n\nBlastpad->>+Flask: GET Home Screen\nFlask--\x3e>-Blastpad: Render Home Screen\n\nUser->>Blastpad: Connect Keyboard\nBlastpad--\x3e>User: Acknowledge New Input Device\n\nUser->>Blastpad: Select Settings\nBlastpad->>+Flask: GET Settings\nFlask--\x3e>-Blastpad: Render Settings Page\n\nUser->>Blastpad: Select "WiFi" button\nBlastpad->>+Flask: GET local access points\nFlask--\x3e-Blastpad: Return Local Access Points\nUser->>Blastpad: Select Network, enter password\n\nBlastpad->>+Flask: POST Connect to Access Point\nFlask->>Flask: Attempt Connection\nFlask--\x3e>-Blastpad: Return Successful Connection\n\ndeactivate Blastpad'})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>r});var n=s(67294);const t={},l=n.createContext(t);function r(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);