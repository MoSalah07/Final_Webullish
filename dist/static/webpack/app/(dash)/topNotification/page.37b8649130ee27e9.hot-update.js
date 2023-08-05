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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/utils/DynamicToolBar */ \"(app-client)/./src/app/components/utils/DynamicToolBar.jsx\");\n/* harmony import */ var _app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/loading/Loading */ \"(app-client)/./src/app/components/loading/Loading.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Components\n\n\n// Fetch Data\n\n\n// Token\n\nfunction TopNotificationScreen() {\n    _s();\n    const [isCreated, setIsCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n    const fetcher = async (url)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(url, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return data;\n        } catch (err) {\n            console.log(err);\n            return err.message;\n        }\n    };\n    const { isLoading, data: notificationArr, error } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(\"https://webullish.space\", \"/api/top_notification/show_all\"), fetcher);\n    console.log(notificationArr);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n        lineNumber: 42,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Top Notification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isCreated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamCreate, {\n                    setIsCreated: setIsCreated\n                }, void 0, false, {\n                    fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: \"All Team\",\n                            setIsCreated: setIsCreated\n                        }, void 0, false, {\n                            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamHeader, {}, void 0, false, {\n                            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamContent, {\n                            teamArr: teamArr\n                        }, void 0, false, {\n                            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TopNotificationScreen, \"M6OqerqdF2TCUicOd5zjVVrMwDA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TopNotificationScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNotificationScreen);\nvar _c;\n$RefreshReg$(_c, \"TopNotificationScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ3hDLGFBQWE7QUFDc0Q7QUFDWjtBQUN2RCxhQUFhO0FBQ2E7QUFDRDtBQUN6QixRQUFRO0FBQzBDO0FBRWxELFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUyxRQUFRSiwrREFBUUE7SUFFdEIsTUFBTUssVUFBVSxPQUFPQztRQUNyQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDRixLQUFLO2dCQUNwQ0csU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOTjtnQkFDM0I7WUFDRjtZQUNBLE9BQU9HO1FBQ1QsRUFBRSxPQUFPSSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixPQUFPQSxJQUFJRyxPQUFPO1FBQ3BCO0lBQ0Y7SUFFQSxNQUFNLEVBQ0pDLFNBQVMsRUFDVFIsTUFBTVMsZUFBZSxFQUNyQkMsS0FBSyxFQUNOLEdBQUdsQiwrQ0FBTUEsQ0FDUixHQUFrQyxPQUEvQm1CLHlCQUE4QixFQUFDLG1DQUNsQ2I7SUFHRk8sUUFBUUMsR0FBRyxDQUFDRztJQUVaLElBQUlELFdBQVcscUJBQU8sOERBQUNsQix1RUFBT0E7Ozs7O0lBQzlCLHFCQUNFOzswQkFDRSw4REFBQ3dCOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDOzBCQUNFcEIsMEJBQ0MsOERBQUNxQjtvQkFBV3BCLGNBQWNBOzs7Ozt5Q0FFMUI7O3NDQUNFLDhEQUFDUCw0RUFBY0E7NEJBQUN5QixPQUFROzRCQUFXbEIsY0FBY0E7Ozs7OztzQ0FDakQsOERBQUNxQjs7Ozs7c0NBQ0QsOERBQUNDOzRCQUFZQyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDO0dBL0NTekI7O1FBdUJIRiwyQ0FBTUE7OztLQXZCSEU7QUFpRFQsK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhkYXNoKS90b3BOb3RpZmljYXRpb24vcGFnZS5qc3g/M2NiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IER5bmFtaWNUb29sQmFyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3V0aWxzL0R5bmFtaWNUb29sQmFyXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvTG9hZGluZ1wiO1xyXG4vLyBGZXRjaCBEYXRhXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbi8vIFRva2VuXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIkAvYXBwL2xpYi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIFRvcE5vdGlmaWNhdGlvblNjcmVlbigpIHtcclxuICBjb25zdCBbaXNDcmVhdGVkLCBzZXRJc0NyZWF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcblxyXG4gIGNvbnN0IGZldGNoZXIgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgcmV0dXJuIGVyci5tZXNzYWdlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlzTG9hZGluZyxcclxuICAgIGRhdGE6IG5vdGlmaWNhdGlvbkFycixcclxuICAgIGVycm9yLFxyXG4gIH0gPSB1c2VTV1IoXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkxfQkR9L2FwaS90b3Bfbm90aWZpY2F0aW9uL3Nob3dfYWxsYCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICBjb25zb2xlLmxvZyhub3RpZmljYXRpb25BcnIpO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0aXRsZT5Ub3AgTm90aWZpY2F0aW9uPC90aXRsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7aXNDcmVhdGVkID8gKFxyXG4gICAgICAgICAgPFRlYW1DcmVhdGUgc2V0SXNDcmVhdGVkPXtzZXRJc0NyZWF0ZWR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEeW5hbWljVG9vbEJhciB0aXRsZT17YEFsbCBUZWFtYH0gc2V0SXNDcmVhdGVkPXtzZXRJc0NyZWF0ZWR9IC8+XHJcbiAgICAgICAgICAgIDxUZWFtSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxUZWFtQ29udGVudCB0ZWFtQXJyPXt0ZWFtQXJyfSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BOb3RpZmljYXRpb25TY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHluYW1pY1Rvb2xCYXIiLCJMb2FkaW5nIiwiYXhpb3MiLCJ1c2VTV1IiLCJnZXRUb2tlbiIsIlRvcE5vdGlmaWNhdGlvblNjcmVlbiIsImlzQ3JlYXRlZCIsInNldElzQ3JlYXRlZCIsInRva2VuIiwiZmV0Y2hlciIsInVybCIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaXNMb2FkaW5nIiwibm90aWZpY2F0aW9uQXJyIiwiZXJyb3IiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMX0JEIiwidGl0bGUiLCJkaXYiLCJUZWFtQ3JlYXRlIiwiVGVhbUhlYWRlciIsIlRlYW1Db250ZW50IiwidGVhbUFyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(dash)/topNotification/page.jsx\n"));

/***/ })

});