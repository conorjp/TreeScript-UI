
var fs = require('fs');
var jade = require('jade');

var fn = jade.compileFile('./templates/index.jade');

var locals = {};

var html = fn(locals);

fs.writeFile('./result.html',html,function(err) {
	if(err) throw err;
});
