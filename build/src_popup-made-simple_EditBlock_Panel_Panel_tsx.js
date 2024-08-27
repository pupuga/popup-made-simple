"use strict";
(self["webpackChunkpopup_made_simple"] = self["webpackChunkpopup_made_simple"] || []).push([["src_popup-made-simple_EditBlock_Panel_Panel_tsx"],{

/***/ "./src/popup-made-simple/EditBlock/BlockContext.tsx":
/*!**********************************************************!*\
  !*** ./src/popup-made-simple/EditBlock/BlockContext.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockContext: () => (/* binding */ BlockContext),
/* harmony export */   DataContext: () => (/* binding */ DataContext),
/* harmony export */   InputContext: () => (/* binding */ InputContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BlockContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('block');
const DataContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('data');
const InputContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('input');

/***/ }),

/***/ "./src/popup-made-simple/EditBlock/Panel/Panel.tsx":
/*!*********************************************************!*\
  !*** ./src/popup-made-simple/EditBlock/Panel/Panel.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BlockContext */ "./src/popup-made-simple/EditBlock/BlockContext.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Panel = props => {
  const data = {};
  const input = {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_BlockContext__WEBPACK_IMPORTED_MODULE_1__.BlockContext.Provider, {
    value: props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_BlockContext__WEBPACK_IMPORTED_MODULE_1__.DataContext.Provider, {
      value: data,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_BlockContext__WEBPACK_IMPORTED_MODULE_1__.InputContext.Provider, {
        value: input,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sample title'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
            children: "Sample row"
          })
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);

/***/ })

}]);
//# sourceMappingURL=src_popup-made-simple_EditBlock_Panel_Panel_tsx.js.map