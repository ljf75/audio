function menu(){ctx.font="bold 18px Consolas",ctx.fillStyle="#000000",ctx.fillText("Select your lenguage",50,50),ctx.font="bold 14px Consolas",ctx.fillText("Spanish",50,80),ctx.fillText("English",200,80)}function start(){mainScreen.src="Assets/sprites/MAIN-SCREEN-BN-min-min.png",mainScreen.onload=function(){ctx.drawImage(mainScreen,0,-20)}}var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),mainScreen=new Image,mouseX,mouseY=0;window.addEventListener("load",menu),screen.width>=1024?document.addEventListener("click",function(e){mouseX=e.pageX-canvas.offsetLeft,mouseY=e.pageY-canvas.offsetTop,mouseX>=229&&mouseX<=463&&mouseY>322&&mouseY<360&&!isStart&&!isSelected&&(english=!1,start()),mouseX>=894&&mouseX<=1129&&mouseY>322&&mouseY<360&&!isStart&&!isSelected&&(english=!0,start()),mouseX>=627&&mouseX<=792&&mouseY>608&&mouseY<645&&!isStart&&(isStart=!0,init())},!1):screen.width>=768?document.addEventListener("click",function(e){mouseX=e.pageX-canvas.offsetLeft,mouseY=e.pageY-canvas.offsetTop,mouseX>=117&&mouseX<=271&&mouseY>173&&mouseY<215&&!isStart&&!isSelected&&(english=!1,start()),mouseX>=494&&mouseX<=625&&mouseY>173&&mouseY<215&&!isStart&&!isSelected&&(english=!0,start()),mouseX>=334&&mouseX<=445&&mouseY>307&&mouseY<367&&!isStart&&(isStart=!0,init())},!1):screen.width>=360?document.addEventListener("click",function(e){mouseX=e.pageX-canvas.offsetLeft,mouseY=e.pageY-canvas.offsetTop,mouseX>=54&&mouseX<=129&&mouseY>77&&mouseY<102&&!isStart&&!isSelected&&(english=!1,start()),mouseX>=226&&mouseX<=303&&mouseY>77&&mouseY<102&&!isStart&&!isSelected&&(english=!0,start()),mouseX>=150&&mouseX<=208&&mouseY>143&&mouseY<164&&!isStart&&(isStart=!0,init())},!1):screen.width>=320&&document.addEventListener("click",function(e){mouseX=e.pageX-canvas.offsetLeft,mouseY=e.pageY-canvas.offsetTop,mouseX>=46&&mouseX<=116&&mouseY>70&&mouseY<92&&!isStart&&!isSelected&&(english=!1,start()),mouseX>=199&&mouseX<=268&&mouseY>77&&mouseY<102&&!isStart&&!isSelected&&(english=!0,start()),mouseX>=150&&mouseX<=208&&mouseY>143&&mouseY<164&&!isStart&&(isStart=!0,init())},!1);