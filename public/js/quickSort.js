module.exports = function q(y) {
	let l = [], r = [], p = [], g = 'length';
	let f = a => a = (a[g] > 2) ? q(a) : ((a[g] === 2) ? [a[1], a[0]] : a);
	y.forEach(n => ((y[0] === n) ? p : ((y[0] > n) ? l : r)).push(n));
	l = f(l); r = f(r);
	return l.concat(p.concat(r));
}
