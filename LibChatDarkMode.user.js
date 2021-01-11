// ==UserScript==
// @name         LibChat Dark Mode
// @namespace    https://github.com/dwtaber/userscripts
// @version      0.0.1
// @updateURL    https://raw.githubusercontent.com/dwtaber/Userscripts/master/LibChatDarkMode.js
// @downloadURL  https://raw.githubusercontent.com/dwtaber/Userscripts/master/LibChatDarkMode.js
// @description  Dark mode for Libchat
// @author       dwtaber@gmail.com
// @match        https://*.libanswers.com/admin/dashboard
// @match        https://answers.library.cofc.edu/admin/dashboard
// @grant        none
// ==/UserScript==


//Inject slider style into document head.
const darkModeStyle = `

a {
    color: #4097B5;
}

a:hover {
    color: #00759e;
}

#s-la-dash-main {
    color: #eee;
    background-color: #212121;
}

#s-la-dash-details {
    color: #eee;
    background-color: #181818;
}

.modal-content {
    color: #eee;
    background-color: #212121;
}

i.fa {
    color: rgba(128,128,128,0.85);
}

button.close {
    color: rgba(255,255,255,.85);
    opacity: 1;
}

button.close:hover {
    color: rgba(192,192,192,0.85);
    opacity: 1;
}

button.btn.btn-default {
    color: #eee;
    background-color: #383838;
}

.btn-default {
    color: #eee;
    background-color: #383838;
}

label.btn-default {
    background-color: #383838;
}

.btn-default:hover {
    color: #eee;
    background-color: #4C4C4C;
}

.btn-primary {
    background-color: #00759e;
}

.btn-primary:hover {
    background-color: #4097B5;
}

.btn-statusToggle {
    color: #383838;
    background-color: #383838;
    box-shadow: inset 0 0 0.5em #4C4C4C;
}

.btn-statusToggle:hover {
    color: #212121;
    background-color: #4C4C4C;
}

.btn-statusToggle span:hover {
    color: #212121;
    background-color: #4C4C4C;
}

.chatHeader {
    color: #eee;
    background-color: #181818;
}

.chatBody {
    color: #eee;
    background-color: #181818;
}

.chatFooter {
    color: #eee;
    background-color: #181818;
}

.queueList li.active {
    color: #eee;
    background-color: #212121;
    border-color: #00759e;
}

.s-la-dash-tablink {
    color: #eee;
    background-color: #383838;
}

.btn.s-la-dash-tablink[aria-selected=true] {
    color: #eee;
    background-color: #383838;
}

.form-control {
    color: #eee;
    background-color: #121212;
}

.indicator {
    border: #eee;
}

.chatMsgNote, .chatMsgSystem {
    color: #333;
    background-color: #dcdcdc;
}

#volumeSlider {
    color: #eee;
}

`;
const styleTag = document.createElement("style");
styleTag.innerHTML = darkModeStyle;
document.head.append(styleTag);
