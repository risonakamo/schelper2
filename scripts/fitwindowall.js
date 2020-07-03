// on sankaku image page, execute fit window link
var iscript=document.createElement("script");
iscript.src=chrome.runtime.getURL("/scripts/fitwindowall-stage2.js");
document.head.appendChild(iscript);