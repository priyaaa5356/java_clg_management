(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-salaryadvance-salaryadvance-module"],{

/***/ "2Byw":
/*!**************************************************!*\
  !*** ./src/app/service/salaryadvance.service.ts ***!
  \**************************************************/
/*! exports provided: SalaryadvanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryadvanceService", function() { return SalaryadvanceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SalaryadvanceService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    savesalaryadv(salaryadvformsave) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'API/staff_advance_creation.php';
        return this.http.post(url, salaryadvformsave, this.httpOptions).toPromise();
    }
}
SalaryadvanceService.ɵfac = function SalaryadvanceService_Factory(t) { return new (t || SalaryadvanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SalaryadvanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SalaryadvanceService, factory: SalaryadvanceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Mha2":
/*!*******************************************************!*\
  !*** ./src/app/salaryadvance/salaryadvance.module.ts ***!
  \*******************************************************/
/*! exports provided: SalaryadvanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryadvanceModule", function() { return SalaryadvanceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _salaryadvance_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salaryadvance-routing.module */ "sWJ1");
/* harmony import */ var _salaryadvance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salaryadvance.component */ "YaK9");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SalaryadvanceModule {
}
SalaryadvanceModule.ɵfac = function SalaryadvanceModule_Factory(t) { return new (t || SalaryadvanceModule)(); };
SalaryadvanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SalaryadvanceModule });
SalaryadvanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _salaryadvance_routing_module__WEBPACK_IMPORTED_MODULE_1__["SalaryadvanceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SalaryadvanceModule, { declarations: [_salaryadvance_component__WEBPACK_IMPORTED_MODULE_2__["SalaryadvanceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _salaryadvance_routing_module__WEBPACK_IMPORTED_MODULE_1__["SalaryadvanceRoutingModule"]] }); })();


/***/ }),

/***/ "X+1r":
/*!************************************!*\
  !*** ./src/app/model/salaryadv.ts ***!
  \************************************/
/*! exports provided: SalaryadvSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryadvSave", function() { return SalaryadvSave; });
class SalaryadvSave {
    constructor() {
        this.Type = 0;
        this.date = "";
        this.staff_id = 0;
        this.staff_name = "";
        this.amount = 0;
        this.Reason = "";
        this.Status = 0;
        this.Created_by = 0;
    }
}


/***/ }),

/***/ "YaK9":
/*!**********************************************************!*\
  !*** ./src/app/salaryadvance/salaryadvance.component.ts ***!
  \**********************************************************/
/*! exports provided: MY_FORMATS, SalaryadvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryadvanceComponent", function() { return SalaryadvanceComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_salaryadv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/salaryadv */ "X+1r");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/login */ "I8PV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_salaryadvance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/salaryadvance.service */ "2Byw");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















