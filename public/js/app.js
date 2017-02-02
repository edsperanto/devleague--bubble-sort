var itemList = [];
var currOp = [];

(function initialize() {
	itemList = document.getElementsByClassName('item');
	Array.prototype.forEach.call(itemList, item => vBubble.append(item.innerText));
	vBubble.reset();
})();

document.getElementById('title').addEventListener('click', () => {
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
});
