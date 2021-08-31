(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-servicemaster-servicemaster-module"],{

/***/ "EqWu":
/*!***************************************************************!*\
  !*** ./src/app/servicemaster/servicemaster-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ServicemasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicemasterRoutingModule", function() { return ServicemasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servicemaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicemaster.component */ "NEQR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _servicemaster_component__WEBPACK_IMPORTED_MODULE_1__["ServicemasterComponent"],
    }];
class ServicemasterRoutingModule {
}
ServicemasterRoutingModule.ɵfac = function ServicemasterRoutingModule_Factory(t) { return new (t || ServicemasterRoutingModule)(); };
ServicemasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ServicemasterRoutingModule });
ServicemasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ServicemasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "dmss":
/*!*******************************************************!*\
  !*** ./src/app/servicemaster/servicemaster.module.ts ***!
  \*******************************************************/
/*! exports provided: ServicemasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicemasterModule", function() { return ServicemasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _servicemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicemaster-routing.module */ "EqWu");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _servicemaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicemaster.component */ "NEQR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ServicemasterModule {
}
ServicemasterModule.ɵfac = function ServicemasterModule_Factory(t) { return new (t || ServicemasterModule)(); };
ServicemasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ServicemasterModule });
ServicemasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _servicemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServicemasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ServicemasterModule, { declarations: [_servicemaster_component__WEBPACK_IMPORTED_MODULE_3__["ServicemasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _servicemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["ServicemasterRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-servicemaster-servicemaster-module.js.map