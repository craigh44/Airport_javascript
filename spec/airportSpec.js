describe ('Airport', function() {

	beforeEach(function() {
		plane = new Plane
		airport = new Airport
	});

	it('Should be able to land planes', function() {
		airport.land(plane)
		expect(airport.planes).toEqual([plane])
	});

	it('Should allow planes to take off', function () {
		airport.land(plane)
		airport.takeOff(plane)
		expect(airport.planes.length).toEqual(0)
	});

	it('should only let a plane land once', function(){
		airport.land(plane)
		expect(airport.land(plane)).toEqual('plane has already landed')
	});

});