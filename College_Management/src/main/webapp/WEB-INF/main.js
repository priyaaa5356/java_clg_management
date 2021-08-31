(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularPhp\hrms\src\main.ts */"zUnb");


/***/ }),

/***/ "1ld4":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class LoginService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    login(login) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'loginconnect.php';
        const name = '{ "UserName": "' + login.username + '", "Password": "' + login.password + '"}';
        // const name ='{ "name": "riya" }';
        const json = JSON.parse(name);
        return this.http.post(url, json, this.httpOptions).toPromise();
    }
    namecheck(name) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'loginconnect';
        return this.http.post(url, name, this.httpOptions).toPromise();
    }
    resetpassword(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/resetpassword';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2KtN":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class EmployeelistComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.dropdownList = [
            { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' },
            { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }, { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        this.selectedItems = [
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
    }
    onNoClick() {
        this.dialogRef.close();
    }
    close() {
        this.dialogRef.close();
    }
}
EmployeelistComponent.ɵfac = function EmployeelistComponent_Factory(t) { return new (t || EmployeelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EmployeelistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeelistComponent, selectors: [["app-employeelist"]], decls: 7, vars: 4, consts: [["mat-dialog-title", ""], ["mat-mini-fab", "", "cdkFocusInitial", "", 2, "float", "left", "background-color", "darkblue", 3, "click"], ["mat-mini-fab", "", 2, "float", "right", "cursor", "pointer", "font-weight", "normal", "background-color", "darkorange", 3, "click"], ["mat-dialog-actions", ""], [2, "margin-top", "60px", "min-width", "320px", "margin-left", "-50px", 3, "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onSelectAll"]], template: function EmployeelistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeelistComponent_Template_button_click_1_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeelistComponent_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ng-multiselect-dropdown", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EmployeelistComponent_Template_ng_multiselect_dropdown_ngModelChange_6_listener($event) { return ctx.selectedItems = $event; })("onSelect", function EmployeelistComponent_Template_ng_multiselect_dropdown_onSelect_6_listener($event) { return ctx.onItemSelect($event); })("onSelectAll", function EmployeelistComponent_Template_ng_multiselect_dropdown_onSelectAll_6_listener($event) { return ctx.onSelectAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "custom placeholder")("settings", ctx.dropdownSettings)("data", ctx.dropdownList)("ngModel", ctx.selectedItems);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "4Kmh":
/*!***************************************!*\
  !*** ./src/app/common/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FilterPipe {
    transform(items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        return items.filter(item => {
            return Object.keys(item).some(key => {
                return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
            });
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFilter", type: FilterPipe, pure: true });


/***/ }),

/***/ "4a+M":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function NotificationComponent_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " 1 hour ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", pic_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pic_r1.description, " \u00A0\u00A0\u00A0\u00A0");
} }
class NotificationComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiData = [];
    }
    ngOnInit() {
        this.apiData = this.data.row;
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 5, vars: 1, consts: [["mat-dialog-title", "", 2, "color", "darkblue"], [2, "max-height", "450px", "overflow-y", "scroll"], ["role", "list"], [4, "ngFor", "ngForOf"], ["mat-card-avatar", "", 2, "max-width", "50px", "max-height", "50px", "min-height", "50px", 3, "src"], [2, "margin-top", "70px", "max-width", "500px", "overflow-wrap", "anywhere", "overflow-x", "auto", "overflow-y", "auto", "max-height", "100px", "min-height", "100px", "margin-left", "50px", "font-size", "smaller"], ["mat-icon-button", ""], [2, "color", "rgb(219, 79, 79)"], [2, "color", "rgb(64, 168, 64)"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "10 of 1580 Notifications (Pending History and Active TillDate)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NotificationComponent_mat_list_item_4_Template, 12, 2, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.apiData);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BX9t":
/*!**********************************************!*\
  !*** ./src/app/service/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class DashboardService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    submitleavetype(leaveformsave) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'API/staff_leave_creation.php';
        return this.http.post(url, leaveformsave, this.httpOptions).toPromise();
    }
    getleavetype(empcode) {
        debugger;
        const name = '{ "StaffId": "' + empcode + '"}';
        const json = JSON.parse(name);
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'API/leave_balance_page.php';
        return this.http.post(url, json, this.httpOptions).toPromise();
    }
    dashboardbirthday(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardpiechart(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardrewards(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardannouncement(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardinterviewschedule(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboarddocument(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardnewjoin(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
    dashboardinterviewstatus(companyid) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + '/login';
        return this.http.post(url, companyid, this.httpOptions).toPromise();
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BvYn":
/*!******************************************************************!*\
  !*** ./src/app/departmentmapping/departmentmapping.component.ts ***!
  \******************************************************************/
/*! exports provided: DepartmentmappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentmappingComponent", function() { return DepartmentmappingComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













const _c0 = ["search"];
function DepartmentmappingComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Company Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r13.companyname, " ");
} }
function DepartmentmappingComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Department Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r14.departmentname, " ");
} }
function DepartmentmappingComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Head Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r15.headname, " ");
} }
function DepartmentmappingComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16.status, " ");
} }
function DepartmentmappingComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentmappingComponent_td_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const element_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.selectedrow(element_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DepartmentmappingComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 26);
} }
function DepartmentmappingComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 27);
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class DepartmentmappingComponent {
    constructor(router) {
        this.router = router;
        this.displayedColumns = ['companyname', 'departmentname', 'headname', 'status', 'tools'];
        this.department = [
            { companyname: 'BlueBase', departmentname: 'Designing', headname: 'Priya', status: true },
            { companyname: 'Quadsel', departmentname: 'Development', headname: 'Preethi', status: false },
            { companyname: 'BlueBase', departmentname: 'Finance', headname: 'Aathi', status: true }
        ];
        this.status = "InActive";
        this.statuscolor = "rgb(249 125 125)";
        this.companyselect = [
            { companycode: 0, companyname: 'Quadsel' },
            { companycode: 1, companyname: 'Bluebase' },
            { companycode: 2, companyname: 'Quadsel' }
        ];
        this.departmentselect = [
            { deptcode: 0, deptname: 'Marketing' },
            { deptcode: 1, deptname: 'Finance' },
            { deptcode: 2, deptname: 'Developing' }
        ];
        this.headselect = [
            { headcode: 0, headname: 'Saro' },
            { headcode: 1, headname: 'Suman' },
            { headcode: 2, headname: 'Shiva' }
        ];
    }
    ngOnInit() {
        setTimeout(() => {
            this.searchElement.nativeElement.focus();
        }, 0);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.department);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    add() {
        this.router.navigate(['/departmentmappingadd', "", "", "", false, "add"]);
    }
    selectedrow(row) {
        this.router.navigate(['/departmentmappingadd', row.companyname, row.departmentname, row.headname, row.status, "update"]);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
DepartmentmappingComponent.ɵfac = function DepartmentmappingComponent_Factory(t) { return new (t || DepartmentmappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
DepartmentmappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DepartmentmappingComponent, selectors: [["app-departmentmapping"]], viewQuery: function DepartmentmappingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 35, vars: 6, consts: [["flex", ""], [2, "text-align", "center"], [2, "font-size", "x-large", "font-weight", "500", "margin-top", "revert"], ["fxLayout", "row"], ["fxFlex", "90"], ["appearance", "standard"], ["matInput", "", "placeholder", "Search", "id", "search", "cdkFocusInitial", "", 3, "keyup"], ["search", ""], ["fxFlex", "10"], ["mat-mini-fab", "", 2, "background-color", "#39a9a9", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "companyname"], ["mat-sort-header", "", "mat-header-cell", "", "style", "font-weight: bold;font-size: medium;\n                    color: #383131;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "departmentname"], ["matColumnDef", "headname"], ["matColumnDef", "status"], ["matColumnDef", "tools"], ["mat-header-cell", "", "style", "font-weight: bold;font-size: medium;\n                    color: #383131;", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 1, "mat-paginator-sticky", 3, "pageSizeOptions"], ["mat-sort-header", "", "mat-header-cell", "", 2, "font-weight", "bold", "font-size", "medium", "color", "#383131"], ["mat-cell", ""], ["mat-header-cell", "", 2, "font-weight", "bold", "font-size", "medium", "color", "#383131"], ["mat-header-row", ""], ["mat-row", ""]], template: function DepartmentmappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Department Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DepartmentmappingComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmentmappingComponent_Template_button_click_12_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DepartmentmappingComponent_th_18_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, DepartmentmappingComponent_td_19_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, DepartmentmappingComponent_th_21_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DepartmentmappingComponent_td_22_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](23, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DepartmentmappingComponent_th_24_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DepartmentmappingComponent_td_25_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, DepartmentmappingComponent_th_27_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DepartmentmappingComponent_td_28_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DepartmentmappingComponent_th_30_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DepartmentmappingComponent_td_31_Template, 4, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DepartmentmappingComponent_tr_32_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DepartmentmappingComponent_tr_33_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n }\r\n .example-container[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  overflow: auto;\r\n}\r\n .mat-paginator-sticky[_ngcontent-%COMP%] {\r\n  bottom: 0px;\r\n  position: sticky;\r\n  z-index: 10;\r\n}\r\n .header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\nborder: none !important;\r\nborder-radius: 4px;\r\nopacity: 1;\r\n}\r\n .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\nborder-top: 2px solid #1976d2 !important;\r\nborder-left: 2px solid #1976d2 !important;\r\nborder-bottom: 2px solid #1976d2 !important;\r\n}\r\n .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\nborder-bottom: 2px solid #1976d2 !important;\r\n}\r\n .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\nborder-top: 2px solid #1976d2 !important;\r\nborder-right: 2px solid #1976d2 !important;\r\nborder-bottom: 2px solid #1976d2 !important;\r\n}\r\n .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\nborder-top: 2px solid #1976d2 !important;\r\n}\r\n .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\nborder-top-color: transparent !important;\r\n}\r\n .mat-form-field[_ngcontent-%COMP%] {\r\nfont-size: 14px;\r\nwidth: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnRtYXBwaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0NBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtDQUNBO0VBQ0UsYUFBYTtBQUNmO0NBRUE7O0FBRUEsdUJBQXVCO0FBR3ZCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7Q0FFQTtBQUNBLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDO0NBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7Q0FDQTtBQUNBLHdDQUF3QztBQUN4QywwQ0FBMEM7QUFDMUMsMkNBQTJDO0FBQzNDO0NBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7Q0FDQTtBQUNBLHdDQUF3QztBQUN4QztDQUNBO0FBQ0EsZUFBZTtBQUNmLFVBQVU7QUFDViIsImZpbGUiOiJkZXBhcnRtZW50bWFwcGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm1hdC1wYWdpbmF0b3Itc3RpY2t5IHtcclxuICBib3R0b206IDBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5oZWFkZXItbGVzcy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5tYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOm5vdCgubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQpIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbmJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbmJvcmRlci1sZWZ0OiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbmJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbmJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuZm9udC1zaXplOiAxNHB4O1xyXG53aWR0aDogNTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "F1hY":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../notification/notification.component */ "4a+M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common.service */ "mPL+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");










function TopNavComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavComponent_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.clickevent(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.displayName);
} }
class TopNavComponent {
    constructor(appcomp, navService, dialog, router) {
        this.appcomp = appcomp;
        this.navService = navService;
        this.dialog = dialog;
        this.router = router;
        this.hidden = false;
        this.temp = [];
        this.opennotify = false;
        this.apidata = [];
        this.datalist = [];
        this.count = 0;
    }
    ngOnInit() {
        this.items = this.appcomp.navItems;
        this.tempintraval = setInterval(() => {
            this.navService.checkData().subscribe(res => this.datalist = res);
            this.count = (this.datalist.length);
            // if (this.datalist.length > this.apidata.length) {
            //   this.hidden = true;
            //   this.count = (this.datalist.length - this.apidata.length);
            // } else {
            //   this.hidden = false;
            // }
        }, 5000);
    }
    notificationopen() {
        this.navService.checkData().subscribe(res => this.datalist = res);
        this.apidata = this.datalist;
        this.temp = this.datalist;
        const dialogPosition = {
            top: '50px',
            left: '800px'
        };
        const dialogRef = this.dialog.open(_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"], {
            maxWidth: '400px',
            minWidth: '600px',
            position: dialogPosition,
            data: { row: this.apidata }
        });
    }
    ngOnDestroy() {
        // this.tempintraval.unsubscribe();
    }
    calenderopen() {
        // this.router.navigate(['calender']);
        this.router.navigateByUrl('/calender');
    }
    logout() {
        debugger;
        this.appcomp.topnav = false;
        this.router.navigate(['/']);
        sessionStorage.removeItem('logindet');
        localStorage.removeItem('login');
        this.navService.closeNav();
    }
    clickevent(item) {
        if (item.children)
            this.appcomp.childrenitems = item.children;
        this.navService.openNav();
    }
}
TopNavComponent.ɵfac = function TopNavComponent_Factory(t) { return new (t || TopNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TopNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopNavComponent, selectors: [["app-top-nav"]], decls: 19, vars: 2, consts: [[1, "wrapper"], ["type", "checkbox", "id", "show-search"], ["type", "checkbox", "id", "show-menu"], ["for", "show-menu", 1, "menu-icon"], [1, "fas", "fa-bars"], [1, "content"], [1, "links"], [4, "ngFor", "ngForOf"], ["fxFlex", ""], ["mat-icon-button", "", 2, "background-color", "white", "margin-top", "15px", "margin-right", "5px", "color", "#020808", "font-weight", "bold", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["src", "assets/images/calender.png", 2, "width", "45px", "height", "45px"], ["mat-button", "", 2, "background-color", "white", "color", "#020808", "font-weight", "bold", "max-height", "40px", "min-width", "100px", "margin-top", "15px", "margin-right", "5px", "border-radius", "15px", 3, "click"], [1, "desktop-link", "btn", 3, "click"]], template: function TopNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TopNavComponent_li_8_Template, 3, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavComponent_Template_button_click_14_listener() { return ctx.calenderopen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Calender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopNavComponent_Template_button_click_17_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]], styles: [".mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n    background: #32c3ca !important;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n    font-family: 'Poppins', sans-serif;\r\n    z-index: 50;\r\n    position: relative;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]{\r\n    background: #378a8a;\r\n    position: sticky;\r\n    width: 100%;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    max-width: calc(100% - 200px);\r\n    margin: 0 auto;\r\n    height: 70px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\nnav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n    z-index:0 !important;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\nnav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    margin-left: 80px;\r\n    display: flex;\r\n  }\r\n.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    line-height: 70px;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding: 9px 17px;\r\n    border-radius: 5px;\r\n    transition: all 0.1s ease;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{\r\n    background: #019e9e;\r\n    color: black;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    line-height: 70px;\r\n    width: 70px;\r\n    text-align: center;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n.wrapper[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    position: absolute;\r\n    background: rgb(202, 223, 230);\r\n    top: 80px;\r\n    z-index: -1;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: all 0.1s ease;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]{\r\n    top: 70px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: all 0.1s ease;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    line-height: 30px;\r\n    border-radius: 0px !important;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    right: calc(-100% + 8px);\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    position: relative;\r\n  }\r\n.content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]{\r\n    top: 0;\r\n  }\r\n@media screen and (max-width: 1250px){\r\n    .wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n      max-width: 100%;\r\n      padding: 0 20px;\r\n    }\r\n    nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      margin-left: 30px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      padding: 8px 13px;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n      max-width: calc(100% - 100px);\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n      padding: 0 100px 0 15px;\r\n    }\r\n  }\r\n@media screen and (max-width: 900px){\r\n    .wrapper[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{\r\n      display: block;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   #show-menu[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{\r\n      content: \"\\f00d\";\r\n    }\r\n    nav[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      display: block;\r\n      position: fixed;\r\n      background: #05d8d8;\r\n      height: 100%;\r\n      width: 100%;\r\n      top: 70px;\r\n      left: -100%;\r\n      margin-left: 0;\r\n      max-width: 350px;\r\n      overflow-y: auto;\r\n      padding-bottom: 100px;\r\n      transition: all 0.1s ease;\r\n    }\r\n    nav[_ngcontent-%COMP%]   #show-menu[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n      left: 0%;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      margin: 15px 20px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n      line-height: 40px;\r\n      font-size: 20px;\r\n      display: block;\r\n      padding: 8px 18px;\r\n      cursor: pointer;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.desktop-link[_ngcontent-%COMP%]{\r\n      display: block;\r\n    }\r\n\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n      position: static;\r\n      opacity: 1;\r\n      visibility: visible;\r\n      background: none;\r\n      max-height: 0px;\r\n      overflow: hidden;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-features[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-services[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   #show-items[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]{\r\n      max-height: 100vh;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n      margin: 7px 20px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      line-height: 30px;\r\n      border-radius: 5px!important;\r\n    }\r\n  }\r\n@media screen and (max-width: 400px){\r\n    .wrapper[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{\r\n      padding: 0 10px;\r\n    }\r\n    .content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      font-size: 27px;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{\r\n      max-width: calc(100% - 70px);\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   .go-icon[_ngcontent-%COMP%]{\r\n      width: 30px;\r\n      right: 0;\r\n    }\r\n    .wrapper[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n      padding-right: 30px;\r\n    }\r\n  }\r\n.dummy-text[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 100%;\r\n    z-index: -1;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n.dummy-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n    margin: 5px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBLHNDQUFzQztBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFHSCxtQkFBbUI7QUFDbkI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBOztJQUVFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTs7SUFFRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0FBQ0E7O0lBRUUsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFDRSwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sd0JBQXdCO0VBQzFCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLE1BQU07RUFDUjtBQUNBO0lBQ0U7TUFDRSxlQUFlO01BQ2YsZUFBZTtJQUNqQjtJQUNBO01BQ0UsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFDQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxjQUFjO01BQ2QsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIscUJBQXFCO01BQ3JCLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsUUFBUTtJQUNWO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTs7TUFFRSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTs7TUFFRSxnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQjtJQUNsQjtJQUNBOzs7TUFHRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQiw0QkFBNEI7SUFDOUI7RUFDRjtBQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLFdBQVc7TUFDWCxRQUFRO0lBQ1Y7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDO0VBQ2xDO0FBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0FBRUEsbUJBQW1CIiwiZmlsZSI6InRvcC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzJjM2NhICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogLmNvbnRlbnQge3otaW5kZXg6MjAgIWltcG9ydGFudDt9ICovXHJcbi8qIC5uYXYge2ZvbnQtc2l6ZTowLjc1ZW07IHdpZHRoOjIxMHB4OyB6LWluZGV4Ojk5OTk5OTt9XHJcbi5uYXYgdWwge21hcmdpbjowcHg7IHBhZGRpbmc6MHB4OyB6LWluZGV4Ojk5OTk5OTt9XHJcbi5uYXYgbGkge2xpc3Qtc3R5bGU6IG5vbmU7IHotaW5kZXg6OTk5OTk5O30gXHJcbi5uYXYgYTpob3ZlcntcclxuIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiB6LWluZGV4Ojk5OTk5OTtcclxufVxyXG4ubmF2IGxpOmhvdmVyIHtcclxuIGJhY2tncm91bmQ6ICNmOTA7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDo5OTk5OTk7XHQgXHJcbn1cclxuLm5hdiAuc3ViLWxldmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcblx0ei1pbmRleDo5OTk5OTk7XHRcdFxyXG59ICovXHJcblxyXG5cclxuLyogdG9wIG5hdmlnYXRpb24gKi9cclxuKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAud3JhcHBlcntcclxuICAgIGJhY2tncm91bmQ6ICMzNzhhOGE7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC53cmFwcGVyIG5hdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgbmF2IC5jb250ZW50e1xyXG4gICAgei1pbmRleDowICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgbmF2IC5jb250ZW50IC5saW5rc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmNvbnRlbnQgLmxvZ28gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgLmNvbnRlbnQgLmxpbmtzIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgbGkgYSxcclxuICAuY29udGVudCAubGlua3MgbGkgbGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogOXB4IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgbGkgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgbGkgYTpob3ZlcixcclxuICAuY29udGVudCAubGlua3MgbGkgbGFiZWw6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE5ZTllO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAud3JhcHBlciAuc2VhcmNoLWljb24sXHJcbiAgLndyYXBwZXIgLm1lbnUtaWNvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLndyYXBwZXIgLm1lbnUtaWNvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC53cmFwcGVyIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyB1bHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDIsIDIyMywgMjMwKTtcclxuICAgIHRvcDogODBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyBsaTpob3ZlciA+IHVse1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgdWwgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29udGVudCAubGlua3MgdWwgdWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogY2FsYygtMTAwJSArIDhweCk7XHJcbiAgfVxyXG4gIC5jb250ZW50IC5saW5rcyB1bCBsaXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNvbnRlbnQgLmxpbmtzIHVsIGxpOmhvdmVyIHVse1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpe1xyXG4gICAgLndyYXBwZXIgbmF2e1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICAgIG5hdiAuY29udGVudCAubGlua3N7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIGxpIGF7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxM3B4O1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3h7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTAwcHggMCAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCl7XHJcbiAgICAud3JhcHBlciAubWVudS1pY29ue1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC53cmFwcGVyICNzaG93LW1lbnU6Y2hlY2tlZCB+IC5tZW51LWljb24gaTo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiBcIlxcZjAwZFwiO1xyXG4gICAgfVxyXG4gICAgbmF2IC5jb250ZW50IC5saW5rc3tcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYmFja2dyb3VuZDogIzA1ZDhkODtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiA3MHB4O1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcclxuICAgIH1cclxuICAgIG5hdiAjc2hvdy1tZW51OmNoZWNrZWQgfiAuY29udGVudCAubGlua3N7XHJcbiAgICAgIGxlZnQ6IDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIGxpe1xyXG4gICAgICBtYXJnaW46IDE1cHggMjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC5saW5rcyBsaSBhLFxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIGxpIGxhYmVse1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC5saW5rcyBsaSBhLmRlc2t0b3AtbGlua3tcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIHVsLFxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIHVsIHVse1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAubGlua3MgI3Nob3ctZmVhdHVyZXM6Y2hlY2tlZCB+IHVsLFxyXG4gICAgLmNvbnRlbnQgLmxpbmtzICNzaG93LXNlcnZpY2VzOmNoZWNrZWQgfiB1bCxcclxuICAgIC5jb250ZW50IC5saW5rcyAjc2hvdy1pdGVtczpjaGVja2VkIH4gdWx7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIHVsIGxpe1xyXG4gICAgICBtYXJnaW46IDdweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxpbmtzIHVsIGxpIGF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIC53cmFwcGVyIG5hdntcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLmxvZ28gYXtcclxuICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3h7XHJcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciAuc2VhcmNoLWJveCAuZ28taWNvbntcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLndyYXBwZXIgLnNlYXJjaC1ib3ggaW5wdXR7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kdW1teS10ZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIC5kdW1teS10ZXh0IGgye1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9ICBcclxuXHJcbiAgLyogdG9wIG5hdmlnYXRpb24gKi8iXX0= */"] });


