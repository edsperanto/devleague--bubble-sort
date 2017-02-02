module.exports = function(arr) {
	let notDone = true;
	if(arr instanceof Array == false) {
		return `Expected array, received ${typeof arr}`;
	}
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) {
			return `Item '${arr[i]}' is ${typeof arr[i]} instead of number`;
		}
	}
	while(notDone) {
		notDone = false;
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i + 1]) {
				let temp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temp;
				notDone = true;
			}
		}
	}
	return arr;
}
