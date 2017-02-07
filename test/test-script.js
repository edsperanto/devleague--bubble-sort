const chai = require('chai');
const should = chai.should();
const bubbleSort = require('../public/js/bubbleSort');
const quickSort = require('../public/js/quickSort');
const insertionSort = require('../public/js/insertionSort');
const selectionSort = require('../public/js/selectionSort');

describe('Bubble Sort', () => {
	it('should sort array [5,1,4,2,8]', () => {
		let test = bubbleSort([5,1,4,2,8]);
		test.should.deep.equal([1,2,4,5,8]);
	});
	it('should sort array [0,0,0,0]', () => {
		let test = bubbleSort([0,0,0,0]);
		test.should.deep.equal([0,0,0,0]);
	});
	it('should sort array [8,8,8,6,8]', () => {
		let test = bubbleSort([8,8,8,6,8]);
		test.should.deep.equal([6,8,8,8,8]);
	});
	it('should sort array [0.2,3.4,63,0,2.8]', () => {
		let test = bubbleSort([0.2,3.4,63,0,2.8]);
		test.should.deep.equal([0,0.2,2.8,3.4,63]);
	});
});

describe('Bubble Sort edge cases', () => {
	it('should allow empty array', () => {
		let test = bubbleSort([]);
		test.should.deep.equal([]);
	});
	it('should allow array with one number', () => {
		let test = bubbleSort([9]);
		test.should.deep.equal([9]);
	});
	it('should reject non-numbers in array', () => {
		let test = bubbleSort([5,"four",3,2,1]);
		test.should.equal('Item \'four\' is string instead of number');
	});
	it('should reject strings', () => {
		let test = bubbleSort("ayy lmao");
		test.should.equal('Expected array, received string');
	});
	it('should reject numbers', () => {
		let test = bubbleSort(666);
		test.should.equal('Expected array, received number');
	});
	it('should reject booleans', () => {
		let testTrue = bubbleSort(true);
		testTrue.should.equal('Expected array, received boolean');
		let testFalse = bubbleSort(false);
		testFalse.should.equal('Expected array, received boolean');
	});
	it('should reject objects', () => {
		let test = bubbleSort({});
		test.should.equal('Expected array, received object');
	});
});

describe('Quick Sort', () => {
	it('should sort array [5,1,4,2,8]', () => {
		let test = quickSort([5,1,4,2,8]);
		test.should.deep.equal([1,2,4,5,8]);
	});
	it('should sort array [0,0,0,0]', () => {
		let test = quickSort([0,0,0,0]);
		test.should.deep.equal([0,0,0,0]);
	});
	it('should sort array [8,8,8,6,8]', () => {
		let test = quickSort([8,8,8,6,8]);
		test.should.deep.equal([6,8,8,8,8]);
	});
	it('should sort array [0.2,3.4,63,0,2.8]', () => {
		let test = quickSort([0.2,3.4,63,0,2.8]);
		test.should.deep.equal([0,0.2,2.8,3.4,63]);
	});
});

describe('Quick Sort edge cases', () => {
	it('should allow empty array', () => {
		let test = quickSort([]);
		test.should.deep.equal([]);
	});
	it('should allow array with one number', () => {
		let test = quickSort([9]);
		test.should.deep.equal([9]);
	});
	it('should reject non-numbers in array', () => {
		let test = quickSort([5,"four",3,2,1]);
		test.should.equal('Item \'four\' is string instead of number');
	});
	it('should reject strings', () => {
		let test = quickSort("ayy lmao");
		test.should.equal('Expected array, received string');
	});
	it('should reject numbers', () => {
		let test = quickSort(666);
		test.should.equal('Expected array, received number');
	});
	it('should reject booleans', () => {
		let testTrue = quickSort(true);
		testTrue.should.equal('Expected array, received boolean');
		let testFalse = quickSort(false);
		testFalse.should.equal('Expected array, received boolean');
	});
	it('should reject objects', () => {
		let test = quickSort({});
		test.should.equal('Expected array, received object');
	});
});

describe('Insertion Sort', () => {
	it('should sort array [5,1,4,2,8]', () => {
		let test = insertionSort([5,1,4,2,8]);
		test.should.deep.equal([1,2,4,5,8]);
	});
	it('should sort array [0,0,0,0]', () => {
		let test = insertionSort([0,0,0,0]);
		test.should.deep.equal([0,0,0,0]);
	});
	it('should sort array [8,8,8,6,8]', () => {
		let test = insertionSort([8,8,8,6,8]);
		test.should.deep.equal([6,8,8,8,8]);
	});
	it('should sort array [0.2,3.4,63,0,2.8]', () => {
		let test = insertionSort([0.2,3.4,63,0,2.8]);
		test.should.deep.equal([0,0.2,2.8,3.4,63]);
	});
});

describe('Insertion Sort edge cases', () => {
	it('should allow empty array', () => {
		let test = insertionSort([]);
		test.should.deep.equal([]);
	});
	it('should allow array with one number', () => {
		let test = insertionSort([9]);
		test.should.deep.equal([9]);
	});
	it('should reject non-numbers in array', () => {
		let test = insertionSort([5,"four",3,2,1]);
		test.should.equal('Item \'four\' is string instead of number');
	});
	it('should reject strings', () => {
		let test = insertionSort("ayy lmao");
		test.should.equal('Expected array, received string');
	});
	it('should reject numbers', () => {
		let test = insertionSort(666);
		test.should.equal('Expected array, received number');
	});
	it('should reject booleans', () => {
		let testTrue = insertionSort(true);
		testTrue.should.equal('Expected array, received boolean');
		let testFalse = insertionSort(false);
		testFalse.should.equal('Expected array, received boolean');
	});
	it('should reject objects', () => {
		let test = insertionSort({});
		test.should.equal('Expected array, received object');
	});
});

describe('Selection Sort', () => {
	it('should sort array [5,1,4,2,8]', () => {
		let test = selectionSort([5,1,4,2,8]);
		test.should.deep.equal([1,2,4,5,8]);
	});
	it('should sort array [0,0,0,0]', () => {
		let test = selectionSort([0,0,0,0]);
		test.should.deep.equal([0,0,0,0]);
	});
	it('should sort array [8,8,8,6,8]', () => {
		let test = selectionSort([8,8,8,6,8]);
		test.should.deep.equal([6,8,8,8,8]);
	});
	it('should sort array [0.2,3.4,63,0,2.8]', () => {
		let test = selectionSort([0.2,3.4,63,0,2.8]);
		test.should.deep.equal([0,0.2,2.8,3.4,63]);
	});
});

describe('Selection Sort edge cases', () => {
	it('should allow empty array', () => {
		let test = selectionSort([]);
		test.should.deep.equal([]);
	});
	it('should allow array with one number', () => {
		let test = selectionSort([9]);
		test.should.deep.equal([9]);
	});
	it('should reject non-numbers in array', () => {
		let test = selectionSort([5,"four",3,2,1]);
		test.should.equal('Item \'four\' is string instead of number');
	});
	it('should reject strings', () => {
		let test = selectionSort("ayy lmao");
		test.should.equal('Expected array, received string');
	});
	it('should reject numbers', () => {
		let test = selectionSort(666);
		test.should.equal('Expected array, received number');
	});
	it('should reject booleans', () => {
		let testTrue = selectionSort(true);
		testTrue.should.equal('Expected array, received boolean');
		let testFalse = selectionSort(false);
		testFalse.should.equal('Expected array, received boolean');
	});
	it('should reject objects', () => {
		let test = selectionSort({});
		test.should.equal('Expected array, received object');
	});
});

