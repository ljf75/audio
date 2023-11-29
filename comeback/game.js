!function(t,e){"use strict";function i(t){var e=Math.floor(t%60),i=Math.floor(t/60%60);return i=i<10?"0"+i:i,e=e<10?"0"+e:e,i+":"+e}function n(t,e,i,n){for(var l=e.split("\n"),o=0;o<l.length;++o)t.fillText(l[o],i,n),n+=16}function l(t,i,n,l,o,h){this.width=n===e?0:n,this.height=l===e?this.width:l,o?(this.left=t===e?0:t,this.top=i===e?0:i):(this.x=t===e?0:t,this.y=i===e?0:i),this.t=h===e?-1:h}function o(t){at=[],st=[],ut=null,ct=null,nt=!1,t.platforms.forEach(function(t){at.push(new l(t.x,t.y,W,W,!0))}),t.coins.forEach(function(t){st.push(new l(t.x,t.y,W,W,!0))}),ut=new l(t.key.x,t.key.y,W,W,!0),ct=new l(t.door.x,t.door.y,W,W,!0)}function h(){O.textAlign="left",O.font="10px Verdana",O.fillStyle="#FFF"}function f(t,e,i,n,l,o){t.beginPath(),t.moveTo(e,i+o),t.lineTo(e,i+l-o),t.arcTo(e,i+l,e+o,i+l,o),t.lineTo(e+n-o,i+l),t.arcTo(e+n,i+l,e+n,i+l-o,o),t.lineTo(e+n,i+o),t.arcTo(e+n,i,e+n-o,i,o),t.lineTo(e+o,i),t.arcTo(e,i,e,i+o,o),t.stroke()}function r(){O.fillStyle="#474747",O.fillRect(D.width/2-150,D.height/2-50,290,100),O.textAlign="center",O.fillStyle="#FFF",O.font="32px Impact",O.fillText("COMEBACK",D.width/2,D.height/2),~~(3*G)%2==1&&(O.font="12px Verdana",O.fillText("Press 'Enter' to start the game",D.width/2,D.height/2+20)),h()}function a(){O.fillStyle="#A22C29",O.fillRect(D.width/2-150,D.height/2-60,300,120),O.textAlign="center",O.fillStyle="#FFF",O.font="20px Impact",O.fillText("WIN",D.width/2,D.height/2-30),O.font="10px Verdana",O.fillText("Congratulations, you have come back to the Earth!",D.width/2,D.height/2-10),~~(3*G)%2==1&&(O.font="12px Verdana",O.fillText("Press 'ESC' to restart the game",D.width/2,D.height/2+20)),h()}function s(){O.fillStyle="#A22C29",O.fillRect(D.width/2-150,D.height/2-50,290,100),O.textAlign="center",O.fillStyle="#FFF",O.font="20px Impact",O.fillText("PAUSE",D.width/2,D.height/2),~~(3*G)%2==1&&(O.font="12px Verdana",O.fillText("Press 'P' to pause/resume the game",D.width/2,D.height/2+20)),h()}function c(){O.fillStyle="#A22C29",O.fillRect(D.width/2-150,D.height/2-60,300,120),O.textAlign="center",O.fillStyle="#FFF",O.font="20px Impact",O.fillText("GAME OVER",D.width/2,D.height/2-30),O.font="10px Verdana",O.fillText(C,D.width/2,D.height/2-10),~~(3*G)%2==1&&(O.font="12px Verdana",O.fillText("Press 'ESC' to restart the game",D.width/2,D.height/2+20))}function u(){O.fillStyle="#80A1C1",O.fillRect(D.width/2-145,75,290,45),O.textAlign="center",O.fillStyle="#FFF",O.font="16px Verdana",O.fillText(V,D.width/2,100),O.font="12px Verdana",n(O,R,D.width/2,130),h()}function d(){O.fillStyle="#80A1C1",O.fillRect(D.width/2-200,75,400,350),O.textAlign="center",O.fillStyle="#FFF",O.font="16px Verdana",O.fillText("Instrucctions",D.width/2,100),O.textAlign="left",O.font="12px Verdana",O.fillText("To become an astronaut you should return to Earth,",D.width/2-185,140),O.fillText("but before you should search some objects that will help",D.width/2-185,157),O.fillText("you to comeback from space.",D.width/2-185,174),O.fillText("Be careful! You are lost in a big space and have a limited",D.width/2-185,208),O.fillText("time to return.",D.width/2-185,225),O.fillText("Use arrow keys to move around, and press 'P' to pause.",D.width/2-185,260),O.textAlign="center",O.font="10px Verdana",O.strokeStyle="#FFF",O.fillText("Up",D.width/2,305),f(O,D.width/2-22.5,280,45,45,10),O.fillText("Left",D.width/2-50,356),f(O,D.width/2-72.5,330,45,45,10),O.fillText("Down",D.width/2,356),f(O,D.width/2-22.5,330,45,45,10),O.fillText("Right",D.width/2+50,356),f(O,D.width/2+27.5,330,45,45,10),h()}function g(){O.fillStyle="black",O.fillRect(D.width/2-37,5,74,42),O.fillStyle="white",O.fillRect(D.width/2-32,10,64,32),O.fillStyle="black",O.textAlign="center",O.font="20px arial",O.fillText(i(K),D.width/2,32),h()}function w(t){for(var e=0;e<D.width/W;e++)O.drawImage(wt,e*W,D.height-W);t.forEach(function(t){O.drawImage(xt,W*t.frame,0,W,W,t.x,t.y,W,W)})}function x(t){t.forEach(function(t){O.drawImage(mt,W*t.frame,0,W,W,t.x,t.y,W,W)})}function m(){st.forEach(function(t){O.drawImage(pt,~~(10*K)%4*W,0,W,W,t.left,t.top,W,W)})}function p(){O.fillStyle="#000",O.font="14px arial",O.fillText("LEVEL: "+(ht+1),10,20),O.fillText("FUEL: "+ft,10,40)}function y(){O.fillStyle="#000",O.fillRect(0,0,D.width,D.height),O.drawImage(Tt,0,0),it||(w(levels[ht].platforms),x(levels[ht].decoration),m(),nt||O.drawImage(yt,0,0,W,W,ut.left,ut.top,W,W),O.drawImage(vt,0,0,W,W,ct.left,ct.top,W+W/2,W+W/2),lt?O.drawImage(gt,~~(10*K)%4*W,W*dt,W,W,rt.left,rt.top,W,W):O.drawImage(gt,0,W*dt,W,W,rt.left,rt.top,W,W),At>K&&d(),Ft>K&&u(),p()),_&&(O.textAlign="center",et?r():it?a():tt?c():s(),O.textAlign="left"),g()}function v(t){At=K+t}function T(t,e,i){Ft=K+i,V=t,R=e}function F(){for(var t=st.length-1;t>=0;t--)rt.intersects(st[t])&&(st.splice(t,1),SoundFX.fuel(),ft++)}function A(){!nt&&rt.intersects(ut)&&(T("Well, you have get key!","",3),nt=!0)}function I(){nt&&rt.intersects(ct)&&S()}function S(){++ht<levels.length?(T(levels[ht].title,"",3),o(levels[ht])):(_=!0,it=!0)}function E(t){var e=0,i=0;if(G+=t,!_){for(K>60*N&&(tt=!0,C="You have run out of time!",_=!0),K+=t,$[M]?(dt=0,lt=!0,rt.vx<W&&(rt.vx+=H)):rt.vx>0&&(rt.vx-=H),$[L]?(dt=1,lt=!0,rt.vx>-W&&(rt.vx-=H)):rt.vx<0&&(rt.vx+=H),rt.vy+=Q*t,rt.vy>W&&(rt.vy=W),ot&&Z===q&&(rt.vy=-J,Z=null),rt.x+=rt.vx*t,e=0,i=at.length;e<i;e+=1)rt.intersects(at[e])&&(rt.vx>0?rt.right=at[e].left:rt.left=at[e].right,rt.vx=0);for(ot=!1,rt.y+=rt.vy,e=0,i=at.length;e<i;e+=1)rt.intersects(at[e])&&(rt.vy>0?(rt.bottom=at[e].top,ot=!0):rt.top=at[e].bottom,rt.vy=0);rt.right>D.width&&(rt.right=D.width),rt.left<0&&(rt.left=0),rt.bottom>D.height-W&&(rt.bottom=D.height-W,ot=!0),rt.top<0&&(rt.top=0),F(),A(),I()}et||Z!==U||(_=!_,Z=null),Z===P&&(_=!1,et=!1,v(1)),Z===B&&(it||tt)&&k()}function b(){t.requestAnimationFrame(b);var e=Date.now(),i=(e-X)/1e3;i>1&&(i=0),X=e,j+=1,(z+=i)>1&&(Y=j,j=0,z-=1),E(i),y(O)}function k(){X=0,Y=0,j=0,z=0,G=0,K=0,Z=null,$=[],_=!0,tt=!1,et=!0,it=!1,lt=!1,nt=!1,rt=null,dt=0,Ft=0,V="",R="",At=0,ht=0,ft=0,rt=new l(16,D.height-2*W,32,32,!0),o(levels[ht])}var V,R,C,P=13,L=37,q=38,M=39,U=80,B=27,D=null,O=null,W=32,X=0,Y=0,j=0,z=0,G=0,K=0,N=5,H=240,J=22,Q=120,Z=null,$=[],_=!0,tt=!1,et=!0,it=!1,nt=!1,lt=!1,ot=!1,ht=0,ft=0,rt=null,at=[],st=[],ct=null,ut=null,dt=0,gt=new Image,wt=new Image,xt=new Image,mt=new Image,pt=new Image,yt=new Image,vt=new Image,Tt=new Image,Ft=0,At=0;l.prototype={left:0,top:0,width:0,height:0,vx:0,vy:0,get x(){return this.left+this.width/2},set x(t){this.left=t-this.width/2},get y(){return this.top+this.height/2},set y(t){this.top=t-this.height/2},get right(){return this.left+this.width},set right(t){this.left=t-this.width},get bottom(){return this.top+this.height},set bottom(t){this.top=t-this.height},intersects:function(t){if(t!==e)return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},intersectsX:function(t){if(t!==e)return this.left<t.right&&this.right>t.left}},t.addEventListener("load",function(){D=document.getElementById("canvas"),O=D.getContext("2d"),rt=new l(16,D.height-2*W,32,32,!0),gt.src="assets/player.png",Tt.src="assets/background.png",wt.src="assets/terrain.png",xt.src="assets/grass.png",mt.src="assets/decor.png",pt.src="assets/coin.png",yt.src="assets/key.png",vt.src="assets/door.png",o(levels[ht]),b()},!1),t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,17)},document.addEventListener("keydown",function(t){$[t.which]||(Z=t.which),$[t.which]=!0},!1),document.addEventListener("keyup",function(t){$[t.which]=!1,lt=!1},!1)}(window);