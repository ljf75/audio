let{init,initKeys,Sprite,GameLoop,load,imageAssets,keyPressed}=kontra;let{canvas}=init();initKeys();const tileSize=30;const scene={sprites:[]};let mapa;let nivel=0;let enemies=0;let playerTurn=true;let actualEnTurn=0;let player;const loop=GameLoop({update(){scene.sprites.forEach(s=>s.update(actualEnTurn,playerTurn,player));player.update()},render(){mapa.renderMap();scene.sprites.forEach(s=>s.render());player.render()}});load('assets/predio.png','assets/cat.png','assets/enemy.png','assets/montanha.png').then(()=>genLvl()).then(()=>loop.start());function genLvl(){nivel+=1;scene.sprites=[];scene.sprites.push(criaEstrutura(10,10,tileSize,tileSize,0));let n=rnd(1,3);enemies=0;for(i=0;i<n;i+=1){scene.sprites.push(criaInimigo(rnd(1,14),rnd(1,13),tileSize,tileSize,10,5,enemies++))}mapa=new Mapa(canvas,tileSize,15,15);player=Sprite({x:1*tileSize,y:1*tileSize,w:tileSize,h:tileSize,xp:1,yp:1,hp:10,maxHp:10,atk:2,def:3,moving:false,image:imageAssets['assets/cat'],getAtk(){return this.atk;},getDef(){return this.def;},update(){if(this.moving){this.smothMove();return}if(playerTurn){let bkpX=this.x;let bkpY=this.y;if(keyPressed('left')){this.x-=tileSize}else if(keyPressed('right')){this.x+=tileSize}else if(keyPressed('up')){this.y-=tileSize}else if(keyPressed('down')){this.y+=tileSize}if(this.x<0||this.x+this.w>canvas.width){this.x=bkpX}if(this.y<0||this.y+this.h>canvas.height-15){this.y=bkpY}if(bkpX!=this.x||bkpY!=this.y){if(!this.canMove(bkpX,bkpY)){return}this.fx=this.x;this.fy=this.y;if(this.fx-bkpX>0){this.dx=2}else if(this.fx-bkpX<0){this.dx=-2}if(this.fy-bkpY>0){this.dy=2}else if(this.fy-bkpY<0){this.dy=-2}this.x=bkpX;this.y=bkpY;this.moving=true}}},smothMove(){this.x+=this.dx;this.y+=this.dy;if(this.x==this.fx&&this.y==this.fy){this.moving=false;this.dx=this.dy=0;if(enemies>0){playerTurn=false}}},canMove(bkpX,bkpY){for(let i=0;i<scene.sprites.length;i+=1){let obj=scene.sprites;if(this.collidesWith(obj[i])&&!obj[i].dead){if(obj[i].tipo==1){alert('At home :)');genLvl();return false}this.x=bkpX;this.y=bkpY;obj[i].hp-=this.getAtk();if(obj[i].hp<=0){obj[i].dead=true;obj[i].render=function(){}}return false}}return true}});scene.sprites.push(desenhaHUD(player,canvas))}function rnd(a,b){return Math.round(Math.random()*b)+a}