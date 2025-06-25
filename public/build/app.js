(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_touch_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/touch-manager */ "./assets/js/touch-manager.js");
/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/home */ "./assets/js/home.js");
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/sidebar */ "./assets/js/sidebar.js");
/* harmony import */ var _js_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_sidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/projects */ "./assets/js/projects.js");
/* harmony import */ var _js_projects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_projects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_veille__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/veille */ "./assets/js/veille.js");
/* harmony import */ var _js_veille__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_veille__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/contact */ "./assets/js/contact.js");
/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_contact__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
// Import all JavaScript files







// Import styles


/***/ }),

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

/***/ }),

/***/ "./assets/js/home.js":
/*!***************************!*\
  !*** ./assets/js/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");







document.addEventListener('DOMContentLoaded', function () {
  // Animation du texte avec Typed.js
  var options = {
    strings: ['Développeur Full Stack ', 'Développeur Web & Mobile', 'Créateur d\'Applications Desktop', 'Architecte Solutions Web'],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
  };
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_6__["default"]('#typed-text', options);

  // Animation des formes en arrière-plan
  var shapes = document.querySelectorAll('.shape');
  shapes.forEach(function (shape) {
    shape.style.transform = "translate(".concat(Math.random() * 20 - 10, "px, ").concat(Math.random() * 20 - 10, "px)");
  });
});

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ "./assets/js/touch-manager.js":
/*!************************************!*\
  !*** ./assets/js/touch-manager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ============================================
// 📱 TOUCH MANAGER - Gestionnaire tactile moderne
// ============================================
var TouchManager = /*#__PURE__*/function () {
  function TouchManager() {
    _classCallCheck(this, TouchManager);
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.minSwipeDistance = 50;
    this.maxSwipeTime = 300;
    this.touchStartTime = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;
    this.lastScrollTop = 0;
    this.init();
  }
  return _createClass(TouchManager, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.initScrollReveal();
      this.initTouchFeedback();
    }

    // ============================================
    // 🎯 GESTION DES SWIPE GESTURES
    // ============================================
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // Touch events
      document.addEventListener('touchstart', this.handleTouchStart.bind(this), {
        passive: true
      });
      document.addEventListener('touchmove', this.handleTouchMove.bind(this), {
        passive: false
      });
      document.addEventListener('touchend', this.handleTouchEnd.bind(this), {
        passive: true
      });

      // Scroll events optimisés
      document.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16), {
        passive: true
      });

      // Resize events
      window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.touchStartTime = Date.now();
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      if (!e.touches[0]) return;
      this.touchEndX = e.touches[0].clientX;
      this.touchEndY = e.touches[0].clientY;

      // Empêcher le scroll horizontal si swipe horizontal détecté
      var deltaX = Math.abs(this.touchEndX - this.touchStartX);
      var deltaY = Math.abs(this.touchEndY - this.touchStartY);
      if (deltaX > deltaY && deltaX > 10) {
        e.preventDefault();
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      if (!this.touchEndX && !this.touchEndY) return;
      var deltaX = this.touchEndX - this.touchStartX;
      var deltaY = this.touchEndY - this.touchStartY;
      var deltaTime = Date.now() - this.touchStartTime;

      // Vérifier si c'est un swipe valide
      if (deltaTime <= this.maxSwipeTime) {
        this.detectSwipe(deltaX, deltaY);
      }

      // Reset
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchEndX = 0;
      this.touchEndY = 0;
    }
  }, {
    key: "detectSwipe",
    value: function detectSwipe(deltaX, deltaY) {
      var absDeltaX = Math.abs(deltaX);
      var absDeltaY = Math.abs(deltaY);

      // Swipe horizontal
      if (absDeltaX > this.minSwipeDistance && absDeltaX > absDeltaY) {
        if (deltaX > 0) {
          this.onSwipeRight();
        } else {
          this.onSwipeLeft();
        }
      }

      // Swipe vertical
      if (absDeltaY > this.minSwipeDistance && absDeltaY > absDeltaX) {
        if (deltaY > 0) {
          this.onSwipeDown();
        } else {
          this.onSwipeUp();
        }
      }
    }
  }, {
    key: "onSwipeLeft",
    value: function onSwipeLeft() {
      // Fermer la sidebar si ouverte
      var sidebar = document.querySelector('.sidebar');
      var overlay = document.querySelector('.mobile-overlay');
      if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay === null || overlay === void 0 || overlay.classList.remove('active');
        document.body.style.overflow = '';

        // Émettre un événement personnalisé
        this.emitEvent('swipeLeft', {
          action: 'closeSidebar'
        });
      }
    }
  }, {
    key: "onSwipeRight",
    value: function onSwipeRight() {
      // Ouvrir la sidebar si fermée (depuis le bord gauche)
      if (this.touchStartX < 20) {
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.mobile-overlay');
        if (sidebar && !sidebar.classList.contains('active')) {
          sidebar.classList.add('active');
          overlay === null || overlay === void 0 || overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
          this.emitEvent('swipeRight', {
            action: 'openSidebar'
          });
        }
      }
    }
  }, {
    key: "onSwipeUp",
    value: function onSwipeUp() {
      this.emitEvent('swipeUp');
    }
  }, {
    key: "onSwipeDown",
    value: function onSwipeDown() {
      // Pull to refresh (si au top de la page)
      if (window.scrollY === 0) {
        this.emitEvent('swipeDown', {
          action: 'pullToRefresh'
        });
      }
    }

    // ============================================
    // 🌟 SCROLL REVEAL ANIMATIONS
    // ============================================
  }, {
    key: "initScrollReveal",
    value: function initScrollReveal() {
      var _this = this;
      this.observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.observerOptions);

      // Observer tous les éléments avec scroll-reveal
      var revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach(function (el) {
        return _this.observer.observe(el);
      });
    }
  }, {
    key: "handleIntersection",
    value: function handleIntersection(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Animation staggered pour les éléments enfants
          var children = entry.target.querySelectorAll('.animate-item');
          children.forEach(function (child, index) {
            setTimeout(function () {
              child.classList.add('is-visible');
            }, index * 100);
          });

          // Optionnel : arrêter d'observer une fois révélé
          // this.observer.unobserve(entry.target);
        }
      });
    }

    // ============================================
    // 💫 TOUCH FEEDBACK
    // ============================================
  }, {
    key: "initTouchFeedback",
    value: function initTouchFeedback() {
      var _this2 = this;
      var interactiveElements = document.querySelectorAll('.interactive, button, .btn, a');
      interactiveElements.forEach(function (el) {
        el.addEventListener('touchstart', _this2.addTouchFeedback.bind(_this2), {
          passive: true
        });
        el.addEventListener('touchend', _this2.removeTouchFeedback.bind(_this2), {
          passive: true
        });
        el.addEventListener('touchcancel', _this2.removeTouchFeedback.bind(_this2), {
          passive: true
        });
      });
    }
  }, {
    key: "addTouchFeedback",
    value: function addTouchFeedback(e) {
      var element = e.currentTarget;
      element.classList.add('animate-touch');

      // Vibration légère sur devices compatibles
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  }, {
    key: "removeTouchFeedback",
    value: function removeTouchFeedback(e) {
      var element = e.currentTarget;
      setTimeout(function () {
        element.classList.remove('animate-touch');
      }, 200);
    }

    // ============================================
    // 📊 SCROLL PERFORMANCE
    // ============================================
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var _this3 = this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Détection de direction
      var scrollDirection = scrollTop > this.lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = scrollTop;

      // Header hide/show
      this.handleHeaderScroll(scrollDirection, scrollTop);

      // Parallax optimisé
      this.handleParallax(scrollTop);

      // Marquer comme en cours de scroll
      if (!this.isScrolling) {
        this.isScrolling = true;
        document.body.classList.add('is-scrolling');
      }

      // Clear timeout précédent
      clearTimeout(this.scrollTimeout);

      // Marquer la fin du scroll
      this.scrollTimeout = setTimeout(function () {
        _this3.isScrolling = false;
        document.body.classList.remove('is-scrolling');
      }, 150);
    }
  }, {
    key: "handleHeaderScroll",
    value: function handleHeaderScroll(direction, scrollTop) {
      var header = document.querySelector('.mobile-header');
      if (!header) return;
      if (direction === 'down' && scrollTop > 100) {
        header.classList.add('header-hidden');
      } else if (direction === 'up') {
        header.classList.remove('header-hidden');
      }
    }
  }, {
    key: "handleParallax",
    value: function handleParallax(scrollTop) {
      var parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(function (el) {
        var speed = el.dataset.speed || 0.5;
        var yPos = -(scrollTop * speed);
        el.style.transform = "translate3d(0, ".concat(yPos, "px, 0)");
      });
    }

    // ============================================
    // 🔧 UTILITAIRES
    // ============================================
  }, {
    key: "throttle",
    value: function throttle(func, delay) {
      var timeoutId;
      var lastExecTime = 0;
      return function () {
        var _this4 = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var currentTime = Date.now();
        if (currentTime - lastExecTime > delay) {
          func.apply(this, args);
          lastExecTime = currentTime;
        } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(function () {
            func.apply(_this4, args);
            lastExecTime = Date.now();
          }, delay - (currentTime - lastExecTime));
        }
      };
    }
  }, {
    key: "debounce",
    value: function debounce(func, delay) {
      var timeoutId;
      return function () {
        var _this5 = this;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
          return func.apply(_this5, args);
        }, delay);
      };
    }
  }, {
    key: "emitEvent",
    value: function emitEvent(eventName) {
      var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var event = new CustomEvent(eventName, {
        detail: detail
      });
      document.dispatchEvent(event);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      // Recalculer les éléments au resize
      this.initScrollReveal();

      // Émettre événement de resize
      this.emitEvent('touchManagerResize');
    }

    // ============================================
    // 🎯 API PUBLIQUE
    // ============================================

    // Ajouter de nouveaux éléments à observer
  }, {
    key: "observeElement",
    value: function observeElement(element) {
      if (this.observer && element) {
        this.observer.observe(element);
      }
    }

    // Arrêter d'observer un élément
  }, {
    key: "unobserveElement",
    value: function unobserveElement(element) {
      if (this.observer && element) {
        this.observer.unobserve(element);
      }
    }

    // Destroy - nettoyer les event listeners
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.observer) {
        this.observer.disconnect();
      }

      // Nettoyer les timeouts
      clearTimeout(this.scrollTimeout);
    }
  }]);
}(); // ============================================
// 🚀 INITIALISATION AUTOMATIQUE
// ============================================
// Auto-init quand le DOM est prêt
document.addEventListener('DOMContentLoaded', function () {
  window.TouchManager = new TouchManager();

  // Écouter les événements personnalisés
  document.addEventListener('swipeLeft', function (e) {
    console.log('Swipe left detected:', e.detail);
  });
  document.addEventListener('swipeRight', function (e) {
    console.log('Swipe right detected:', e.detail);
  });
  document.addEventListener('swipeUp', function (e) {
    console.log('Swipe up detected:', e.detail);
  });
  document.addEventListener('swipeDown', function (e) {
    console.log('Swipe down detected:', e.detail);
  });
});

