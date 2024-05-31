// StringCalculator.js
function ElectronsCalculator() {}
ElectronsCalculator.prototype.calculate = function(array) {
let result = 0;
if(array.length < 4) {
	return -1;
} else if(array.length > 6) {
	return -2;
} else {
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
}

};


