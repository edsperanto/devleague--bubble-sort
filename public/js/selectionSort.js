const isValidArr = require('./isValidArr');
module.exports = function selectionSort(arr) {
	if(isValidArr(arr)) return isValidArr(arr);
	for(let currIdx = 0; currIdx < arr.length; currIdx++) {
		let tmp;
		let smallest = arr[currIdx];
		let smallestIdx = currIdx;
		for(let i = currIdx; i < arr.length; i++) {
			if(arr[i] < smallest) {
				smallest = arr[i];
				smallestIdx = i;
			}
		}
		[arr[currIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[currIdx]];
	}
	return arr;
}
