/**
 * 跨浏览器事件工具类
 * @type {{addHandler: EventUtil.addHandler, removeHandler: EventUtil.removeHandler}}
 */
var EventUtil = {
	/**
	 * 绑定事件
	 * @param element 元素
	 * @param type 事件类型，如click
	 * @param handler 函数
	 */
	addHandler: function (element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) { // ie<=8
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler; // 一般不会走这里，这里不支持绑定多个同类型的事件
		}
	},
	/**
	 * 解绑事件
	 * @param element
	 * @param type
	 * @param handler
	 */
	removeHandler: function (element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent) { // ie<=8
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},

	/**
	 * 获取event，ie<=8 onclick = function(event),event参数为空
	 * @param event
	 * @returns {*|Event}
	 */
	getEvent: function (event) {
		return event || window.event;
	},

	/**
	 * 获取事件源，ie<=8不支持event.target
	 * @param event
	 * @returns {string|Node|EventTarget|*|Object}
	 */
	getTarget: function (event) {
		return event.target || event.srcElement;
	},

	/**
	 * 阻止浏览器默认行为
	 * @param event
	 */
	preventDefault: function (event) {
		if(event.preventDefault) {
			event.preventDefault(event);
		} else {
			event.returnValue = false;
		}
	},
	/**
	 * 停止冒泡
	 * @param event
	 */
	stopPropagation: function (event) {
		if(event.stopPropagation) {
			event.stopPropagation(event);
		} else {
			event.cancelBubble = true;
		}
	},

	/**
	 * 获取滚动数据
	 * @param event
	 */
	getWheelDelta: function (event) {
		if(event.wheelDelta) {
			return event.wheelDelta; // 前滚返回120，后滚返回-120
		} else {
			return -event.detail * 40; // firefox 前滚返回-3，后滚返回3
		}
	},

	/**
	 * 获取press事件按键ascii码值
	 * @param event
	 */
	getCharCode: function (event) {
		if(typeof event.charCode == 'number') { // ie<=8 undefined
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},
	/**
	 * 获取粘贴板内容
	 * @param event
	 * @returns {string}
	 */
	getClipboardText: function (event) {
		var clipboardData = (event.clipboardData || window.clipboardData);
		return clipboardData.getData("text");
	}

}
