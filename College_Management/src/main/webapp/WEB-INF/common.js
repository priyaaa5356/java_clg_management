(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "gpVA":
/*!*****************************************************!*\
  !*** ./src/app/service/departmentmaster.service.ts ***!
  \*****************************************************/
/*! exports provided: DepartmentmasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentmasterService", function() { return DepartmentmasterService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class DepartmentmasterService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    save(save) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'department_master/departmentmaster_submit.php';
        return this.http.post(url, save, this.httpOptions).toPromise();
    }
    view() {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'department_master/department_view.php';
        return this.http.post(url, this.httpOptions).toPromise();
    }
    update(update) {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + 'department_master/departmentmaster_update.php';
        return this.http.post(url, update, this.httpOptions).toPromise();
    }
}
DepartmentmasterService.ɵfac = function DepartmentmasterService_Factory(t) { return new (t || DepartmentmasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
DepartmentmasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DepartmentmasterService, factory: DepartmentmasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s8w+":
/*!*************************************!*\
  !*** ./src/app/model/department.ts ***!
  \*************************************/
/*! exports provided: DepartmentView, Departmentupdate, Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentView", function() { return DepartmentView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Departmentupdate", function() { return Departmentupdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
class DepartmentView {
    constructor() {
        this.name = "";
        this.id = "";
        this.sno = 0;
        this.status = false;
    }
}
class Departmentupdate {
    constructor() {
        this.name = "";
        this.id = "";
        this.status = false;
    }
}
class Department {
    constructor() {
        this.name = "";
        this.id = "";
        this.status = false;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map