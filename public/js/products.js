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

/***/ "./resources/js/products.js":
/*!**********************************!*\
  !*** ./resources/js/products.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).on('click', '#mediumButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#mediumModal').modal(\"show\");\n      $('#mediumBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error) {\n      if (status == 404) {\n        console.log(_error);\n        alert(\"Product not found\");\n      } else {\n        alert(\"Error when trying to load the product\");\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});\n\nfunction readURL(input) {\n  if (input.files && input.files[0]) {\n    var reader = new FileReader();\n\n    reader.onload = function (e) {\n      $('#category-img-tag').attr('src', e.target.result);\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n}\n\n$(document).on('change', '#inputFileId', function (event) {\n  readURL(this);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMuanM/YWZlMiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJiZWZvcmVTZW5kIiwic2hvdyIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJtb2RhbCIsImh0bWwiLCJjb21wbGV0ZSIsImhpZGUiLCJlcnJvciIsInhociIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInJlYWRVUkwiLCJpbnB1dCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJ0YXJnZXQiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsZUFBeEIsRUFBeUMsVUFBU0MsS0FBVCxFQUFnQjtBQUNyREEsT0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxXQUFiLENBQVg7QUFDQU4sR0FBQyxDQUFDTyxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFSCxJQURGO0FBRUhJLGNBQVUsRUFBRSxzQkFBVztBQUNuQjtBQUNBVCxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFVLElBQWI7QUFDSCxLQUxFO0FBTUg7QUFDQUMsV0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3RCWixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYSxLQUFsQixDQUF3QixNQUF4QjtBQUNBYixPQUFDLENBQUMsYUFBRCxDQUFELENBQWlCYyxJQUFqQixDQUFzQkYsTUFBdEIsRUFBOEJGLElBQTlCO0FBQ0gsS0FWRTtBQVdISyxZQUFRLEVBQUUsb0JBQVc7QUFDakJmLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQWJFO0FBY0hDLFNBQUssRUFBRSxlQUFTQyxHQUFULEVBQWNDLE1BQWQsRUFBc0JGLE1BQXRCLEVBQTZCO0FBRWhDLFVBQUlFLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0FLLGFBQUssQ0FBQyxtQkFBRCxDQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0hBLGFBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0gsT0FQK0IsQ0FRaEM7OztBQUVBdEIsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhZ0IsSUFBYjtBQUNILEtBekJFLENBMEJIOztBQTFCRyxHQUFQO0FBNEJILENBL0JEOztBQWlDQSxTQUFTTyxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUNwQixNQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDQyxLQUFOLENBQVksQ0FBWixDQUFuQixFQUFtQztBQUMvQixRQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUVBRCxVQUFNLENBQUNFLE1BQVAsR0FBZ0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ3hCN0IsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJNLElBQXZCLENBQTRCLEtBQTVCLEVBQW1DdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixNQUE1QztBQUNILEtBRkQ7O0FBSUFjLFVBQU0sQ0FBQ0ssYUFBUCxDQUFxQlAsS0FBSyxDQUFDQyxLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNIO0FBQ0o7O0FBRUR6QixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixjQUF6QixFQUF5QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JEb0IsU0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILENBRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21lZGl1bUJ1dHRvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYXR0cicpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6IGhyZWYsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogQWRkIGxvYWRlclxyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHRcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnI21lZGl1bU1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAkKCcjbWVkaXVtQm9keScpLmh0bWwocmVzdWx0KS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3Igd2hlbiB0cnlpbmcgdG8gbG9hZCB0aGUgcHJvZHVjdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgIGFsZXJ0KFwiUGFnZSBcIiArIGhyZWYgKyBcIiBjYW5ub3Qgb3Blbi4gRXJyb3I6XCIgKyBlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gdGltZW91dDogODAwMFxyXG4gICAgfSlcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZWFkVVJMKGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnI2NhdGVnb3J5LWltZy10YWcnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNpbnB1dEZpbGVJZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICByZWFkVVJMKHRoaXMpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/products.js\n");

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/products.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\heroku_laravel\resources\js\products.js */"./resources/js/products.js");


/***/ })

/******/ });