import './polyfills.server.mjs';
import{B as R,E as W,G as Y,H as v,I as q,J as K,K as U,N as J,R as Z,S as $,U as Q,V as X,W as ee,X as te,Y as w,a as l,b as L,c as N,d as p,e as d,f as D,g as F,h as j,i as h,j as C,k as H,l as b,m as B,n as e,o as t,p as a,q as V,r as u,s as M,t as o,u as I,v as s,w as G}from"./chunk-DHJ3N4VP.mjs";var ae=()=>({exact:!0}),_=class r{constructor(i,n){this.router=i;this.route=n;this.router.events.subscribe(()=>{this.setActiveLink()})}activeLink="";lastScrollTop=0;onScroll(i){let n=window.pageYOffset||document.documentElement.scrollTop;n>this.lastScrollTop?document.querySelector(".navbar-brand")?.classList.add("shrink"):document.querySelector(".navbar-brand")?.classList.remove("shrink"),this.lastScrollTop=n<=0?0:n}setActiveLink(){let i=this.router.url.split("/")[1];this.activeLink=i||"home"}isActive(i){return this.activeLink===i}closeMenu(){let i=document.querySelector(".navbar-toggler");document.querySelector("#navbarNav").classList.contains("show")&&i.click()}static \u0275fac=function(n){return new(n||r)(C(Q),C(Z))};static \u0275cmp=l({type:r,selectors:[["app-navbar"]],hostBindings:function(n,c){n&1&&u("scroll",function(x){return c.onScroll(x)},!1,j)},standalone:!0,features:[s],decls:25,vars:2,consts:[[1,"container-fluid","nav-container"],[1,"row"],[1,"col-12"],[1,"navbar","navbar-expand-lg"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],["routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["routerLink","/",1,"nav-link",3,"click"],["routerLinkActive","active",1,"nav-item"],["routerLink","/about-us",1,"nav-link",3,"click"],["routerLink","/apply-for-admission",1,"nav-link",3,"click"],["routerLink","/gallery",1,"nav-link",3,"click"],["routerLink","/contact-us",1,"nav-link",3,"click"]],template:function(n,c){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3)(4,"a",4),o(5,"Kinyor Yesu School"),t(),e(6,"button",5),a(7,"span",6),t(),e(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),u("click",function(){return c.closeMenu()}),o(12,"Home"),t()(),e(13,"li",11)(14,"a",12),u("click",function(){return c.closeMenu()}),o(15,"About Us"),t()(),e(16,"li",11)(17,"a",13),u("click",function(){return c.closeMenu()}),o(18,"Apply For Admission"),t()(),e(19,"li",11)(20,"a",14),u("click",function(){return c.closeMenu()}),o(21,"Gallery"),t()(),e(22,"li",11)(23,"a",15),u("click",function(){return c.closeMenu()}),o(24,"Contact Us"),t()()()()()()()()),n&2&&(h(10),b("routerLinkActiveOptions",G(1,ae)))},dependencies:[w,X,ee],styles:[".nav-container[_ngcontent-%COMP%]{padding-left:100px;padding-right:100px;padding-top:10px;position:fixed;top:80px;left:0;right:0;width:100%;z-index:9999;background-color:#fff;box-shadow:0 4px 6px #0000001a}.navbar-brand[_ngcontent-%COMP%]{transition:transform .3s ease;transform:scale(1)}.navbar-brand.shrink[_ngcontent-%COMP%]{transform:scale(.8)}.nav-link[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#000;padding:10px 15px;transition:all .3s ease}.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border-bottom:4px solid #72a02f;color:#72a02f;padding-bottom:20px}.nav-link[_ngcontent-%COMP%]:hover{color:#72a02f}@media (max-width: 768px){.nav-container[_ngcontent-%COMP%]{padding:10px;top:95px}.navbar-nav[_ngcontent-%COMP%]{text-align:center;width:100%}.navbar[_ngcontent-%COMP%]{background-color:transparent}.navbar-collapse[_ngcontent-%COMP%]{background-color:#72a02f;border-radius:5px;padding:10px 0}.nav-link[_ngcontent-%COMP%]{color:#fff;background-color:transparent;padding:10px 20px;border-radius:5px}.nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{background-color:#444;color:#fff;border-bottom:2px solid #72a02f}.nav-link[_ngcontent-%COMP%]:hover{background-color:#444;color:#72a02f}}@media (max-width: 425px){.nav-container[_ngcontent-%COMP%]{padding:10px;top:190px}}"]})};var k=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-topnav"]],standalone:!0,features:[s],decls:28,vars:0,consts:[[1,"top-nav"],[1,"contact-info-left"],[1,"contact-info"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-mail"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"],["d","M3 7l9 6l9 -6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-phone"],["d","M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"],[1,"contact-info-right"],[1,"social-links","d-flex","gap-2"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-brand-facebook"],["d","M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-brand-whatsapp"],["d","M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"],["d","M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-brand-youtube"],["d","M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"],["d","M10 9l5 3l-5 3z"],[1,"apply-btn"]],template:function(n,c){n&1&&(e(0,"div",0)(1,"div",1)(2,"p",2),p(),e(3,"svg",3),a(4,"path",4)(5,"path",5)(6,"path",6),t(),o(7,"Email: contact@kinyoryesuschool.com "),t(),d(),e(8,"p",2),p(),e(9,"svg",7),a(10,"path",4)(11,"path",8),t(),o(12," Call Us: +25470022084 "),t()(),d(),e(13,"div",9)(14,"div",10),p(),e(15,"svg",11),a(16,"path",4)(17,"path",12),t(),e(18,"svg",13),a(19,"path",4)(20,"path",14)(21,"path",15),t(),e(22,"svg",16),a(23,"path",4)(24,"path",17)(25,"path",18),t()(),d(),e(26,"button",19),o(27,"Apply For Admission"),t()()())},styles:[".top-nav[_ngcontent-%COMP%]{background-color:#000;color:#fff;padding:20px 100px;position:fixed;top:0;left:0;right:0;width:100%;height:80px;z-index:9999;display:flex;justify-content:space-between;align-items:center}.contact-info-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.contact-info-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px;color:#fff}.contact-info-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px}.contact-info-left[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{margin:0;font-size:14px;display:flex;align-items:center}.contact-info-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}.social-links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff;width:24px;height:24px;cursor:pointer;transition:transform .3s ease}.social-links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.apply-btn[_ngcontent-%COMP%]{background-color:#72a02f;color:#fff;padding:8px 15px;border:none;border-radius:5px;font-size:14px;cursor:pointer;transition:background-color .3s ease}.apply-btn[_ngcontent-%COMP%]:hover{background-color:#abea4e}@media (max-width: 768px){.top-nav[_ngcontent-%COMP%]{padding:20px;height:auto}.contact-info-left[_ngcontent-%COMP%]{justify-content:space-between;align-items:center;margin-bottom:10px}.contact-info-left[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]{margin-right:0;margin-bottom:5px}.contact-info-right[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.social-links[_ngcontent-%COMP%]{justify-content:center;gap:15px}.apply-btn[_ngcontent-%COMP%]{width:100%;text-align:center}}@media (max-width: 425px){.top-nav[_ngcontent-%COMP%]{padding:20px;display:flex!important;flex-direction:column!important;height:auto!important}.contact-info-left[_ngcontent-%COMP%], .contact-info-right[_ngcontent-%COMP%]{flex-direction:column}}"]})};var O=class r{title="kinyoryesuschool";static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-root"]],standalone:!0,features:[s],decls:4,vars:0,consts:[[1,"main-content"]],template:function(n,c){n&1&&(a(0,"app-topnav")(1,"app-navbar"),e(2,"div",0),a(3,"router-outlet"),t())},dependencies:[$,_,v,k],styles:[".main-content[_ngcontent-%COMP%]{margin-top:80px}@media (max-width: 425px){.main-content[_ngcontent-%COMP%]{margin-top:260px}}"]})};function re(r,i){if(r&1){let n=V();e(0,"div",5),a(1,"img",6),e(2,"div",7)(3,"p",8),o(4),t(),e(5,"h3",9),o(6),t(),e(7,"div",10)(8,"button",11),u("click",function(){let m=L(n).index,x=M();return N(x.onButtonClick("action1",m))}),o(9," About Us "),t(),e(10,"button",12),u("click",function(){let m=L(n).index,x=M();return N(x.onButtonClick("action2",m))}),o(11," Contact Us "),t()()()()}if(r&2){let n=i.$implicit,c=i.index,m=M();B("active",c===m.currentIndex),h(),b("src",n.src,F)("alt",n.alt),h(3),I(n.subtitle),h(2),I(n.title)}}var y=class r{constructor(i){this.platformId=i}images=[{src:"https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu3.jpeg",alt:"Image 1",title:"Kinyor Yesu School",subtitle:"Education For Transformation"},{src:"https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu6.jpeg",alt:"Image 2",title:"Kinyor Yesu School",subtitle:"Education For Transformation"},{src:"https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu8.jpeg",alt:"Image 3",title:"Kinyor Yesu School",subtitle:"Education For Transformation"}];currentIndex=0;slideInterval;ngOnInit(){console.log("Slider component initialized"),q(this.platformId)&&(this.slideInterval=setInterval(()=>{this.moveSlide(1)},3e3))}ngOnDestroy(){console.log("Slider component destroyed"),this.slideInterval&&clearInterval(this.slideInterval)}moveSlide(i){this.currentIndex=(this.currentIndex+i+this.images.length)%this.images.length}onButtonClick(i,n){console.log(`Button clicked: ${i} on image index: ${n}`)}static \u0275fac=function(n){return new(n||r)(C(D))};static \u0275cmp=l({type:r,selectors:[["app-slider"]],standalone:!0,features:[s],decls:7,vars:1,consts:[[1,"custom-carousel"],[1,"carousel-inner"],["class","carousel-item",3,"active",4,"ngFor","ngForOf"],[1,"carousel-control-prev",3,"click"],[1,"carousel-control-next",3,"click"],[1,"carousel-item"],[3,"src","alt"],[1,"carousel-caption"],[1,"carousel-subtitle"],[1,"carousel-title"],[1,"button-container"],[1,"carousel-btn","about-btn",3,"click"],[1,"carousel-btn","contact-btn",3,"click"]],template:function(n,c){n&1&&(e(0,"div",0)(1,"div",1),H(2,re,12,6,"div",2),t(),e(3,"button",3),u("click",function(){return c.moveSlide(-1)}),o(4," \u276E "),t(),e(5,"button",4),u("click",function(){return c.moveSlide(1)}),o(6,"\u276F"),t()()),n&2&&(h(2),b("ngForOf",c.images))},dependencies:[v,Y],styles:['.custom-carousel[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;margin:0 auto;overflow:hidden}.carousel-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.carousel-item[_ngcontent-%COMP%]{display:none;width:100%;height:100%;position:relative;transition:opacity .5s ease}.carousel-item.active[_ngcontent-%COMP%]{display:block}.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:top center;position:relative}.carousel-item[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#0000004d;z-index:1}.carousel-caption[_ngcontent-%COMP%]{position:absolute;top:50%;left:200px;transform:translateY(-50%);color:#fff;padding:20px;text-align:left;max-width:80%;z-index:2}.carousel-title[_ngcontent-%COMP%]{font-size:78px;font-weight:900}.carousel-subtitle[_ngcontent-%COMP%]{font-size:24px;font-weight:500;margin:0}.button-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px;margin:40px 0;justify-content:flex-start}.carousel-btn[_ngcontent-%COMP%]{background-color:#72a02f;color:#fff;border:none;padding:14px 18px;font-size:16px;font-weight:500;text-transform:uppercase;cursor:pointer;border-radius:5px;transition:background-color .3s;width:auto;max-width:100%}.carousel-btn[_ngcontent-%COMP%]:hover{color:#72a02f;background-color:#fff}.contact-btn[_ngcontent-%COMP%]{background-color:#fff;color:#72a02f;border:none;padding:14px 18px;font-size:16px;font-weight:500;text-transform:uppercase;cursor:pointer;border-radius:5px;transition:background-color .3s;width:auto;max-width:100%}.contact-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#72a02f}.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);color:#fff;border:none;font-size:48px;padding:20px;cursor:pointer;z-index:10;border-radius:50%;transition:background-color .3s ease}.carousel-control-prev[_ngcontent-%COMP%]{left:20px}.carousel-control-next[_ngcontent-%COMP%]{right:20px}@media (max-width: 768px){.carousel-caption[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;padding:10px;width:100%}.carousel-title[_ngcontent-%COMP%]{font-size:54px}.carousel-subtitle[_ngcontent-%COMP%]{font-size:16px}.carousel-control-prev[_ngcontent-%COMP%]{left:10px}.carousel-control-next[_ngcontent-%COMP%]{right:10px}.button-container[_ngcontent-%COMP%]{justify-content:center;width:100%;margin:20px 0}.carousel-btn[_ngcontent-%COMP%]{margin:0 5px}}']})};var P=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-whychooseus"]],standalone:!0,features:[s],decls:152,vars:0,consts:[[1,"container-fluid","main-container"],[1,"row"],[1,"col-12","title-text"],[1,"row","d-flex"],[1,"col-sm-4","col-12"],[1,"card","h-100"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-heart-handshake"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"],["d","M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"],["d","M12.5 15.5l2 2"],["d","M15 13l2 2"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-certificate"],["d","M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"],["d","M13 17.5v4.5l2 -1.5l2 1.5v-4.5"],["d","M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"],["d","M6 9l12 0"],["d","M6 12l3 0"],["d","M6 15l2 0"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-school"],["d","M22 9l-10 -4l-10 4l10 4l10 -4v6"],["d","M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-zoom-check"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],["d","M7 10l2 2l4 -4"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-stretching"],["d","M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"],["d","M5 20l5 -.5l1 -2"],["d","M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2"],[1,"container","curriculum-container"],[1,"col-md-8","left-side"],[1,"content"],[1,"col-md-4","right-side"],["src","https://www.kinyoryesuschool.com/wp-content/uploads/2024/08/kinyoryesu3.jpeg","alt","Image",1,"img-fluid"],[1,"container","application-container"],[1,"col-12"],[1,"row","mt-5"],[1,"col-md-4"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-number-1","mb-2","application-icon"],["d","M13 20v-16l-5 5"],[1,"card-title",2,"text-align","center !important"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-number-2","application-icon"],["d","M8 8a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 9.185h8"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-number-3","application-icon"],["d","M12 12a4 4 0 1 0 -4 -4"],["d","M8 16a4 4 0 1 0 4 -4"],[1,"row","mt-5","documents"],[1,"col-3","d-none","d-md-block"],[1,"col-12","col-md-6"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-check"],["d","M5 12l5 5l10 -10"]],template:function(n,c){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),o(4,"Why Choose"),t(),e(5,"h2"),o(6,"Kinyor Yesu Christian School"),t()()(),e(7,"div",3)(8,"div",4)(9,"div",5),p(),e(10,"svg",6),a(11,"path",7)(12,"path",8)(13,"path",9)(14,"path",10)(15,"path",11),t(),d(),e(16,"div",12)(17,"h5",13),o(18,"Holistic Education"),t(),e(19,"p",14),o(20," We believe in educating the whole child\u2014academically, socially, and emotionally. Our curriculum is designed to build a solid foundation in literacy and numeracy while also encouraging critical thinking, creativity, and problem-solving skills. "),t()()()(),e(21,"div",4)(22,"div",5),p(),e(23,"svg",15),a(24,"path",7)(25,"path",16)(26,"path",17)(27,"path",18)(28,"path",19)(29,"path",20)(30,"path",21),t(),d(),e(31,"div",12)(32,"h5",13),o(33,"Experienced and Caring Staff"),t(),e(34,"p",14),o(35," Our team of qualified and passionate teachers is committed to delivering high-quality education and providing personalized support. We take pride in creating a safe and supportive learning environment where each child feels valued and motivated. "),t()()()(),e(36,"div",4)(37,"div",5),p(),e(38,"svg",22),a(39,"path",7)(40,"path",23)(41,"path",24),t(),d(),e(42,"div",12)(43,"h5",13),o(44,"Innovative Learning Facilities"),t(),e(45,"p",14),o(46," Our school is equipped with modern classrooms, a well-stocked library, and dedicated spaces for arts and sports. We integrate technology into our teaching to make learning engaging and relevant to the 21st century. "),t()()()()(),e(47,"div",3)(48,"div",4)(49,"div",5),p(),e(50,"svg",25),a(51,"path",7)(52,"path",26)(53,"path",27)(54,"path",28),t(),d(),e(55,"div",12)(56,"h5",13),o(57,"Strong Community Values"),t(),e(58,"p",14),o(59," We are deeply rooted in the local community and believe in the importance of fostering strong relationships between the school, students, and their families. Our community-driven approach ensures that each child\u2019s educational journey is supported by a network of care and encouragement. "),t()()()(),e(60,"div",4)(61,"div",5),p(),e(62,"svg",29),a(63,"path",7)(64,"path",30)(65,"path",31)(66,"path",32),t(),d(),e(67,"div",12)(68,"h5",13),o(69,"Extracurricular Opportunities"),t(),e(70,"p",14),o(71," Beyond academics, we offer a range of extracurricular activities including sports, music, and drama. These programs help students develop new skills, explore their interests, and build confidence. "),t()()()()()(),e(72,"div",33)(73,"div",1)(74,"div",34)(75,"div",35)(76,"h3"),o(77,"Our"),t(),e(78,"h2"),o(79,"Curriculum"),t(),e(80,"p"),o(81," Our curriculum aligns with national standards and is designed to provide a balanced education. From foundational subjects such as Mathematics and Science to languages, social studies, and environmental education, our program is both comprehensive and adaptable to meet each student\u2019s needs. "),t()()(),e(82,"div",36),a(83,"img",37),t()()(),e(84,"div",38)(85,"div",1)(86,"div",39)(87,"h3"),o(88,"Apply"),t(),e(89,"h2"),o(90,"For Admission"),t(),e(91,"div",40)(92,"div",41)(93,"div",5)(94,"div",12),p(),e(95,"svg",42),a(96,"path",7)(97,"path",43),t(),d(),e(98,"h5",44),o(99," Visit Us "),t(),e(100,"p",14),o(101," We invite you to schedule a visit to our school. Meet our staff, tour our facilities, and see firsthand what makes our school special. "),t()()()(),e(102,"div",41)(103,"div",5)(104,"div",12),p(),e(105,"svg",45),a(106,"path",7)(107,"path",46),t(),d(),e(108,"h5",44),o(109," Submit an Application "),t(),e(110,"p",14),o(111," Complete our simple online application form or drop by the school office to collect a paper application. "),t()()()(),e(112,"div",41)(113,"div",5)(114,"div",12),p(),e(115,"svg",47),a(116,"path",7)(117,"path",48)(118,"path",49),t(),d(),e(119,"h5",44),o(120," Join Our Family "),t(),e(121,"p",14),o(122," Once your application is reviewed and accepted, we will provide you with all the necessary information to prepare for your child\u2019s exciting journey with us. "),t()()()()(),e(123,"div",50)(124,"div",39)(125,"h2"),o(126,"Required Documents"),t(),e(127,"div",1),a(128,"div",51),e(129,"div",52)(130,"ul")(131,"li"),p(),e(132,"svg",53),a(133,"path",7)(134,"path",54),t(),o(135,"A copy of the child\u2019s birth certificate "),t(),d(),e(136,"li"),p(),e(137,"svg",53),a(138,"path",7)(139,"path",54),t(),o(140,"Latest school report from the child\u2019s current school "),t(),d(),e(141,"li"),p(),e(142,"svg",53),a(143,"path",7)(144,"path",54),t(),o(145,"Leaving certificate/letter "),t(),d(),e(146,"li"),p(),e(147,"svg",53),a(148,"path",7)(149,"path",54),t(),o(150,"Child passport photo "),t()()(),d(),a(151,"div",51),t()()()()()())},styles:[".main-container[_ngcontent-%COMP%]{padding:80px 100px;background-color:#f8f9fa}.title-text[_ngcontent-%COMP%]{text-align:center;padding-bottom:60px}.title-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .application-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:39px;font-weight:600;line-height:1.1}.title-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .application-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;text-transform:capitalize;font-weight:600;color:#72a02f}.main-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:12px;margin-bottom:30px;transition:all .3s ease-in-out;position:relative;background-color:#fff;border:none;box-shadow:0 4px 6px #0000001a;border-radius:8px}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]{display:flex;flex-direction:column}.main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{flex-grow:1;padding:20px}.main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{background-color:#72a02f;color:#fff;transform:translateY(-10px);box-shadow:0 12px 20px #0003}.main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:60px;width:60px;color:#fff;background-color:#72a02f;padding:7px;border-radius:50%;transition:all .3s ease-in-out}.main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{color:#72a02f;background-color:#fff;height:50px;width:50px}.curriculum-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:30px;box-shadow:5px 0 15px #0000001a;padding:30px;margin-top:50px;margin-bottom:50px}.left-side[_ngcontent-%COMP%]{padding-right:30px}.right-side[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:10px}.application-container[_ngcontent-%COMP%]{padding:60px 0}.application-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .application-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.application-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:12px;margin-bottom:30px;transition:all .3s ease-in-out;position:relative;background-color:#fff;border:none;box-shadow:0 4px 6px #0000001a;border-radius:8px}.card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.application-icon[_ngcontent-%COMP%]{height:30px;width:30px;color:#72a02f;margin-bottom:15px!important}.documents[_ngcontent-%COMP%]{padding:40px 0}ul[_ngcontent-%COMP%]{list-style:none;padding-top:20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;font-weight:500}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:15px;color:#72a02f;height:30px;width:30px;max-width:100%}@media (max-width: 768px){.main-container[_ngcontent-%COMP%]{padding:20px}.curriculum-container[_ngcontent-%COMP%]{padding:30px}.application-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:5px;padding:4px}.main-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:25px}.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]{padding-right:0;padding-left:0}.documents[_ngcontent-%COMP%]{padding:10px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:25px;width:25px}}"]})};var S=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-home"]],standalone:!0,features:[s],decls:13,vars:0,consts:[[1,"container","my-4"],[1,"row","about-content"],[1,"col-md-6","col-12","p-0","image"],[1,"col-md-6","col-12","p-4","content"],[1,"overlay",2,"position","absolute","top","0","left","0","right","0","bottom","0","background","rgba(0, 0, 0, 0.8)","z-index","1"],[1,"apply-btn"]],template:function(n,c){n&1&&(a(0,"app-slider"),e(1,"div",0)(2,"div",1),a(3,"div",2),e(4,"div",3),a(5,"div",4),e(6,"h2"),o(7,"Kinyor Yesu Christian School"),t(),e(8,"p"),o(9," Nestled in the heart of Lolgorian, Kenya, our primary school is a beacon of excellence in education. At Kinyor Yesu Christian School, we are dedicated to fostering a nurturing environment where every child is encouraged to grow, learn, and thrive. Our mission is to provide a comprehensive and engaging education that empowers students to reach their full potential. "),t(),e(10,"button",5),o(11,"Apply Now"),t()()()(),a(12,"app-whychooseus"))},dependencies:[v,y,w,P],styles:['.about-content[_ngcontent-%COMP%]{display:flex;min-height:400px;height:100%;padding:20px 100px;margin:20px 0}.image[_ngcontent-%COMP%]{min-height:400px;height:100%;background:url("./media/img1-JBINJNQZ.png");background-size:cover;background-repeat:no-repeat;background-position:center center}.content[_ngcontent-%COMP%]{position:relative;min-height:400px;height:100%;padding:40px;background:url("./media/img1-JBINJNQZ.png");background-size:cover;background-repeat:no-repeat;color:#fff;display:flex;justify-content:center;flex-direction:column}.content[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#000c;z-index:1}.content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:2}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:29px;font-weight:700;color:#fff}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;font-size:18px;color:#c1d3ff}.apply-btn[_ngcontent-%COMP%]{background-color:#72a02f;color:#fff;border:none;padding:14px 18px;font-size:16px;font-weight:500;text-transform:uppercase;cursor:pointer;border-radius:5px;transition:background-color .3s;width:auto;max-width:250px}.apply-btn[_ngcontent-%COMP%]:hover{color:#72a02f;background-color:#fff}@media (max-width: 1024px){.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;color:#fff}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;font-size:16px;color:#c1d3ff}}@media (max-width: 768px){.about-content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#fff}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;font-size:14px;color:#c1d3ff}.apply-btn[_ngcontent-%COMP%]{padding:8px 10px;font-size:14px;max-width:200px}}@media (max-width: 425px){.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#fff}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;font-size:14px;color:#c1d3ff}}']})};var E=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-about"]],standalone:!0,features:[s],decls:2,vars:0,template:function(n,c){n&1&&(e(0,"p"),o(1,"about works!"),t())}})};var T=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-apply"]],standalone:!0,features:[s],decls:2,vars:0,template:function(n,c){n&1&&(e(0,"p"),o(1,"apply works!"),t())}})};var z=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-contact"]],standalone:!0,features:[s],decls:2,vars:0,template:function(n,c){n&1&&(e(0,"p"),o(1,"contact works!"),t())}})};var A=class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=l({type:r,selectors:[["app-gallery"]],standalone:!0,features:[s],decls:2,vars:0,template:function(n,c){n&1&&(e(0,"p"),o(1,"gallery works!"),t())}})};var ne=[{path:"",component:S},{path:"about-us",component:E},{path:"apply-for-admission",component:T},{path:"gallery",component:A},{path:"contact-us",component:z}];var oe={providers:[R({eventCoalescing:!0}),te(ne),U()]};var ce={providers:[J()]},ie=W(oe,ce);var le=()=>K(O,ie),tt=le;export{tt as a};
