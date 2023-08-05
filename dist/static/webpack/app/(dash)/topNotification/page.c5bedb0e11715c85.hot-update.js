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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/utils/DynamicToolBar */ \"(app-client)/./src/app/components/utils/DynamicToolBar.jsx\");\n/* harmony import */ var _app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/loading/Loading */ \"(app-client)/./src/app/components/loading/Loading.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* harmony import */ var _app_components_topNotification_CreateTopNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/topNotification/CreateTopNotification */ \"(app-client)/./src/app/components/topNotification/CreateTopNotification.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Components\n\n\n// Fetch Data\n\n\n// Token\n\n\nfunction TopNotificationScreen() {\n    _s();\n    const [isCreated, setIsCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n    const fetcher = async (url)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(url, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return data;\n        } catch (err) {\n            console.log(err);\n            return err.message;\n        }\n    };\n    const { isLoading, data: notificationArr, error } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(\"https://webullish.space\", \"/api/top_notification/show_all\"), fetcher);\n    console.log(notificationArr);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n        lineNumber: 43,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Top Notification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isCreated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_topNotification_CreateTopNotification__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    setIsCreated: setIsCreated\n                }, void 0, false, {\n                    fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Top Notification\",\n                        setIsCreated: setIsCreated\n                    }, void 0, false, {\n                        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TopNotificationScreen, \"M6OqerqdF2TCUicOd5zjVVrMwDA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TopNotificationScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNotificationScreen);\nvar _c;\n$RefreshReg$(_c, \"TopNotificationScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUN4QyxhQUFhO0FBQ3NEO0FBQ1o7QUFDdkQsYUFBYTtBQUNhO0FBQ0Q7QUFDekIsUUFBUTtBQUMwQztBQUN5QztBQUUzRixTQUFTUTs7SUFDUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVUsUUFBUUwsK0RBQVFBO0lBRXRCLE1BQU1NLFVBQVUsT0FBT0M7UUFDckIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQ0YsS0FBSztnQkFDcENHLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47Z0JBQzNCO1lBQ0Y7WUFDQSxPQUFPRztRQUNULEVBQUUsT0FBT0ksS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT0EsSUFBSUcsT0FBTztRQUNwQjtJQUNGO0lBRUEsTUFBTSxFQUNKQyxTQUFTLEVBQ1RSLE1BQU1TLGVBQWUsRUFDckJDLEtBQUssRUFDTixHQUFHbkIsK0NBQU1BLENBQ1IsR0FBa0MsT0FBL0JvQix5QkFBOEIsRUFBQyxtQ0FDbENiO0lBR0ZPLFFBQVFDLEdBQUcsQ0FBQ0c7SUFFWixJQUFJRCxXQUFXLHFCQUFPLDhEQUFDbkIsdUVBQU9BOzs7OztJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUN5QjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQzswQkFDRXBCLDBCQUNDLDhEQUFDRiw2RkFBcUJBO29CQUFDRyxjQUFjQTs7Ozs7eUNBRXJDOzhCQUNFLDRFQUFDUiw0RUFBY0E7d0JBQUMwQixPQUFRO3dCQUFtQmxCLGNBQWNBOzs7Ozs7Ozs7Ozs7OztBQU1yRTtHQTdDU0Y7O1FBdUJISCwyQ0FBTUE7OztLQXZCSEc7QUErQ1QsK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhkYXNoKS90b3BOb3RpZmljYXRpb24vcGFnZS5qc3g/M2NiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IER5bmFtaWNUb29sQmFyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3V0aWxzL0R5bmFtaWNUb29sQmFyXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvTG9hZGluZ1wiO1xyXG4vLyBGZXRjaCBEYXRhXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbi8vIFRva2VuXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIkAvYXBwL2xpYi9sb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IENyZWF0ZVRvcE5vdGlmaWNhdGlvbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy90b3BOb3RpZmljYXRpb24vQ3JlYXRlVG9wTm90aWZpY2F0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BOb3RpZmljYXRpb25TY3JlZW4oKSB7XHJcbiAgY29uc3QgW2lzQ3JlYXRlZCwgc2V0SXNDcmVhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG5cclxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBkYXRhOiBub3RpZmljYXRpb25BcnIsXHJcbiAgICBlcnJvcixcclxuICB9ID0gdXNlU1dSKFxyXG4gICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0JEfS9hcGkvdG9wX25vdGlmaWNhdGlvbi9zaG93X2FsbGAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uQXJyKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGl0bGU+VG9wIE5vdGlmaWNhdGlvbjwvdGl0bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2lzQ3JlYXRlZCA/IChcclxuICAgICAgICAgIDxDcmVhdGVUb3BOb3RpZmljYXRpb24gc2V0SXNDcmVhdGVkPXtzZXRJc0NyZWF0ZWR9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxEeW5hbWljVG9vbEJhciB0aXRsZT17YFRvcCBOb3RpZmljYXRpb25gfSBzZXRJc0NyZWF0ZWQ9e3NldElzQ3JlYXRlZH0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTm90aWZpY2F0aW9uU2NyZWVuO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkR5bmFtaWNUb29sQmFyIiwiTG9hZGluZyIsImF4aW9zIiwidXNlU1dSIiwiZ2V0VG9rZW4iLCJDcmVhdGVUb3BOb3RpZmljYXRpb24iLCJUb3BOb3RpZmljYXRpb25TY3JlZW4iLCJpc0NyZWF0ZWQiLCJzZXRJc0NyZWF0ZWQiLCJ0b2tlbiIsImZldGNoZXIiLCJ1cmwiLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImlzTG9hZGluZyIsIm5vdGlmaWNhdGlvbkFyciIsImVycm9yIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTF9CRCIsInRpdGxlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(dash)/topNotification/page.jsx\n"));

/***/ })

});