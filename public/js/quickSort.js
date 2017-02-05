module.exports = function quickSort(arr) {
	let left, right;
	let pivot = arr[0];
	left = right = [];

	arr.forEach(num => {
		if(num < pivot) {
			left.push(num);
		}else{
			right.push(num);
		}
	});

	left = (left.length > 1) ? quickSort(left) : left;
	right = (right.length > 1) ? quickSort(right) : right;
	return left.concat(right);
}
