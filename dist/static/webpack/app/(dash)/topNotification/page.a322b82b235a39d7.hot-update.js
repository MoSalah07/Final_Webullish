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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_utils_DynamicToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/utils/DynamicToolBar */ \"(app-client)/./src/app/components/utils/DynamicToolBar.jsx\");\n/* harmony import */ var _app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/loading/Loading */ \"(app-client)/./src/app/components/loading/Loading.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Components\n\n\n// Fetch Data\n\n\n// Token\n\nfunction TopNotificationScreen() {\n    _s();\n    const [isCreated, setIsCreated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n    const fetcher = async (url)=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(url, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            return data;\n        } catch (err) {\n            console.log(err);\n            return err.message;\n        }\n    };\n    const { isLoading, data: notificationArr, error } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(\"https://webullish.space\", \"/api/top_notification/show_all\"), fetcher);\n    console.log(notificationArr);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_loading_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n        lineNumber: 39,\n        columnNumber: 25\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Top Notification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"TopNotificationScreen\"\n            }, void 0, false, {\n                fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\(dash)\\\\topNotification\\\\page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TopNotificationScreen, \"M6OqerqdF2TCUicOd5zjVVrMwDA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = TopNotificationScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNotificationScreen);\nvar _c;\n$RefreshReg$(_c, \"TopNotificationScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ3hDLGFBQWE7QUFDc0Q7QUFDWjtBQUN2RCxhQUFhO0FBQ2E7QUFDRDtBQUN6QixRQUFRO0FBQzBDO0FBRWxELFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUyxRQUFRSiwrREFBUUE7SUFFdEIsTUFBTUssVUFBVSxPQUFPQztRQUNyQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNVCw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDRixLQUFLO2dCQUNwQ0csU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOTjtnQkFDM0I7WUFDRjtZQUNBLE9BQU9HO1FBQ1QsRUFBRSxPQUFPSSxLQUFLO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixPQUFPQSxJQUFJRyxPQUFPO1FBQ3BCO0lBQ0Y7SUFFQSxNQUFNLEVBQ0pDLFNBQVMsRUFDVFIsTUFBTVMsZUFBZSxFQUNyQkMsS0FBSyxFQUNOLEdBQUdsQiwrQ0FBTUEsQ0FBQyxHQUFrQyxPQUEvQm1CLHlCQUE4QixFQUFDLG1DQUFpQ2I7SUFFOUVPLFFBQVFDLEdBQUcsQ0FBQ0c7SUFFWixJQUFJRCxXQUFXLHFCQUFPLDhEQUFDbEIsdUVBQU9BOzs7OztJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUN3QjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQzswQkFBSTs7Ozs7Ozs7QUFHWDtHQWxDU3JCOztRQXVCSEYsMkNBQU1BOzs7S0F2QkhFO0FBb0NULCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oZGFzaCkvdG9wTm90aWZpY2F0aW9uL3BhZ2UuanN4PzNjYmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBEeW5hbWljVG9vbEJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy91dGlscy9EeW5hbWljVG9vbEJhclwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9sb2FkaW5nL0xvYWRpbmdcIjtcclxuLy8gRmV0Y2ggRGF0YVxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG4vLyBUb2tlblxyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJAL2FwcC9saWIvbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BOb3RpZmljYXRpb25TY3JlZW4oKSB7XHJcbiAgY29uc3QgW2lzQ3JlYXRlZCwgc2V0SXNDcmVhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBnZXRUb2tlbigpO1xyXG5cclxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpc0xvYWRpbmcsXHJcbiAgICBkYXRhOiBub3RpZmljYXRpb25BcnIsXHJcbiAgICBlcnJvcixcclxuICB9ID0gdXNlU1dSKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9CRH0vYXBpL3RvcF9ub3RpZmljYXRpb24vc2hvd19hbGxgLCBmZXRjaGVyKTtcclxuXHJcbiAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uQXJyKVxyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz47XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0aXRsZT5Ub3AgTm90aWZpY2F0aW9uPC90aXRsZT5cclxuICAgICAgPGRpdj5Ub3BOb3RpZmljYXRpb25TY3JlZW48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5vdGlmaWNhdGlvblNjcmVlbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEeW5hbWljVG9vbEJhciIsIkxvYWRpbmciLCJheGlvcyIsInVzZVNXUiIsImdldFRva2VuIiwiVG9wTm90aWZpY2F0aW9uU2NyZWVuIiwiaXNDcmVhdGVkIiwic2V0SXNDcmVhdGVkIiwidG9rZW4iLCJmZXRjaGVyIiwidXJsIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJpc0xvYWRpbmciLCJub3RpZmljYXRpb25BcnIiLCJlcnJvciIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkxfQkQiLCJ0aXRsZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(dash)/topNotification/page.jsx\n"));

/***/ })

});