webpackJsonp([3],{

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return _react2.default.createElement(
	    "main",
	    { className: styles.main },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "Contact"
	    )
	  );
	};

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _contact = __webpack_require__(193);

	var styles = _interopRequireWildcard(_contact);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(194);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?localIdentName=[name].[local].[hash:base64:5]!./contact.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?localIdentName=[name].[local].[hash:base64:5]!./contact.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".contact-main-3lQXP {\n    color: blue;\n    background-image: url(" + __webpack_require__(195) + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n}", ""]);

	// exports
	exports.locals = {
		"main": "contact-main-3lQXP"
	};

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "contact.jpg";

/***/ }

});