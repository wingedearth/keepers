console.log('app/exchanges/exchanges.js is loaded...');

var Exchange = function(options) {
	this.msg 		= options.msg;
	this.responses 	= options.responses;
	//

}

Exchange.prototype.action = function() {
	// this is the stub...
	console.log(this.msg);
}


/*
Exchange.prototype.isDefaultLocation = function() {

};
*/
