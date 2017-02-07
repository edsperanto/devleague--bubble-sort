module.exports = function selectionSort(arr) {
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
}