// Export pour utilisation modulaire
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchManager);

/***/ }),

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

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_create-property_js-node_modules_core-js_internals_dom--4861d4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_esnext-3c8b62","vendors-node_modules_core-js_modules_es_object_from-entries_js-node_modules_core-js_modules_w-030571","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_typed_js_dist_typed_module_js","vendors-node_modules_core-js_modules_es_date_now_js-node_modules_core-js_modules_es_date_to-p-40d3cd"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEVBQUU7SUFDN0NGLGFBQWEsQ0FBQ1AsT0FBTyxDQUFDLFVBQUFVLE1BQU0sRUFBSTtNQUM1QkEsTUFBTSxDQUFDaEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7UUFDeEM7UUFDQTZDLGFBQWEsQ0FBQ1AsT0FBTyxDQUFDLFVBQUFXLEdBQUc7VUFBQSxPQUFJQSxHQUFHLENBQUM5QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFBQSxFQUFDO1FBQzVEO1FBQ0EsSUFBSSxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBTThCLFFBQVEsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFFbkRrSSxZQUFZLENBQUMvSSxPQUFPLENBQUMsVUFBQWMsSUFBSSxFQUFJO1VBQ3pCLElBQUlGLFFBQVEsS0FBSyxLQUFLLElBQUlFLElBQUksQ0FBQ0QsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLRCxRQUFRLEVBQUU7WUFDdkVFLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxPQUFPLEdBQUcsT0FBTztVQUNoQyxDQUFDLE1BQU07WUFDSEQsSUFBSSxDQUFDWixLQUFLLENBQUNhLE9BQU8sR0FBRyxNQUFNO1VBQy9CO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3pCRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Byb2plY3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90b3VjaC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92ZWlsbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgSmF2YVNjcmlwdCBmaWxlc1xyXG5pbXBvcnQgJy4vanMvdG91Y2gtbWFuYWdlcic7XHJcbmltcG9ydCAnLi9qcy9ob21lJztcclxuaW1wb3J0ICcuL2pzL3NpZGViYXInO1xyXG5pbXBvcnQgJy4vanMvcHJvamVjdHMnO1xyXG5pbXBvcnQgJy4vanMvdmVpbGxlJztcclxuaW1wb3J0ICcuL2pzL2NvbnRhY3QnO1xyXG5cclxuLy8gSW1wb3J0IHN0eWxlc1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJzsgIiwiLy8gQ29udGFjdCBmb3JtIGZ1bmN0aW9uYWxpdHlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKTtcclxuXHJcbiAgICBpZiAoY29udGFjdEZvcm0pIHtcclxuICAgICAgICBjb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBmb3JtIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEhlcmUgeW91IHdvdWxkIHR5cGljYWxseSBzZW5kIHRoZSBkYXRhIHRvIHlvdXIgYmFja2VuZFxyXG4gICAgICAgICAgICAvLyBGb3Igbm93LCB3ZSdsbCBqdXN0IHNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgICAgICAgc2hvd1N1Y2Nlc3NNZXNzYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcclxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3NNZXNzYWdlKCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVzc2FnZS5jbGFzc05hbWUgPSAnc3VjY2Vzcy1tZXNzYWdlJztcclxuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTWVzc2FnZSBlbnZvecOpIGF2ZWMgc3VjY8OocyAhJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gICAgLy8gU2hvdyB0aGUgbWVzc2FnZVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKSwgMTAwKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIG1lc3NhZ2UgYWZ0ZXIgMyBzZWNvbmRzXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lc3NhZ2UucmVtb3ZlKCksIDMwMCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSAiLCJpbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gQW5pbWF0aW9uIGR1IHRleHRlIGF2ZWMgVHlwZWQuanNcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgc3RyaW5nczogW1xyXG4gICAgICAgICAgICAnRMOpdmVsb3BwZXVyIEZ1bGwgU3RhY2sgJyxcclxuICAgICAgICAgICAgJ0TDqXZlbG9wcGV1ciBXZWIgJiBNb2JpbGUnLFxyXG4gICAgICAgICAgICAnQ3LDqWF0ZXVyIGRcXCdBcHBsaWNhdGlvbnMgRGVza3RvcCcsXHJcbiAgICAgICAgICAgICdBcmNoaXRlY3RlIFNvbHV0aW9ucyBXZWInXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0eXBlU3BlZWQ6IDUwLFxyXG4gICAgICAgIGJhY2tTcGVlZDogMjAsXHJcbiAgICAgICAgYmFja0RlbGF5OiAyMDAwLFxyXG4gICAgICAgIHN0YXJ0RGVsYXk6IDEwMDAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBzaG93Q3Vyc29yOiB0cnVlLFxyXG4gICAgICAgIGN1cnNvckNoYXI6ICd8JyxcclxuICAgICAgICBmYWRlT3V0OiB0cnVlLFxyXG4gICAgICAgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0JyxcclxuICAgICAgICBmYWRlT3V0RGVsYXk6IDUwMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZCgnI3R5cGVkLXRleHQnLCBvcHRpb25zKTtcclxuXHJcbiAgICAvLyBBbmltYXRpb24gZGVzIGZvcm1lcyBlbiBhcnJpw6hyZS1wbGFuXHJcbiAgICBjb25zdCBzaGFwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hhcGUnKTtcclxuICAgIHNoYXBlcy5mb3JFYWNoKHNoYXBlID0+IHtcclxuICAgICAgICBzaGFwZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7TWF0aC5yYW5kb20oKSAqIDIwIC0gMTB9cHgsICR7TWF0aC5yYW5kb20oKSAqIDIwIC0gMTB9cHgpYDtcclxuICAgIH0pO1xyXG59KTsgIiwiLy8gUHJvamVjdHMgZmlsdGVyIGZ1bmN0aW9uYWxpdHlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZmlsdGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXItYnRuJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlckJ1dHRvbnMubGVuZ3RoICYmIHByb2plY3RJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIGZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknKSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsgIiwiLy8gU2lkZWJhciB0b2dnbGUgZnVuY3Rpb25hbGl0eVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1vdmVybGF5Jyk7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBiYXNjdWxlciBsZSBtZW51XHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICAgIGlzT3BlbiA9ICFpc09wZW47XHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICBvcGVuTWVudSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIG91dnJpciBsZSBtZW51XHJcbiAgICBmdW5jdGlvbiBvcGVuTWVudSgpIHtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgZmVybWVyIGxlIG1lbnVcclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIMOJdsOpbmVtZW50IHBvdXIgYmFzY3VsZXIgbGUgbWVudVxyXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSk7XHJcblxyXG4gICAgLy8gRmVybWVyIGxlIG1lbnUgbG9ycyBkdSBjbGljIHN1ciB1biBsaWVuXHJcbiAgICBjb25zdCBtZW51TGlua3MgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcclxuICAgIG1lbnVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIGxlIG1lbnUgbG9ycyBkdSByZWRpbWVuc2lvbm5lbWVudCBkZSBsYSBmZW7DqnRyZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7ICIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfk7EgVE9VQ0ggTUFOQUdFUiAtIEdlc3Rpb25uYWlyZSB0YWN0aWxlIG1vZGVybmVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNsYXNzIFRvdWNoTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gMDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRZID0gMDtcclxuICAgICAgICB0aGlzLnRvdWNoRW5kWCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZFkgPSAwO1xyXG4gICAgICAgIHRoaXMubWluU3dpcGVEaXN0YW5jZSA9IDUwO1xyXG4gICAgICAgIHRoaXMubWF4U3dpcGVUaW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXRTY3JvbGxSZXZlYWwoKTtcclxuICAgICAgICB0aGlzLmluaXRUb3VjaEZlZWRiYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIPCfjq8gR0VTVElPTiBERVMgU1dJUEUgR0VTVFVSRVNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgLy8gVG91Y2ggZXZlbnRzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKHRoaXMpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZCh0aGlzKSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQuYmluZCh0aGlzKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNjcm9sbCBldmVudHMgb3B0aW1pc8Opc1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudGhyb3R0bGUodGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKSwgMTYpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVzaXplIGV2ZW50c1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyksIDI1MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICBpZiAoIWUudG91Y2hlc1swXSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG91Y2hFbmRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFbXDDqmNoZXIgbGUgc2Nyb2xsIGhvcml6b250YWwgc2kgc3dpcGUgaG9yaXpvbnRhbCBkw6l0ZWN0w6lcclxuICAgICAgICBjb25zdCBkZWx0YVggPSBNYXRoLmFicyh0aGlzLnRvdWNoRW5kWCAtIHRoaXMudG91Y2hTdGFydFgpO1xyXG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKHRoaXMudG91Y2hFbmRZIC0gdGhpcy50b3VjaFN0YXJ0WSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRlbHRhWCA+IGRlbHRhWSAmJiBkZWx0YVggPiAxMCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRvdWNoRW5kKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMudG91Y2hFbmRYICYmICF0aGlzLnRvdWNoRW5kWSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMudG91Y2hFbmRYIC0gdGhpcy50b3VjaFN0YXJ0WDtcclxuICAgICAgICBjb25zdCBkZWx0YVkgPSB0aGlzLnRvdWNoRW5kWSAtIHRoaXMudG91Y2hTdGFydFk7XHJcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMudG91Y2hTdGFydFRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGMnZXN0IHVuIHN3aXBlIHZhbGlkZVxyXG4gICAgICAgIGlmIChkZWx0YVRpbWUgPD0gdGhpcy5tYXhTd2lwZVRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRlY3RTd2lwZShkZWx0YVgsIGRlbHRhWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlc2V0XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZFggPSAwO1xyXG4gICAgICAgIHRoaXMudG91Y2hFbmRZID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3RTd2lwZShkZWx0YVgsIGRlbHRhWSkge1xyXG4gICAgICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKGRlbHRhWCk7XHJcbiAgICAgICAgY29uc3QgYWJzRGVsdGFZID0gTWF0aC5hYnMoZGVsdGFZKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTd2lwZSBob3Jpem9udGFsXHJcbiAgICAgICAgaWYgKGFic0RlbHRhWCA+IHRoaXMubWluU3dpcGVEaXN0YW5jZSAmJiBhYnNEZWx0YVggPiBhYnNEZWx0YVkpIHtcclxuICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Td2lwZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3dpcGVMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3dpcGUgdmVydGljYWxcclxuICAgICAgICBpZiAoYWJzRGVsdGFZID4gdGhpcy5taW5Td2lwZURpc3RhbmNlICYmIGFic0RlbHRhWSA+IGFic0RlbHRhWCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN3aXBlRG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN3aXBlVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlTGVmdCgpIHtcclxuICAgICAgICAvLyBGZXJtZXIgbGEgc2lkZWJhciBzaSBvdXZlcnRlXHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtb3ZlcmxheScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzaWRlYmFyICYmIHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBvdmVybGF5Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gw4ltZXR0cmUgdW4gw6l2w6luZW1lbnQgcGVyc29ubmFsaXPDqVxyXG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3dpcGVMZWZ0JywgeyBhY3Rpb246ICdjbG9zZVNpZGViYXInIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlUmlnaHQoKSB7XHJcbiAgICAgICAgLy8gT3V2cmlyIGxhIHNpZGViYXIgc2kgZmVybcOpZSAoZGVwdWlzIGxlIGJvcmQgZ2F1Y2hlKVxyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoU3RhcnRYIDwgMjApIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW92ZXJsYXknKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaWRlYmFyICYmICFzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N3aXBlUmlnaHQnLCB7IGFjdGlvbjogJ29wZW5TaWRlYmFyJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0RXZlbnQoJ3N3aXBlVXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN3aXBlRG93bigpIHtcclxuICAgICAgICAvLyBQdWxsIHRvIHJlZnJlc2ggKHNpIGF1IHRvcCBkZSBsYSBwYWdlKVxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRFdmVudCgnc3dpcGVEb3duJywgeyBhY3Rpb246ICdwdWxsVG9SZWZyZXNoJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIPCfjJ8gU0NST0xMIFJFVkVBTCBBTklNQVRJT05TXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICBpbml0U2Nyb2xsUmV2ZWFsKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMSxcclxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTUwcHggMHB4J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmhhbmRsZUludGVyc2VjdGlvbi5iaW5kKHRoaXMpLCB0aGlzLm9ic2VydmVyT3B0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT2JzZXJ2ZXIgdG91cyBsZXMgw6lsw6ltZW50cyBhdmVjIHNjcm9sbC1yZXZlYWxcclxuICAgICAgICBjb25zdCByZXZlYWxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY3JvbGwtcmV2ZWFsJyk7XHJcbiAgICAgICAgcmV2ZWFsRWxlbWVudHMuZm9yRWFjaChlbCA9PiB0aGlzLm9ic2VydmVyLm9ic2VydmUoZWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVJbnRlcnNlY3Rpb24oZW50cmllcykge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0aW9uIHN0YWdnZXJlZCBwb3VyIGxlcyDDqWzDqW1lbnRzIGVuZmFudHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZW50cnkudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRlLWl0ZW0nKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbm5lbCA6IGFycsOqdGVyIGQnb2JzZXJ2ZXIgdW5lIGZvaXMgcsOpdsOpbMOpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIPCfkqsgVE9VQ0ggRkVFREJBQ0tcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGluaXRUb3VjaEZlZWRiYWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUsIGJ1dHRvbiwgLmJ0biwgYScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGludGVyYWN0aXZlRWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmFkZFRvdWNoRmVlZGJhY2suYmluZCh0aGlzKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMucmVtb3ZlVG91Y2hGZWVkYmFjay5iaW5kKHRoaXMpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5yZW1vdmVUb3VjaEZlZWRiYWNrLmJpbmQodGhpcyksIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb3VjaEZlZWRiYWNrKGUpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS10b3VjaCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZpYnJhdGlvbiBsw6lnw6hyZSBzdXIgZGV2aWNlcyBjb21wYXRpYmxlc1xyXG4gICAgICAgIGlmICgndmlicmF0ZScgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci52aWJyYXRlKDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG91Y2hGZWVkYmFjayhlKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXRvdWNoJyk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8g8J+TiiBTQ1JPTEwgUEVSRk9STUFOQ0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBEw6l0ZWN0aW9uIGRlIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbERpcmVjdGlvbiA9IHNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCA/ICdkb3duJyA6ICd1cCc7XHJcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEhlYWRlciBoaWRlL3Nob3dcclxuICAgICAgICB0aGlzLmhhbmRsZUhlYWRlclNjcm9sbChzY3JvbGxEaXJlY3Rpb24sIHNjcm9sbFRvcCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyYWxsYXggb3B0aW1pc8OpXHJcbiAgICAgICAgdGhpcy5oYW5kbGVQYXJhbGxheChzY3JvbGxUb3ApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1hcnF1ZXIgY29tbWUgZW4gY291cnMgZGUgc2Nyb2xsXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLXNjcm9sbGluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDbGVhciB0aW1lb3V0IHByw6ljw6lkZW50XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZW91dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFycXVlciBsYSBmaW4gZHUgc2Nyb2xsXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zY3JvbGxpbmcnKTtcclxuICAgICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUhlYWRlclNjcm9sbChkaXJlY3Rpb24sIHNjcm9sbFRvcCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtaGVhZGVyJyk7XHJcbiAgICAgICAgaWYgKCFoZWFkZXIpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicgJiYgc2Nyb2xsVG9wID4gMTAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaGlkZGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGFyYWxsYXgoc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYWxsYXhFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhcmFsbGF4RWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gZWwuZGF0YXNldC5zcGVlZCB8fCAwLjU7XHJcbiAgICAgICAgICAgIGNvbnN0IHlQb3MgPSAtKHNjcm9sbFRvcCAqIHNwZWVkKTtcclxuICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7eVBvc31weCwgMClgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyDwn5SnIFVUSUxJVEFJUkVTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgXHJcbiAgICB0aHJvdHRsZShmdW5jLCBkZWxheSkge1xyXG4gICAgICAgIGxldCB0aW1lb3V0SWQ7XHJcbiAgICAgICAgbGV0IGxhc3RFeGVjVGltZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RFeGVjVGltZSA+IGRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgbGFzdEV4ZWNUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEV4ZWNUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIH0sIGRlbGF5IC0gKGN1cnJlbnRUaW1lIC0gbGFzdEV4ZWNUaW1lKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlYm91bmNlKGZ1bmMsIGRlbGF5KSB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKSwgZGVsYXkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdEV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsID0ge30pIHtcclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAvLyBSZWNhbGN1bGVyIGxlcyDDqWzDqW1lbnRzIGF1IHJlc2l6ZVxyXG4gICAgICAgIHRoaXMuaW5pdFNjcm9sbFJldmVhbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIMOJbWV0dHJlIMOpdsOpbmVtZW50IGRlIHJlc2l6ZVxyXG4gICAgICAgIHRoaXMuZW1pdEV2ZW50KCd0b3VjaE1hbmFnZXJSZXNpemUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8g8J+OryBBUEkgUFVCTElRVUVcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgZGUgbm91dmVhdXggw6lsw6ltZW50cyDDoCBvYnNlcnZlclxyXG4gICAgb2JzZXJ2ZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyICYmIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBcnLDqnRlciBkJ29ic2VydmVyIHVuIMOpbMOpbWVudFxyXG4gICAgdW5vYnNlcnZlRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIgJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVzdHJveSAtIG5ldHRveWVyIGxlcyBldmVudCBsaXN0ZW5lcnNcclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5ldHRveWVyIGxlcyB0aW1lb3V0c1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn5qAIElOSVRJQUxJU0FUSU9OIEFVVE9NQVRJUVVFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBBdXRvLWluaXQgcXVhbmQgbGUgRE9NIGVzdCBwcsOqdFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgd2luZG93LlRvdWNoTWFuYWdlciA9IG5ldyBUb3VjaE1hbmFnZXIoKTtcclxuICAgIFxyXG4gICAgLy8gw4ljb3V0ZXIgbGVzIMOpdsOpbmVtZW50cyBwZXJzb25uYWxpc8Opc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVMZWZ0JywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3dpcGUgbGVmdCBkZXRlY3RlZDonLCBlLmRldGFpbCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3dpcGVSaWdodCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N3aXBlIHJpZ2h0IGRldGVjdGVkOicsIGUuZGV0YWlsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzd2lwZVVwJywgKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3dpcGUgdXAgZGV0ZWN0ZWQ6JywgZS5kZXRhaWwpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N3aXBlRG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N3aXBlIGRvd24gZGV0ZWN0ZWQ6JywgZS5kZXRhaWwpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gRXhwb3J0IHBvdXIgdXRpbGlzYXRpb24gbW9kdWxhaXJlXHJcbmV4cG9ydCBkZWZhdWx0IFRvdWNoTWFuYWdlcjsgIiwiLy8gVmVpbGxlIGZpbHRlciBmdW5jdGlvbmFsaXR5XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGZpbHRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktYnRuJyk7XHJcbiAgICBjb25zdCBhcnRpY2xlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZS1pdGVtJyk7XHJcblxyXG4gICAgaWYgKGZpbHRlckJ1dHRvbnMubGVuZ3RoICYmIGFydGljbGVJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBmaWx0ZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIGJ1dHRvbnNcclxuICAgICAgICAgICAgICAgIGZpbHRlckJ1dHRvbnMuZm9yRWFjaChidG4gPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2xpY2tlZCBidXR0b25cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFydGljbGVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ2FsbCcgfHwgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0ZWdvcnknKSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhY3RGb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInNob3dTdWNjZXNzTWVzc2FnZSIsIm1lc3NhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiVHlwZWQiLCJvcHRpb25zIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsImJhY2tEZWxheSIsInN0YXJ0RGVsYXkiLCJsb29wIiwic2hvd0N1cnNvciIsImN1cnNvckNoYXIiLCJmYWRlT3V0IiwiZmFkZU91dENsYXNzIiwiZmFkZU91dERlbGF5IiwidHlwZWQiLCJzaGFwZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNoYXBlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJNYXRoIiwicmFuZG9tIiwiZmlsdGVyQnV0dG9ucyIsInByb2plY3RJdGVtcyIsImxlbmd0aCIsImJ1dHRvbiIsImJ0biIsImNhdGVnb3J5IiwiZ2V0QXR0cmlidXRlIiwiaXRlbSIsImRpc3BsYXkiLCJtZW51VG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsInNpZGViYXIiLCJvdmVybGF5IiwiaXNPcGVuIiwidG9nZ2xlTWVudSIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwib3ZlcmZsb3ciLCJtZW51TGlua3MiLCJsaW5rIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIlRvdWNoTWFuYWdlciIsIl9jbGFzc0NhbGxDaGVjayIsInRvdWNoU3RhcnRYIiwidG91Y2hTdGFydFkiLCJ0b3VjaEVuZFgiLCJ0b3VjaEVuZFkiLCJtaW5Td2lwZURpc3RhbmNlIiwibWF4U3dpcGVUaW1lIiwidG91Y2hTdGFydFRpbWUiLCJpc1Njcm9sbGluZyIsInNjcm9sbFRpbWVvdXQiLCJsYXN0U2Nyb2xsVG9wIiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYmluZEV2ZW50cyIsImluaXRTY3JvbGxSZXZlYWwiLCJpbml0VG91Y2hGZWVkYmFjayIsImhhbmRsZVRvdWNoU3RhcnQiLCJiaW5kIiwicGFzc2l2ZSIsImhhbmRsZVRvdWNoTW92ZSIsImhhbmRsZVRvdWNoRW5kIiwidGhyb3R0bGUiLCJoYW5kbGVTY3JvbGwiLCJkZWJvdW5jZSIsImhhbmRsZVJlc2l6ZSIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIkRhdGUiLCJub3ciLCJkZWx0YVgiLCJhYnMiLCJkZWx0YVkiLCJkZWx0YVRpbWUiLCJkZXRlY3RTd2lwZSIsImFic0RlbHRhWCIsImFic0RlbHRhWSIsIm9uU3dpcGVSaWdodCIsIm9uU3dpcGVMZWZ0Iiwib25Td2lwZURvd24iLCJvblN3aXBlVXAiLCJjb250YWlucyIsImVtaXRFdmVudCIsImFjdGlvbiIsInNjcm9sbFkiLCJfdGhpcyIsIm9ic2VydmVyT3B0aW9ucyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaGFuZGxlSW50ZXJzZWN0aW9uIiwicmV2ZWFsRWxlbWVudHMiLCJlbCIsIm9ic2VydmUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJjaGlsZCIsImluZGV4IiwiX3RoaXMyIiwiaW50ZXJhY3RpdmVFbGVtZW50cyIsImFkZFRvdWNoRmVlZGJhY2siLCJyZW1vdmVUb3VjaEZlZWRiYWNrIiwiZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJuYXZpZ2F0b3IiLCJ2aWJyYXRlIiwiX3RoaXMzIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxEaXJlY3Rpb24iLCJoYW5kbGVIZWFkZXJTY3JvbGwiLCJoYW5kbGVQYXJhbGxheCIsImNsZWFyVGltZW91dCIsImRpcmVjdGlvbiIsImhlYWRlciIsInBhcmFsbGF4RWxlbWVudHMiLCJzcGVlZCIsImRhdGFzZXQiLCJ5UG9zIiwiZnVuYyIsImRlbGF5IiwidGltZW91dElkIiwibGFzdEV4ZWNUaW1lIiwiX3RoaXM0IiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjdXJyZW50VGltZSIsImFwcGx5IiwiX3RoaXM1IiwiX2xlbjIiLCJfa2V5MiIsImV2ZW50TmFtZSIsImRldGFpbCIsInVuZGVmaW5lZCIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwib2JzZXJ2ZUVsZW1lbnQiLCJ1bm9ic2VydmVFbGVtZW50IiwidW5vYnNlcnZlIiwiZGVzdHJveSIsImRpc2Nvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZUl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==