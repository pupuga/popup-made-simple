/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const settings = {
  postType: "popup-made-simple",
  defaultValues: {
    position: "center-center",
    formStyle: false,
    animation: "fade",
    windowWidth: 800,
    padding: 10,
    borderThickness: 1,
    borderColor: "lightgray",
    borderRadius: 0,
    backgroundColor: "#FFFFFF",
    appearTime: 0,
    close: true
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);

/***/ }),

/***/ "./src/admin/index.scss":
/*!******************************!*\
  !*** ./src/admin/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/admin/index.scss");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ "./src/settings.js");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const positionOptions = [{
  label: "Center Center",
  value: "center-center"
}, {
  label: "Top Center",
  value: "top-center"
}, {
  label: "Top Right",
  value: "top-right"
}, {
  label: "Bottom Center",
  value: "bottom-center"
}, {
  label: "Bottom Right",
  value: "bottom-right"
}];
const animationOptions = [{
  label: "Fade",
  value: "fade"
}, {
  label: "From Top",
  value: "from-top"
}, {
  label: "From Bottom",
  value: "from-bottom"
}];
const PostTypeSidebar = () => {
  const {
    meta,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const editor = select("core/editor");
    return {
      meta: editor.getEditedPostAttribute("meta") || {},
      postType: editor.getCurrentPostType()
    };
  }, []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)("core/editor");
  const [pages, setPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  if (postType !== _settings__WEBPACK_IMPORTED_MODULE_1__["default"].postType) {
    return null;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    const defaultMeta = {
      _popup_made_simple_position: meta?._popup_made_simple_position || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.position,
      _popup_made_simple_animation: meta?._popup_made_simple_animation || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.animation,
      _popup_made_simple_form_style: meta?._popup_made_simple_form_style || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.formStyle,
      _popup_made_simple_window_width: meta?._popup_made_simple_window_width || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.windowWidth,
      _popup_made_simple_window_padding: meta?._popup_made_simple_window_padding || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.padding,
      _popup_made_simple_window_border_thickness: meta?._popup_made_simple_window_border_thickness || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.borderThickness,
      _popup_made_simple_window_border_color: meta?._popup_made_simple_window_border_color || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.borderColor,
      _popup_made_simple_window_border_radius: meta?._popup_made_simple_window_border_radius || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.borderRadius,
      _popup_made_simple_window_background_color: meta?._popup_made_simple_window_background_color || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.backgroundColor,
      _popup_made_simple_appear_time: meta?._popup_made_simple_appear_time || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.appearTime,
      _popup_made_simple_close: meta?._popup_made_simple_close || _settings__WEBPACK_IMPORTED_MODULE_1__["default"].defaultValues.close
    };
    editPost({
      meta: {
        ...meta,
        ...defaultMeta
      }
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    wp.apiFetch({
      path: "/wp/v2/pages"
    }).then(response => {
      const pageOptions = response.map(page => ({
        label: page.title.rendered,
        value: page.id
      }));
      setPages(pageOptions);
    }).catch(error => {
      console.error("Error fetching pages:", error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
      name: `${_settings__WEBPACK_IMPORTED_MODULE_1__["default"].postType}-config`,
      title: "Popup Config",
      className: `${_settings__WEBPACK_IMPORTED_MODULE_1__["default"].postType}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: "Select a page",
        value: meta?._popup_made_simple_page || "",
        options: [{
          label: "All pages",
          value: "0"
        }, ...pages],
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_page: value
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: "Select a popup position",
        value: meta?._popup_made_simple_position,
        options: positionOptions,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_position: value
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "field-wrapper-row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
          label: "Using form style",
          checked: meta?._popup_made_simple_form_style,
          onChange: value => editPost({
            meta: {
              ...meta,
              _popup_made_simple_form_style: value
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: "Select a type of animation",
        value: meta?._popup_made_simple_animation,
        options: animationOptions,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_animation: value
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: "Enter a window width (px)",
        value: meta?._popup_made_simple_window_width,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_window_width: value
          }
        }),
        min: 500,
        max: 4096
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: "Enter a window padding (px)",
        value: meta?._popup_made_simple_window_padding,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_window_padding: value
          }
        }),
        min: 0,
        max: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: "Enter a window border thickness (px)",
        value: meta?._popup_made_simple_window_border_thickness,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_window_border_thickness: value
          }
        }),
        min: 1,
        max: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "field-wrapper-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          children: "Choose a window border color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
          color: meta?._popup_made_simple_window_border_color,
          onChange: value => editPost({
            meta: {
              ...meta,
              _popup_made_simple_window_border_color: value
            }
          }),
          enableAlpha: false
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: "Enter a window border radius (px)",
        value: meta?._popup_made_simple_window_border_radius,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_window_border_radius: value
          }
        }),
        min: 0,
        max: 50
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "field-wrapper-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
          children: "Choose a window background color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
          color: meta?._popup_made_simple_window_background_color,
          onChange: value => editPost({
            meta: {
              ...meta,
              _popup_made_simple_window_background_color: value
            }
          }),
          enableAlpha: false
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: "Enter a time until appearance (s)",
        value: meta?._popup_made_simple_appear_time,
        onChange: value => editPost({
          meta: {
            ...meta,
            _popup_made_simple_appear_time: value
          }
        }),
        min: 0,
        max: 10 * 60
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "field-wrapper-row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.CheckboxControl, {
          label: "The closing like the acceptance",
          checked: meta?._popup_made_simple_close,
          onChange: value => editPost({
            meta: {
              ...meta,
              _popup_made_simple_close: value
            }
          })
        })
      })]
    })
  });
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)(`${_settings__WEBPACK_IMPORTED_MODULE_1__["default"].postType}-sidebar`, {
  render: PostTypeSidebar
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map