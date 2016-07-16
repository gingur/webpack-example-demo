webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Nav = __webpack_require__(172);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _routes = __webpack_require__(173);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Application = function (_React$Component) {
	  _inherits(Application, _React$Component);

	  function Application() {
	    _classCallCheck(this, Application);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Application).apply(this, arguments));

	    _this.handleNewHash = _this.handleNewHash.bind(_this);
	    _this.state = {
	      route: _this.getHash()
	    };
	    return _this;
	  }

	  _createClass(Application, [{
	    key: "getHash",
	    value: function getHash() {
	      var hash = window.location.hash.substr(1);
	      return _routes2.default.hasOwnProperty(hash) ? hash : 'home';
	    }
	  }, {
	    key: "handleNewHash",
	    value: function handleNewHash() {
	      this.setState({
	        route: this.getHash()
	      });
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      window.addEventListener('hashchange', this.handleNewHash, false);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      window.removeEventListener('hashchange', this.handleNewHash);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var route = this.state.route;
	      var Component = _routes2.default[route].Component;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Nav2.default, { route: route, routes: _routes2.default }),
	        _react2.default.createElement(Component, null)
	      );
	    }
	  }]);

	  return Application;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Application, null), document.getElementById('app'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Nav(_ref) {
	  var route = _ref.route;
	  var routes = _ref.routes;

	  return _react2.default.createElement(
	    'nav',
	    null,
	    _react2.default.createElement(
	      'ul',
	      null,
	      Object.keys(routes).map(function (r) {
	        return _react2.default.createElement(
	          'li',
	          { key: r },
	          _react2.default.createElement(
	            'a',
	            { href: routes[r].href, className: r === route ? 'active' : '' },
	            routes[r].title
	          )
	        );
	      })
	    )
	  );
	}

	Nav.propTypes = {
	  route: _react.PropTypes.string,
	  routes: _react.PropTypes.object
	};

	exports.default = Nav;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  home: {
	    id: 'home',
	    title: 'Home',
	    href: '#home',
	    Component: __webpack_require__(174).default
	  },
	  about: {
	    id: 'about',
	    title: 'About',
	    href: '#about',
	    Component: __webpack_require__(175).default
	  },
	  contact: {
	    id: 'contact',
	    title: 'Contact Us',
	    href: '#contact',
	    Component: __webpack_require__(176).default
	  }
	};

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return _react2.default.createElement(
	    "main",
	    { className: "home" },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "Home"
	    )
	  );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return _react2.default.createElement(
	    "main",
	    { className: "about" },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "About"
	    )
	  );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return _react2.default.createElement(
	    "main",
	    { className: "contact" },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "Contact"
	    )
	  );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }

});