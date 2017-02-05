module.exports = function insertionSort(arr) {
	if(arr instanceof Array == false) {
		return `Expected array, received ${typeof arr}`;
	}
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) {
			return `Item '${arr[i]}' is ${typeof arr[i]} instead of number`;
		}
	}
	for(let i = 0; i < arr.length; i++) {
		while(arr[i] < arr[i-1]) {
			let tmp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = tmp;
			++i;
		}
	}
	return arr;
}
