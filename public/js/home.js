/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Instantiate the Bootstrap carousel\n$('.multi-item-carousel').carousel({\n  interval: false\n});\nconsole.log(\"testing\"); // for every slide in carousel, copy the next slide's item in the slide.\n// Do the same for the next, next item.\n\n$('.multi-item-carousel .item').each(function () {\n  var next = $(this).next();\n\n  if (!next.length) {\n    next = $(this).siblings(':first');\n  }\n\n  next.children(':first-child').clone().appendTo($(this));\n\n  if (next.next().length > 0) {\n    next.next().children(':first-child').clone().appendTo($(this));\n  } else {\n    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaG9tZS5qcz8wMGQyIl0sIm5hbWVzIjpbIiQiLCJjYXJvdXNlbCIsImludGVydmFsIiwiY29uc29sZSIsImxvZyIsImVhY2giLCJuZXh0IiwibGVuZ3RoIiwic2libGluZ3MiLCJjaGlsZHJlbiIsImNsb25lIiwiYXBwZW5kVG8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0FBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxRQUExQixDQUFtQztBQUMvQkMsVUFBUSxFQUFFO0FBRHFCLENBQW5DO0FBSUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRSxDQUNBO0FBQ0E7O0FBQ0FKLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDSyxJQUFoQyxDQUFxQyxZQUFVO0FBQzdDLE1BQUlDLElBQUksR0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLEVBQVg7O0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUNDLE1BQVYsRUFBa0I7QUFDaEJELFFBQUksR0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxRQUFSLENBQWlCLFFBQWpCLENBQVA7QUFDRDs7QUFDREYsTUFBSSxDQUFDRyxRQUFMLENBQWMsY0FBZCxFQUE4QkMsS0FBOUIsR0FBc0NDLFFBQXRDLENBQStDWCxDQUFDLENBQUMsSUFBRCxDQUFoRDs7QUFFQSxNQUFJTSxJQUFJLENBQUNBLElBQUwsR0FBWUMsTUFBWixHQUFtQixDQUF2QixFQUEwQjtBQUN4QkQsUUFBSSxDQUFDQSxJQUFMLEdBQVlHLFFBQVosQ0FBcUIsY0FBckIsRUFBcUNDLEtBQXJDLEdBQTZDQyxRQUE3QyxDQUFzRFgsQ0FBQyxDQUFDLElBQUQsQ0FBdkQ7QUFDRCxHQUZELE1BRU87QUFDSEEsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxRQUFSLENBQWlCLFFBQWpCLEVBQTJCQyxRQUEzQixDQUFvQyxjQUFwQyxFQUFvREMsS0FBcEQsR0FBNERDLFFBQTVELENBQXFFWCxDQUFDLENBQUMsSUFBRCxDQUF0RTtBQUNIO0FBQ0YsQ0FaRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5zdGFudGlhdGUgdGhlIEJvb3RzdHJhcCBjYXJvdXNlbFxyXG4kKCcubXVsdGktaXRlbS1jYXJvdXNlbCcpLmNhcm91c2VsKHtcclxuICAgIGludGVydmFsOiBmYWxzZVxyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKFwidGVzdGluZ1wiKTtcclxuICAvLyBmb3IgZXZlcnkgc2xpZGUgaW4gY2Fyb3VzZWwsIGNvcHkgdGhlIG5leHQgc2xpZGUncyBpdGVtIGluIHRoZSBzbGlkZS5cclxuICAvLyBEbyB0aGUgc2FtZSBmb3IgdGhlIG5leHQsIG5leHQgaXRlbS5cclxuICAkKCcubXVsdGktaXRlbS1jYXJvdXNlbCAuaXRlbScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIHZhciBuZXh0ID0gJCh0aGlzKS5uZXh0KCk7XHJcbiAgICBpZiAoIW5leHQubGVuZ3RoKSB7XHJcbiAgICAgIG5leHQgPSAkKHRoaXMpLnNpYmxpbmdzKCc6Zmlyc3QnKTtcclxuICAgIH1cclxuICAgIG5leHQuY2hpbGRyZW4oJzpmaXJzdC1jaGlsZCcpLmNsb25lKCkuYXBwZW5kVG8oJCh0aGlzKSk7XHJcbiAgICBcclxuICAgIGlmIChuZXh0Lm5leHQoKS5sZW5ndGg+MCkge1xyXG4gICAgICBuZXh0Lm5leHQoKS5jaGlsZHJlbignOmZpcnN0LWNoaWxkJykuY2xvbmUoKS5hcHBlbmRUbygkKHRoaXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnOmZpcnN0JykuY2hpbGRyZW4oJzpmaXJzdC1jaGlsZCcpLmNsb25lKCkuYXBwZW5kVG8oJCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/home.js\n");

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./resources/js/home.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\heroku_laravel\resources\js\home.js */"./resources/js/home.js");


/***/ })

/******/ });