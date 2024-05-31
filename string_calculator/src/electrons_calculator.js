// StringCalculator.js
function ElectronsCalculator() {}
ElectronsCalculator.prototype.calculate = function(array) {
	let result = 0;
for(let i = 0; i < array.length; i++) {
	if(array[i] == 3) {
		result += 2;
	} else if(array[i] == 5) {
		result += 4;
	} else {
		result += 0;
	}
}
	return result;
};


