(self["webpackChunk"] = self["webpackChunk"] || []).push([["veille"],{

/***/ "./assets/js/veille.js":
/*!*****************************!*\
  !*** ./assets/js/veille.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// Veille filter functionality
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.category-btn');
  var articleItems = document.querySelectorAll('.article-item');
  if (filterButtons.length && articleItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
        var category = this.getAttribute('data-category');
        articleItems.forEach(function (item) {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_create-property_js-node_modules_core-js_internals_dom--4861d4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_esnext-3c8b62"], () => (__webpack_exec__("./assets/js/veille.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVpbGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUNoRSxJQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0VBRS9ELElBQUlELGFBQWEsQ0FBQ0csTUFBTSxJQUFJRCxZQUFZLENBQUNDLE1BQU0sRUFBRTtJQUM3Q0gsYUFBYSxDQUFDSSxPQUFPLENBQUMsVUFBQUMsTUFBTSxFQUFJO01BQzVCQSxNQUFNLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO1FBQ3hDO1FBQ0FDLGFBQWEsQ0FBQ0ksT0FBTyxDQUFDLFVBQUFFLEdBQUc7VUFBQSxPQUFJQSxHQUFHLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUFBLEVBQUM7UUFDNUQ7UUFDQSxJQUFJLENBQUNELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUU1QixJQUFNQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBRW5EVCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxVQUFBUSxJQUFJLEVBQUk7VUFDekIsSUFBSUYsUUFBUSxLQUFLLEtBQUssSUFBSUUsSUFBSSxDQUFDRCxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUtELFFBQVEsRUFBRTtZQUN2RUUsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1VBQ2hDLENBQUMsTUFBTTtZQUNIRixJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFDL0I7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy92ZWlsbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVmVpbGxlIGZpbHRlciBmdW5jdGlvbmFsaXR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGZpbHRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktYnRuJyk7XHJcbiAgICBjb25zdCBhcnRpY2xlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZS1pdGVtJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlckJ1dHRvbnMubGVuZ3RoICYmIGFydGljbGVJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIGZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknKSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsgIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbHRlckJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJ0aWNsZUl0ZW1zIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJ1dHRvbiIsImJ0biIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNhdGVnb3J5IiwiZ2V0QXR0cmlidXRlIiwiaXRlbSIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=