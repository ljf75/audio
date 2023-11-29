function Tower(a,b,c,d,e){this.x=a||0;this.y=b||0;this.w=c||1;this.h=d||1;this.fill=e||"#AAAAAA"}Tower.prototype.getRotate=function(a){a=Math.atan((a.x-this.x)/(a.y-this.y));return 2*-Math.PI-a};Tower.prototype.getDiffs=function(a){var b=a.x-this.x,a=a.y-this.y,c=Math.sqrt(b*b+a*a);return{dx:b/c,dy:a/c}};
Tower.prototype.draw=function(a,b){a.save();a.fillStyle=this.fill;context.beginPath();context.arc(this.x,this.y,10,0,2*Math.PI,!0);context.closePath();context.fill();if("undefined"!==typeof b){var c=this.getRotate(b);a.translate(this.x,this.y);a.rotate(c);a.fillRect(0-this.w/2,0-this.h,this.w,this.h)}a.restore()};