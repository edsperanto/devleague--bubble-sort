var vBubble = (function() {

	var arr = [];
	var i = 0;
	var notDone = true;
	var disorder = false;
	var stack = [];
	var returnObj = {
		round: 1,
		action: null,
		opID: []
	}

	function _append(num) {
		arr.push(Number(num));
	}

	function _remove(id) {
		arr.splice(id, 1);
	}

	function _loopThru() {
		if(i < arr.length - returnObj.round) {
			let needSwitch = arr[i] > arr[i+1];
			returnObj.action = 'compare';
			returnObj.opID = [i, i+1];
			if(needSwitch) {
				notDone = true;
				disorder = true;
			}else{
				i++;
			}
			return returnObj;
		}else{
			i = 0;
			stack.pop();
			return _next();
		}
	}

	function _repeat() {
		if(notDone) {
			returnObj.round++;
			stack.push(_loopThru);
			notDone = false;
			return _next();
		}else{
			returnObj.action = 'end';
			returnObj.opID = arr;
			return returnObj;
		}
	}

	function _reset() {
		arr = [];
		returnObj.round = 1;
		stack.push(_repeat);
		stack.push(_loopThru);
	}

	function _next() {
		if(disorder) {
			disorder = false;
			returnObj.action = 'switch';
			returnObj.opID = [i, i+1];
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			i++;
			return returnObj;
		}else{
			return stack[stack.length-1]();
		}
	}

	return {
		append: _append,
		remove: _remove,
		reset: _reset,
		next: _next
	}

})();
