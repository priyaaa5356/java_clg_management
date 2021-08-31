(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-divisionmasteradd-divisionmasteradd-module"],{

/***/ "D6/A":
/*!******************************************************************!*\
  !*** ./src/app/divisionmasteradd/divisionmasteradd.component.ts ***!
  \******************************************************************/
/*! exports provided: DivisionmasteraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionmasteraddComponent", function() { return DivisionmasteraddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_divisionmaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/divisionmaster */ "a0Uq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














const _c0 = ["name"];
function DivisionmasteraddComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dept_r4.deptcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dept_r4.deptname, " ");
} }
function DivisionmasteraddComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DivisionmasteraddComponent_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.saveform(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DivisionmasteraddComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DivisionmasteraddComponent_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DivisionmasteraddComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
        this.status = "InActive";
        this.statuscolor = "rgb(249 125 125)";
        this.departmentselectedit = [];
        this.departmentselect = [
            { deptcode: 0, deptname: 'Marketing' },
            { deptcode: 1, deptname: 'Finance' },
            { deptcode: 2, deptname: 'Developing' }
        ];
        this.savedata = true;
        this.division = new _model_divisionmaster__WEBPACK_IMPORTED_MODULE_1__["DivisionMaster"]();
    }
    ngOnInit() {
        this.sub = this.route.paramMap.subscribe(params => {
            this.department = params.get('dept');
            this.div = params.get('div');
            this.statuses = params.get('status');
            this.save = params.get('save');
        });
        this.departmentselectedit = this.departmentselect.filter(as => as.deptname === this.department);
        this.division.dept = this.department;
        this.division.div = this.div;
        this.division.status = this.statuses;
        if (this.save === "add") {
            this.savedata = true;
        }
        else {
            this.savedata = false;
        }
        this.formgroup = this.fb.group({
            div: [this.division.div, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            dept: [this.division.dept, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: [this.division.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        if (this.departmentselectedit.length > 0) {
            this.formgroup.controls.dept.setValue(this.departmentselectedit[0].deptcode);
        }
        else {
            this.formgroup.controls.dept.setValue(this.departmentselect[0].deptcode);
        }
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
DivisionmasteraddComponent.ɵfac = function DivisionmasteraddComponent_Factory(t) { return new (t || DivisionmasteraddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
DivisionmasteraddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DivisionmasteraddComponent, selectors: [["app-divisionmasteradd"]], viewQuery: function DivisionmasteraddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nameElement = _t.first);
    } }, decls: 23, vars: 7, consts: [["mat-mini-fab", "", "routerLink", "../../../../../divisionmaster", 2, "background-color", "#5ac6c6", "float", "right", "margin-right", "10px"], ["fxLayout", "column"], ["fxLayout", "column", 2, "-webkit-align-items", "center"], ["src", "assets/images/BB LOGO.png", "onFocus", "if(document.getElementById('_arrowdown').disabled == true){return false;}", "disabled", "true", "id", "_arrowdown", "tabindex", "0", 2, "width", "250px", "height", "150px", "border-style", "none"], ["fxLayout", "column", "fxFlex", "50", 1, "example-form", 2, "-webkit-align-items", "center", 3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], [2, "font-weight", "bold", "color", "#464545"], ["matInput", "", "id", "name", "formControlName", "div"], ["name", ""], ["formControlName", "dept"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "status", 3, "change"], [2, "color", "black", "border-radius", "20px", "border-width", "2px", "padding-left", "4px", "padding-right", "4px", "background-color", "#f75a20", "margin-top", "15px"], ["style", "align-self: center;margin-top: 100px;", 4, "ngIf"], [3, "value"], [2, "align-self", "center", "margin-top", "100px"], ["mat-button", "", "type", "submit", 2, "background-color", "#5ac6c6", 3, "click"]], template: function DivisionmasteraddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Division Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Department Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DivisionmasteraddComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-slide-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DivisionmasteraddComponent_Template_mat_slide_toggle_change_17_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DivisionmasteraddComponent_div_21_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DivisionmasteraddComponent_div_22_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.departmentselect);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx.statuscolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.savedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.savedata);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: [".header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n}\r\n\r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-left: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-right: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top-color: transparent !important;\r\n}\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdmlzaW9ubWFzdGVyYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztFQUVBLHVCQUF1QjtFQUd2QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztFQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6QywyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsMENBQTBDO0VBQzFDLDJDQUEyQztBQUM3Qzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1oiLCJmaWxlIjoiZGl2aXNpb25tYXN0ZXJhZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5oZWFkZXItbGVzcy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOm5vdCgubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQpIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "a0Uq":
/*!*****************************************!*\
  !*** ./src/app/model/divisionmaster.ts ***!
  \*****************************************/
/*! exports provided: DivisionMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionMaster", function() { return DivisionMaster; });
class DivisionMaster {
    constructor() {
        this.dept = "";
        this.div = "";
        this.status = false;
    }
}


/***/ }),

/***/ "c5uh":
/*!***********************************************************************!*\
  !*** ./src/app/divisionmasteradd/divisionmasteradd-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: DivisionmasteraddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionmasteraddRoutingModule", function() { return DivisionmasteraddRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _divisionmasteradd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisionmasteradd.component */ "D6/A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _divisionmasteradd_component__WEBPACK_IMPORTED_MODULE_1__["DivisionmasteraddComponent"] }];
class DivisionmasteraddRoutingModule {
}
DivisionmasteraddRoutingModule.ɵfac = function DivisionmasteraddRoutingModule_Factory(t) { return new (t || DivisionmasteraddRoutingModule)(); };
DivisionmasteraddRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DivisionmasteraddRoutingModule });
DivisionmasteraddRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DivisionmasteraddRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "l263":
/*!***************************************************************!*\
  !*** ./src/app/divisionmasteradd/divisionmasteradd.module.ts ***!
  \***************************************************************/
/*! exports provided: DivisionmasteraddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionmasteraddModule", function() { return DivisionmasteraddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _divisionmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divisionmasteradd-routing.module */ "c5uh");
/* harmony import */ var _divisionmasteradd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./divisionmasteradd.component */ "D6/A");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DivisionmasteraddModule {
}
DivisionmasteraddModule.ɵfac = function DivisionmasteraddModule_Factory(t) { return new (t || DivisionmasteraddModule)(); };
DivisionmasteraddModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DivisionmasteraddModule });
DivisionmasteraddModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _divisionmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["DivisionmasteraddRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DivisionmasteraddModule, { declarations: [_divisionmasteradd_component__WEBPACK_IMPORTED_MODULE_2__["DivisionmasteraddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _divisionmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["DivisionmasteraddRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-divisionmasteradd-divisionmasteradd-module.js.map