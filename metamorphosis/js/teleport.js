AFRAME.registerComponent("teleport-listener",{init:function(){this.el.addEventListener("mouseenter",function(e){"free"===finite_state&&this.setAttribute("material","color","#DDDDDD")}),this.el.addEventListener("mouseleave",function(e){"free"===finite_state&&this.setAttribute("material","color","#444444")})}});