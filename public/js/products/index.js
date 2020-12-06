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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/products/index.js":
/*!****************************************!*\
  !*** ./resources/js/products/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).on('click', '#editModalButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#editModal').modal(\"show\");\n      $('#editModalBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error) {\n      if (status == 404) {\n        console.log(_error);\n        alert(\"Product not found\");\n      } else {\n        alert(\"Error when trying to load the product\");\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});\n$(document).on('click', '#createModalButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#createModal').modal(\"show\");\n      $('#createModalBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error2) {\n      if (status == 404) {\n        console.log(_error2);\n        alert(\"View not found\");\n      } else {\n        alert(\"Error when trying to load create view\");\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvaW5kZXguanM/MjY2ZiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJiZWZvcmVTZW5kIiwic2hvdyIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJtb2RhbCIsImh0bWwiLCJjb21wbGV0ZSIsImhpZGUiLCJlcnJvciIsInhociIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3hEQSxPQUFLLENBQUNDLGNBQU47QUFDQSxNQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLFdBQWIsQ0FBWDtBQUNBTixHQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVILElBREY7QUFFSEksY0FBVSxFQUFFLHNCQUFXO0FBQ25CO0FBQ0FULE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVUsSUFBYjtBQUNILEtBTEU7QUFNSDtBQUNBQyxXQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUI7QUFDdEJaLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JhLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0FiLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CYyxJQUFwQixDQUF5QkYsTUFBekIsRUFBaUNGLElBQWpDO0FBQ0gsS0FWRTtBQVdISyxZQUFRLEVBQUUsb0JBQVc7QUFDakJmLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQWJFO0FBY0hDLFNBQUssRUFBRSxlQUFTQyxHQUFULEVBQWNDLE1BQWQsRUFBc0JGLE1BQXRCLEVBQTZCO0FBRWhDLFVBQUlFLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FLLGFBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0hBLGFBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0gsT0FQK0IsQ0FRaEM7OztBQUVBdEIsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhZ0IsSUFBYjtBQUNILEtBekJFLENBMEJIOztBQTFCRyxHQUFQO0FBNEJILENBL0JEO0FBaUNBaEIsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0Isb0JBQXhCLEVBQThDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDMURBLE9BQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsV0FBYixDQUFYO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRUgsSUFERjtBQUVISSxjQUFVLEVBQUUsc0JBQVc7QUFDbkI7QUFDQVQsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhVSxJQUFiO0FBQ0gsS0FMRTtBQU1IO0FBQ0FDLFdBQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQjtBQUN0QlosT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmEsS0FBbEIsQ0FBd0IsTUFBeEI7QUFDQWIsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JjLElBQXRCLENBQTJCRixNQUEzQixFQUFtQ0YsSUFBbkM7QUFDSCxLQVZFO0FBV0hLLFlBQVEsRUFBRSxvQkFBVztBQUNqQmYsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhZ0IsSUFBYjtBQUNILEtBYkU7QUFjSEMsU0FBSyxFQUFFLGVBQVNDLEdBQVQsRUFBY0MsTUFBZCxFQUFzQkYsT0FBdEIsRUFBNkI7QUFFaEMsVUFBSUUsTUFBTSxJQUFJLEdBQWQsRUFBbUI7QUFDZkMsZUFBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDQUssYUFBSyxDQUFDLGdCQUFELENBQUw7QUFDSCxPQUhELE1BR087QUFDSEEsYUFBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxPQVArQixDQVFoQzs7O0FBRUF0QixPQUFDLENBQUMsU0FBRCxDQUFELENBQWFnQixJQUFiO0FBQ0gsS0F6QkUsQ0EwQkg7O0FBMUJHLEdBQVA7QUE0QkgsQ0EvQkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2VkaXRNb2RhbEJ1dHRvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYXR0cicpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGhyZWYsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogQWRkIGxvYWRlclxyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHRcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnI2VkaXRNb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgJCgnI2VkaXRNb2RhbEJvZHknKS5odG1sKHJlc3VsdCkuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIHdoZW4gdHJ5aW5nIHRvIGxvYWQgdGhlIHByb2R1Y3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICBhbGVydChcIlBhZ2UgXCIgKyBocmVmICsgXCIgY2Fubm90IG9wZW4uIEVycm9yOlwiICsgZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHRpbWVvdXQ6IDgwMDBcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNjcmVhdGVNb2RhbEJ1dHRvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYXR0cicpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGhyZWYsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogQWRkIGxvYWRlclxyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHRcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZU1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKCcjY3JlYXRlTW9kYWxCb2R5JykuaHRtbChyZXN1bHQpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlZpZXcgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciB3aGVuIHRyeWluZyB0byBsb2FkIGNyZWF0ZSB2aWV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgYWxlcnQoXCJQYWdlIFwiICsgaHJlZiArIFwiIGNhbm5vdCBvcGVuLiBFcnJvcjpcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB0aW1lb3V0OiA4MDAwXHJcbiAgICB9KVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/products/index.js\n");

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./resources/js/products/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\heroku_laravel\resources\js\products\index.js */"./resources/js/products/index.js");


/***/ })

/******/ });