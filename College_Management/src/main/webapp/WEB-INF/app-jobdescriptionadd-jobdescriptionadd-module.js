(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-jobdescriptionadd-jobdescriptionadd-module"],{

/***/ "2lp6":
/*!***********************************************************************!*\
  !*** ./src/app/jobdescriptionadd/jobdescriptionadd-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: JobdescriptionaddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdescriptionaddRoutingModule", function() { return JobdescriptionaddRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jobdescriptionadd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobdescriptionadd.component */ "6uwK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _jobdescriptionadd_component__WEBPACK_IMPORTED_MODULE_1__["JobdescriptionaddComponent"] }];
class JobdescriptionaddRoutingModule {
}
JobdescriptionaddRoutingModule.ɵfac = function JobdescriptionaddRoutingModule_Factory(t) { return new (t || JobdescriptionaddRoutingModule)(); };
JobdescriptionaddRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JobdescriptionaddRoutingModule });
JobdescriptionaddRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JobdescriptionaddRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "6uwK":
/*!******************************************************************!*\
  !*** ./src/app/jobdescriptionadd/jobdescriptionadd.component.ts ***!
  \******************************************************************/
/*! exports provided: JobdescriptionaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdescriptionaddComponent", function() { return JobdescriptionaddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _companymaster_companymaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../companymaster/companymaster.component */ "6BVz");
/* harmony import */ var _model_jobdescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/jobdescription */ "hEtQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["name"];
function JobdescriptionaddComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JobdescriptionaddComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.saveform(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function JobdescriptionaddComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JobdescriptionaddComponent_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class JobdescriptionaddComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
        this.desc = new _model_jobdescription__WEBPACK_IMPORTED_MODULE_2__["description"]();
        this.status = "InActive";
        this.statuscolor = "rgb(249 125 125)";
        this.savedata = true;
    }
    ngOnInit() {
        debugger;
        this.sub = this.route.paramMap.subscribe(params => {
            this.name = params.get('title');
            this.statuses = params.get('status');
            this.save = params.get('save');
            console.log(params);
        });
        debugger;
        this.desc.title = this.name;
        this.desc.status = this.statuses;
        if (this.save === "add") {
            this.savedata = true;
        }
        else {
            this.savedata = false;
        }
        this.formgroup = this.fb.group({
            title: [this.desc.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: [this.desc.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        debugger;
        console.log(this.formgroup.value);
        this.ontoggledefault();
        setTimeout(() => {
            this.nameElement.nativeElement.focus();
        }, 0);
    }
    ontoggledefault() {
        debugger;
        if (this.formgroup.value.status === "true") {
            this.status = "Active";
            this.statuscolor = "#70ce70";
        }
        else if (this.formgroup.value.status === "false") {
            this.formgroup.patchValue({
                status: false
            });
            this.status = "InActive";
            this.statuscolor = "rgb(153 153 153)";
        }
    }
    onToggle(event) {
        debugger;
        if (event.checked) {
            this.status = "Active";
            this.statuscolor = "#70ce70";
        }
        else {
            this.status = "InActive";
            this.statuscolor = "rgb(153 153 153)";
        }
    }
    saveform() {
    }
    update() {
    }
}
JobdescriptionaddComponent.ɵfac = function JobdescriptionaddComponent_Factory(t) { return new (t || JobdescriptionaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
JobdescriptionaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JobdescriptionaddComponent, selectors: [["app-jobdescriptionadd"]], viewQuery: function JobdescriptionaddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_companymaster_companymaster_component__WEBPACK_IMPORTED_MODULE_1__["CompanymasterComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.childReference = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nameElement = _t.first);
    } }, decls: 18, vars: 6, consts: [["mat-mini-fab", "", "routerLink", "../../../../jobdescription", 2, "background-color", "#5ac6c6", "float", "right", "margin-right", "10px"], ["fxLayout", "column"], ["fxLayout", "column", 2, "-webkit-align-items", "center"], ["src", "assets/images/BB LOGO.png", "onFocus", "if(document.getElementById('_arrowdown').disabled == true){return false;}", "disabled", "true", "id", "_arrowdown", "tabindex", "0", 2, "width", "250px", "height", "150px", "border-style", "none"], ["fxLayout", "column", "fxFlex", "50", 1, "example-form", 2, "-webkit-align-items", "center", 3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], [2, "font-weight", "bold", "color", "#464545"], ["matInput", "", "id", "name", "formControlName", "title"], ["name", ""], ["formControlName", "status", 3, "change"], [2, "color", "black", "border-radius", "20px", "border-width", "2px", "padding-left", "4px", "padding-right", "4px", "background-color", "#3b3938", "margin-top", "15px"], ["style", "align-self: center;margin-top: 100px;", 4, "ngIf"], [2, "align-self", "center", "margin-top", "100px"], ["mat-button", "", "type", "submit", 2, "background-color", "#5ac6c6", 3, "click"]], template: function JobdescriptionaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function JobdescriptionaddComponent_Template_mat_slide_toggle_change_12_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, JobdescriptionaddComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, JobdescriptionaddComponent_div_17_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.statuscolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.savedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.savedata);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n}\r\n\r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-left: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-right: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top-color: transparent !important;\r\n}\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYmRlc2NyaXB0aW9uYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztFQUVBLHVCQUF1QjtFQUd2QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztFQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6QywyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsMENBQTBDO0VBQzFDLDJDQUEyQztBQUM3Qzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1oiLCJmaWxlIjoiam9iZGVzY3JpcHRpb25hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5oZWFkZXItbGVzcy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOm5vdCgubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQpIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "hEtQ":
/*!*****************************************!*\
  !*** ./src/app/model/jobdescription.ts ***!
  \*****************************************/
/*! exports provided: description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
class description {
    constructor() {
        this.title = "";
        this.status = false;
    }
}


/***/ }),

/***/ "i44J":
/*!***************************************************************!*\
  !*** ./src/app/jobdescriptionadd/jobdescriptionadd.module.ts ***!
  \***************************************************************/
/*! exports provided: JobdescriptionaddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdescriptionaddModule", function() { return JobdescriptionaddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _jobdescriptionadd_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobdescriptionadd-routing.module */ "2lp6");
/* harmony import */ var _jobdescriptionadd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobdescriptionadd.component */ "6uwK");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class JobdescriptionaddModule {
}
JobdescriptionaddModule.ɵfac = function JobdescriptionaddModule_Factory(t) { return new (t || JobdescriptionaddModule)(); };
JobdescriptionaddModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: JobdescriptionaddModule });
JobdescriptionaddModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _jobdescriptionadd_routing_module__WEBPACK_IMPORTED_MODULE_1__["JobdescriptionaddRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](JobdescriptionaddModule, { declarations: [_jobdescriptionadd_component__WEBPACK_IMPORTED_MODULE_2__["JobdescriptionaddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _jobdescriptionadd_routing_module__WEBPACK_IMPORTED_MODULE_1__["JobdescriptionaddRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-jobdescriptionadd-jobdescriptionadd-module.js.map