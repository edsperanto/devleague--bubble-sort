module.exports = function selectionSort(arr) {
	if(arr instanceof Array == false) {
		return `Expected array, received ${typeof arr}`;
	}
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) {
			return `Item '${arr[i]}' is ${typeof arr[i]} instead of number`;
		}
	}
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
		tmp = arr[currIdx];
		arr[currIdx] = arr[smallestIdx];
		arr[smallestIdx] = tmp;
	}
	return arr;
}
