var G=window.G||{};G.ALL=[],G.PARTICLES=[],G["const"]={GRID:24,WIDTH:50,HEIGHT:40,VIEW_X:800,VIEW_Y:600,P_SIZE:16,P_SPEED:.03,P_SPACESPEED:.01,P_THRUST:.003,P_FRICTX:.9,P_FRICTY:.94,P_SPACEFRICT:1,P_GRAVITY:.02,P_JUMP:.5,E_SIZE:16,E_SPEED:.02,E_SPACESPEED:.007,E_THRUST:.003,E_FRICTX:1,E_FRICTY:1,E_SPACEFRICT:1,E_GRAVITY:0,E_JUMP:.5,E_HUNGER:800},function(){function a(a,b,c,d){this.left=a||0,this.top=b||0,this.width=c||0,this.height=d||0,this.right=this.left+this.width,this.bottom=this.top+this.height}a.prototype.set=function(a,b,c,d){this.left=a,this.top=b,this.width=c||this.width,this.height=d||this.height,this.right=this.left+this.width,this.bottom=this.top+this.height},a.prototype.within=function(a){return a.left<=this.left&&a.right>=this.right&&a.top<=this.top&&a.bottom>=this.bottom},a.prototype.overlaps=function(a){return this.left<a.right&&a.left<this.right&&this.top<a.bottom&&a.top<this.bottom},G.Rectangle=a}(),function(){function a(a,c,d,e,f,g){this.xView=a||0,this.yView=c||0,this.xDeadZone=0,this.yDeadZone=0,this.wView=d,this.hView=e,this.axis=b.BOTH,this.followed=null,this.viewportRect=new G.Rectangle(this.xView,this.yView,this.wView,this.hView),this.worldRect=new G.Rectangle(0,0,f,g)}var b={NONE:"none",HORIZONTAL:"horizontal",VERTICAL:"vertical",BOTH:"both"};a.prototype.follow=function(a,b,c){this.followed=a,this.xDeadZone=b,this.yDeadZone=c},a.prototype.update=function(){null!=this.followed&&((this.axis==b.HORIZONTAL||this.axis==b.BOTH)&&(this.followed.xx-this.xView+this.xDeadZone>this.wView?this.xView=this.followed.xx-(this.wView-this.xDeadZone):this.followed.xx-this.xDeadZone<this.xView&&(this.xView=this.followed.xx-this.xDeadZone)),(this.axis==b.VERTICAL||this.axis==b.BOTH)&&(this.followed.yy-this.yView+this.yDeadZone>this.hView?this.yView=this.followed.yy-(this.hView-this.yDeadZone):this.followed.yy-this.yDeadZone<this.yView&&(this.yView=this.followed.yy-this.yDeadZone))),this.viewportRect.set(this.xView,this.yView),this.viewportRect.within(this.worldRect)||(this.viewportRect.left<this.worldRect.left&&(this.xView=this.worldRect.left),this.viewportRect.top<this.worldRect.top&&(this.yView=this.worldRect.top),this.viewportRect.right>this.worldRect.right&&(this.xView=this.worldRect.right-this.wView),this.viewportRect.bottom>this.worldRect.bottom&&(this.yView=this.worldRect.bottom-this.hView))},G.Camera=a}(),navigator.sayswho=function(){var a,b=navigator.appName,c=navigator.userAgent,d=c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(a=c.match(/version\/([\.\d]+)/i))&&(d[2]=a[1]),d=d?[d[1],d[2]]:[b,navigator.appVersion,"-?"]}(),function(){var a;a="Firefox"==navigator.sayswho[0]?"f":"Chrome"==navigator.sayswho[0]?"c":"Safari"==navigator.sayswho[0]?"s":"Microsoft"==navigator.sayswho[0]?"m":"f",G.browser=a}();var Stats=function(){function a(a,b,c){return a=document.createElement(a),a.id=b,a.style.cssText=c,a}function b(b,c,d){var e=a("div",b,"padding:0 0 3px 3px;text-align:left;background:"+d),f=a("div",b+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+c);for(f.innerHTML=b.toUpperCase(),e.appendChild(f),b=a("div",b+"Graph","width:74px;height:30px;background:"+c),e.appendChild(b),c=0;74>c;c++)b.appendChild(a("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+d));return e}function c(a){for(var b=j.children,c=0;c<b.length;c++)b[c].style.display=c===a?"block":"none";i=a}function d(a,b){a.appendChild(a.firstChild).style.height=Math.min(30,30-30*b)+"px"}var e=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,f=e(),g=f,h=0,i=0,j=a("div","stats","width:80px;opacity:0.9;cursor:pointer");j.addEventListener("mousedown",function(a){a.preventDefault(),c(++i%j.children.length)},!1);var k=0,l=1/0,m=0,n=b("fps","#0ff","#002"),o=n.children[0],p=n.children[1];j.appendChild(n);var q=0,r=1/0,s=0,n=b("ms","#0f0","#020"),t=n.children[0],u=n.children[1];if(j.appendChild(n),self.performance&&self.performance.memory){var v=0,w=1/0,x=0,n=b("mb","#f08","#201"),y=n.children[0],z=n.children[1];j.appendChild(n)}return c(i),{REVISION:14,domElement:j,setMode:c,begin:function(){f=e()},end:function(){var a=e();if(q=a-f,r=Math.min(r,q),s=Math.max(s,q),t.textContent=(0|q)+" MS ("+(0|r)+"-"+(0|s)+")",d(u,q/200),h++,a>g+1e3&&(k=Math.round(1e3*h/(a-g)),l=Math.min(l,k),m=Math.max(m,k),o.textContent=k+" FPS ("+l+"-"+m+")",d(p,k/100),g=a,h=0,void 0!==v)){var b=performance.memory.usedJSHeapSize,c=performance.memory.jsHeapSizeLimit;v=Math.round(9.54e-7*b),w=Math.min(w,v),x=Math.max(x,v),y.textContent=v+" MB ("+w+"-"+x+")",d(z,b/c)}return a},update:function(){f=this.end()}}};"object"==typeof module&&(module.exports=Stats);var sonantx;!function(){"use strict";function a(a){return Math.sin(6.283184*a)}function b(b){return a(b)<0?-1:1}function c(a){return a%1-.5}function d(a){var b=a%1*4;return 2>b?b-1:3-b}function e(a){return.00390625*Math.pow(1.059463094,a-128)}function f(a,b){setTimeout(function(){var c=new Uint8Array(a*i*2),d=c.length-2,e=function(){for(var a=new Date,f=0;d>=0;)if(c[d]=0,c[d+1]=128,d-=2,f+=1,f%1e3===0&&new Date-a>j)return void setTimeout(e,0);setTimeout(function(){b(c)},0)};setTimeout(e,0)},0)}function g(a,b,c,d,e){var f=c.fx_delay_time*d>>1,g=c.fx_delay_amt/255,h=0,i=function(){for(var c=new Date,d=0;b-f>h;){var k=4*h,l=4*(h+f),m=a[l]+(a[l+1]<<8)+(a[k+2]+(a[k+3]<<8)-32768)*g;if(a[l]=255&m,a[l+1]=m>>8&255,m=a[l+2]+(a[l+3]<<8)+(a[k]+(a[k+1]<<8)-32768)*g,a[l+2]=255&m,a[l+3]=m>>8&255,++h,d+=1,d%1e3===0&&new Date-c>j)return void setTimeout(i,0)}setTimeout(e,0)};setTimeout(i,0)}sonantx={};var h=44100,i=2,j=33,k=null,l=[a,b,c,d];sonantx.AudioGenerator=function(a){this.mixBuf=a,this.waveSize=a.length/i/2},sonantx.AudioGenerator.prototype.getWave=function(){var a,b,c,d,e,f,g,h=this.mixBuf,j=this.waveSize,k=j*i*2;for(e=k-8,f=e-36,d=String.fromCharCode(82,73,70,70,255&e,e>>8&255,e>>16&255,e>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&f,f>>8&255,f>>16&255,f>>24&255),a=0;k>a;){for(c="",b=0;256>b&&k>a;++b,a+=2)g=4*(h[a]+(h[a+1]<<8)-32768),g=-32768>g?-32768:g>32767?32767:g,c+=String.fromCharCode(255&g,g>>8&255);d+=c}return d},sonantx.AudioGenerator.prototype.getAudio=function(){var a=this.getWave(),b=new Audio("data:audio/wav;base64,"+btoa(a));return b.preload="none",b.load(),b},sonantx.AudioGenerator.prototype.getAudioBuffer=function(a){null===k&&(k=new AudioContext);var b=this.mixBuf,c=this.waveSize,d=c*i*2,e=k.createBuffer(i,this.waveSize,h),f=e.getChannelData(0),g=e.getChannelData(1),l=0,m=function(){for(var c=new Date,h=0;d/2>l;){var i=4*(b[4*l]+(b[4*l+1]<<8)-32768);if(i=-32768>i?-32768:i>32767?32767:i,f[l]=i/32768,i=4*(b[4*l+2]+(b[4*l+3]<<8)-32768),i=-32768>i?-32768:i>32767?32767:i,g[l]=i/32768,l+=1,h+=1,h%1e3===0&&new Date-c>j)return void setTimeout(m,0)}setTimeout(function(){a(e)},0)};setTimeout(m,0)},sonantx.SoundGenerator=function(a,b){this.instr=a,this.rowLen=b||5605,this.osc_lfo=l[a.lfo_waveform],this.osc1=l[a.osc1_waveform],this.osc2=l[a.osc2_waveform],this.attack=a.env_attack,this.sustain=a.env_sustain,this.release=a.env_release,this.panFreq=Math.pow(2,a.fx_pan_freq-8)/this.rowLen,this.lfoFreq=Math.pow(2,a.lfo_freq-8)/this.rowLen},sonantx.SoundGenerator.prototype.genSound=function(b,c,d){for(var f=(new Date,0),g=0,i=e(b+12*(this.instr.osc1_oct-8)+this.instr.osc1_det)*(1+8e-4*this.instr.osc1_detune),j=e(b+12*(this.instr.osc2_oct-8)+this.instr.osc2_det)*(1+8e-4*this.instr.osc2_detune),k=this.instr.fx_resonance/255,l=0,m=0,n=this.attack+this.sustain+this.release-1;n>=0;--n){var o=n+d,p=this.osc_lfo(o*this.lfoFreq)*this.instr.lfo_amt/512+.5,q=1;n<this.attack?q=n/this.attack:n>=this.attack+this.sustain&&(q-=(n-this.attack-this.sustain)/this.release);var r=i;this.instr.lfo_osc1_freq&&(r+=p),this.instr.osc1_xenv&&(r*=q*q),f+=r;var s=this.osc1(f)*this.instr.osc1_vol;r=j,this.instr.osc2_xenv&&(r*=q*q),g+=r,s+=this.osc2(g)*this.instr.osc2_vol,this.instr.noise_fader&&(s+=(2*Math.random()-1)*this.instr.noise_fader*q),s*=q/255;var t=this.instr.fx_freq;this.instr.lfo_fx_freq&&(t*=p),t=1.5*Math.sin(3.141592*t/h),l+=t*m;var u=k*(s-m)-l;switch(m+=t*u,this.instr.fx_filter){case 1:s=u;break;case 2:s=l;break;case 3:s=m;break;case 4:s=l+u}if(r=a(o*this.panFreq)*this.instr.fx_pan_amt/512+.5,s*=39*this.instr.env_master,o=4*o,o+3<c.length){var v=c[o]+(c[o+1]<<8)+s*(1-r);c[o]=255&v,c[o+1]=v>>8&255,v=c[o+2]+(c[o+3]<<8)+s*r,c[o+2]=255&v,c[o+3]=v>>8&255}}},sonantx.SoundGenerator.prototype.getAudioGenerator=function(a,b){var c=this.attack+this.sustain+this.release-1+32*this.rowLen,d=this;f(c,function(e){d.genSound(a,e,0),g(e,c,d.instr,d.rowLen,function(){b(new sonantx.AudioGenerator(e))})})},sonantx.SoundGenerator.prototype.createAudio=function(a,b){this.getAudioGenerator(a,function(a){b(a.getAudio())})},sonantx.SoundGenerator.prototype.createAudioBuffer=function(a,b){this.getAudioGenerator(a,function(a){a.getAudioBuffer(b)})},sonantx.MusicGenerator=function(a){this.song=a,this.waveSize=h*a.songLen},sonantx.MusicGenerator.prototype.generateTrack=function(a,b,c){var d=this;f(this.waveSize,function(e){var f=d.waveSize,h=d.waveSize*i*2,k=d.song.rowLen,l=d.song.endPattern,m=new sonantx.SoundGenerator(a,k),n=0,o=0,p=0,q=function(){for(var b=new Date;;)if(32!==p){if(o===l-1)return void setTimeout(r,0);var c=a.p[o];if(c){var d=a.c[c-1].n[p];d&&m.genSound(d,e,n)}if(n+=k,p+=1,new Date-b>j)return void setTimeout(q,0)}else p=0,o+=1},r=function(){g(e,f,a,k,t)},s=0,t=function(){for(var a=new Date,d=0;h>s;){var f=b[s]+(b[s+1]<<8)+e[s]+(e[s+1]<<8)-32768;if(b[s]=255&f,b[s+1]=f>>8&255,s+=2,d+=1,d%1e3===0&&new Date-a>j)return void setTimeout(t,0)}setTimeout(c,0)};setTimeout(q,0)})},sonantx.MusicGenerator.prototype.getAudioGenerator=function(a){var b=this;f(this.waveSize,function(c){var d=0,e=function(){d<b.song.songData.length?(d+=1,b.generateTrack(b.song.songData[d-1],c,e)):a(new sonantx.AudioGenerator(c))};e()})},sonantx.MusicGenerator.prototype.createAudio=function(a){this.getAudioGenerator(function(b){a(b.getAudio())})},sonantx.MusicGenerator.prototype.createAudioBuffer=function(a){this.getAudioGenerator(function(b){b.getAudioBuffer(a)})}}(),G.sonantx=sonantx,G.Key={_pressed:{},_released:{},LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32,a:65,w:87,s:83,d:68,z:90,x:88,f:70,p:80,isDown:function(a){return this._pressed[a]},justReleased:function(a){return this._released[a]},onKeydown:function(a){this._pressed[a.keyCode]=!0},onKeyup:function(a){this._released[a.keyCode]=!0,delete this._pressed[a.keyCode]},update:function(){this._released={}}},G.seedMap=function(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<a[0].length;d++)Math.random()<b?a[c][d]=1:a[c][d]=0;return a},G.flipMap=function(a){for(var b=0;b<a.length;b++)for(var c=0;c<a[0].length;c++)0==a[b][c]?a[b][c]=1:a[b][c]=0;return a},G.initMap=function(a,b){for(var c=[],d=0;b>d;d++){c.push([]);for(var e=0;a>e;e++)c[d].push(0)}return c},G.initPlayerSpace=function(a,b,c){for(var d=-1;2>d;d++)for(var e=-1;2>e;e++)a[c+e][b+d]=0},G.cellFlip=function(a,b){0==G.Map[b][a+1]?G.Map[b][a+1]=1:G.Map[b][a+1]=0,0==G.player.map[b][a+1]?G.player.map[b][a+1]=1:G.player.map[b][a+1]=0},G.countAliveNeighbors=function(a,b,c){for(var d=0,e=-1;2>e;e++)for(var f=-1;2>f;f++){var g=b+f,h=c+e;0==e&&0==f||(0>g||0>h||g>=a[0].length||h>=a.length?d++:a[h][g]&&d++)}return d},G.iterateMap=function(a,b,c){for(var d=G.initMap(G["const"].WIDTH,G["const"].HEIGHT),e=0;e<a.length;e++)for(var f=0;f<a[0].length;f++){var g=G.countAliveNeighbors(a,f,e);a[e][f]?g>c?d[e][f]=0:d[e][f]=0:b>g?d[e][f]=1:d[e][f]=0}return d},G.drawMap=function(a,b,c){for(var d=0;d<G.Map.length;d++)for(var e=0;e<G.Map[d].length;e++)G.Map[d][e]&&(a.fillStyle="#202020",a.fillRect(e*G["const"].GRID-b,d*G["const"].GRID-c,G["const"].GRID,G["const"].GRID),d>0&&d<G.Map.length-1&&(0==G.Map[d-1][e]&&(a.beginPath(),a.strokeStyle=G.player.flipped?"red":"purple",a.moveTo(e*G["const"].GRID-b,d*G["const"].GRID-c),a.lineTo(e*G["const"].GRID-b+G["const"].GRID,d*G["const"].GRID-c),a.stroke()),0==G.Map[d+1][e]&&(a.beginPath(),a.strokeStyle=G.player.flipped?"red":"purple",a.moveTo(e*G["const"].GRID-b,d*G["const"].GRID-c+G["const"].GRID),a.lineTo(e*G["const"].GRID-b+G["const"].GRID,d*G["const"].GRID-c+G["const"].GRID),a.stroke())),e>0&&e<G.Map[d].length-1&&(0==G.Map[d][e-1]&&(a.beginPath(),a.strokeStyle=G.player.flipped?"red":"purple",a.moveTo(e*G["const"].GRID-b,d*G["const"].GRID-c),a.lineTo(e*G["const"].GRID-b,d*G["const"].GRID-c+G["const"].GRID),a.stroke()),0==G.Map[d][e+1]&&(a.beginPath(),a.strokeStyle=G.player.flipped?"red":"purple",a.moveTo(e*G["const"].GRID-b+G["const"].GRID,d*G["const"].GRID-c),a.lineTo(e*G["const"].GRID-b+G["const"].GRID,d*G["const"].GRID-c+G["const"].GRID),a.stroke())))},G.checkMap=function(a){var b=!0;return a.forEach(function(a){a.forEach(function(a){a>0&&(b=!1)})}),b},G.Entity=function(){this.cx=0,this.cy=0,this.xr=0,this.yr=0,this.xx=0,this.yy=0,this.dx=0,this.dy=0,this.ddx=0,this.ddy=0,this.ox=0,this.oy=0,this.radius=0,this.gravity=0,this.frictX=.92,this.frictY=.94,this.dead=!1,this.collides=1,this.isBullet=!1,this.id=Math.random()},G.Entity.prototype.die=function(a){a.dead=!0,G.drawAsplode(G.buffer,a.xx,a.yy,G.camera.xView,G.camera.yView),a.xx=-100,a.yy=-100,G.ALL.splice(G.ALL.indexOf(a),1)},G.Entity.prototype.setCoords=function(a,b){this.xx=a,this.yy=b,this.cx=Math.floor(this.xx/G["const"].GRID),this.cy=Math.floor(this.yy/G["const"].GRID),this.xr=(this.xx-this.cx*G["const"].GRID)/G["const"].GRID,this.xy=(this.yy-this.cy*G["const"].GRID)/G["const"].GRID},G.Entity.prototype.hasCollision=function(a,b){return this.dead?!1:this==G.player?this.cx<1&&this.xr<.5||this.cx>=G["const"].WIDTH?!0:this.cy<1&&this.yr<.5||this.cy>=G["const"].HEIGHT?!0:void 0==G.player.map[b]||void 0==G.player.map[b][a]?!0:G.player.map[b][a]:this.isBullet?this.cx<1&&this.xr<.5||this.cx>=G["const"].WIDTH?!0:this.cy<1&&this.yr<.5||this.cy>=G["const"].HEIGHT?!0:void 0==G.player.map[b]||void 0==G.player.map[b][a]?!0:G.player.flipped?G.player.map[b][a]:G.Map[b][a]:this.cx<1&&this.xr<.5||this.cx>=G["const"].WIDTH?!0:this.cy<1&&this.yr<.5||this.cy>=G["const"].HEIGHT?!0:void 0==G.Map[b]||void 0==G.Map[b][a]?!0:G.Map[b][a]},G.Entity.prototype.overlaps=function(a){var b=this.radius+a.radius,c=(a.xx-this.xx)*(a.xx-this.xx)+(a.yy-this.yy)*(a.yy-this.yy);return b*b>=c?!0:!1},G.Entity.prototype.onGround=function(){return this.hasCollision(this.cx,this.cy+1)&&this.yr>=.5},G.Entity.prototype.onCeiling=function(){return this.hasCollision(this.cx,this.cy-1)&&this.yr<=.5},G.Entity.prototype.onWallLeft=function(){return this.hasCollision(this.cx-1,this.cy)&&this.xr<=.5},G.Entity.prototype.onWallRight=function(){return this.hasCollision(this.cx+1,this.cy)&&this.xr>=.5},G.Entity.prototype.update=function(){if(!this.dead){var a=this.gravity;for(this.xr+=this.dx,this.dx*=this.frictX,this.hasCollision(this.cx-1,this.cy)&&this.xr<=.3&&(this.dx=0,this.xr=.3),this.hasCollision(this.cx+1,this.cy)&&this.xr>=.7&&(this.dx=0,this.xr=.7);this.xr<0;)this.cx--,this.xr++;for(;this.xr>1;)this.cx++,this.xr--;for(this.dy+=a,this.yr+=this.dy,this.dy*=this.frictY,this.hasCollision(this.cx,this.cy-1)&&this.yr<=.4&&(this.dy=0,this.yr=.4),this.hasCollision(this.cx,this.cy+1)&&this.yr>=.7&&(this.dy=0,this.yr=.7);this.yr<0;)this.cy--,this.yr++;for(;this.yr>1;)this.cy++,this.yr--;for(var b=0;b<G.ALL.length;b++){var c=G.ALL[b];if(!c.dead&&c.collides&&c!=this&&Math.abs(this.cx-c.cx)<=1&&Math.abs(this.cy-c.cy)<=1){var d=Math.sqrt((c.xx-this.xx)*(c.xx-this.xx)+(c.yy-this.yy)*(c.yy-this.yy));if(d<=this.radius+c.radius){this==G.player&&G.Entity.prototype.die(c);var e=Math.atan2(c.yy-this.yy,c.xx-this.xx),f=.03,g=(this.radius+c.radius-d)/(this.radius+c.radius);this.dx-=Math.cos(e)*g*f,this.dy-=Math.sin(e)*g*f,c.dx+=Math.cos(e)*g*f,c.dy+=Math.sin(e)*g*f}}}this.xx=Math.floor((this.cx+this.xr)*G["const"].GRID),this.yy=Math.floor((this.cy+this.yr)*G["const"].GRID),this.ddx=(this.cx+this.xr)*G["const"].GRID-this.ox,this.ddy=(this.cy+this.yr)*G["const"].GRID-this.oy,this.ox=(this.cx+this.xr)*G["const"].GRID,this.oy=(this.cy+this.yr)*G["const"].GRID}},G.particlesUpdate=function(){G.PARTICLES.forEach(function(a,b){this.dead||(a.update(),a.life--,a.life<0&&G.killParticle(a),G.bulletMakeMap(a))})},G.drawParticles=function(a,b,c){G.PARTICLES.forEach(function(d){a.fillStyle=d.color,a.fillRect(d.xx-b,d.yy-c,d.width,d.height)})},G.killParticle=function(a){a.dead=!0,a.xx=-100,a.yy=-100,G.Entity.prototype.die(a)},G.makeParticle=function(a){var b=new G.Entity;b.dead=!1,b.life=a.life||100,b.setCoords(a.x,a.y),b.dx=a.dx||0,b.dy=a.dy||0,b.color=a.color||"#FFF",b.width=a.height||3,b.height=a.height||3,b.collides=a.type||0,b.frictX=a.frictX||1,b.frictY=a.frictY||1,b.isBullet=a.isBullet||!1,G.PARTICLES.push(b)},G.bulletMakeMap=function(a){a.hasCollision(a.cx,a.cy-1)&&a.yr<=.4&&void 0!=G.Map[a.cy-1]&&void 0!=G.Map[a.cy-1][a.cx]&&(G.Map[a.cy-1][a.cx]=1,G.player.map[a.cy-1][a.cx]=G.player.flipped?0:1,a.life=0),a.hasCollision(a.cx,a.cy+1)&&a.yr>=.6&&void 0!=G.Map[a.cy+1]&&void 0!=G.Map[a.cy+1][a.cx]&&(G.Map[a.cy+1][a.cx]=1,G.player.map[a.cy+1][a.cx]=G.player.flipped?0:1,a.life=0),a.hasCollision(a.cx-1,a.cy)&&a.xr<=.4&&void 0!=G.Map[a.cy]&&void 0!=G.Map[a.cy][a.cx-1]&&(G.Map[a.cy][a.cx-1]=1,G.player.map[a.cy][a.cx-1]=G.player.flipped?0:1,a.life=0),a.hasCollision(a.cx+1,a.cy)&&a.xr>=.6&&void 0!=G.Map[a.cy]&&void 0!=G.Map[a.cy][a.cx+1]&&(G.Map[a.cy][a.cx+1]=1,G.player.map[a.cy][a.cx+1]=G.player.flipped?0:1,a.life=0)},G.player=new G.Entity,G.player.width=G["const"].P_SIZE,G.player.height=G["const"].P_SIZE,G.player.radius=8,G.player.gravity=G["const"].P_GRAVITY,G.player.setCoords(Math.floor(G["const"].WIDTH/2)*G["const"].GRID,Math.floor(G["const"].HEIGHT/2)*G["const"].GRID),G.player.flipped=!1,G.player.facingLeft=!1,G.player.map=[],G.player.coolDown=8,G.player.fireTimer=0,G.player.health=500,G.player.draw=function(a,b,c){a.beginPath(),a.fillStyle=this.flipped?"red":"purple",a.fillRect(this.xx-this.width/2-b,this.yy-this.height/2-c,this.width,this.height),a.fill()},G.player.moveLeft=function(){this.flipped?(this.dx-=G["const"].P_SPEED,this.facingLeft=!0):(this.dx-=G["const"].P_THRUST,G.jetloop.volume.gain.value=1)},G.player.moveRight=function(){this.flipped?(this.dx+=G["const"].P_SPEED,this.facingLeft=!1):(this.dx+=G["const"].P_THRUST,G.jetloop.volume.gain.value=1)},G.player.moveUp=function(){this.dy-=G["const"].P_THRUST,G.jetloop.volume.gain.value=1},G.player.jump=function(){G.playSound(G.sounds.jump),this.dy=-G["const"].P_JUMP},G.player.moveDown=function(){this.dy+=G["const"].P_THRUST,G.jetloop.volume.gain.value=1},G.player.flip=function(){G.player.onGround()&&void 0!=G.Map[this.cy+1]?(G.flipMap(G.player.map),this.flipped=!this.flipped,this.setCoords(this.xx,this.yy+G["const"].GRID),G.playSound(G.sounds.flip)):G.player.onCeiling()&&void 0!=G.Map[this.cy-1]?(G.flipMap(G.player.map),this.flipped=!this.flipped,this.setCoords(this.xx,this.yy-G["const"].GRID),G.playSound(G.sounds.flip)):G.player.onWallLeft()&&void 0!=G.Map[this.cy][this.cx-1]?(G.flipMap(G.player.map),this.flipped=!this.flipped,this.setCoords(this.xx-G["const"].GRID,this.yy),G.playSound(G.sounds.flip)):G.player.onWallRight()&&void 0!=G.Map[this.cy][this.cx+1]&&(G.flipMap(G.player.map),this.flipped=!this.flipped,this.setCoords(this.xx+G["const"].GRID,this.yy),G.playSound(G.sounds.flip))},G.player.inputUpdate=function(){if(this.gravity=this.flipped?G["const"].P_GRAVITY:0,this.frictY=this.flipped?G["const"].P_FRICTY:G["const"].P_SPACEFRICT,this.frictX=this.flipped?G["const"].P_FRICTX:G["const"].P_SPACEFRICT,(G.Key.isDown(G.Key.UP)||G.Key.isDown(G.Key.w))&&(this.flipped||this.moveUp()),this.flipped&&this.onGround()&&(G.Key.isDown(G.Key.SPACE)||G.Key.isDown(G.Key.w))&&this.jump(),(G.Key.isDown(G.Key.DOWN)||G.Key.isDown(G.Key.s)&&!this.flipped)&&this.moveDown(),(G.Key.isDown(G.Key.LEFT)||G.Key.isDown(G.Key.a))&&this.moveLeft(),(G.Key.isDown(G.Key.RIGHT)||G.Key.isDown(G.Key.d))&&this.moveRight(),G.Key.isDown(G.Key.x)&&this.flipped&&this.fireTimer<0){this.fireTimer=this.coolDown;var a={x:-100,y:-100,dx:0,dy:0,width:10,height:10,life:1e3,isBullet:!0};G.Key.isDown(G.Key.DOWN)||G.Key.isDown(G.Key.s)?(a.dy=.5,a.x=G.player.xx-4,a.y=G.player.yy+16):(G.Key.isDown(G.Key.UP)||G.Key.isDown(G.Key.w))&&(a.dy=-.5,a.dx=0,a.x=G.player.xx-4,a.y=G.player.yy-16),G.Key.isDown(G.Key.LEFT)||G.Key.isDown(G.Key.a)?(a.dx=-.5,a.x=G.player.xx-16,a.y=G.player.yy-4):G.Key.isDown(G.Key.RIGHT)||G.Key.isDown(G.Key.d)?(a.dx=.5,a.x=G.player.xx+16,a.y=G.player.yy-4):(a.dx=this.facingLeft?-.5:.5,a.x=this.facingLeft?G.player.xx-16:G.player.xx+16,a.y=G.player.yy-4),G.makeParticle(a)}this.fireTimer--,G.Key.justReleased(G.Key.z)&&this.flip(),!G.Map[this.cy][this.cx]&&G.player.flipped&&(G.flipMap(G.player.map),this.flipped=!this.flipped,G.playSound(G.sounds.flip)),(G.Key.justReleased(G.Key.a)||G.Key.justReleased(G.Key.LEFT)||G.Key.justReleased(G.Key.w)||G.Key.justReleased(G.Key.UP)||G.Key.justReleased(G.Key.d)||G.Key.justReleased(G.Key.RIGHT)||G.Key.justReleased(G.Key.s)||G.Key.justReleased(G.Key.DOWN))&&(G.jetloop.volume.gain.value=0)},G.mobs=[],G.mobMouth=!0,G.makeMobs=function(a){for(var b=0;a>=b;b++){var c=new G.Entity;for(c.radius=G["const"].E_SIZE/2,c.width=8,c.height=8,c.angle=0,c.eatCount=G["const"].E_HUNGER,c.frictY=G["const"].E_FRICTY,c.frictX=G["const"].E_FRICTX,c.gravity=G["const"].E_GRAVITY,c.setCoords(Math.random()*G["const"].GRID*(G["const"].WIDTH-1),Math.random()*G["const"].GRID*(G["const"].HEIGHT-1));G.Map[c.cy][c.cx];)c.setCoords(Math.random()*G["const"].GRID*(G["const"].WIDTH-1),Math.random()*G["const"].GRID*(G["const"].HEIGHT-1));G.mobs.push(c),G.ALL.push(c)}},G.drawMobs=function(a,b,c){G.mobs.forEach(function(d){if(!this.dead){d.angle=Math.atan2(d.ddy,d.ddx)+Math.PI,d.angle<0&&(d.angle+=2*Math.PI);var e=d.angle+(.2+Math.PI),f=e-(G.mobMouth?1.2:.1);a.beginPath(),a.moveTo(d.xx-b,d.yy-c),a.arc(d.xx-b,d.yy-c,d.radius,e,f,!1),a.closePath(),a.fillStyle="yellow",a.fill()}})},G.drawAsplode=function(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.arc(b-d,c-e,40,0,2*Math.PI,!1),a.closePath(),a.fillStyle="white",a.fill()},G.mobRandomMove=function(a){Math.random()<.1&&(a.dx+=.01*(2*Math.random()-1),a.dy+=.01*(2*Math.random()-1))},G.mobEatMap=function(a){a.hasCollision(a.cx,a.cy-1)&&a.yr<=.4&&void 0!=G.Map[a.cy-1]&&void 0!=G.Map[a.cy-1][a.cx]&&(a.eatCount-=1,a.eatCount<=0&&(G.Map[a.cy-1][a.cx]=0,G.player.map[a.cy-1][a.cx]=G.player.flipped?1:0,a.eatCount=G["const"].E_HUNGER)),a.hasCollision(a.cx,a.cy+1)&&a.yr>=.6&&void 0!=G.Map[a.cy+1]&&void 0!=G.Map[a.cy+1][a.cx]&&(a.eatCount-=1,a.eatCount<=0&&(G.Map[a.cy+1][a.cx]=0,G.player.map[a.cy+1][a.cx]=G.player.flipped?1:0,a.eatCount=G["const"].E_HUNGER)),a.hasCollision(a.cx-1,a.cy)&&a.xr<=.4&&void 0!=G.Map[a.cy]&&void 0!=G.Map[a.cy][a.cx-1]&&(a.eatCount-=1,a.eatCount<=0&&(G.Map[a.cy][a.cx-1]=0,G.player.map[a.cy][a.cx-1]=G.player.flipped?1:0,a.eatCount=G["const"].E_HUNGER)),a.hasCollision(a.cx+1,a.cy)&&a.xr>=.6&&void 0!=G.Map[a.cy]&&void 0!=G.Map[a.cy][a.cx+1]&&(a.eatCount-=1,a.eatCount<=0&&(G.Map[a.cy][a.cx+1]=0,G.player.map[a.cy][a.cx+1]=G.player.flipped?1:0,a.eatCount=G["const"].E_HUNGER))},G.mobMoveToPlayer=function(a){a.angle=Math.atan2(a.yy-G.player.yy,a.xx-G.player.xx)+Math.PI,a.angle<0&&(a.angle+=2*Math.PI),a.dx+=Math.cos(a.angle)/2e3,a.dy+=Math.sin(a.angle)/2e3},G.mobMoveAwayFromPlayer=function(a){a.angle=Math.atan2(a.yy-G.player.yy,a.xx-G.player.xx),a.angle<0&&(a.angle+=2*Math.PI),a.dx+=Math.cos(a.angle)/3e3,a.dy+=Math.sin(a.angle)/3e3},G.mobUpdate=function(){G.mobs.forEach(function(a,b,c){a.update(),G.player.flipped?(G.mobMoveToPlayer(a),G.mobRandomMove(a)):(G.mobMoveToPlayer(a),G.mobRandomMove(a)),G.mobEatMap(a),G.mobs.filter(function(a){return!a.dead}).length<5&&G.makeMobs(10),void 0!=G.Map[a.cy]&&G.Map[a.cy][a.cx]&&G.Entity.prototype.die(a)})},G.enemy=new G.Entity,G.enemy.setCoords(300,500),G.enemy.width=8,G.enemy.height=8,G.enemy.radius=4,G.enemy.draw=function(a){a.beginPath(),a.arc(this.xx,this.yy,this.radius,0,2*Math.PI,!1),a.fillStyle="white",a.fill()},G.enemy.eUpdate=function(){},G.audio={JUMP:{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:255,osc1_waveform:2,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:1,osc2_vol:255,osc2_waveform:2,noise_fader:0,env_attack:3706,env_sustain:0,env_release:0,env_master:191,fx_filter:3,fx_freq:4067,fx_resonance:176,fx_delay_time:4,fx_delay_amt:44,fx_pan_freq:2,fx_pan_amt:84,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:2,lfo_amt:96,lfo_waveform:0},FLIP:{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:255,osc1_waveform:3,osc2_oct:5,osc2_det:0,osc2_detune:0,osc2_xenv:1,osc2_vol:143,osc2_waveform:3,noise_fader:255,env_attack:0,env_sustain:2418,env_release:17193,env_master:57,fx_filter:1,fx_freq:4067,fx_resonance:176,fx_delay_time:4,fx_delay_amt:44,fx_pan_freq:12,fx_pan_amt:84,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:2,lfo_amt:160,lfo_waveform:2},JET:{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:82,osc1_waveform:2,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:255,env_attack:100,env_sustain:23881,env_release:0,env_master:232,fx_filter:3,fx_freq:392,fx_resonance:47,fx_delay_time:0,fx_delay_amt:0,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0},GAMESONG:{songLen:154,songData:[{osc1_oct:9,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:3,osc2_oct:9,osc2_det:0,osc2_detune:14,osc2_xenv:0,osc2_vol:255,osc2_waveform:3,noise_fader:0,env_attack:1e5,env_sustain:28181,env_release:1e5,env_master:106,fx_filter:3,fx_freq:3700,fx_resonance:88,fx_delay_time:8,fx_delay_amt:121,fx_pan_freq:1,fx_pan_amt:22,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:4,lfo_amt:228,lfo_waveform:0,p:[0,0,1,2,1,2,1,2,1,2,0,0,1,2,1,2],c:[{n:[123,138,135,150,0,0,0,0,0,0,0,0,0,0,0,0,119,138,131,150,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[119,140,143,152,0,0,0,0,0,0,0,0,0,0,0,0,116,138,140,150,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:7,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:2,osc2_oct:8,osc2_det:0,osc2_detune:18,osc2_xenv:0,osc2_vol:255,osc2_waveform:2,noise_fader:0,env_attack:1e5,env_sustain:56363,env_release:1e5,env_master:199,fx_filter:2,fx_freq:200,fx_resonance:254,fx_delay_time:8,fx_delay_amt:24,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[3,4,3,4,3,4,3,4,3,4,5,6,3,4,3,4,3,5],c:[{n:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[111,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,111,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[111,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:0,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:255,env_attack:1e5,env_sustain:1e5,env_release:1e5,env_master:192,fx_filter:2,fx_freq:2500,fx_resonance:16,fx_delay_time:3,fx_delay_amt:157,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:3,lfo_amt:51,lfo_waveform:0,p:[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1],c:[{n:[135,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,135,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:255,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:0,env_attack:0,env_sustain:0,env_release:6363,env_master:239,fx_filter:0,fx_freq:7400,fx_resonance:126,fx_delay_time:0,fx_delay_amt:0,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1],c:[{n:[135,135,0,0,0,0,135,0,135,0,0,0,0,0,0,0,135,135,0,0,0,0,135,0,135,0,0,135,0,0,135,0]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:255,osc1_waveform:0,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:112,env_attack:1818,env_sustain:0,env_release:18181,env_master:254,fx_filter:3,fx_freq:6600,fx_resonance:78,fx_delay_time:3,fx_delay_amt:73,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:4,lfo_amt:85,lfo_waveform:0,p:[0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1],c:[{n:[0,0,0,0,135,0,0,0,0,0,0,0,135,0,0,0,0,0,0,0,135,0,0,0,0,0,0,0,135,0,0,0]}]},{osc1_oct:9,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:0,osc2_oct:9,osc2_det:0,osc2_detune:12,osc2_xenv:0,osc2_vol:255,osc2_waveform:0,noise_fader:0,env_attack:100,env_sustain:0,env_release:14545,env_master:70,fx_filter:0,fx_freq:0,fx_resonance:240,fx_delay_time:2,fx_delay_amt:157,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[0,0,0,0,0,0,1,2,1,2,0,0,0,0,1,2],c:[{n:[135,147,135,147,0,0,0,0,0,0,0,0,0,0,145,0,147,0,0,0,0,0,0,0,138,150,138,0,137,149,137,0]},{n:[128,140,143,142,0,0,0,0,0,0,0,0,133,145,133,0,140,152,155,154,0,0,0,0,0,0,0,0,0,0,0,0]}]},{osc1_oct:9,osc1_det:0,osc1_detune:0,osc1_xenv:0,osc1_vol:255,osc1_waveform:2,osc2_oct:10,osc2_det:0,osc2_detune:28,osc2_xenv:0,osc2_vol:255,osc2_waveform:2,noise_fader:0,env_attack:100,env_sustain:0,env_release:5454,env_master:254,fx_filter:2,fx_freq:7800,fx_resonance:94,fx_delay_time:3,fx_delay_amt:103,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:1,lfo_freq:7,lfo_amt:128,lfo_waveform:0,p:[0,0,0,0,0,0,0,0,0,0,1,2,1,2,1,2,1,2],c:[{n:[0,135,137,0,137,138,0,138,140,0,140,142,0,142,143,145,0,135,137,0,137,138,0,138,140,0,140,142,0,142,143,145]},{n:[0,135,137,0,137,138,0,138,140,0,140,142,0,142,143,145,0,135,137,0,137,138,0,138,140,0,140,142,150,149,147,149]}]},{osc1_oct:8,osc1_det:0,osc1_detune:0,osc1_xenv:1,osc1_vol:82,osc1_waveform:2,osc2_oct:8,osc2_det:0,osc2_detune:0,osc2_xenv:0,osc2_vol:0,osc2_waveform:0,noise_fader:255,env_attack:100,env_sustain:0,env_release:9090,env_master:232,fx_filter:3,fx_freq:5200,fx_resonance:63,fx_delay_time:0,fx_delay_amt:0,fx_pan_freq:0,fx_pan_amt:0,lfo_osc1_freq:0,lfo_fx_freq:0,lfo_freq:0,lfo_amt:0,lfo_waveform:0,p:[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2],c:[{n:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{n:[0,0,135,0,0,0,135,0,0,0,135,0,0,135,135,0,0,0,135,0,0,0,135,0,0,0,135,135,0,0,135,0]}]}],rowLen:11025,endPattern:19}},G.stats=new Stats,G.stats.setMode(0),G.stats.domElement.style.position="absolute",G.stats.domElement.style.left="0px",G.stats.domElement.style.top="0px",document.body.appendChild(G.stats.domElement),G.canvas=document.querySelector("#game"),G.ctx=G.canvas.getContext("2d"),G.init=function(){G.ALL=[],G.mobs=[],G.camera={},G.Map=[],G.player.map=[],G.player.setCoords(Math.floor(G["const"].WIDTH/2)*G["const"].GRID,Math.floor(G["const"].HEIGHT/2)*G["const"].GRID),G.ALL.push(G.player),G.paused=!1,G.gameOver=!1,G.bufferCanvas=document.createElement("canvas"),G.bufferCanvas.width=G["const"].VIEW_X,G.bufferCanvas.height=G["const"].VIEW_Y,G.buffer=G.bufferCanvas.getContext("2d"),G.buffer.webkitImageSmoothingEnabled=!1,G.buffer.mozImageSmoothingEnabled=!1,G.buffer.imageSmoothingEnabled=!1,G.scrollFactor=.94,G.camera=new G.Camera(0,0,G.bufferCanvas.width,G.bufferCanvas.height,G["const"].WIDTH*G["const"].GRID,G["const"].HEIGHT*G["const"].GRID),G.camera.follow(G.player,300,300),G.Map=G.initMap(G["const"].WIDTH,G["const"].HEIGHT),G.seedMap(G.Map,.4),G.Map=G.iterateMap(G.Map,4,3),G.Map=G.iterateMap(G.Map,4,3),G.Map=G.iterateMap(G.Map,4,3),G.initPlayerSpace(G.Map,G.player.cx,G.player.cy),G.player.map=G.Map.map(function(a){return a.slice()}),G.makeMobs(100),G.sounds||G.initAudio(),G.loadingScreen()},G.initAudio=function(){G.sounds={},G.sounds.loaded=0,G.sounds.total=3,window.AudioContext=window.AudioContext||window.webkitAudioContext,G.audioCtx=new AudioContext,G.soundGen=new G.sonantx.SoundGenerator(G.audio.JUMP),G.soundGen.createAudioBuffer(171,function(a){G.sounds.loaded++,G.sounds.jump=a}),G.soundGen=new G.sonantx.SoundGenerator(G.audio.FLIP),G.soundGen.createAudioBuffer(183,function(a){G.sounds.loaded++,G.sounds.flip=a}),G.soundGen=new G.sonantx.SoundGenerator(G.audio.JET),
G.soundGen.createAudioBuffer(130,function(a){G.sounds.loaded++,G.sounds.jet=a})},G.playSound=function(a,b){var c=G.audioCtx.createBufferSource(),d=G.audioCtx.createGain();return c.buffer=a,c.connect(d),d.connect(G.audioCtx.destination),c.loop=b,c.start(),{volume:d,sound:c}},G.drawBG=function(a,b,c){for(var d=0;d<G["const"].HEIGHT;d++)for(var e=0;e<G["const"].WIDTH;e++)e%2==0?d%2==1&&(a.fillStyle="#080808",a.fillRect(e*G["const"].GRID-b,d*G["const"].GRID-c,G["const"].GRID,G["const"].GRID)):d%2==0&&(a.fillStyle="#080808",a.fillRect(e*G["const"].GRID-b,d*G["const"].GRID-c,G["const"].GRID,G["const"].GRID))},G.render=function(a){G.ctx.drawImage(a,0,0,G["const"].VIEW_X,G["const"].VIEW_Y,0,0,G["const"].VIEW_X,G["const"].VIEW_Y)},G.resizeGame=function(){var a=window.innerWidth,b=window.innerHeight,c=document.querySelector("#game");G["const"].VIEW_X=a-60,G["const"].VIEW_Y=b-60,c.width=a-60,c.height=b-60},G.loadingScreen=function(){G.sounds.loaded!=G.sounds.total&&null==G.sounds.gameSong?(requestAnimationFrame(G.loadingScreen),G.ctx.fillStyle="black",G.ctx.fillRect(0,0,800,600),G.ctx.fillStyle="white",G.ctx.font="48px monospace",G.ctx.fillText("Loading... "+G.sounds.loaded,10,50)):G.startGame?G.startGame&&(G.jetloop=G.playSound(G.sounds.jet,!0),G.jetloop.sound.loopEnd=.3,G.jetloop.volume.gain.value=0,G.gameLoop=window.requestAnimationFrame(G.loop,G.bufferCanvas)):(requestAnimationFrame(G.loadingScreen),G.ctx.fillStyle="black",G.ctx.fillRect(0,0,800,600),G.ctx.fillStyle="white",G.ctx.font="12px monospace",G.ctx.fillText("z to flip across wall, x to shoot, space to jump. Arrows. Press X to begin",10,50),G.Key.update(),G.Key.isDown(G.Key.x)&&(console.log("x pressed"),G.startGame=!0))},G.loop=function(){G.gameOver?(G.ctx.fillStyle="black",G.ctx.fillRect(0,0,800,600),G.ctx.fillStyle="white",G.ctx.font="36px monospace",G.ctx.fillText("Game Over. Press x to play again ",10,50),G.Key.isDown(G.Key.x)&&(G.jetloop.volume.gain.value=0,window.cancelAnimationFrame(G.loop),G.gameLoop=void 0,G.init()),G.Key.update(),requestAnimationFrame(G.loop)):(G.stats.begin(),!G.paused&&G.gameLoop&&(G.mobUpdate(),G.particlesUpdate(),G.Map=G.Map,G.player.map=G.player.map,G.player.inputUpdate(),G.player.update(),G.camera.update()),G.buffer.fillStyle="rgba(0,0,0,.7)",G.buffer.fillRect(0,0,G["const"].VIEW_X,G["const"].VIEW_Y),G.drawBG(G.buffer,G.camera.xView,G.camera.yView),G.drawMap(G.buffer,G.camera.xView,G.camera.yView),G.drawMobs(G.buffer,G.camera.xView,G.camera.yView),G.player.draw(G.buffer,G.camera.xView,G.camera.yView),G.drawParticles(G.buffer,G.camera.xView,G.camera.yView),G.render(G.bufferCanvas),G.Key.justReleased(G.Key.p)&&(G.paused=!G.paused),G.Key.update(),G.stats.end(),G.gameOver=G.checkMap(G.Map),requestAnimationFrame(G.loop))},setInterval(function(){G["const"].E_HUNGER-=5},1e3),setInterval(function(){G.mobMouth=!G.mobMouth},500),setInterval(function(){console.log(G.checkMap(G.Map))},1e3),window.addEventListener("keyup",function(a){G.Key.onKeyup(a)},!1),window.addEventListener("keydown",function(a){G.Key.onKeydown(a)},!1),window.addEventListener("focus"),function(a){G.paused&&(G.paused=!1)},window.addEventListener("blur"),function(a){G.paused=!0},window.onload=G.init;