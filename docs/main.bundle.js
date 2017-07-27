webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-top: 52px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"\">{{ title }}</a>\n    </div>\n\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"mails\">Mails</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"users\">Users</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid main\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'MailBox';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mails_mails_module__ = __webpack_require__("../../../../../src/app/mails/mails.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_users_root_users_root_component__ = __webpack_require__("../../../../../src/app/users/users-root/users-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mails_mails_root_mails_root_component__ = __webpack_require__("../../../../../src/app/mails/mails-root/mails-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fake_backend__ = __webpack_require__("../../../../../src/app/fake-backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// used to create fake backend



var routs = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__["a" /* AuthComponent */]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_7__users_users_root_users_root_component__["a" /* UsersRootComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'users/:userId',
        component: __WEBPACK_IMPORTED_MODULE_8__users_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'mails',
        component: __WEBPACK_IMPORTED_MODULE_9__mails_mails_root_mails_root_component__["a" /* MailsRootComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '**', redirectTo: ''
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_auth_component__["a" /* AuthComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routs),
            __WEBPACK_IMPORTED_MODULE_5__mails_mails_module__["a" /* MailsModule */],
            __WEBPACK_IMPORTED_MODULE_6__users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__users_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */],
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_15__fake_backend__["a" /* fakeBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-area {\n  margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-area col-md-6 col-md-offset-3\">\n  <div *ngIf=\"currentUser; else elseBlock\">\n    <div class=\"alert alert-info\">\n      <h1>Hello {{ currentUser.username }}!</h1>\n    </div>\n    <button class=\"btn btn-default\" (click)=\"logout()\">Logout</button>\n  </div>\n  <ng-template #elseBlock>\n    <div class=\"alert alert-info\">\n      Username: test<br />\n      Password: test\n    </div>\n    <h2>Login</h2>\n    <form [formGroup]=\"authForm\" (ngSubmit)=\"login()\">\n      <div\n        class=\"form-group\"\n        [ngClass]=\"{ 'has-success': authForm.controls.username.touched && authForm.controls.username.valid, 'has-error': authForm.controls.username.touched && authForm.controls.username.invalid }\"\n      >\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"username\" />\n        <div class=\"help-block\" [style.display]=\"(authForm.touched && authForm.controls.username.invalid) || (authForm.controls.username.touched && authForm.controls.username.invalid) ? '' : 'none'\">Username is required</div>\n      </div>\n      <div\n        class=\"form-group\"\n        [ngClass]=\"{ 'has-success': authForm.controls.password.touched && authForm.controls.password.valid, 'has-error': authForm.controls.password.touched && authForm.controls.password.invalid }\"\n      >\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" />\n        <div class=\"help-block\" [style.display]=\"(authForm.touched && authForm.controls.password.invalid) || (authForm.controls.password.touched && authForm.controls.password.invalid) ? '' : 'none'\">Password is required</div>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      </div>\n      <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(router, authenticationService, formBuilder) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.error = '';
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.authForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required]
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.authForm.markAsTouched();
        if (this.authForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.authForm.controls.username.value, this.authForm.controls.password.value)
            .subscribe(function (result) {
            if (result === true) {
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                _this.authForm.reset();
            }
            else {
                _this.error = 'Username or password is incorrect';
            }
            _this.loading = false;
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object])
], AuthComponent);

var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });


var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */],
    useFactory: function (backend, options) {
        // configure fake backend
        backend.connections.subscribe(function (connection) {
            var testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };
            // wrap in timeout to simulate server api call
            setTimeout(function () {
                // fake authenticate api end point
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestMethod */].Post) {
                    // get parameters from post request
                    var params = JSON.parse(connection.request.getBody());
                    // check user credentials and return fake jwt token if valid
                    if (params.username === testUser.username && params.password === testUser.password) {
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ResponseOptions */]({ status: 200, body: { token: 'fake-jwt-token' } })));
                    }
                    else {
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ResponseOptions */]({ status: 200 })));
                    }
                }
                // fake users api end point
                if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestMethod */].Get) {
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ResponseOptions */]({ status: 200, body: [testUser] })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ResponseOptions */]({ status: 401 })));
                    }
                }
            }, 500);
        });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* Http */](backend, options);
    },
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* BaseRequestOptions */]]
};
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "../../../../../src/app/mails/elapsed.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElapsedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _plural(k, name) {
    return k > 1 ? name + "s" : name;
}
var ElapsedPipe = (function () {
    function ElapsedPipe() {
    }
    ElapsedPipe.prototype.transform = function (value, args) {
        var _a = this._getFullElapsedUnit(new Date(), new Date(value)), years = _a.years, months = _a.months, days = _a.days, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
        var elapsed;
        if (years > 0) {
            elapsed = this._yearsAgo(years, months);
        }
        else if (months > 0) {
            elapsed = this._monthsAgo(months, days);
        }
        else if (days > 0) {
            elapsed = this._daysAgo(days);
        }
        else if (hours > 0) {
            elapsed = this._hoursAgo(hours);
        }
        else if (minutes > 0) {
            elapsed = this._minutesAgo(minutes);
        }
        else if (seconds > 0) {
            elapsed = this._secondsAgo(seconds);
        }
        else if (seconds === 0) {
            elapsed = 'a moment ago';
        }
        else {
            elapsed = 'in future';
        }
        return elapsed;
    };
    ElapsedPipe.prototype._yearsAgo = function (years, months) {
        var elapsed = years + " " + _plural(years, 'year');
        if (months > 0) {
            elapsed = elapsed + " and " + months + " " + _plural(months, 'month');
        }
        elapsed = elapsed + " ago";
        return elapsed;
    };
    ElapsedPipe.prototype._monthsAgo = function (months, days) {
        var elapsed = months + " " + _plural(months, 'month');
        if (days > 0) {
            elapsed = elapsed + " and " + days + " " + _plural(days, 'days');
        }
        elapsed = elapsed + " ago";
        return elapsed;
    };
    ElapsedPipe.prototype._daysAgo = function (days) {
        return days + " " + _plural(days, 'day') + " ago";
    };
    ElapsedPipe.prototype._hoursAgo = function (hours) {
        return hours + " " + _plural(hours, 'hour') + " ago";
    };
    ElapsedPipe.prototype._minutesAgo = function (minutes) {
        return minutes + " " + _plural(minutes, 'minute') + " ago";
    };
    ElapsedPipe.prototype._secondsAgo = function (seconds) {
        return seconds + " " + _plural(seconds, 'second') + " ago";
    };
    ElapsedPipe.prototype._getFullElapsedUnit = function (now, past) {
        var deltaTime = now.getTime() - past.getTime(), seconds = Math.floor(deltaTime / 1000), minutes = Math.floor(deltaTime / (60 * 1000)), hours = Math.floor(deltaTime / (60 * 60 * 1000));
        var days = Math.floor(deltaTime / (24 * 60 * 60 * 1000)), months = 0, years = 0;
        if (days > 28) {
            var nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var pastDate = new Date(past.getFullYear(), past.getMonth(), past.getDate());
            if (pastDate < nowDate) {
                while (pastDate < nowDate) {
                    years++;
                    pastDate = new Date(pastDate.getFullYear() + 1, pastDate.getMonth(), pastDate.getDate());
                }
                if (pastDate > nowDate) {
                    years--;
                    pastDate = new Date(pastDate.getFullYear() - 1, pastDate.getMonth(), pastDate.getDate());
                }
            }
            if (pastDate < nowDate) {
                while (pastDate < nowDate) {
                    months++;
                    pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() + 1, pastDate.getDate());
                }
                if (pastDate > nowDate) {
                    months--;
                    pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() - 1, pastDate.getDate());
                }
            }
            if (pastDate < nowDate) {
                while (pastDate < nowDate) {
                    days++;
                    pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth(), pastDate.getDate() + 1);
                }
                if (pastDate > nowDate) {
                    days--;
                }
            }
        }
        return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds };
    };
    return ElapsedPipe;
}());
ElapsedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'elapsed',
        pure: false
    })
], ElapsedPipe);

