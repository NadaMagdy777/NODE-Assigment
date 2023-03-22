var Emitters = require('events')
var utils = require('util')

var Func = new Function();

utils.inherits(Func,Emitters)

Func.prototype.greet = function(data){
  this.emit('eventfired', data)
}

var customFun = new Func();
//
customFun.on('eventfired', function(data){
  console.log('You Entered ==> ' + data)
});

customFun.greet('Nada magdy');