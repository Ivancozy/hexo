var percentFlag=!1;function essayScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;result<=99||(result=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<result)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}function browserTC(){btf.snackbarShow(""),Snackbar.show({text:"浏览器版本较低，网站样式可能错乱",actionText:"关闭",duration:"6000",pos:"bottom-right"})}function browserVersion(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!t),i=e.indexOf("Firefox")>-1,o=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,s=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");n?e.split("Edge/")[1].split(".")[0]<90&&browserTC():i?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():o?e.split("OPR/")[1].split(".")[0]<80&&browserTC():s&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,t){let n=new Date((new Date).getTime()+24*t*60*60*1e3).toGMTString();for(let t in e)document.cookie=t+"="+e[t]+";expires="+n}function getCookie(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",(function(){anzhiyu.musicTelescopic()}))}(anzhiyu={diffDate:function(e,t=!1){const n=new Date,i=new Date(e),o=n.getTime()-i.getTime(),s=36e5,a=24*s;let c;if(t){const e=o/a,t=o/s,n=o/6e4;c=o/2592e6>=1?i.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.hour:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else c=parseInt(o/a);return c},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,n=t.getAttribute("datetime");t.innerText=anzhiyu.diffDate(n,!0),t.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(e){"undefined"!=e&&"null"!=e||(e="好棒！");var t=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var i=replaceAll(e,"\n","\n> ");t.value="> "+i+"\n\n",t.dispatchEvent(n);var o=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,o-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},initIndexEssay:function(){setTimeout((()=>{let e=new Swiper(".essay_bar_swiper_container",{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),t=document.getElementById("bbtalk");null!==t&&(t.onmouseenter=function(){e.autoplay.stop()},t.onmouseleave=function(){e.autoplay.start()})}),100)}}).initIndexEssay(),anzhiyu.changeTimeInEssay(),anzhiyu.reflashEssayWaterFall(),1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion());var anzhiyu_musicPlaying=!1,anzhiyu_musicStretch=!1,anzhiyu_musicFirst=!1,anzhiyu={musicToggle:function(){anzhiyu_musicFirst||(musicBindEvent(),anzhiyu_musicFirst=!0),anzhiyu_musicStretch=anzhiyu_musicPlaying?(document.querySelector("#nav-music").classList.remove("playing"),document.getElementById("menu-music-toggle").innerHTML='<i class="fa-solid fa-pause"></i><span>暂停音乐</span>',document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",document.querySelector("#consoleMusic").classList.remove("on"),anzhiyu_musicPlaying=!1,document.querySelector("#nav-music").classList.remove("stretch"),!1):(document.querySelector("#nav-music").classList.add("playing"),document.getElementById("menu-music-toggle").innerHTML='<i class="fa-solid fa-play"></i><span>播放音乐</span>',anzhiyu_musicPlaying=!0,document.querySelector("#nav-music").classList.add("stretch"),!0),document.querySelector("meting-js").aplayer.toggle()},musicTelescopic:function(){anzhiyu_musicStretch?(document.querySelector("#nav-music").classList.remove("stretch"),anzhiyu_musicStretch=!1):(document.querySelector("#nav-music").classList.add("stretch"),anzhiyu_musicStretch=!0)},musicSkipBack:function(){document.querySelector("meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("meting-js").aplayer.skipForward()},musicGetName:function(){for(var e=$(".aplayer-title"),t=[],n=e.length-1;n>=0;n--)t[n]=e[n].innerText;return t[0]}};document.getElementById("name-container").setAttribute("style","display:none");var position=$(window).scrollTop();function scrollToTop(){document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none"),btf.scrollToDest(0,500)}$(window).scroll((function(){var e=$(window).scrollTop();e>position?(document.getElementById("name-container").setAttribute("style","display:block!important"),document.getElementsByClassName("menus_items")[1].setAttribute("style","display:none!important")):(document.getElementsByClassName("menus_items")[1].setAttribute("style","display:block!important"),document.getElementById("name-container").setAttribute("style","display:none")),position=e}));var titlepathname=window.location.pathname;document.getElementById("page-name").innerText="/"==titlepathname?document.title:document.getElementsByClassName("post-title")[0].innerText;