/***/ }),

/***/ "H1LH":
/*!******************************************************!*\
  !*** ./src/app/eventdialog/eventdialog.component.ts ***!
  \******************************************************/
/*! exports provided: MY_FORMATS, EventdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdialogComponent", function() { return EventdialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function EventdialogComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventdialogComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const link_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.listselect(link_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r0.getBackgroundColor(link_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", link_r1.eventname, " ");
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class EventdialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Events = [];
    }
    ngOnInit() {
        // this.filteredOptions = this.myControl.valueChanges
        //   .pipe(
        //     startWith(''),
        //     map(value => this._filter(value))
        //   );
        this.Events = [];
        this.Events = this.data.row;
    }
    getBackgroundColor(link) {
        return link.color;
    }
    onNoClick() {
        this.dialogRef.close();
        this.Events = [];
    }
    listselect(event) {
        this.dialogRef.close(event);
    }
}
EventdialogComponent.ɵfac = function EventdialogComponent_Factory(t) { return new (t || EventdialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EventdialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EventdialogComponent, selectors: [["app-eventdialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ])], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], ["mat-list-item", "", 3, "background-color", "click", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-list-item", "", 3, "click"]], template: function EventdialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EventdialogComponent_a_3_Template, 2, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventdialogComponent_Template_button_click_5_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Events);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"]], styles: [".example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50ZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJldmVudGRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "HCMU":
/*!************************************!*\
  !*** ./src/app/model/leaveform.ts ***!
  \************************************/
/*! exports provided: LeaveTypeSave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveTypeSave", function() { return LeaveTypeSave; });
class LeaveTypeSave {
    constructor() {
        this.StaffId = 0;
        this.leave_type_id = 0;
        this.from_date = "";
        this.to_date = "";
        this.taken_days = 0;
        this.status = 0;
    }
}


/***/ }),

/***/ "I8PV":
/*!********************************!*\
  !*** ./src/app/model/login.ts ***!
  \********************************/
/*! exports provided: LoginPojo, ResetPojo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPojo", function() { return LoginPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPojo", function() { return ResetPojo; });
class LoginPojo {
    constructor() {
        this.username = "";
        this.empcode = 0;
        this.password = "";
        this.empLevel = "";
        this.active = "";
    }
}
class ResetPojo {
    constructor() {
        this.newpassword = "";
        this.username = "";
    }
}


/***/ }),

/***/ "KH8e":
/*!************************************************!*\
  !*** ./src/app/calender/calender.component.ts ***!
  \************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/timegrid */ "PjKf");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _dateclick_dateclick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dateclick/dateclick.component */ "plqx");
/* harmony import */ var _eventclick_eventclick_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventclick/eventclick.component */ "WuvU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_calender_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/calender.service */ "MOHL");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/common.service */ "mPL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");











const _c0 = ["fullcalendar"];
class CalenderComponent {
    constructor(dialog, calenderservice, nameservice, router) {
        this.dialog = dialog;
        this.calenderservice = calenderservice;
        this.nameservice = nameservice;
        this.router = router;
        this.emplist = [];
        this.calendarEvents = [];
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__["default"]];
        this.initialized = false;
        this.Events = [];
        this.Eventsdialog = [];
    }
    ngOnInit() {
        this.nameservice.getEvents().subscribe(data => {
            this.calendarOptions = {
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGrid,dayGridMonth'
                },
                initialView: 'dayGridMonth',
                dayMaxEvents: true,
                weekends: true,
                events: data,
                plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_0__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__["default"]],
                dateClick: this.handleDateClick.bind(this),
                eventClick: this.handleEventClick.bind(this)
            };
        });
    }
    handleDateClick(arg) {
        this.nameservice.getEvents().subscribe(data => {
            this.Events = data;
        });
        this.Eventsdialog = [];
        for (let e of this.Events) {
            if (e['start'] === arg.dateStr) {
                this.Eventsdialog.push(e);
            }
        }
        this.calenderservice.employeelist().subscribe(data => {
            this.emplist = data;
        });
        const dialogRef = this.dialog.open(_dateclick_dateclick_component__WEBPACK_IMPORTED_MODULE_3__["DateclickComponent"], {
            disableClose: true,
            maxWidth: '400px',
            minWidth: '400px',
            maxHeight: '400px',
            minHeight: '400px',
            data: { row: this.Eventsdialog }
        });
    }
    handleEventClick(arg) {
        this.nameservice.getEvents().subscribe(data => {
            this.Events = data;
        });
        this.Eventsdialog = [];
        for (let e of this.Events) {
            if (e['time'] === arg.event._def.extendedProps.time && e['description'] === arg.event._def.extendedProps.description && e['title'] === arg.event._def.title) {
                this.Eventsdialog.push(e);
            }
        }
        const dialogRef = this.dialog.open(_eventclick_eventclick_component__WEBPACK_IMPORTED_MODULE_4__["EventclickComponent"], {
            disableClose: true,
            maxWidth: '400px',
            minWidth: '400px',
            maxHeight: '200px',
            minHeight: '200px',
            data: { row: this.Eventsdialog, emp: this.emplist }
        });
    }
    ngAfterViewChecked() {
        // this.calendarApi = this.calendarComponent.getApi();
        // if (this.calendarApi && !this.initialized) {
        //   this.initialized = true;
        //   this.loadEvents();
        // }
    }
    loadEvents() {
        const event = {
            title: 'test',
            start: Date.now(),
            allDay: true
        };
        // this.calendarEvents.push(event);
        // this.calendarApi.removeAllEventSources();
        // this.calendarApi.addEventSource(this.calendarEvents);
    }
    onEventRender(info) {
        console.log('onEventRender', info.el);
        // const tooltip = new Tooltip(info.el, {
        //   title: info.event.title,
        //   placement: 'top-end',
        //   trigger: 'hover',
        //   container: 'body'
        // });
    }
}
CalenderComponent.ɵfac = function CalenderComponent_Factory(t) { return new (t || CalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_calender_service__WEBPACK_IMPORTED_MODULE_7__["CalenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
CalenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CalenderComponent, selectors: [["app-calender"]], viewQuery: function CalenderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.calendarComponent = _t.first);
    } }, decls: 1, vars: 1, consts: [["dateClick", "onDateClick()", "eventClick", "onEventClick($event)", 2, "max-height", "600px", 3, "options"]], template: function CalenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "full-calendar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, directives: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarComponent"]], styles: ["p[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiY2FsZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "KcsN":
/*!******************************************************!*\
  !*** ./src/app/leavedialog/leavedialog.component.ts ***!
  \******************************************************/
/*! exports provided: MY_FORMATS, LeavedialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavedialogComponent", function() { return LeavedialogComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_datevalidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/datevalidator */ "tGYo");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @candidosales/material-time-picker */ "fvN+");



















function LeavedialogComponent_div_0_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", type_r8.name, "\u00A0\u00A0\u00A0~\u00A0\u00A0\u00A0Available Days\u00A0\u00A0\u00A0 ", type_r8.available_leave, "\u00A0\u00A0\u00A0days ");
} }
function LeavedialogComponent_div_0_mat_form_field_25_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const half_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", half_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", half_r10.name, " ");
} }
function LeavedialogComponent_div_0_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LeavedialogComponent_div_0_mat_form_field_25_mat_option_4_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.halffull);
} }
function LeavedialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "LeaveType");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeavedialogComponent_div_0_mat_option_8_Template, 2, 3, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function LeavedialogComponent_div_0_Template_input_dateChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onfromDateChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-datepicker", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function LeavedialogComponent_div_0_Template_input_dateChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.ontoDateChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-datepicker-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LeavedialogComponent_div_0_mat_form_field_25_Template, 5, 1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeavedialogComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.submitleavetype(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroupleave);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.leavetype);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.formGroupleave.valid);
} }
function LeavedialogComponent_div_1_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", e_r19.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", e_r19.name, " ");
} }
function LeavedialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeavedialogComponent_div_1_mat_option_8_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-datepicker", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeavedialogComponent_div_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.submitonduty(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.formGrouponduty);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.formGrouponduty.valid);
} }
function LeavedialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "material-timepicker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeavedialogComponent_div_2_Template_material_timepicker_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onChangeHour($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "material-timepicker", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function LeavedialogComponent_div_2_Template_material_timepicker_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onChangeHour($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeavedialogComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.submitperm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.formGroupperm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.formGroupperm.valid);
} }
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
class LeavedialogComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.event = "";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        this.now = Date.now();
        this.leavetype = [];
        this.halffull = [
            { code: 0, name: 'Half Day' },
            { code: 1, name: 'Full Day' }
        ];
        this.client = [
            { code: 0, name: 'HOG' },
            { code: 1, name: 'GRT' }
        ];
        this.type = false;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.leavedet = [{ code: 0, days: 1 }, { code: 1, days: 5 }, { code: 2, days: 12 }];
    }
    ngOnInit() {
        const mySimpleFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
        this.event = this.data.row;
        this.leavetype = this.data.leavetype;
        if (this.event === 'Leave') {
            this.formGroupleave = this.fb.group({
                leavetype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                fromdate: [this.data.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] || false,
                todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] || false,
                days: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: '',
            }, { validator: _common_datevalidator__WEBPACK_IMPORTED_MODULE_6__["DateValidator"] });
        }
        else if (this.event === 'OnDuty') {
            this.formGrouponduty = this.fb.group({
                client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                date: [this.data.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] || false,
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                purpose: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
        else if (this.event === 'Permission') {
            this.formGroupperm = this.fb.group({
                date: [
                    this.data.date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                ],
                fromtime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                totime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
        }
    }
    onfromDateChange() {
        const mySimpleFormat = this.pipe.transform(this.formGroupleave.value.fromdate, 'MM/dd/yyyy');
        this.formGroupleave.value.fromdate = mySimpleFormat;
        var date1 = this.formGroupleave.value.fromdate;
        var date2 = this.formGroupleave.value.todate;
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.formGroupleave.patchValue({
            days: Difference_In_Days + 1
        });
        if (this.formGroupleave.value.days === 1) {
            this.type = true;
        }
        else {
            this.type = false;
        }
    }
    ontoDateChange() {
        if (this.formGroupleave.value.todate < this.formGroupleave.value.fromdate) {
            alert("To Date Should Not Be Greater than From Date");
            return;
        }
        const mySimpleFormat = this.pipe.transform(this.formGroupleave.value.todate, 'MM/dd/yyyy');
        this.formGroupleave.value.todate = mySimpleFormat;
        var date1 = new Date(this.formGroupleave.value.fromdate);
        var date2 = new Date(this.formGroupleave.value.todate);
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        if (Difference_In_Days > this.formGroupleave.value.leavetype.available) {
            alert("Leave exceed");
        }
        this.formGroupleave.patchValue({
            days: Difference_In_Days + 1
        });
        if (this.formGroupleave.value.days === 1) {
            this.type = true;
        }
        else {
            this.type = false;
        }
    }
    onChangeHour(event) {
        console.log('event', event);
    }
    submitleavetype() {
        if (this.formGroupleave.value.todate < this.formGroupleave.value.fromdate) {
            alert("To Date Should Not Be Greater than From Date");
            return;
        }
        this.dialogRef.close(this.formGroupleave.value);
    }
    submitonduty() {
        console.log(this.formGroupleave.value);
    }
    submitperm() {
        console.log(this.formGroupleave.value);
    }
}
LeavedialogComponent.ɵfac = function LeavedialogComponent_Factory(t) { return new (t || LeavedialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LeavedialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeavedialogComponent, selectors: [["app-leavedialog"]], outputs: { dateChange: "dateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ])], decls: 3, vars: 3, consts: [["fxFlex", "", 4, "ngIf"], ["fxFlex", ""], [2, "text-align-last", "center", "font-weight", "500"], [3, "formGroup"], ["appearance", "outline", 1, "example-full-width"], [2, "font-weight", "bold", "color", "#464545"], ["formControlName", "leavetype"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "fromdate", "matInput", "", "placeholder", "From Date", "readonly", "", 3, "matDatepicker", "dateChange"], ["matSuffix", "", "disabled", "", 3, "for"], ["frompicker", ""], ["formControlName", "todate", "matInput", "", "placeholder", "To Date", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["topicker", ""], ["fxLayout", "row", "fxLayoutGap", "2px"], ["fxFlex", "40"], ["matInput", "", "formControlName", "days", "placeholder", "No. Of Days", "id", "days"], ["days", ""], ["class", "example-full-width", "appearance", "outline", "fxFlex", "50", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", 2, "background-color", "#255e5e", "color", "white", 3, "disabled", "click"], [3, "value"], ["appearance", "outline", "fxFlex", "50", 1, "example-full-width"], ["formControlName", "type"], ["formControlName", "client"], ["formControlName", "date", "matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker"], ["picker", ""], ["matInput", "", "formControlName", "location", "placeholder", "Location", "id", "location"], ["location", ""], ["matInput", "", "formControlName", "purpose", "placeholder", "Purpose", "id", "purpose"], ["purpose", ""], ["formControlName", "fromtime", "color", "primary", "label", "From Time", "revertLabel", "Remove", "submitLabel", "Ok", 3, "change"], ["formControlName", "totime", "color", "primary", "label", "To Time", "revertLabel", "Remove", "submitLabel", "Ok", 3, "change"]], template: function LeavedialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LeavedialogComponent_div_0_Template, 29, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeavedialogComponent_div_1_Template, 22, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeavedialogComponent_div_2_Template, 11, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.event === "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.event === "OnDuty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.event === "Permission");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_13__["MaterialTimePickerComponent"]], styles: [".header-less-tabs.mat-tab-group[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  mat-input[_ngcontent-%COMP%]   focused[_ngcontent-%COMP%]   color\r\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]:not(.mat-form-field-disabled)   .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline[_ngcontent-%COMP%] {\r\n  border: none !important;\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n}\r\n\r\n  .mat-form-field-outline-start[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-left: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-outline-end[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n  border-right: 2px solid #1976d2 !important;\r\n  border-bottom: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-flex[_ngcontent-%COMP%]:hover   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top: 2px solid #1976d2 !important;\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-outline-gap[_ngcontent-%COMP%] {\r\n  border-top-color: transparent !important;\r\n}\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOztFQUVBLHVCQUF1QjtFQUd2QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztFQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlDQUF5QztFQUN6QywyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7O0VBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsMENBQTBDO0VBQzFDLDJDQUEyQztBQUM3Qzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLHdDQUF3QztBQUMxQzs7RUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2IiLCJmaWxlIjoibGVhdmVkaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5oZWFkZXItbGVzcy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBtYXQtaW5wdXQgZm9jdXNlZCBjb2xvclxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOm5vdCgubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQpIC5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE5NzZkMiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4OmhvdmVyIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTc2ZDIgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "MOHL":
/*!*********************************************!*\
  !*** ./src/app/service/calender.service.ts ***!
  \*********************************************/
/*! exports provided: CalenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderService", function() { return CalenderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CalenderService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // employeelist(): Promise<any> {
    employeelist() {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/login';
        this.dropdownList = [
            { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' },
            { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }, { id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(this.dropdownList);
        // return this.http.post(url, this.httpOptions).toPromise();
    }
}
CalenderService.ɵfac = function CalenderService_Factory(t) { return new (t || CalenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CalenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CalenderService, factory: CalenderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MsPU":
/*!************************************************************!*\
  !*** ./src/app/menu-list-item/menu-list-item.component.ts ***!
  \************************************************************/
/*! exports provided: MenuListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListItemComponent", function() { return MenuListItemComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common.service */ "mPL+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function MenuListItemComponent_div_4_app_menu_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menu-list-item", 4);
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", child_r2)("depth", ctx_r1.depth + 1);
} }
function MenuListItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuListItemComponent_div_4_app_menu_list_item_1_Template, 1, 2, "app-menu-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.item.children);
} }
const _c0 = function (a0) { return { "padding-left": a0 }; };
const _c1 = function (a0, a1) { return { "active": a0, "expanded": a1 }; };
class MenuListItemComponent {
    constructor(navService, router) {
        this.navService = navService;
        this.router = router;
        this.expanded = false;
        this.ariaExpanded = this.expanded;
        this.depth = 0;
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    ngOnInit() {
        this.navService.currentUrl.subscribe((url) => {
            if (this.item.route && url) {
                this.expanded = url.indexOf(`/${this.item.route}`) === 0;
                this.ariaExpanded = this.expanded;
            }
        });
    }
    onItemSelected(item) {
        // this.router.navigate(['']);
        //   this.navService.closeNav();
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
            // this.navService.closeNav();
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    }
}
MenuListItemComponent.ɵfac = function MenuListItemComponent_Factory(t) { return new (t || MenuListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuListItemComponent, selectors: [["app-menu-list-item"]], hostVars: 1, hostBindings: function MenuListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.ariaExpanded);
    } }, inputs: { item: "item", depth: "depth" }, decls: 5, vars: 11, consts: [["mat-list-item", "", 1, "menu-list-item", 3, "ngStyle", "ngClass", "routerLink", "click"], [1, "routeIcon"], [4, "ngIf"], [3, "item", "depth", 4, "ngFor", "ngForOf"], [3, "item", "depth"]], template: function MenuListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuListItemComponent_Template_a_click_0_listener() { return ctx.onItemSelected(ctx.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuListItemComponent_div_4_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.item.route, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.depth * 12 + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, ctx.item.route ? ctx.router.isActive(ctx.item.route, true) : false, ctx.expanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.item.iconName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0 ", ctx.item.displayName, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], MenuListItemComponent], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  outline: none;\r\n  width: 100%;\r\n}\r\n\r\n.mat-list-item[_ngcontent-%COMP%] {\r\n  padding: 0px 0;\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-list-option[_ngcontent-%COMP%]:focus {\r\n  background: #76b900 !important;\r\n}\r\n\r\n.mat-list-item[_ngcontent-%COMP%] {\r\n  background-color: #7ab0c5; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im1lbnUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIHtcclxuICBwYWRkaW5nOiAwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLFxyXG4ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLFxyXG4ubWF0LWxpc3Qtb3B0aW9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjNzZiOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1saXN0LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3YWIwYzU7IFxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
            ])
        ] } });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventdialog/eventdialog.component */ "H1LH");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js */ "b5oN");
