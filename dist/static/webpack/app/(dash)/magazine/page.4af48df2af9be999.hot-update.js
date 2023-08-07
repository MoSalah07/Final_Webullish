"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dash)/magazine/page",{

/***/ "(app-client)/./src/app/(dash)/magazine/page.jsx":
/*!******************************************!*\
  !*** ./src/app/(dash)/magazine/page.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/utils/DynamicToolBar */ \"(app-client)/./src/app/components/utils/DynamicToolBar.jsx\");\n/* harmony import */ var _app_components_magazine_contentMagazine_MainMagazine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/magazine/contentMagazine/MainMagazine */ \"(app-client)/./src/app/components/magazine/contentMagazine/MainMagazine.jsx\");\n/* harmony import */ var _app_components_magazine_CreateMagazine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/magazine/CreateMagazine */ \"(app-client)/./src/app/components/magazine/CreateMagazine.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Components\n\n\n\n// Fetch Data\n\n\n// Token\n\nfunction Magazine() {\n    _s();\n    const [isCreated, setIsCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_6__.getToken)();\n    const fetcher = async (url)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(url, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return data;\n        } catch (err) {\n            console.log(err.message);\n            return err;\n        }\n    };\n    const { isLoading, data: magazineArr, error } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"\".concat(\"https://webullish.space\", \"/api/magazine/show_all\"), fetcher);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: isCreated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_magazine_CreateMagazine__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setIsCreated: setIsCreated\n                }, void 0, false, {\n                    fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\magazine\\\\page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"All blog magazine\",\n                        setIsCreated: setIsCreated\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\magazine\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_magazine_contentMagazine_MainMagazine__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        magazineArr: magazineArr\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\magazine\\\\page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\magazine\\\\page.jsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Magazine, \"bDL7+MO70MgJ3lg+1mfNU9kys38=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Magazine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Magazine);\nvar _c;\n$RefreshReg$(_c, \"Magazine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oZGFzaCkvbWFnYXppbmUvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ3hDLGFBQWE7QUFDc0Q7QUFDZTtBQUNaO0FBQ3RFLGFBQWE7QUFDYTtBQUNEO0FBQ3pCLFFBQVE7QUFDMEM7QUFFbEQsU0FBU1E7O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1VLFFBQVFKLCtEQUFRQTtJQUV0QixNQUFNSyxVQUFVLE9BQU9DO1FBQ3JCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ULDZDQUFLQSxDQUFDVSxHQUFHLENBQUNGLEtBQUs7Z0JBQ3BDRyxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5OO2dCQUMzQjtZQUNGO1lBQ0EsT0FBT0c7UUFDVCxFQUFFLE9BQU9JLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxPQUFPO1lBQ3ZCLE9BQU9IO1FBQ1Q7SUFDRjtJQUVBLE1BQU0sRUFDSkksU0FBUyxFQUNUUixNQUFNUyxXQUFXLEVBQ2pCQyxLQUFLLEVBQ04sR0FBR2xCLCtDQUFNQSxDQUNSLEdBQWtDLE9BQS9CbUIseUJBQThCLEVBQUMsMkJBQ2xDYjtJQUdGLHFCQUNFO2tCQUNFLDRFQUFDZ0I7c0JBQ0VuQiwwQkFDQzswQkFDRSw0RUFBQ0wsK0VBQWNBO29CQUFDTSxjQUFjQTs7Ozs7OzhDQUdoQzs7a0NBQ0UsOERBQUNSLDRFQUFjQTt3QkFDYjJCLE9BQVE7d0JBQ1JuQixjQUFjQTs7Ozs7O2tDQUVoQiw4REFBQ1AsNkZBQVlBO3dCQUFDb0IsYUFBYUE7Ozs7Ozs7Ozs7Ozs7O0FBTXZDO0dBL0NTZjs7UUF1QkhGLDJDQUFNQTs7O0tBdkJIRTtBQWlEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhkYXNoKS9tYWdhemluZS9wYWdlLmpzeD8yODg3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRHluYW1pY1Rvb2xCYXIgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvdXRpbHMvRHluYW1pY1Rvb2xCYXJcIjtcclxuaW1wb3J0IE1haW5NYWdhemluZSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9tYWdhemluZS9jb250ZW50TWFnYXppbmUvTWFpbk1hZ2F6aW5lXCI7XHJcbmltcG9ydCBDcmVhdGVNYWdhemluZSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9tYWdhemluZS9DcmVhdGVNYWdhemluZVwiO1xyXG4vLyBGZXRjaCBEYXRhXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbi8vIFRva2VuXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIkAvYXBwL2xpYi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIE1hZ2F6aW5lKCkge1xyXG4gIGNvbnN0IFtpc0NyZWF0ZWQsIHNldElzQ3JlYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgZGF0YTogbWFnYXppbmVBcnIsXHJcbiAgICBlcnJvcixcclxuICB9ID0gdXNlU1dSKFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0JEfS9hcGkvbWFnYXppbmUvc2hvd19hbGxgLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpc0NyZWF0ZWQgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q3JlYXRlTWFnYXppbmUgc2V0SXNDcmVhdGVkPXtzZXRJc0NyZWF0ZWR9IC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPER5bmFtaWNUb29sQmFyXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2BBbGwgYmxvZyBtYWdhemluZWB9XHJcbiAgICAgICAgICAgICAgc2V0SXNDcmVhdGVkPXtzZXRJc0NyZWF0ZWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxNYWluTWFnYXppbmUgbWFnYXppbmVBcnI9e21hZ2F6aW5lQXJyfSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdhemluZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEeW5hbWljVG9vbEJhciIsIk1haW5NYWdhemluZSIsIkNyZWF0ZU1hZ2F6aW5lIiwiYXhpb3MiLCJ1c2VTV1IiLCJnZXRUb2tlbiIsIk1hZ2F6aW5lIiwiaXNDcmVhdGVkIiwic2V0SXNDcmVhdGVkIiwidG9rZW4iLCJmZXRjaGVyIiwidXJsIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJpc0xvYWRpbmciLCJtYWdhemluZUFyciIsImVycm9yIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTF9CRCIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(dash)/magazine/page.jsx\n"));

/***/ })

});