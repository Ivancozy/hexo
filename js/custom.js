var percentFlag=!1;function essayScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;result<=99||(result=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?setTimeout((()=>{waterfall("#waterfall")}),500):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<result)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}function browserTC(){btf.snackbarShow(""),Snackbar.show({text:"浏览器版本较低，网站样式可能错乱",actionText:"关闭",duration:"6000",pos:"bottom-right"})}function browserVersion(){var e=navigator.userAgent,t=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,n=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!t),a=e.indexOf("Firefox")>-1,o=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,E=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");n?e.split("Edge/")[1].split(".")[0]<90&&browserTC():a?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():o?e.split("OPR/")[1].split(".")[0]<80&&browserTC():E&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,t){let n=new Date((new Date).getTime()+24*t*60*60*1e3).toGMTString();for(let t in e)document.cookie=t+"="+e[t]+";expires="+n}function getCookie(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",(function(){anzhiyu.musicTelescopic()}))}(anzhiyu={diffDate:function(e,t=!1){const n=new Date,a=new Date(e),o=n.getTime()-a.getTime(),E=36e5,i=24*E;let B;if(t){const e=o/i,t=o/E,n=o/6e4;B=o/2592e6>=1?a.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.hour:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else B=parseInt(o/i);return B},changeTimeInEssay:function(){document.querySelector("#bber")&&document.querySelectorAll("#bber time").forEach((function(e){var t=e,n=t.getAttribute("datetime");t.innerText=anzhiyu.diffDate(n,!0),t.style.display="inline"}))},reflashEssayWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),500)},commentText:function(e){"undefined"!=e&&"null"!=e||(e="好棒！");var t=document.getElementsByClassName("el-textarea__inner")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var a=replaceAll(e,"\n","\n> ");t.value="> "+a+"\n\n",t.dispatchEvent(n);var o=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,o-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},initIndexEssay:function(){setTimeout((()=>{let e=new Swiper(".essay_bar_swiper_container",{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),t=document.getElementById("bbtalk");null!==t&&(t.onmouseenter=function(){e.autoplay.stop()},t.onmouseleave=function(){e.autoplay.start()})}),100)}}).initIndexEssay(),anzhiyu.changeTimeInEssay(),anzhiyu.reflashEssayWaterFall(),1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion());var anzhiyu_musicPlaying=!1,anzhiyu_musicStretch=!1,anzhiyu_musicFirst=!1,anzhiyu={musicToggle:function(e=!0){anzhiyu_musicFirst||(musicBindEvent(),anzhiyu_musicFirst=!0);anzhiyu_musicPlaying?(document.querySelector("#nav-music").classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",anzhiyu_musicPlaying=!1,document.querySelector("#nav-music").classList.remove("stretch"),anzhiyu_musicStretch=!1):(document.querySelector("#nav-music").classList.add("playing"),anzhiyu_musicPlaying=!0,document.querySelector("#nav-music").classList.add("stretch"),anzhiyu_musicStretch=!0),e&&document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){anzhiyu_musicStretch?(document.querySelector("#nav-music").classList.remove("stretch"),anzhiyu_musicStretch=!1):(document.querySelector("#nav-music").classList.add("stretch"),anzhiyu_musicStretch=!0)},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){for(var e=$(".aplayer-title"),t=[],n=e.length-1;n>=0;n--)t[n]=e[n].innerText;return t[0]}};function tonav(){document.getElementById("name-container").setAttribute("style","opacity:0");var e=$(window).scrollTop();$(window).scroll((function(){var t=$(window).scrollTop();t>e?(document.getElementById("name-container").setAttribute("style",""),document.getElementsByClassName("menus_items")[1].setAttribute("style","opacity:0")):(document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","opacity:0")),e=t})),document.getElementById("page-name").innerText=document.title}function clear(){clearInternal(timer),document.querySelector(".comment-barrage").innerHtml="",load()}function load(){timer=setInteral((()=>{popCommentBarrage()}),114514)}function saveData(e,t){localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))}function loadData(e,t){let n=JSON.parse(localStorage.getItem(e));if(n){let e=Date.now()-n.time;if(e<60*t*1e3&&e>-1)return n.data}return 0}document.getElementsByClassName("back-home-button")[0].hover=function(){document.getElementsByClassName("back-menu-list-groups")[0].setAttribute("style","opacity:1 !important; display:block !important; pointer-events: all !important")},document.addEventListener("pjax:complete",tonav,coverColor,clear),document.addEventListener("DOMContentLoaded",tonav,coverColor,load);try{let e=loadData("blogbg",1440);e?changeBg(e,1):localStorage.removeItem("blogbg")}catch(e){localStorage.removeItem("blogbg")}function changeBg(e,t){let n=document.getElementById("web_bg");"#"==e.charAt(0)?(n.style.backgroundColor=e,n.style.backgroundImage="none"):n.style.backgroundImage=e,t||saveData("blogbg",e)}var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"changeBgBox",index:999,title:"切换背景",x:"center",y:"center",minwidth:"300px",height:"60%",background:"var(--ivany-blue)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML='\n  <div id="article-container" style="padding:10px;">\n  \n  <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n  <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/113.jpg)" class="pimgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/113.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/92.jpg)" class="pimgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/92.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/50.jpg)" class="pimgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/50.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/13.jpg)" class="pimgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/13.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/24.jpg)" class="pimgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/24.jpg)\')">\n  </a>\n \n  </div>\n  \n  <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/118.jpg)" class="imgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/WLOP%E5%A4%A7%E4%BD%AC%E9%AC%BC%E5%88%80%E5%A3%81%E7%BA%B8%E5%A4%A7%E5%85%A8/118.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/B%E7%AB%99%E5%A3%81%E7%BA%B8/%E7%8B%AC%E7%AB%8B%E5%A3%81%E7%BA%B8/%E7%99%BE%E5%90%88.jpeg)" class="imgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/B%E7%AB%99%E5%A3%81%E7%BA%B8/%E7%8B%AC%E7%AB%8B%E5%A3%81%E7%BA%B8/%E7%99%BE%E5%90%88.jpeg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/B%E7%AB%99%E5%A3%81%E7%BA%B8/%E7%8B%AC%E7%AB%8B%E5%A3%81%E7%BA%B8/%E4%B9%A6%E6%B3%95.jpeg)" class="imgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/B%E7%AB%99%E5%A3%81%E7%BA%B8/%E7%8B%AC%E7%AB%8B%E5%A3%81%E7%BA%B8/%E4%B9%A6%E6%B3%95.jpeg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%BB%9D%E7%BE%8E%E5%A3%81%E7%BA%B8/79619b2d1d807eed8e09b05ddd9228ed.jpg)" class="imgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%BB%9D%E7%BE%8E%E5%A3%81%E7%BA%B8/79619b2d1d807eed8e09b05ddd9228ed.jpg)\')">\n  </a>\n  <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%BB%9D%E7%BE%8E%E5%A3%81%E7%BA%B8/wallhaven-o3lpzl.jpg)" class="imgbox" onclick="changeBg(\'url(https://meic.tk/d/Aliyun%F0%9F%8D%81/%F0%9F%9B%B6%E3%80%90%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%BA%90%E8%88%B9%E8%88%B1%E3%80%91%EF%BC%BB%E6%8C%81%E7%BB%AD%E5%8A%A0%E8%88%B1%E4%B8%AD%EF%BC%BD/%F0%9F%8C%85%20%E5%A3%81%E7%BA%B8%E5%BA%93/%E4%BA%8C%E6%AC%A1%E5%85%83%E5%A3%81%E7%BA%B8/%E4%BA%8C%E6%AC%A1%E5%85%83%E7%BB%9D%E7%BE%8E%E5%A3%81%E7%BA%B8/wallhaven-o3lpzl.jpg)\')">\n  </a>\n  </div>\n  \n  \n  \n  <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg(\'linear-gradient(to right, #eecda3, #ef629f)\')">\n  </a>\n  </div>\n  \n  <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n  <div class="bgbox">\n  <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg(\'#7D9D9C\')"></a> \n  </div>\n'}function winResize(){var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}function toggleWinbox(){document.querySelector("#changeBgBox")?winbox.toggleClass("hide"):createWinbox()}var $percent=document.querySelector("#nav #hotkey #top-button a.site-page i");function coverColor(){var e=document.getElementById("post-cover")?.src;void 0!==e?RGBaster.colors(e,{paletteSize:30,exclude:["rgb(255,255,255)","rgb(0,0,0)","rgb(254,254,254)"],success:function(e){if("rgb(66,90,239)"!=e.dominant){const n=e.dominant.match(/\d+/g);var t=`rgb(${n[0]},${n[1]},${n[2]})`;"light"==getContrastYIQ(colorHex(t))&&(t=LightenDarkenColor(colorHex(t),-40)),document.styleSheets[0].addRule(":root","--ivany-main:"+t+"!important"),document.styleSheets[0].addRule(":root","--ivany-main-op:"+t+"23!important"),document.styleSheets[0].addRule(":root","--ivany-main-op-deep:"+t+"dd!important"),document.styleSheets[0].addRule(":root","--ivany-main-none:"+t+"00!important"),Jay.initThemeColor(),document.getElementById("coverdiv").classList.add("loaded")}}}):(document.styleSheets[0].addRule(":root","--ivany-main: var(--ivany-theme)!important"),document.styleSheets[0].addRule(":root","--ivany-main-op: var(--ivany-theme-op)!important"),document.styleSheets[0].addRule(":root","--ivany-main-op-deep:var(--ivany-theme-op-deep)!important"),document.styleSheets[0].addRule(":root","--ivany-main-none: var(--ivany-theme-none)!important"),Jay.initThemeColor())}function colorHex(e){var t=e;if(/^(rgb|RGB)/.test(t)){for(var n=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),a="#",o=0;o<n.length;o++){var E=Number(n[o]).toString(16);"0"===E&&(E+=E),a+=E}return 7!==a.length&&(a=t),a}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t))return t;var i=t.replace(/#/,"").split("");if(6===i.length)return t;if(3===i.length){var B="#";for(o=0;o<i.length;o+=1)B+=i[o]+i[o];return B}}function colorRgb(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var n="#",a=1;a<4;a+=1)n+=t.slice(a,a+1).concat(t.slice(a,a+1));t=n}var o=[];for(a=1;a<7;a+=2)o.push(parseInt("0x"+t.slice(a,a+2)));return"rgb("+o.join(",")+")"}return t}function LightenDarkenColor(e,t){var n=!1;"#"==e[0]&&(e=e.slice(1),n=!0);var a=parseInt(e,16),o=(a>>16)+t;o>255?o=255:o<0&&(o=0);var E=(a>>8&255)+t;E>255?E=255:E<0&&(E=0);var i=(255&a)+t;return i>255?i=255:i<0&&(i=0),(n?"#":"")+String("000000"+(i|E<<8|o<<16).toString(16)).slice(-6)}function getContrastYIQ(e){var t,n=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t=299*n[1]+587*n[2]+114*n[3],(t/=255e3)>=.5?"light":"dark"}function todis(){function e(){let e="light"===document.documentElement.getAttribute("data-theme")?"#4C4948":"rgba(255,255,255,0.7)";if(document.getElementById("posts-chart")&&postsOption)try{let t=postsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,postsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("tags-chart")&&tagsOption)try{let t=tagsOption;t.title.textStyle.color=e,t.xAxis.nameTextStyle.color=e,t.yAxis.nameTextStyle.color=e,t.xAxis.axisLabel.color=e,t.yAxis.axisLabel.color=e,t.xAxis.axisLine.lineStyle.color=e,t.yAxis.axisLine.lineStyle.color=e,t.series[0].markLine.data[0].label.color=e,tagsChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("categories-chart")&&categoriesOption)try{let t=categoriesOption;t.title.textStyle.color=e,t.legend.textStyle.color=e,categoryParentFlag||(t.series[0].label.color=e),categoriesChart.setOption(t)}catch(e){console.log(e)}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"T3EBZ-TJ7LI-YRBG2-5ZLUR-KD3OS-U6BJO",output:"jsonp"},dataType:"jsonp",success:function(e){ipLoacation=e,function(){let e,t,n=function(e,t,n,a){const{sin:o,cos:E,asin:i,PI:B,hypot:r}=Math;let c=(e,t)=>(e*=B/180,{x:E(t*=B/180)*E(e),y:E(t)*o(e),z:o(t)}),l=c(e,t),s=c(n,a),A=2*i(r(l.x-s.x,l.y-s.y,l.z-s.z)/2)*6371;return Math.round(A)}(106.3612,29.5951,ipLoacation.result.location.lng,ipLoacation.result.location.lat),a=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":e="よろしく，一起去看樱花吗";break;case"美国":e="Make America Great Again!";break;case"英国":e="想同你一起夜乘伦敦眼";break;case"俄罗斯":e="干了这瓶伏特加！";break;case"法国":e="C'est La Vie";break;case"德国":e="Die Zeit verging im Fluge.";break;case"澳大利亚":e="一起去大堡礁吧！";break;case"加拿大":e="拾起一片枫叶赠予你";break;case"中国":switch(a=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city,ipLoacation.result.ad_info.province){case"北京市":e="北——京——欢迎你~~~";break;case"天津市":e="讲段相声吧。";break;case"重庆市":e="老乡, 过来吃火锅呀！！！";break;case"河北省":e="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"山西省":e="展开坐具长三尺，已占山河五百余。";break;case"内蒙古自治区":e="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":e="我想吃烤鸡架！";break;case"吉林省":e="状元阁就是东北烧烤之王。";break;case"黑龙江省":e="很喜欢哈尔滨大剧院。";break;case"上海市":e="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":e="欢迎来自安徽省南京市的小伙伴。";break;case"苏州市":e="上有天堂，下有苏杭。";break;default:e="散装是必须要散装的。"}break;case"浙江省":e="东风渐绿西湖柳，雁已还人未南归。";break;case"安徽省":e="蚌埠住了，芜湖起飞。";break;case"福建省":e="井邑白云间，岩城远带山。";break;case"江西省":e="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":e="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":e="来碗热干面！";break;case"湖南省":e="74751，长沙斯塔克。";break;case"广东省":e="老板来两斤福建人。";break;case"广西壮族自治区":e="桂林山水甲天下。";break;case"海南省":e="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":e="康康川妹子。";break;case"贵州省":e="茅台，学生，再塞200。";break;case"云南省":e="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":e="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":e="来份臊子面加馍。";break;case"甘肃省":e="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":e="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":e="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":e="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":e="我在这头，大陆在那头。";break;case"香港特别行政区":e="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":e="性感荷官，在线发牌。";break;default:e="社会主义大法好。"}break;default:e="带我去你的国家逛逛吧。"}let o=new Date;t=o.getHours()>=5&&o.getHours()<11?"<span>上午好</span>，一日之计在于晨":o.getHours()>=11&&o.getHours()<13?"<span>中午好</span>，该摸鱼吃午饭了":o.getHours()>=13&&o.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":o.getHours()>=15&&o.getHours()<16?"<span>三点几啦</span>，饮茶先啦！":o.getHours()>=16&&o.getHours()<19?"<span>夕阳无限好！</span>":o.getHours()>=19&&o.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜",document.getElementsByClassName("announcement_content")[0].innerHTML=`欢迎来自<span>${a}</span>的小伙伴，${t}<br>\n        你距离Ivany约有<span>${n}</span>公里，${e}\n        <br>\n        <br>\n        本网站的Twikoo评论系统使用<a href="https://cravatar.cn">Cravatar</a>头像系统，请自行绑定邮箱配置\n        `}()}}),document.querySelector(".rightMenu-item:has(.fa-moon)").addEventListener("click",(function(){setTimeout(e,100)})),document.getElementById("con-mode").addEventListener("click",(function(){setTimeout(e,100)}))}$percent&&window.addEventListener("scroll",(function(){let e=document.body.scrollHeight||document.documentElement.scrollHeight,t=window.innerHeight||document.documentElement.clientHeight;$percent.dataset.percent=((document.body.scrollTop||document.documentElement.scrollTop)/(e-t)*100).toFixed(0)})),document.addEventListener("pjax:complete",todis),document.addEventListener("DOMContentLoaded",todis);