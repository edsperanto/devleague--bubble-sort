# Sorting Algorithms

## Bubble Sort

### ELI5

Look at each number in a list and compare it to the number on its right.

If it is bigger than the number on its right, swap them.

Repeat this process until there are no more numbers to swap.

### Pseudocode

```
while not sorted
	loop through array
		if number is bigger than number on its right
		swap the two numbers 
```

### Performance

Best case scenario: O(n)

Worst case scenario: O(n^2)

## Insertion Sort

### ELI5

Look at each number in a list and compare it to the number on its left.

If it is smaller than the number on its left, swap them.

Repeat this process until there are no more numbers to swap.

### Pseudocode

```
loop through array
	while current number smaller than number on its left
		swap the two numbers
		compare with one more number to the left
```

### Performance

Best case scenario: O(n)

Worst case scenario: O(n^2)

## Selection Sort

### ELI5

Look for the smallest number in array.

When found, push number to end of sorted array.

Repeat until original array is empty.

### Pseudocode

```
prepare new array to put numbers in
find smallest number in original array until empty
	put smallest number at the end of new array
```

### Performance

Best case scenario: O(n^2)

Worst case scenario: O(n^2)

## Quick Sort

### ELI5

Find a number in array as divider.

Numbers smaller than divider will group to its left.

Numbers greater than divider will group to its right.

Repeat this process for these small groups until it is indivisible.

### Pseudocode

```
Use first number in unsorted array as pivot.
Loop through remaining array
	if number smaller than pivot
		push to left array
	else
		push to right array
	if left array has more than 2 numbers
		quick sort left array
	else
		if left array has 2 numbers
			swap them
		else
			leave left array as it is
		if right array has 2 numbers
			swap them
		else
			leave right array as it is
return left array concat pivot concat right array
```

### Performance

Best case scenario: O(n log n)

Worst case scenario: O(n^2)

## Merge Sort

### ELI5

Break array into smaller pieces until there is one number in each piece.

Sort and group each small piece one at a time.

Repeat until all small pieces are grouped back to size of original array.

### Pseudocode

```
if array has only 1 number
	return array
if array has only 2 numbers
	if first number is greater than second number
		swap them
	return array
if array has more than 2 numbers
	cut array in half to arr1 and arr2
	merge sort arr1 and arr2
	repeat until new array is equal to length of arr1 and arr2 combined
		if arr1 is empty
			append rest of arr2 to new array
			break out of loop
		if arr2 is empty
			append rest of arr1 to new array
			break out of loop
		find smaller number among first item in arr1 and arr2
		push smaller number into new array
```

### Performance

Best case scenario: O(n log n)

Worst case scenario: O(n log n)
