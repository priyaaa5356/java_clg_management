(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-simmasteradd-simmasteradd-module"],{

/***/ "4w+Y":
/*!********************************************************!*\
  !*** ./src/app/simmasteradd/simmasteradd.component.ts ***!
  \********************************************************/
/*! exports provided: SimmasteraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmasteraddComponent", function() { return SimmasteraddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _simmaster_simmaster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simmaster/simmaster.component */ "MXwG");
/* harmony import */ var _model_simmaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/simmaster */ "HWZ7");
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
function SimmasteraddComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SimmasteraddComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r5.saveform(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SimmasteraddComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SimmasteraddComponent_div_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r7.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
class SimmasteraddComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
        this.sim = new _model_simmaster__WEBPACK_IMPORTED_MODULE_2__["SimMaster"]();
        this.status = "InActive";
        this.statuscolor = "rgb(249 125 125)";
        this.savedata = true;
    }
    ngOnInit() {
        debugger;
        this.sub = this.route.paramMap.subscribe(params => {
            this.name = params.get('name');
            this.name1 = params.get('name1');
            this.name2 = params.get('name2');
            this.statuses = params.get('status');
            this.save = params.get('save');
            console.log(params);
        });
        debugger;
        this.sim.name = this.name;
        this.sim.name1 = this.name1;
        this.sim.name2 = this.name2;
        this.sim.status = this.statuses;
        if (this.save === "add") {
            this.savedata = true;
        }
        else {
            this.savedata = false;
        }
        this.formgroup = this.fb.group({
            name: [this.sim.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            name1: [this.sim.name1, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            name2: [this.sim.name2, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: [this.sim.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
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
SimmasteraddComponent.??fac = function SimmasteraddComponent_Factory(t) { return new (t || SimmasteraddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
SimmasteraddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SimmasteraddComponent, selectors: [["app-simmasteradd"]], viewQuery: function SimmasteraddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_simmaster_simmaster_component__WEBPACK_IMPORTED_MODULE_1__["SimmasterComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.childReference = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.nameElement = _t.first);
    } }, decls: 28, vars: 6, consts: [["mat-mini-fab", "", "routerLink", "../../../../../../simmaster", 2, "background-color", "#5ac6c6", "float", "right", "margin-right", "10px"], ["fxLayout", "column"], ["fxLayout", "column", 2, "-webkit-align-items", "center"], ["src", "assets/images/BB LOGO.png", "onFocus", "if(document.getElementById('_arrowdown').disabled == true){return false;}", "disabled", "true", "id", "_arrowdown", "tabindex", "0", 2, "width", "250px", "height", "150px", "border-style", "none"], ["fxLayout", "column", "fxFlex", "50", 1, "example-form", 2, "-webkit-align-items", "center", 3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], [2, "font-weight", "bold", "color", "#464545"], ["matInput", "", "id", "name", "formControlName", "name"], ["name", ""], ["matInput", "", "id", "name1", "formControlName", "name1"], ["name1", ""], ["matInput", "", "id", "name2", "formControlName", "name2"], ["name2", ""], ["formControlName", "status", 3, "change"], [2, "color", "black", "border-radius", "20px", "border-width", "2px", "padding-left", "4px", "padding-right", "4px", "background-color", "#3b3938", "margin-top", "15px"], ["style", "align-self: center;margin-top: 100px;", 4, "ngIf"], [2, "align-self", "center", "margin-top", "100px"], ["mat-button", "", "type", "submit", 2, "background-color", "#5ac6c6", 3, "click"]], template: function SimmasteraddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Provider Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Activation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](20, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function SimmasteraddComponent_Template_mat_slide_toggle_change_22_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, SimmasteraddComponent_div_26_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](27, SimmasteraddComponent_div_27_Template, 3, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.formgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????styleProp"]("background-color", ctx.statuscolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.savedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.savedata);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n}\r\n\r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-left: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-right: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top-color: transparent !important;\r\n}\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbW1hc3RlcmFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7RUFFQSx1QkFBdUI7RUFHdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7RUFFQTtFQUNFLHdDQUF3QztFQUN4Qyx5Q0FBeUM7RUFDekMsMkNBQTJDO0FBQzdDOztFQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztFQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0VBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaIiwiZmlsZSI6InNpbW1hc3RlcmFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmhlYWRlci1sZXNzLXRhYnMubWF0LXRhYi1ncm91cCAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIG1hdC1pbnB1dCBmb2N1c2VkIGNvbG9yXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6bm90KC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCkgLm1hdC1mb3JtLWZpZWxkLWZsZXg6aG92ZXIgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWZsZXg6aG92ZXIgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "HWZ7":
/*!************************************!*\
  !*** ./src/app/model/simmaster.ts ***!
  \************************************/
/*! exports provided: SimMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimMaster", function() { return SimMaster; });
class SimMaster {
    constructor() {
        this.name = "";
        this.name1 = "";
        this.name2 = "";
        this.status = false;
    }
}


/***/ }),

/***/ "Zsot":
/*!*****************************************************!*\
  !*** ./src/app/simmasteradd/simmasteradd.module.ts ***!
  \*****************************************************/
/*! exports provided: SimmasteraddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmasteraddModule", function() { return SimmasteraddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _simmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simmasteradd-routing.module */ "odPP");
/* harmony import */ var _simmasteradd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simmasteradd.component */ "4w+Y");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SimmasteraddModule {
}
SimmasteraddModule.??fac = function SimmasteraddModule_Factory(t) { return new (t || SimmasteraddModule)(); };
SimmasteraddModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: SimmasteraddModule });
SimmasteraddModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _simmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["SimmasteraddRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](SimmasteraddModule, { declarations: [_simmasteradd_component__WEBPACK_IMPORTED_MODULE_2__["SimmasteraddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _simmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["SimmasteraddRoutingModule"]] }); })();


/***/ }),

/***/ "odPP":
/*!*************************************************************!*\
  !*** ./src/app/simmasteradd/simmasteradd-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SimmasteraddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimmasteraddRoutingModule", function() { return SimmasteraddRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simmasteradd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simmasteradd.component */ "4w+Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _simmasteradd_component__WEBPACK_IMPORTED_MODULE_1__["SimmasteraddComponent"],
    }];
class SimmasteraddRoutingModule {
}
SimmasteraddRoutingModule.??fac = function SimmasteraddRoutingModule_Factory(t) { return new (t || SimmasteraddRoutingModule)(); };
SimmasteraddRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: SimmasteraddRoutingModule });
SimmasteraddRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](SimmasteraddRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-simmasteradd-simmasteradd-module.js.map