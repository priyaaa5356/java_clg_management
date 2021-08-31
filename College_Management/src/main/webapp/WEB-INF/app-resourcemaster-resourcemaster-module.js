(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-resourcemaster-resourcemaster-module"],{

/***/ "3EGW":
/*!*********************************************************!*\
  !*** ./src/app/resourcemaster/resourcemaster.module.ts ***!
  \*********************************************************/
/*! exports provided: ResourcemasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcemasterModule", function() { return ResourcemasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _resourcemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resourcemaster-routing.module */ "FgWw");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _resourcemaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resourcemaster.component */ "o4rL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ResourcemasterModule {
}
ResourcemasterModule.ɵfac = function ResourcemasterModule_Factory(t) { return new (t || ResourcemasterModule)(); };
ResourcemasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ResourcemasterModule });
ResourcemasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _resourcemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["ResourcemasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ResourcemasterModule, { declarations: [_resourcemaster_component__WEBPACK_IMPORTED_MODULE_3__["ResourcemasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _resourcemaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["ResourcemasterRoutingModule"]] }); })();


/***/ }),

/***/ "FgWw":
/*!*****************************************************************!*\
  !*** ./src/app/resourcemaster/resourcemaster-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResourcemasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcemasterRoutingModule", function() { return ResourcemasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resourcemaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resourcemaster.component */ "o4rL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _resourcemaster_component__WEBPACK_IMPORTED_MODULE_1__["ResourcemasterComponent"],
    }];
class ResourcemasterRoutingModule {
}
ResourcemasterRoutingModule.ɵfac = function ResourcemasterRoutingModule_Factory(t) { return new (t || ResourcemasterRoutingModule)(); };
ResourcemasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResourcemasterRoutingModule });
ResourcemasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResourcemasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-resourcemaster-resourcemaster-module.js.map