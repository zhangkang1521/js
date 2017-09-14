(function(window, $, nova) {
	"use strict";
	if (nova.dialog) {
		return false;
	}
	var $document = $(document);
	var $body = $("body");
	var count = 0;
	var timeStamp = +(new Date());
	var template = '' + '<div class="nova-dialog">' + '    <div class="nova-dialog-close"><i></i></div>' + '    <div class="nova-dialog-header"></div>' + '    <div class="nova-dialog-body"></div>' + '    <div class="nova-dialog-footer"></div>' + '</div>';

	function Factory(options) {
		options = $.extend({}, Factory.defaults, options);
		var dialogId = timeStamp + count;
		count++;
		var dialog = new Dialog(options, dialogId);
		dialog.id = dialogId;
		Dialog.list[dialogId] = dialog;
		return dialog;
	}
	Factory.defaults = {
		template: template,
		cloneEvent: true,
		showClose: true,
		buttons: null,
		fixed: true,
		masked: true,
		draggable: false,
		topFixed: false,
		topOffset: 60,
		initHeight: "300px",
		initCallback: null,
		beforeClosingCallback: null,
		okCallback: null,
		cancelCallback: null,
		okText: "确定",
		cancelText: "取消",
		okClassName: "btn-orange",
		cancelClassName: "",
		content: "",
		contentClone: true,
		title: "消息提醒",
		time: null,
		width: "",
		height: "",
		wrapClass: "",
		maskClass: "nova-overlay",
		zIndex: 1
	};

	function Dialog(options, dialogId) {
		this.init(options, dialogId);
	}
	Dialog.list = {};
	$(window).on("resize", function() {
		for (var id in Dialog.list) {
			var dialog = Dialog.list[id];
			dialog.resize();
		}
	});
	Dialog.prototype = {
		version: "1.0.0.0",
		construction: Dialog,
		init: function(options, dialogId) {
			this.options = options;
			this.defaults = Factory.defaults;
			var self = this;
			self.setButton(options);
			var template = this.options.template;
			self.wrap = $(template);
			self.wrap.attr("data-id", dialogId);
			var wrap = self.wrap;
			wrap.addClass(options.wrapClass);
			self.buttons();
			self.size(options.width, options.height);
			self.title(options.title);
			self.content(options.content);
			if (options.zIndex === null) {
				options.zIndex = "auto";
			}
			self.zIndex(options.zIndex);
			self.time(options.time);
			if (options.masked === true) {
				setTimeout(function() {
					self.mask(options);
				}, 0);
			}
			self.bindEvent(options);
			if (options.draggable === true) {
				self.drag();
			}
			self.showClose(options.showClose);
			self.wrap.hide();
			$body.append(self.wrap);
			setTimeout(function() {
				self.resize();
				self.wrap.show();
			}, 0);
			if (typeof options.initCallback === "function") {
				options.initCallback.call(this);
			}
		},
		loading: function() {
			this.content('<div class="nova-dialog-body-loading"><i></i><br>正在加载中...</div>');
		},
		showClose: function(showClose) {
			if (showClose) {
				this.wrap.find(".nova-dialog-close").show();
			} else {
				this.wrap.find(".nova-dialog-close").hide();
			}
		},
		drag: function() {
			var wrap = this.wrap;
			var dialogTop;
			var dialogLeft;
			var $header = wrap.find(".nova-dialog-header");
			var pageX;
			var pageY;
			$header.on("mousedown", function(e) {
				wrap.addClass("nova-dialog-moving");
				pageX = e.pageX;
				pageY = e.pageY;
				$body.on("mousemove", mouseMoveHandler);
			});

			function mouseMoveHandler(e) {
				var pageXNext = e.pageX;
				var pageYNext = e.pageY;
				var x = pageXNext - pageX;
				var y = pageYNext - pageY;
				pageX = pageXNext;
				pageY = pageYNext;
				dialogTop = parseInt(wrap.css("top"));
				dialogLeft = parseInt(wrap.css("left"));
				wrap.css({
					top: dialogTop + y,
					left: dialogLeft + x
				});
			}
			$document.on("mouseup", function(e) {
				$body.off("mousemove", mouseMoveHandler);
				wrap.removeClass("nova-dialog-moving");
			});
		},
		time: function(time) {
			var self = this;
			var timer = this.timer;
			if (timer) {
				clearTimeout(timer);
			}
			if (time) {
				this.timer = setTimeout(function() {
					self.close();
				}, time);
			}
		},
		zIndex: function(index) {
			this.wrap.css("zIndex", index);
		},
		setButton: function() {
			var options = this.options;
			if (options.buttons && options.buttons.push) {} else {
				options.buttons = [];
			}
			if (options.okCallback) {
				var okButton = {
					className: options.okClassName,
					text: options.okText,
					callback: options.okCallback
				};
				options.buttons.push(okButton)
			}
			if (options.cancelCallback) {
				var cancelButton = {
					className: options.cancelClassName,
					text: options.cancelText,
					callback: options.cancelCallback
				};
				options.buttons.push(cancelButton)
			}
		},
		buttons: function() {
			var buttons = this.options.buttons;
			var size = buttons.length;
			var className;
			var $footer = this.wrap.find(".nova-dialog-footer");
			if (size == 0) {
				$footer.hide();
			}
			for (var i = 0; i < size; i++) {
				var button = buttons[i];
				var $button = $("<span class='btn'></span>");
				if ($.isArray(button.className)) {
					for (var j = 0; j < button.className.length; j++) {
						className += button.className[j] + " ";
					}
				} else {
					if (button.className === undefined) {
						className = ""
					} else {
						className = button.className
					}
				}
				$button.attr({
					"class": "btn " + className
				}).html(button.text);
				$footer.append($button);
			}
		},
		bindEvent: function() {
			var self = this;
			self.wrap.on("click", ".nova-dialog-close", {
				self: self
			}, self.closeDialogHandler);
			self.wrap.on("click", ".nova-dialog-footer>*", {
				self: self
			}, self.buttonHandler)
		},
		buttonHandler: function(e) {
			var self = e.data.self;
			var $this = $(this);
			var index = $this.index();
			var button = self.options.buttons[index];
			var callback = button.callback;
			if (callback && $.isFunction(callback)) {
				var ret = callback.call(self);
				if (ret === false) {} else {
					self.close();
				}
			} else {
				self.close();
			}
		},
		closeDialogHandler: function(e) {
			var self = e.data.self;
			self.close();
		},
		close: function(force) {
			var contentClone = this.options.contentClone;
			var beforeunload = this.options.beforeClosingCallback;
			if (!force && beforeunload && $.isFunction(beforeunload)) {
				var ret = beforeunload.call(this);
				if (ret === false) {
					return;
				}
			}
			if (!contentClone) {
				if (this._elemBack) {
					this._elemBack();
				}
			}
			this.wrap.remove();
			this.mask();
			delete Dialog.list[this.id];
		},
		title: function(title) {
			var $header = this.wrap.find(".nova-dialog-header");
			if (title === null) {
				$header.hide();
				this.wrap.addClass("nova-dialog-no-title");
			} else {
				$header.html(title);
			}
		},
		content: function($content) {
			var self = this;
			if (this._elemBack) {
				this._elemBack();
			}
			var $body = this.wrap.find(".nova-dialog-body");
			var contentClone = this.options.contentClone;
			if (this.options.url) {
				this.wrap.addClass("nova-dialog-custom");
				var $iframe = $('<iframe src="' + $content + '" frameborder="0"></iframe>');
				$body.html($iframe);
				var dialogHeight = this.wrap.height();
				var $header = this.wrap.find(".nova-dialog-header:visible");
				var $footer = this.wrap.find(".nova-dialog-footer:visible");
				var headerHeight = $header.outerHeight(true);
				var footerHeight = $footer.outerHeight(true);
				var bodyHeight = dialogHeight - (headerHeight ? headerHeight : 0) - (footerHeight ? footerHeight : 0);
				var initialHeight = this.options.initHeight;
				if (initialHeight) {
					$body.height(parseInt(initialHeight))
				} else {
					$body.height(bodyHeight);
				}
				return;
			}
			if (typeof $content === "string") {
				$body.html($content);
			} else if ($($content).get(0) && $($content).get(0).nodeType === 1) {
				if (contentClone) {
					var cloneEvent = this.options.cloneEvent;
					var contentCloned = $content.clone(cloneEvent);
					contentCloned.show();
					$body.html(contentCloned);
				} else {
					var content = $($content).get(0);
					var display = content.style.display;
					var prev = content.previousSibling;
					var next = content.nextSibling;
					var parent = content.parentNode;
					this._elemBack = function() {
						if (prev && prev.parentNode) {
							prev.parentNode.insertBefore(content, prev.nextSibling);
						} else if (next && next.parentNode) {
							next.parentNode.insertBefore(content, next);
						} else if (parent) {
							parent.appendChild(content);
						}
						content.style.display = display;
						self._elemBack = null;
					};
					$body.html($content);
					$content.show();
				}
			}
		},
		size: function(width, height) {
			if (typeof width === "number") {
				width += "px";
			}
			if (typeof height === "number") {
				height += "px";
			}
			this.wrap.css({
				width: width,
				height: height
			});
		},
		resize: function() {
			var $window = $(window);
			var windowHeight = $window.height();
			var windowWidth = $window.width();
			var dialogWidth = this.wrap.width();
			var dialogHeight = this.wrap.height();
			var left = ~~ ((windowWidth - dialogWidth) / 2);
			if (this.options.topFixed) {
				var dialogAutoTop = $window.scrollTop() + this.options.topOffset;
				this.wrap.css({
					position: "absolute",
					top: dialogAutoTop,
					left: left
				});
				return;
			}
			if (windowHeight - dialogHeight >= 0) {
				this.offsets();
			} else {
				var dialogTop = $window.scrollTop() + 10;
				this.wrap.css({
					position: "absolute",
					top: dialogTop,
					left: left
				})
			}
		},
		offsets: function() {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var dialogWidth = this.wrap.width();
			var dialogHeight = this.wrap.height();
			var left = ~~ ((windowWidth - dialogWidth) / 2);
			var top = ~~ ((windowHeight - dialogHeight) / 2);
			this.wrap.css({
				position: "fixed",
				top: top,
				left: left
			})
		},
		mask: function() {
			var mask = this.options.masked;
			if (mask) {
				this.wrap.attr("data-mask", "mask");
			}
			var $mask;
			$mask = $(".nova-overlay");
			if ($mask.length == 0) {
				$mask = $('<div class="nova-overlay"></div>');
				$body.append($mask);
			}
			$mask.css("zIndex", this.options.zIndex);
			var $dialogs = $(".nova-dialog[data-mask=mask]");
			$mask.attr("class", "nova-overlay");
			if ($dialogs.length == 0) {
				$mask.hide();
			} else {
				$mask.show();
				var $dialog = $dialogs.last();
				var dialogId = $dialog.attr("data-id");
				var dialog = Dialog.list[dialogId];
				$dialog.before($mask);
				var maskClass = dialog.options.maskClass;
				$mask.addClass(maskClass);
				$mask.css("zIndex", dialog.options.zIndex);
			}
		}
	};
	nova.dialog = Factory;
	window.nova = nova;
	nova.alert = function(content, callback) {
		return Factory({
			fixed: true,
			masked: true,
			content: content,
			okCallback: true,
			beforeClosingCallback: callback
		});
	};
	nova.confirm = function(content, okCallback, cancel) {
		return Factory({
			fixed: true,
			lock: true,
			content: content,
			okCallback: okCallback ? okCallback : true,
			cancelCallback: cancel ? cancel : true
		});
	};
	nova.msg = function(content, time) {
		return Factory({
			showClose: false,
			title: null,
			fixed: true,
			masked: false,
			content: content,
			time: time ? time : 2000
		});
	};
	nova.loading = function(content, callback) {
		var html = '<div class="nova-dialog-body-loading"><i></i></div>';
		return Factory({
			showClose: false,
			title: null,
			content: content ? content : html,
			beforeClosingCallback: callback
		})
	};
	for (var c in Dialog) {
		if (Dialog.hasOwnProperty(c)) {
			if (typeof Dialog[c] === "function") {
				Factory[c] = Dialog[c]
			}
		}
	}
})(window, jQuery, window.nova || {});;
var lmmf = lmmf ? lmmf : {};
$(function() {
	var $module = $('#module');
	$('#module').on('click', '.select_down_con', function(e) {
		$(this).children('.select_down_list').toggleClass('show');
		e.stopPropagation();
	});
	$(window).on('click', function() {
		$('.select_down_list').removeClass('show');
	});
});
lmmf.getPreMonth = function(date) {
	var arr = date.split('-');
	var year = arr[0];
	var month = arr[1];
	var day = arr[2];
	var days = new Date(year, month, 0);
	days = days.getDate();
	var year2 = year;
	var month2 = parseInt(month) - 1;
	if (month2 === 0) {
		year2 = parseInt(year2) - 1;
		month2 = 12;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}
	return year2 + '-' + month2 + '-' + day2;
};
lmmf.getPreTwoMonths = function(date) {
	var arr = date.split('-');
	var year = arr[0];
	var month = arr[1];
	var day = arr[2];
	var days = new Date(year, month, 0);
	days = days.getDate();
	var year2 = year;
	var month2 = parseInt(month) - 1;
	if (month2 == 0) {
		year2 = parseInt(year2) - 1;
		month2 = 12;
	}
	if (month2 == -1) {
		year2 = parseInt(year2) - 1;
		month2 = 11;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}
	var t2 = year2 + '-' + month2 + '-' + day2;
	if (t2 > $("#d4321").val()) {
		$("#d4321").val(t2);
	}
};
lmmf.getAfterTwoMonths = function(date) {
	var arr = date.split('-');
	var year = arr[0];
	var month = arr[1];
	var day = arr[2];
	var days = new Date(year, month, 0);
	days = days.getDate();
	var year2 = year;
	var month2 = parseInt(month) + 1;
	if (month2 == 13) {
		year2 = parseInt(year2) + 1;
		month2 = 1;
	}
	if (month2 == 14) {
		year2 = parseInt(year2) + 1;
		month2 = 2;
	}
	var day2 = day;
	var days2 = new Date(year2, month2, 0);
	days2 = days2.getDate();
	if (day2 > days2) {
		day2 = days2;
	}
	if (month2 < 10) {
		month2 = '0' + month2;
	}
	var t2 = year2 + '-' + month2 + '-' + day2;
	if (t2 < $("#d4322").val()) {
		$("#d4322").val(t2);
	}
};