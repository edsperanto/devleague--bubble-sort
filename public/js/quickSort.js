module.exports = function q(y) {
	let l = [], r = [], p = [], g = 'length';
	y.forEach(n => ((y[0] === n) ? p : ((y[0] > n) ? l : r)).push(n));
	l = (l[g] > 2) ? q(l) : ((l[g] === 2) ? [l[1], l[0]] : l);
	r = (r[g] > 2) ? q(r) : ((r[g] === 2) ? [r[1], r[0]] : r);

	return l.concat(p.concat(r));
}
