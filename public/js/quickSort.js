module.exports = function quickSort(arr) {
	let left = [], right = [], pivots = [];

	arr.forEach(num => ((arr[0] === num) ? pivots : ((arr[0] > num) ? left : right)).push(num));
	left = (left.length > 2) ? quickSort(left) : ((left.length === 2) ? [left[1], left[0]] : left);
	right = (right.length > 2) ? quickSort(right) : ((right.length === 2) ? [right[1], right[0]] : right);

	return left.concat(pivots.concat(right));
}
