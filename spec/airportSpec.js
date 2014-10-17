describe ('Airport', function() {

	beforeEach(function() {
		plane = new Plane
		airport = new Airport
	});

	it('Should be able to land planes', function() {
		airport.land(plane)
		expect(airport.planes.length).toEqual(1)
	});

	it('Should allow planes to take off', function () {
		airport.land(plane)
		airport.takeOff(plane)
		expect(airport.planes.length).toEqual(0)
	});

	



});