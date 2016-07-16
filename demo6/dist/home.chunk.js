webpackJsonp([1],{

/***/ 182:
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
	      "Home"
	    )
	  );
	};

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _home = __webpack_require__(183);

	var styles = _interopRequireWildcard(_home);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(184);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?localIdentName=[name].[local].[hash:base64:5]!./home.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?localIdentName=[name].[local].[hash:base64:5]!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".home-main-2O0D6 {\n    color: red;\n    background-image: url(" + __webpack_require__(185) + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n}", ""]);

	// exports
	exports.locals = {
		"main": "home-main-2O0D6"
	};

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "home.jpg";

/***/ }

});