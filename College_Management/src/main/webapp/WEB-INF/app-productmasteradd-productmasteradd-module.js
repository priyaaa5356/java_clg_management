(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-productmasteradd-productmasteradd-module"],{

/***/ "/v4E":
/*!****************************************************************!*\
  !*** ./src/app/productmasteradd/productmasteradd.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductmasteraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmasteraddComponent", function() { return ProductmasteraddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_productmaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/productmaster */ "3rb9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["name"];
function ProductmasteraddComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductmasteraddComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r3.saveform(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProductmasteraddComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProductmasteraddComponent_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r5.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class ProductmasteraddComponent {
    constructor(route, fb) {
        this.route = route;
        this.fb = fb;
        this.product = new _model_productmaster__WEBPACK_IMPORTED_MODULE_1__["ProductMaster"]();
        this.status = "InActive";
        this.statuscolor = "rgb(249 125 125)";
        this.savedata = true;
    }
    ngOnInit() {
        debugger;
        this.sub = this.route.paramMap.subscribe(params => {
            this.name = params.get('name');
            this.statuses = params.get('status');
            this.save = params.get('save');
            console.log(params);
        });
        debugger;
        this.product.name = this.name;
        this.product.status = this.statuses;
        if (this.save === "add") {
            this.savedata = true;
        }
        else {
            this.savedata = false;
        }
        this.formgroup = this.fb.group({
            name: [this.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: [this.product.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
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
ProductmasteraddComponent.??fac = function ProductmasteraddComponent_Factory(t) { return new (t || ProductmasteraddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ProductmasteraddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProductmasteraddComponent, selectors: [["app-productmasteradd"]], viewQuery: function ProductmasteraddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.nameElement = _t.first);
    } }, decls: 18, vars: 6, consts: [["mat-mini-fab", "", "routerLink", "../../../../productmaster", 2, "background-color", "#5ac6c6", "float", "right", "margin-right", "10px"], ["fxLayout", "column"], ["fxLayout", "column", 2, "-webkit-align-items", "center"], ["src", "assets/images/BB LOGO.png", "onFocus", "if(document.getElementById('_arrowdown').disabled == true){return false;}", "disabled", "true", "id", "_arrowdown", "tabindex", "0", 2, "width", "250px", "height", "150px", "border-style", "none"], ["fxLayout", "column", "fxFlex", "50", 1, "example-form", 2, "-webkit-align-items", "center", 3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], [2, "font-weight", "bold", "color", "#464545"], ["matInput", "", "id", "name", "formControlName", "name"], ["name", ""], ["formControlName", "status", 3, "change"], [2, "color", "black", "border-radius", "20px", "border-width", "2px", "padding-left", "4px", "padding-right", "4px", "background-color", "#3b3938", "margin-top", "15px"], ["style", "align-self: center;margin-top: 100px;", 4, "ngIf"], [2, "align-self", "center", "margin-top", "100px"], ["mat-button", "", "type", "submit", 2, "background-color", "#5ac6c6", 3, "click"]], template: function ProductmasteraddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function ProductmasteraddComponent_Template_mat_slide_toggle_change_12_listener($event) { return ctx.onToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, ProductmasteraddComponent_div_16_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, ProductmasteraddComponent_div_17_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.formgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????styleProp"]("background-color", ctx.statuscolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.savedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.savedata);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n}\r\n\r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-left: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-right: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top-color: transparent !important;\r\n}\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RtYXN0ZXJhZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0VBRUEsdUJBQXVCO0VBR3ZCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0VBRUE7RUFDRSx3Q0FBd0M7RUFDeEMseUNBQXlDO0VBQ3pDLDJDQUEyQztBQUM3Qzs7RUFDQTtFQUNFLDJDQUEyQztBQUM3Qzs7RUFDQTtFQUNFLHdDQUF3QztFQUN4QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQzdDOztFQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztFQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztFQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWiIsImZpbGUiOiJwcm9kdWN0bWFzdGVyYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuaGVhZGVyLWxlc3MtdGFicy5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbWF0LWlucHV0IGZvY3VzZWQgY29sb3JcclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpub3QoLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkKSAubWF0LWZvcm0tZmllbGQtZmxleDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtZmxleDpob3ZlciAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "3rb9":
/*!****************************************!*\
  !*** ./src/app/model/productmaster.ts ***!
  \****************************************/
/*! exports provided: ProductMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMaster", function() { return ProductMaster; });
class ProductMaster {
    constructor() {
        this.name = "";
        this.status = false;
    }
}


/***/ }),

/***/ "FksN":
/*!*********************************************************************!*\
  !*** ./src/app/productmasteradd/productmasteradd-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductmasteraddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmasteraddRoutingModule", function() { return ProductmasteraddRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productmasteradd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productmasteradd.component */ "/v4E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: "", component: _productmasteradd_component__WEBPACK_IMPORTED_MODULE_1__["ProductmasteraddComponent"] }];
class ProductmasteraddRoutingModule {
}
ProductmasteraddRoutingModule.??fac = function ProductmasteraddRoutingModule_Factory(t) { return new (t || ProductmasteraddRoutingModule)(); };
ProductmasteraddRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: ProductmasteraddRoutingModule });
ProductmasteraddRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ProductmasteraddRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Mnu1":
/*!*************************************************************!*\
  !*** ./src/app/productmasteradd/productmasteradd.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductmasteraddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmasteraddModule", function() { return ProductmasteraddModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _productmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productmasteradd-routing.module */ "FksN");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared/shared.module */ "MfXf");
/* harmony import */ var _productmasteradd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productmasteradd.component */ "/v4E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ProductmasteraddModule {
}
ProductmasteraddModule.??fac = function ProductmasteraddModule_Factory(t) { return new (t || ProductmasteraddModule)(); };
ProductmasteraddModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ProductmasteraddModule });
ProductmasteraddModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _productmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductmasteraddRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ProductmasteraddModule, { declarations: [_productmasteradd_component__WEBPACK_IMPORTED_MODULE_3__["ProductmasteraddComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _productmasteradd_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductmasteraddRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-productmasteradd-productmasteradd-module.js.map