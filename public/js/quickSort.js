module.exports = function quickSort(arr) {
	let l = [];
	let r = [];
	let p = [];

	arr.forEach(num => ((arr[0] === num) ? p : ((arr[0] > num) ? l : r)).push(num));
	l = (l.length > 2) ? quickSort(l) : ((l.length === 2) ? [l[1], l[0]] : l);
	r = (r.length > 2) ? quickSort(r) : ((r.length === 2) ? [r[1], r[0]] : r);

	return l.concat(p.concat(r));
}
