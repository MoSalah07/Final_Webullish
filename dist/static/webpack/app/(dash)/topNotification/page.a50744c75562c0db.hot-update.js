"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dash)/topNotification/page",{

/***/ "(app-client)/./src/app/(dash)/topNotification/page.jsx":
/*!*************************************************!*\
  !*** ./src/app/(dash)/topNotification/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/utils/DynamicToolBar */ \"(app-client)/./src/app/components/utils/DynamicToolBar.jsx\");\n/* harmony import */ var _app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/loading/Loading */ \"(app-client)/./src/app/components/loading/Loading.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* harmony import */ var _app_components_topNotification_CreateTopNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/topNotification/CreateTopNotification */ \"(app-client)/./src/app/components/topNotification/CreateTopNotification.jsx\");\n/* harmony import */ var _app_components_topNotification_ContentTopNotification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/topNotification/ContentTopNotification */ \"(app-client)/./src/app/components/topNotification/ContentTopNotification.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Components\n\n\n// Fetch Data\n\n\n// Token\n\n\n\nfunction TopNotificationScreen() {\n    _s();\n    const [isCreated, setIsCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n    const fetcher = async (url)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return data;\n        } catch (err) {\n            console.log(err);\n            return err.message;\n        }\n    };\n    const { isLoading, data: notificationArr, error } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(\"https://webullish.space\", \"/api/top_notification/show_all\"), fetcher);\n    console.log(notificationArr);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n        lineNumber: 44,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Top Notification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isCreated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_topNotification_CreateTopNotification__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    setIsCreated: setIsCreated\n                }, void 0, false, {\n                    fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"Top Notification\",\n                            setIsCreated: setIsCreated\n                        }, void 0, false, {\n                            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_topNotification_ContentTopNotification__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TopNotificationScreen, \"M6OqerqdF2TCUicOd5zjVVrMwDA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TopNotificationScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNotificationScreen);\nvar _c;\n$RefreshReg$(_c, \"TopNotificationScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDeEMsYUFBYTtBQUNzRDtBQUNaO0FBQ3ZELGFBQWE7QUFDYTtBQUNEO0FBQ3pCLFFBQVE7QUFDMEM7QUFDeUM7QUFDRTtBQUU3RixTQUFTUzs7SUFDUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVcsUUFBUU4sK0RBQVFBO0lBRXRCLE1BQU1PLFVBQVUsT0FBT0M7UUFDckIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVgsNkNBQUtBLENBQUNZLEdBQUcsQ0FBQ0YsS0FBSztnQkFDcENHLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQzNCO1lBQ0Y7WUFDQSxPQUFPRztRQUNULEVBQUUsT0FBT0ksS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT0EsSUFBSUcsT0FBTztRQUNwQjtJQUNGO0lBRUEsTUFBTSxFQUNKQyxTQUFTLEVBQ1RSLE1BQU1TLGVBQWUsRUFDckJDLEtBQUssRUFDTixHQUFHcEIsK0NBQU1BLENBQ1IsR0FBa0MsT0FBL0JxQix5QkFBOEIsRUFBQyxtQ0FDbENiO0lBR0ZPLFFBQVFDLEdBQUcsQ0FBQ0c7SUFFWixJQUFJRCxXQUFXLHFCQUFPLDhEQUFDcEIsdUVBQU9BOzs7OztJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUMwQjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQzswQkFDRXBCLDBCQUNDLDhEQUFDSCw2RkFBcUJBO29CQUFDSSxjQUFjQTs7Ozs7eUNBRXJDOztzQ0FDSSw4REFBQ1QsNEVBQWNBOzRCQUFDMkIsT0FBUTs0QkFBbUJsQixjQUFjQTs7Ozs7O3NDQUN6RCw4REFBQ0gsOEZBQXNCQTs7Ozs7Ozs7Ozs7Ozs7QUFNckM7R0E5Q1NDOztRQXVCSEosMkNBQU1BOzs7S0F2QkhJO0FBZ0RULCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4PzNjYmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBEeW5hbWljVG9vbEJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy91dGlscy9EeW5hbWljVG9vbEJhclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9sb2FkaW5nL0xvYWRpbmdcIjtcclxuLy8gRmV0Y2ggRGF0YVxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG4vLyBUb2tlblxyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJAL2FwcC9saWIvbG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCBDcmVhdGVUb3BOb3RpZmljYXRpb24gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvdG9wTm90aWZpY2F0aW9uL0NyZWF0ZVRvcE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgQ29udGVudFRvcE5vdGlmaWNhdGlvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy90b3BOb3RpZmljYXRpb24vQ29udGVudFRvcE5vdGlmaWNhdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gVG9wTm90aWZpY2F0aW9uU2NyZWVuKCkge1xyXG4gIGNvbnN0IFtpc0NyZWF0ZWQsIHNldElzQ3JlYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICByZXR1cm4gZXJyLm1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgZGF0YTogbm90aWZpY2F0aW9uQXJyLFxyXG4gICAgZXJyb3IsXHJcbiAgfSA9IHVzZVNXUihcclxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9CRH0vYXBpL3RvcF9ub3RpZmljYXRpb24vc2hvd19hbGxgLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIGNvbnNvbGUubG9nKG5vdGlmaWNhdGlvbkFycik7XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPjtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHRpdGxlPlRvcCBOb3RpZmljYXRpb248L3RpdGxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpc0NyZWF0ZWQgPyAoXHJcbiAgICAgICAgICA8Q3JlYXRlVG9wTm90aWZpY2F0aW9uIHNldElzQ3JlYXRlZD17c2V0SXNDcmVhdGVkfSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxEeW5hbWljVG9vbEJhciB0aXRsZT17YFRvcCBOb3RpZmljYXRpb25gfSBzZXRJc0NyZWF0ZWQ9e3NldElzQ3JlYXRlZH0gLz5cclxuICAgICAgICAgICAgICA8Q29udGVudFRvcE5vdGlmaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOb3RpZmljYXRpb25TY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHluYW1pY1Rvb2xCYXIiLCJMb2FkaW5nIiwiYXhpb3MiLCJ1c2VTV1IiLCJnZXRUb2tlbiIsIkNyZWF0ZVRvcE5vdGlmaWNhdGlvbiIsIkNvbnRlbnRUb3BOb3RpZmljYXRpb24iLCJUb3BOb3RpZmljYXRpb25TY3JlZW4iLCJpc0NyZWF0ZWQiLCJzZXRJc0NyZWF0ZWQiLCJ0b2tlbiIsImZldGNoZXIiLCJ1cmwiLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImlzTG9hZGluZyIsIm5vdGlmaWNhdGlvbkFyciIsImVycm9yIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTF9CRCIsInRpdGxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(dash)/topNotification/page.jsx\n"));

