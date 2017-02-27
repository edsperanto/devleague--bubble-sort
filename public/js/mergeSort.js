const isValidArr = require('./isValidArr');
module.exports = function mergeSort(arr) {
	let newArr = [];

	if(isValidArr(arr)) return isValidArr(arr);

	if(arr.length <= 1) {
		newArr = arr;
	} else if(arr.length === 2) {
		if(arr[0] > arr[1])
			[arr[0], arr[1]] = [arr[1], arr[0]];
		newArr = arr;
	} else {
		let arr1 = arr.splice(0, arr.length / 2);
		let arr2 = arr;
		let totalLen;
		let smallest;
		arr1 = mergeSort(arr1);
		arr2 = mergeSort(arr2);
		totalLen = arr1.length + arr2.length;	
		while(totalLen--) {
			if(arr1.length === 0) {
				arr2.forEach(num => newArr.push(num));
				break;
			}
			if(arr2.length === 0) {
				arr1.forEach(num => newArr.push(num));
				break;
			}
			smallest = (arr1[0] < arr2[0]) ? arr1 : arr2;
			smallest = smallest.splice(0, 1)[0];
			newArr.push(smallest);
		}
	}

	return newArr;
}
