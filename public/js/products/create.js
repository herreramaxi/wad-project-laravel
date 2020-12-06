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

eval("$(document).on('click', '#mediumButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#mediumModal').modal(\"show\");\n      $('#mediumBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error) {\n      if (status == 404) {\n        console.log(_error);\n        alert(\"Product not found\");\n      } else {\n        alert(\"Error when trying to load the product\");\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});\n\nfunction readURL(input) {\n  if (input.files && input.files[0]) {\n    var reader = new FileReader();\n\n    reader.onload = function (e) {\n      $('#previewImage').attr('src', e.target.result);\n    };\n\n    reader.readAsDataURL(input.files[0]);\n  }\n}\n\n$(document).on('change', '#inputFileId', function (event) {\n  readURL(this);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvY3JlYXRlLmpzPzEyYTgiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImF0dHIiLCJhamF4IiwidXJsIiwiYmVmb3JlU2VuZCIsInNob3ciLCJzdWNjZXNzIiwicmVzdWx0IiwibW9kYWwiLCJodG1sIiwiY29tcGxldGUiLCJoaWRlIiwiZXJyb3IiLCJ4aHIiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJyZWFkVVJMIiwiaW5wdXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGVBQXhCLEVBQXlDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckRBLE9BQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsV0FBYixDQUFYO0FBQ0FOLEdBQUMsQ0FBQ08sSUFBRixDQUFPO0FBQ0hDLE9BQUcsRUFBRUgsSUFERjtBQUVISSxjQUFVLEVBQUUsc0JBQVc7QUFDbkI7QUFDQVQsT0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhVSxJQUFiO0FBQ0gsS0FMRTtBQU1IO0FBQ0FDLFdBQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQjtBQUN0QlosT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmEsS0FBbEIsQ0FBd0IsTUFBeEI7QUFDQWIsT0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQmMsSUFBakIsQ0FBc0JGLE1BQXRCLEVBQThCRixJQUE5QjtBQUNILEtBVkU7QUFXSEssWUFBUSxFQUFFLG9CQUFXO0FBQ2pCZixPQUFDLENBQUMsU0FBRCxDQUFELENBQWFnQixJQUFiO0FBQ0gsS0FiRTtBQWNIQyxTQUFLLEVBQUUsZUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXNCRixNQUF0QixFQUE2QjtBQUVoQyxVQUFJRSxNQUFNLElBQUksR0FBZCxFQUFtQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBSyxhQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNILE9BSEQsTUFHTztBQUNIQSxhQUFLLENBQUMsdUNBQUQsQ0FBTDtBQUNILE9BUCtCLENBUWhDOzs7QUFFQXRCLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQXpCRSxDQTBCSDs7QUExQkcsR0FBUDtBQTRCSCxDQS9CRDs7QUFpQ0EsU0FBU08sT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsTUFBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0MsS0FBTixDQUFZLENBQVosQ0FBbkIsRUFBbUM7QUFDL0IsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFFQUQsVUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVNDLENBQVQsRUFBWTtBQUN4QjdCLE9BQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CLENBQXdCLEtBQXhCLEVBQStCdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQixNQUF4QztBQUNILEtBRkQ7O0FBSUFjLFVBQU0sQ0FBQ0ssYUFBUCxDQUFxQlAsS0FBSyxDQUFDQyxLQUFOLENBQVksQ0FBWixDQUFyQjtBQUNIO0FBQ0o7O0FBRUR6QixDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxFQUFaLENBQWUsUUFBZixFQUF5QixjQUF6QixFQUF5QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JEb0IsU0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNILENBRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvY3JlYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtZWRpdW1CdXR0b24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBocmVmID0gJCh0aGlzKS5hdHRyKCdkYXRhLWF0dHInKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBocmVmLFxyXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvL1RPRE86IEFkZCBsb2FkZXJcclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJyNtZWRpdW1Nb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgJCgnI21lZGl1bUJvZHknKS5odG1sKHJlc3VsdCkuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yIHdoZW4gdHJ5aW5nIHRvIGxvYWQgdGhlIHByb2R1Y3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICBhbGVydChcIlBhZ2UgXCIgKyBocmVmICsgXCIgY2Fubm90IG9wZW4uIEVycm9yOlwiICsgZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHRpbWVvdXQ6IDgwMDBcclxuICAgIH0pXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoJyNwcmV2aWV3SW1hZ2UnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2hhbmdlJywgJyNpbnB1dEZpbGVJZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICByZWFkVVJMKHRoaXMpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/products/create.js\n");

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