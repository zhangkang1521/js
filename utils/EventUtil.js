/**
 * 跨浏览器绑定事件，解绑事件
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
	}
}
