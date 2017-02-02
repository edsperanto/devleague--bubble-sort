var numList;
var itemList = [];
var currOp = [];
var allowChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '.'];
var editor = document.getElementById('edit');
editor.value = "5 1 4 2 8 0 7 3 9 6";


function initialize() {
	let i = 0;
	let frag = document.createDocumentFragment();
	numList = editor.value.trim().split(' ');
	numList.forEach(num => {
		let item = document.createElement('div');
		if(isNaN(Number(num)) || num == '') { return false; }
		num = Number(num);
		item.className = 'item';
		item.id = ++i;
		item.innerText = num;
		frag.appendChild(item);
	});
	document.getElementById('item-container').innerHTML = '';
	document.getElementById('item-container').appendChild(frag);
	itemList = document.getElementsByClassName('item');
	vBubble.reset();
	currOp = [];
	Array.prototype.forEach.call(itemList, item => vBubble.append(item.innerText));
};

function center(div) {
	let divBottom = div.offsetTop + div.getBoundingClientRect().height;
	let wHeight = window.innerHeight;
	window.scrollTo(0, divBottom - wHeight / 2);
}

function edit() {
	let notValid = false;
	for(let i = 0; i < editor.value.length; i++) {
		if(notValid) { break; }
		notValid = true;
		allowChar.forEach(char => {
			if(editor.value[i] == char) { notValid = false; }
		})
	}
	if(notValid) { alert('numbers only!'); }
	else{ initialize() }
}

function next() {
	let output = vBubble.next();
	let op1 = output.opID[0];
	let op2 = output.opID[1];
	switch(output.action) {
		case "compare":
			let compare = Number(itemList[op1].innerText) > Number(itemList[op2].innerText);
			currOp.forEach(item => item.style.backgroundColor = "#6991AC");
			currOp = [itemList[op1], itemList[op2]];
			currOp.forEach(item => item.style.backgroundColor = compare ? "#E74C3C" : "#27AE60");
			document.getElementById('round').innerText = output.round;
			break;
		case "switch":
			let temp = itemList[op1].innerText;
			itemList[op1].innerText = itemList[op2].innerText;
			itemList[op2].innerText= temp;
			break;
		case "end":
			Array.prototype.forEach.call(itemList, item => item.style.backgroundColor = "#27AE60");
			break;
		default:
			console.log('valid action');
	}
	center(itemList[op1]);
}

initialize();
document.getElementById('title').addEventListener('click', edit);
document.getElementById('next').addEventListener('click', next);
