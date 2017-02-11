module.exports = function(arr) {
	if(arr instanceof Array == false) {
		return `Expected array, received ${typeof arr}`;
	}
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) {
			return `Item '${arr[i]}' is ${typeof arr[i]} instead of number`;
		}
	}
}
