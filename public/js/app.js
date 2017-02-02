var itemList = [];
var currOp = [];

(function initialize() {
	itemList = document.getElementsByClassName('item');
	Array.prototype.forEach.call(itemList, item => vBubble.append(item.innerText));
	vBubble.reset();
})();

function center(div) {
	let divBottom = div.offsetTop + div.getBoundingClientRect().height;
	let wHeight = window.innerHeight;
	window.scrollTo(0, divBottom - wHeight / 2);
}

document.getElementById('next').addEventListener('click', () => {
	let output = vBubble.next();
	let op1 = output.opID[0];
	let op2 = output.opID[1];
	switch(output.action) {
		case "compare":
			let compare = Number(itemList[op1].innerText) > Number(itemList[op2].innerText);
			currOp.forEach(item => item.style.backgroundColor = "#6991AC");
			currOp = [itemList[op1], itemList[op2]];
			currOp.forEach(item => item.style.backgroundColor = compare ? "#E74C3C" : "#27AE60");
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
			console.log('invalid action');
	}
	center(itemList[op1]);
});
