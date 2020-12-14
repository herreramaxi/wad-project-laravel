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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/products/create.js":
/*!*****************************************!*\
  !*** ./resources/js/products/create.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//TODO: or remove or refactor common behavior and include this script in create view istead of edit js\n$(document).on('click', '#mediumButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#mediumModal').modal(\"show\");\n      $('#mediumBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error) {\n      if (status == 404) {\n        console.log(_error);\n        alert(\"Product not found\");\n      } else {\n        alert(\"Error when trying to load the product\");\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n}); //TODO: Extract this, duplicate code on edit and create\n\nfunction readURL(input) {\n  if (input.files && input.files[0]) {\n    var reader = new FileReader();\n\n    reader.onload = function (e) {\n      $('#previewImage').attr('src', e.target.result);\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n}\n\n$(document).on('change', '#inputFileId', function (event) {\n  readURL(this);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvY3JlYXRlLmpzPzEyYTgiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImF0dHIiLCJhamF4IiwidXJsIiwiYmVmb3JlU2VuZCIsInNob3ciLCJzdWNjZXNzIiwicmVzdWx0IiwibW9kYWwiLCJodG1sIiwiY29tcGxldGUiLCJoaWRlIiwiZXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJyZWFkVVJMIiwiaW5wdXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsVUFBU0MsS0FBVCxFQUFnQjtBQUNyREEsT0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxXQUFiLENBQVg7QUFDQU4sR0FBQyxDQUFDTyxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFSCxJQURGO0FBRUhJLGNBQVUsRUFBRSxzQkFBVztBQUNuQjtBQUNBVCxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFVLElBQWI7QUFDSCxLQUxFO0FBTUg7QUFDQUMsV0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3RCWixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYSxLQUFsQixDQUF3QixNQUF4QjtBQUNBYixPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxJQUFqQixDQUFzQkYsTUFBdEIsRUFBOEJGLElBQTlCO0FBQ0gsS0FWRTtBQVdISyxZQUFRLEVBQUUsb0JBQVc7QUFDakJmLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQWJFO0FBY0hDLFNBQUssRUFBRSxlQUFTQyxHQUFULEVBQWNDLE1BQWQsRUFBc0JGLE1BQXRCLEVBQTZCO0FBRWhDLFVBQUlFLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FLLGFBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0hBLGFBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0gsT0FQK0IsQ0FRaEM7OztBQUVBdEIsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhZ0IsSUFBYjtBQUNILEtBekJFLENBMEJIOztBQTFCRyxHQUFQO0FBNEJILENBL0JELEUsQ0FpQ0E7O0FBQ0EsU0FBU08sT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsTUFBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDL0IsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFFQUQsVUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVNDLENBQVQsRUFBWTtBQUN4QjdCLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CLENBQXdCLEtBQXhCLEVBQStCdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixNQUF4QztBQUNILEtBRkQ7O0FBSUFjLFVBQU0sQ0FBQ0ssYUFBUCxDQUFxQlAsS0FBSyxDQUFDQyxLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNIO0FBQ0o7O0FBRUR6QixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixjQUF6QixFQUF5QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JEb0IsU0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILENBRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvY3JlYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9UT0RPOiBvciByZW1vdmUgb3IgcmVmYWN0b3IgY29tbW9uIGJlaGF2aW9yIGFuZCBpbmNsdWRlIHRoaXMgc2NyaXB0IGluIGNyZWF0ZSB2aWV3IGlzdGVhZCBvZiBlZGl0IGpzXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbWVkaXVtQnV0dG9uJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaHJlZiA9ICQodGhpcykuYXR0cignZGF0YS1hdHRyJyk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogaHJlZixcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy9UT0RPOiBBZGQgbG9hZGVyXHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyByZXR1cm4gdGhlIHJlc3VsdFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAkKCcjbWVkaXVtTW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICQoJyNtZWRpdW1Cb2R5JykuaHRtbChyZXN1bHQpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciB3aGVuIHRyeWluZyB0byBsb2FkIHRoZSBwcm9kdWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgYWxlcnQoXCJQYWdlIFwiICsgaHJlZiArIFwiIGNhbm5vdCBvcGVuLiBFcnJvcjpcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB0aW1lb3V0OiA4MDAwXHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vVE9ETzogRXh0cmFjdCB0aGlzLCBkdXBsaWNhdGUgY29kZSBvbiBlZGl0IGFuZCBjcmVhdGVcclxuZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoJyNwcmV2aWV3SW1hZ2UnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNpbnB1dEZpbGVJZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICByZWFkVVJMKHRoaXMpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/products/create.js\n");

/***/ }),

/***/ 3:
/*!***********************************************!*\
  !*** multi ./resources/js/products/create.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\heroku_laravel\resources\js\products\create.js */"./resources/js/products/create.js");


/***/ })

/******/ });