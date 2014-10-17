function Plane () {};

function Airport () {
this.planes = []
};

function LandError(message){
	this.name = 'LandError';
	this.message = message || 'plane has already landed';
};	

LandError.prototype = new Error();

Airport.prototype.land = function(plane) {
	if(this.planes.indexOf(plane) === -1)
		this.planes.push(plane)
	else
		return 'plane has already landed'
};

Airport.prototype.takeOff = function(number) {
	this.planes.pop(plane)
};