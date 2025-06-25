(self["webpackChunk"] = self["webpackChunk"] || []).push([["projects"],{

/***/ "./assets/js/projects.js":
/*!*******************************!*\
  !*** ./assets/js/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// Projects filter functionality
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectItems = document.querySelectorAll('.project-item');
  if (filterButtons.length && projectItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
          return btn.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
        var category = this.getAttribute('data-category');
        projectItems.forEach(function (item) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_create-property_js-node_modules_core-js_internals_dom--4861d4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_esnext-3c8b62"], () => (__webpack_exec__("./assets/js/projects.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0VBQzlELElBQU1DLFlBQVksR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7RUFFL0QsSUFBSUQsYUFBYSxDQUFDRyxNQUFNLElBQUlELFlBQVksQ0FBQ0MsTUFBTSxFQUFFO0lBQzdDSCxhQUFhLENBQUNJLE9BQU8sQ0FBQyxVQUFBQyxNQUFNLEVBQUk7TUFDNUJBLE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7UUFDeEM7UUFDQUMsYUFBYSxDQUFDSSxPQUFPLENBQUMsVUFBQUUsR0FBRztVQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQUEsRUFBQztRQUM1RDtRQUNBLElBQUksQ0FBQ0QsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBRTVCLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFbkRULFlBQVksQ0FBQ0UsT0FBTyxDQUFDLFVBQUFRLElBQUksRUFBSTtVQUN6QixJQUFJRixRQUFRLEtBQUssS0FBSyxJQUFJRSxJQUFJLENBQUNELFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBS0QsUUFBUSxFQUFFO1lBQ3ZFRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87VUFDaEMsQ0FBQyxNQUFNO1lBQ0hGLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtVQUMvQjtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFByb2plY3RzIGZpbHRlciBmdW5jdGlvbmFsaXR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGZpbHRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyLWJ0bicpO1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaXRlbScpO1xyXG5cclxuICAgIGlmIChmaWx0ZXJCdXR0b25zLmxlbmd0aCAmJiBwcm9qZWN0SXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGFsbCBidXR0b25zXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNsaWNrZWQgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5JykgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7ICJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RJdGVtcyIsImxlbmd0aCIsImZvckVhY2giLCJidXR0b24iLCJidG4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjYXRlZ29yeSIsImdldEF0dHJpYnV0ZSIsIml0ZW0iLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9