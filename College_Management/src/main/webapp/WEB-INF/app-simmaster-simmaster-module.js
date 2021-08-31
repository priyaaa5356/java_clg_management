(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-simmaster-simmaster-module"],{

/***/ "9TpF":
/*!*******************************************************!*\
  !*** ./src/app/simmaster/simmaster-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SimmasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmasterRoutingModule", function() { return SimmasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simmaster.component */ "MXwG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _simmaster_component__WEBPACK_IMPORTED_MODULE_1__["SimmasterComponent"],
    }];
class SimmasterRoutingModule {
}
SimmasterRoutingModule.ɵfac = function SimmasterRoutingModule_Factory(t) { return new (t || SimmasterRoutingModule)(); };
SimmasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SimmasterRoutingModule });
SimmasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SimmasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "aPtS":
/*!***********************************************!*\
  !*** ./src/app/simmaster/simmaster.module.ts ***!
  \***********************************************/
/*! exports provided: SimmasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmasterModule", function() { return SimmasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _simmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simmaster-routing.module */ "9TpF");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _simmaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simmaster.component */ "MXwG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SimmasterModule {
}
SimmasterModule.ɵfac = function SimmasterModule_Factory(t) { return new (t || SimmasterModule)(); };
SimmasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SimmasterModule });
SimmasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _simmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["SimmasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SimmasterModule, { declarations: [_simmaster_component__WEBPACK_IMPORTED_MODULE_3__["SimmasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _simmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["SimmasterRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-simmaster-simmaster-module.js.map