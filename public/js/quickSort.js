module.exports = function quickSort(arr) {
	let left = [], right = [], pivots = [];
	if(arr instanceof Array == false) {
		return `Expected array, received ${typeof arr}`;
	}
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) {
			return `Item '${arr[i]}' is ${typeof arr[i]} instead of number`;
		}
	}
	arr.forEach(num => ((arr[0] === num) ? pivots : ((arr[0] > num) ? left : right)).push(num));
	left = (left.length > 2) ? quickSort(left) : ((left.length === 2) ? [left[1], left[0]] : left);
	right = (right.length > 2) ? quickSort(right) : ((right.length === 2) ? [right[1], right[0]] : right);
	return left.concat(pivots.concat(right));
}
