(function initialize() {
	for(let i = 1; i <= 10; i++) {
		vBubble.append(document.getElementById(i).innerText);
	}
	vBubble.reset();
})();

document.getElementById('title').addEventListener('click', () => {
	let output = vBubble.next();
	console.log(output.opID[0], output.opID[1]);
	console.log(vBubble.arr);
});
