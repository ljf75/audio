!function(){var a=require("./game.js"),b=require("sandbox-io"),c=50,d=[],e=[],f={};b.on("connect",function(b){function g(){var a=[],c=b.game;return f[c]&&f[c].players.forEach(function(b){a.push({nick:b.nick,wins:b.wins})}),a}function h(){var a=b.game;return f[a]&&f[a].match?f[a].match.save():null}function i(){var a,c,d,e=[],j=null,k=f[b.game];k&&k.match&&(c=k.match,setTimeout(i,c.timer),a=c.run(function(a){e.push(a),k.changed=!0}),a===!1?c.ai(function(){k.changed=!0}):c.motors.length&&k.players.forEach(function(b){b.motor&&b.motor.id===a&&(b.wins++,j=g())}),k.changed&&(d=h(),b.emit("shot",d,e,a,j),b.to(b.game).emit("shot",d,e,a,j),k.changed=!1),a!==!1&&(k.match=null))}function j(){var a=e.indexOf(b.nick);a>=0&&e.splice(a,1)}function k(){var a,b;d=[];for(a in f)b=f[a],b.params.count=b.players.length,d.push(b.params)}function l(){var a,c=b.nick,d=b.game;d&&(a=f[d].players,a.splice(a.indexOf(b),1),0===a.length?delete f[d]:b.to(d).emit("room",c,g(),"left"),b.game=null,k())}b.on("disconnect",function(){l(),j()}),b.on("open",function(a){a?e.indexOf(a)>=0?b.emit("alert","Name exists!"):(j(),e.push(a),b.nick=a,b.wins=0,b.game=null,b.emit("open")):b.emit("alert","Invalid name!")}),b.on("games",function(){b.emit("games",d)}),b.on("create",function(a){var c=a.name;c?c in f?b.emit("alert","Game exists!"):(b.leave(b.game),l(),f[c]={params:a,players:[b],changed:!1},b.join(c),b.game=c,b.emit("join",g(),null,a),k()):b.emit("alert","Invalid name!")}),b.on("join",function(a){var c,d=b.nick;a=a||d,d&&f[a]&&-1===f[a].players.indexOf(b)&&(b.join(a),b.game=a,f[a].players.push(b),c=g(),b.emit("join",c,h(),f[a].params),b.to(a).emit("room",d,c,"joined"),k())}),b.on("leave",function(){b.leave(b.game),l()}),b.on("message",function(a){b.game&&b.to(b.game).emit("message",b.nick,a)}),b.on("start",function(){var d,e,g,j=f[b.game];if(j){if(g=j.params,j.match)b.motor=j.match.add(b.nick);else{for(j.match=new a.Match(g.mode,g.map),j.players.forEach(function(a){a.motor=null}),b.motor=j.match.add(b.nick),d=j.params.bots;d-->0;)j.match.add();setTimeout(i,c)}e=h(),j.players.forEach(function(a){var b=a.motor?a.motor.id:!1;a.emit("start",e,b,g)})}}),b.on("turn",function(a,c){var d;f[b.game]&&(d=b.motor,d.move(c),d.turn(a),f[b.game].changed=!0)})}),module.exports=b}();