var ivany_musicPlaying=!1,ivany_musicStretch=!1,ivany_musicFirst=!1,ivany={musicToggle:function(e=!0){ivany_musicFirst||(musicBindEvent(),ivany_musicFirst=!0);ivany_musicPlaying?(document.querySelector("#nav-music").classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",ivany_musicPlaying=!1,document.querySelector("#nav-music").classList.remove("stretch"),ivany_musicStretch=!1):(document.querySelector("#nav-music").classList.add("playing"),ivany_musicPlaying=!0,document.querySelector("#nav-music").classList.add("stretch"),ivany_musicStretch=!0),e&&document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){ivany_musicStretch?(document.querySelector("#nav-music").classList.remove("stretch"),ivany_musicStretch=!1):(document.querySelector("#nav-music").classList.add("stretch"),ivany_musicStretch=!0)},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){for(var e=$(".aplayer-title"),i=[],c=e.length-1;c>=0;c--)i[c]=e[c].innerText;return i[0]}};