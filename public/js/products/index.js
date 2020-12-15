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

eval("$(document).on('click', '#editModalButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#editModal').modal('show');\n      $('#editModalBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error) {\n      if (status == 404) {\n        console.log(_error);\n        alert('Product not found');\n      } else {\n        alert('Error when trying to load the product');\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});\n$(document).on('click', '#createModalButton', function (event) {\n  event.preventDefault();\n  var href = $(this).attr('data-attr');\n  $.ajax({\n    url: href,\n    beforeSend: function beforeSend() {\n      //TODO: Add loader\n      $('#loader').show();\n    },\n    // return the result\n    success: function success(result) {\n      $('#createModal').modal('show');\n      $('#createModalBody').html(result).show();\n    },\n    complete: function complete() {\n      $('#loader').hide();\n    },\n    error: function error(xhr, status, _error2) {\n      if (status == 404) {\n        console.log(_error2);\n        alert('View not found');\n      } else {\n        alert('Error when trying to load create view');\n      } //   alert(\"Page \" + href + \" cannot open. Error:\" + error);\n\n\n      $('#loader').hide();\n    } // timeout: 8000\n\n  });\n});\n$(document).on('search', '#searchInput', function (event) {\n  var searchText = $('#searchInput').val();\n  $.ajax({\n    url: 'products/search',\n    type: 'get',\n    data: {\n      name: searchText\n    },\n    success: function success(response) {\n      $('#response').html(response);\n    },\n    error: function error(xhr) {//Do Something to handle error\n    }\n  });\n});\n$(function () {\n  $.get('/products/search', function (response) {\n    $('#response').html(response);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvaW5kZXguanM/MjY2ZiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYXR0ciIsImFqYXgiLCJ1cmwiLCJiZWZvcmVTZW5kIiwic2hvdyIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJtb2RhbCIsImh0bWwiLCJjb21wbGV0ZSIsImhpZGUiLCJlcnJvciIsInhociIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInNlYXJjaFRleHQiLCJ2YWwiLCJ0eXBlIiwiZGF0YSIsIm5hbWUiLCJyZXNwb25zZSIsImdldCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLGtCQUF4QixFQUE0QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3hEQSxPQUFLLENBQUNDLGNBQU47QUFDQSxNQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLFdBQWIsQ0FBWDtBQUNBTixHQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVILElBREY7QUFFSEksY0FBVSxFQUFFLHNCQUFXO0FBQ25CO0FBQ0FULE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVUsSUFBYjtBQUNILEtBTEU7QUFNSDtBQUNBQyxXQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUI7QUFDdEJaLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JhLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0FiLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQ0tjLElBREwsQ0FDVUYsTUFEVixFQUVLRixJQUZMO0FBR0gsS0FaRTtBQWFISyxZQUFRLEVBQUUsb0JBQVc7QUFDakJmLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQWZFO0FBZ0JIQyxTQUFLLEVBQUUsZUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXNCRixNQUF0QixFQUE2QjtBQUM1QixVQUFJRSxNQUFNLElBQUksR0FBZCxFQUFtQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBSyxhQUFLLENBQUMsbUJBQUQsQ0FBTDtBQUNILE9BSEQsTUFHTztBQUNIQSxhQUFLLENBQUMsdUNBQUQsQ0FBTDtBQUNILE9BTjJCLENBTzVCOzs7QUFFQXRCLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQTFCRixDQTJCQzs7QUEzQkQsR0FBUDtBQTZCSCxDQWhDRDtBQWtDQWhCLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG9CQUF4QixFQUE4QyxVQUFTQyxLQUFULEVBQWdCO0FBQzFEQSxPQUFLLENBQUNDLGNBQU47QUFDQSxNQUFJQyxJQUFJLEdBQUdMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixDQUFhLFdBQWIsQ0FBWDtBQUNBTixHQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVILElBREY7QUFFSEksY0FBVSxFQUFFLHNCQUFXO0FBQ25CO0FBQ0FULE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVUsSUFBYjtBQUNILEtBTEU7QUFNSDtBQUNBQyxXQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUI7QUFDdEJaLE9BQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JhLEtBQWxCLENBQXdCLE1BQXhCO0FBQ0FiLE9BQUMsQ0FBQyxrQkFBRCxDQUFELENBQ0tjLElBREwsQ0FDVUYsTUFEVixFQUVLRixJQUZMO0FBR0gsS0FaRTtBQWFISyxZQUFRLEVBQUUsb0JBQVc7QUFDakJmLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQWZFO0FBZ0JIQyxTQUFLLEVBQUUsZUFBU0MsR0FBVCxFQUFjQyxNQUFkLEVBQXNCRixPQUF0QixFQUE2QjtBQUM1QixVQUFJRSxNQUFNLElBQUksR0FBZCxFQUFtQjtBQUNmQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBSyxhQUFLLENBQUMsZ0JBQUQsQ0FBTDtBQUNILE9BSEQsTUFHTztBQUNIQSxhQUFLLENBQUMsdUNBQUQsQ0FBTDtBQUNILE9BTjJCLENBTzVCOzs7QUFFQXRCLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWdCLElBQWI7QUFDSCxLQTFCRixDQTJCQzs7QUEzQkQsR0FBUDtBQTZCSCxDQWhDRDtBQWtDQWhCLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLGNBQXpCLEVBQXlDLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckQsTUFBSW9CLFVBQVUsR0FBR3ZCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J3QixHQUFsQixFQUFqQjtBQUVBeEIsR0FBQyxDQUFDTyxJQUFGLENBQU87QUFDSEMsT0FBRyxFQUFFLGlCQURGO0FBRUhpQixRQUFJLEVBQUUsS0FGSDtBQUdIQyxRQUFJLEVBQUU7QUFDRkMsVUFBSSxFQUFFSjtBQURKLEtBSEg7QUFPSFosV0FBTyxFQUFFLGlCQUFTaUIsUUFBVCxFQUFtQjtBQUN4QjVCLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWMsSUFBZixDQUFvQmMsUUFBcEI7QUFDSCxLQVRFO0FBVUhYLFNBQUssRUFBRSxlQUFTQyxHQUFULEVBQWMsQ0FDakI7QUFDSDtBQVpFLEdBQVA7QUFjSCxDQWpCRDtBQW1CQWxCLENBQUMsQ0FBQyxZQUFXO0FBQ1RBLEdBQUMsQ0FBQzZCLEdBQUYsQ0FBTSxrQkFBTixFQUEwQixVQUFTRCxRQUFULEVBQW1CO0FBQ3pDNUIsS0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlYyxJQUFmLENBQW9CYyxRQUFwQjtBQUNILEdBRkQ7QUFHSCxDQUpBLENBQUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvZHVjdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2VkaXRNb2RhbEJ1dHRvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgaHJlZiA9ICQodGhpcykuYXR0cignZGF0YS1hdHRyJylcclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBocmVmLFxyXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvL1RPRE86IEFkZCBsb2FkZXJcclxuICAgICAgICAgICAgJCgnI2xvYWRlcicpLnNob3coKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHRcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICAgICAgJCgnI2VkaXRNb2RhbCcpLm1vZGFsKCdzaG93JylcclxuICAgICAgICAgICAgJCgnI2VkaXRNb2RhbEJvZHknKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgLnNob3coKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQcm9kdWN0IG5vdCBmb3VuZCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciB3aGVuIHRyeWluZyB0byBsb2FkIHRoZSBwcm9kdWN0JylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgYWxlcnQoXCJQYWdlIFwiICsgaHJlZiArIFwiIGNhbm5vdCBvcGVuLiBFcnJvcjpcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjbG9hZGVyJykuaGlkZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGltZW91dDogODAwMFxyXG4gICAgfSlcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY3JlYXRlTW9kYWxCdXR0b24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYXR0cicpXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogaHJlZixcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy9UT0RPOiBBZGQgbG9hZGVyXHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5zaG93KClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICQoJyNjcmVhdGVNb2RhbCcpLm1vZGFsKCdzaG93JylcclxuICAgICAgICAgICAgJCgnI2NyZWF0ZU1vZGFsQm9keScpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAuc2hvdygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1ZpZXcgbm90IGZvdW5kJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm9yIHdoZW4gdHJ5aW5nIHRvIGxvYWQgY3JlYXRlIHZpZXcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICBhbGVydChcIlBhZ2UgXCIgKyBocmVmICsgXCIgY2Fubm90IG9wZW4uIEVycm9yOlwiICsgZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNsb2FkZXInKS5oaWRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aW1lb3V0OiA4MDAwXHJcbiAgICB9KVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkub24oJ3NlYXJjaCcsICcjc2VhcmNoSW5wdXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIHNlYXJjaFRleHQgPSAkKCcjc2VhcmNoSW5wdXQnKS52YWwoKVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiAncHJvZHVjdHMvc2VhcmNoJyxcclxuICAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNlYXJjaFRleHRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkKCcjcmVzcG9uc2UnKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhocikge1xyXG4gICAgICAgICAgICAvL0RvIFNvbWV0aGluZyB0byBoYW5kbGUgZXJyb3JcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmdldCgnL3Byb2R1Y3RzL3NlYXJjaCcsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJCgnI3Jlc3BvbnNlJykuaHRtbChyZXNwb25zZSlcclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/products/index.js\n");

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