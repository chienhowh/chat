(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{294:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(22),n=a.n(c),r=a(23),l=a(12),i=(a(294),a(1)),o=function(e){var t,a=e.msg;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(i.jsx)("img",{src:a.attachments[0].file,alt:"message-attchments",className:"message-img",style:{float:"right"}}):Object(i.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},u=function(e){var t,a,s=e.msg,c=e.lastMsg,n=!c||c.sender.username;return Object(i.jsxs)("div",{className:"message-row",children:[n&&Object(i.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url:(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===s||void 0===s||null===(a=s.attachments)||void 0===a?void 0:a.length)>0?Object(i.jsx)("img",{src:s.attachments[0].file,alt:"message-attchments",className:"message-img",style:{marginLeft:n?"4px":"48px"}}):Object(i.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:s.text})]})},d=a(13),j=a(299),m=a(300),b=function(e){var t=e.chatId,a=e.creds,c=function(e){e.preventDefault();var s=o.trim();s.length>0&&Object(l.r)(a,t,{text:s}),u("")},n=Object(s.useState)(""),r=Object(d.a)(n,2),o=r[0],u=r[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:"message-form",onSubmit:c,children:[Object(i.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:o,onChange:function(s){u(s.target.value),console.log(e),Object(l.n)(a,t)},onSubmit:c}),Object(i.jsx)("label",{htmlFor:"upload-button",children:Object(i.jsx)("span",{children:Object(i.jsx)(j.a,{className:"picture-icon"})})}),Object(i.jsx)("input",{id:"upload-button",type:"file",multiple:!1,style:{display:"none"},onChange:function(e){Object(l.r)(a,t,{files:e.target.files,text:""})}}),Object(i.jsx)("button",{type:"submit",className:"send-button",children:Object(i.jsx)(m.a,{className:"send-icon"})})]})})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],l=function(e,t){return n.people.map((function(a,s){var c,n;return a.last_read===e.id&&Object(i.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")},children:(null===a||void 0===a||null===(n=a.person)||void 0===n?void 0:n.avatar)?"":a.person.username},"read_".concat(s))}))};return n?Object(i.jsxs)("div",{className:"chat-feed",children:[Object(i.jsxs)("div",{className:"chat-title-container",children:[Object(i.jsx)("div",{className:"chat-title",children:n.title}),Object(i.jsx)("div",{className:"sub-title",children:n.people.map((function(e){return"".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],d=s===n.sender.username;return Object(i.jsxs)("div",{style:{width:"100%"},children:[Object(i.jsx)("div",{className:"message-block",children:d?Object(i.jsx)(o,{msg:n}):Object(i.jsx)(u,{msg:n,lastMsg:c[r]})}),Object(i.jsx)("div",{className:"read-receipts",style:{marginRight:d?"18px":"0px",marginLeft:d?"0px":"68px"},children:l(n,d)})]},"msg_".concat(a))}))}(),Object(i.jsx)("div",{style:{height:"100px"},children:"\u5206\u9694\u7dda"}),Object(i.jsx)("div",{className:"message-form-container",children:Object(i.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]}):"Loading..."},g=a(60),p=a.n(g),v=a(108),x=a(4),O=a.n(x),f=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(d.a)(n,2),l=r[0],o=r[1],u=Object(s.useState)(""),j=Object(d.a)(u,2),m=j[0],b=j[1],h=function(){var e=Object(v.a)(p.a.mark((function e(t){var s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"b6f3cede-3852-4965-9eae-849d9ad42881","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,O.a.get("https://api.chatengine.io/chats",{headers:s});case 5:c=e.sent,localStorage.setItem("username",a),localStorage.setItem("password",l),console.log(c),window.location.reload(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),"\u5e33\u865f\u5bc6\u78bc\u932f\u8aa4",b("\u5e33\u865f\u5bc6\u78bc\u932f\u8aa4");case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("h1",{className:"title",children:"Chat Application"}),Object(i.jsxs)("form",{onSubmit:h,children:[Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"username",required:!0}),Object(i.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"password",required:!0}),Object(i.jsx)("div",{align:"center",children:Object(i.jsx)("button",{type:"submit",className:"button",children:Object(i.jsx)("span",{children:"Start Chatting"})})}),Object(i.jsx)("div",{className:"error",children:m})]})]})})},N=function(){return localStorage.getItem("username")?Object(i.jsx)(l.d,{height:"100vh",projectID:"b6f3cede-3852-4965-9eae-849d9ad42881",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(i.jsx)(h,Object(r.a)({},e))}}):Object(i.jsx)(f,{})};n.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.3018a1ae.chunk.js.map