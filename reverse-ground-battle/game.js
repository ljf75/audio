function removeFromArray(t){for(var e,s,i=arguments,a=i.length;a>1&&t.length;)for(e=i[--a];-1!==(s=t.indexOf(e));)t.splice(s,1);return t}function lineDistance(t,e){var s=0,i=0;return s=e.x-t.x,s*=s,i=e.y-t.y,i*=i,Math.sqrt(s+i)}function createEnemy1(t){for(var e=1;t>=e;e++){colorRan=rand()%2;var s=new enemy("enemy1",rand()%(SCREEN_W-100)+50,-20,colorRan,0);enemiesArray.push(s)}}function createEnemy2(t){for(var e=1;t>=e;e++){colorRan=rand()%2;var s=new enemy("enemy2",0,rand()%(SCREEN_H-200),colorRan,0);enemiesArray.push(s)}}function createEnemy3(){var t=setInterval(function(){colorRan=rand()%2;var t=new enemy("enemy3",0,SCREEN_H/2,colorRan,-90);enemiesArray.push(t)},200);setTimeout(function(){clearInterval(t)},1e3);var e=setInterval(function(){colorRan=rand()%2;var t=new enemy("enemy3",SCREEN_W,SCREEN_H/2,colorRan,90);enemiesArray.push(t)},200);setTimeout(function(){clearInterval(e)},1e3)}function createEnemy4(){colorRan=rand()%2;var t=new enemy("enemy4",-20,rand()%SCREEN_H,colorRan,0);enemiesArray.push(t),colorRan=rand()%2;var t=new enemy("enemy4",SCREEN_W+20,rand()%SCREEN_H,colorRan,0);enemiesArray.push(t)}function createWave(){"game"==gameStatus&&(num=rand()%6,0==num?createEnemy1(10):1==num?createEnemy2(8):2==num?(createEnemy3(),createEnemy1(2),createEnemy2(3)):3==num?(createEnemy4(),createEnemy1(3)):4==num?(createEnemy4(),createEnemy4(),createEnemy1(2),createEnemy2(2)):5==num&&(createEnemy3(),createEnemy1(2),createEnemy2(3)),play_sound("newWave"),waveTimeout=setTimeout(createWave,8e3))}function gameStart(){if(waveTimeout=setTimeout(createWave,1e3),score=0,charShotInterval=setInterval(createShot,200,"player"),char.x=SCREEN_W/2,char.y=SCREEN_H/2,0==ISMOBILE)for(var t=0;20>=t;t++)createParticle("ground");gameStatus="game"}function gameEnd(){for(var t=0;t<enemiesArray.length;t++)enemiesArray[t].stopShooting();enemiesArray=[],shotsArray=[],particlesArray=[],clearInterval(charShotInterval),clearTimeout(waveTimeout),gameStatus="end"}function gameRestart(){gameStatus="start"}function enemy(t,e,s,i,a){this.type=t,this.x=e,this.y=s,this.angle=a,this.colorType=i,1==this.colorType?(this.c1=color2,this.c2=color1):(this.c1=color1,this.c2=color2),this.color=makecol(this.c1,this.c2,0),"enemy1"==t?(ranV=rand()%2,this.stepWalk=0==ranV?1:-1,this.enterWalk=1,this.posY=rand()%(SCREEN_H-200),this.shotInterval=setInterval(createShot,1e3,"enemy1",this)):"enemy2"==t?(this.stepWalk=1,this.shotInterval=setInterval(createShot,1500,"enemy2",this),ranV=rand()%2,this.x=0==ranV?-20:SCREEN_W+20,this.posX=rand()%SCREEN_W):"enemy3"==t&&(this.centerx=this.x,this.centery=this.y),this.drawitself=function(){"enemy1"==t?(trianglefill(canvas,this.x+0,this.y+12,this.x+6,this.y-6,this.x-6,this.y-6,this.color),trianglefill(canvas,this.x+12,this.y+6,this.x+12,this.y-6,this.x+6,this.y-6,this.color),trianglefill(canvas,this.x-12,this.y+6,this.x-6,this.y-6,this.x-12,this.y-6,this.color),polygonfill(canvas,4,[this.x-12,this.y+0,this.x+12,this.y+0,this.x+12,this.y-6,this.x-12,this.y-6],this.color),circlefill(canvas,this.x-6,this.y-6,3,this.color),circlefill(canvas,this.x+6,this.y-6,3,this.color)):"enemy2"==t?(trianglefill(canvas,this.x+0,this.y-6,this.x+12,this.y-6,this.x+6,this.y+12,this.color),trianglefill(canvas,this.x+0,this.y-6,this.x-6,this.y+12,this.x-12,this.y-6,this.color),circlefill(canvas,this.x,this.y,6,this.color),circlefill(canvas,this.x-6,this.y-6,3,this.color),circlefill(canvas,this.x+6,this.y-6,3,this.color)):"enemy3"==t?(polygonfill(canvas,6,[this.x-12,this.y+6,this.x+12,this.y+6,this.x+6,this.y-6,this.x+6,this.y+0,this.x-6,this.y+0,this.x-6,this.y-6],this.color),circlefill(canvas,this.x,this.y+6,3,this.color)):"enemy4"==t&&(circle(canvas,this.x,this.y,10,this.color,5),trianglefill(canvas,this.x,this.y-20,this.x+5,this.y-10,this.x-5,this.y-10,this.color),trianglefill(canvas,this.x,this.y+20,this.x+5,this.y+10,this.x-5,this.y+10,this.color),trianglefill(canvas,this.x-20,this.y,this.x-10,this.y+5,this.x-10,this.y-5,this.color),trianglefill(canvas,this.x+20,this.y,this.x+10,this.y+5,this.x+10,this.y-5,this.color),circlefill(canvas,this.x-8,this.y-8,5,this.color),circlefill(canvas,this.x+8,this.y-8,5,this.color),circlefill(canvas,this.x-8,this.y+8,5,this.color),circlefill(canvas,this.x+8,this.y+8,5,this.color))},this.destroy=function(){removeFromArray(enemiesArray,this)},this.stopShooting=function(){clearInterval(this.shotInterval)},this.checkCollision=function(){for(var t=0;t<shotsArray.length;t++)"charShot"==shotsArray[t].name&&lineDistance(this,shotsArray[t])<20&&(this.destroy(),this.stopShooting(),shotsArray[t].destroy(),play_sound("hit"),createParticle("explosion",this.x,this.y,this.color),createParticle("score",this.x,this.y,this.color),score+=killingScore)},this.move=function(){"enemy1"==t?((this.x>SCREEN_W||this.x<0)&&(this.stepWalk=-this.stepWalk),this.x=this.x+this.stepWalk,this.y<this.posY&&(this.y=this.y+this.enterWalk)):"enemy2"==t?(this.x>this.posX?this.x=this.x-this.stepWalk:this.x<this.posX&&(this.x=this.x+this.stepWalk),radius=5,this.x=this.x+Math.sin(this.angle)*radius,this.y=this.y+Math.cos(this.angle)*radius,this.angle=this.angle+.1):"enemy3"==t?(radius=200,this.x=this.centerx+Math.sin(this.angle)*radius,this.y=this.centery+Math.cos(this.angle)*radius,this.angle=this.angle+.02):"enemy4"==t&&(this.angle=Math.atan2(char.y-this.y,char.x-this.x),this.x=this.x+1*Math.cos(this.angle),this.y=this.y+1*Math.sin(this.angle))}}function bullet(t,e,s,i,a,r,o){"player"==t?(this.x=e,this.y=s,this.name="charShot"):"enemy"==t&&(this.x=e,this.y=s,this.c1=i,this.c2=a,this.name="enemyShot",this.shape=r,this.xmove=o,this.color=makecol(this.c1,this.c2,0)),this.drawitself=function(){"player"==t?polygonfill(canvas,6,[this.x+0,this.y-3,this.x+3,this.y+0,this.x+3,this.y+3,this.x+0,this.y+9,this.x-3,this.y+3,this.x-3,this.y+0],colorBlue):"enemy"==t&&(0==this.shape?(polygonfill(canvas,4,[this.x+4,this.y-6,this.x+6,this.y-4,this.x-4,this.y+6,this.x-6,this.y+4],this.color),polygonfill(canvas,4,[this.x-4,this.y-6,this.x+6,this.y+4,this.x+4,this.y+6,this.x-6,this.y-4],this.color)):circle(canvas,this.x,this.y,3,this.color,2))},this.move=function(){"player"==t?this.y=this.y-10:"enemy"==t&&(this.y=this.y+4,this.x=this.x+this.xmove)},this.checkOutside=function(){(this.y>SCREEN_H||this.y<0)&&this.destroy()},this.destroy=function(){removeFromArray(shotsArray,this)}}function createShot(t,e){if("enemy1"==t){var s=new bullet("enemy",e.x,e.y,e.c1,e.c2,0,0);play_sound("enemyShot"),shotsArray.push(s)}else if("enemy2"==t){var i=new bullet("enemy",e.x-10,e.y,e.c1,e.c2,1,1),a=new bullet("enemy",e.x+10,e.y,e.c1,e.c2,1,-1),r=new bullet("enemy",e.x,e.y,e.c1,e.c2,1,0);play_sound("enemyShot"),shotsArray.push(i),shotsArray.push(a),shotsArray.push(r)}else if("player"==t){var s=new bullet("player",char.x,char.y);play_sound("shot"),shotsArray.push(s)}}function particle(t,e,s,i){"score"==t?(this.x=e,this.y=s,this.color=i,setTimeout(function(t){t.destroy()},500,this)):"explosion"==t?(this.x=e,this.y=s,this.color=i,this.size=1):"ground"==t&&(this.x=rand()%SCREEN_W,this.y=rand()%SCREEN_H,this.speed=rand()%3+1),this.drawitself=function(){"score"==t?textout_centre(canvas,font,killingScore,this.x,this.y,12,this.color):"explosion"==t?circle(canvas,this.x,this.y,this.size,this.color,2):"ground"==t&&circlefill(canvas,this.x,this.y,.8,colorBlue)},this.destroy=function(){removeFromArray(particlesArray,this)},this.checkOutside=function(){"score"==t||"explosion"==t||"ground"==t&&this.y>SCREEN_H&&(this.y=-20,this.x=rand()%SCREEN_W,this.speed=rand()%3+1)},this.move=function(){"score"==t||("explosion"==t?this.size<20?this.size=this.size+1:this.destroy():"ground"==t&&(this.y=this.y+this.speed))}}function createParticle(t,e,s,i){var a=new particle(t,e,s,i);particlesArray.push(a)}function reverseRectangle(){this.x=0,this.y=-SCREEN_H,this.size=rand()%SCREEN_H+SCREEN_H/2,this.move=function(){this.y=this.y+2},this.checkOutside=function(){this.y>SCREEN_H&&(this.size=rand()%SCREEN_H+SCREEN_H/2,this.y=-this.size)},this.drawItself=function(){rectfill(canvas,this.x,this.y,SCREEN_W,this.size,makecol(color2,color1,0))}}function reverse(){c1=color1,c2=color2,color1=c2,color2=c1,play_sound("reverse")}function playerDeath(){play_sound("death"),createParticle("explosion",char.x,char.y,colorBlue),char.x=99999,char.y=99999,setTimeout(gameEnd,300)}function checkCharCollision(){for(var t=0;t<shotsArray.length;t++)"enemyShot"==shotsArray[t].name&&lineDistance(char,shotsArray[t])<10&&playerDeath();for(var t=0;t<enemiesArray.length;t++)lineDistance(char,enemiesArray[t])<20&&playerDeath()}function movePlayer(t){"left"==t&&char.x>10?char.x-=4:"right"==t&&char.x<SCREEN_W-10?char.x+=4:"up"==t&&char.y>10?char.y-=4:"down"==t&&char.y<SCREEN_H-10&&(char.y+=4)}function draw(){if("start"==gameStatus)rectfill(canvas,0,0,SCREEN_W,SCREEN_H,colorBlack),textout(canvas,font,"a game by Mattia Fortunati",10,SCREEN_H-10,12,colorWhite),textout_right(canvas,font,"js13kGames competition 2015",SCREEN_W-10,SCREEN_H-10,12,colorWhite),textout_centre(canvas,font,"R",SCREEN_W/2-50,SCREEN_H/2-130,72,makecol(255,0,0)),textout_centre(canvas,font,"G",SCREEN_W/2,SCREEN_H/2-130,72,makecol(0,255,0)),textout_centre(canvas,font,"B",SCREEN_W/2+50,SCREEN_H/2-130,72,colorBlue),textout_centre(canvas,font,"Reverse Ground Battle",SCREEN_W/2,SCREEN_H/2-70,24,colorWhite),ISMOBILE?(textout_centre(canvas,font,"TILT the DEVICE to MOVE",SCREEN_W/2,SCREEN_H/2-30,15,colorWhite),textout_centre(canvas,font,"TAP to REVERSE GROUND COLOR",SCREEN_W/2,SCREEN_H/2-10,15,colorWhite),textout_centre(canvas,font,"TAP to START",SCREEN_W/2,SCREEN_H/2+160,18,colorWhite)):(textout_centre(canvas,font,"Use ARROW KEYS to MOVE",SCREEN_W/2,SCREEN_H/2-30,15,colorWhite),textout_centre(canvas,font,"SPACEBAR to REVERSE GROUND COLOR",SCREEN_W/2,SCREEN_H/2-10,15,colorWhite),textout_centre(canvas,font,"press M to mute/unmute sounds",SCREEN_W/2,SCREEN_H/2+10,15,colorWhite),textout_centre(canvas,font,"Press SPACEBAR to START",SCREEN_W/2,SCREEN_H/2+160,18,colorWhite)),textout_centre(canvas,font,"Have Fun!",SCREEN_W/2,SCREEN_H/2+30,15,colorWhite),rect(canvas,100,30,SCREEN_W-200,SCREEN_H-70,colorWhite);else if("end"==gameStatus)rectfill(canvas,0,0,SCREEN_W,SCREEN_H,colorBlack),textout_centre(canvas,font,"GAME OVER",SCREEN_W/2,SCREEN_H/2-140,48,colorWhite),textout_centre(canvas,font,"SCORE:",SCREEN_W/2,SCREEN_H/2-90,36,colorWhite),textout_centre(canvas,font,score,SCREEN_W/2,SCREEN_H/2-40,36,colorWhite),textout_centre(canvas,font,"TIPS:",SCREEN_W/2,SCREEN_H/2+20,15,colorWhite),textout_centre(canvas,font,"Don't die next time",SCREEN_W/2,SCREEN_H/2+40,15,colorWhite),textout_centre(canvas,font,"Destroy more enemy ships instead",SCREEN_W/2,SCREEN_H/2+60,15,colorWhite),textout_centre(canvas,font,"N00b",SCREEN_W/2,SCREEN_H/2+80,15,colorWhite),ISMOBILE?textout_centre(canvas,font,"TAP to TRY AGAIN",SCREEN_W/2,SCREEN_H/2+160,18,colorWhite):textout_centre(canvas,font,"Press SPACEBAR to TRY AGAIN",SCREEN_W/2,SCREEN_H/2+160,18,colorWhite),textout_centre(canvas,font,"if you DARE ...",SCREEN_W/2,SCREEN_H/2+180,12,colorWhite),rect(canvas,100,30,SCREEN_W-200,SCREEN_H-70,colorWhite);else if("loading"==gameStatus)rectfill(canvas,0,0,SCREEN_W,SCREEN_H,colorBlack),textout_centre(canvas,font,"Loading "+Math.floor(100*audioLoaded/audioToLoad)+"%",SCREEN_W/2,SCREEN_H/2,36,colorWhite),rect(canvas,100,30,SCREEN_W-200,SCREEN_H-70,colorWhite);else if("game"==gameStatus){rectfill(canvas,0,0,SCREEN_W,SCREEN_H,makecol(color1,color2,0)),groundRect.drawItself();for(var t=0;t<particlesArray.length;t++)try{particlesArray[t].drawitself()}catch(e){}for(var t=0;t<shotsArray.length;t++)try{shotsArray[t].drawitself()}catch(e){}for(var t=0;t<enemiesArray.length;t++)try{enemiesArray[t].drawitself()}catch(e){}polygonfill(canvas,5,[char.x+0,char.y-15,char.x+10,char.y+0,char.x+5,char.y+5,char.x-5,char.y+5,char.x-10,char.y+0],colorBlue),circlefill(canvas,char.x-4,char.y+5,2,colorBlue),circlefill(canvas,char.x+4,char.y+5,2,colorBlue),textout_centre(canvas,font,"SCORE: "+score,SCREEN_W/2,20,18,colorBlue)}}function update(){if("game"==gameStatus){key[KEY_UP]&&movePlayer("up"),key[KEY_DOWN]&&movePlayer("down"),key[KEY_LEFT]&&movePlayer("left"),key[KEY_RIGHT]&&movePlayer("right"),(released[KEY_SPACE]||ISMOBILE&&1&mouse_released)&&reverse();for(var t=0;t<shotsArray.length;t++)try{shotsArray[t].move(),shotsArray[t].checkOutside()}catch(e){}for(var t=0;t<enemiesArray.length;t++)try{enemiesArray[t].move(),enemiesArray[t].checkCollision()}catch(e){}for(var t=0;t<particlesArray.length;t++)try{particlesArray[t].move(),particlesArray[t].checkOutside()}catch(e){}groundRect.move(),groundRect.checkOutside(),checkCharCollision()}else"start"==gameStatus?(released[KEY_SPACE]||ISMOBILE&&1&mouse_released)&&(gameStart(),play_sound("click")):"end"==gameStatus?(released[KEY_SPACE]||ISMOBILE&&1&mouse_released)&&(gameRestart(),play_sound("click")):"loading"==gameStatus&&1==ISAUDIOLOADED&&gameRestart();"loading"!=gameStatus&&released[KEY_M]&&(mute=!mute)}function game(){var t=document.createElement("canvas");t.className="canvas",t.id="game_canvas",t.style.border="2px solid black",t.style.boxShadow="#888 4px 4px 16px",t.style.margin="10px auto",t.style.display="block",document.body.appendChild(t),allegro_init_all("game_canvas",s_width,s_height),setAudio(),groundRect=new reverseRectangle,ready(function(){loop(function(){update(),draw()},BPS_TO_TIMER(60))})}function main(){if(0==ISMOBILE)game();else{var t=document.createElement("input");t.type="button",t.value="CLICK HERE TO PLAY",t.name="button",t.id="button",t.style.fontSize="56px",t.style.margin="auto",t.style.display="block",t.onclick=function(){var t=document.getElementById("button");document.body.removeChild(t),game()},document.body.appendChild(t)}}function audioObject(){this.sounds=[],this.currentIndex=0,this.play=function(){this.sounds[this.currentIndex].play(),this.currentIndex<this.sounds.length-1?this.currentIndex++:this.currentIndex=0}}function addAudio(t,e,s){var i=new audioObject;audioArray[t]=i;for(var a=0;e>=a;a++){var r=new Audio,o=jsfxr(s);r.src=o,r.load(),audioToLoad+=1,i.sounds.push(r),r.addEventListener("canplaythrough",function(){audioLoaded+=1,audioLoaded==audioToLoad&&(ISAUDIOLOADED=!0)},!1)}}function setAudio(){addAudio("shot",3,[1,,.2167,,.2475,.5776,.2,-.2976,,,,,,.6403,-.6301,,,,1,,,.0549,,.2]),addAudio("hit",2,[2,,.2882,.2348,.0645,.5452,.2,-.3095,,,,,,.4631,-.4962,,,,1,,,,,.5]),addAudio("death",1,[3,,.3767,.2177,.1242,.3057,,-.3635,,,,,,,,,-.2619,-.1512,1,,,,,.5]),addAudio("click",1,[0,,.0978,.3777,.2033,.6275,,,,,,.3506,.6886,,,,,,1,,,,,.37]),addAudio("reverse",2,[1,,.1432,,.209,.4098,,.3977,,,,,,,,.6282,,,1,,,,,.5]),addAudio("enemyShot",2,[1,,.1936,.2596,.2503,.9172,.227,-.1971,,,,,,.6014,-.2525,,,,1,,,.0501,,.2]),addAudio("newWave",1,[1,,.2964,,.3585,.2542,,.1727,,.156,.4811,,,,,,,,1,,,,,.23])}function play_sound(t){0==mute&&audioArray[t].play()}function accelerometerUpdate(t){if("game"==gameStatus){var e=1*t.accelerationIncludingGravity.x,s=1*t.accelerationIncludingGravity.y;0>e&&movePlayer("right"),e>0&&movePlayer("left"),s>0&&movePlayer("down"),0>s&&movePlayer("up")}}var char={x:0,y:0},groundRect,enemiesArray=[],shotsArray=[],particlesArray=[],color1=255,color2=0,colorBlack=makecol(0,0,0),colorWhite=makecol(255,255,255),colorBlue=makecol(0,0,255),gameStatus="loading",score=0,killingScore=100,charShotInterval,waveTimeout;audioArray=[];var mute=!1;s_width=640,s_height=480;var ISMOBILE=!1,ISAUDIOLOADED=!1,audioToLoad=0,audioLoaded=0;END_OF_MAIN(),void 0==window.DeviceMotionEvent||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(ISMOBILE=!0,window.addEventListener("devicemotion",accelerometerUpdate,!0));