(self["webpackChunk"] = self["webpackChunk"] || []).push([["contact"],{

/***/ "./assets/js/contact.js":
/*!******************************!*\
  !*** ./assets/js/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "./node_modules/core-js/modules/es.object.from-entries.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// Contact form functionality
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      var formData = new FormData(this);
      var data = Object.fromEntries(formData.entries());

      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      showSuccessMessage();
    });
  }
});

// Show success message
function showSuccessMessage() {
  var message = document.createElement('div');
  message.className = 'success-message';
  message.textContent = 'Message envoyé avec succès !';
  document.body.appendChild(message);

  // Show the message
  setTimeout(function () {
    return message.classList.add('show');
  }, 100);

  // Remove the message after 3 seconds
  setTimeout(function () {
    message.classList.remove('show');
    setTimeout(function () {
      return message.remove();
    }, 300);
  }, 3000);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_create-property_js-node_modules_core-js_internals_dom--4861d4","vendors-node_modules_core-js_modules_es_object_from-entries_js-node_modules_core-js_modules_w-030571"], () => (__webpack_exec__("./assets/js/contact.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JELElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBRTFELElBQUlELFdBQVcsRUFBRTtJQUNiQSxXQUFXLENBQUNELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFTRyxDQUFDLEVBQUU7TUFDL0NBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O01BRWxCO01BQ0EsSUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFDbkMsSUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDOztNQUVuRDtNQUNBO01BQ0FDLGtCQUFrQixDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQSxTQUFTQSxrQkFBa0JBLENBQUEsRUFBRztFQUMxQixJQUFNQyxPQUFPLEdBQUdiLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q0QsT0FBTyxDQUFDRSxTQUFTLEdBQUcsaUJBQWlCO0VBQ3JDRixPQUFPLENBQUNHLFdBQVcsR0FBRyw4QkFBOEI7RUFDcERoQixRQUFRLENBQUNpQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsT0FBTyxDQUFDOztFQUVsQztFQUNBTSxVQUFVLENBQUM7SUFBQSxPQUFNTixPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUFBLEdBQUUsR0FBRyxDQUFDOztFQUVwRDtFQUNBRixVQUFVLENBQUMsWUFBTTtJQUNiTixPQUFPLENBQUNPLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQ0gsVUFBVSxDQUFDO01BQUEsT0FBTU4sT0FBTyxDQUFDUyxNQUFNLENBQUMsQ0FBQztJQUFBLEdBQUUsR0FBRyxDQUFDO0VBQzNDLENBQUMsRUFBRSxJQUFJLENBQUM7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRhY3QgZm9ybSBmdW5jdGlvbmFsaXR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJyk7XHJcblxyXG4gICAgaWYgKGNvbnRhY3RGb3JtKSB7XHJcbiAgICAgICAgY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBIZXJlIHlvdSB3b3VsZCB0eXBpY2FsbHkgc2VuZCB0aGUgZGF0YSB0byB5b3VyIGJhY2tlbmRcclxuICAgICAgICAgICAgLy8gRm9yIG5vdywgd2UnbGwganVzdCBzaG93IGEgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgIHNob3dTdWNjZXNzTWVzc2FnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXHJcbmZ1bmN0aW9uIHNob3dTdWNjZXNzTWVzc2FnZSgpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lc3NhZ2UuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MtbWVzc2FnZSc7XHJcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ01lc3NhZ2UgZW52b3nDqSBhdmVjIHN1Y2PDqHMgISc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xyXG5cclxuICAgIC8vIFNob3cgdGhlIG1lc3NhZ2VcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzaG93JyksIDEwMCk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBtZXNzYWdlIGFmdGVyIDMgc2Vjb25kc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZXNzYWdlLnJlbW92ZSgpLCAzMDApO1xyXG4gICAgfSwgMzAwMCk7XHJcbn0gIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RGb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInNob3dTdWNjZXNzTWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==