const _c0 = ["designation"];
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class SalaryadvanceComponent {
    constructor(fb, service) {
        this.fb = fb;
        this.service = service;
        this.advsave = new _model_salaryadv__WEBPACK_IMPORTED_MODULE_2__["SalaryadvSave"]();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        this.login = new _model_login__WEBPACK_IMPORTED_MODULE_5__["LoginPojo"]();
    }
    ngOnInit() {
        const mySimpleFormat = this.pipe.transform(new Date(), 'MM/dd/yyyy');
        this.formgroup = this.fb.group({
            type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]] || false,
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            for: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        setTimeout(() => {
            this.desgElement.nativeElement.focus();
        }, 0);
    }
    submit() {
        const format = 'yyyy-MM-dd';
        const myDate = new Date();
        const locale = 'en-US';
        const formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(myDate, format, locale);
        if (this.formgroup.value.date < formattedDate) {
            alert("Back Date Not Allowed");
            return;
        }
        var sss = sessionStorage.getItem('logindet');
        if (sss) {
            this.login = JSON.parse(sss);
        }
        const mySimpleFormat = this.pipe.transform(this.formgroup.value.date, 'yyyy-MM-dd');
        if (mySimpleFormat) {
            this.advsave.date = mySimpleFormat;
        }
        this.advsave.staff_id = this.login.empcode;
        this.advsave.Status = 1;
        this.advsave.Created_by = this.login.empcode;
        this.advsave.Type = this.formgroup.value.type;
        this.advsave.amount = this.formgroup.value.for;
        this.advsave.staff_name = this.login.username;
        this.advsave.Reason = this.formgroup.value.reason;
        const save = JSON.stringify(this.advsave);
        this.service.savesalaryadv(save).then(data => {
            alert(data.message);
            this.ngOnInit();
        }, err => {
            alert(err);
        });
    }
}
SalaryadvanceComponent.ɵfac = function SalaryadvanceComponent_Factory(t) { return new (t || SalaryadvanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_salaryadvance_service__WEBPACK_IMPORTED_MODULE_7__["SalaryadvanceService"])); };
SalaryadvanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SalaryadvanceComponent, selectors: [["app-salaryadvance"]], viewQuery: function SalaryadvanceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.desgElement = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ])], decls: 37, vars: 4, consts: [[2, "text-align-last", "center"], [2, "font-size", "x-large", "font-weight", "500", "margin-top", "revert"], ["fxLayout", "column", "fxLayoutGap", "50px"], ["fxLayout", "column", "fxFlex", "50", 1, "example-form", 2, "-webkit-align-items", "center", 3, "formGroup"], ["fxLayout", "row", "fxLayoutGap", "100px", 2, "margin-bottom", "20px"], [2, "font-weight", "bold", "color", "#464545"], ["formControlName", "type", 2, "display", "flex", "width", "100%", "font-size", "1em", "justify-content", "space-between"], ["value", "1"], ["value", "2"], ["formControlName", "date", "matInput", "", "placeholder", "Date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "id", "location", "formControlName", "location"], ["location", ""], ["matInput", "", "id", "for", "formControlName", "for", "type", "number"], ["for", ""], ["matInput", "", "id", "reason", "cols", "35", "rows", "3", "formControlName", "reason"], ["reason", ""], ["type", "submit", "mat-raised-button", "", 2, "background-color", "#255e5e", "color", "white", 3, "disabled", "click"]], template: function SalaryadvanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Advance Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Application Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Salary Advance");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Salary Loan");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Current Location/Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Amount Applied For");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SalaryadvanceComponent_Template_button_click_35_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.formgroup.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: [".mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n    border: none !important;\r\n    border-radius: 4px;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n    border-top: 2px solid #1976d2 !important;\r\n    border-left: 2px solid #1976d2 !important;\r\n    border-bottom: 2px solid #1976d2 !important;\r\n  }\r\n  \r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #1976d2 !important;\r\n  }\r\n  \r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n    border-top: 2px solid #1976d2 !important;\r\n    border-right: 2px solid #1976d2 !important;\r\n    border-bottom: 2px solid #1976d2 !important;\r\n  }\r\n  \r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n    border-top: 2px solid #1976d2 !important;\r\n  }\r\n  \r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n    border-top-color: transparent !important;\r\n  }\r\n  \r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 50%;\r\n  }\r\n  \r\n    .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\r\n    background-color: rgb(204, 228, 238) !important;\r\n  }\r\n  \r\n    .mat-radio-button.mat-accent .mat-radio-inner-circle {\r\n    background-color: rgb(39, 204, 190)!important;   \r\n  }\r\n  \r\n   .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\r\n    border-color:rgb(46, 133, 133)!important; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeWFkdmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUd2QixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6QywyQ0FBMkM7RUFDN0M7O0VBQ0E7SUFDRSwyQ0FBMkM7RUFDN0M7O0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsMENBQTBDO0lBQzFDLDJDQUEyQztFQUM3Qzs7RUFDQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFDQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFDQTtJQUNFLGVBQWU7SUFDZixVQUFVO0VBQ1o7O0VBQ0E7SUFDRSwrQ0FBK0M7RUFDakQ7O0VBQ0E7SUFDRSw2Q0FBNkMsSUFBSSw0QkFBNEI7RUFDL0U7O0VBRUE7SUFDRSx3Q0FBd0MsRUFBRSwwQkFBMEI7RUFDdEUiLCJmaWxlIjoic2FsYXJ5YWR2YW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpub3QoLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkKSAubWF0LWZvcm0tZmllbGQtZmxleDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQtZmxleDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMjgsIDIzOCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAyMDQsIDE5MCkhaW1wb3J0YW50OyAgIC8qaW5uZXIgY2lyY2xlIGNvbG9yIGNoYW5nZSovXHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYig0NiwgMTMzLCAxMzMpIWltcG9ydGFudDsgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "sWJ1":
/*!***************************************************************!*\
  !*** ./src/app/salaryadvance/salaryadvance-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SalaryadvanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryadvanceRoutingModule", function() { return SalaryadvanceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _salaryadvance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salaryadvance.component */ "YaK9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: "", component: _salaryadvance_component__WEBPACK_IMPORTED_MODULE_1__["SalaryadvanceComponent"] }];
class SalaryadvanceRoutingModule {
}
SalaryadvanceRoutingModule.ɵfac = function SalaryadvanceRoutingModule_Factory(t) { return new (t || SalaryadvanceRoutingModule)(); };
SalaryadvanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalaryadvanceRoutingModule });
SalaryadvanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalaryadvanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-salaryadvance-salaryadvance-module.js.map