//# sourceMappingURL=elapsed.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/mails/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        return term ? items.filter(function (item) { return item.subject.toLowerCase().indexOf(term.toLowerCase()) !== -1; }) : items;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/mails/folders-list/folders-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-sidebar {\n  margin-right: -20px;\n  margin-bottom: 20px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n\n.nav-sidebar a:hover {\n  background-color: #313539;\n}\n\n.nav-sidebar .active,\n.nav-sidebar .active a:hover {\n  background-color: #3e444c;\n}\n\n.nav a {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mails/folders-list/folders-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-sidebar\">\n  <li *ngFor=\"let folder of folders\" [class.active]=\"folder.name === selectedFolder\">\n     <a (click)=\"selectFolder(folder)\"><!--<span class=\"badge pull-right\">4</span>--> {{ folder.name }}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/mails/folders-list/folders-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoldersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoldersListComponent = (function () {
    function FoldersListComponent() {
        this.onSelectFolder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    FoldersListComponent.prototype.selectFolder = function (folder) {
        this.onSelectFolder.emit(folder);
    };
    return FoldersListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FoldersListComponent.prototype, "folders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FoldersListComponent.prototype, "selectedFolder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], FoldersListComponent.prototype, "onSelectFolder", void 0);
FoldersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-folders-list',
        template: __webpack_require__("../../../../../src/app/mails/folders-list/folders-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mails/folders-list/folders-list.component.css")]
    })
], FoldersListComponent);

//# sourceMappingURL=folders-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mails/mails-list/mails-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-sidebar {\n  margin-right: -20px;\n  margin-bottom: 20px;\n  margin-left: -20px;\n  margin-top: -20px;\n}\n\n.nav-sidebar a:hover {\n  background-color: #313539;\n}\n\n.nav-sidebar .active,\n.nav-sidebar .active a:hover {\n  background-color: #3e444c;\n}\n\n.nav a {\n  cursor: pointer;\n}\n\n.nav a {\n  padding-left: 35px;\n}\n\n.nav li {\n  position: relative;\n}\n\n.check {\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 10px;\n  margin-top: -7px;\n}\n\n.new-mail {\n  font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mails/mails-list/mails-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-sidebar\">\n  <li\n    *ngFor=\"let mail of mails | filter:term\"\n    [class.active]=\"mail.id === selectedMail?.id\"\n    [class.new-mail]=\"!mail.read\"\n  >\n    <span\n      class=\"glyphicon check\"\n      [class.glyphicon-unchecked]=\"!isChecked(mail)\"\n      [class.glyphicon-check]=\"isChecked(mail)\"\n      (click)=\"checkMail(mail)\"\n      aria-hidden=\"true\"\n    ></span>\n    <a (click)=\"selectMail(mail)\">\n      <div class=\"clearfix\">\n        <small class=\"pull-right\">{{ mail.createdAt | date }}</small>\n        <span>{{ mail.subject }}</span>\n      </div>\n      {{ mail.from }}\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/mails/mails-list/mails-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailsListComponent = (function () {
    function MailsListComponent() {
        this.onSelectMail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.onCheckMail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    MailsListComponent.prototype.selectMail = function (mail) {
        this.onSelectMail.emit(mail);
    };
    MailsListComponent.prototype.checkMail = function (mail) {
        this.onCheckMail.emit(mail);
    };
    MailsListComponent.prototype.isChecked = function (mail) {
        return this.checkedMails.includes(mail);
    };
    return MailsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MailsListComponent.prototype, "mails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MailsListComponent.prototype, "selectedMail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], MailsListComponent.prototype, "checkedMails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], MailsListComponent.prototype, "term", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], MailsListComponent.prototype, "onSelectMail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], MailsListComponent.prototype, "onCheckMail", void 0);
MailsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-mails-list',
        template: __webpack_require__("../../../../../src/app/mails/mails-list/mails-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mails/mails-list/mails-list.component.css")]
    })
], MailsListComponent);

//# sourceMappingURL=mails-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mails/mails-root/mails-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-manage {\n  margin-bottom: 20px;\n}\n\n.panel-manage .form-inline {\n  display: inline-block;\n  margin-left: 15px;\n}\n\n.sidebar::-webkit-scrollbar, .mailbar::-webkit-scrollbar {\n  width: 5px;\n}\n\n.sidebar::-webkit-scrollbar-track, .mailbar::-webkit-scrollbar-track {\n  background: #ddd;\n}\n\n.sidebar::-webkit-scrollbar-thumb, .mailbar::-webkit-scrollbar-thumb {\n  background: #666;\n}\n\n.btn-group {\n  z-index: 1049;\n}\n\n.dropdown-menu a {\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  .managebar {\n    padding-top: 18px;\n    border-bottom: 1px solid #555;\n  }\n  .cell {\n    padding-top: 18px;\n    border-bottom: 1px solid #555;\n    border-right: 1px solid #555;\n  }\n  .sidebar, .mailbar {\n    position: fixed;\n    top: 130px;\n    bottom: 0;\n    left: 0;\n    z-index: 100;\n    display: block;\n    padding: 20px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    /*background-color: #333;*/\n    border-right: 1px solid #555;\n  }\n  .main {\n    padding-top: 15px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mails/mails-root/mails-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"cell col-sm-3 col-md-2\">\n    <div class=\"panel-manage clearfix\">\n      <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openModalNewMail(newMailTemplate)\">\n          <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>\n          New Mail\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"managebar col-sm-9 col-md-10\">\n    <div class=\"panel-manage\">\n\n      <div class=\"btn-group\" dropdown>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleAll()\">\n          <span\n            class=\"glyphicon\"\n            [class.glyphicon-check]=\"allIsChecked()\"\n            [class.glyphicon-unchecked]=\"!allIsChecked()\"\n            aria-hidden=\"true\"\n          ></span>\n        </button>\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdownToggle>\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" *dropdownMenu>\n          <li><a (click)=\"selectAll()\">All</a></li>\n          <li><a (click)=\"unselectAll()\">None</a></li>\n          <li><a (click)=\"markAsReadGroup(checkedMails)\">Read</a></li>\n          <li><a (click)=\"markAsUnreadGroup(checkedMails)\">Unread</a></li>\n        </ul>\n      </div>\n\n      <div class=\"btn-group\">\n        <button\n          type=\"button\"\n          class=\"btn btn-default\"\n          [tooltip]=\"selectedFolder === 'Spam' ? 'Move&nbsp;to&nbsp;Inbox' : 'Move&nbsp;to&nbsp;Spam'\"\n          (click)=\"toggleSpam()\"\n        >\n          <span\n            class=\"glyphicon\"\n            [class.glyphicon-alert]=\"selectedFolder !== 'Spam'\"\n            [class.glyphicon-envelope]=\"selectedFolder === 'Spam'\"\n            aria-hidden=\"true\"\n          ></span>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-default\"\n          [tooltip]=\"selectedFolder === 'Trash' ? 'Move&nbsp;to&nbsp;Inbox' : 'Move&nbsp;to&nbsp;Trash'\"\n          (click)=\"moveToTrash()\"\n        >\n          <span\n            class=\"glyphicon\"\n            [class.glyphicon-trash]=\"selectedFolder !== 'Trash'\"\n            [class.glyphicon-envelope]=\"selectedFolder === 'Trash'\"\n            aria-hidden=\"true\"\n          ></span>\n        </button>\n      </div>\n\n      <div class=\"btn-group\" dropdown>\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" dropdownToggle>\n          <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span>\n          &nbsp;\n          <span class=\"caret\"></span>\n        </button>\n\n        <ul class=\"dropdown-menu\" *dropdownMenu>\n          <li class=\"dropdown-header\">Move to:</li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a (click)=\"moveToInbox()\">Inbox</a></li>\n          <li role=\"separator\" class=\"divider\"></li>\n          <li><a (click)=\"moveToTrash()\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Trash</a></li>\n          <li><a (click)=\"moveToSpam()\"><span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span> Spam</a></li>\n        </ul>\n      </div>\n\n      <div class=\"form-inline\">\n        <div class=\"form-group form-inline\">\n          <input type=\"search\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"term\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"sidebar col-sm-3 col-md-2 col-lg-2\">\n    <app-folders-list\n      [folders]=\"folders\"\n      [selectedFolder]=\"selectedFolder\"\n      (onSelectFolder)=\"selectFolder($event)\"\n    ></app-folders-list>\n  </div>\n\n  <div class=\"mailbar col-sm-3 col-sm-offset-3 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-2\">\n    <app-mails-list\n      [mails]=\"mails\"\n      [term]=\"term\"\n      [selectedMail]=\"selectedMail\"\n      [checkedMails]=\"checkedMails\"\n      (onSelectMail)=\"selectMail($event)\"\n      (onCheckMail)=\"checkMail($event)\"\n    ></app-mails-list>\n  </div>\n\n  <div class=\"main col-sm-6 col-sm-offset-6 col-md-7 col-md-offset-5 col-lg-8 col-lg-offset-4\">\n    <div *ngIf=\"selectedMail\">\n      <div class=\"clearfix\">\n        <div class=\"pull-right\">{{ selectedMail.createdAt | date }} ({{ selectedMail.createdAt | date:'medium' | elapsed }})</div>\n        From: {{ selectedMail.from }}<br>To: {{ selectedMail.to }}\n      </div>\n      <h3>{{ selectedMail.subject }}</h3>\n      <hr>\n      {{ selectedMail.content }}\n    </div>\n  </div>\n\n</div>\n\n<ng-template #newMailTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">New Email</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"mailForm\" (ngSubmit)=\"sendMail()\">\n      <div\n        class=\"form-group\"\n        [class.has-success]=\"mailForm.controls.to.dirty && mailForm.controls.to.valid\"\n        [class.has-feedback]=\"mailForm.controls.to.dirty\"\n        [class.has-error]=\"mailForm.controls.to.dirty && mailForm.controls.to.invalid\"\n      >\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"To\"\n          formControlName=\"to\"\n          [typeahead]=\"dataUsers\"\n          typeaheadOptionsLimit=\"7\"\n          typeaheadMinLength=\"0\"\n          (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n          (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\n          (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n        >\n\n        <span *ngIf=\"mailForm.controls.to.dirty && mailForm.controls.to.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"mailForm.controls.to.dirty && mailForm.controls.to.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n      <div *ngIf=\"typeaheadLoading===true\">\n        <i class=\"glyphicon glyphicon-refresh ng-hide\" style=\"\"></i>\n      </div>\n      <div *ngIf=\"typeaheadNoResults===true\" class=\"\" style=\"\">\n        <i class=\"glyphicon glyphicon-remove\"></i> No Results Found\n      </div>\n      <div\n        class=\"form-group\"\n        [class.has-success]=\"mailForm.controls.subject.dirty && mailForm.controls.subject.valid\"\n        [class.has-feedback]=\"mailForm.controls.subject.dirty\"\n        [class.has-error]=\"mailForm.controls.subject.dirty && mailForm.controls.subject.invalid\"\n      >\n        <input type=\"text\" class=\"form-control\" placeholder=\"Subject\" formControlName=\"subject\">\n\n        <span *ngIf=\"mailForm.controls.subject.dirty && mailForm.controls.subject.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"mailForm.controls.subject.dirty && mailForm.controls.subject.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n      <div\n        class=\"form-group\"\n        [class.has-success]=\"mailForm.controls.content.dirty && mailForm.controls.content.valid\"\n        [class.has-feedback]=\"mailForm.controls.content.dirty\"\n        [class.has-error]=\"mailForm.controls.content.dirty && mailForm.controls.content.invalid\"\n      >\n        <textarea class=\"form-control\" rows=\"5\" placeholder=\"Message\" formControlName=\"content\"></textarea>\n\n        <span *ngIf=\"mailForm.controls.content.dirty && mailForm.controls.content.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"mailForm.controls.content.dirty && mailForm.controls.content.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/mails/mails-root/mails-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mails_service__ = __webpack_require__("../../../../../src/app/mails/mails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MailsRootComponent = (function () {
    function MailsRootComponent(modalService, route, router, mailsService, formBuilder, userService) {
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.mailsService = mailsService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.folders = [];
        this.mails = [];
        this.checkedMails = [];
        this.term = '';
    }
    MailsRootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mailForm = this.formBuilder.group({
            to: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].email],
            subject: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required],
            content: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* Validators */].required]
        });
        this.routeSubscribtion = this.route.queryParams.pluck('folder').subscribe(function (folder) {
            if (folder) {
                _this.selectedFolder = folder;
            }
        });
        this.foldersSubscribtion = this.mailsService.folders.subscribe(function (folders) {
            _this.folders = folders.sort(function (a, b) { return a.position - b.position; });
            if (!_this.selectedFolder && _this.folders.length) {
                _this.selectedFolder = _this.folders[0].name;
                _this.router.navigate(['mails'], { queryParams: { folder: _this.selectedFolder } });
            }
            _this.mailsService.getMails(_this.selectedFolder);
        });
        this.mailsService.getFolders();
        this.mailsSubscribtion = this.mailsService.mails.subscribe(function (mails) {
            _this.mails = mails.sort(function (a, b) { return Date.parse(b.createdAt) - Date.parse(a.createdAt); });
        });
        this.dataUsers = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]
            .create(function (observer) {
            observer.next(_this.mailForm.controls.to.value);
        })
            .mergeMap(function (term) { return _this.userService.getUsersAsObservable(term); });
    };
    MailsRootComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    MailsRootComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    MailsRootComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.value);
    };
    MailsRootComponent.prototype.ngOnDestroy = function () {
        this.foldersSubscribtion.unsubscribe();
        this.mailsSubscribtion.unsubscribe();
        this.routeSubscribtion.unsubscribe();
    };
    MailsRootComponent.prototype.selectFolder = function (folder) {
        this.checkedMails = [];
        this.selectedMail = null;
        this.selectedFolder = folder.name;
        this.mailsService.getMails(folder.name);
        this.router.navigate(['mails'], { queryParams: { folder: this.selectedFolder } });
    };
    MailsRootComponent.prototype.selectMail = function (mail) {
        this.selectedMail = mail;
        if (!this.selectedMail.read) {
            this.selectedMail.read = true;
            this.mailsService.setAsRead(mail);
        }
    };
    MailsRootComponent.prototype.checkMail = function (mail) {
        var index = this.checkedMails.indexOf(mail);
        if (this.checkedMails.includes(mail)) {
            this.checkedMails = this.checkedMails.filter(function (cmail) { return cmail !== mail; });
        }
        else {
            this.checkedMails = this.checkedMails.concat([mail]);
        }
    };
    MailsRootComponent.prototype.selectAll = function () {
        this.checkedMails = this.mails;
    };
    MailsRootComponent.prototype.unselectAll = function () {
        this.checkedMails = [];
    };
    MailsRootComponent.prototype.toggleAll = function () {
        var _this = this;
        if (this.mails.every(function (mail) { return _this.checkedMails.includes(mail); })) {
            this.unselectAll();
        }
        else {
            this.selectAll();
        }
    };
    MailsRootComponent.prototype.allIsChecked = function () {
        var _this = this;
        return (this.mails && this.mails.length) && this.mails.every(function (mail) { return _this.checkedMails.includes(mail); });
    };
    MailsRootComponent.prototype.markAsReadGroup = function (mails) {
        var _this = this;
        mails.forEach(function (mail) { return _this.markAsRead(mail); });
    };
    MailsRootComponent.prototype.markAsUnreadGroup = function (mails) {
        var _this = this;
        mails.forEach(function (mail) { return _this.markAsUnread(mail); });
    };
    MailsRootComponent.prototype.toggleSpam = function () {
        var _this = this;
        var mails = [];
        if (this.checkedMails.length) {
            mails = this.checkedMails;
        }
        else if (this.selectedMail) {
            mails = [this.selectedMail];
        }
        Promise
            .all(mails.map(function (mail) {
            if (mail === _this.selectedMail) {
                _this.selectedMail = null;
            }
            if (_this.selectedFolder === 'Spam') {
                return _this.mailsService.moveToInbox(mail);
            }
            return _this.mailsService.moveToSpam(mail);
        }))
            .then(function (res) {
            _this.mailsService.getMails(_this.selectedFolder);
        });
    };
    MailsRootComponent.prototype.moveToSpam = function () {
        var _this = this;
        var mails = [];
        if (this.checkedMails.length) {
            mails = this.checkedMails;
        }
        else if (this.selectedMail) {
            mails = [this.selectedMail];
        }
        Promise
            .all(mails.map(function (mail) {
            if (mail === _this.selectedMail) {
                _this.selectedMail = null;
            }
            return _this.mailsService.moveToSpam(mail);
        }))
            .then(function (res) {
            _this.mailsService.getMails(_this.selectedFolder);
        });
    };
    MailsRootComponent.prototype.moveToTrash = function () {
        var _this = this;
        var mails = [];
        if (this.checkedMails.length) {
            mails = this.checkedMails;
            this.checkedMails = [];
        }
        else if (this.selectedMail) {
            mails = [this.selectedMail];
        }
        Promise
            .all(mails.map(function (mail) {
            if (mail === _this.selectedMail) {
                _this.selectedMail = null;
            }
            if (_this.selectedFolder === 'Trash') {
                return _this.mailsService.moveToInbox(mail);
            }
            return _this.mailsService.moveToTrash(mail);
        }))
            .then(function (res) {
            _this.mailsService.getMails(_this.selectedFolder);
        });
    };
    MailsRootComponent.prototype.moveToInbox = function () {
        var _this = this;
        var mails = [];
        if (this.checkedMails.length) {
            mails = this.checkedMails;
            this.checkedMails = [];
        }
        else if (this.selectedMail) {
            mails = [this.selectedMail];
        }
        Promise
            .all(mails.map(function (mail) {
            if (mail === _this.selectedMail) {
                _this.selectedMail = null;
            }
            return _this.mailsService.moveToInbox(mail);
        }))
            .then(function (res) {
            _this.mailsService.getMails(_this.selectedFolder);
        });
    };
    MailsRootComponent.prototype.markAsRead = function (mail) {
        if (!mail.read) {
            mail.read = true;
            this.mailsService.setAsRead(mail);
        }
    };
    MailsRootComponent.prototype.markAsUnread = function (mail) {
        if (mail.read) {
            mail.read = false;
            this.mailsService.setAsUnread(mail);
        }
    };
    MailsRootComponent.prototype.sendMail = function () {
        var _this = this;
        if (this.mailForm.valid) {
            this.mailsService
                .sendMail({
                to: this.mailForm.controls.to.value,
                subject: this.mailForm.controls.subject.value,
                content: this.mailForm.controls.content.value,
                from: 'me'
            })
                .subscribe(function (res) {
                console.log(res);
                _this.modalRef.hide();
                _this.mailForm.reset();
                _this.mailsService.getMails(_this.selectedFolder);
            });
            this.userService.probablyNewUser(this.mailForm.controls.to.value);
        }
    };
    MailsRootComponent.prototype.openModalNewMail = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    return MailsRootComponent;
}());
MailsRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-mails-root',
        template: __webpack_require__("../../../../../src/app/mails/mails-root/mails-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mails/mails-root/mails-root.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mails_service__["a" /* MailsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_users_service__["a" /* UsersService */]) === "function" && _f || Object])
], MailsRootComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=mails-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/mails/mails.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mails_root_mails_root_component__ = __webpack_require__("../../../../../src/app/mails/mails-root/mails-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elapsed_pipe__ = __webpack_require__("../../../../../src/app/mails/elapsed.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__folders_list_folders_list_component__ = __webpack_require__("../../../../../src/app/mails/folders-list/folders-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mails_list_mails_list_component__ = __webpack_require__("../../../../../src/app/mails/mails-list/mails-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mails_service__ = __webpack_require__("../../../../../src/app/mails/mails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filter_pipe__ = __webpack_require__("../../../../../src/app/mails/filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MailsModule = (function () {
    function MailsModule() {
    }
    return MailsModule;
}());
MailsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__mails_service__["a" /* MailsService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__mails_root_mails_root_component__["a" /* MailsRootComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__mails_root_mails_root_component__["a" /* MailsRootComponent */],
            __WEBPACK_IMPORTED_MODULE_4__elapsed_pipe__["a" /* ElapsedPipe */],
            __WEBPACK_IMPORTED_MODULE_5__folders_list_folders_list_component__["a" /* FoldersListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mails_list_mails_list_component__["a" /* MailsListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__filter_pipe__["a" /* FilterPipe */]
        ]
    })
], MailsModule);

