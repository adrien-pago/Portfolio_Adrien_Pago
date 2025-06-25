(self["webpackChunk"] = self["webpackChunk"] || []).push([["sidebar"],{

/***/ "./assets/js/sidebar.js":
/*!******************************!*\
  !*** ./assets/js/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');
  var isOpen = false;

  // Fonction pour basculer le menu
  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  // Fonction pour ouvrir le menu
  function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    isOpen = false;
  }

  // Événement pour basculer le menu
  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  // Fermer le menu lors du clic sur un lien
  var menuLinks = sidebar.querySelectorAll('a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Fermer le menu lors du redimensionnement de la fenêtre
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_create-property_js-node_modules_core-js_internals_dom--4861d4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_esnext-3c8b62"], () => (__webpack_exec__("./assets/js/sidebar.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JELElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3pELElBQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDRyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQ2xELElBQU1FLE9BQU8sR0FBR0wsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFDMUQsSUFBSUcsTUFBTSxHQUFHLEtBQUs7O0VBRWxCO0VBQ0EsU0FBU0MsVUFBVUEsQ0FBQSxFQUFHO0lBQ2xCRCxNQUFNLEdBQUcsQ0FBQ0EsTUFBTTtJQUNoQixJQUFJQSxNQUFNLEVBQUU7TUFDUkUsUUFBUSxDQUFDLENBQUM7SUFDZCxDQUFDLE1BQU07TUFDSEMsU0FBUyxDQUFDLENBQUM7SUFDZjtFQUNKOztFQUVBO0VBQ0EsU0FBU0QsUUFBUUEsQ0FBQSxFQUFHO0lBQ2hCSixPQUFPLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMvQk4sT0FBTyxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDL0JYLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRO0VBQzNDOztFQUVBO0VBQ0EsU0FBU0wsU0FBU0EsQ0FBQSxFQUFHO0lBQ2pCTCxPQUFPLENBQUNNLFNBQVMsQ0FBQ0ssTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQ1YsT0FBTyxDQUFDSyxTQUFTLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbENmLFFBQVEsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxFQUFFO0lBQ2pDUixNQUFNLEdBQUcsS0FBSztFQUNsQjs7RUFFQTtFQUNBSixVQUFVLENBQUNELGdCQUFnQixDQUFDLE9BQU8sRUFBRU0sVUFBVSxDQUFDO0VBQ2hERixPQUFPLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRVEsU0FBUyxDQUFDOztFQUU1QztFQUNBLElBQU1PLFNBQVMsR0FBR1osT0FBTyxDQUFDYSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7RUFDL0NELFNBQVMsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUN0QkEsSUFBSSxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFUSxTQUFTLENBQUM7RUFDN0MsQ0FBQyxDQUFDOztFQUVGO0VBQ0FXLE1BQU0sQ0FBQ25CLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFXO0lBQ3pDLElBQUltQixNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHLEVBQUU7TUFDekJaLFNBQVMsQ0FBQyxDQUFDO0lBQ2Y7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaWRlYmFyIHRvZ2dsZSBmdW5jdGlvbmFsaXR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10b2dnbGUnKTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW92ZXJsYXknKTtcclxuICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGJhc2N1bGVyIGxlIG1lbnVcclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAgICAgaXNPcGVuID0gIWlzT3BlbjtcclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgb3V2cmlyIGxlIG1lbnVcclxuICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBmZXJtZXIgbGUgbWVudVxyXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xyXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gw4l2w6luZW1lbnQgcG91ciBiYXNjdWxlciBsZSBtZW51XHJcbiAgICBtZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGR1IGNsaWMgc3VyIHVuIGxpZW5cclxuICAgIGNvbnN0IG1lbnVMaW5rcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnYScpO1xyXG4gICAgbWVudUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGR1IHJlZGltZW5zaW9ubmVtZW50IGRlIGxhIGZlbsOqdHJlXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVUb2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwic2lkZWJhciIsIm92ZXJsYXkiLCJpc09wZW4iLCJ0b2dnbGVNZW51Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsIm1lbnVMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9