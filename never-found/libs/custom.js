GA.custom=function(a){a.randomInt=function(b,c){return Math.floor(Math.random()*(c-b+1))+b};a.scaleToWindow=function(b){var c=Math.min(window.innerWidth/a.canvas.width,window.innerHeight/a.canvas.height);a.canvas.style.transformOrigin="0 0";a.canvas.style.transform="scale("+c+")";var d=a.canvas.width>a.canvas.height?a.canvas.width*c<window.innerWidth?"horizontally":"vertically":a.canvas.height*c<window.innerHeight?"vertically":"horizontally";if("horizontally"===d){var e=(window.innerWidth-a.canvas.width*
c)/2;a.canvas.style.marginLeft=e+"px";a.canvas.style.marginRight=e+"px"}"vertically"===d&&(e=(window.innerHeight-a.canvas.height*c)/2,a.canvas.style.marginTop=e+"px",a.canvas.style.marginBottom=e+"px");a.canvas.style.paddingLeft=0;a.canvas.style.paddingRight=0;a.canvas.style.paddingTop=0;a.canvas.style.paddingBottom=0;a.canvas.style.display="block";document.body.style.backgroundColor=b||"#2C3539";a.pointer.scale=c;a.scale=c;a.canvas.scaled=!0;b=navigator.userAgent.toLowerCase();-1==b.indexOf("safari")||
-1<b.indexOf("chrome")||(a.canvas.style.maxHeight="100%",a.canvas.style.minHeight="100%")};a.hitTestRectangle=function(b,c,d){void 0===d&&(d=!1);if(d){var e=b.gx+b.halfWidth-(c.gx+c.halfWidth);var f=b.gy+b.halfHeight-(c.gy+c.halfHeight)}else e=b.centerX-c.centerX,f=b.centerY-c.centerY;d=b.halfWidth+c.halfWidth;b=b.halfHeight+c.halfHeight;return Math.abs(e)<d?Math.abs(f)<b?!0:!1:!1}};