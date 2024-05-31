/*
TODO-LIST:
- Create input and submit button
- Read input value (string) and transform it to array: return array
- get [1] as input - excpect 0 as output
- get [3] as input - expect 2 as output
- get [5] as input - expect 4 as output
- get [1,2] as input - expect 0 as output
- get [1,3] as input - expect 2 as output
- get [3,5] as input - expect 6 as output

*/


describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});
});
