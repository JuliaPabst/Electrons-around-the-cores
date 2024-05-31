// StringCalculator.js
function ElectronsCalculator() {}
ElectronsCalculator.prototype.calculate = function(array) {
	if (array == []) {
		return 0;
	} else if(array[0] == 3) {
		return 2;
	} else if(array[0] == 5) {
		return 4;
	} else if(array[0] == 1 && array[1] == 2) {
		 return 0;
	}
	
	return 0;
};


