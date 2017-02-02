var itemList = [];
var currOp = [];

(function initialize() {
	itemList = document.getElementsByClassName('item');
	for(let i = 0; i < itemList.length; i++) {
		vBubble.append(itemList[i].innerText);
	}
	vBubble.reset();
})();
console.log(itemList);

document.getElementById('title').addEventListener('click', () => {
	let output = vBubble.next();
	let op1 = output.opID[0];
	let op2 = output.opID[1];
	console.log(output);
	switch(output.action) {
		case "compare":
			currOp.forEach(item => {
				item.style.backgroundColor = "#6991AC";
			});
			currOp = [itemList[op1], itemList[op2]];
			itemList[op1].style.backgroundColor = "green";
			itemList[op2].style.backgroundColor = "green";
			break;
		case "switch":
			break;
		case "end":
			break;
		default:
			console.log('invalid action');
	}
});