//# sourceMappingURL=mails.module.js.map

/***/ }),

/***/ "../../../../../src/app/mails/mails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pouchdb_find__ = __webpack_require__("../../../../pouchdb-find/lib/index-browser.es.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











__WEBPACK_IMPORTED_MODULE_9_pouchdb__["a" /* default */].plugin(__WEBPACK_IMPORTED_MODULE_10_pouchdb_find__["a" /* default */]);
var MailsService = (function () {
    function MailsService() {
        var _this = this;
        this._db = new __WEBPACK_IMPORTED_MODULE_9_pouchdb__["a" /* default */]('mails');
        this._folders = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._mails = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._db
            .createIndex({
            index: { fields: ['type'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'mail'
                }
            });
        })
            .then(function (res) {
            if (!res.docs.length) {
                _this._createFakeMails();
            }
        });
    }
    MailsService.prototype.sendMail = function (mail) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._db.put(__assign({ _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(), type: 'mail', folder: 'Sent Mails', read: true, createdAt: new Date('2015-09-20').toISOString() }, mail))
                .then(function (res) {
                observer.next(res);
                observer.complete();
            })
                .catch(function (error) {
                observer.error(error);
            });
        });
    };
    MailsService.prototype.getFolders = function () {
        var _this = this;
        this._db
            .createIndex({
            index: { fields: ['type'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'folder'
                }
            });
        })
            .then(function (res) {
            if (!res.docs.length) {
                return _this._createDefaultFolders();
            }
            return res.docs;
        })
            .then(function (folders) {
            _this._folders.next(folders.map(function (folder) {
                return {
                    id: folder._id,
                    name: folder.name,
                    position: folder.position,
                    require: folder.require
                };
            }));
        });
    };
    MailsService.prototype.getMails = function (folderName) {
        var _this = this;
        this._db
            .createIndex({
            index: { fields: ['type', 'folder'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'mail',
                    folder: folderName
                }
            });
        })
            .then(function (res) { return res.docs; })
            .then(function (mails) {
            _this._mails.next(mails.map(function (mail) {
                return {
                    id: mail._id,
                    to: mail.to,
                    from: mail.from,
                    subject: mail.subject,
                    content: mail.content,
                    createdAt: mail.createdAt,
                    read: mail.read,
                    folder: mail.folder
                };
            }));
        });
    };
    MailsService.prototype.setAsRead = function (mail) {
        var _this = this;
        this._db.get(mail.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { read: true }));
        })
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MailsService.prototype.setAsUnread = function (mail) {
        var _this = this;
        this._db.get(mail.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { read: false }));
        })
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MailsService.prototype.moveToSpam = function (mail) {
        var _this = this;
        return this._db.get(mail.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { folder: 'Spam' }));
        })
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(function (err) {
            console.log(err);
            return err;
        });
    };
    MailsService.prototype.moveToInbox = function (mail) {
        var _this = this;
        return this._db.get(mail.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { folder: 'Inbox' }));
        })
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(function (err) {
            console.log(err);
            return err;
        });
    };
    MailsService.prototype.moveToTrash = function (mail) {
        var _this = this;
        return this._db.get(mail.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { folder: 'Trash' }));
        })
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(function (err) {
            console.log(err);
            return err;
        });
    };
    Object.defineProperty(MailsService.prototype, "folders", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this._folders);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MailsService.prototype, "mails", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this._mails);
        },
        enumerable: true,
        configurable: true
    });
    MailsService.prototype._createDefaultFolders = function () {
        var _this = this;
        return this._db
            .bulkDocs([
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'folder',
                position: 0,
                name: 'Inbox',
                require: true
            },
            // {
            //   _id: uuid.v4(),
            //   type: 'folder',
            //   position: 1,
            //   name: 'Starred',
            //   require: true
            // },
            // {
            //   _id: uuid.v4(),
            //   type: 'folder',
            //   position: 2,
            //   name: 'Important',
            //   require: true
            // },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'folder',
                position: 3,
                name: 'Sent Mails',
                require: true
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'folder',
                position: 4,
                name: 'Spam',
                require: true
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'folder',
                position: 5,
                name: 'Trash',
                require: true
            }
        ])
            .then(function () {
            return _this._db
                .createIndex({
                index: { fields: ['type'] }
            })
                .then(function () {
                return _this._db.find({
                    selector: {
                        type: 'folder'
                    }
                });
            })
                .then(function (res) { return res.docs; });
        });
    };
    MailsService.prototype._createFakeMails = function () {
        this._db.bulkDocs([
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'mail',
                folder: 'Inbox',
                read: false,
                to: 'alexandr.lupa@gmail.com',
                from: 'andrew@gmail.com',
                subject: '1 Title of mail',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
                createdAt: new Date('2015-09-20').toISOString()
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'mail',
                folder: 'Inbox',
                read: false,
                to: 'alexandr.lupa@gmail.com',
                from: 'andrew@gmail.com',
                subject: '2 Title of mail',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
                createdAt: new Date('2016-01-02').toISOString()
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'mail',
                folder: 'Inbox',
                read: false,
                to: 'alexandr.lupa@gmail.com',
                from: 'andrew@gmail.com',
                subject: '3 Title of mail',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
                createdAt: new Date('2017-03-20').toISOString()
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_8_uuid___default.a.v4(),
                type: 'mail',
                folder: 'Inbox',
                read: false,
                to: 'alexandr.lupa@gmail.com',
                from: 'andrew@gmail.com',
                subject: '4 Title of mail',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique et quaerat porro perferendis tempore id velit dicta alias cumque ratione consequuntur maiores, eaque laborum dolore, enim ab magni unde molestiae.',
                createdAt: new Date('2017-07-23').toISOString()
            }
        ]);
    };
    return MailsService;
}());
MailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MailsService);

