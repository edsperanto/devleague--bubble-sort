module.exports = function(arr) {
	let notDone, temp;
	notDone = true;
	while(notDone) {
		notDone = false;
		for(let i = 0; i < arr.length - 2; i++) {
			if(arr[i] > arr[i + 1]) {
				temp = arr[i + 1];
				arr[i + 1] = arr[i];
				arr[i] = temp;
				notDone = true;
			}
		}
	}
	return arr;
}