/***/ }),

/***/ "(app-client)/./src/app/components/topNotification/ContentTopNotification.jsx":
/*!***********************************************************************!*\
  !*** ./src/app/components/topNotification/ContentTopNotification.jsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ContentTopNotification() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"ContentTopNotification\"\n    }, void 0, false, {\n        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\components\\\\topNotification\\\\ContentTopNotification.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ContentTopNotification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentTopNotification);\nvar _c;\n$RefreshReg$(_c, \"ContentTopNotification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL3RvcE5vdGlmaWNhdGlvbi9Db250ZW50VG9wTm90aWZpY2F0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QjtBQUV6QixTQUFTQztJQUNQLHFCQUNFLDhEQUFDQztrQkFBSTs7Ozs7O0FBRVQ7S0FKU0Q7QUFNVCwrREFBZUEsc0JBQXNCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy90b3BOb3RpZmljYXRpb24vQ29udGVudFRvcE5vdGlmaWNhdGlvbi5qc3g/YzQ1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBDb250ZW50VG9wTm90aWZpY2F0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PkNvbnRlbnRUb3BOb3RpZmljYXRpb248L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRUb3BOb3RpZmljYXRpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250ZW50VG9wTm90aWZpY2F0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/topNotification/ContentTopNotification.jsx\n"));

/***/ })

});