module.exports = function quickSort(arr) {
	let same = true;
	let left = [];
	let right = [];
	let pivot = [arr[0]];

	arr.forEach(num => {
		if(pivot[0] == num) {
			pivot.push(num);
		}else if(pivot[0] > num) {
			left.push(num);
		}else{
			right.push(num);
		}
	});

	if(pivot.length > 1) {
		pivot.pop();
	}

	function swap(arr) {
		if(arr.length !== 1 && arr.length !== 0) {
			let tmp = arr[0];
			arr[0] = arr[1];
			arr[1] = tmp;
		}
		return arr;
	}

	left = (left.length > 2) ? quickSort(left) : swap(left);
	right = (right.length > 2) ? quickSort(right) : swap(right);

	return left.concat(pivot.concat(right));
}
