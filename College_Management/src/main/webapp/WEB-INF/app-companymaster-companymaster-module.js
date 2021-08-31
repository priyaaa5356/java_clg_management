(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-companymaster-companymaster-module"],{

/***/ "/xUt":
/*!***************************************************************!*\
  !*** ./src/app/companymaster/companymaster-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CompanymasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanymasterRoutingModule", function() { return CompanymasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _companymaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companymaster.component */ "6BVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _companymaster_component__WEBPACK_IMPORTED_MODULE_1__["CompanymasterComponent"],
    }];
class CompanymasterRoutingModule {
}
CompanymasterRoutingModule.ɵfac = function CompanymasterRoutingModule_Factory(t) { return new (t || CompanymasterRoutingModule)(); };
CompanymasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompanymasterRoutingModule });
CompanymasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompanymasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "5dRF":
/*!*******************************************************!*\
  !*** ./src/app/companymaster/companymaster.module.ts ***!
  \*******************************************************/
/*! exports provided: CompanymasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanymasterModule", function() { return CompanymasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _companymaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companymaster-routing.module */ "/xUt");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _companymaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companymaster.component */ "6BVz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CompanymasterModule {
}
CompanymasterModule.ɵfac = function CompanymasterModule_Factory(t) { return new (t || CompanymasterModule)(); };
CompanymasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CompanymasterModule });
CompanymasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _companymaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["CompanymasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CompanymasterModule, { declarations: [_companymaster_component__WEBPACK_IMPORTED_MODULE_3__["CompanymasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _companymaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["CompanymasterRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-companymaster-companymaster-module.js.map