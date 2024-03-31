"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3284],{46524:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(85893),t=i(11151);const r={sidebar_position:1},c="BlastPad",a={id:"api-specification/BlastPadAPIDoc",title:"BlastPad",description:"(generated using Sphinx)",source:"@site/docs/api-specification/BlastPadAPIDoc.md",sourceDirName:"api-specification",slug:"/api-specification/BlastPadAPIDoc",permalink:"/project-blastpad/docs/api-specification/BlastPadAPIDoc",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2024-Spring/project-blastpad/edit/main/documentation/docs/api-specification/BlastPadAPIDoc.md",tags:[],version:"current",lastUpdatedBy:"mustafamalik-tu",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-blastpad/docs/category/api-specification"},next:{title:"Test Procedures",permalink:"/project-blastpad/docs/category/test-procedures"}},o={},d=[{value:"Wireless Manager API",id:"wireless-manager-api",level:2},{value:"<code>scan_wifi_networks()</code>",id:"scan_wifi_networks",level:3},{value:"Usage:",id:"usage",level:4},{value:"Returns:",id:"returns",level:4},{value:"<code>list_wifi_networks()</code>",id:"list_wifi_networks",level:3},{value:"Usage:",id:"usage-1",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"<code>connect_to_wifi(ssid, password=None)</code>",id:"connect_to_wifissid-passwordnone",level:3},{value:"Usage:",id:"usage-2",level:4},{value:"<code>disconnect_wifi()</code>",id:"disconnect_wifi",level:3},{value:"Usage:",id:"usage-3",level:4},{value:"<code>show_wifi_security(ssid)</code>",id:"show_wifi_securityssid",level:3},{value:"Usage:",id:"usage-4",level:4},{value:"Returns:",id:"returns-2",level:4}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"blastpad",children:"BlastPad"}),"\n",(0,n.jsxs)(s.p,{children:["(generated using ",(0,n.jsx)(s.a,{href:"../../../build/html/index.html",children:"Sphinx"}),")"]}),"\n",(0,n.jsx)(s.h1,{id:"api-documentation",children:"API Documentation"}),"\n",(0,n.jsx)(s.h2,{id:"wireless-manager-api",children:"Wireless Manager API"}),"\n",(0,n.jsx)(s.h3,{id:"scan_wifi_networks",children:(0,n.jsx)(s.code,{children:"scan_wifi_networks()"})}),"\n",(0,n.jsx)(s.p,{children:"Scans for available Wi-Fi networks on the 'wlan0' network interface."}),"\n",(0,n.jsx)(s.h4,{id:"usage",children:"Usage:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"result = subprocess.run(     ['iw', 'dev', 'wlan0', 'scan'], capture_output=True, text=True)"})}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns:"}),"\n",(0,n.jsxs)(s.p,{children:["Command-Line response\n",(0,n.jsx)(s.code,{children:"result.stdout"})]}),"\n",(0,n.jsx)(s.h3,{id:"list_wifi_networks",children:(0,n.jsx)(s.code,{children:"list_wifi_networks()"})}),"\n",(0,n.jsx)(s.p,{children:"Lists the SSIDs of available Wi-Fi networks."}),"\n",(0,n.jsx)(s.h4,{id:"usage-1",children:"Usage:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"scan_result = wirelessManager.scan_wifi_networks() networks = re.findall(r'SSID: (.+)', scan_result)"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns:"}),"\n",(0,n.jsx)(s.p,{children:"list of available networks"}),"\n",(0,n.jsx)(s.h3,{id:"connect_to_wifissid-passwordnone",children:(0,n.jsx)(s.code,{children:"connect_to_wifi(ssid, password=None)"})}),"\n",(0,n.jsx)(s.p,{children:"Connects to a Wi-Fi network with the specified SSID and optional password."}),"\n",(0,n.jsx)(s.h4,{id:"usage-2",children:"Usage:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"wirelessManager.connect_to_wifi('SSID', 'password')"})}),"\n",(0,n.jsx)(s.h3,{id:"disconnect_wifi",children:(0,n.jsx)(s.code,{children:"disconnect_wifi()"})}),"\n",(0,n.jsx)(s.p,{children:"Disconnects from the currently connected Wi-Fi network."}),"\n",(0,n.jsx)(s.h4,{id:"usage-3",children:"Usage:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"wirelessManager.disconnect_wifi()"})}),"\n",(0,n.jsx)(s.h3,{id:"show_wifi_securityssid",children:(0,n.jsx)(s.code,{children:"show_wifi_security(ssid)"})}),"\n",(0,n.jsx)(s.p,{children:"Shows the type of Wi-Fi security on a network."}),"\n",(0,n.jsx)(s.h4,{id:"usage-4",children:"Usage:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"result = subprocess.run(     ['iw', 'dev', 'wlan0', 'scan', 'essid', 'SSID'], capture_output=True, text=True) security_info = re.search(r'WPA2?-(?:PSK|EAP)', result.stdout)"})}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'Security Info Type or "Security information not available."'})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>a,a:()=>c});var n=i(67294);const t={},r=n.createContext(t);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);