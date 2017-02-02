const allowChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '.', '-'];
const editor = document.getElementById('edit');
const nextBtn = document.getElementById('next');
const autoBtn = document.getElementById('auto');
var itemList = [];
var currOp = [];
editor.value = "5 1 4 2 8 0 7 3 9 6";

function reset() {
	pause();
	itemList = [];
	currOp = [];
	vBubble.reset();
	clearTimeout(window.timer);
	document.getElementById('round').innerText = '0';
	document.getElementById('item-container').innerHTML = '';
}

function initialize() {
	let i = 0;
	let numList = editor.value.trim().split(' ');
	reset();
	numList.forEach(num => {
		if(isNaN(Number(num)) || num == '') { return false; }
		document.getElementById('item-container').innerHTML 
			+= `<div class="item" id=${++i}>${Number(num)}</div>`;
	});
	itemList = document.getElementsByClassName('item');
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
	else{ initialize(); }
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
	}
	center(itemList[op1]);
}

function pause() {
	clearTimeout(window.timer);
	autoBtn.innerText = "Manual";
	nextBtn.innerText = "Next";
}

function auto() {
	switch(autoBtn.innerText) {
		case "Manual":
			window.timer = setInterval(next, 1000);
			autoBtn.innerText = "Slow";
			nextBtn.innerText = "Pause";
			break;
		case "Slow":
			clearTimeout(window.timer);
			window.timer = setInterval(next, 100);
			autoBtn.innerText = "Fast";
			break;
		case "Fast":
			pause();
			autoBtn.innerText = "Manual";
			break;
		default:
			setInterval(() => {
				alert("This is what you get for trying to hack me");
			}, 500);
	}
}

function nextHandler() {
	if(this.innerText == 'Next') {
		next();
	}else{
		pause();
	}
}

initialize();
document.getElementById('title').addEventListener('click', edit);
nextBtn.addEventListener('click', nextHandler);
autoBtn.addEventListener('click', auto);
