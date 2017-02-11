const isValidArr = require('./isValidArr');
module.exports = function insertionSort(arr) {
	if(isValidArr(arr)) return isValidArr(arr);
	for(let i = 0; i < arr.length; i++) {
		while(arr[i] < arr[i-1]) {
			[arr[i], arr[i-1]] = [arr[i-1], arr[i]];
			--i;
		}
	}
	return arr;
}
