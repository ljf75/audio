var io=require("sandbox-io");var room_id=1;var player_id=1;var lobby2=[];var lobby4=[];var rooms={};var players={};io.on("connection",function(a){log.debug("New connection",a.id);a.on("register",registration.bind(a))});function registration(b){if(b.mode===0){}else{var a,c;b.socket=this;if(b.players===2){lobby2.push(b);if(lobby2.length===2){c="room"+room_id;room_id+=1;rooms[c]={status:0,players:[]};for(a=0;a<2;a+=1){log.debug("sending request to: "+lobby2[a].name);lobby2[a].socket.emit("start")}lobby2=[]}}else{if(b.players===4){lobby4.push(b);if(lobby2.length===4){for(a=0;a<4;a+=1){log.debug("sending request to: "+lobby2[a].name);lobby4[a].socket.emit("start")}lobby4=[]}}}}}function start(a){}function receiveClientMessage(a){if(a=="Hello"){this.emit("srv-msg",{hello:"Wold!"})}else{this.emit("srv-msg",{data:a,msg:"This data is a "+a.constructor.toString().replace(/^function ([^(]+).*/,"$1")})}};