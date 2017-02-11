const isValidArr = require('./isValidArr');
module.exports = function bubbleSort(arr) {
	let notDone = true;
	if(isValidArr(arr)) return isValidArr(arr);
	while(notDone) {
		notDone = false;
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				notDone = true;
			}
		}
	}
	return arr;
}
