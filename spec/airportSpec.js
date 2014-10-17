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

	it('should only let a plane take off if it is in the airport', function(){
		airport.takeOff(plane)
		expect(airport.takeOff(plane)).toEqual('Plane has already taken off')

	});

	it('should know how many planes have landed', function(){
		airport.land(plane)
		jet = new Plane
		airport.land(jet)
		expect(airport.planes.length).toEqual(2)
	});

});