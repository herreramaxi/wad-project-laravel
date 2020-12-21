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

/***/ "./resources/js/productsClient/index.js":
/*!**********************************************!*\
  !*** ./resources/js/productsClient/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $(document).autocomplete();\n});\n\nfunction setPartialView(href, itemName) {\n  event.preventDefault();\n  $.ajax({\n    url: href,\n    data: {\n      name: itemName\n    },\n    beforeSend: function beforeSend() {},\n    success: function success(data) {\n      var doc = document.implementation.createHTMLDocument(\"partial view doc\");\n      doc.documentElement.innerHTML = data;\n      var partialViewBody = doc.documentElement.childNodes[2].innerHTML;\n      document.documentElement.childNodes[2].innerHTML = partialViewBody;\n    },\n    error: function error(xhr, status, _error) {\n      console.log(status);\n      console.log(_error);\n\n      if (status == 404) {\n        showErrorMessage(\"View not found\");\n      } else {\n        showErrorMessage(\"Error when trying to load create view\");\n      }\n    },\n    complete: function complete(jqXHR, textStatus) {}\n  });\n}\n\n$.fn.autocomplete = function () {\n  {\n    $('#productsClientContainer').on('click', '#search', function (e) {\n      e.preventDefault();\n      $('#search').typeahead({\n        highlight: true,\n        suggestions: false,\n        hint: false,\n        minLength: 1,\n        updater: function updater(item) {\n          var href = $(\"#searchForm\").attr(\"data-attr\");\n          setPartialView(href, item.name);\n          return false;\n        },\n        source: function source(term, process) {\n          var route = $(\"#searchForm\").attr(\"filter-attr\");\n          return $.get(route, {\n            term: term\n          }, function (data) {\n            return process(data);\n          });\n        }\n      });\n    });\n  }\n}; //When Ajax completes we need to unbind all the events from the document ready, otherwise the script won't run for a second time\n\n\n$(document).ajaxStop(function () {\n  $(document).autocomplete();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvZHVjdHNDbGllbnQvaW5kZXguanM/MTU1YSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJhdXRvY29tcGxldGUiLCJzZXRQYXJ0aWFsVmlldyIsImhyZWYiLCJpdGVtTmFtZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhamF4IiwidXJsIiwiZGF0YSIsIm5hbWUiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsImRvYyIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwicGFydGlhbFZpZXdCb2R5IiwiY2hpbGROb2RlcyIsImVycm9yIiwieGhyIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInNob3dFcnJvck1lc3NhZ2UiLCJjb21wbGV0ZSIsImpxWEhSIiwidGV4dFN0YXR1cyIsImZuIiwib24iLCJlIiwidHlwZWFoZWFkIiwiaGlnaGxpZ2h0Iiwic3VnZ2VzdGlvbnMiLCJoaW50IiwibWluTGVuZ3RoIiwidXBkYXRlciIsIml0ZW0iLCJhdHRyIiwic291cmNlIiwidGVybSIsInByb2Nlc3MiLCJyb3V0ZSIsImdldCIsImFqYXhTdG9wIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVkEsR0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsWUFBWjtBQUNILENBRkEsQ0FBRDs7QUFJQSxTQUFTQyxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDcENDLE9BQUssQ0FBQ0MsY0FBTjtBQUNBUCxHQUFDLENBQUNRLElBQUYsQ0FBTztBQUNIQyxPQUFHLEVBQUVMLElBREY7QUFFSE0sUUFBSSxFQUFFO0FBQ0ZDLFVBQUksRUFBRU47QUFESixLQUZIO0FBS0hPLGNBQVUsRUFBRSxzQkFBWSxDQUN2QixDQU5FO0FBT0hDLFdBQU8sRUFBRSxpQkFBVUgsSUFBVixFQUFnQjtBQUNyQixVQUFJSSxHQUFHLEdBQUdiLFFBQVEsQ0FBQ2MsY0FBVCxDQUF3QkMsa0JBQXhCLENBQTJDLGtCQUEzQyxDQUFWO0FBQ0FGLFNBQUcsQ0FBQ0csZUFBSixDQUFvQkMsU0FBcEIsR0FBZ0NSLElBQWhDO0FBQ0EsVUFBSVMsZUFBZSxHQUFHTCxHQUFHLENBQUNHLGVBQUosQ0FBb0JHLFVBQXBCLENBQStCLENBQS9CLEVBQWtDRixTQUF4RDtBQUNBakIsY0FBUSxDQUFDZ0IsZUFBVCxDQUF5QkcsVUFBekIsQ0FBb0MsQ0FBcEMsRUFBdUNGLFNBQXZDLEdBQW1EQyxlQUFuRDtBQUNILEtBWkU7QUFhSEUsU0FBSyxFQUFFLGVBQVVDLEdBQVYsRUFBZUMsTUFBZixFQUF1QkYsTUFBdkIsRUFBOEI7QUFDakNHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaOztBQUVBLFVBQUlFLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2ZHLHdCQUFnQixDQUFDLGdCQUFELENBQWhCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLHdCQUFnQixDQUFDLHVDQUFELENBQWhCO0FBQ0g7QUFDSixLQXRCRTtBQXVCSEMsWUFBUSxFQUFFLGtCQUFVQyxLQUFWLEVBQWlCQyxVQUFqQixFQUE2QixDQUN0QztBQXhCRSxHQUFQO0FBMEJIOztBQUVEN0IsQ0FBQyxDQUFDOEIsRUFBRixDQUFLNUIsWUFBTCxHQUFvQixZQUFZO0FBQzVCO0FBQ0lGLEtBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCK0IsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsU0FBMUMsRUFBcUQsVUFBVUMsQ0FBVixFQUFhO0FBQzlEQSxPQUFDLENBQUN6QixjQUFGO0FBQ0FQLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWlDLFNBQWIsQ0FBdUI7QUFDbkJDLGlCQUFTLEVBQUUsSUFEUTtBQUVuQkMsbUJBQVcsRUFBQyxLQUZPO0FBR25CQyxZQUFJLEVBQUMsS0FIYztBQUluQkMsaUJBQVMsRUFBRSxDQUpRO0FBS25CQyxlQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDckIsY0FBSW5DLElBQUksR0FBR0osQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQndDLElBQWpCLENBQXNCLFdBQXRCLENBQVg7QUFDQXJDLHdCQUFjLENBQUNDLElBQUQsRUFBT21DLElBQUksQ0FBQzVCLElBQVosQ0FBZDtBQUNBLGlCQUFPLEtBQVA7QUFDSCxTQVRrQjtBQVVuQjhCLGNBQU0sRUFBRSxnQkFBVUMsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDN0IsY0FBSUMsS0FBSyxHQUFHNUMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQndDLElBQWpCLENBQXNCLGFBQXRCLENBQVo7QUFDQSxpQkFBT3hDLENBQUMsQ0FBQzZDLEdBQUYsQ0FBTUQsS0FBTixFQUFhO0FBQ2hCRixnQkFBSSxFQUFFQTtBQURVLFdBQWIsRUFFSixVQUFVaEMsSUFBVixFQUFnQjtBQUNmLG1CQUFPaUMsT0FBTyxDQUFDakMsSUFBRCxDQUFkO0FBQ0gsV0FKTSxDQUFQO0FBTUg7QUFsQmtCLE9BQXZCO0FBb0JILEtBdEJEO0FBdUJIO0FBQ0osQ0ExQkQsQyxDQTRCQTs7O0FBQ0FWLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVk2QyxRQUFaLENBQXFCLFlBQVk7QUFFN0I5QyxHQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxZQUFaO0FBQ0gsQ0FIRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wcm9kdWN0c0NsaWVudC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChkb2N1bWVudCkuYXV0b2NvbXBsZXRlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0UGFydGlhbFZpZXcoaHJlZiwgaXRlbU5hbWUpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogaHJlZixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW1OYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwicGFydGlhbCB2aWV3IGRvY1wiKTtcclxuICAgICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG4gICAgICAgICAgICBsZXQgcGFydGlhbFZpZXdCb2R5ID0gZG9jLmRvY3VtZW50RWxlbWVudC5jaGlsZE5vZGVzWzJdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNoaWxkTm9kZXNbMl0uaW5uZXJIVE1MID0gcGFydGlhbFZpZXdCb2R5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJWaWV3IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJFcnJvciB3aGVuIHRyeWluZyB0byBsb2FkIGNyZWF0ZSB2aWV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQuZm4uYXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAge1xyXG4gICAgICAgICQoJyNwcm9kdWN0c0NsaWVudENvbnRhaW5lcicpLm9uKCdjbGljaycsICcjc2VhcmNoJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAkKCcjc2VhcmNoJykudHlwZWFoZWFkKHtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaGludDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhyZWYgPSAkKFwiI3NlYXJjaEZvcm1cIikuYXR0cihcImRhdGEtYXR0clwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXJ0aWFsVmlldyhocmVmLCBpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uICh0ZXJtLCBwcm9jZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdXRlID0gJChcIiNzZWFyY2hGb3JtXCIpLmF0dHIoXCJmaWx0ZXItYXR0clwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5nZXQocm91dGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybTogdGVybVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vV2hlbiBBamF4IGNvbXBsZXRlcyB3ZSBuZWVkIHRvIHVuYmluZCBhbGwgdGhlIGV2ZW50cyBmcm9tIHRoZSBkb2N1bWVudCByZWFkeSwgb3RoZXJ3aXNlIHRoZSBzY3JpcHQgd29uJ3QgcnVuIGZvciBhIHNlY29uZCB0aW1lXHJcbiQoZG9jdW1lbnQpLmFqYXhTdG9wKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5hdXRvY29tcGxldGUoKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/productsClient/index.js\n");

/***/ }),

/***/ 3:
/*!****************************************************!*\
  !*** multi ./resources/js/productsClient/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\heroku_laravel\resources\js\productsClient\index.js */"./resources/js/productsClient/index.js");


/***/ })

/******/ });