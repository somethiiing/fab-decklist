(this["webpackJsonpfab-form-filler"]=this["webpackJsonpfab-form-filler"]||[]).push([[0],{54:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var l=n(15),a=n.n(l),i=n(27),s=n.n(i),r=(n(54),n(28)),c=n(29),d=n(30),o=n(13),u=n(49),h=n(48),b=function(e){var t={red:[],yellow:[],blue:[]};return e.split("\n").map((function(e){return e.trim()})).filter((function(e){return void 0!==e&&"#"!==e[0]})).forEach((function(e){var n=e.slice(-8);(n.includes("red")||n.includes("1"))&&t.red.push(e.replace(/\(red\)$/,"").replace(/\(1\)$/,"")),(n.includes("yellow")||n.includes("2"))&&t.yellow.push(e.replace(/\(yellow\)$/,"").replace(/\(2\)$/,"")),(n.includes("blue")||n.includes("3"))&&t.blue.push(e.replace(/\(blue\)$/,"").replace(/\(3\)$/,""))})),t},f=function(e){return e.map((function(e){return e.includes(1)?[1,e.replace(/\(1\)/,"").replace(/1 x/,"").trim()]:e.includes(2)?[2,e.replace(/\(2\)/,"").replace(/2 x/,"").trim()]:e.includes(3)?[3,e.replace(/\(3\)/,"").replace(/3 x/,"").trim()]:void 0})).sort((function(e,t){return e[1]<t[1]?-1:1}))},m=n(19),p=n.n(m),j=n(31),F=n(32),g=n.p+"static/media/fab_cc_decklist 1.2.c2521910.pdf";function x(){return(x=Object(j.a)(p.a.mark((function e(t){var n,l,a,i,s,r,c,d,o,u,h,b,f,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g).then((function(e){return e.arrayBuffer()}));case 2:return n=e.sent,e.next=5,F.PDFDocument.load(n);case 5:return l=e.sent,a=l.getForm(),i=t.fullName,s=t.gemId,r=t.pronoun,c=t.date,d=t.event,o=t.hero,a.getTextField("Full Name").setText(i),a.getTextField("GEM ID").setText(s),a.getTextField("Pronoun").setText(r),a.getTextField("Date").setText(c),a.getTextField("Event").setText(d),a.getTextField("Hero").setText(o),u=O("eqp",l,t),h=O("red",l,t),b=O("yellow",l,t),f=O("blue",l,t),m=u+h+b+f,a.getTextField("grand-total").setText(String(m)),e.next=22,l.save();case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e,t,n){var l=t.getForm(),a=0;return n[e].forEach((function(t,n){a+=Number(t[0]),l.getTextField("".concat(e,"-count-").concat(n+1)).setText(String(t[0])),l.getTextField("".concat(e,"-card-").concat(n+1)).setText(t[1])})),a="eqp"===e?n[e].length:a,l.getTextField("".concat(e,"-total")).setText(String(a)),a},v=(n(64),n(7)),N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var l;return Object(c.a)(this,n),(l=t.call(this,e)).state={nameField:"",gemIdField:"",pronounField:"",dateField:"",eventField:"",heroField:"",eqpField:"",decklistField:"",parsed:{eqp:[],red:[],yellow:[],blue:[]},pdfSrc:"",showData:!1},l.handleFieldOnChange=l.handleFieldOnChange.bind(Object(o.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(o.a)(l)),l.fillTestData=l.fillTestData.bind(Object(o.a)(l)),l.generateDecklist=l.generateDecklist.bind(Object(o.a)(l)),l.toggleShowData=l.toggleShowData.bind(Object(o.a)(l)),l}return Object(d.a)(n,[{key:"handleFieldOnChange",value:function(e,t){this.setState(Object(r.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(){var e,t=this.state,n=t.nameField,l=t.gemIdField,a=t.pronounField,i=t.dateField,s=t.eventField,r=t.heroField,c=t.eqpField,d=t.decklistField,o=Object.assign({},function(e){var t=b(e);return t.red=f(t.red),t.yellow=f(t.yellow),t.blue=f(t.blue),t}(d),{fullName:n,gemId:l,pronoun:a,date:i,event:s,hero:r,eqp:(e=c,e.replace(/,/g,"\n").split("\n").map((function(e){return e.trim()})).map((function(e){return["",e]})))});this.generateDecklist(o),this.setState({parsed:o})}},{key:"generateDecklist",value:function(e){var t=this;(function(e){return x.apply(this,arguments)})(e).then((function(e){var n=new Blob([e],{type:"application/pdf"}),l=URL.createObjectURL(n);t.setState({pdfSrc:l})})).catch((function(e){return console.log(e)}))}},{key:"toggleShowData",value:function(){var e=this.state.showData;this.setState({showData:!e})}},{key:"fillTestData",value:function(){this.setState({nameField:"wilson",gemIdField:"123123",pronounField:"he/him/her",dateField:"12/25/2015",eventField:"fake event",heroField:"Oldhim, Grandfather of Eternity",eqpField:"Crater Fist, Crown of Seeds, Fyendal's Spring Tunic, Heart of Ice, Ironhide Legs, Nullrune Gloves, Nullrune Hood, Rampart of the Ram's Head,Winter's Wail",decklistField:"\n  (3) Command and Conquer (red)\n  (3) Endless Winter (red)\n  (3) Fate Foreseen (red)\n  (3) Oaken Old (red)\n  (3) Pummel (red)\n  (3) Sigil of Solace (red)\n  (3) Sink Below (red)\n  (3) Spinal Crush (red)\n  (3) Art of War (yellow)\n  (3) Forged for War (yellow)\n  (2) Remembrance (yellow)\n  (3) Autumn's Touch (blue)\n  (3) Blizzard (blue)\n  (3) Channel Lake Frigid (blue)\n  (3) Cranial Crush (blue)\n  (3) Disable (blue)\n  (2) Exposed to the Elements (blue)\n  (3) Glacial Footsteps (blue)\n  (3) Last Ditch Effort (blue)\n  (1) Pulse of Isenloft (blue)\n  (3) Rouse the Ancients (blue)\n  (3) Sow Tomorrow (blue)\n  (3) Staunch Response (blue)\n  (3) Winter's Bite (blue)\n  (3) Winter's Grasp (blue)\n      "})}},{key:"render",value:function(){var e=this,t=this.state,n=t.pdfSrc,l=t.showData,a=t.heroField,i=""!==n?n:g;return window.fillTestData=function(){return e.fillTestData()},window.toggleShowData=function(){return e.toggleShowData()},Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"leftCol",children:[Object(v.jsx)("h2",{className:"sectionHeader",children:"Personal Information"}),Object(v.jsxs)("label",{className:"section",for:"fullName",children:[Object(v.jsx)("span",{className:"label",children:"Full Name:"}),Object(v.jsx)("input",{className:"field",value:this.state.nameField,onChange:function(t){return e.handleFieldOnChange(t,"nameField")}})]}),Object(v.jsxs)("label",{className:"section",for:"gemId",children:[Object(v.jsx)("span",{className:"label",children:"GEM ID:"}),Object(v.jsx)("input",{className:"field",value:this.state.gemIdField,onChange:function(t){return e.handleFieldOnChange(t,"gemIdField")}})]}),Object(v.jsxs)("label",{className:"section",for:"pronoun",children:[Object(v.jsx)("span",{className:"label",children:"Pronouns:"}),Object(v.jsx)("input",{className:"field",value:this.state.pronounField,onChange:function(t){return e.handleFieldOnChange(t,"pronounField")}})]}),Object(v.jsx)("h2",{className:"sectionHeader",children:"Event Information"}),Object(v.jsxs)("label",{className:"section",for:"date",children:[Object(v.jsx)("span",{className:"label",children:"Date:"}),Object(v.jsx)("input",{className:"field",value:this.state.dateField,onChange:function(t){return e.handleFieldOnChange(t,"dateField")}})]}),Object(v.jsxs)("label",{className:"section",for:"event",children:[Object(v.jsx)("span",{className:"label",children:"Event:"}),Object(v.jsx)("input",{className:"field",value:this.state.eventField,onChange:function(t){return e.handleFieldOnChange(t,"eventField")}})]}),Object(v.jsx)("h2",{className:"sectionHeader",children:"Deck Information"}),Object(v.jsxs)("label",{className:"section",for:"hero",children:[Object(v.jsx)("span",{className:"label",children:"Hero:"}),Object(v.jsx)("input",{className:"field",value:this.state.heroField,onChange:function(t){return e.handleFieldOnChange(t,"heroField")}})]}),Object(v.jsxs)("label",{className:"section",for:"equipment",children:[Object(v.jsx)("span",{className:"label",children:"Equipment:"}),Object(v.jsx)("textarea",{className:"equipment field",value:this.state.eqpField,onChange:function(t){return e.handleFieldOnChange(t,"eqpField")}})]}),Object(v.jsxs)("label",{className:"section",for:"decklist",children:[Object(v.jsx)("span",{className:"label",children:"Decklist:"}),Object(v.jsx)("textarea",{className:"decklist field",value:this.state.decklistField,onChange:function(t){return e.handleFieldOnChange(t,"decklistField")}})]}),Object(v.jsx)("button",{className:"button",onClick:this.handleSubmit,children:"Generate Decklist"})]}),Object(v.jsxs)("div",{className:"rightCol",children:[Object(v.jsx)("h2",{className:"sectionHeader",children:"Preview: "}),Object(v.jsxs)("div",{className:"previewContainer",children:[Object(v.jsx)("iframe",{className:"preview",id:"decklist",name:"decklist",height:"665",width:"440",type:"application/pdf",src:i}),Object(v.jsx)("a",{className:"button",href:i,download:"".concat(a," - decklist"),children:"Download Decklist"})]}),l&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{className:"sectionHeader",children:"State: "}),Object(v.jsx)("pre",{children:JSON.stringify(this.state,null,4)})]})]})]})}}]),n}(a.a.Component),w=N,C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,l=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),l(e),a(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.ff9fd5da.chunk.js.map