/* harmony import */ var _leavedialog_leavedialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../leavedialog/leavedialog.component */ "KcsN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/login */ "I8PV");
/* harmony import */ var _model_leaveform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/leaveform */ "HCMU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/common.service */ "mPL+");
/* harmony import */ var _service_dashboard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/dashboard.service */ "BX9t");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _common_filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common/filter.pipe */ "4Kmh");



























const _c0 = ["widgetsContent"];
const _c1 = ["table"];
const _c2 = ["filter"];
function DashboardComponent_div_0_mat_list_item_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", pic_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", pic_r7.description, " ");
} }
function DashboardComponent_div_0_span_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " person_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Send Wishes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r8.name);
} }
function DashboardComponent_div_0_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " person_pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Send Wishes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9.name);
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "full-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "canvas", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("chartHover", function DashboardComponent_div_0_Template_canvas_chartHover_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.chartHovered($event); })("chartClick", function DashboardComponent_div_0_Template_canvas_chartClick_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.chartClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Pie Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " \u00A0\u00A0\u00A0\u00A0 Rewards and Recognition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DashboardComponent_div_0_mat_list_item_18_Template, 4, 2, "mat-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Punch In");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "touch_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Last Swipe: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Last Wednesday at 11.00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Current Ip: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "192.68.212.59");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Punch In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Claims");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Current Year \u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " CTC Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-tab", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " Non CTC Claims ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "My Learning");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "VIEW MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "You are not enrolled for any other courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Welcome New Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "mat-tab", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, DashboardComponent_div_0_span_83_Template, 10, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "mat-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, DashboardComponent_div_0_span_87_Template, 10, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Company Announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, " Dear all, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, " If you have been following the developments within our company, you probably came across our latest job opening. For those of you that are not aware, we are currently hiring an HR manager. This announcement will, on a later date be shared with external sources as well, but we would like to get some eligible candidates from within our company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "Referral Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](107, "touch_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "h1", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](110, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "Job Openings For Referral");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "View Job Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx_r0.calendarOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r0.pieChartData)("labels", ctx_r0.pieChartLabels)("colors", ctx_r0.pieChartcolors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.pics);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.welcome);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.welcome);
} }
function DashboardComponent_div_1_ul_22_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r28.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r28.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r28.status);
} }
function DashboardComponent_div_1_ul_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_1_ul_22_mat_card_1_Template, 6, 4, "mat-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r13.attendancetoggle);
} }
function DashboardComponent_div_1_mat_card_23_ul_14_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r33.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r33.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r33.status);
} }
function DashboardComponent_div_1_mat_card_23_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_1_mat_card_23_ul_14_mat_card_1_Template, 6, 4, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r31.attendancetoggle);
} }
function DashboardComponent_div_1_mat_card_23_ul_22_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r36.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r36.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r36.status);
} }
function DashboardComponent_div_1_mat_card_23_ul_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_1_mat_card_23_ul_22_mat_card_1_Template, 6, 4, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r32.attendancetoggle);
} }
function DashboardComponent_div_1_mat_card_23_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_1_mat_card_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r39.accordion.openAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Open All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_1_mat_card_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r41.accordion.closeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Close All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-accordion", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-panel-title", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " PHP Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "developer_board");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, DashboardComponent_div_1_mat_card_23_ul_14_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-expansion-panel-header", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-panel-title", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Angular Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DashboardComponent_div_1_mat_card_23_ul_22_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r14.attendancelist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r14.attendancelist);
} }
function DashboardComponent_div_1_ul_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", e_r42.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r42.jobname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r42.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r42.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", e_r42.days, " ");
} }
function DashboardComponent_div_1_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r44.description);
} }
function DashboardComponent_div_1_table_43_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](car_r46.name);
} }
function DashboardComponent_div_1_table_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "col", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_div_1_table_43_tr_6_Template, 3, 1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 1, ctx_r18.scheduled, ctx_r18.searchText));
} }
function DashboardComponent_div_1_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No results found for \"", ctx_r20.searchText, "\".");
} }
function DashboardComponent_div_1_table_50_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " CandidateName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_table_50_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r54.candidatename, " ");
} }
function DashboardComponent_div_1_table_50_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_table_50_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r55.status, " ");
} }
function DashboardComponent_div_1_table_50_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_1_table_50_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_1_table_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DashboardComponent_div_1_table_50_th_2_Template, 2, 0, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_div_1_table_50_td_3_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_div_1_table_50_th_5_Template, 2, 0, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_div_1_table_50_td_6_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_1_table_50_tr_7_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_div_1_table_50_tr_8_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r21.dataSourcedoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r21.displayedColumnsdoc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r21.displayedColumnsdoc);
} }
function DashboardComponent_div_1_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_table_57_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " CandidateName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_table_57_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r63.name, " ");
} }
function DashboardComponent_div_1_table_57_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_table_57_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r64.status, " ");
} }
function DashboardComponent_div_1_table_57_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_1_table_57_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_1_table_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DashboardComponent_div_1_table_57_th_2_Template, 2, 0, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_div_1_table_57_td_3_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_div_1_table_57_th_5_Template, 2, 0, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_div_1_table_57_td_6_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_1_table_57_tr_7_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_div_1_table_57_tr_8_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r24.dataSourcestatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r24.displayedColumnsstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r24.displayedColumnsstatus);
} }
function DashboardComponent_div_1_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_mat_list_item_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pic_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", pic_r66.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", pic_r66.description, " ");
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Interview Status PieChart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "canvas", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("chartHover", function DashboardComponent_div_1_Template_canvas_chartHover_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r67.chartHovered($event); })("chartClick", function DashboardComponent_div_1_Template_canvas_chartClick_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r69.chartClicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Company Announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Dear all, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " If you have been following the developments within our company, you probably came across our latest job opening. For those of you that are not aware, we are currently hiring an HR manager. This announcement will, on a later date be shared with external sources as well, but we would like to get some eligible candidates from within our company. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-card", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-slide-toggle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DashboardComponent_div_1_Template_mat_slide_toggle_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r70.onToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DashboardComponent_div_1_ul_22_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, DashboardComponent_div_1_mat_card_23_Template, 23, 2, "mat-card", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Job Openings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_1_Template_input_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r71.searchJob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, DashboardComponent_div_1_ul_32_Template, 14, 6, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "New Joinees");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, DashboardComponent_div_1_div_38_Template, 7, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Interview scheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, DashboardComponent_div_1_table_43_Template, 8, 4, "table", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](44, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, DashboardComponent_div_1_ng_template_45_Template, 2, 1, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-card", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Document Submission status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, DashboardComponent_div_1_table_50_Template, 9, 3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](51, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, DashboardComponent_div_1_ng_template_52_Template, 2, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-card", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Candidate Interview status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, DashboardComponent_div_1_table_57_Template, 9, 3, "table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](58, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, DashboardComponent_div_1_ng_template_59_Template, 2, 0, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-card", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " \u00A0\u00A0\u00A0\u00A0BirthDay Celebration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, DashboardComponent_div_1_mat_list_item_70_Template, 4, 2, "mat-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](46);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx_r1.interviewstatusData)("labels", ctx_r1.interviewstatuslabels)("colors", ctx_r1.interviewstatuscolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.att);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.attendancelist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.attendancetoggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.searchJob);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](33, 16, ctx_r1.joblist, ctx_r1.searchJob));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.newjoinees);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](44, 19, ctx_r1.scheduled, ctx_r1.searchText).length > 0)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](51, 22, ctx_r1.docstatus, ctx_r1.searchdocstatus).length > 0)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](58, 25, ctx_r1.status, ctx_r1.searchstatus).length > 0)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.birthday);
} }
function DashboardComponent_div_2_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r101.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r101.amount);
} }
function DashboardComponent_div_2_ul_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r102.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r102.amount);
} }
function DashboardComponent_div_2_ul_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r103.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r103.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r103.status);
} }
function DashboardComponent_div_2_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vendor Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r104.name, " ");
} }
function DashboardComponent_div_2_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Paid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r105.paid, " ");
} }
function DashboardComponent_div_2_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Due ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r106.due, " ");
} }
function DashboardComponent_div_2_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_2_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_2_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Vendor Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r108.name, " ");
} }
function DashboardComponent_div_2_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r109 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r109.order, " ");
} }
function DashboardComponent_div_2_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r110 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r110.status, " ");
} }
function DashboardComponent_div_2_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " EOD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r111.eod, " ");
} }
function DashboardComponent_div_2_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_2_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_2_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r113.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r113.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r113.date);
} }
function DashboardComponent_div_2_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", e_r114.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r114.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r114.amount);
} }
function DashboardComponent_div_2_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Compliance Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r115.name, " ");
} }
function DashboardComponent_div_2_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_2_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r116.amount, " ");
} }
function DashboardComponent_div_2_tr_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_2_tr_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Complete Collection Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r118.paymentaccordion.openAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Open All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r120.paymentaccordion.closeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Close All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-accordion", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-expansion-panel", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, DashboardComponent_div_2_ul_20_Template, 7, 2, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-expansion-panel-header", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, DashboardComponent_div_2_ul_28_Template, 7, 2, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, DashboardComponent_div_2_ul_36_Template, 9, 3, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Vendor Payment status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, DashboardComponent_div_2_th_42_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, DashboardComponent_div_2_td_43_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](44, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, DashboardComponent_div_2_th_45_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, DashboardComponent_div_2_td_46_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](47, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, DashboardComponent_div_2_th_48_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, DashboardComponent_div_2_td_49_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, DashboardComponent_div_2_tr_50_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, DashboardComponent_div_2_tr_51_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Vendor Order status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](56, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, DashboardComponent_div_2_th_57_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, DashboardComponent_div_2_td_58_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, DashboardComponent_div_2_th_60_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, DashboardComponent_div_2_td_61_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](62, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, DashboardComponent_div_2_th_63_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, DashboardComponent_div_2_td_64_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, DashboardComponent_div_2_th_66_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, DashboardComponent_div_2_td_67_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, DashboardComponent_div_2_tr_68_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, DashboardComponent_div_2_tr_69_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-card", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Salary Advance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, DashboardComponent_div_2_div_75_Template, 7, 3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "mat-card", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Conveyance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, DashboardComponent_div_2_div_80_Template, 8, 3, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "mat-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Compliance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](85, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, DashboardComponent_div_2_th_86_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, DashboardComponent_div_2_td_87_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](88, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, DashboardComponent_div_2_th_89_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, DashboardComponent_div_2_td_90_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, DashboardComponent_div_2_tr_91_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, DashboardComponent_div_2_tr_92_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.payments[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.payments[0].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.paymentstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.payments[1].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.payments[1].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.paymentstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.payments[2].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.payments[2].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.checkclearancestatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.dataSourcevendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumnsvendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumnsvendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.dataSourcevendorstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumnsvendorstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumnsvendorstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.salaryadv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.conveyance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.dataSourcecompliance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumnscompliance);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumnscompliance);
} }
function DashboardComponent_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r147 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r147.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", e_r147.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r147.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r147.count);
} }
function DashboardComponent_div_3_ul_14_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r148.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r148.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r148.status);
} }
function DashboardComponent_div_3_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_3_ul_14_mat_card_1_Template, 6, 4, "mat-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r122.attendancetoggle);
} }
function DashboardComponent_div_3_mat_card_15_ul_14_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r153.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r153.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r153.status);
} }
function DashboardComponent_div_3_mat_card_15_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_3_mat_card_15_ul_14_mat_card_1_Template, 6, 4, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r151.attendancetoggle);
} }
function DashboardComponent_div_3_mat_card_15_ul_22_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r156.empname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r156.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r156.status);
} }
function DashboardComponent_div_3_mat_card_15_ul_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_3_mat_card_15_ul_22_mat_card_1_Template, 6, 4, "mat-card", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r152.attendancetoggle);
} }
function DashboardComponent_div_3_mat_card_15_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_3_mat_card_15_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r159.accordion.openAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Open All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_3_mat_card_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r160); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r161.accordion.closeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Close All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-accordion", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-panel-title", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " PHP Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "developer_board");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, DashboardComponent_div_3_mat_card_15_ul_14_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-expansion-panel-header", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-panel-title", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Angular Team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DashboardComponent_div_3_mat_card_15_ul_22_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r123.attendancelist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r123.attendancelist);
} }
function DashboardComponent_div_3_ul_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r162.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r162.amount);
} }
function DashboardComponent_div_3_ul_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r163 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r163.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r163.amount);
} }
function DashboardComponent_div_3_ul_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "li", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r164.clientname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r164.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r164.status);
} }
function DashboardComponent_div_3_ul_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r165 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", e_r165.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r165.jobname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r165.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r165.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", e_r165.days, " ");
} }
function DashboardComponent_div_3_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h1", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r167.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", e_r167.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", e_r167.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r167.count);
} }
function DashboardComponent_div_3_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_3_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r168.name, " ");
} }
function DashboardComponent_div_3_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_3_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r169.status, " ");
} }
function DashboardComponent_div_3_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_3_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_3_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h3", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r171.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", e_r171.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", e_r171.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r171.count);
} }
function DashboardComponent_div_3_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Client Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_3_td_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r172 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r172.name, " ");
} }
function DashboardComponent_div_3_th_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_3_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r173.payment, " ");
} }
function DashboardComponent_div_3_th_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_3_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r174.date, " ");
} }
function DashboardComponent_div_3_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 116);
} }
function DashboardComponent_div_3_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 117);
} }
function DashboardComponent_div_3_ul_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "av_timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", e_r176.logo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", e_r176.project, " ~ ", e_r176.empname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", e_r176.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](e_r176.deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", e_r176.start, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", e_r176.end, " ");
} }
function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r179 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_3_div_7_Template, 7, 5, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-card", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Attendance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-slide-toggle", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DashboardComponent_div_3_Template_mat_slide_toggle_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r178.onToggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, DashboardComponent_div_3_ul_14_Template, 2, 1, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, DashboardComponent_div_3_mat_card_15_Template, 23, 2, "mat-card", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-card", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Payment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-card", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r180.paymentaccordion.openAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Open All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_3_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r181.paymentaccordion.closeAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Close All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-accordion", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-expansion-panel", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, DashboardComponent_div_3_ul_33_Template, 7, 2, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-expansion-panel-header", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, DashboardComponent_div_3_ul_41_Template, 7, 2, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-expansion-panel-header", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-panel-title", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "p", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, DashboardComponent_div_3_ul_49_Template, 9, 3, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Job Openings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_3_Template_input_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r182.searchJob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, DashboardComponent_div_3_ul_58_Template, 14, 6, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-card", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Support (Ticketing Status)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, DashboardComponent_div_3_div_63_Template, 10, 5, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-card", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Renewal Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, DashboardComponent_div_3_th_69_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, DashboardComponent_div_3_td_70_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, DashboardComponent_div_3_th_72_Template, 2, 0, "th", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, DashboardComponent_div_3_td_73_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, DashboardComponent_div_3_tr_74_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, DashboardComponent_div_3_tr_75_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "mat-card", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Call Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, DashboardComponent_div_3_div_80_Template, 9, 5, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "mat-card", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "AMC(Annual Maintenance Cost) Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](85, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, DashboardComponent_div_3_th_86_Template, 2, 0, "th", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](87, DashboardComponent_div_3_td_87_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](88, 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, DashboardComponent_div_3_th_89_Template, 2, 0, "th", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, DashboardComponent_div_3_td_90_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](91, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, DashboardComponent_div_3_th_92_Template, 2, 0, "th", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, DashboardComponent_div_3_td_93_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, DashboardComponent_div_3_tr_94_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, DashboardComponent_div_3_tr_95_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "mat-card", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "h2", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "Project Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_3_Template_input_ngModelChange_101_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r179); const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r183.searchProject = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](103, DashboardComponent_div_3_ul_103_Template, 17, 8, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](104, "appFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.orders);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.att);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.attendancelist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.attendancetoggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.payments[0].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.payments[0].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.paymentstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.payments[1].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.payments[1].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.paymentstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.payments[2].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.payments[2].amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.checkclearancestatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.searchJob);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](59, 25, ctx_r3.joblist, ctx_r3.searchJob));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.support);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r3.dataSourcerenewal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumnsrenewal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumnsrenewal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.callstatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r3.dataSourceamc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumnsamc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumnsamc);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r3.searchProject);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](104, 28, ctx_r3.projectlist, ctx_r3.searchProject));
} }
class DashboardComponent {
    constructor(appcomp, dialog, nameservice, dashboardservice, router) {
        this.appcomp = appcomp;
        this.dialog = dialog;
        this.nameservice = nameservice;
        this.dashboardservice = dashboardservice;
        this.router = router;
        this.eventname = "";
        this.att = "All";
        this.Events = [];
        this.Eventsdialog = [];
        this.employee = false;
        this.hr = false;
        this.finance = false;
        this.hod = false;
        this.leavesave = new _model_leaveform__WEBPACK_IMPORTED_MODULE_6__["LeaveTypeSave"]();
        this.pieChartLabels = ['Present', 'HalfDay', 'Permission', 'CompOff', 'Absent'];
        this.pieChartcolors = [
            {
                backgroundColor: [
                    '#4A274F',
                    '#fff',
                    '#8BD8BD',
                    '#8AAAE5',
                    '#358597'
                ]
            }
        ];
        this.interviewstatuslabels = ['Going On', 'Completed', 'Pending'];
        this.interviewstatuscolor = [
            {
                backgroundColor: [
                    '#FFFFFF',
                    '#1656d2',
                    '#0e3786'
                ]
            }
        ];
        this.interviewstatusData = [30, 40, 30];
        this.pieChartData = [40, 20, 20, 10, 10];
        this.pieChartType = 'pie';
        this.pics = [
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." }
        ];
        this.attendancelist = [
            { url: "assets/images/business.png", empname: "Priya Preethi", color: "green", status: "P" },
            { url: "assets/images/business.png", empname: "Aathi", color: "orange", status: "H" },
            { url: "assets/images/business.png", empname: "Surya", color: "red", status: "A" },
            { url: "assets/images/business.png", empname: "Venkat", color: "green", status: "P" },
            { url: "assets/images/business.png", empname: "Valli", color: "orange", status: "H" },
        ];
        this.paymentstatus = [
            { clientname: "CLMS", amount: "Rs.2000" },
            { clientname: "Vridhi", amount: "Rs.2000" },
            { clientname: "HRMS", amount: "Rs.2000" },
            { clientname: "Stockcat", amount: "Rs.2000" },
            { clientname: "Grt", amount: "Rs.2000" },
        ];
        this.paymentcleared = [
            { clientname: "CLMS", amount: "Rs.2000" },
            { clientname: "Vridhi", amount: "Rs.2000" },
            { clientname: "HRMS", amount: "Rs.2000" },
            { clientname: "Stockcat", amount: "Rs.2000" },
            { clientname: "Grt", amount: "Rs.2000" },
        ];
        this.checkclearancestatus = [
            { clientname: "CLMS", amount: "Rs.2000", status: "cleared" },
            { clientname: "Vridhi", amount: "Rs.2000", status: "pending" },
            { clientname: "HRMS", amount: "Rs.2000", status: "pending" },
            { clientname: "Stockcat", amount: "Rs.2000", status: "cleared" },
            { clientname: "Grt", amount: "Rs.2000", status: "pending" },
        ];
        this.vendorpayment = [
            { name: 'MLM', paid: 'Rs.2000', due: '1000' },
            { name: 'KRM', paid: 'Rs.2000', due: '1000' },
            { name: 'QSE', paid: 'Rs.2000', due: '1000' },
            { name: 'RKM', paid: 'Rs.2000', due: '1000' }
        ];
        this.payments = [
            { name: "Pending Payments", amount: "Rs.20,000" },
            { name: "Payments Cleared", amount: "Rs.20,000" },
            { name: "Check Clearance Status", amount: "Rs.4000" }
        ];
        this.joblist = [
            { url: "assets/images/angular.png", jobname: "Senior Angular Developer", time: "FullTime", days: "2 days ago", color: "blue" },
            { url: "assets/images/node.png", jobname: "Node Js Developer", time: "PartTime", days: "5 days ago", color: "orange" },
            { url: "assets/images/php.png", jobname: "Junior Php Developer", time: "FullTime", days: "3 hours ago", color: "blue" },
        ];
        this.projectlist = [
            { logo: "assets/images/Vriddhi.png", empname: "Preethi", project: "HRMS", start: "02 Mar 2021", end: "19 Aug 2021", deadline: "1 day more", color: "red" },
            { logo: "assets/images/blogo.png", empname: "Aathi", project: "CRMS", start: "06 Jan 2021", end: "21 Jul 2021", deadline: "6 days more", color: "orange" },
            { logo: "assets/images/bluebase.png", empname: "Surya", project: "VRIDHI", start: "09 May 2021", end: "8 Jun 2021", deadline: "15 days more", color: "yellow" },
            { logo: "assets/images/Vriddhi.png", empname: "Suman", project: "IGAS", start: "18 July 2021", end: "03 Dec 2021", deadline: "9 days more", color: "green" }
        ];
        this.birthday = [
            { url: "assets/images/simbu.jpg", description: "Aathi  🎂 🙂 " },
            { url: "assets/images/v.jpg", description: "Suman  🎂 🙂 " },
            { url: "assets/images/mal.jpg", description: "Saravanan  🎂 🙂 " },
        ];
        this.orders = [
            { icon: "thumb_up", count: "3", color: "green", reason: "", name: "Won" },
            { icon: "thumb_down", count: "1", color: "red", reason: "Amount Issue", name: "Lost" }
        ];
        this.support = [
            { icon: "cloud_download", count: "3", color: "orange", name: "Opening" },
            { icon: "cloud_done", count: "2", color: "green", name: "Closed" },
            { icon: "cloud_off", count: "1", color: "red", name: "Pending" }
        ];
        this.newjoinees = [
            { name: "Preethi", description: "Angular Developer. Welcomes You" },
            { name: "Priya", description: "PHP Developer. Welcomes You" },
            { name: "Raji", description: "Java Developer. Welcomes You" },
            { name: "Aathi", description: "Senior Angular Developer. Welcomes You" },
            { name: "Surya", description: "Junior Angular Developer. Welcomes You" },
            { name: "Venkat", description: "Junior PHP Developer. Welcomes You" },
        ];
        this.vendorstatus = [
            { name: "MLM", order: "KeyBoard", status: "Ordered", eod: "02/09/2021" },
            { name: "QLN", order: "Mouse", status: "Pending", eod: "21/10/2021" },
            { name: "MLM", order: "Monitor", status: "Shipping", eod: "16/12/2021" },
            { name: "QLN", order: "Remote", status: "Ordered", eod: "08/11/2021" },
            { name: "MLM", order: "AC", status: "Shipping", eod: "06/08/2021" },
            { name: "QLN", order: "Batteries", status: "Pending", eod: "02/10/2021" },
        ];
        this.salaryadv = [
            { name: "Guru", amount: "Rs.5000", date: "02/04/2021" },
            { name: "Deva", amount: "Rs.8000", date: "09/06/2021" },
            { name: "Jeya", amount: "Rs.10,000", date: "12/08/2021" },
            { name: "Guru", amount: "Rs.5000", date: "02/04/2021" },
            { name: "Deva", amount: "Rs.8000", date: "09/06/2021" },
            { name: "Jeya", amount: "Rs.10,000", date: "12/08/2021" }
        ];
        this.conveyance = [
            { url: "assets/images/bg.jpg/", name: "Ms.prithika", amount: "Rs.12000" },
            { url: "assets/images/bg.jpg/", name: "Ms.preethi", amount: "Rs.12000" },
            { url: "assets/images/bg.jpg/", name: "Ms.prithika", amount: "Rs.12000" },
            { url: "assets/images/bg.jpg/", name: "Ms.preethi", amount: "Rs.12000" },
            { url: "assets/images/bg.jpg/", name: "Ms.prithika", amount: "Rs.12000" }
        ];
        this.welcome = [
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" },
            { name: "Ms.prithika" },
            { name: "Ms.preethi" }
        ];
        this.searchText = "";
        this.searchJob = "";
        this.searchProject = "";
        this.searchstatus = "";
        this.searchdocstatus = "";
        this.scheduled = [
            { name: 'Mr. Nice' },
            { name: 'Narco' },
            { name: 'Bombasto' },
            { name: 'Celeritas' },
            { name: 'Magneta' },
            { name: 'RubberMan' },
            { name: 'Dynama' },
            { name: 'Dr IQ' },
            { name: 'Magma' },
            { name: 'Tornado' },
        ];
        this.status = [
            { name: 'Mr. Nice', status: "MD Cleared" },
            { name: 'Narco', status: "Test" },
            { name: 'Bombasto', status: "Aptitude" },
            { name: 'Celeritas', status: "Hr Round" },
            { name: 'Magneta', status: "Aptitude" },
            { name: 'RubberMan', status: "Technical" },
            { name: 'Dynama', status: "MD Cleared" },
            { name: 'Dr IQ', status: "Aptitude" },
            { name: 'Magma', status: "Hr Round" },
            { name: 'Tornado', status: "Technical" },
        ];
        this.docstatus = [
            { candidatename: 'Mr. Nice', status: "Submitted" },
            { candidatename: 'Narco', status: "Not Submitted" },
            { candidatename: 'Bombasto', status: "Submitted" },
            { candidatename: 'Celeritas', status: "Not Submitted" },
            { candidatename: 'Magneta', status: "Submitted" },
            { candidatename: 'RubberMan', status: "Not Submitted" },
            { candidatename: 'Dynama', status: "Submitted" },
            { candidatename: 'Dr IQ', status: "Not Submitted" },
            { candidatename: 'Magma', status: "Submitted" },
            { candidatename: 'Tornado', status: "Not Submitted" },
        ];
        this.compliance = [
            { name: 'GST', amount: "Rs.200" },
            { name: 'ESI', amount: "Rs.200" },
            { name: 'PF', amount: "Rs.200" },
            { name: 'Professional', amount: "Rs.200" },
            { name: 'Tax', amount: "Rs.200" },
            { name: 'IncomeTax', amount: "Rs.200" },
            { name: 'MediClaim', amount: "Rs.200" }
        ];
        this.renewal = [{ name: 'CRMS', status: "Success" },
            { name: 'MED', status: "Failed" },
            { name: 'GHJ', status: "OnGoing" }];
        this.callstatus = [
            { icon: "call_received", color: "orange", name: 'Incomming', count: "1" },
            { icon: "call_made", color: "green", name: 'OutGoing', count: "2" },
            { icon: "directions_bike", color: "blue", name: 'Direct', count: "3" }
        ];
        this.amc = [
            { name: 'MED', payment: "Rs.3000", date: "09/07/2021" },
            { name: 'GHJ', payment: "Rs.5000", date: "11/09/2021" },
            { name: 'KEO', payment: "Rs.2000", date: "07/06/2021" },
            { name: 'POL', payment: "Rs.4000", date: "03/02/2021" }
        ];
        this.displayedColumnsdoc = ['candidatename', 'status'];
        this.dataSourcedoc = [];
        this.displayedColumnsstatus = ['name', 'status'];
        this.dataSourcestatus = [];
        this.displayedColumnsvendor = ['name', 'paid', 'due'];
        this.dataSourcevendor = [];
        this.displayedColumnsvendorstatus = ['name', 'order', 'status', 'eod'];
        this.dataSourcevendorstatus = [];
        this.displayedColumnscompliance = ['name', 'amount'];
        this.dataSourcecompliance = [];
        this.displayedColumnsrenewal = ['name', 'status'];
        this.dataSourcerenewal = [];
        this.displayedColumnsamc = ['name', 'payment', 'date'];
        this.dataSourceamc = [];
        this.login = new _model_login__WEBPACK_IMPORTED_MODULE_5__["LoginPojo"]();
        this.leavetype = [];
        this.nameservice.getEvents().subscribe(data => {
            this.calendarOptions = {
                initialView: 'dayGridMonth',
                weekends: true,
                events: data,
                dateClick: this.handleDateClick.bind(this),
                eventClick: this.handleEventClick.bind(this),
            };
        });
        // this.nameservice.closeNav();
    }
    handleEventClick(arg) {
    }
    handleDateClick(arg) {
        const format = 'yyyy-MM-dd';
        const myDate = new Date();
        const locale = 'en-US';
        const formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(myDate, format, locale);
        if (arg.dateStr < formattedDate) {
            alert("Back Date Not Allowed");
            return;
        }
        this.nameservice.getEvents().subscribe(data => {
            this.Events = data;
        });
        this.Eventsdialog = [{ eventname: 'Leave' }, { eventname: 'OnDuty' }, { eventname: 'Permission' }];
        // for (let e of this.Events) {
        //   if (e['start'] === arg.dateStr) {
        //     this.Eventsdialog.push(e);
        //   }
        // }
        if (this.Eventsdialog.length !== 0) {
            this.eventname = "";
            const dialogRef = this.dialog.open(_eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_0__["EventdialogComponent"], {
                maxWidth: '300px',
                minWidth: '300px',
                data: { row: this.Eventsdialog }
            });
            dialogRef.afterClosed().subscribe((data) => {
                this.eventname = data.eventname;
                if (this.eventname !== "") {
                    this.leavepopup(arg.date);
                }
            });
        }
    }
    leavepopup(date) {
        const dialogRefleave = this.dialog.open(_leavedialog_leavedialog_component__WEBPACK_IMPORTED_MODULE_3__["LeavedialogComponent"], {
            maxWidth: '450px',
            minWidth: '400px',
            data: { row: this.eventname, date: date, leavetype: this.leavetype }
        });
        dialogRefleave.afterClosed().subscribe((data) => {
            var sss = sessionStorage.getItem('logindet');
            if (sss) {
                this.login = JSON.parse(sss);
            }
            const format = 'yyyy-MM-dd';
            const locale = 'en-US';
            const fromdate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.fromdate, format, locale);
            const todate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(data.todate, format, locale);
            this.leavesave.from_date = fromdate;
            this.leavesave.to_date = todate;
            this.leavesave.taken_days = data.days;
            this.leavesave.status = 1;
            this.leavesave.StaffId = this.login.empcode;
            this.leavesave.leave_type_id = data.leavetype.leave_type_id;
            const save = JSON.stringify(this.leavesave);
            this.dashboardservice.submitleavetype(save).then(data => {
                alert(data.message);
            }, err => {
                alert(err);
            });
        });
    }
    chartHovered(e) {
        console.log(e);
    }
    chartClicked(e) {
        console.log(e);
    }
    ngOnInit() {
        this.getleavetype();
        this.appcomp.dashboardview();
        this.employee = this.appcomp.emp;
        this.hr = this.appcomp.hr;
        this.finance = this.appcomp.finance;
        this.hod = this.appcomp.hod;
        this.dataSourcedoc = this.docstatus;
        this.dataSourcestatus = this.status;
        this.dataSourcevendor = this.vendorpayment;
        this.dataSourcevendorstatus = this.vendorstatus;
        this.dataSourcecompliance = this.compliance;
        this.dataSourcerenewal = this.renewal;
        this.dataSourceamc = this.amc;
    }
    getleavetype() {
        var sss = sessionStorage.getItem('logindet');
        if (sss) {
            this.login = JSON.parse(sss);
        }
        this.dashboardservice.getleavetype(this.login.empcode).then(data => {
            debugger;
            this.leavetype = data.leavetype;
        }, err => {
            alert(err);
        });
    }
    // onEventRender(info: any) {
    //   const tooltip = new Tooltip(info.el, {
    //     title: info.event.title,
    //     placement: 'top',
    //     trigger: 'hover',
    //     container: 'body'
    //   });
    // }
    eventDidMount(info) {
        Object(tippy_js__WEBPACK_IMPORTED_MODULE_2__["default"])(info.el, {
            content: 'Content to display inside tooltip',
        });
    }
    scrollLeft() {
        this.widgetsContent.nativeElement.scrollLeft -= 150;
    }
    scrollRight() {
        this.widgetsContent.nativeElement.scrollLeft += 150;
    }
    onToggle(event) {
        console.log('toggle', event.checked);
        if (event.checked) {
            this.att = "Dept Wise";
            this.attendancetoggle = true;
        }
        else {
            this.att = "All";
            this.attendancetoggle = false;
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_dashboard_service__WEBPACK_IMPORTED_MODULE_11__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paymentaccordion = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.widgetsContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
    } }, decls: 4, vars: 4, consts: [["id", "content", "flex", "", 4, "ngIf"], ["id", "content", "flex", ""], ["fxLayout", "column", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "10px", 2, "margin-left", "15px"], ["fxFlex", "55"], ["dateClick", "onDateClick()", "eventClick", "onEventClick($event)", 3, "options"], ["fxFlex", "23", 2, "background-color", "rgb(224, 239, 245)"], [2, "margin-top", "100px", "display", "block", "border-top-color", "cornflowerblue", "border-bottom-color", "cornflowerblue", "border-left-color", "cornflowerblue", "border-right-color", "cornflowerblue", "border-radius", "3px"], ["baseChart", "", "chartType", "pie", 3, "data", "labels", "colors", "chartHover", "chartClick"], [2, "align-items", "center", "margin-left", "85px"], ["fxFlex", "30", 2, "max-height", "1000px"], ["color", "primary"], [2, "max-height", "450px", "overflow-y", "scroll"], ["role", "list"], [4, "ngFor", "ngForOf"], ["fxFlex", "33", 2, "overflow-x", "hidden"], ["id", "boxes"], ["id", "leftbox"], [2, "color", "blue", "font-size", "40px"], ["id", "middlebox"], [2, "color", "blue", "margin-top", "-24px", "margin-left", "80px"], ["id", "rightbox"], ["mat-raised-button", "", "color", "primary", 2, "min-width", "135px", "border-radius", "30px"], ["fxFlex", "33"], [1, "Oleo", 2, "font-weight", "bold"], ["id", "right"], [2, "margin-left", "60px"], [2, "margin-top", "10px"], ["id", "left"], ["label", "CTC Claims", "align", "center"], ["label", "Non CTC Claims", "align", "center"], ["fxFlex", "34"], [2, "float", "left", "width", "70%"], [2, "float", "right", "background", "white", "width", "20%"], [2, "color", "blue"], ["href", "url"], [2, "margin-top", "50px"], [2, "margin-top", "100px", "margin-left", "50px"], [2, "margin-left", "140px"], ["label", "Previous Month"], [1, "container"], ["scrollX", "true", 1, "scroll"], ["label", "Current Month"], [2, "float", "left", "width", "60%"], [2, "font-family", "cursive", "float", "left", "width", "100%", "height", "100%"], [2, "font-family", "cursive", "margin-left", "10px"], [2, "margin-top", "20px"], [2, "margin-top", "50px", "margin-left", "50px"], [2, "margin-top", "-40px", "margin-left", "150px"], [2, "margin-left", "100px"], [2, "color", "blue", "margin-left", "120px"], ["mat-card-avatar", "", 2, "max-width", "50px", "max-height", "50px", "min-height", "50px", 3, "src"], [2, "margin-top", "70px", "max-width", "500px", "overflow-wrap", "anywhere", "overflow-x", "auto", "overflow-y", "auto", "max-height", "100px", "min-height", "100px", "margin-left", "50px", "font-size", "smaller"], [2, "border-radius", "15px", "border-style", "groove", "margin-right", "10px", "min-width", "150px", "min-height", "100px"], [2, "float", "right"], [2, "margin-top", "50px", "margin-left", "10px"], ["href", "url", 2, "margin-left", "10px", "color", "blue"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "10px", 2, "max-height", "280px  !important", "min-height", "280px  !important"], ["fxFlex", "30", 2, "background-color", "#b6e1ff"], [2, "margin-top", "20px", "display", "block", "border-top-color", "cornflowerblue", "border-bottom-color", "cornflowerblue", "border-left-color", "cornflowerblue", "border-right-color", "cornflowerblue", "border-radius", "3px"], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "azure"], [2, "font-family", "cursive"], ["fxFlex", "45", 2, "overflow-y", "scroll", "background-color", "azure"], [1, "Oleo", 2, "font-weight", "bold", "float", "left"], [2, "float", "right", 3, "change"], ["style", "list-style: none;", 4, "ngFor", "ngForOf"], ["style", "margin-top: 30px;", 4, "ngIf"], ["fxFlex", "50", 2, "overflow-y", "scroll", "background-color", "rgb(234 249 245)"], ["id", "search-box-div"], ["id", "search-field", 1, "top-div"], ["type", "text", "placeholder", "Filter", 2, "border-color", "#0a3188", "border-radius", "30px", "min-height", "20px", "margin-left", "10px", 3, "ngModel", "ngModelChange"], ["input", ""], ["fxFlex", "50", 2, "overflow-x", "scroll", "background-color", "#b6e1ff", "display", "grid", "place-items", "center"], [1, "cardsjoin"], ["class", "cardjoin", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20PX", 2, "max-height", "280px  !important", "min-height", "280px  !important"], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "lightblue"], ["class", "table", 4, "ngIf", "ngIfElse"], ["noResults", ""], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "rgb(158 192 234)"], ["class", "table-hover", "mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "lightskyblue"], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "papayawhip"], [2, "list-style", "none"], ["style", "background-color: #b1e9ea;margin-top: 30px;margin-bottom: -20px;min-height: 6px;", 4, "ngIf"], [2, "background-color", "#b1e9ea", "margin-top", "30px", "margin-bottom", "-20px", "min-height", "6px"], [2, "float", "left", "margin-top", "-16px"], ["mat-mini-fab", "", 2, "max-height", "34px", "max-width", "34px", "float", "right", "margin-top", "-14px"], [2, "margin-top", "30px"], [1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], [2, "background-color", "rgb(92, 151, 228)"], [2, "color", "white"], [2, "background-color", "rgb(118, 118, 168)"], ["style", "margin-top: 30px;margin-bottom: -20px;min-height: 6px;background-color: #b1e9ea;", 4, "ngIf"], [2, "margin-top", "30px", "margin-bottom", "-20px", "min-height", "6px", "background-color", "#b1e9ea"], [2, "background-color", "hsl(164deg 74% 69%)"], [2, "border-radius", "50%", "max-width", "30px", "max-height", "30px", 3, "src"], [2, "color", "#0a3188", "font-weight", "bold", "font-size", "large", "font-style", "italic", "margin-left", "50px"], [2, "float", "right", "font-style", "oblique", "font-size", "smaller"], [1, "dot", 2, "float", "right"], [2, "font-size", "small"], [1, "cardjoin"], [2, "color", "#04a2a2"], [1, "table"], ["width", "100%"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "candidatename"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "name"], [2, "margin-top", "70px", "max-width", "500px", "overflow-wrap", "anywhere", "overflow-x", "auto", "overflow-y", "auto", "max-height", "100px", "min-height", "100px", "margin-left", "50px", "font-size", "small", "font-weight", "bold"], ["fxFlex", "33", 2, "background-color", "#b6e1ff", "overflow-y", "scroll"], [2, "margin-top", "-20px"], [2, "color", "white", "min-width", "180px"], [2, "font-weight", "bold", "font-style", "oblique"], [2, "background-color", "rgb(87, 154, 192)"], ["mat-header-cell", "", "style", "font-weight: bold;font-size: medium;\n                        color: #383131;", 4, "matHeaderCellDef"], ["matColumnDef", "paid"], ["matColumnDef", "due"], ["matColumnDef", "order"], ["matColumnDef", "eod"], ["fxFlex", "33", 2, "background-color", "#b6e1ff", "overflow-x", "scroll", "overflow-y", "hidden"], [1, "cardsadv", 2, "margin-top", "70px"], ["class", "cardadv", 4, "ngFor", "ngForOf"], ["fxFlex", "33", 2, "background-color", "#FFF", "overflow-x", "scroll"], [1, "containers"], ["class", "cardcov", 4, "ngFor", "ngForOf"], ["matColumnDef", "amount"], [2, "float", "left", "margin-top", "-10px", "margin-left", "50px"], [2, "float", "right", "margin-top", "-10px"], ["mat-header-cell", "", 2, "font-weight", "bold", "font-size", "medium", "color", "#383131"], [1, "cardadv"], [1, "cardcov"], [1, "imgBx"], [3, "src"], [1, "content"], ["fxFlex", "22", 2, "background-color", "#b6e1ff"], [1, "cardsadv", 2, "margin-top", "30px", "margin-left", "20px"], ["class", "cardorder tooltip", "style", "margin-right: 10px;max-height: 65px;", 4, "ngFor", "ngForOf"], ["fxFlex", "25", 2, "background-color", "#b6e1ff", "overflow-x", "scroll"], ["class", "cardsadv", "style", "margin-top: 30px;margin-left: 70px;", 4, "ngFor", "ngForOf"], ["fxFlex", "25", 2, "background-color", "#b6e1ff", "overflow-y", "scroll"], ["fxFlex", "25", 2, "overflow-y", "scroll", "background-color", "#b6e1ff"], ["style", "margin-left: 100px;", 4, "ngFor", "ngForOf"], ["fxFlex", "30", 2, "overflow-y", "scroll", "background-color", "#b6e1ff"], ["mat-header-cell", "", "style", "min-width: 100px;font-weight: bold;font-size: medium;\n                        color: #383131;", 4, "matHeaderCellDef"], ["matColumnDef", "payment"], ["mat-header-cell", "", "style", "min-width: 80px;font-weight: bold;font-size: medium;\n                        color: #383131;", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["fxFlex", "45", 2, "overflow-y", "scroll", "background-color", "rgb(234 249 245)"], [1, "cardorder", "tooltip", 2, "margin-right", "10px", "max-height", "65px"], [1, "Oleo", 2, "font-weight", "bold", "color", "black", "margin-top", "-20px"], [1, "cardsadv", 2, "margin-top", "30px", "margin-left", "70px"], [1, "cardsupport", 2, "margin-right", "10px", "min-height", "40px", "max-height", "50px", "min-width", "80px"], [2, "margin-top", "20px", "margin-left", "-50px"], [2, "margin-top", "50px", "margin-left", "-20px"], [2, "font-weight", "bold"], ["mat-fab", "", 2, "background-color", "rgb(135, 190, 118)"], [2, "font-size", "30px", "font-weight", "bolder"], ["mat-header-cell", "", 2, "min-width", "100px", "font-weight", "bold", "font-size", "medium", "color", "#383131"], ["mat-header-cell", "", 2, "min-width", "80px", "font-weight", "bold", "font-size", "medium", "color", "#383131"], [2, "color", "#0a3188", "font-weight", "bold", "font-weight", "600", "font-size", "large", "font-style", "italic", "margin-left", "50px"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 116, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 71, 28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 93, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 105, 31, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hr);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.finance);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.hod);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_15__["FullCalendarComponent"], ng2_charts__WEBPACK_IMPORTED_MODULE_16__["BaseChartDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardAvatar"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatRow"]], pipes: [_common_filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipe"]], styles: ["img[_ngcontent-%COMP%]:focus {\r\n  outline-width: 0;\r\n  }\r\n.Oleo[_ngcontent-%COMP%] {\r\n  font-family: Oleo;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding:10px;\r\n  border: 1px solid #aeaeae;\r\n}\r\n.flex-gap[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n}\r\n#leftbox[_ngcontent-%COMP%] {\r\n      float:left;\r\n      width:10%;\r\n  }\r\n#middlebox[_ngcontent-%COMP%]{\r\n      float:left;\r\n      width:60%;\r\n  }\r\n#rightbox[_ngcontent-%COMP%]{\r\n      float:right;\r\n      background:white;\r\n      width:30%;\r\n  }\r\n#left[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width:100%;\r\n}\r\n#right[_ngcontent-%COMP%]{\r\n    float:right;\r\n    background:white;\r\n    width:60%;\r\n    margin-left: 30px;\r\n}\r\n.dot[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: green;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\ndiv[scrollx=true][_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  overflow-x: auto;\r\n  &::-webkit-scrollbar {\r\n     display: none;\r\n  }\r\n   .scroll-item {\r\n     flex: 0 0 auto;\r\n  }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  \r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n.example-action-buttons[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  flex-basis: 0;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\r\n  background-color: blue; \r\n}\r\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\r\n  background-color: skyblue;  \r\n}\r\nmat-card[_ngcontent-%COMP%]:hover  {\r\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n}\r\n.dot[_ngcontent-%COMP%] {\r\n  height: 10px;\r\n  width: 10px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n*[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  outline: 0;\r\n}\r\n.cardjoin[_ngcontent-%COMP%]{\r\n  background-color: white;\r\n  border-radius: 1rem;\r\n  padding:2rem;\r\n  \r\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n  transition: 0.2s;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  box-shadow: 4px 4px 12px 2px rgba(black, 0.75);\r\n}\r\n.cardsjoin[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\n\r\n\r\n\r\n}\r\n.cardjoin[_ngcontent-%COMP%]:not(:first-child){\r\n  margin-left: -4rem;\r\n}\r\n.cardjoin[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-1rem);\r\n  }\r\n.cardjoin[_ngcontent-%COMP%]:hover    ~ .card[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n    transform: translateX(4rem);\r\n    }\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n      background-color: #04a2a2;\r\n      transition: 0.3s;\r\n    }\r\n#sss[_ngcontent-%COMP%] {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 70%;\r\n      transform: translate(-50%, -50%);\r\n      border-collapse: collapse;\r\n      border: 1px solid #bdc3c7;\r\n      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\r\n  }\r\ntr[_ngcontent-%COMP%] {\r\n      transition: all .2s ease-in;\r\n      cursor: pointer;\r\n  }\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n      padding: 12px;\r\n      text-align: left;\r\n      border-bottom: 1px solid #ddd;\r\n  }\r\n#header[_ngcontent-%COMP%] {\r\n      background-color: #16a085;\r\n      color: #fff;\r\n  }\r\n\r\ntr[_ngcontent-%COMP%]:hover {\r\n      background-color: #f5f5f5;\r\n      transform: scale(1.02);\r\n      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\r\n  }\r\n@media only screen and (max-width: 768px) {\r\n      table[_ngcontent-%COMP%] {\r\n          width: 90%;\r\n      }\r\n  }\r\n.cardadv[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    border-radius: 1rem;\r\n    padding:2rem;\r\n    \r\n    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n    transition: 0.2s;\r\n  }\r\n.cardsadv[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    }\r\n\r\n.cardadv[_ngcontent-%COMP%]:hover{\r\n      transform: translateY(-1rem);\r\n      background-color: rgba(169, 240, 121, 0.479);\r\n      }\r\n\r\n.containers[_ngcontent-%COMP%]{\r\n          position: relative;\r\n          width: 100px;\r\n          display:flex;\r\n          \r\n          padding: 10px;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]{\r\n          position: relative;\r\n          max-width: 100px;\r\n          height: 15px;\r\n          background: #b6e1ff;\r\n          margin: 50px 10px;\r\n          padding: 20px 15px;\r\n          display: flex;\r\n          flex-direction: column;\r\n          box-shadow: 0 5px 202px rgba(0,0,0,0.5);\r\n          transition: 0.3s ease-in-out;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]:hover{\r\n          height: 120px;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]{\r\n          position: relative;\r\n          width: 60px;\r\n          height: 60px;\r\n          top:-60px;\r\n          left: 20px;\r\n          box-shadow: 0 5px 20px rgba(0,0,0,0.2);\r\n          z-index: 1;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n          max-width: 100%;\r\n          border-radius: 4px;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n          position: relative;\r\n          margin-top: -140px;\r\n          padding: 10px 15px;\r\n          text-align: center;\r\n          color: #111;\r\n          visibility: hidden;\r\n          opacity: 0;\r\n          transition: 0.5s ease-in-out;\r\n        }\r\n.containers[_ngcontent-%COMP%]   .cardcov[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%]{\r\n          visibility: visible;\r\n          opacity: 1;\r\n          margin-top: -40px;\r\n          transition-delay: 0.3s;\r\n        }\r\n.cardorder[_ngcontent-%COMP%]{\r\n          background-color: white;\r\n          border-radius: 1rem;\r\n          padding:2rem;\r\n          box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n          transition: 0.2s;\r\n        }\r\n.cardorder[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        }\r\n.cardorder[_ngcontent-%COMP%]:hover{\r\n        \r\n        background-color: rgba(126, 221, 97, 0.685);\r\n        }\r\n.tooltip[_ngcontent-%COMP%] {\r\n          position: relative;\r\n          display: inline-block;\r\n          border-bottom: 1px dotted black;\r\n        }\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n          visibility: hidden;\r\n          width: 120px;\r\n          background-color: black;\r\n          color: #fff;\r\n          text-align: center;\r\n          border-radius: 6px;\r\n          padding: 5px 0;\r\n        \r\n          \r\n          position: absolute;\r\n          z-index: 1;\r\n        }\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n          visibility: visible;\r\n        }\r\n.cardsupport[_ngcontent-%COMP%]{\r\n          background-color: white;\r\n          border-radius: 2rem;\r\n          padding:2rem;\r\n          box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n          transition: 0.2s;\r\n        }\r\n.cardsupport[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        }\r\n.cardsupport[_ngcontent-%COMP%]:hover{\r\n        \r\n        background-color: rgba(42, 196, 207, 0.5);\r\n        }\r\n.fc-daygrid-day[_ngcontent-%COMP%]   .fc-day[_ngcontent-%COMP%]   .fc-day-sun[_ngcontent-%COMP%]   .fc-day-past[_ngcontent-%COMP%]{\r\n          background-color:rgba(169, 240, 121, 0.479)\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTs7R0FFRztBQUNGO0VBQ0MsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0M7TUFDSyxVQUFVO01BQ1YsU0FBUztFQUNiO0FBQ0E7TUFDSSxVQUFVO01BQ1YsU0FBUztFQUNiO0FBQ0E7TUFDSSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLFNBQVM7RUFDYjtBQUNBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQjtLQUNHLGFBQWE7RUFDaEI7R0FDQztLQUNFLGNBQWM7RUFDakI7QUFDRjtBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxzQkFBc0IsRUFBRSwwQkFBMEI7QUFDcEQ7QUFFQTtFQUNFLHlCQUF5QixHQUFHLDBCQUEwQjtBQUN4RDtBQUNBO0VBQ0UseUdBQXlHO0FBQzNHO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHlHQUF5RztFQUN6RyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhDQUE4QztBQUNoRDtBQUNBO0FBQ0EsYUFBYTs7QUFFYixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QjtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQjtBQUVBO01BQ0UsV0FBVztJQUNiO0FBRUE7TUFDRSx5QkFBeUI7TUFDekIsZ0JBQWdCO0lBQ2xCO0FBSUY7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixnQ0FBZ0M7TUFDaEMseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUN6Qiw2RUFBNkU7RUFDakY7QUFFQTtNQUNJLDJCQUEyQjtNQUMzQixlQUFlO0VBQ25CO0FBRUE7O01BRUksYUFBYTtNQUNiLGdCQUFnQjtNQUNoQiw2QkFBNkI7RUFDakM7QUFFQTtNQUNJLHlCQUF5QjtNQUN6QixXQUFXO0VBQ2Y7QUFFQTs7Ozs7O0tBTUc7QUFFSDtNQUNJLHlCQUF5QjtNQUN6QixzQkFBc0I7TUFDdEIsNkVBQTZFO0VBQ2pGO0FBRUE7TUFDSTtVQUNJLFVBQVU7TUFDZDtFQUNKO0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIseUdBQXlHO0lBQ3pHLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsYUFBYTtJQUNiO0FBQ0E7O09BRUc7QUFDSDtNQUNFLDRCQUE0QjtNQUM1Qiw0Q0FBNEM7TUFDNUM7QUFFQTs7O1dBR0s7QUFDSDtVQUNFLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osWUFBWTtVQUNaOzs0QkFFa0I7VUFDbEIsYUFBYTtRQUNmO0FBQ0E7VUFDRSxrQkFBa0I7VUFDbEIsZ0JBQWdCO1VBQ2hCLFlBQVk7VUFDWixtQkFBbUI7VUFDbkIsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixhQUFhO1VBQ2Isc0JBQXNCO1VBQ3RCLHVDQUF1QztVQUN2Qyw0QkFBNEI7UUFDOUI7QUFDQTtVQUNFLGFBQWE7UUFDZjtBQUNBO1VBQ0Usa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxZQUFZO1VBQ1osU0FBUztVQUNULFVBQVU7VUFDVixzQ0FBc0M7VUFDdEMsVUFBVTtRQUNaO0FBQ0E7VUFDRSxlQUFlO1VBQ2Ysa0JBQWtCO1FBQ3BCO0FBRUE7VUFDRSxrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixVQUFVO1VBQ1YsNEJBQTRCO1FBQzlCO0FBQ0E7VUFDRSxtQkFBbUI7VUFDbkIsVUFBVTtVQUNWLGlCQUFpQjtVQUNqQixzQkFBc0I7UUFDeEI7QUFFQTtVQUNFLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsWUFBWTtVQUNaLHlHQUF5RztVQUN6RyxnQkFBZ0I7UUFDbEI7QUFDRjtRQUNFLGFBQWE7UUFDYjtBQUNGO1FBQ0Usa0NBQWtDO1FBQ2xDLDJDQUEyQztRQUMzQztBQUNBO1VBQ0Usa0JBQWtCO1VBQ2xCLHFCQUFxQjtVQUNyQiwrQkFBK0I7UUFDakM7QUFFQTtVQUNFLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osdUJBQXVCO1VBQ3ZCLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLGNBQWM7O1VBRWQseUJBQXlCO1VBQ3pCLGtCQUFrQjtVQUNsQixVQUFVO1FBQ1o7QUFFQTtVQUNFLG1CQUFtQjtRQUNyQjtBQUVBO1VBQ0UsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixZQUFZO1VBQ1oseUdBQXlHO1VBQ3pHLGdCQUFnQjtRQUNsQjtBQUNGO1FBQ0UsYUFBYTtRQUNiO0FBQ0Y7UUFDRSxrQ0FBa0M7UUFDbEMseUNBQXlDO1FBQ3pDO0FBRUE7VUFDRTtRQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nOmZvY3VzIHtcclxuICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gIH1cclxuLk9sZW8ge1xyXG4gIGZvbnQtZmFtaWx5OiBPbGVvO1xyXG59XHJcblxyXG4vKiBwIHtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufSAqL1xyXG4gI2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYWVhZWFlO1xyXG59XHJcbi5mbGV4LWdhcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiAjbGVmdGJveCB7XHJcbiAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgIHdpZHRoOjEwJTtcclxuICB9XHJcbiAgI21pZGRsZWJveHtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgd2lkdGg6NjAlO1xyXG4gIH1cclxuICAjcmlnaHRib3h7XHJcbiAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICB3aWR0aDozMCU7XHJcbiAgfVxyXG4gICNsZWZ0IHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbiAgI3JpZ2h0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLmRvdCB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuZGl2W3Njcm9sbHg9dHJ1ZV0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIC5zY3JvbGwtaXRlbSB7XHJcbiAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgLyogQWRkIHNoYWRvd3MgdG8gY3JlYXRlIHRoZSBcImNhcmRcIiBlZmZlY3QgKi9cclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uZXhhbXBsZS1hY3Rpb24tYnV0dG9ucyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgLypyZXBsYWNlIHdpdGggeW91ciBjb2xvciovXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlOyAgLypyZXBsYWNlIHdpdGggeW91ciBjb2xvciovXHJcbn1cclxubWF0LWNhcmQ6aG92ZXIgIHtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuLmRvdCB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbio6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG4uY2FyZGpvaW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBwYWRkaW5nOjJyZW07XHJcbiAgLyogbWFyZ2luLWxlZnQ6IC0ycmVtOyAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcbi5jYXJke1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTJweCAycHggcmdiYShibGFjaywgMC43NSk7XHJcbn1cclxuLmNhcmRzam9pbntcclxuZGlzcGxheTogZmxleDtcclxuXHJcbi8qIGZsZXgtd3JhcDogd3JhcDsgKi9cclxuLyogLS1kaXN0YW5jZTogNHJlbTsgKi9cclxufVxyXG4uY2FyZGpvaW46bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgbWFyZ2luLWxlZnQ6IC00cmVtO1xyXG59XHJcbi5jYXJkam9pbjpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xyXG4gIH1cclxuXHJcbiAgLmNhcmRqb2luOmhvdmVyIH4gLmNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXJvdzpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGEyYTI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgXHJcbiAgI3NzcyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGMzYzc7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0xcHggLTFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICB0ciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICAjaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YTA4NTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIGgxIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZhMDg1O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIHRyOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgLTFweCAtMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgdGFibGUge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmRhZHZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogLTJyZW07ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIH1cclxuICAuY2FyZHNhZHZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLyogLmNhcmRhZHY6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcclxuICAgIH0gKi9cclxuICAgIC5jYXJkYWR2OmhvdmVye1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2OSwgMjQwLCAxMjEsIDAuNDc5KTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8qIC5jYXJkYWR2OmhvdmVyIH4gLmNhcmR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cmVtKTtcclxuICAgICAgICB9ICovXHJcbiAgICAgICAgLmNvbnRhaW5lcnN7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVycyAuY2FyZGNvdntcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjZlMWZmO1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwMnB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJzIC5jYXJkY292OmhvdmVye1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcnMgLmNhcmRjb3YgIC5pbWdCeHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgdG9wOi02MHB4O1xyXG4gICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcnMgLmNhcmRjb3YgLmltZ0J4IGltZ3tcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXJzIC5jYXJkY292ICAuY29udGVudHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJzIC5jYXJkY292OmhvdmVyIC5jb250ZW50e1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZG9yZGVye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzoycmVtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgIC5jYXJkb3JkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIC5jYXJkb3JkZXI6aG92ZXJ7XHJcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTsgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMjIxLCA5NywgMC42ODUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9vbHRpcCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmRzdXBwb3J0e1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgICAgICAgcGFkZGluZzoycmVtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLDAsMCwuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgIC5jYXJkc3VwcG9ydHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgLmNhcmRzdXBwb3J0OmhvdmVye1xyXG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMTk2LCAyMDcsIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmMtZGF5Z3JpZC1kYXkgLmZjLWRheSAuZmMtZGF5LXN1biAuZmMtZGF5LXBhc3R7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY5LCAyNDAsIDEyMSwgMC40NzkpXHJcbiAgICAgICAgfSJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventdialog/eventdialog.component */ "H1LH");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/login */ "I8PV");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/common.service */ "mPL+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["appDrawer"];
function AppComponent_app_top_nav_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
} }
function AppComponent_app_menu_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-list-item", 6);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r3);
} }
class AppComponent {
    constructor(navService, dialog, router) {
        this.navService = navService;
        this.dialog = dialog;
        this.router = router;
        this.apidata = [];
        this.emp = false;
        this.hr = false;
        this.finance = false;
        this.hod = false;
        this.topnav = true;
        this.childrenitems = [];
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"];
        this.navItems = [
            {
                menuname: 'master',
                displayName: 'Master',
                disabled: false,
                iconName: 'input',
                children: [{
                        menuname: 'departmentmaster',
                        displayName: 'Department Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'departmentmaster',
                    },
                    {
                        menuname: 'departmentmapping',
                        displayName: 'Department Mapping',
                        disabled: false,
                        iconName: 'input',
                        route: 'departmentmapping',
                    },
                    {
                        menuname: 'companymaster',
                        displayName: 'Company Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'companymaster',
                    },
                    {
                        menuname: 'questionmaster',
                        displayName: 'Question Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'questionmaster',
                    },
                    {
                        menuname: 'resourcemaster',
                        displayName: 'Resource Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'resourcemaster',
                    },
                    {
                        menuname: 'feedbackmaster',
                        displayName: 'Feedback Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'feedbackmaster',
                    },
                    {
                        menuname: 'servicemaster',
                        displayName: 'Service Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'servicemaster',
                    },
                    {
                        menuname: 'interviewroundsmaster',
                        displayName: 'Interview Rounds',
                        disabled: false,
                        iconName: 'input',
                        route: 'interviewroundsmaster',
                    },
                    {
                        menuname: 'interviewmappingmaster',
                        displayName: 'Interview Rounds Mapping',
                        disabled: false,
                        iconName: 'input',
                        route: 'interviewmappingmaster',
                    },
                    {
                        menuname: 'rolemaster',
                        displayName: 'Role Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'rolemaster',
                    },
                    {
                        menuname: 'prefixmaster',
                        displayName: 'Prefixcode Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'prefixmaster',
                    },
                    {
                        menuname: 'clientmaster',
                        displayName: 'Client Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'clientmaster',
                    },
                    {
                        menuname: 'sectionmaster',
                        displayName: 'Section Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'sectionmaster',
                    },
                    {
                        menuname: 'divisionmaster',
                        displayName: 'Division Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'divisionmaster',
                    },
                    {
                        menuname: 'designationmaster',
                        displayName: 'Designation Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'designationmaster',
                    },
                    {
                        menuname: 'callsmaster',
                        displayName: 'Calls Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'callsmaster',
                    },
                    {
                        menuname: 'productmaster',
                        displayName: 'Product Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'productmaster',
                    },
                    {
                        menuname: 'assetmaster list',
                        displayName: 'assetmaster',
                        disabled: false,
                        iconName: 'input',
                        route: 'assetmaster',
                    },
                    {
                        menuname: 'jobdescription',
                        displayName: 'job description',
                        disabled: false,
                        iconName: 'input',
                        route: 'jobdescription',
                    },
                    {
                        menuname: 'consultantmaster',
                        displayName: 'consultantmaster',
                        disabled: false,
                        iconName: 'input',
                        route: 'consultantmaster',
                    },
                    {
                        menuname: 'userrolemater',
                        displayName: 'User role master',
                        disabled: false,
                        iconName: 'input',
                        route: 'userrolemaster',
                    },]
            },
            {
                menuname: 'asset',
                displayName: 'Assets',
                disabled: false,
                iconName: 'input',
                children: [{
                        menuname: 'simmaster',
                        displayName: 'Sim Master',
                        disabled: false,
                        iconName: 'input',
                        route: 'simmaster',
                    },]
            },
            {
                menuname: 'utilities',
                displayName: 'Utilities',
                disabled: false,
                iconName: 'input',
                children: [{
                        menuname: 'salaryadvance',
                        displayName: 'Salary Advance',
                        disabled: false,
                        iconName: 'input',
                        route: 'salaryadvance',
                    }],
            }
        ];
        this.login = new _model_login__WEBPACK_IMPORTED_MODULE_2__["LoginPojo"]();
        debugger;
        var sss = sessionStorage.getItem('logindet');
        if (sss) {
            this.topnav = true;
            this.router.navigate(['dashboard']);
        }
        else {
            this.topnav = false;
            this.router.navigate(['/']);
        }
    }
    goToPage() {
        this.router.navigate(['']);
    }
    // tempintraval!: any;
    ngOnInit() {
        // var sss = sessionStorage.getItem('logindet');
        // if (sss) {
        //   this.login = JSON.parse(sss);
        // }
        // if (this.login) {
        //   this.topnav = true;
        //   this.router.navigate(['dashboard']);
        // } else {
        //   this.router.navigate([''])
        // }
        // this.tempintraval = setInterval(() => {
        //   console.log("123");
        //   this.navService.checkData().subscribe(res => this.apidata = res);
        // }, 5000);
    }
    upload() {
        const dialogRef = this.dialog.open(_eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_1__["EventdialogComponent"], {
            width: '250px',
            data: { row: "e" }
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    ngAfterViewInit() {
        this.navService.appDrawer = this.appDrawer;
    }
    // ngOnDestroy(): void {
    //   this.tempintraval.unsubscribe();
    // }
    dashboardview() {
        var sss = sessionStorage.getItem('logindet');
        if (sss) {
            this.login = JSON.parse(sss);
        }
        if (this.login.empLevel === "Hr") {
            this.emp = false;
            this.hr = true;
            this.finance = false;
            this.hod = false;
        }
        else if (this.login.empLevel === "Finance") {
            this.emp = false;
            this.hr = false;
            this.finance = true;
            this.hod = false;
        }
        else if (this.login.empLevel === "Admin") {
            this.emp = false;
            this.hr = false;
            this.finance = false;
            this.hod = true;
        }
        else {
            this.emp = true;
            this.hr = false;
            this.hod = false;
            this.finance = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appDrawer = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler() { return ctx.goToPage(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 2, consts: [[4, "ngIf"], ["mode", "side", "opened", "false", 2, "background-color", "rgb(247 247 247)"], ["appDrawer", ""], ["mat-card-avatar", "", "src", "../../assets/images/BB LOGO.png", 2, "max-width", "220px", "max-height", "100px", "min-height", "100px", "min-width", "220px"], [3, "item", 4, "ngFor", "ngForOf"], [2, "margin-top", "100px"], [3, "item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_top_nav_1_Template, 1, 0, "app-top-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_menu_list_item_6_Template, 1, 1, "app-menu-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topnav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.childrenitems);
    } }, styles: [".mat-sidenav[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n}\r\n.mat-sidenav-container[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n  height: 100vh;\r\n\r\n  .mat-sidenav-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n.sidenav-toolbar[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  background-color: mat-color($app-primary);\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  @media (max-width: 600px) {\r\n    height: 56px;\r\n  }\r\n}\r\n.mat-nav-list[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n@include breakpoint-max(600px) {\r\n  .fixed-topnav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n    width: 100% !important;\r\n  }\r\n\r\n  .mat-drawer-container,\r\n  .mat-drawer {\r\n    padding-top: 56px;\r\n  }\r\n}\r\n.menu-list-item.mat-list-item[_ngcontent-%COMP%] {\r\n  .mat-list-item-content {\r\n    flex: 1 1 100%;\r\n  }\r\n}\r\n.version-info[_ngcontent-%COMP%] {\r\n  font-size: 8pt;\r\n  padding: 8px;\r\n  align-self: flex-end;\r\n}\r\n.app-drawer-container[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n.app-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7O0VBRWI7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkI7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLE9BQU87QUFDVDtBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjIwcHg7XHJcbn1cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlbmF2LXRvb2xiYXIge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFwcC1wcmltYXJ5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gIH1cclxufVxyXG4ubWF0LW5hdi1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5AaW5jbHVkZSBicmVha3BvaW50LW1heCg2MDBweCkge1xyXG4gIC5maXhlZC10b3BuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyLFxyXG4gIC5tYXQtZHJhd2VyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gIH1cclxufVxyXG4ubWVudS1saXN0LWl0ZW0ubWF0LWxpc3QtaXRlbSB7XHJcbiAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICB9XHJcbn1cclxuLnZlcnNpb24taW5mbyB7XHJcbiAgZm9udC1zaXplOiA4cHQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYXBwLWRyYXdlci1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5hcHAtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "WuvU":
/*!****************************************************!*\
  !*** ./src/app/eventclick/eventclick.component.ts ***!
  \****************************************************/
/*! exports provided: EventclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventclickComponent", function() { return EventclickComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class EventclickComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
    ngOnInit() {
        this.events = this.data.row[0];
    }
    close() {
        this.dialogRef.close();
    }
}
EventclickComponent.ɵfac = function EventclickComponent_Factory(t) { return new (t || EventclickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EventclickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventclickComponent, selectors: [["app-eventclick"]], decls: 13, vars: 2, consts: [["mat-dialog-title", "", 2, "float", "right", "cursor", "pointer", "font-weight", "normal", 3, "click"], [2, "margin-top", "30px"], ["id", "boxes"], ["mat-dialog-title", "", "id", "leftbox", 1, "square"], ["id", "middlebox", 2, "margin-left", "25px", "margin-top", "-8px"], ["id", "middlebox", 2, "margin-left", "25px", "font-size", "15px", "font-style", "oblique"], ["mat-dialog-content", "", 2, "margin-top", "20px", "margin-left", "-42px"], ["src", "assets/images/meeting.png", "id", "leftbox", 2, "width", "30px", "height", "20px", "margin-left", "10px", "margin-top", "28px"], ["mat-button", "", 2, "background-color", "#1a73e8", "color", "white", "margin-left", "20px", "margin-top", "20px"]], template: function EventclickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventclickComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "X\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Join With Google Meet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.events.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.events.start);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".button-close[_ngcontent-%COMP%] {\r\n  justify-self: right;\r\n  font-size: 10px;\r\n  border: none;\r\n  height: 10px;\r\n  background-color: #FFFFFF;\r\n  outline: none;\r\n  color: #c04747;\r\n  \r\n  &:hover {\r\n      cursor: pointer;\r\n  }\r\n}\r\n.square[_ngcontent-%COMP%] {\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: rgb(3, 155, 229);\r\n  border-radius: 4px;\r\n}\r\n#leftbox[_ngcontent-%COMP%] {\r\n  float:left;\r\n}\r\n#middlebox[_ngcontent-%COMP%]{\r\n  float:left;\r\n  width:70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50Y2xpY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7O0VBRWQ7TUFDSSxlQUFlO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYIiwiZmlsZSI6ImV2ZW50Y2xpY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY2xvc2Uge1xyXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjYzA0NzQ3O1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbi5zcXVhcmUge1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMTU1LCAyMjkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4jbGVmdGJveCB7XHJcbiAgZmxvYXQ6bGVmdDtcclxufVxyXG4jbWlkZGxlYm94e1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6NzAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YIkm":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/login */ "I8PV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ForgotpasswordComponent_h5_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.err, " ");
} }
function ForgotpasswordComponent_h5_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.err, " ");
} }
class ForgotpasswordComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.newpwderr = false;
        this.confirmpwderr = false;
        this.err = "";
        this.resetpwd = new _model_login__WEBPACK_IMPORTED_MODULE_2__["ResetPojo"]();
        this.error_messages = {
            'newPwd': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length should be less than 6 Char.' },
                { type: 'maxlength', message: 'password length should be greater than 8 Char.' }
            ],
            'confirmPwd': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length should be less than 6 Char.' },
                { type: 'maxlength', message: 'password length should be greater than 8 Char.' }
            ],
        };
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            // username: new FormControl(''),
            newPwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8)
            ])),
            confirmPwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(8)
            ])),
        });
    }
    password() {
        var _a, _b;
        this.err = "";
        // const username = this.loginForm.controls.username?.value;
        const password = (_a = this.loginForm.controls.newPwd) === null || _a === void 0 ? void 0 : _a.value;
        const confirmPassword = (_b = this.loginForm.controls.confirmPwd) === null || _b === void 0 ? void 0 : _b.value;
        if (password !== confirmPassword) {
            alert("Not matching");
            return;
        }
        else if (this.loginForm.controls.newPwd.status === "INVALID") {
            this.newpwderr = true;
            this.confirmpwderr = false;
            if (password === "") {
                this.err = this.error_messages.newPwd[0].message;
                return;
            }
            else if (password.length < 6) {
                this.err = this.error_messages.newPwd[1].message;
                return;
            }
            else if (password.length > 8) {
                this.err = this.error_messages.newPwd[2].message;
                return;
            }
        }
        else if (this.loginForm.controls.confirmPwd.status === "INVALID") {
            this.confirmpwderr = true;
            this.newpwderr = false;
            if (confirmPassword === "") {
                this.err = this.error_messages.newPwd[0].message;
                return;
            }
            else if (confirmPassword.length < 6) {
                this.err = this.error_messages.newPwd[1].message;
                return;
            }
            else if (confirmPassword.length > 8) {
                this.err = this.error_messages.newPwd[2].message;
                return;
            }
        }
        else {
            this.resetpwd.newpassword = password;
            // this.resetpwd.username = username;
            this.dialogRef.close(this.resetpwd);
        }
    }
    onFocusOutEventnew(event) {
        var _a;
        this.err = "";
        this.confirmpwderr = false;
        this.newpwderr = false;
        if (event.type === "focusout") {
            const password = (_a = this.loginForm.controls.newPwd) === null || _a === void 0 ? void 0 : _a.value;
            if (password === "") {
                this.newpwderr = true;
                this.confirmpwderr = false;
                this.err = this.error_messages.newPwd[0].message;
                return;
            }
            else if (password.length < 6) {
                this.newpwderr = true;
                this.confirmpwderr = false;
                this.err = this.error_messages.newPwd[1].message;
                return;
            }
            else if (password.length > 8) {
                this.newpwderr = true;
                this.confirmpwderr = false;
                this.err = this.error_messages.newPwd[2].message;
                return;
            }
        }
    }
    onFocusOutEventconfirm(event) {
        var _a;
        this.err = "";
        this.password();
        this.confirmpwderr = false;
        this.newpwderr = false;
        if (event.type === "focusout") {
            const confirmPassword = (_a = this.loginForm.controls.confirmPwd) === null || _a === void 0 ? void 0 : _a.value;
            if (confirmPassword === "") {
                this.confirmpwderr = true;
                this.newpwderr = false;
                this.err = this.error_messages.newPwd[0].message;
                return;
            }
            else if (confirmPassword.length < 6) {
                this.confirmpwderr = true;
                this.newpwderr = false;
                this.err = this.error_messages.newPwd[1].message;
                return;
            }
            else if (confirmPassword.length > 8) {
                this.confirmpwderr = true;
                this.newpwderr = false;
                this.err = this.error_messages.newPwd[2].message;
                return;
            }
        }
    }
}
ForgotpasswordComponent.ɵfac = function ForgotpasswordComponent_Factory(t) { return new (t || ForgotpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ForgotpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForgotpasswordComponent, selectors: [["app-forgotpassword"]], decls: 18, vars: 3, consts: [[2, "margin-left", "160px", "color", "grey"], [2, "margin-left", "90px", "font-weight", "normal", "color", "#087e7e"], [3, "formGroup"], [1, "form-group", 2, "margin-top", "20px"], [2, "color", "#04a2a2"], ["formControlName", "newPwd", "id", "newPwd", "type", "password", 1, "form-control", 2, "width", "100%", "height", "30px", "margin", "0 auto", "border", "none", "/* <-- this thing here */\n        border", "solid 1px #ccc", "border-radius", "10px", 3, "focusout"], ["style", "color: red;", 4, "ngIf"], ["formControlName", "confirmPwd", "id", "confirmPwd", "type", "password", 1, "form-control", 2, "width", "100%", "height", "30px", "margin", "0 auto", "border", "none", "/* <-- this thing here */\n        border", "solid 1px #ccc", "border-radius", "10px", 3, "focusout"], [2, "margin-top", "20px"], ["mat-button", "", 2, "background-color", "#04a2a2", "width", "355px", 3, "click"], [2, "color", "red"]], template: function ForgotpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function ForgotpasswordComponent_Template_input_focusout_8_listener($event) { return ctx.onFocusOutEventnew($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ForgotpasswordComponent_h5_9_Template, 2, 1, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusout", function ForgotpasswordComponent_Template_input_focusout_13_listener($event) { return ctx.onFocusOutEventconfirm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForgotpasswordComponent_h5_14_Template, 2, 1, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotpasswordComponent_Template_button_click_16_listener() { return ctx.password(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.newpwderr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.confirmpwderr);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["p[_ngcontent-%COMP%] {\r\n    font-family: Lato;\r\n  }\r\n  .error-message[_ngcontent-%COMP%] {\r\n    color: red;\r\n  }\r\n  input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6ImZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-list-item/menu-list-item.component */ "MsPU");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "F1hY");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calender/calender.component */ "KH8e");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fullcalendar/daygrid */ "PN1e");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fullcalendar/interaction */ "ogxq");
/* harmony import */ var _eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./eventdialog/eventdialog.component */ "H1LH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./notification/notification.component */ "4a+M");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _eventclick_eventclick_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./eventclick/eventclick.component */ "WuvU");
/* harmony import */ var _dateclick_dateclick_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dateclick/dateclick.component */ "plqx");
/* harmony import */ var _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @candidosales/material-time-picker */ "fvN+");
/* harmony import */ var _common_filter_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./common/filter.pipe */ "4Kmh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "YIkm");
/* harmony import */ var _common_common_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./common/common.service */ "mPL+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "2KtN");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _departmentmapping_departmentmapping_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./departmentmapping/departmentmapping.component */ "BvYn");
/* harmony import */ var _leavedialog_leavedialog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./leavedialog/leavedialog.component */ "KcsN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/router */ "tyNb");























 // the main connector. must go first
 // a plugin
 // a plugin

































