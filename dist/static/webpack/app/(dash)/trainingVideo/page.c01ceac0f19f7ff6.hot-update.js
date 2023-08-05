"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dash)/trainingVideo/page",{

/***/ "(app-client)/./src/app/components/trainingVideo/TrainingCard.jsx":
/*!***********************************************************!*\
  !*** ./src/app/components/trainingVideo/TrainingCard.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-collapse */ \"(app-client)/./node_modules/react-collapse/lib/index.js\");\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"(app-client)/./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/lib/localStorage */ \"(app-client)/./src/app/lib/localStorage.js\");\n/* harmony import */ var _app_lib_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/lib/alerts */ \"(app-client)/./src/app/lib/alerts.js\");\n/* harmony import */ var _utils_FAQComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/FAQComponent */ \"(app-client)/./src/app/components/utils/FAQComponent.jsx\");\n\n\n\n\n// Fetch Data\n\n\n// Token\n\n// Alerts\n\n\nfunction TrainingCard(param) {\n    let { name, description, simple_description, video, video_description, video_title, toggle, id, open } = param;\n    const token = (0,_app_lib_localStorage__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n    const providerFQS = {\n        name: video_title,\n        descrition: video_description,\n        toggle,\n        id,\n        open\n    };\n    console.log(video_description);\n    const handleDeleteFqs = async (e, id)=>{\n        e.preventDefault();\n        try {\n            const { data } = await (0,axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                url: \"\".concat(\"https://webullish.space\", \"/api/training_video/delete/\").concat(id),\n                method: \"POST\",\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            (0,_app_lib_alerts__WEBPACK_IMPORTED_MODULE_6__.toastifySuccess)(\"Deleted Training Video successfully\");\n            (0,swr__WEBPACK_IMPORTED_MODULE_4__.mutate)(\"\".concat(\"https://webullish.space\", \"/api/training_video/show_all\"), true);\n        } catch (err) {\n            (0,_app_lib_alerts__WEBPACK_IMPORTED_MODULE_6__.toastifyError)(err.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_FAQComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            ...providerFQS,\n            callBackDelete: handleDeleteFqs\n        }, void 0, false, {\n            fileName: \"D:\\\\work\\\\Webullish\\\\one\\\\src\\\\app\\\\components\\\\trainingVideo\\\\TrainingCard.jsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = TrainingCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrainingCard);\nvar _c;\n$RefreshReg$(_c, \"TrainingCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL3RyYWluaW5nVmlkZW8vVHJhaW5pbmdDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ1c7QUFDMUMsYUFBYTtBQUNhO0FBQ0c7QUFDN0IsUUFBUTtBQUMwQztBQUNsRCxTQUFTO0FBQ3lEO0FBQ2pCO0FBRWpELFNBQVNTLGFBQWEsS0FVckI7UUFWcUIsRUFDcEJDLElBQUksRUFDSkMsV0FBVyxFQUNYQyxrQkFBa0IsRUFDbEJDLEtBQUssRUFDTEMsaUJBQWlCLEVBQ2pCQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsRUFBRSxFQUNGQyxJQUFJLEVBQ0wsR0FWcUI7SUFXcEIsTUFBTUMsUUFBUWQsK0RBQVFBO0lBRXRCLE1BQU1lLGNBQWM7UUFDbEJWLE1BQU1LO1FBQ05NLFlBQVlQO1FBQ1pFO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFFQUksUUFBUUMsR0FBRyxDQUFDVDtJQUVaLE1BQU1VLGtCQUFrQixPQUFPQyxHQUFHUjtRQUNoQ1EsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNeEIsaURBQUtBLENBQUM7Z0JBQzNCeUIsS0FBSyxHQUErRFgsT0FBNURZLHlCQUE4QixFQUFDLCtCQUFnQyxPQUFIWjtnQkFDcEVlLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTmY7Z0JBQzNCO1lBQ0Y7WUFDQWIsZ0VBQWVBLENBQUM7WUFDaEJGLDJDQUFNQSxDQUNKLEdBQWtDLE9BQS9CeUIseUJBQThCLEVBQUMsaUNBQ2xDO1FBRUosRUFBRSxPQUFPTSxLQUFLO1lBQ1o1Qiw4REFBYUEsQ0FBQzRCLElBQUlDLE9BQU87UUFDM0I7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDNUIsMkRBQVlBO1lBQUUsR0FBR1ksV0FBVztZQUFFaUIsZ0JBQWdCYjs7Ozs7OztBQUdyRDtLQWhEU2Y7QUFrRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3RyYWluaW5nVmlkZW8vVHJhaW5pbmdDYXJkLmpzeD81MTBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcInJlYWN0LWNvbGxhcHNlXCI7XHJcbi8vIEZldGNoIERhdGFcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbi8vIFRva2VuXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIkAvYXBwL2xpYi9sb2NhbFN0b3JhZ2VcIjtcclxuLy8gQWxlcnRzXHJcbmltcG9ydCB7IHRvYXN0aWZ5U3VjY2VzcywgdG9hc3RpZnlFcnJvciB9IGZyb20gXCJAL2FwcC9saWIvYWxlcnRzXCI7XHJcbmltcG9ydCBGQVFDb21wb25lbnQgZnJvbSBcIi4uL3V0aWxzL0ZBUUNvbXBvbmVudFwiO1xyXG5cclxuZnVuY3Rpb24gVHJhaW5pbmdDYXJkKHtcclxuICBuYW1lLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIHNpbXBsZV9kZXNjcmlwdGlvbixcclxuICB2aWRlbyxcclxuICB2aWRlb19kZXNjcmlwdGlvbixcclxuICB2aWRlb190aXRsZSxcclxuICB0b2dnbGUsXHJcbiAgaWQsXHJcbiAgb3BlbixcclxufSkge1xyXG4gIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcclxuXHJcbiAgY29uc3QgcHJvdmlkZXJGUVMgPSB7XHJcbiAgICBuYW1lOiB2aWRlb190aXRsZSxcclxuICAgIGRlc2NyaXRpb246IHZpZGVvX2Rlc2NyaXB0aW9uLFxyXG4gICAgdG9nZ2xlLFxyXG4gICAgaWQsXHJcbiAgICBvcGVuLFxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKHZpZGVvX2Rlc2NyaXB0aW9uKVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVGcXMgPSBhc3luYyAoZSwgaWQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0JEfS9hcGkvdHJhaW5pbmdfdmlkZW8vZGVsZXRlLyR7aWR9YCxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0b2FzdGlmeVN1Y2Nlc3MoXCJEZWxldGVkIFRyYWluaW5nIFZpZGVvIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgbXV0YXRlKFxyXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9CRH0vYXBpL3RyYWluaW5nX3ZpZGVvL3Nob3dfYWxsYCxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3RpZnlFcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGQVFDb21wb25lbnQgey4uLnByb3ZpZGVyRlFTfSBjYWxsQmFja0RlbGV0ZT17aGFuZGxlRGVsZXRlRnFzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhaW5pbmdDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkNvbGxhcHNlIiwiYXhpb3MiLCJtdXRhdGUiLCJnZXRUb2tlbiIsInRvYXN0aWZ5U3VjY2VzcyIsInRvYXN0aWZ5RXJyb3IiLCJGQVFDb21wb25lbnQiLCJUcmFpbmluZ0NhcmQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzaW1wbGVfZGVzY3JpcHRpb24iLCJ2aWRlbyIsInZpZGVvX2Rlc2NyaXB0aW9uIiwidmlkZW9fdGl0bGUiLCJ0b2dnbGUiLCJpZCIsIm9wZW4iLCJ0b2tlbiIsInByb3ZpZGVyRlFTIiwiZGVzY3JpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGVGcXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1VSTF9CRCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZXJyIiwibWVzc2FnZSIsImNhbGxCYWNrRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/trainingVideo/TrainingCard.jsx\n"));

/***/ })

});