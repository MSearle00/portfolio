(this.webpackJsonpportfolio_site=this.webpackJsonpportfolio_site||[]).push([[0],[,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,,function(e){e.exports=JSON.parse('[{"id":"1","src":"/images/BasicWeb.png","text":"A basic webpage discussing git and unix.","tags":["HTML","CSS"],"path":"https://github.com/MSearle00/Project-1","date":"2020-08-11"},{"id":"2","src":"/images/TravelSPA.png","text":"A basic SPA about travelling","tags":["HTML","CSS"],"path":"https://github.com/MSearle00/project-2-travel-bucketlist","date":"2020-08-18"},{"id":"3","src":"/images/Quiz.png","text":"A quiz template","tags":["HTML","Javascript","CSS"],"path":"https://github.com/MSearle00/project-3-quiz","date":"2020-08-25"},{"id":"4","src":"/images/Game.png","text":"A Javascript game made with OOP methods","tags":["Javascript","HTML","CSS"],"path":"https://github.com/MSearle00/project-4-game","date":"2020-09-01"},{"id":"5","src":"/images/Ceaser.png","text":"A Ceaser Cipher","tags":["Javascript","HTML","CSS"],"path":"https://github.com/MSearle00/project-5-ceaserCipher","date":"2020-09-08"},{"id":"6","src":"/images/CalculatorApp.png","text":"A  Calculator application, with memory functions.","tags":["React.js","CSS","SCSS","HTML"],"path":"\'https://github.com/MSearle00/project-7-calculator\'","date":"2020-09-15"},{"id":"7","src":"/images/SocialSite.png","text":"A start on a social site template","tags":["React.js","CSS","HTML"],"path":"https://github.com/MSearle00/project-8-social-site","date":"2020-09-22"},{"id":"8","src":"/images/OldPortfolio.png","text":"My first attempt at a portfolio site, a play around with CSS","tags":["CSS","HTML"],"path":"https://github.com/MSearle00/project-9-portfolio-site","date":"2020-09-29"},{"id":"9","src":"/images/WeatherApp.png","text":"A vanilla JS Weather App with search function using OpenWeatherMap API","tags":["Javascript","HTML","CSS"],"path":"https://github.com/MSearle00/project-11-weatherapp","date":"2020-10-14"},{"id":"10","src":"/images/EventApp.png","text":"An event app with a user log-in and sign-up managed by MongoDB.","tags":["React.js","Mongo","Express.js","Node.js","CSS","HTML"],"path":"https://github.com/MSearle00/project-12-eventapp","date":"2020-10-28"},{"id":"10","src":"/images/VendingMachine.png","text":"A vending machine with a password protected restock function","tags":["C#"],"path":"https://github.com/MSearle00/VendingMachine","date":"2021-03-30"}]')},,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),i=a(7),o=a(3);a(27);var s=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),s=Object(i.a)(r,2),m=(s[0],s[1]),u=function(){return c(!1)},p=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbarContainer"},l.a.createElement(o.b,{to:"/",className:"navbarLogo",onClick:u},"HOME"),l.a.createElement("div",{className:"menuIcon",onClick:function(){return c(!a)}},l.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:a?"NavigationMenu active":"NavigationMenu"},l.a.createElement("li",{className:"NavigationOption"},l.a.createElement(o.b,{to:"/",className:"NavigationLinks",onClick:u})),l.a.createElement("li",{className:"NavigationOption"},l.a.createElement(o.b,{to:"/aboutMe",className:"NavigationLinks",onClick:u},"About Me")),l.a.createElement("li",{className:"NavigationOption"},l.a.createElement(o.b,{to:"/projects",className:"NavigationLinks",onClick:u},"Projects")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contactMe",className:"NavigationLinks",onClick:u},"Contact Me"))))))},m=(a(10),a(16),a(33),["buttonPrimary","buttonOutlined","buttonBlack"]),u=["buttonMedium","buttonLarge"],p=["buttonProjects","buttonAboutMe"],E=function(e){var t=e.children,a=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,i=e.buttonPage,o=m.includes(c)?c:m[0],s=u.includes(r)?r:u[0],E=p.includes(i)?i:p[0];return l.a.createElement("button",{className:"button ".concat(o," ").concat(s," ").concat(E),onClick:n,type:a},t)};var d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cardsItem"},l.a.createElement("a",{className:"cardsItemLink",href:e.path},l.a.createElement("figure",{className:"cardsItemPicWrap","data-category":e.label},l.a.createElement("img",{className:"cardsItemImg",alt:"Screenshot of project",src:"/portfolio"+e.src})),l.a.createElement("div",{className:"cardsItemInfo"},l.a.createElement("h5",{className:"cardsItemText"},e.text),l.a.createElement("div",{className:"cardsItem__date"}," ",e.date)))))};var g=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",{className:"cardsTitle"},"Check out these top projects"),l.a.createElement("div",{className:"cardsContainer"},l.a.createElement("ul",{className:"cardsItems"},l.a.createElement(d,{src:"/images/EventApp.png",text:"An event app with a user log-in and sign-up managed by MongoDB.",label:"React.js | Mongo | Express.js | Node.js | CSS | HTML",path:"https://github.com/MSearle00/project-12-eventapp",date:"28/10/2020"}),l.a.createElement(d,{src:"/images/CalculatorApp.png",text:"A Calculator application, with memory functions.",label:"React.js | CSS | SCSS | HTML",path:"https://github.com/MSearle00/project-7-calculator",date:"15/10/2020"})),l.a.createElement("ul",{className:"cardsItems"},l.a.createElement(d,{src:"/images/WeatherApp.png",text:"A vanilla JS Weather App with search function using OpenWeatherMap API",label:"Javascript | HTML | CSS",path:"https://github.com/MSearle00/project-11-weatherapp",date:"14/10/2020"}),l.a.createElement(d,{src:"/images/TravelSPA.png",text:"A basic SPA about travelling.",label:"HTML | CSS",path:"https://github.com/MSearle00/project-2-travel-bucketlist",date:"18/08/2020"}),l.a.createElement(d,{src:"/images/SocialSite.png",text:"A start on a social site template",label:"React.js | CSS | HTML",path:"https://github.com/MSearle00/project-8-social-site",date:"22/09/2020"})),l.a.createElement(o.b,{to:"/projects"},l.a.createElement(E,{buttonStyle:"buttonBlack"},"Click here to view more projects!"))))};a(34);var b=function(){return l.a.createElement("div",{className:"heroContainer"},l.a.createElement("video",{src:"/portfolio/images/pinkFlowers.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("div",{className:"infoContainer"},l.a.createElement("h1",null,"Maria Searle"),l.a.createElement("p",null,"Junior Developer ||  Sheffield, UK"),l.a.createElement("div",{className:"infoButtons"},l.a.createElement(o.b,{to:"/aboutMe"},l.a.createElement(E,{className:"buttons",buttonStyle:"buttonOutlined",buttonSize:"buttonLarge",buttonPage:"buttonAboutMe"},"ABOUT ME")),l.a.createElement(o.b,{to:"/projects"},l.a.createElement(E,{className:"buttons",buttonStyle:"buttonPrimary",buttonSize:"buttonLarge",buttonPage:"buttonProjects"},"VIEW MY PROJECTS ",l.a.createElement("i",{className:"fas fa-project-diagram"}))))))};a(35);var h=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("h2",null," Contact Me "),l.a.createElement("section",{class:"contact-me"},l.a.createElement("div",{class:"contact-me-input"},l.a.createElement("a",{class:"mailto",href:"mailto:mariasearle15@gmail.com"}," mariasearle15@gmail.com "),l.a.createElement("a",{class:"callme",href:"tel:07429224296"}," 07429224296"))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"social-icons"},l.a.createElement("a",{class:"social-icon-link twitter",href:"https://twitter.com/MSearle00",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement("a",{class:"social-icon-link github",href:"https://github.com/MSearle00",target:"_blank",rel:"noopener noreferrer","aria-label":"Github"},l.a.createElement("i",{class:"fab fa-github"})),l.a.createElement("a",{class:"social-icon-link linkedin",href:"https://www.linkedin.com/in/mariasearle00/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))};var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(h,null))},v=a(1);a(36);function S(){return l.a.createElement("div",{class:"main-container"},l.a.createElement("div",{class:"aboutMe"},l.a.createElement("p",null,"I am currently a Junior Developer, with experience in Front-End Development."),l.a.createElement("br",null),l.a.createElement("p",null," I hope to continually improve my skills and knowledge, through both the front end and backend."),l.a.createElement("br",null),l.a.createElement("p",null,"At the moment I'm studying C++ and C#!")),l.a.createElement("div",{class:"gridContainer"},l.a.createElement("div",{class:"gridWrapper"},l.a.createElement("h4",{class:"subtitle"},"MY SKILLS"),l.a.createElement("div",{class:"skills"},l.a.createElement("ul",{class:"front-end-skills"},l.a.createElement("strong",null,"FRONT-END:"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"React")),l.a.createElement("ul",{class:"back-end-skills"},l.a.createElement("strong",null,"BACK-END: "),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"API Calls"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Mongo"),l.a.createElement("li",null,"Basic SQL")))),l.a.createElement("div",{class:"gridWrapper"},l.a.createElement("h4",{class:"subtitle"}," TECHNOLOGIES"),l.a.createElement("div",{class:"technologies"},l.a.createElement("ul",null,l.a.createElement("li",null," GIT "),l.a.createElement("li",null," Sourcetree"),l.a.createElement("li",null,"Github"),l.a.createElement("li",null,"Bitbucket"),l.a.createElement("li",null,"MongoDB Compass & Atlas"),l.a.createElement("li",null,"Postman"),l.a.createElement("li",null,"Visual Studio Code"),l.a.createElement("li",null,"Visual Studio 2019"),l.a.createElement("li",null,"SpringToolSuite4"),l.a.createElement("li",null,"Docker"),l.a.createElement("li",null,"Atlassian Group (Jira, Tempo, Confluence)")))),l.a.createElement("div",{class:"gridWrapper"},l.a.createElement("h4",{class:"subtitle"}," EDUCATION / QUALIFICATIONS"),l.a.createElement("div",{class:"education"},l.a.createElement("ul",null,l.a.createElement("li",null," The Developer Academy, Part Time Bootcamp || 2020 - 2021"),l.a.createElement("li",null," HNC Computing - Merit || Sheffield College || 2019 - 2020"),l.a.createElement("li",null," A Level Computing - E || King Edwards VII || 2017 - 2019 "),l.a.createElement("li",null," GCSE Computing - A || King Edwards VII || 2015 - 2017 "))))),l.a.createElement(h,null))}a(17);function C(e){var t=e.options,a=e.prompt,c=e.value,r=e.onChange,o=Object(n.useState)(!1),s=Object(i.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),d=E[0],g=E[1],b=Object(n.useRef)(null);function h(e){u(e&&e.target===b.current)}function f(e){g(""),r(e),u(!1)}return Object(n.useEffect)((function(){return["click","touchend"].forEach((function(e){document.addEventListener(e,h)})),function(){return["click","touchend"].forEach((function(e){document.removeEventListener(e,h)}))}}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"control"},l.a.createElement("div",{className:"selectedValue"},l.a.createElement("input",{type:"text",ref:b,placeholder:c||a,value:d.length>0?d:c||"",onChange:function(e){g(e.target.value),r(null)},onTouchEnd:h,onClick:h})),l.a.createElement("div",{className:"arrow ".concat(m?"open":null)})),l.a.createElement("div",{className:"options ".concat(m?"open":null)},function(e){return e.filter((function(e){return e.toLowerCase().indexOf(d.toLowerCase())>-1}))}(t).map((function(e){return l.a.createElement("div",{className:"option ".concat(c===e?"selected":null),onClick:function(){return f(e)},onTouchEnd:function(){return f(e)}},e)}))))}var N=a(20);var M=function(){var e=N,t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e),s=Object(i.a)(o,2),m=s[0],u=s[1],p=e.map((function(e){return e.tags})),E=[].concat.apply([],p),g=Array.from(new Set(E));function b(e){!function(e){u(m.filter((function(t){return t.tags.includes(e)})))}(e),r(e)}return l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"dropdown"},l.a.createElement(C,{options:g,prompt:"Please select a language",value:c,onChange:function(e){return b(e)}}),l.a.createElement("button",{className:"sortingButton",onClick:function(){return u(e),void r("")}}," Reset Selection ")),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"sortingButton",value:"desc",onClick:function(){u(m.slice().sort((function(e,t){return new Date(t.date)-new Date(e.date)})))}},"Newest First"),l.a.createElement("button",{className:"sortingButton",value:"asc",onClick:function(){return u(m.slice().sort((function(e,t){return new Date(e.date)-new Date(t.date)}))),void console.log(m)}},"Oldest First"))),l.a.createElement("div",{className:"cardsContainer"},l.a.createElement("div",{className:"cardsWrapper"},m.map((function(e){return l.a.createElement(d,{src:e.src,text:e.text,label:e.tags,path:e.path,date:e.date})})))))};function j(){return l.a.createElement("div",{className:"projects"},l.a.createElement("h1",null,"PROJECTS"),l.a.createElement(M,null),l.a.createElement(h,null))}var k=a(21),w=a.n(k);a(39);function A(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"resumeContainer"},l.a.createElement("p",null," Feel free to download my CV using the button below!"),l.a.createElement("br",null),l.a.createElement("a",{href:"/files/CV.pdf",download:!0},l.a.createElement(E,{className:"buttons",buttonStyle:"buttonBlack",buttonSize:"buttonMedium"},"CV"))),l.a.createElement("div",{class:"contactContainer"},l.a.createElement("form",{id:"contactForm",onSubmit:function(e){e.preventDefault(),w.a.sendForm("default_service","template_7p41itg",e.target,"user_epre9iRRNnEE19GXSKR2l").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),document.getElementById("contactForm").reset()}},l.a.createElement("label",{for:"from_name"},"Name"),l.a.createElement("input",{type:"text",name:"from_name",id:"from_name",required:!0}),l.a.createElement("label",{for:"user_email"},"Email"),l.a.createElement("input",{type:"text",name:"user_email",id:"user_email",required:!0}),l.a.createElement("label",{for:"subject"},"Subject"),l.a.createElement("input",{type:"text",name:"subject",id:"subject",required:!0}),l.a.createElement("label",{for:"message"},"Message"),l.a.createElement("textarea",{type:"text",name:"message",id:"message",required:!0}),l.a.createElement("input",{type:"submit",id:"button",value:"Send Email"}))),l.a.createElement(h,null))}var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{basename:"/portfolio"},l.a.createElement(s,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",exact:!0,component:f}),l.a.createElement(v.a,{path:"/aboutMe",component:S}),l.a.createElement(v.a,{path:"/projects",component:j}),l.a.createElement(v.a,{path:"/contactMe",component:A}))))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.eae3bc45.chunk.js.map