_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_24__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_25__["default"]
]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineInjector"]({ providers: [_common_common_service__WEBPACK_IMPORTED_MODULE_45__["CommonService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_33__["ChartsModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__["MatBadgeModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
            _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_41__["MaterialTimePickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_48__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"]
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_33__["ChartsModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__["MatBadgeModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
        _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_41__["MaterialTimePickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_48__["NgMultiSelectDropDownModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_13__["MenuListItemComponent"],
        _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__["TopNavComponent"],
        _calender_calender_component__WEBPACK_IMPORTED_MODULE_16__["CalenderComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
        _eventdialog_eventdialog_component__WEBPACK_IMPORTED_MODULE_26__["EventdialogComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_34__["NotificationComponent"],
        _eventclick_eventclick_component__WEBPACK_IMPORTED_MODULE_39__["EventclickComponent"],
        _dateclick_dateclick_component__WEBPACK_IMPORTED_MODULE_40__["DateclickComponent"],
        _common_filter_pipe__WEBPACK_IMPORTED_MODULE_42__["FilterPipe"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_43__["LoginComponent"],
        _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_44__["ForgotpasswordComponent"],
        _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_47__["EmployeelistComponent"],
        _departmentmapping_departmentmapping_component__WEBPACK_IMPORTED_MODULE_50__["DepartmentmappingComponent"],
        _leavedialog_leavedialog_component__WEBPACK_IMPORTED_MODULE_51__["LeavedialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_33__["ChartsModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__["MatBadgeModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
        _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_41__["MaterialTimePickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_48__["NgMultiSelectDropDownModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_23__["FullCalendarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__["MatDatepickerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_33__["ChartsModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__["MatBadgeModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"],
        _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_41__["MaterialTimePickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_46__["MatCheckboxModule"],
        ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_48__["NgMultiSelectDropDownModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_49__["MatExpansionModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_53__["NgIf"], _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_15__["TopNavComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_32__["MatCardAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_53__["NgForOf"], _menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_13__["MenuListItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_54__["RouterOutlet"]], []);


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    API_URL: 'http://192.168.200.89:8081/angular_hrms/'
};
// http://192.168.200.89:8081/angular_hrms/loginconnect.php


/***/ }),

/***/ "mPL+":
/*!******************************************!*\
  !*** ./src/app/common/common.service.ts ***!
  \******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/of */ "neMA");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CommonService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.apiData = [
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." },
            { url: "assets/images/business.png", description: "You’ve always been our technical guru, and your passion for your work is clear." }
        ];
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }
    checkData() {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(this.apiData);
    }
    getEvents() {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data = [
            // {
            //   description: 'Present',
            //   title: 'P',
            //   start: '2021-05-07',
            //   color: '#228B22'
            // },
            {
                description: 'BBEvening Meeting',
                title: 'BBMorning Meeting 09.15 AM to 09.45 AM 2021-06-09',
                start: '2021-06-09',
                time: '9.00 AM to 11.00 AM',
                color: '#0041C2'
            },
            {
                description: 'BBMorning Meeting',
                title: 'BBMorning Meeting 10.15 AM to 10.45 AM 2021-06-09',
                start: '2021-06-09',
                time: '10.00 AM to 10.30 AM',
                color: '#0041C2'
            },
            {
                description: 'BBEvening Meeting',
                title: 'BBEvening Meeting 05.30 AM to 06.00 AM 2021-06-09',
                start: '2021-06-09',
                time: '9.00 AM to 11.00 AM',
                color: '#0041C2'
            },
            {
                description: 'Permission',
                title: 'Perm',
                start: '2021-05-03',
                color: '#FFB6C1',
                time: '9.00 AM to 11.00 AM'
            },
            {
                description: 'FullDay Leave',
                title: 'A',
                start: '2021-05-20',
                color: '#db3737'
            },
            {
                description: 'CompOff Leave',
                title: 'C',
                start: '2021-05-25',
                color: '#B2BEB5'
            }
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of(data);
    }
    upload(file) {
        const formData = new FormData();
        const name = '{ "name": "riya" }';
        const json = JSON.parse(name);
        return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL, json);
    }
    // upload(file: any): Observable<any> {
    //   const headers = { 'content-type': 'application/json' }
    //   const name = '{ "name": "riya" }';
    //   // const json = JSON.parse(name);
    //   const body = JSON.stringify(name);
    //   return this.http.post(this.uploadurl, body, { 'headers': headers })
    // }
    closeNav() {
        this.appDrawer.close();
    }
    openNav() {
        // this.appDrawer.open();
        this.appDrawer.toggle();
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "plqx":
/*!**************************************************!*\
  !*** ./src/app/dateclick/dateclick.component.ts ***!
  \**************************************************/
/*! exports provided: DateclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateclickComponent", function() { return DateclickComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employeelist/employeelist.component */ "2KtN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @candidosales/material-time-picker */ "fvN+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function () { return { standalone: true }; };
class DateclickComponent {
    constructor(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.events = this.data.row[0];
    }
    close() {
        this.dialogRef.close();
    }
    onChangeHour(event) {
        console.log('event', event);
    }
    memberlistopen() {
        const dialogRef = this.dialog.open(_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_1__["EmployeelistComponent"], {
            disableClose: false,
            maxWidth: '400px',
            minWidth: '400px',
            maxHeight: '400px',
            minHeight: '400px',
            data: { row: this.emplist }
        });
    }
}
DateclickComponent.ɵfac = function DateclickComponent_Factory(t) { return new (t || DateclickComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
DateclickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DateclickComponent, selectors: [["app-dateclick"]], decls: 17, vars: 3, consts: [["mat-dialog-title", "", 2, "float", "right", "cursor", "pointer", "font-weight", "normal", 3, "click"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Event", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "container"], [1, "demo-form", 2, "width", "350px"], ["color", "primary", "label", "From Time", "revertLabel", "Remove", "submitLabel", "Ok", 3, "change"], ["color", "primary", "label", "To Time", "revertLabel", "Remove", "submitLabel", "Ok", 3, "change"], ["mat-button", "", 2, "background-color", "#669eab", "color", "white", "margin-left", "110px", 3, "click"], ["src", "assets/images/meeting.png", "id", "leftbox", 2, "width", "30px", "height", "20px", "margin-left", "10px"], ["mat-button", "", 2, "background-color", "#1a73e8", "color", "white", "margin-left", "10px", "margin-top", "20px"]], template: function DateclickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateclickComponent_Template_div_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "X\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Add Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DateclickComponent_Template_input_ngModelChange_6_listener($event) { return ctx.playerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "material-timepicker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DateclickComponent_Template_material_timepicker_change_9_listener($event) { return ctx.onChangeHour($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "material-timepicker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DateclickComponent_Template_material_timepicker_change_10_listener($event) { return ctx.onChangeHour($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateclickComponent_Template_button_click_11_listener() { return ctx.memberlistopen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Add Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Create Google Meet Video Conferencing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.playerName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _candidosales_material_time_picker__WEBPACK_IMPORTED_MODULE_6__["MaterialTimePickerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".button-close[_ngcontent-%COMP%] {\r\n    justify-self: right;\r\n    font-size: 10px;\r\n    border: none;\r\n    height: 10px;\r\n    background-color: #FFFFFF;\r\n    outline: none;\r\n    color: #c04747;\r\n    \r\n    &:hover {\r\n        cursor: pointer;\r\n    }\r\n  }\r\n  .example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    position: relative;\r\n    margin: 1em;\r\n  }\r\n  .mat-card[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    max-width: 600px;\r\n    margin: 3rem auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVjbGljay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYzs7SUFFZDtRQUNJLGVBQWU7SUFDbkI7RUFDRjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUVBO0lBR0UsYUFBYTtJQUliLG1CQUFtQjtJQUduQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkIiLCJmaWxlIjoiZGF0ZWNsaWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNsb3NlIHtcclxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjYzA0NzQ3O1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "tGYo":
/*!*****************************************!*\
  !*** ./src/app/common/datevalidator.ts ***!
  \*****************************************/
/*! exports provided: DateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidator", function() { return DateValidator; });
function DateValidator(control) {
    let from = control.get('startDate');
    let to = control.get('endDate');
    let c = new Date();
    if (new Date(from === null || from === void 0 ? void 0 : from.value) < c) {
        return {
            invaineFrom: true
        };
    }
    if (new Date(to === null || to === void 0 ? void 0 : to.value) < c) {
        return {
            invaineTo: true
        };
    }
    if ((from === null || from === void 0 ? void 0 : from.value) > (to === null || to === void 0 ? void 0 : to.value)) {
        return {
            dates: true
        };
    }
    return {};
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-list-item/menu-list-item.component */ "MsPU");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender/calender.component */ "KH8e");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "F1hY");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [{ path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'calender', component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_3__["CalenderComponent"] }, { path: 'top', component: _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["TopNavComponent"] },
    { path: 'menu', component: _menu_list_item_menu_list_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuListItemComponent"] },
    { path: 'departmentmapping', loadChildren: () => Promise.all(/*! import() | app-departmentmapping-departmentmapping-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-departmentmapping-departmentmapping-module")]).then(__webpack_require__.bind(null, /*! ../app/departmentmapping/departmentmapping.module */ "P4Qm")).then(m => m.DepartmentmappingModule) },
    {
        path: 'departmentmappingadd/:company/:dept/:head/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-departmentmappingadd-departmentmappingadd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-departmentmappingadd-departmentmappingadd-module")]).then(__webpack_require__.bind(null, /*! ../app/departmentmappingadd/departmentmappingadd.module */ "gIZd")).then(m => m.DepartmentmappingaddModule)
    },
    {
        path: 'departmentmaster',
        loadChildren: () => Promise.all(/*! import() | app-departmentmaster-departmentmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("common"), __webpack_require__.e("app-departmentmaster-departmentmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/departmentmaster/departmentmaster.module */ "Rt1Z")).then(m => m.DepartmentmasterModule)
    },
    {
        path: 'departmentmasteradd/:name/:id/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-departmentmasteradd-departmentmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("common"), __webpack_require__.e("app-departmentmasteradd-departmentmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/departmentmasteradd/departmentmasteradd.module */ "/sro")).then(m => m.DepartmentmasteraddModule)
    },
    {
        path: 'companymaster',
        loadChildren: () => Promise.all(/*! import() | app-companymaster-companymaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-companymaster-companymaster-module~app-jobdescriptionadd-jobdescriptionadd-module"), __webpack_require__.e("app-companymaster-companymaster-module")]).then(__webpack_require__.bind(null, /*! ../app/companymaster/companymaster.module */ "5dRF")).then(m => m.CompanymasterModule)
    },
    {
        path: 'resourcemaster',
        loadChildren: () => Promise.all(/*! import() | app-resourcemaster-resourcemaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-resourcemaster-resourcemaster-module~app-resourcemasteradd-resourcemasteradd-module"), __webpack_require__.e("app-resourcemaster-resourcemaster-module")]).then(__webpack_require__.bind(null, /*! ../app/resourcemaster/resourcemaster.module */ "3EGW")).then(m => m.ResourcemasterModule)
    },
    {
        path: 'feedbackmaster',
        loadChildren: () => Promise.all(/*! import() | app-feedbackmaster-feedbackmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-feedbackmaster-feedbackmaster-module~app-feedbackmasteradd-feedbackmasteradd-module"), __webpack_require__.e("app-feedbackmaster-feedbackmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/feedbackmaster/feedbackmaster.module */ "5WRY")).then(m => m.FeedbackmasterModule)
    },
    {
        path: 'servicemaster',
        loadChildren: () => Promise.all(/*! import() | app-servicemaster-servicemaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-servicemaster-servicemaster-module~app-servicemasteradd-servicemasteradd-module"), __webpack_require__.e("app-servicemaster-servicemaster-module")]).then(__webpack_require__.bind(null, /*! ../app/servicemaster/servicemaster.module */ "dmss")).then(m => m.ServicemasterModule)
    },
    {
        path: 'rolemaster',
        loadChildren: () => Promise.all(/*! import() | app-rolemaster-rolemaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-rolemaster-rolemaster-module~app-rolemasteradd-rolemasteradd-module"), __webpack_require__.e("app-rolemaster-rolemaster-module")]).then(__webpack_require__.bind(null, /*! ../app/rolemaster/rolemaster.module */ "BVQ8")).then(m => m.RolemasterModule)
    },
    {
        path: 'interviewroundsmaster',
        loadChildren: () => Promise.all(/*! import() | app-interviewroundsmaster-interviewroundsmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-interviewroundsmaster-interviewroundsmaster-module~app-interviewroundsmasteradd-intervie~0584436b"), __webpack_require__.e("app-interviewroundsmaster-interviewroundsmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/interviewroundsmaster/interviewroundsmaster.module */ "ZLAp")).then(m => m.InterviewroundsmasterModule)
    },
    {
        path: 'interviewmappingmaster',
        loadChildren: () => Promise.all(/*! import() | app-interviewmappingmaster-interviewmappingmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-interviewmappingmaster-interviewmappingmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/interviewmappingmaster/interviewmappingmaster.module */ "5DAm")).then(m => m.InterviewmappingmasterModule)
    },
    {
        path: 'prefixmaster',
        loadChildren: () => Promise.all(/*! import() | app-prefixmaster-prefixmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-prefixmaster-prefixmaster-module~app-prefixmasteradd-prefixmasteradd-module"), __webpack_require__.e("app-prefixmaster-prefixmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/prefixmaster/prefixmaster.module */ "LKF8")).then(m => m.PrefixmasterModule)
    },
    {
        path: 'simmaster',
        loadChildren: () => Promise.all(/*! import() | app-simmaster-simmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-simmaster-simmaster-module~app-simmasteradd-simmasteradd-module"), __webpack_require__.e("app-simmaster-simmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/simmaster/simmaster.module */ "aPtS")).then(m => m.SimmasterModule)
    },
    {
        path: 'companymasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-companymasteradd-companymasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-companymasteradd-companymasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/companymasteradd/companymasteradd.module */ "gtkn")).then(m => m.CompanymasteraddModule)
    },
    {
        path: 'resourcemasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-resourcemasteradd-resourcemasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-resourcemaster-resourcemaster-module~app-resourcemasteradd-resourcemasteradd-module"), __webpack_require__.e("app-resourcemasteradd-resourcemasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/resourcemasteradd/resourcemasteradd.module */ "m2K0")).then(m => m.ResourcemasteraddModule)
    },
    {
        path: 'feedbackmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-feedbackmasteradd-feedbackmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-feedbackmaster-feedbackmaster-module~app-feedbackmasteradd-feedbackmasteradd-module"), __webpack_require__.e("app-feedbackmasteradd-feedbackmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/feedbackmasteradd/feedbackmasteradd.module */ "VzCc")).then(m => m.FeedbackmasteraddModule)
    },
    {
        path: 'servicemasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-servicemasteradd-servicemasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-servicemaster-servicemaster-module~app-servicemasteradd-servicemasteradd-module"), __webpack_require__.e("app-servicemasteradd-servicemasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/servicemasteradd/servicemasteradd.module */ "c93W")).then(m => m.ServicemasteraddModule)
    },
    {
        path: 'interviewroundsmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-interviewroundsmasteradd-interviewroundsmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-interviewroundsmaster-interviewroundsmaster-module~app-interviewroundsmasteradd-intervie~0584436b"), __webpack_require__.e("app-interviewroundsmasteradd-interviewroundsmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/interviewroundsmasteradd/interviewroundsmasteradd.module */ "4lyc")).then(m => m.InterviewroundsmasteraddModule)
    },
    {
        path: 'interviewmappingmasteradd/:dept/:round/:employee/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-interviewmappingmasteradd-interviewmappingmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-interviewmappingmasteradd-interviewmappingmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/interviewmappingmasteradd/interviewmappingmasteradd.module */ "Y7LL")).then(m => m.InterviewmappingmasteraddModule)
    },
    {
        path: 'rolemasteradd/:name/:name1/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-rolemasteradd-rolemasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-rolemaster-rolemaster-module~app-rolemasteradd-rolemasteradd-module"), __webpack_require__.e("app-rolemasteradd-rolemasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/rolemasteradd/rolemasteradd.module */ "VReq")).then(m => m.RolemasteraddModule)
    },
    {
        path: 'prefixmasteradd/:name/:name1/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-prefixmasteradd-prefixmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-prefixmaster-prefixmaster-module~app-prefixmasteradd-prefixmasteradd-module"), __webpack_require__.e("app-prefixmasteradd-prefixmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/prefixmasteradd/prefixmasteradd.module */ "fYDp")).then(m => m.PrefixmasteraddModule)
    },
    {
        path: 'simmasteradd/:name/:name1/:name2/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-simmasteradd-simmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-simmaster-simmaster-module~app-simmasteradd-simmasteradd-module"), __webpack_require__.e("app-simmasteradd-simmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/simmasteradd/simmasteradd.module */ "Zsot")).then(m => m.SimmasteraddModule)
    },
    {
        path: 'questionmaster',
        loadChildren: () => Promise.all(/*! import() | app-questionmaster-questionmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-questionmaster-questionmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/questionmaster/questionmaster.module */ "ynCn")).then(m => m.QuestionmasterModule)
    },
    {
        path: 'questionmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-questionmasteradd-questionmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-questionmasteradd-questionmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/questionmasteradd/questionmasteradd.module */ "Wf8e")).then(m => m.QuestionmasteraddModule)
    },
    {
        path: 'sectionmaster',
        loadChildren: () => Promise.all(/*! import() | app-sectionmaster-sectionmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-sectionmaster-sectionmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/sectionmaster/sectionmaster.module */ "YkCq")).then(m => m.SectionmasterModule)
    },
    {
        path: 'sectionmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-sectionmasteradd-sectionmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-sectionmasteradd-sectionmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/sectionmasteradd/sectionmasteradd.module */ "Wk+m")).then(m => m.SectionmasteraddModule)
    },
    {
        path: 'divisionmaster',
        loadChildren: () => Promise.all(/*! import() | app-divisionmaster-divisionmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-divisionmaster-divisionmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/divisionmaster/divisionmaster.module */ "LRQb")).then(m => m.DivisionmasterModule)
    },
    {
        path: 'divisionmasteradd/:dept/:div/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-divisionmasteradd-divisionmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-divisionmasteradd-divisionmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/divisionmasteradd/divisionmasteradd.module */ "l263")).then(m => m.DivisionmasteraddModule)
    },
    {
        path: 'salaryadvance',
        loadChildren: () => Promise.all(/*! import() | app-salaryadvance-salaryadvance-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-salaryadvance-salaryadvance-module")]).then(__webpack_require__.bind(null, /*! ../app/salaryadvance/salaryadvance.module */ "Mha2")).then(m => m.SalaryadvanceModule)
    },
    {
        path: 'designationmaster',
        loadChildren: () => Promise.all(/*! import() | app-designationmaster-designationmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-designationmaster-designationmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/designationmaster/designationmaster.module */ "bamk")).then(m => m.DesignationmasterModule)
    },
    {
        path: 'designationmasteradd/:id/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-designationmasteradd-designationmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-designationmasteradd-designationmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/designationmasteradd/designationmasteradd.module */ "ThsA")).then(m => m.DesignationmasteraddModule)
    },
    {
        path: 'productmaster',
        loadChildren: () => Promise.all(/*! import() | app-productmaster-productmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-productmaster-productmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/productmaster/productmaster.module */ "oZfH")).then(m => m.ProductmasterModule)
    },
    {
        path: 'productmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-productmasteradd-productmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-productmasteradd-productmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/productmasteradd/productmasteradd.module */ "Mnu1")).then(m => m.ProductmasteraddModule)
    },
    {
        path: 'callsmaster',
        loadChildren: () => Promise.all(/*! import() | app-callsmaster-callsmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-callsmaster-callsmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/callsmaster/callsmaster.module */ "LBIv")).then(m => m.CallsmasterModule)
    }, {
        path: 'callsmasteradd/:name/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-callsmasteradd-callsmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-callsmasteradd-callsmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/callsmasteradd/callsmasteradd.module */ "sYJZ")).then(m => m.CallsmasteraddModule)
    },
    {
        path: 'assetmaster',
        loadChildren: () => Promise.all(/*! import() | app-assetmaster-assetmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-assetmaster-assetmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/assetmaster/assetmaster.module */ "u12Y")).then(m => m.AssetmasterModule)
    },
    {
        path: 'assetmasteradds/:id/:id1/:id2/:id3/:save',
        loadChildren: () => Promise.all(/*! import() | app-assetmasteradds-assetmasteradds-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-assetmasteradds-assetmasteradds-module")]).then(__webpack_require__.bind(null, /*! ../app/assetmasteradds/assetmasteradds.module */ "Avk7")).then(m => m.AssetmasteraddsModule)
    },
    { path: 'jobdescription', loadChildren: () => Promise.all(/*! import() | app-jobdescription-jobdescription-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-jobdescription-jobdescription-module")]).then(__webpack_require__.bind(null, /*! ../app/jobdescription/jobdescription.module */ "dOan")).then(m => m.JobdescriptionModule) },
    {
        path: 'jobdescriptionadd/:title/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-jobdescriptionadd-jobdescriptionadd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("default~app-companymaster-companymaster-module~app-jobdescriptionadd-jobdescriptionadd-module"), __webpack_require__.e("app-jobdescriptionadd-jobdescriptionadd-module")]).then(__webpack_require__.bind(null, /*! ../app/jobdescriptionadd/jobdescriptionadd.module */ "i44J")).then(m => m.JobdescriptionaddModule)
    },
    { path: 'consultantmaster', loadChildren: () => Promise.all(/*! import() | consultantmaster-consultantmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("consultantmaster-consultantmaster-module")]).then(__webpack_require__.bind(null, /*! ./consultantmaster/consultantmaster.module */ "Pwwk")).then(m => m.ConsultantmasterModule) },
    {
        path: 'consultantmasteradd/:name/:organization/:phoneno/:email/:phoneno1/:email1/:empname/:status/:save',
        loadChildren: () => Promise.all(/*! import() | consultantmasteradd-consultantmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("consultantmasteradd-consultantmasteradd-module")]).then(__webpack_require__.bind(null, /*! ./consultantmasteradd/consultantmasteradd.module */ "L71c")).then(m => m.ConsultantmasteraddModule)
    },
    { path: 'userrolemaster', loadChildren: () => Promise.all(/*! import() | userrolemaster-userrolemaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("userrolemaster-userrolemaster-module")]).then(__webpack_require__.bind(null, /*! ./userrolemaster/userrolemaster.module */ "V6Zs")).then(m => m.UserrolemasterModule) },
    {
        path: 'userrolemasteradd/:empname/:code/:rolename/:rolecode/:username/:password/:status/:save',
        loadChildren: () => Promise.all(/*! import() | userrolemasteradd-userrolemasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("userrolemasteradd-userrolemasteradd-module")]).then(__webpack_require__.bind(null, /*! ./userrolemasteradd/userrolemasteradd.module */ "Hirs")).then(m => m.UserrolemasteraddModule)
    },
    {
        path: 'clientmaster',
        loadChildren: () => Promise.all(/*! import() | app-clientmaster-clientmaster-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-clientmaster-clientmaster-module")]).then(__webpack_require__.bind(null, /*! ../app/clientmaster/clientmaster.module */ "9nvJ")).then(m => m.ClientmasterModule)
    },
    {
        path: 'clientmasteradd/:dept/:employee/:compname/:clientname/:clientorgname/:mobno1/:mobno2/:landlineno/:email1/:email2/:gstno/:website/:status/:save',
        loadChildren: () => Promise.all(/*! import() | app-clientmasteradd-clientmasteradd-module */[__webpack_require__.e("default~app-assetmaster-assetmaster-module~app-assetmasteradds-assetmasteradds-module~app-callsmaste~457be300"), __webpack_require__.e("app-clientmasteradd-clientmasteradd-module")]).then(__webpack_require__.bind(null, /*! ../app/clientmasteradd/clientmasteradd.module */ "sOIN")).then(m => m.ClientmasteraddModule)
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forgotpassword/forgotpassword.component */ "YIkm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/login */ "I8PV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/login.service */ "1ld4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












const _c0 = ["username"];
class LoginComponent {
    constructor(dialog, loginservice, fb, router, appcomp) {
        this.dialog = dialog;
        this.loginservice = loginservice;
        this.fb = fb;
        this.router = router;
        this.appcomp = appcomp;
        this.loginpojo = new _model_login__WEBPACK_IMPORTED_MODULE_3__["LoginPojo"]();
    }
    ngOnInit() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.loginForm = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        setTimeout(() => {
            this.username.nativeElement.focus();
        }, 0);
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    forgotpassword() {
        if (!this.loginForm.controls.username.value) {
            alert("User Name Should Not be Empty");
            return;
        }
        const dialogRef = this.dialog.open(_forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_1__["ForgotpasswordComponent"], {
            maxWidth: '400px',
            minWidth: '400px',
            minHeight: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(data => {
            this.loginservice.resetpassword(data).then(data => {
                alert("Successfully Reset the Password");
                this.username.nativeElement.focus();
            }, err => {
                alert(err);
                return;
            });
        });
    }
    showOptions(event) {
        if (event.checked === true) {
            this.loginpojo.username = this.loginForm.controls.username.value;
            this.loginpojo.password = this.loginForm.controls.password.value;
            if (localStorage.getItem('login')) {
                localStorage.removeItem('login');
                localStorage.setItem('login', JSON.stringify(this.loginpojo));
            }
            else {
                localStorage.setItem('login', JSON.stringify(this.loginpojo));
            }
        }
        else {
            if (localStorage.getItem('login')) {
                localStorage.removeItem('login');
            }
            else {
                return;
            }
        }
    }
    login() {
        this.loginpojo.username = this.loginForm.controls.username.value;
        this.loginpojo.password = this.loginForm.controls.password.value;
        if (!this.loginpojo.username) {
            alert('Username Should Not Be Empty');
            return;
        }
        else if (!this.loginpojo.password) {
            alert('Password Should Not Be Empty');
            return;
        }
        this.loginservice.login(this.loginpojo).then(data => {
            if (data.status) {
                debugger;
                this.appcomp.topnav = true;
                this.loginpojo.empcode = data.result[0].empcode;
                this.loginpojo.username = data.result[0].empname;
                this.loginpojo.empLevel = data.result[0].empLevel;
                sessionStorage.setItem('logindet', JSON.stringify(this.loginpojo));
                this.username.nativeElement.focus();
                this.router.navigate(['/dashboard']);
            }
        }, err => {
            alert(err);
        });
        this.appcomp.dashboardview();
    }
    checkisuser() {
        // this.loginservice.namecheck(this.loginForm.controls.username.value).then(data => {
        return;
        // }, err => {
        //   alert("User Not Exists");
        //   this.username.nativeElement.focus();
        // });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
    } }, hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function LoginComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 1, consts: [[2, "overflow-y", "hidden"], [3, "formGroup"], [1, "login-box"], [1, "bb", 2, "float", "left", "margin-left", "-50px", "margin-top", "-3px"], ["src", "../../assets/images/blogo.png", "alt", "cinque terre", 1, "img1", 2, "overflow-y", "hidden", "overflow-x", "hidden", "min-width", "60px", "max-width", "60px", "max-height", "60px", "min-height", "60px"], [1, "QuincyCF"], [1, "line"], [1, "textbox", "form-group"], [1, "fas", "fa-user", 2, "color", "#05d8d8"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control"], ["username", ""], [1, "fas", "fa-lock", 2, "color", "#05d8d8"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "focusout"], [1, "example-section"], [1, "example-margin", 3, "change"], ["mat-button", "", 2, "color", "#087e7e", "margin-left", "150px", 3, "click", "keydown.enter"], [2, "margin-top", "20px"], ["mat-button", "", 2, "background-color", "#04a2a2", "width", "280px", "color", "white", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusout", function LoginComponent_Template_input_focusout_16_listener() { return ctx.checkisuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function LoginComponent_Template_mat_checkbox_change_18_listener($event) { return ctx.showOptions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() { return ctx.forgotpassword(); })("keydown.enter", function LoginComponent_Template_button_keydown_enter_20_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["@import \"https://use.fontawesome.com/releases/v5.5.0/css/all.css\";\r\n\r\n.Quincy[_ngcontent-%COMP%] {\r\n  font-family: Quincy;\r\n}\r\n\r\n.QuincyCF[_ngcontent-%COMP%] {\r\n  font-family: QuincyCF;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  overflow-y: hidden;\r\n  overflow-x: hidden;\r\n  min-width: 1340px;\r\n  max-height: 655px;\r\n  background: url('blue.jpg');\r\n  margin: 0;\r\n  padding: 0;\r\n  background-size: cover;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%]{\r\n  width: 280px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  color: #087e7e;\r\n}\r\n\r\n.login-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  float: left;\r\n  font-size: 40px;\r\n  padding: 13px 0;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n  float: left;\r\n  font-size: 40px;\r\n  margin-left: -30px;\r\n  margin-top: 30px;\r\n  border-bottom: 3px solid #9dafaf;\r\n  margin-bottom: 50px;\r\n  padding: 13px 0;\r\n  width: 30px;\r\n}\r\n\r\n.textbox[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  overflow: hidden;\r\n  font-size: 20px;\r\n  padding: 8px 0;\r\n  margin: 8px 0;\r\n  border-bottom: 1px solid #05d8d8;\r\n}\r\n\r\n.textbox[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  width: 26px;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n\r\n.textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  color: black;\r\n  font-size: 18px;\r\n  width: 80%;\r\n  float: left;\r\n  margin: 0 10px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background: none;\r\n  border: 2px solid #05d8d8;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  margin: 12px 0;\r\n}\r\n\r\ndiv.thatShallNotBeNamed[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 202px);\r\n }\r\n\r\n.example-section[_ngcontent-%COMP%] {\r\n  margin: 12px 0;\r\n}\r\n\r\n.example-margin[_ngcontent-%COMP%] {\r\n  margin: 0 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOztBQUVqRTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwyQkFBK0M7RUFDL0MsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBQ0Q7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIjtcclxuXHJcbi5RdWluY3kge1xyXG4gIGZvbnQtZmFtaWx5OiBRdWluY3k7XHJcbn1cclxuLlF1aW5jeUNGIHtcclxuICBmb250LWZhbWlseTogUXVpbmN5Q0Y7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtaW4td2lkdGg6IDEzNDBweDtcclxuICBtYXgtaGVpZ2h0OiA2NTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JsdWUuanBnXCIpO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmxvZ2luLWJveHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGNvbG9yOiAjMDg3ZTdlO1xyXG59XHJcbi5sb2dpbi1ib3ggaDF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMDtcclxufVxyXG4ubGluZXtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM5ZGFmYWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnRleHRib3h7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA1ZDhkODtcclxufVxyXG4udGV4dGJveCBpe1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dGJveCBpbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzA1ZDhkODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbn1cclxuZGl2LnRoYXRTaGFsbE5vdEJlTmFtZWQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAycHgpO1xyXG4gfVxyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG4uZXhhbXBsZS1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    overflow: 'hidden',
                    height: '*',
                    width: '300px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '0px',
                    width: '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out'))
            ])
        ] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map