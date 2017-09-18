/**
 * 模拟最简单jQuery
 */
(function (window, undefined) {

	var jQuery = (function () {
		var jQuery = function (selector, context) {
			return new jQuery.fn.init( selector, context); // new $('xx')，可以写成 $('xx')
		};

		jQuery.fn = jQuery.prototype = { // fn只是prorotype的别名，方便书写而已
			constructor: jQuery,
			init: function ( selector, context) {
				// 各种判断，然后返回jQuery对象
				var elem = document.getElementById(selector);
				this[0] = elem;
				this.length = 1;
				this.selector = selector;
				return this;
			},

			selector: '',
			jquery: "1.0.0",
			length: 0,

			size: function() {
				return this.length;
			}
		};
		jQuery.fn.init.prototype = jQuery.fn; // 保证可以调用new jQuery.fn.init()能调用jQuery的方法，如size()

		return jQuery;

	})(); // 这个闭包也可以去掉(这样写的好处是，将jQuery构造模块与其他模块分开，实现高内聚，低耦合)

	window.jQuery = window.$ = jQuery; // 仅把$,jQuery暴露到全局

})(window);