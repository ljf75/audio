!function(){"use strict";let t,e,i={};function o(t,...e){i[t]&&i[t].map(t=>t(...e))}function s(){return t}function n(){return e}const l=()=>{};function r(){let t=s();n().clearRect(0,0,t.width,t.height)}let a={},h={},c={13:"enter",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"};function d(t){let e=c[t.which];h[e]=!0,a[e]&&a[e](t)}function f(t){h[c[t.which]]=!1}function g(){h={}}function y(t){return!!h[t]}class p{constructor(t=0,e=0){this._x=t,this._y=e}add(t,e=1){return u(this.x+(t.x||0)*e,this.y+(t.y||0)*e,this)}clamp(t,e,i,o){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=o}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?Math.min(Math.max(this._a,t),this._d):t}set y(t){this._y=this._c?Math.min(Math.max(this._b,t),this._e):t}}function u(t,e,i={}){let o=new p(t,e);return i._c&&(o.clamp(i._a,i._b,i._d,i._e),o.x=t,o.y=e),o}u.prototype=p.prototype,u.class=p;class x{constructor(t){this.init(t)}init(t={}){let{x:e,y:i,dx:o,dy:s,ddx:l,ddy:r,width:a,height:h,image:c}=t;this.position=u(e,i),this._fx=this._fy=1,this.width=this.height=this.rotation=0,this.ttl=1/0,this.anchor={x:0,y:0},this.context=n();for(let e in t)this[e]=t[e];c&&(this.width=void 0!==a?a:c.width,this.height=void 0!==h?h:c.height),this.sx=0,this.sy=0}get x(){return this.position.x}get y(){return this.position.y}get viewX(){return this.x-this.sx}get viewY(){return this.y-this.sy}get width(){return this._w}get height(){return this._h}set x(t){this.position.x=t}set y(t){this.position.y=t}set width(t){let e=t<0?-1:1;this._fx=e,this._w=t*e}set height(t){let e=t<0?-1:1;this._fy=e,this._h=t*e}update(t){}render(){this.draw()}draw(){let t=-this.width*this.anchor.x,e=-this.height*this.anchor.y;this.context.save(),this.context.translate(this.viewX,this.viewY),this.rotation&&this.context.rotate(this.rotation),this.context.fillStyle=this.color,this.context.fillRect(t,e,this.width,this.height),this.context.restore()}}function m(t){return new x(t)}m.prototype=x.prototype,m.class=x;let b={deg2rad:function(t){return.017453292519943295*t},rad2deg:function(t){return 57.29577951308232*t},Vector2D:class{constructor(t=0,e=0){this.x=t,this.y=e}add(t){return this.x+=t.x,this.y+=t.y,this}subtract(t){return this.x-=t.x,this.y-=t.y,this}multiply(t){return this.x*=t,this.y*=t,this}distance(t){return Math.hypot(this.x-t.x,this.y-t.y)}magnitude(){return Math.hypot(this.x,this.y)}normalize(){return this.multiply(1/this.magnitude())}clone(){return new b.Vector2D(this.x,this.y)}setXY(t,e){return this.x=t,this.y=e,this}rotate(t,e,i){return this.rotateDeg(i,t,e)}rotateDeg(t,e=0,i=0){return this.rotateRad(Math.PI/180*t,e,i)}rotateRad(t,e=0,i=0){let o=e;e instanceof Object&&(o=e.x,i=e.y);let s=this.x,n=this.y,l=Math.cos(t),r=Math.sin(t),a=l*(s-o)+r*(n-i)+o,h=l*(n-i)-r*(s-o)+i;return this.x=a,this.y=h,this}copyFrom(t){return this.x=t.x,this.y=t.y,this}dot(t){return this.x*t.x+this.y*t.y}moveXY(t,e){return this.x+=t,this.y+=e,this}},Intersection:class{static lineLine(t,e,i,o,s=null){let n=t.y-e.y,l=e.x-t.x,r=e.x*t.y-t.x*e.y,a=i.y-o.y,h=o.x-i.x,c=o.x*i.y-i.x*o.y,d=n*h-a*l;if(0===d)return s&&(s.type="PARALLEL",s.position=[NaN,NaN]),null;let f=(r*h-c*l)/d,g=(n*c-a*r)/d;return s&&(s.type="INTERSECTION",s.position=[f,g]),new b.Vector2D(f,g)}static pointInCircle(t,e,i){return(t.x-e.x)**2+(t.y-e.y)**2<=i**2}static segmentSegment(t,e,i,o,s=null){let n=b.Intersection.lineLine(t,e,i,o,s);if(null===n)return null;let l=t.clone().moveXY((e.x-t.x)/2,(e.y-t.y)/2),r=Math.sqrt(((e.x-t.x)/2)**2+((e.y-t.y)/2)**2),a=i.clone().moveXY((o.x-i.x)/2,(o.y-i.y)/2),h=Math.sqrt(((o.x-i.x)/2)**2+((o.y-i.y)/2)**2);return b.Intersection.pointInCircle(n,l,r)&&b.Intersection.pointInCircle(n,a,h)?n:(null!==s&&(s.type="OUTSIDE"),null)}}};class w{constructor(t,e,i,o){this._begin=new b.Vector2D,this._end=new b.Vector2D,this.pos=e,this.angle=i,this.maxDistance=o,this.distance=1/0,this.intersection=null,this.setParent(t)}setParent(t){this.parent=t}update(){let t=this.parent,e=t?t.pos:new b.Vector2D,i=t?-t.angle:0;this._begin.copyFrom(this.pos).rotateRad(i).add(e),this._end.setXY(this.maxDistance,0).rotateRad(this.angle+i).add(this._begin)}sense(t){let e=1/0,i=null,o=this._begin,s=this._end;for(let n=0;n<t.length;++n){let l=t[n],r=b.Intersection.segmentSegment(o,s,l[0],l[1]);if(r){let t=o.distance(r);t<e&&(e=t,i=r)}}return this.distance=e,this.intersection=i,i}render(t){if(!this.intersection)return;let e=this._begin,i=this.intersection;t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(i.x,i.y),t.closePath(),t.lineWidth=2,t.strokeStyle="#bbff30",t.stroke(),t.beginPath(),t.arc(i.x,i.y,4,0,2*Math.PI,!1),t.fillStyle="red",t.fill()}}class S{constructor(){this.obstacles=[],this.lineSegments=[]}_addInternalPolygon(t){this._addInternalSegments(t),this.obstacles.push(m({polygon:t,render(){let t=this.context,e=this.polygon.calcPoints;t.beginPath(),t.moveTo(e[0].x,e[0].y);for(let i=1;i<e.length;++i)t.lineTo(e[i].x,e[i].y);t.closePath(),t.lineWidth=1,t.strokeStyle="#c0c0c0",t.stroke()}}))}_addInternalSegments(t){let e=t.calcPoints;for(let t=0;t<e.length;t++){let i=e[t],o=e[(t+1)%e.length];this.lineSegments.push([(new b.Vector2D).add(i),(new b.Vector2D).add(o)])}}addBox(t,e,i,o,s){this._addInternalPolygon(new SAT.Box(new SAT.V,i,o).toPolygon().setAngle(s).translate(t,e))}addPolygon(t){for(let e=3;e<t.length;e+=2)this._addInternalPolygon(new SAT.Polygon(new SAT.V,[new SAT.V(t[e-3],t[e-2]),new SAT.V(t[e-1],t[e])]))}render(){this.obstacles.forEach(t=>t.render())}}class _{constructor(){this.reset()}startTimer(){this.timerStart=Date.now()}stopTimer(){this.timerStop||(this.timerStop=Date.now())}reset(){this.points=0,this.timerStart=null,this.timerStop=null,this.collectibles=[],this.doors=[],this.obstacles=new S,this._triggers=[],this.start=new b.Vector2D,this.startAngle=Math.PI/2,this.goal=new b.Vector2D}unSerialize(t,e){this.reset(),this.id=e,this.startTimer();let i=this,o=JSON.parse(t);if(!o.start)throw"Map start not defined!";i.start.setXY(o.start[0],o.start[1]),i.goal.setXY(o.goal[0],o.goal[1]),o.collectibles.forEach(t=>{let e=i.addCollectible(t[0],t[1]);t[2]&&(e.colors=[t[2]],e.setTriggerId(t[2]))}),o.obstacles.forEach((function(t){i.obstacles.addPolygon(t)})),o.doors.forEach((function(t){let e=i.addDoor(t[0],t[1],t[2],t[3],t[4],t[5]),o=t[4];o&&(i._triggers[o]||(i._triggers[o]=[]),i._triggers[o].push((function(){e.isOpen=!e.isOpen})))}))}addCollectible(t,e){let i=this,o=m({x:t,y:e,radius:16,width:32,height:32,colors:["#e6e049","#e8e249","#eae448","#ece64b","#eae44a","#e8e249"],color:"#ffffff",colorPos:0,triggerListener:this,triggerId:null,isCollectible:!0,update:function(){this.colorPos+=1,this.color=this.colors[this.colorPos/5%this.colors.length|0]},render(){let t=this.context;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.closePath(),this.isCollectible?(t.fillStyle=this.color,t.fill()):(t.strokeStyle=this.color,t.lineWidth=2,t.stroke())},setTriggerId(t){this.triggerId=t},trigger(){this.isCollectible=!1,i.points+=100,this.triggerId&&this.triggerListener.onTrigger(this,this.triggerId)||zzfx(1,.1,1,.7,.12,2.2,.2,0,.25)}});return this.collectibles.push(o),o}onTrigger(t,e){let i=!1;return this._triggers[e]&&this._triggers[e].length>0&&(i=!0,this._triggers[e].forEach(t=>t())),i}addDoor(t,e,i,o,s,n=!0){let l=m({color:s,isOpen:!n,_isOpenOld:!1,lineSegments:[],polygon:new SAT.Polygon(new SAT.V,[new SAT.V(t,e),new SAT.V(i,o)]),update(){this.isOpen!==this._isOpenOld&&(this._isOpenOld=this.isOpen,this.isOpen?(this.polygon.pos.x+=1e6,this.polygon.pos.y+=1e6):(this.polygon.pos.x-=1e6,this.polygon.pos.y-=1e6),this._sync(),zzfx(.25,.1,1586,.5,.26,.1,2.4,0,.3))},_sync(){this.lineSegments.length=0;let t=this.polygon,e=t.calcPoints;for(let i=0;i<e.length;i++){let o=e[i],s=e[(i+1)%e.length];this.lineSegments.push([(new b.Vector2D).add(o).add(t.pos),(new b.Vector2D).add(s).add(t.pos)])}},render(){let s=this.context;s.fillStyle=this.color,s.lineWidth=16,s.strokeStyle=this.isOpen?"white":this.color,s.beginPath(),s.moveTo(t,e),s.lineTo(i,o),s.stroke(),s.beginPath(),s.arc(t,e,8,0,2*Math.PI,!1),s.fill(),s.beginPath(),s.arc(i,o,8,0,2*Math.PI,!1),s.fill()}});return l._sync(),this.doors.push(l),l}}function T(t,e,i){let o=String(t);return String(i).repeat(Math.max(0,e-o.length))+o}function E(t){return T(t/1e3/60|0,2,0)+":"+T(t/1e3%60|0,2,0)+":"+T(t%1e3,3,0)}let P=['{"start":[258,-549],"goal":[2006,-157],"doors":[[398,-348,460,-413,"#2aff80",true],[1463,291,1481,174,"#55ddff",true],[644,-102,707,-166,"#2aff80",false]],"obstacles":[[76,-868,76,-348,398,-348,644,-102,607,-65,874,455,1451,363,1463,291,1874,291,1874,340,2176,192,1986,43,2176,-104,2176,-252,1874,-252,1874,174,1481,174,1542,-215,1020,-479,707,-166,460,-413,460,-868,76,-868],[762,-258,1051,111,1213,95,1250,-129,1117,-206]],"collectibles":[[258,-686,"#2aff80"],[1102,-27,"#55ddff"],[470,-335,"#e9afaf"],[653,-156,"#e9afaf"],[1545,238,"#e9afaf"],[1931,40,"#e9afaf"],[562,-247,"#2aff80"],[2074,185,"#e9afaf"]]}','{"start":[605,-2405],"goal":[1122,-2440],"doors":[[438,-1674,438,-1795,"#55ddff",true],[930,-2154,930,-2275,"#55ddff",true],[930,-1674,930,-1795,"#55ddff",false],[-290,-644,-291,-940,"#2aff80",false],[1110,-1231,1045,-1104,"#2aff80",true],[561,-2560,807,-2560,"#2aff80",true],[338,-1161,186,-1176,"#2aff80",true],[628,-1213,633,-1354,"#2aff80",false]],"obstacles":[[930,-2154,1248,-2154,1348,-2079,1377,-1953,1322,-1847,1189,-1795,930,-1795,930,-2154],[502,-1365,342,-1338,235,-1268,186,-1176,186,-940,-291,-940,-291,-1268,-143,-1523,117,-1674,438,-1674,684,-1422,930,-1674,1189,-1674,1189,-1674,1322,-1604,1377,-1511,1388,-1396,1294,-1267,1110,-1231,894,-1333,502,-1365],[561,-2560,438,-2560,438,-1795,77,-1795,-235,-1615,-416,-1302,-416,-940,-416,-645,311,-645,311,-1058,338,-1161,416,-1218,844,-1204,1045,-1104,1248,-1056,1424,-1066,1557,-1125,1694,-1386,1750,-1735,1740,-2111,1794,-2294,1917,-2427,1945,-2542,1841,-2671,1661,-2725,1534,-2685,1468,-2546,1415,-2404,1341,-2313,1248,-2275],[1248,-2275,930,-2275,930,-2560,807,-2560,807,-2637,995,-2637,995,-2341,1285,-2341,1285,-2720,1137,-2873,586,-2873,438,-2755,438,-2637,558,-2637,561,-2560],[1565,-2459,1650,-2476,1697,-2406,1656,-2298,1571,-2254,1512,-2300,1565,-2459]],"collectibles":[[1711,-2578,"#55ddff"],[863,-1253,"#2aff80"],[991,-1732,"#a0892c"],[1107,-1730,"#a0892c"],[991,-2210,"#a0892c"],[1145,-2210,"#a0892c"],[351,-1732,"#a0892c"],[120,-1732,"#a0892c"],[612,-1880,"#a0892c"],[487,-1749,"#a0892c"],[663,-1965,"#a0892c"],[562,-1808,"#a0892c"],[248,-980,"#2aff80"],[429,-1281,"#2aff80"],[714,-2045,"#a0892c"],[782,-2128,"#a0892c"],[860,-2183,"#a0892c"],[1734,-2308,"#a0892c"],[1493,-2433,"#a0892c"],[1342,-1165,"#a0892c"],[-356,-947,"#a0892c"],[-184,-1571,"#a0892c"],[-351,-1287,"#a0892c"],[748,-2511,"#a0892c"],[875,-2269,"#a0892c"],[822,-2348,"#a0892c"],[780,-2428,"#a0892c"],[1408,-2024,"#a0892c"],[1376,-2107,"#a0892c"],[1306,-2162,"#a0892c"]]}','{"start":[-1268,-3910],"goal":[-2649,-3240],"doors":[[-3067,-3066,-3173,-3066,"#55ddff",true],[-2466,-2660,-2466,-2873,"#2aff80",true],[-987,-3669,-1093,-3669,"#55ddff",true],[-1201,-2875,-1201,-3019,"#55ddff",true],[-987,-3642,-1093,-3642,"#2aff80",true],[-2216,-3080,-2322,-3080,"#55ddff",false],[-2216,-3052,-2322,-3052,"#2aff80",false]],"obstacles":[[1565,-2459,1650,-2476,1697,-2406,1656,-2298,1571,-2254,1512,-2300,1565,-2459],[-1243,-4197,-1623,-3689,-1093,-3689,-1093,-3617,-1358,-3377,-1623,-3617,-1623,-3495,-1695,-3495,-1695,-3617,-2419,-3617,-2419,-3109,-2322,-3109,-2322,-3020,-2419,-3020,-2419,-2873,-2512,-2873,-2512,-3020,-3067,-3020,-3067,-3109,-2512,-3109,-2512,-3617,-3236,-3617,-3236,-3109,-3173,-3109,-3173,-3020,-3579,-2893,-3579,-2639,-2512,-2512,-2512,-2660,-2419,-2660,-2419,-2512,-1839,-2512,-1569,-2047,-779,-2047,-485,-2512,-485,-3020,-485,-4197,-794,-4197,-794,-4121,-900,-4121,-900,-4197,-1243,-4197],[-900,-4015,-794,-4015,-794,-3689,-696,-3689,-696,-3617,-794,-3617,-794,-3020,-2216,-3020,-2216,-3109,-1695,-3109,-1695,-3388,-1623,-3388,-1623,-3109,-900,-3109,-900,-3617,-987,-3617,-987,-3689,-900,-3689,-900,-4015],[-3006,-3161,-3006,-3361,-2767,-3361,-3006,-3161],[-2132,-3436,-1767,-3436,-2132,-3179,-2132,-3436],[-882,-2305,-1101,-2370,-1278,-2226,-1284,-2454,-1475,-2579,-1260,-2655,-1201,-2875,-1062,-2694,-835,-2706,-964,-2518,-882,-2305]],"collectibles":[[-2263,-3402,"#55ddff"],[-853,-4068,"#a0892c"],[-1122,-3272,"#2aff80"],[-638,-3652,"#a0892c"],[-2634,-2766,"#a0892c"],[-3463,-2766,"#a0892c"],[-1014,-2937,"#a0892c"],[-1936,-2649,"#a0892c"],[-1532,-2290,"#a0892c"],[-1374,-2931,"#a0892c"],[-853,-2272,"#a0892c"],[-1664,-3440,"#a0892c"]]}','{"start":[-211,-2507],"goal":[948,-3195],"doors":[[669,-2722,944,-2862,"#2aff80",true],[397,-2869,445,-2564,"#55ddff",true],[888,-2558,1106,-2339,"#d8ed7a",true],[526,-2302,659,-2010,"#55ddff",false],[1321,-3846,1413,-3610,"#d8ed7a",true]],"obstacles":[[659,-2010,800,-2299,1106,-2339],[888,-2558,944,-2862],[669,-2722,397,-2869],[445,-2564,221,-2351,526,-2302,24,-2302,-40,-2934,-481,-2601,24,-2010,659,-2010],[221,-2351,-72,-3251,233,-3466,532,-3242,397,-2869],[154,-3046,107,-3195,236,-3285,361,-3191,310,-3043,154,-3046],[944,-2862,746,-3246,1010,-3373,1220,-2988,1846,-3152,1547,-3924,233,-3466],[1413,-3610,1543,-3283,1327,-3190],[1106,-2339,1220,-2988]],"collectibles":[[1513,-3769,"#d8ed7a"],[670,-2477,"#55ddff"],[229,-3353,"#2aff80"],[58,-3095,"#a0892c"],[401,-3088,"#a0892c"],[-115,-2743,"#a0892c"],[-153,-2614,"#a0892c"],[-53,-2261,"#a0892c"],[653,-3236,"#a0892c"],[581,-2976,"#a0892c"],[1241,-3164,"#a0892c"],[1258,-3683,"#a0892c"],[1112,-3632,"#a0892c"],[964,-3577,"#a0892c"],[346,-2146,"#a0892c"]]}'],D=null,A={DEBUG:{render_groundtruth:!1,add_noise_to_sensors:!0,frames:{slidingMean:new class{constructor(t=30,e=0){this.buffer=[],this.bufferPointer=0,this.bufferSize=t;for(let i=0;i<t;++i)this.addValue(e)}addValue(t){return this.bufferPointer=(this.bufferPointer+1)%this.bufferSize,this.buffer[this.bufferPointer]=t,this}getMean(){let t=0;for(let e=0;e<this.bufferSize;++e)t+=this.buffer[e];return t/this.bufferSize}}(60,60),tickEnd:Date.now()-60,tickBegin:Date.now()}},resize_canvas:!0,mapStates:{},relative_camera_enabled:!0,showLevelSelect(){D()}};document.APP=A,document.addEventListener("DOMContentLoaded",(function(){let i=0;!function(i){if(!(t=document.getElementById(i)||i||document.querySelector("canvas")))throw Error("You must provide a canvas element for the game");(e=t.getContext("2d")).imageSmoothingEnabled=!1,o("init")}(),function(){let t;for(t=0;t<26;t++)c[65+t]=(10+t).toString(36);for(t=0;t<10;t++)c[48+t]=""+t;window.addEventListener("keydown",d),window.addEventListener("keyup",f),window.addEventListener("blur",g)}();let a=[],h=0,p=0,u=0,x=new _,S=function(){let t=m({_cameraKeyDown:!1,disabled:!1,sensors:[],color:"#feffd9",isTurbo:!1,isMoving:!1,trails:[],defaultColor:"#feffd9",polygon:new SAT.Polygon(new SAT.Vector(100,100),[new SAT.Vector(-40,-17.5),new SAT.Vector(-40,17.5),new SAT.Vector(0,20),new SAT.Vector(40,17.5),new SAT.Vector(40,-17.5),new SAT.Vector(0,-20)]),update:function(){if(!this.disabled){this.color=this.defaultColor;{let t=document.APP,e=y("c");e&&!this._cameraKeyDown&&(t.relative_camera_enabled=!t.relative_camera_enabled),this._cameraKeyDown=e}if(y("esc"))document.APP.showLevelSelect();else{let t=new b.Vector2D(1,0).rotateRad(-this.polygon.angle),e=y("t")||y("space"),i=y("w"),o=y("s"),s=y("i"),n=y("k");this.isTurbo=e;let l=i!==o?i?1:-1:0,r=s!==n?s?1:-1:0;{let t=y("up"),e=y("down"),i=y("left"),o=y("right");t&&!e?i&&!o?(l=0,r=1):!i&&o?(l=1,r=0):(l=1,r=1):!t&&e?i&&!o?(l=0,r=-1):!i&&o?(l=-1,r=0):(l=-1,r=-1):y("left")?(l=-1,r=1):y("right")&&(l=1,r=-1)}let a=e?4.5:3,h=e?3:2,c=e?2:1,d=e?3:2,f=!1;l>0&&r>0?(f=!0,this.polygon.pos.add(t.multiply(a))):l<0&&r<0?(f=!0,this.polygon.pos.sub(t.multiply(a))):l>0&&r<0?(f=!0,this.polygon.setAngle(this.polygon.angle+b.deg2rad(d))):l<0&&r>0?(f=!0,this.polygon.setAngle(this.polygon.angle+b.deg2rad(-d))):l>0&&0===r?(f=!0,this.polygon.setAngle(this.polygon.angle+b.deg2rad(c)),this.polygon.pos.add(t.multiply(h))):0===l&&r>0?(f=!0,this.polygon.setAngle(this.polygon.angle+b.deg2rad(-c)),this.polygon.pos.add(t.multiply(h))):l<0&&0===r?(f=!0,this.polygon.setAngle(this.polygon.angle+b.deg2rad(-c)),this.polygon.pos.sub(t.multiply(h))):0===l&&r<0&&(this.polygon.setAngle(this.polygon.angle+b.deg2rad(c)),this.polygon.pos.sub(t.multiply(h))),this.isMoving=f,this.leftAcceleration=l,this.rightAcceleration=r}}},addMovingEffects(){if(this.isTurbo){let t=30-15*Math.random(),e=30-60*Math.random();this.trails.push({begin:new b.Vector2D(t,e).rotateRad(-this.polygon.angle).add(this.polygon.pos),end:new b.Vector2D(t-40-10*Math.random(),e).rotateRad(-this.polygon.angle).add(this.polygon.pos),ttl:.33})}},renderWheel(t,e){let i=this.context;i.strokeStyle="black",i.fillStyle="black";let o=new b.Vector2D(0,"left"===t?-20:20),s=new b.Vector2D(-20,-5),n=new b.Vector2D(-20,5),l=new b.Vector2D(20,5),r=new b.Vector2D(20,-5),a=e>0?1:-1,h=new b.Vector2D(35*a,0),c=new b.Vector2D(25*a,-10),d=new b.Vector2D(25*a,10),f=-this.polygon.angle;o.rotateRad(f).add(this.polygon.pos),[s,n,l,r,h,c,d].forEach(t=>t.rotateRad(f).add(o)),i.beginPath(),i.moveTo(s.x,s.y),i.lineTo(n.x,n.y),i.lineTo(l.x,l.y),i.lineTo(r.x,r.y),i.closePath(),i.fill(),0!==e&&(i.beginPath(),i.moveTo(o.x,o.y),i.lineTo(h.x,h.y),i.closePath(),i.lineWidth=4,i.stroke(),i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(h.x,h.y),i.lineTo(d.x,d.y),i.closePath(),i.fill())},render(){let t=this.context,e=this.polygon.calcPoints;t.beginPath(),t.moveTo(this.polygon.pos.x+e[0].x,this.polygon.pos.y+e[0].y);for(let i=1;i<e.length;++i)t.lineTo(this.polygon.pos.x+e[i].x,this.polygon.pos.y+e[i].y);t.closePath(),t.fillStyle=this.color,t.fill(),this.trails.length&&(this.trails=this.trails.filter(e=>!!this.isMoving&&(t.lineWidth=1,t.strokeStyle="#e27d7e",t.moveTo(e.begin.x,e.begin.y),t.lineTo(e.end.x,e.end.y),t.stroke(),e.ttl-=1/60,e.ttl>0)));{t.strokeStyle="#7570cc",t.lineWidth=1,[[e[0],e[1]],[e[3],e[4]]].forEach(e=>{t.beginPath(),t.moveTo(this.polygon.pos.x+e[0].x,this.polygon.pos.y+e[0].y),t.lineTo(this.polygon.pos.x+e[1].x,this.polygon.pos.y+e[1].y),t.stroke()}),t.lineWidth=4;let i=-this.polygon.angle,o=new b.Vector2D(-30,10).rotateRad(i),s=new b.Vector2D(-30,-10).rotateRad(i);[[e[1],e[2],e[3]],[e[4],e[5],e[0]],[o,s,o]].forEach(e=>{t.beginPath(),t.moveTo(this.polygon.pos.x+e[0].x,this.polygon.pos.y+e[0].y),t.lineTo(this.polygon.pos.x+e[1].x,this.polygon.pos.y+e[1].y),t.lineTo(this.polygon.pos.x+e[2].x,this.polygon.pos.y+e[2].y),t.stroke()})}this.renderWheel("left",this.leftAcceleration),this.renderWheel("right",this.rightAcceleration)},onCollision(){this.color="red"}});for(let e=-90;e<=90;e+=10)t.sensors.push(new w(t.polygon,new b.Vector2D,b.deg2rad(e),512));return[-22.5,0,22.5].forEach(e=>{t.sensors.push(new w(t.polygon,new b.Vector2D(0,0),b.deg2rad(180+e),160))}),t}(),v=m({_c:0,color:"cyan",anchor:{x:.5,y:.5},x:0,y:0,width:64,height:64,update(){if(S.disabled)return;let t=["#93a8f9","#8ff7f9","#66f9d6","#6df9c3","#78f996","#aaf97f","#e5f97e","#f9de7e","#f9b280","#f97671","#f971a0","#f976d6","#de8ef9"];this.color=t[(++this._c/10|0)%t.length],this.rotation+=.05;let e=S.polygon.pos;if((this.x-e.x)**2+(this.y-e.y)**2<4096){S.disabled=!0,x.stopTimer();for(let t=0;t<15;++t)setTimeout(e=>zzfx(.7,.1,527,.5,.15,10.5,0,0,.51+t/50),150*t);let t=A.mapStates[x.id],e=x.points,i=x.timerStop-x.timerStart;t.points<e&&(t.points=e);let o=t.time;(i<o||0===o)&&(t.time=i),setTimeout(D,3e3)}}});{let t=document,e=t.querySelector('input[name="groundtruth"]'),o=t.querySelector('input[name="fixed-camera"]'),s=t.querySelector('input[name="noise"]'),n=t.getElementById("title-screen"),l=t.getElementById("start"),r=t.getElementById("level"),a=t.getElementById("level-select");l.disabled=!0,l.innerText="Start",l.disabled=!1,l.onclick=function(){n.style.display="none",D()},l.focus(),e.onclick=function(){A.DEBUG.render_groundtruth=e.checked},o.onclick=function(){A.relative_camera_enabled=!o.checked},s.onclick=function(){A.DEBUG.add_noise_to_sensors=s.checked},e.checked=A.DEBUG.render_groundtruth,o.checked=!A.relative_camera_enabled,s.checked=A.DEBUG.add_noise_to_sensors,D=function(){S.disabled=!0,n.style.display="none",r.style.display="block";let t=a;t.innerHTML="";for(let e=1;e<=P.length;++e){A.mapStates[e]||(A.mapStates[e]={time:0,points:0});let i=A.mapStates[e];t.innerHTML+='<div><div><button data-id="LEVEL">MAP LEVEL<br>Points: POINTS<br>Time: TIME</button></div></div>'.replace("POINTS",i.points).replace("TIME",E(i.time)).replace(/LEVEL/g,e)}t.onclick=t=>{let e=t.target.getAttribute("data-id");x.unSerialize(P[e-1],e),i=0,r.style.display="none",S.disabled=!1,S.polygon.pos.x=x.start.x,S.polygon.pos.y=x.start.y,S.polygon.setAngle(x.startAngle),v.x=x.goal.x-32,v.y=x.goal.y-32}}}let I=!1,M=1,V=0;(function({fps:t=60,clearCanvas:e=!0,update:i,render:s}={}){if(!i||!s)throw Error("You must provide update() and render() functions");let n,a,h,c,d,f=0,g=1e3/t,y=1/t,p=e?r:l;function u(){if(a=requestAnimationFrame(u),h=performance.now(),c=h-n,n=h,!(c>1e3)){for(o("tick"),f+=c;f>=g;)d.update(y),f-=g;p(),d.render()}}return d={update:i,render:s,isStopped:!0,start(){n=performance.now(),this.isStopped=!1,requestAnimationFrame(u)},stop(){this.isStopped=!0,cancelAnimationFrame(a)},_frame:u,set _last(t){n=t}}})({update(){if(V>0)--V;else{M+=1,u-=1/60,x.doors.forEach(t=>t.update());{let t=S.polygon.pos.clone(),e=S.polygon.angle;S.update();let i=x.obstacles.obstacles.slice().concat(x.doors),o=!1;for(let s=0;s<i.length;++s)if(I=SAT.testPolygonPolygon(S.polygon,i[s].polygon)){u<=0&&(u=.5,x.points-=10,zzfx(1,.2,278,.3,.14,.6,4.5,3,.12)),S.onCollision(),S.polygon.pos.copy(t),S.polygon.setAngle(e),S.isMoving=!1,o=!0;break}!o&&S.isMoving&&S.addMovingEffects()}p<=0?p=60:p--;{let t=S.polygon.pos;x.collectibles.forEach(e=>{if(e.isCollectible){if((e.x-t.x)**2+(e.y-t.y)**2<1600)return void e.trigger();e.update()}})}S.sensors.forEach(t=>{t.update(S);let e=x.obstacles.lineSegments.slice();x.doors.forEach(t=>t.lineSegments.forEach(t=>e.push(t)));let i=t.sense(e);if(i){if(A.DEBUG.add_noise_to_sensors){let e=t.distance,o=e<=100?0:Math.min(Math.log10(e/(e<200?25:1e-4)),20);i.moveXY((Math.random()-.5)*o,(Math.random()-.5)*o)}0===p&&(a[h=(h+1)%512]=i)}}),v.update(),S.disabled&&(i+=1/120)}},render(){let t=s(),e=n();if(A.resize_canvas){let e=s().getBoundingClientRect();t.width=e.width,t.height=e.height,A.resize_canvas=!1}e.setTransform(1,0,0,1,0,0);{let i=t.width,o=t.height,s=S.polygon.pos.x,n=S.polygon.pos.y,l=i/2-s,r=o/2-n,a=s,h=n;e.clearRect(0,0,i,o),e.translate(l,r),A.relative_camera_enabled&&(e.translate(a,h),e.rotate(-S.polygon.angle-b.deg2rad(90)),e.translate(-a,-h))}A.DEBUG.render_groundtruth&&x.obstacles.render(),v.render(),a.forEach(t=>{e.beginPath(),e.arc(t.x,t.y,2,0,2*Math.PI,!1),e.fillStyle="#a894f3",e.fill()}),x.doors.forEach(t=>t.render()),x.collectibles.forEach(t=>t.render()),S.sensors.forEach(t=>t.render(e)),S.render(),e.setTransform(1,0,0,1,0,0),e.font="10px monospace",e.fillStyle="blue";{let t=A.DEBUG.frames.tickBegin,i=Date.now();A.DEBUG.frames.tickEnd=t,A.DEBUG.frames.tickBegin=i;let o=i-t,s=Math.floor(1e3/o);{let t=96,i=0;e.fillText("== AUTOMATIC DIAGNOSIS ==",8,t+16*++i),++i,e.fillText("FPS="+T(0|A.DEBUG.frames.slidingMean.addValue(s).getMean(),2,0),8,t+16*++i),e.fillText("UPF="+T(M,2,0),56,t+16*i);{let o=S.polygon.pos.x.toFixed(2),s=S.polygon.pos.y.toFixed(2),n=(S.polygon.angle%(2*Math.PI)).toFixed(2);e.fillText("POSE=("+o+","+s+","+n+")",8,t+16*++i)}let o=S.sensors.length;++i,e.fillText("** SENSORS **",8,t+16*++i),++i,e.fillText("DISTANCE_LASER = "+o,8,t+16*++i),e.fillText("DISTANCE_SONIC = 0",8,t+16*++i),e.fillText("STEREO_CAMERA  = 0",8,t+16*++i),e.fillText("TEMPERATURE    = 0",8,t+16*++i),e.fillText("IMU            = 1",8,t+16*++i),e.fillText("GPS            = 1",8,t+16*++i),e.fillText("WHEEL_ENCODER  = 2",8,t+16*++i),++i,e.fillText("** MODULES **",8,t+16*++i),++i,e.fillText("BEHAVIORS   = OFFLINE [!]",8,t+16*++i),e.fillText("GRIDMAP     = OFFLINE [!]",8,t+16*++i),e.fillText("LANDMARKS   = ONLINE",8,t+16*++i),e.fillText("POSE        = ONLINE",8,t+16*++i),e.fillText("REMOTE_CTRL = ONLINE",8,t+16*++i),e.fillText("WEAKMAP     = ONLINE",8,t+16*++i)}M=0}if(S.disabled&&(e.rect(0,0,t.width,t.height),e.fillStyle="rgba(255,255,255,"+i+")",e.fill()),x.timerStart){let i=S.disabled?t.width/2-64:8,o=S.disabled?t.height/2-32:32,s=S.disabled?32:24;e.fillStyle="blue",e.font=s+"px monospace";let n=(x.timerStop?x.timerStop:Date.now())-x.timerStart;e.fillText(E(n),i,o),e.fillText(T(x.points,9," "),i,o+32)}}}).start(),window.addEventListener("resize",()=>A.resize_canvas=!0)}))}();