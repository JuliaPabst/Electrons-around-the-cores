/*

TODO-LIST:
- get [] as input - excpect 0 as output
- get [1] as input - excpect 0 as output
- get [3] as input - expect 2 as output
- get [5] as input - expect 4 as output
- get [1,2] as input - expect 0 as output
- get [1,3] as input - expect 2 as output
- get [3,5] as input - expect 6 as output

 Andrei Brate: driver, Julia Pabst: observer
 Andrei Brate: observer, Julia Pabst: driver
*/




describe('Electrons', function() {
	beforeEach(function() {
		electrons = new ElectronsCalculator(); 
	});

	it('should return 0 for an empty array', function() {
		expect(electrons.calculate('')).toEqual(0);
	});

	it('should return 0 for string [1]', function() {
		expect(electrons.calculate('1')).toEqual(0);
	});
});
