/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/cards"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fcharl%2Fgitstuffs%2Flinuxgamer.github.io%2Fpages%2Fcards.js&page=%2Fcards!":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fcharl%2Fgitstuffs%2Flinuxgamer.github.io%2Fpages%2Fcards.js&page=%2Fcards! ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/cards\",\n      function () {\n        return __webpack_require__(/*! ./pages/cards.js */ \"./pages/cards.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/cards\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGY2hhcmwlMkZnaXRzdHVmZnMlMkZsaW51eGdhbWVyLmdpdGh1Yi5pbyUyRnBhZ2VzJTJGY2FyZHMuanMmcGFnZT0lMkZjYXJkcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzI0NzkiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9jYXJkc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvY2FyZHMuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2NhcmRzXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fcharl%2Fgitstuffs%2Flinuxgamer.github.io%2Fpages%2Fcards.js&page=%2Fcards!\n"));

/***/ }),

/***/ "./pages/cards.js":
/*!************************!*\
  !*** ./pages/cards.js ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var zindex = 10;\n\"div.card\".click(function(e) {\n    e.preventDefault();\n    var isShowing = false;\n    if (this.hasClass(\"show\")) {\n        isShowing = true;\n    }\n    if (\"div.cards\".hasClass(\"showing\")) {\n        // a card is already in view\n        \"div.card.show\".removeClass(\"show\");\n        if (isShowing) {\n            // this card was showing - reset the grid\n            \"div.cards\".removeClass(\"showing\");\n        } else {\n            // this card isn't showing - get in with it\n            this.css({\n                zIndex: zindex\n            }).addClass(\"show\");\n        }\n        zindex++;\n    } else {\n        // no cards in view\n        \"div.cards\".addClass(\"showing\");\n        this.css({\n            zIndex: zindex\n        }).addClass(\"show\");\n        zindex++;\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBSSxJQUFJQSxTQUFTO0FBRVosV0FBWUMsS0FBSyxDQUFDLFNBQVNDLENBQUMsRUFBQztJQUM1QkEsRUFBRUMsY0FBYztJQUVoQixJQUFJQyxZQUFZLEtBQUs7SUFFckIsSUFBSSxJQUFLLENBQUVDLFFBQVEsQ0FBQyxTQUFTO1FBQzNCRCxZQUFZLElBQUk7SUFDbEIsQ0FBQztJQUVELElBQUksWUFBY0MsUUFBUSxDQUFDLFlBQVk7UUFDckMsNEJBQTRCO1FBQzNCLGdCQUNFQyxXQUFXLENBQUM7UUFFZixJQUFJRixXQUFXO1lBQ2IseUNBQXlDO1lBQ3hDLFlBQ0VFLFdBQVcsQ0FBQztRQUNqQixPQUFPO1lBQ0wsMkNBQTJDO1lBQzFDLElBQUksQ0FDRkMsR0FBRyxDQUFDO2dCQUFDQyxRQUFRUjtZQUFNLEdBQ25CUyxRQUFRLENBQUM7UUFFZCxDQUFDO1FBRURUO0lBRUYsT0FBTztRQUNMLG1CQUFtQjtRQUNsQixZQUNFUyxRQUFRLENBQUM7UUFDWixJQUFLLENBQ0ZGLEdBQUcsQ0FBQztZQUFDQyxRQUFPUjtRQUFNLEdBQ2xCUyxRQUFRLENBQUM7UUFFWlQ7SUFDRixDQUFDO0FBRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZHMuanM/NDc4YyJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgdmFyIHppbmRleCA9IDEwO1xuICAgIFxuICAgIChcImRpdi5jYXJkXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAgIHZhciBpc1Nob3dpbmcgPSBmYWxzZTtcbiAgXG4gICAgICBpZiAoKHRoaXMpLmhhc0NsYXNzKFwic2hvd1wiKSkge1xuICAgICAgICBpc1Nob3dpbmcgPSB0cnVlXG4gICAgICB9XG4gIFxuICAgICAgaWYgKChcImRpdi5jYXJkc1wiKS5oYXNDbGFzcyhcInNob3dpbmdcIikpIHtcbiAgICAgICAgLy8gYSBjYXJkIGlzIGFscmVhZHkgaW4gdmlld1xuICAgICAgICAoXCJkaXYuY2FyZC5zaG93XCIpXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcbiAgXG4gICAgICAgIGlmIChpc1Nob3dpbmcpIHtcbiAgICAgICAgICAvLyB0aGlzIGNhcmQgd2FzIHNob3dpbmcgLSByZXNldCB0aGUgZ3JpZFxuICAgICAgICAgIChcImRpdi5jYXJkc1wiKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwic2hvd2luZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIGNhcmQgaXNuJ3Qgc2hvd2luZyAtIGdldCBpbiB3aXRoIGl0XG4gICAgICAgICAgKHRoaXMpXG4gICAgICAgICAgICAuY3NzKHt6SW5kZXg6IHppbmRleH0pXG4gICAgICAgICAgICAuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICBcbiAgICAgICAgfVxuICBcbiAgICAgICAgemluZGV4Kys7XG4gIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gY2FyZHMgaW4gdmlld1xuICAgICAgICAoXCJkaXYuY2FyZHNcIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaG93aW5nXCIpO1xuICAgICAgICAodGhpcylcbiAgICAgICAgICAuY3NzKHt6SW5kZXg6emluZGV4fSlcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJzaG93XCIpO1xuICBcbiAgICAgICAgemluZGV4Kys7XG4gICAgICB9XG4gICAgICBcbiAgICB9KTsiXSwibmFtZXMiOlsiemluZGV4IiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1Nob3dpbmciLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3NzIiwiekluZGV4IiwiYWRkQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cards.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fcharl%2Fgitstuffs%2Flinuxgamer.github.io%2Fpages%2Fcards.js&page=%2Fcards!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);