(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feedbackmaster-feedbackmaster-module"],{

/***/ "5WRY":
/*!*********************************************************!*\
  !*** ./src/app/feedbackmaster/feedbackmaster.module.ts ***!
  \*********************************************************/
/*! exports provided: FeedbackmasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackmasterModule", function() { return FeedbackmasterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feedbackmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackmaster-routing.module */ "nIxk");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _feedbackmaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedbackmaster.component */ "AflH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class FeedbackmasterModule {
}
FeedbackmasterModule.ɵfac = function FeedbackmasterModule_Factory(t) { return new (t || FeedbackmasterModule)(); };
FeedbackmasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FeedbackmasterModule });
FeedbackmasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _feedbackmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["FeedbackmasterRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FeedbackmasterModule, { declarations: [_feedbackmaster_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackmasterComponent"]], imports: [_shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _feedbackmaster_routing_module__WEBPACK_IMPORTED_MODULE_1__["FeedbackmasterRoutingModule"]] }); })();


/***/ }),

/***/ "nIxk":
/*!*****************************************************************!*\
  !*** ./src/app/feedbackmaster/feedbackmaster-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FeedbackmasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackmasterRoutingModule", function() { return FeedbackmasterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedbackmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackmaster.component */ "AflH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _feedbackmaster_component__WEBPACK_IMPORTED_MODULE_1__["FeedbackmasterComponent"],
    }];
class FeedbackmasterRoutingModule {
}
FeedbackmasterRoutingModule.ɵfac = function FeedbackmasterRoutingModule_Factory(t) { return new (t || FeedbackmasterRoutingModule)(); };
FeedbackmasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeedbackmasterRoutingModule });
FeedbackmasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeedbackmasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-feedbackmaster-feedbackmaster-module.js.map