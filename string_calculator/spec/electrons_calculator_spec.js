/*

TODO-LIST:
- get [] as input - excpect 0 as output
- get [3] as input - expect 2 as output
- get [5] as input - expect 4 as output
- get [1,2] as input - expect 0 as output
- get [1,3] as input - expect 2 as output
- get [3,5] as input - expect 6 as output


2 - write prod code:
-3 refactor:
  
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

	it('should return 2 for array [3]', function() {
		expect(electrons.calculate([3])).toEqual(2);
	});

	it('should return 4 for array [5]', function() {
		expect(electrons.calculate([5])).toEqual(4);
	});
});