//# sourceMappingURL=mails.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-form {\n  margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"user-form\" [formGroup]=\"userForm\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\"\n        [class.has-success]=\"userForm.controls.firstName.dirty && userForm.controls.firstName.valid\"\n        [class.has-feedback]=\"userForm.controls.firstName.dirty\"\n        [class.has-error]=\"userForm.controls.firstName.dirty && userForm.controls.firstName.invalid\"\n      >\n        <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"firstName\">\n\n        <span *ngIf=\"userForm.controls.firstName.dirty && userForm.controls.firstName.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"userForm.controls.firstName.dirty && userForm.controls.firstName.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\"\n        [class.has-success]=\"userForm.controls.lastName.dirty && userForm.controls.lastName.valid\"\n        [class.has-feedback]=\"userForm.controls.lastName.dirty\"\n        [class.has-error]=\"userForm.controls.lastName.dirty && userForm.controls.lastName.invalid\"\n      >\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lastName\">\n\n        <span *ngIf=\"userForm.controls.lastName.dirty && userForm.controls.lastName.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"userForm.controls.lastName.dirty && userForm.controls.lastName.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"form-group\"\n        [class.has-success]=\"userForm.controls.email.dirty && userForm.controls.email.valid\"\n        [class.has-feedback]=\"userForm.controls.email.dirty\"\n        [class.has-error]=\"userForm.controls.email.dirty && userForm.controls.email.invalid\"\n      >\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n\n        <span *ngIf=\"userForm.controls.email.dirty && userForm.controls.email.valid\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n        <span *ngIf=\"userForm.controls.email.dirty && userForm.controls.email.invalid\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"goBack()\">Back</button>\n      <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"save()\">Save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/users/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_pluck__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, userService, formBuilder) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].maxLength(24)],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].maxLength(24)],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].email]
        });
        this.routeSubscribtion = this.route.params.pluck('userId').subscribe(function (userId) {
            _this.userId = userId;
            if (userId !== 'new') {
                _this.userService.getUser(userId).then(function (user) {
                    _this.user = user;
                    _this.userForm.controls.firstName.setValue(user.firstName);
                    _this.userForm.controls.lastName.setValue(user.lastName);
                    _this.userForm.controls.email.setValue(user.email);
                });
            }
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSubscribtion.unsubscribe();
    };
    UserDetailComponent.prototype.goBack = function () {
        this.router.navigate(['users']);
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        if (this.userForm.valid) {
            if (this.userId === 'new') {
                this.userService.add({
                    firstName: this.userForm.controls.firstName.value,
                    lastName: this.userForm.controls.lastName.value,
                    email: this.userForm.controls.email.value
                })
                    .then(function (res) {
                    _this.userId = res.id;
                });
            }
            else {
                this.userService.update(__assign({}, this.user, { firstName: this.userForm.controls.firstName.value, lastName: this.userForm.controls.lastName.value, email: this.userForm.controls.email.value }));
            }
        }
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object])
], UserDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-root/users-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users, .new-user-line {\n  margin-top: 20px;\n}\n\n.users .row > div {\n  padding: 8px;\n}\n\n.users-row:nth-child(even) {\n  background-color: #2e3338;\n}\n\n.users-row:nth-child(odd) {\n  background-color: #353a41;\n}\n\n@media (min-width: 768px) {\n  .users {\n    display: table;\n    width: 100%;\n  }\n  .users .row {\n    display: table-row;\n  }\n  .users .row > div {\n    border-top: 1px solid #1c1e22;\n    display: table-cell;\n    float: none;\n    vertical-align: middle;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-root/users-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row new-user-line\">\n  <div class=\"col-xs-12\">\n    <button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"addNewUser()\">Add New User</button>\n  </div>\n</div>\n\n<div class=\"users\">\n  <div class=\"row users-row\" *ngFor=\"let user of users\">\n    <div class=\"col-sm-3 col-xs-12\">{{ user.firstName }}</div>\n    <div class=\"col-sm-3 col-xs-12\">{{ user.lastName }}</div>\n    <div class=\"col-sm-3 col-xs-12\">{{ user.email }}</div>\n    <div class=\"col-sm-3 col-xs-12\">\n      <div class=\"btn-group pull-right\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"edit(user)\">Edit</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"remove(user)\">Remove</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users-root/users-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersRootComponent = (function () {
    function UsersRootComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.users = [];
    }
    UsersRootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersSubscribtion = this.userService.users.subscribe(function (users) {
            _this.users = users;
        });
        this.userService.getUsers();
    };
    UsersRootComponent.prototype.ngOnDestroy = function () {
        this.usersSubscribtion.unsubscribe();
    };
    UsersRootComponent.prototype.edit = function (user) {
        this.router.navigate(['users', user.id]);
    };
    UsersRootComponent.prototype.remove = function (user) {
        var _this = this;
        this.userService.remove(user).then(function () {
            _this.userService.getUsers();
        });
    };
    UsersRootComponent.prototype.addNewUser = function () {
        this.router.navigate(['users', 'new']);
    };
    return UsersRootComponent;
}());
UsersRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-user-root',
        template: __webpack_require__("../../../../../src/app/users/users-root/users-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-root/users-root.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]) === "function" && _c || Object])
], UsersRootComponent);

