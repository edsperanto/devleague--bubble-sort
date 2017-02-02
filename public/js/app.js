var vBubble = (function() {

	var arr = [];
	var i = 0;
	var round = 0;
	var notDone = true;
	var disorder = false;
	var stack = [];
	var returnObj = {
		round: 0,
		action: null,
		opID: []
	}

	function _append(num) {
		arr.push(num);
	}

	function _remove(id) {
		arr.splice(id, 1);
	}

	function _loopThru() {
		if(i < arr.length - 1) {
			let needSwitch = arr[i] > arr[i+1];
			returnObj.action = 'compare';
			returnObj.opID = [i, i+1];
			if(needSwitch) {
				notDone = true;
				disorder = true;
			}
			i++;
			return returnObj;
		}else{
			i = 0;
			stack.pop();
		}
	}

	function _repeat() {
		if(notDone) {
			stack.push(_loopThru);
			_next();
		}else{
			returnObj.action = 'end';
			return returnObj;
		}
	}

	function _reset() {
		stack.push(_repeat);
		stack.push(_loopThru);
	}

	function _next() {
		if(disorder) {
			disorder = false;
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}else{
			stack[stack.length-1]();
		}
	}

	return {
		append: _append,
		remove: _remove,
		reset: _reset,
		next: _next
	}

})();

for(let i = 1; i <= 10; i++) {
	vBubble.append(document.getElementById(i).innerText);
}
vBubble.reset();
