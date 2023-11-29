!function t(e,i,o){function a(s,c){if(!i[s]){if(!e[s]){var r="function"==typeof require&&require;if(!c&&r)return r(s,!0);if(n)return n(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=i[s]={exports:{}};e[s][0].call(l.exports,function(t){var i=e[s][1][t];return a(i?i:t)},l,l.exports,t,e,i,o)}return i[s].exports}for(var n="function"==typeof require&&require,s=0;s<o.length;s++)a(o[s]);return a}({1:[function(t){function e(t){h.placeBlock(p,t)}function i(t){h.pickupBlock(p,t)}function o(){p=u.getCurrentMap(),g.update((u.currentMapStack.length+u.data.daysPassed)/2)}function a(){h.startTeleport(p,o)}function n(){h.stopTeleport()}function s(){u.pause()}function c(){g.addNoise()}function r(){h.positionReset()}var h,l,d,p,u,g,f=t(8),k=t(6),m=t(4),B=t(2),b=t(5),v=t(3),y=document.querySelector("#game"),X=y.getContext("2d"),Y={width:y.width,height:y.height,gravity:.5,basicSpeed:5,accX:1},w={width:y.width,height:y.height,gravity:.1,basicSpeed:2};d=b(e,i,a,n,s),l=k(X,Y),u=v(l,d,c,o,r),h=m(X,Y,d,u,o),g=B(X,w,d,u),o(),u.startDayNightCycle(),c(),f.start(function(){u.data.paused||(X.clearRect(0,0,y.width,y.height),u.refresh(),h.move(p),g.moveAll(p),g.checkCollisionAll(h),l.draw(p),h.draw(),g.drawAll(),g.explosionsPropagateAll(),h.drawTeleport())})},{2:2,3:3,4:4,5:5,6:6,8:8}],2:[function(t,e){var i=t(7);e.exports=function(t,e,o,a){function n(t){p.forEach(function(e,i){e.move(t,i)})}function s(){p.forEach(function(t){t.draw()})}function c(t){p.forEach(function(e,i){e.checkCollision(t,i)})}function r(){u.forEach(function(t,e){t.propagate(e)})}function h(e){var i={posX:e.posX,posY:e.posY,state:12};i.draw=function(){var e=t.lineWidth;t.lineWidth=3,t.strokeStyle="#FF4C00",t.beginPath(),t.arc(i.posX,i.posY,12-i.state,0,2*Math.PI),t.stroke(),t.lineWidth=e},i.propagate=function(t){i.state-=1,i.state<0?u.splice(t,1):i.draw()},u.push(i)}function l(){var i={posX:Math.random()*(e.width-20)+10,posY:Math.random()*(e.height-20)+10,speedX:e.basicSpeed,speedY:0,accX:0,accY:e.gravity,isnoise:!0,draw:function(){t.fillStyle="#000",t.fillRect(i.posX-i.blockWidth/2,i.posY-i.blockHeight/2,i.blockWidth,i.blockHeight)},checkCollision:function(t,e){var o=i.getBorders(),a=t.getBorders();o.top<a.bottom&&o.bottom>a.top&&o.left<a.right&&o.right>a.left&&i.destroy(e)},destroy:function(t,e){e?"home"===e&&a.changeHealth(-10):a.changeStamina(-20),h(i),p.splice(t,1)}};i.move=g.move.bind(i),i.roundFloat=g.roundFloat.bind(i),i.getBlockBorders=g.getBlockBorders.bind(i),i.getBorders=g.getBorders.bind(i),i.handleRepBlock=g.handleRepBlock.bind(i),i.getBlockIndex=g.getBlockIndex.bind(i),p.push(i)}function d(t){p.splice(0,p.length);for(var e=0;t>e;e++)(Math.random()>.5||a.data.night)&&l()}var p=[],u=[],g=i(e,o,a);return{noises:p,moveAll:n,drawAll:s,addNoise:l,checkCollisionAll:c,explosionsPropagateAll:r,update:d}}},{7:7}],3:[function(t,e){e.exports=function(t,e,i,o,a){function n(){if(B.length<1)return y.home;for(var e=y,i=0;i<B.length;i++){var o=B[i];e.children||(e.children=[{map:t.generate(b,v,0===B[0],B.length)},{map:t.generate(b,v,0===B[0],B.length)}]),e=e.children[o]}return e.map}function s(){setInterval(function(){if(!X.paused){if(X.time+=.75,X.time>X.phoneCallTime&&X.time<X.phoneCallTime+5&&!X.phoneRinging&&(X.phoneRinging=!0,x.className+=" ringing",T.className+=" game-ringing"),X.time>X.phoneCallTime+5&&X.phoneRinging&&r(),X.time>=70){X.night=!0;var t=(80-X.daysPassed-B.length)/100;Math.random()>t&&i()}X.time>=100&&(c(),X.time=0),Y.setAttribute("value",X.time)}},1e3)}function c(){X.phoneCallTime=Math.floor(80*Math.random()),X.night=!1,X.daysPassed+=1,x.setAttribute("style","left: "+X.phoneCallTime+"%")}function r(){x.className=x.className.replace(" ringing",""),T.className=T.className.replace(" game-ringing",""),p(-30),X.phoneRinging=!1}function h(t){X.buildBlocks+=t,I.innerHTML=X.buildBlocks}function l(t){X.repairBlocks+=t,N.innerHTML=X.repairBlocks}function d(t){X.stamina+=t,w.setAttribute("value",X.stamina)}function p(t){X.health+=t,M.setAttribute("value",X.health),0>t&&(A.className=A.className.replace("injured",""),setTimeout(function(){A.className+=" injured"},1)),X.health<=0&&g()}function u(){X.stamina<100&&!e.up&&!e.left&&!e.right&&d(.2)}function g(){S.className="tutorial hidden",H.className="summary",E.innerHTML=X.daysPassed,f()}function f(){X.paused=!0,C.className=C.className.replace("hidden","")}function k(){X.health>0&&(X.paused=!1,C.className+=" hidden")}function m(){X.paused=!0,X.time=0,X.phoneCallTime=10,X.phoneRinging=!1,X.daysPassed=0,X.night=!1,X.repairBlocks=0,X.buildBlocks=20,X.stamina=100,X.health=100,B.splice(0,B.length),o(),a(),T.className=T.className.replace(" game-ringing",""),S.className="tutorial",H.className="summary hidden",k()}var B=[],b=128,v=96,y={home:t.homeMap,children:[{map:t.generate(b,v,!0,B.length)},{map:t.generate(b,v,!1,B.length)}]},X={paused:!0,time:0,phoneCallTime:10,phoneRinging:!1,daysPassed:0,night:!1,repairBlocks:0,buildBlocks:20,stamina:100,health:100},Y=document.getElementById("day-night"),w=document.getElementById("stamina"),M=document.getElementById("health"),I=document.getElementById("build-blocks"),N=document.getElementById("rep-blocks"),x=document.getElementById("call"),C=document.getElementById("overlay"),S=document.getElementById("tutorial"),H=document.getElementById("summary"),R=document.getElementById("resume"),W=document.getElementById("reset"),E=document.getElementById("days-state"),A=document.getElementById("game"),T=document.getElementById("day-night-container");return R.onclick=k,W.onclick=m,{data:X,getCurrentMap:n,currentMapStack:B,startDayNightCycle:s,changeBuildBlock:h,changeRepairBlock:l,changeStamina:d,changeHealth:p,refresh:u,callIndicator:x,dayNightContainer:T,pause:f,resume:k}}},{}],4:[function(t,e){var i=t(7);e.exports=function(t,e,o,a,n){var s,c={posX:500,posY:200},r=i(e,o,a,n),h=0,l={posX:0,posY:0,speedX:0,speedY:0,accX:0,accY:e.gravity,isHero:!0,positionReset:function(){l.posX=c.posX,l.posY=c.posY,l.accY=e.gravity},draw:function(){t.fillStyle="#fff",t.fillRect(l.posX-l.blockWidth/2,l.posY-l.blockHeight/2,l.blockWidth,l.blockHeight)},placeBlock:function(t,i){var o=t[0].length,n=t.length,s=[l.getBlockIndex(l.posX,e.width,o),l.getBlockIndex(l.posY,e.height,n)];if(a.data.buildBlocks>0)switch(i){case"left":0===t[s[1]][s[0]-1]&&(t[s[1]][s[0]-1]=2);break;case"right":0===t[s[1]][s[0]+1]&&(t[s[1]][s[0]+1]=2,a.changeBuildBlock(-1));break;case"up":0===t[s[1]-1][s[0]]&&(t[s[1]-1][s[0]]=2,a.changeBuildBlock(-1));break;case"down":0!==l.speedY?0===t[s[1]+1][s[0]]&&(t[s[1]+1][s[0]]=2,a.changeBuildBlock(-1)):t[s[1]-1][s[0]]<1&&(l.posY-=l.blockHeight,t[s[1]][s[0]]=2,a.changeBuildBlock(-1))}},pickupBlock:function(t,i){var o=t[0].length,n=t.length,s=[l.getBlockIndex(l.posX,e.width,o),l.getBlockIndex(l.posY,e.height,n)];switch(i){case"left":2===t[s[1]][s[0]-1]&&(t[s[1]][s[0]-1]=0,a.changeBuildBlock(1));break;case"right":2===t[s[1]][s[0]+1]&&(t[s[1]][s[0]+1]=0,a.changeBuildBlock(1));break;case"up":2===t[s[1]-1][s[0]]&&(t[s[1]-1][s[0]]=0,a.changeBuildBlock(1));break;case"down":2===t[s[1]+1][s[0]]&&(t[s[1]+1][s[0]]=0,l.accY=e.gravity,a.changeBuildBlock(1))}},drawTeleport:function(){var e=t.lineWidth;t.lineWidth=3,t.strokeStyle="#03A3B9",t.beginPath(),t.arc(l.posX,l.posY,h,0,2*Math.PI),t.stroke(),t.lineWidth=e},startTeleport:function(t,i){h+=.15,s||(s=setTimeout(function(){if(a.data.buildBlocks>0||a.data.repairBlocks>0)for(var o=t[0].length,n=t.length,r=[l.getBlockIndex(l.posX,e.width,o),l.getBlockIndex(l.posY,e.height,n)],d=a.data.buildBlocks+a.data.repairBlocks,p=Math.sqrt(d),u=-1*Math.min(Math.floor(p/2),r[0]);(a.data.buildBlocks>0||a.data.repairBlocks>0)&&r[1]>0;){for(var g=0;p>g;g++){var f=r[0]+u+g;0===t[r[1]][f]&&(a.data.repairBlocks>0?(t[r[1]][f]=3,a.changeRepairBlock(-1)):a.data.buildBlocks>0&&(t[r[1]][f]=2,a.changeBuildBlock(-1)))}r[1]-=1}a.changeBuildBlock(-1*a.data.buildBlocks),a.changeRepairBlock(-1*a.data.repairBlocks),l.posX=c.posX,l.posY=c.posY,l.accY=e.gravity,a.currentMapStack.splice(0,a.currentMapStack.length),i(),s=null,h=0},2e3))},stopTeleport:function(){s&&(clearTimeout(s),s=null,h=0)}};return l.posX=c.posX,l.posY=c.posY,l.move=r.move.bind(l),l.roundFloat=r.roundFloat.bind(l),l.getBlockBorders=r.getBlockBorders.bind(l),l.getBorders=r.getBorders.bind(l),l.handleRepBlock=r.handleRepBlock.bind(l),l.getBlockIndex=r.getBlockIndex.bind(l),l}},{7:7}],5:[function(t,e){e.exports=function(t,e,i,o,a){var n={up:!1,down:!1,left:!1,right:!1};return onkeydown=function(t){switch(t.keyCode){case 37:n.left=!0;break;case 38:n.up=!0;break;case 39:n.right=!0;break;case 40:n.down=!0;break;case 116:case 84:i()}},onkeyup=function(t){switch(t.keyCode){case 37:n.left=!1;break;case 38:n.up=!1;break;case 39:n.right=!1;break;case 40:n.down=!1;break;case 116:case 84:o()}},onkeypress=function(i){if(i.shiftKey)switch(i.keyCode){case 65:case 97:e("left");break;case 87:case 119:e("up");break;case 68:case 100:e("right");break;case 83:case 115:e("down")}else switch(i.keyCode){case 65:case 97:t("left");break;case 87:case 119:t("up");break;case 68:case 100:t("right");break;case 83:case 115:t("down");break;case 80:case 112:a()}},n}},{}],6:[function(t,e){e.exports=function(t,e){function i(t,e,i,o){for(var a=Math.floor(e/5),n=[],s=0;e>s;s++){for(var c=[],r=0;t>r;r++)c.push(0===r||r===t-1||0===s||s===e-1?1:Math.random()>i?0:1);n.push(c)}for(var h=a;4*a>=h;h++)h>2*a&&3*a>=h?n[h][o?t-1:0]=0:n[h][o?0:t-1]=0;for(var l=o?0:Math.floor(t/2);l<(o?Math.floor(t/2):t);l++)for(var d=Math.floor(e/2),p=-1;1>=p;p++)n[d+p][l]=1;return n}function o(t,e,i){for(var o=0,a=-1;1>=a;a++)for(var n=-1;1>=n;n++)(0!==a||0!==n)&&(o+=t[i+a][e+n]);return o}function a(t,e,i){for(var a=[],n=0;n<t.length;n++){for(var s=[],c=0;c<t[n].length;c++)if(0===c||c===t[n].length-1||0===n||n===t.length-1)s.push(t[n][c]);else{var r=o(t,c,n);1===t[n][c]?s.push(e>r?0:1):s.push(r>i?1:0)}a.push(s)}return a}function n(t,e,i){for(var o,a,n=0;e>n;n++){do o=Math.floor(Math.random()*t.length),a=Math.floor(Math.random()*t[0].length);while(0!==t[o][a]);t[o][a]=i}}for(var s={1:{color:"#5A5A5A"},0:{color:"#898989"},2:{color:"#FBDF5B"},3:{color:"#d30000"},10:{color:"#CACACA"},11:{color:"#007100"}},c=[],r=0;96>r;r++){for(var h=[],l=0;128>l;l++)h.push(80>r?0:1);c.push(h)}var d=[[10,10,10,10,10,10,10,10,10,10],[10,10,10,10,11,11,11,11,11,10],[10,10,10,11,11,11,11,11,10,10],[10,10,11,11,10,10,11,10,10,10],[10,11,11,10,10,10,10,10,10,10],[10,11,11,10,10,10,10,10,10,10],[10,11,11,11,10,10,10,10,10,10],[10,11,11,10,10,10,10,10,10,10],[10,11,10,10,10,10,10,10,10,10],[10,10,10,10,10,10,10,10,10,10]];return d.forEach(function(t,e){t.forEach(function(t,i){c[70+e][57+i]=t})}),{homeMap:c,draw:function(i){var o=e.width/i[0].length,a=e.height/i.length;i.forEach(function(e,i){e.forEach(function(e,n){t.fillStyle=s[e].color;var c=0;t.fillRect(c+n*o,c+i*a,o-2*c,a-2*c)})})},generate:function(t,e,o,s){for(var c=.43+s/100>.49?.49:.43+s/100,r=i(t,e,c,o),h=0;10>h;h++)r=a(r,4,4);return n(r,1+s,3),n(r,1.5*s+3,2),r}}}},{}],7:[function(t,e){e.exports=function(t,e,i,o){return{roundFloat:function(t){return Math.round(1e4*t)/1e4},getBlockBorders:function(t,e,i){return{top:this.roundFloat(t[1]*i),bottom:this.roundFloat((t[1]+1)*i),left:this.roundFloat(t[0]*e),right:this.roundFloat((t[0]+1)*e)}},getBorders:function(){return{top:this.roundFloat(this.posY-.5*this.blockHeight),bottom:this.roundFloat(this.posY+.5*this.blockHeight),left:this.roundFloat(this.posX-.5*this.blockWidth),right:this.roundFloat(this.posX+.5*this.blockWidth)}},handleRepBlock:function(t,e,o){if(3===t[o][e])i.changeRepairBlock(1),t[o][e]=0;else if(10===t[o][e]){var a=(100-i.data.health)/5,n=Math.min(a,i.data.repairBlocks);i.changeHealth(5*n),i.changeRepairBlock(-1*n),i.data.phoneRinging&&(i.data.phoneRinging=!1,i.data.phoneCallTime=-10,i.callIndicator.className=i.callIndicator.className.replace(" ringing",""),i.dayNightContainer.className=i.dayNightContainer.className.replace(" game-ringing",""))}},getBlockIndex:function(t,e,i){var o=Math.floor(t/e*i);return o>i-1?i-1:o},move:function(a,n){var s=a[0].length,c=a.length;this.blockWidth=t.width/s,this.blockHeight=t.height/c,this.isHero?i.data.stamina<=0?this.speedX=0:((!e.left&&!e.right||e.left&&e.right)&&(this.speedX=0),e.left&&!e.right&&(this.accX=this.speedX>-1*t.basicSpeed?-1*t.accX:0,i.changeStamina(-.1)),e.right&&!e.left&&(this.accX=this.speedX<t.basicSpeed?t.accX:0,i.changeStamina(-.1)),e.up&&0===this.accY&&(this.speedY=-8,this.accY=t.gravity,i.changeStamina(-.1))):0===this.accY&&(this.speedY=-8,this.accY=t.gravity);for(var r=this.speedX,h=this.speedY;0!==r;){var l=r>this.blockWidth?this.blockWidth:r;this.posX+=l;for(var d=[this.getBlockIndex(this.posX,t.width,s),this.getBlockIndex(this.posY,t.height,c)],p=!1,u=-1;1>=u;u++)for(var g=-2;1>=g;g++){var f=this.getBlockBorders([d[0]+u,d[1]+g],this.blockWidth,this.blockHeight),k=this.getBorders();a[d[1]+g]&&a[d[1]+g][d[0]+u]&&a[d[1]+g][d[0]+u]>0&&f.top<k.bottom&&f.bottom>k.top&&f.left<k.right&&f.right>k.left?(this.isHero?this.handleRepBlock(a,d[0]+u,d[1]+g):2===a[d[1]+g][d[0]+u]?(this.destroy(n,"build"),a[d[1]+g][d[0]+u]=0):10===a[d[1]+g][d[0]+u]&&this.destroy(n,"home"),this.speedX>0?(this.posX=f.left-.5*this.blockWidth,r=l,this.isHero?(this.speedX=0,this.accX=0):this.speedX*=-1):this.speedX<0&&(this.posX=f.right+.5*this.blockWidth,r=l,this.isHero?(this.speedX=0,this.accX=0):this.speedX*=-1)):1===g&&f.left<k.right&&f.right>k.left&&(p=p||a[d[1]+g]&&a[d[1]+g][d[0]+u]>0)}p||(this.accY=t.gravity),r-=l}for(;0!==h;){for(l=h>this.blockHeight?this.blockHeight:h,this.posY+=l,d=[this.getBlockIndex(this.posX,t.width,s),this.getBlockIndex(this.posY,t.height,c)],u=-1;1>=u;u++)for(g=-1;1>=g;g++)f=this.getBlockBorders([d[0]+u,d[1]+g],this.blockWidth,this.blockHeight),k=this.getBorders(),a[d[1]+g]&&a[d[1]+g][d[0]+u]&&a[d[1]+g][d[0]+u]>0&&f.top<k.bottom&&f.bottom>k.top&&f.left<k.right&&f.right>k.left&&(this.isHero?this.handleRepBlock(a,d[0]+u,d[1]+g):2===a[d[1]+g][d[0]+u]?(this.destroy(n,"build"),a[d[1]+g][d[0]+u]=0):10===a[d[1]+g][d[0]+u]&&this.destroy(n,"home"),this.speedY>0&&(this.posY=f.top-.5*this.blockHeight,h=l,this.speedY=0,this.accY=0),this.speedY<0&&(this.posY=f.bottom+.5*this.blockHeight,h=l,this.speedY=0));h-=l}if(this.isHero)if(0===i.currentMapStack.length)this.posX<0?(i.currentMapStack.push(0),this.posX=t.width-this.blockWidth,this.posY=t.height/2,o()):this.posX>t.width&&(i.currentMapStack.push(1),this.posX=this.blockWidth,this.posY=t.height/2,o());else if(0===i.currentMapStack[0]){if(this.posX<0)i.currentMapStack.push(this.posY<t.height/2?0:1),this.posX=t.width-this.blockWidth,this.posY=t.height/2,o();else if(this.posX>t.width){var m=i.currentMapStack.pop();this.posX=this.blockWidth,this.posY=(.5*m+.25)*t.height,o()}}else this.posX<0?(m=i.currentMapStack.pop(),this.posX=t.width-this.blockWidth,this.posY=(.5*m+.25)*t.height,o()):this.posX>t.width&&(i.currentMapStack.push(this.posY<t.height/2?0:1),this.posX=this.blockWidth,this.posY=t.height/2,o());else(this.posX>=t.width||this.posX<=0)&&(this.speedX*=-1);this.speedX+=this.accX,this.speedY+=this.accY}}}},{}],8:[function(t,e){function i(t){return window.requestAnimationFrame(function(){var e=Date.now(),i=e-o;i>999?i=1/60:i/=1e3,o=e,t(i)})}var o=0;e.exports={start:function(t){return i(function e(o){t(o),i(e)})},stop:function(t){window.cancelAnimationFrame(t)}}},{}]},{},[1]);