var _a, _b, _c;
//# sourceMappingURL=users-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_root_users_root_component__ = __webpack_require__("../../../../../src/app/users/users-root/users-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/users/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__users_root_users_root_component__["a" /* UsersRootComponent */],
            __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__["a" /* UserDetailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__users_service__["a" /* UsersService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__users_root_users_root_component__["a" /* UsersRootComponent */],
            __WEBPACK_IMPORTED_MODULE_3__user_detail_user_detail_component__["a" /* UserDetailComponent */]
        ]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pouchdb__ = __webpack_require__("../../../../pouchdb/lib/index-browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pouchdb_find__ = __webpack_require__("../../../../pouchdb-find/lib/index-browser.es.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








__WEBPACK_IMPORTED_MODULE_6_pouchdb__["a" /* default */].plugin(__WEBPACK_IMPORTED_MODULE_7_pouchdb_find__["a" /* default */]);
var UsersService = (function () {
    function UsersService() {
        this._db = new __WEBPACK_IMPORTED_MODULE_6_pouchdb__["a" /* default */]('users');
        this._users = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getUsers();
    }
    UsersService.prototype.getUsers = function () {
        var _this = this;
        return this._db
            .createIndex({
            index: { fields: ['type'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'user'
                }
            });
        })
            .then(function (res) {
            if (!res.docs.length) {
                return _this._createFakeUsers();
            }
            return res.docs;
        })
            .then(function (users) {
            _this._users.next(users.map(function (user) {
                return {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                };
            }));
            return _this._users;
        });
    };
    UsersService.prototype.getUser = function (userId) {
        return this._db.get(userId).then(function (res) {
            return {
                id: res._id,
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email
            };
        });
    };
    UsersService.prototype.remove = function (user) {
        var _this = this;
        return this._db.get(user.id).then(function (doc) {
            return _this._db.remove(doc._id, doc._rev);
        }).then(function (res) {
            console.log(res);
            return res;
        }).catch(function (err) {
            console.log(err);
            return err;
        });
    };
    UsersService.prototype.update = function (user) {
        var _this = this;
        return this._db.get(user.id).then(function (doc) {
            return _this._db.put(__assign({}, doc, { firstName: user.firstName, lastName: user.lastName, email: user.email }));
        }).then(function (res) {
            console.log(res);
            return res;
        }).catch(function (err) {
            console.log(err);
            return err;
        });
    };
    UsersService.prototype.add = function (user) {
        return this._db.put({
            _id: __WEBPACK_IMPORTED_MODULE_5_uuid___default.a.v4(),
            type: 'user',
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email
        })
            .then(function (res) {
            console.log(res);
            return res;
        }).catch(function (err) {
            console.log(err);
            return err;
        });
    };
    UsersService.prototype.probablyNewUser = function (email) {
        var _this = this;
        this._db
            .createIndex({
            index: { fields: ['type', 'email'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'user',
                    email: email
                }
            });
        })
            .then(function (res) {
            if (!res.docs.length) {
                _this.add({ firstName: '', lastName: '', email: email });
            }
        });
    };
    UsersService.prototype.getUsersAsObservable = function (token) {
        var _this = this;
        var query = new RegExp(token, 'ig');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(this._db
            .createIndex({
            index: { fields: ['type'] }
        })
            .then(function (res) {
            return _this._db.find({
                selector: {
                    type: 'user'
                }
            });
        })
            .then(function (res) {
            if (res.docs.length) {
                return res.docs.map(function (user) {
                    return user.email;
                });
            }
            return [];
        })
            .then(function (res) {
            return res.filter(function (user) {
                return query.test(user);
            });
        }));
    };
    Object.defineProperty(UsersService.prototype, "users", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(this._users);
        },
        enumerable: true,
        configurable: true
    });
    UsersService.prototype._createFakeUsers = function () {
        var _this = this;
        return this._db
            .bulkDocs([
            {
                _id: __WEBPACK_IMPORTED_MODULE_5_uuid___default.a.v4(),
                type: 'user',
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com'
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_5_uuid___default.a.v4(),
                type: 'user',
                email: 'vova@gmail.com'
            },
            {
                _id: __WEBPACK_IMPORTED_MODULE_5_uuid___default.a.v4(),
                type: 'user',
                email: 'ben1958@m.su'
            }
        ])
            .then(function () {
            return _this._db
                .createIndex({
                index: { fields: ['type'] }
            })
                .then(function () {
                return _this._db.find({
                    selector: {
                        type: 'user'
                    }
                });
            })
                .then(function (res) { return res.docs; });
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map