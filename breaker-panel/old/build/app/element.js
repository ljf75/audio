define(["utils"],function(a){"use strict";var b,c;return b=function a(){this._type="electronic",a.count+=1},b.count=0,c=b.prototype,c.getType=function(){return this._type},c.setInput=function(a){return this._input=a||null,a._output=this,this},c.getInput=function(){return this._input},c.hasInput=function(){return"undefined"!=typeof this._input&&null!==this._input},c.setOutput=function(a){return this._output=a||null,a._input=this,this},c.getOutput=function(){return this._output},c.hasOutput=function(){return"undefined"!=typeof this._output&&null!==this._output},{ElectronicElement:b}});