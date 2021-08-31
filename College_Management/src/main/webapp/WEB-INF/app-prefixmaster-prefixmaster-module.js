(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-prefixmaster-prefixmaster-module"],{

/***/ "LKF8":
/*!*****************************************************!*\
  !*** ./src/app/prefixmaster/prefixmaster.module.ts ***!
  \*****************************************************/
/*! exports provided: PrefixmasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixmasterModule", function() { return PrefixmasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _prefixmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefixmaster-routing.module */ "QTKn");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _prefixmaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prefixmaster.component */ "NZsz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PrefixmasterModule {
}
PrefixmasterModule.ɵfac = function PrefixmasterModule_Factory(t) { return new (t || PrefixmasterModule)(); };
PrefixmasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PrefixmasterModule });
PrefixmasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _prefixmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrefixmasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PrefixmasterModule, { declarations: [_prefixmaster_component__WEBPACK_IMPORTED_MODULE_3__["PrefixmasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _prefixmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrefixmasterRoutingModule"]] }); })();


/***/ }),

/***/ "QTKn":
/*!*************************************************************!*\
  !*** ./src/app/prefixmaster/prefixmaster-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PrefixmasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixmasterRoutingModule", function() { return PrefixmasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _prefixmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefixmaster.component */ "NZsz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _prefixmaster_component__WEBPACK_IMPORTED_MODULE_1__["PrefixmasterComponent"],
    }];
class PrefixmasterRoutingModule {
}
PrefixmasterRoutingModule.ɵfac = function PrefixmasterRoutingModule_Factory(t) { return new (t || PrefixmasterRoutingModule)(); };
PrefixmasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PrefixmasterRoutingModule });
PrefixmasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrefixmasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-prefixmaster-prefixmaster-module.js.map