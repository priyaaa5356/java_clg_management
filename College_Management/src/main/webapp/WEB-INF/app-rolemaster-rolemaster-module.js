(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-rolemaster-rolemaster-module"],{

/***/ "BVQ8":
/*!*************************************************!*\
  !*** ./src/app/rolemaster/rolemaster.module.ts ***!
  \*************************************************/
/*! exports provided: RolemasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolemasterModule", function() { return RolemasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rolemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolemaster-routing.module */ "TczD");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _rolemaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rolemaster.component */ "K9eB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class RolemasterModule {
}
RolemasterModule.ɵfac = function RolemasterModule_Factory(t) { return new (t || RolemasterModule)(); };
RolemasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RolemasterModule });
RolemasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _rolemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RolemasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RolemasterModule, { declarations: [_rolemaster_component__WEBPACK_IMPORTED_MODULE_3__["RolemasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _rolemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RolemasterRoutingModule"]] }); })();


/***/ }),

/***/ "TczD":
/*!*********************************************************!*\
  !*** ./src/app/rolemaster/rolemaster-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: RolemasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolemasterRoutingModule", function() { return RolemasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rolemaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolemaster.component */ "K9eB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _rolemaster_component__WEBPACK_IMPORTED_MODULE_1__["RolemasterComponent"],
    }];
class RolemasterRoutingModule {
}
RolemasterRoutingModule.ɵfac = function RolemasterRoutingModule_Factory(t) { return new (t || RolemasterRoutingModule)(); };
RolemasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RolemasterRoutingModule });
RolemasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RolemasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-rolemaster-rolemaster-module.js.map