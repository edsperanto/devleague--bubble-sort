var arr = [0,1,1,0];
let left = [];
let right = [];
let pivot = arr[0];

arr.forEach(num => {
	if(num < pivot) {
		left.push(num);
	}else{
		right.push(num);
	}
});
console.log('left: ', left);
console.log('right: ', right);
console.log(left.length, right.length);
console.log(left.concat(right));
console.log(left.length > 2);
console.log(right.length > 2);
console.log(left = left);
