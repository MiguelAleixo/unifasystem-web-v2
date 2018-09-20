(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_error_error_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/error.routes */ "./src/app/views/error/error.routes.ts");
/* harmony import */ var _views_auth_auth_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/auth/auth.routes */ "./src/app/views/auth/auth.routes.ts");
/* harmony import */ var _views_main_main_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.routes */ "./src/app/views/main/main.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = _views_auth_auth_routes__WEBPACK_IMPORTED_MODULE_3__["AUTH_ROUTES"].concat(_views_main_main_routes__WEBPACK_IMPORTED_MODULE_4__["MAIN_ROUTES"], _views_error_error_routes__WEBPACK_IMPORTED_MODULE_2__["ERROR_ROUTES"]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ui-snackbar-container></ui-snackbar-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _views_error_error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/error/error.module */ "./src/app/views/error/error.module.ts");
/* harmony import */ var _views_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.module */ "./src/app/views/main/main.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/auth/auth.module */ "./src/app/views/auth/auth.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _views_error_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"],
                _views_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
                _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/api/api-response.ts":
/*!******************************************!*\
  !*** ./src/app/core/api/api-response.ts ***!
  \******************************************/
/*! exports provided: ApiReponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiReponse", function() { return ApiReponse; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");



var ApiReponse = /** @class */ (function () {
    function ApiReponse() {
    }
    ApiReponse.extractData = function (res, callback, cleanResult) {
        if (!callback) {
            return;
        }
        if (cleanResult) {
            callback(res);
        }
        if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response && !cleanResult) {
            callback(res.body);
        }
    };
    ApiReponse.handleError = function (res, callback, cleanError) {
        if (callback) {
            callback(res);
        }
        if (cleanError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res);
        }
        switch (res.status) {
            case 0:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Um de nossos servi\u00E7os est\u00E1 fora do ar e n\u00E3o foi poss\u00EDvel processar sua requisi\u00E7\u00E3o. Tente novamente mais tarde.",
                    actionText: 'OK',
                    action: function (close) { return close(); },
                    duration: 1000
                });
                break;
            case 400:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Requisi\u00E7\u00E3o inv\u00E1lida. Verifique as informa\u00E7\u00F5es fornecidas.",
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                break;
            case 409:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: res.error.message,
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                break;
            case 500:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Ocorreu um erro interno. J\u00E1 fomos informados do erro. Tente novamente mais tarde.",
                    actionText: 'OK',
                    action: function (close) { return close(); },
                    duration: 1000
                });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res);
    };
    return ApiReponse;
}());



/***/ }),

/***/ "./src/app/core/api/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-response */ "./src/app/core/api/api-response.ts");
/* harmony import */ var _utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API;
var OPTIONS;
var DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    /**
     * Atribui o valor dos métodos e dos headers no serviço
     * @param methods {object} - Métodos retornados da API
     * @param options {object} - Opções do menu
     * @return {void}
    **/
    ApiService.prototype.set = function (methods, options) {
        API = methods;
        OPTIONS = options;
    };
    /**
     * Configura uma requisão através dos métodos retornados da API
     * @param api {string} - API que será chamada
     * @param funcionalidade {string} - Funcionalidade que será chamada
     * @param metodo {string} - Método que será chamado
     * @param options {object} - Opções adicionais para requisição
     * @return Function
     **/
    ApiService.prototype.prep = function (api, funcionalidade, metodo, options) {
        if (options === void 0) { options = {}; }
        if (api && !funcionalidade) {
            return API[api];
        }
        if (api && funcionalidade && !metodo) {
            return API[api][funcionalidade];
        }
        var method = API[api][funcionalidade][metodo];
        if (method) {
            // Retornando todas as APIs que tem url
            var option = OPTIONS.filter(function (item) {
                return item.url ? item.url.replace('/', '') : item.url === location.pathname.replace('/', '');
            });
            var idOption_1 = '';
            // Encontrando a opção da página atual
            option.map(function (item) {
                if (location.pathname.substring(1).indexOf(item.url.substring(1)) !== -1) {
                    idOption_1 = item.id;
                }
            });
            options.headers = __assign({}, DEFAULT_HEADERS, options.headers, {
                'Option': idOption_1,
                'Authentication': _utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"].getToken()
            });
            return {
                call: this.request(method.method, method.url, options)
            };
        }
        throw { message: 'Método não encontrado' };
    };
    /**
     * Configura um requisição HTTP
     * @param method {string} - Tipo da requisição
     * @param url {string} - Url da API que será chamada
     * @param options {object} - Opções adicionais para requisição
     * Os parâmetros tipos reais dos parâmetros podem ser encontrados no arquivo irmão(api-request.ts)
     * @return function
     **/
    ApiService.prototype.http = function (method, url, options) {
        if (options === void 0) { options = {}; }
        return {
            call: this.request(method, url, options)
        };
    };
    /**
     * Efetua a requisição em uma API
     * @param method {string} - Tipo da requisição
     * @param url {string} - Url da API que será chamada
     * @param options {object} - Opções adicionais para requisição
     * @return function
     **/
    ApiService.prototype.request = function (method, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return function (data) {
            if (data) {
                var paramsFormatted = _this.formatParams(url, data);
                url = paramsFormatted.url;
                var methodFormatted = method.toUpperCase();
                if (methodFormatted === 'GET' || methodFormatted === 'DELETE') {
                    options.params = paramsFormatted.leftover;
                }
                else {
                    options.body = paramsFormatted.leftover;
                }
            }
            // url = url.replace('7.37', '10.203');
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: options.params
            });
            var headers = __assign({}, DEFAULT_HEADERS, options.headers);
            var httpOptions = {};
            Object.assign(httpOptions, options);
            httpOptions.headers = _this.generateHeaders(headers);
            httpOptions.params = params;
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, url, httpOptions.body, httpOptions);
            return {
                subscribe: function (next, error, complete) {
                    return _this._http
                        .request(request)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _api_response__WEBPACK_IMPORTED_MODULE_3__["ApiReponse"].extractData(res, next, options.cleanResult); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _api_response__WEBPACK_IMPORTED_MODULE_3__["ApiReponse"].handleError(res, error, options.cleanError); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(complete))
                        .subscribe();
                }
            };
        };
    };
    /**
     * Constroi os Headers de uma requisição
     * @param headers {object} - Headers a serem incluidos na requisição
     * @return {HttpHeaders}
     **/
    ApiService.prototype.generateHeaders = function (headers) {
        var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        Object.keys(headers).map(function (key) {
            newHeaders = newHeaders.set(key, headers[key]);
        });
        return newHeaders;
    };
    /**
     * Insere os parâmetros na url e retornando a url final e o restante dos valores
     * @param url {string} - Url a ser formatada
     * @param params - Parâmetros, Query Strings e Body da requisição
     * @return {object}
     **/
    ApiService.prototype.formatParams = function (url, params) {
        var data = Object.assign({}, params);
        url = url.split('/');
        Object.keys(data).forEach(function (key) {
            var indexOf = url.indexOf(":" + key);
            if (indexOf !== -1) {
                url[indexOf] = data[key];
                delete data[key];
            }
        });
        return {
            url: url.join('/'),
            leftover: data
        };
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/utils/list.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/utils/list.service.ts ***!
  \********************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
var ListService = /** @class */ (function () {
    function ListService() {
        this.length = 0;
        this.head = null;
    }
    ListService.prototype.node = function (element) {
        return {
            element: element,
            next: null,
        };
    };
    ;
    ListService.prototype.append = function (element) {
        var node = this.node(element);
        var current;
        if (!this.head) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return true;
    };
    ListService.prototype.appendFront = function (element) {
        var node = this.node(element);
        if (!this.head) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return true;
    };
    ListService.prototype.insert = function (position, element) {
        if (position >= 0 && position <= this.length) {
            var node = this.node(element);
            var current = this.head;
            var previous = void 0;
            var index = 0;
            if (position === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        else {
            console.error('Posição inexistente');
            return false;
        }
    };
    ListService.prototype.remove = function (position) {
        if (position >= 0 && position <= this.length) {
            if (position === 0) {
                this.head = this.head.next;
            }
            else {
                var current = this.head;
                var previous = void 0;
                var index = 0;
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return true;
        }
        return false;
    };
    ListService.prototype.removeLast = function () {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
            }
            else {
                var current = this.head;
                var previous = void 0;
                while (current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return true;
        }
        return false;
    };
    ListService.prototype.removeFirst = function () {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
            }
            else {
                this.head = this.head.next;
            }
            this.length--;
            return true;
        }
        return false;
    };
    ListService.prototype.indexOf = function (element) {
        var current;
        var index = 0;
        if (this.head.element === element) {
            return index;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
                index++;
                if (current.element === element) {
                    return index;
                }
            }
            return -1;
        }
    };
    ListService.prototype.contains = function (key, value) {
        var index = 0;
        if (this.head.element[key] == value) {
            return {
                element: this.head.element,
                index: index
            };
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
                index++;
                if (current.element[key] == value) {
                    return {
                        element: current.element,
                        index: index
                    };
                }
            }
        }
        console.error('Nada foi encontrado');
        return null;
    };
    ListService.prototype.size = function () {
        return this.length;
    };
    ListService.prototype.setSize = function () {
        this.length = 1;
        var current = this.head;
        while (current.next) {
            this.length++;
            current = current.next;
        }
    };
    ListService.prototype.getHead = function () {
        return this.head;
    };
    ListService.prototype.setHead = function (newHead) {
        this.head = newHead;
    };
    return ListService;
}());



/***/ }),

/***/ "./src/app/core/utils/storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/utils/storage.service.ts ***!
  \***********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setNewItem = function (key, value) {
        window.localStorage.setItem(key, value);
    };
    StorageService.prototype.getItem = function (key) {
        if (window.localStorage[key]) {
            return window.localStorage.getItem(key);
        }
        console.error('Chave não encontrada');
        return null;
    };
    StorageService.prototype.removeItem = function (key) {
        if (this.getItem(key)) {
            window.localStorage.removeItem(key);
            return true;
        }
        console.error('Chave não encontrada');
        return false;
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/core/utils/user/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/utils/user/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var user = {};
var token;
var menu;
var COOKIE_NAME = {
    authentication: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SYSTEM_PREFIX + "Authentication",
    keepConnect: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SYSTEM_PREFIX + "KeepConnect"
};
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.get = function () {
        return {
            user: user,
            token: token
        };
    };
    UserService.getUser = function () {
        return user;
    };
    UserService.setUser = function (newUser) {
        user = newUser;
    };
    UserService.setMenu = function (newMenu) {
        menu = newMenu;
    };
    UserService.getMenu = function () {
        return menu;
    };
    UserService.getToken = function () {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.authentication);
    };
    UserService.setToken = function (newToken, keepConnect) {
        token = newToken;
        this.setCookie(token, keepConnect);
    };
    UserService.getCookie = function () {
        return {
            authentication: ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.authentication),
            keepConnect: ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.keepConnect)
        };
    };
    UserService.setCookie = function (token, keepConnect) {
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].set(COOKIE_NAME.keepConnect, keepConnect, keepConnect ? 365 : null, '/');
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].set(COOKIE_NAME.authentication, token, keepConnect ? 365 : null, '/');
    };
    UserService.remove = function () {
        user = null;
        token = null;
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].delete(COOKIE_NAME.keepConnect);
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].delete(COOKIE_NAME.authentication);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _views_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/auth/guard/auth.guard */ "./src/app/views/auth/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["SMNUIModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"], _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _views_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.module */ "./src/app/views/auth/login/login.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"]
            ],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.routes.ts ***!
  \*******************************************/
/*! exports provided: AUTH_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ROUTES", function() { return AUTH_ROUTES; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");

var AUTH_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/views/auth/guard/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/views/auth/guard/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, api) {
        this.router = router;
        this.api = api;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var usuario = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getUser();
        if (usuario.id) {
            return true;
        }
        else {
            return this.remakeLogin();
        }
    };
    AuthGuard.prototype.remakeLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cookies = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getCookie();
            if (cookies.authentication) {
                var headers = {
                    'Content-Type': 'application/json',
                    'Authentication': cookies.authentication
                };
                _this.api
                    .http('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].AUTH_API + "/login/refazer", { headers: headers })
                    .call()
                    .subscribe(function (res) {
                    var content = res.content;
                    _this.api.set(content.api, content.user.opcoes);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setToken(content.token, !!cookies.keepConnect);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setMenu(content.user.opcoes);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setUser(content.user);
                    resolve(true);
                }, function (res) {
                    _this.handleError(res);
                    resolve(false);
                });
            }
            else {
                _this.handleError({ status: 401 });
                resolve(false);
            }
        });
    };
    AuthGuard.prototype.handleError = function (res) {
        switch (res.status) {
            case 401:
                var text = void 0;
                switch (res.executionCode) {
                    case 2:
                        text = 'Parece que sua senha está incorreta, tente refazer o login';
                        break;
                    case 3:
                        text = 'Seu usuário está bloqueado';
                        break;
                    case 4:
                        text = 'Sua senha expirou, tente refazer o login';
                        break;
                    case 5:
                        text = 'Você está bloqueado à acessar neste horário';
                        break;
                    default:
                        text = 'Seu login expirou. Refaça o login novamente';
                        break;
                }
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: text,
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                this.router.navigate(['/login']);
                break;
            case 403:
                this.router.navigate(['/forbidden']);
                break;
            case 404:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Não conseguimos encontrar seu usuário, tente refazer o login',
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                this.router.navigate(['/login']);
                break;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"core\">\r\n    <div class=\"logo\">\r\n        <!-- <img src=\"assets/images/logotipo-transparente.png\" alt=\"Cronos logo\" title=\"Cronos logo\" style=\"margin-left: -16px\"> -->\r\n    </div>\r\n    <ui-card>\r\n        <div class=\"ui-progress accent\" [class.hide]=\"!loading\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-tabs-pages #tabsPages>\r\n            <div class=\"page pre-info\">\r\n                <form #preLoginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"getInfo(preLoginForm, preLogin)\">\r\n                    <ui-card-title>Inicie sua sessão</ui-card-title>\r\n                    <ui-card-content>\r\n                        <ui-input-container>\r\n                            <input [type]=\"authByEmail ? 'email' : 'text'\"\r\n                                   name=\"usuario\"\r\n                                   [(ngModel)]=\"preLogin.usuario\"\r\n                                   uiInput\r\n                                   required\r\n                                   #preLoginUsuario=\"ngModel\"\r\n                                   [pattern]=\"authByEmail ? '[a-z0-9!#$%&\\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\\\.[a-z0-9-]+)*' : null\"\r\n                                   id=\"pre-login-usuario\"\r\n                                   class=\"accent\"\r\n                                   autofocus>\r\n                            <label for=\"pre-login-usuario\">{{authByEmail ? 'E-mail' : 'Usuário'}}</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"preLoginUsuario.errors && preLoginUsuario.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.pristine && !preLoginUsuario.errors.required\">\r\n                                        Use seu {{authByEmail ? 'e-mail' : 'nome de usuário'}}\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.errors.pattern\">\r\n                                        Use um e-mail válido\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.errors.notFound\">\r\n                                        Este {{authByEmail ? 'e-mail' : 'nome de usuário'}} não existe\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </ui-card-content>\r\n                    <div class=\"ui-button-container cover\">\r\n                        <button class=\"ui-button accent full\" uiRipple>Próximo</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"page\">\r\n                <form #loginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"login(loginForm, info)\">\r\n                    <fieldset>\r\n                        <ui-toolbar class=\"flat\">\r\n                            <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"backToLogin()\">\r\n                                <i class=\"material-icons\">arrow_back</i>\r\n                            </button>\r\n                        </ui-toolbar>\r\n                        <ul class=\"ui-list no-active\" [class.multi-line]=\"authByEmail\" style=\"padding: 0\">\r\n                            <li>\r\n                                <div class=\"avatar\"\r\n                                     [ngStyle]=\"{'background-image': info.imagem ? 'url(' + info.imagem + ')' : '',\r\n                                                 'background-color': info.imagem ? 'white' : info.cor,\r\n                                                 'color': isBright(info.cor) ? 'black': 'white'}\">\r\n                                    <span *ngIf=\"info && !info.imagem && info.nome\">{{info.nome.charAt(0)}}</span>\r\n                                </div>\r\n                                <div class=\"primary\" *ngIf=\"!authByEmail\">{{info.nome}}</div>\r\n                                <div class=\"lines\" *ngIf=\"authByEmail\">\r\n                                    <div class=\"primary\">{{info.nome}}</div>\r\n                                    <div class=\"secondary\">{{info.email}}</div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <ui-card-content>\r\n                            <ui-input-container>\r\n                                <input [type]=\"typeText ? 'text' : 'password'\"\r\n                                       [(ngModel)]=\"info.senha\"\r\n                                       uiInput\r\n                                       required\r\n                                       name=\"senha\"\r\n                                       #loginSenha=\"ngModel\"\r\n                                       id=\"login-senha\"\r\n                                       class=\"accent\">\r\n                                <label>Senha</label>\r\n                                <div class=\"suffix ui-button flat icon\" (click)=\"typeText = !typeText\" uiRipple>\r\n                                    <i class=\"material-icons light\">{{typeText ? 'visibility_off' : 'visibility'}}</i>\r\n                                </div>\r\n                                <div class=\"ui-messages\">\r\n                                    <div *ngIf=\"loginSenha.errors && loginSenha.dirty\">\r\n                                        <div class=\"ui-message error\" [hidden]=\"!loginSenha.pristine && !loginSenha.errors.required\">\r\n                                            Insira uma senha\r\n                                        </div>\r\n                                        <div class=\"ui-message error\" [hidden]=\"!loginSenha.errors.wrongPassword\">\r\n                                            Senha incorreta\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"ui-message counter\">\r\n                                        Esqueci minha senha\r\n                                    </div>\r\n                                </div>\r\n                            </ui-input-container>\r\n                            <ui-option class=\"primary\" style=\"margin-top: 16px\">\r\n                                <input type=\"checkbox\"\r\n                                       [checked]=\"info.matenhaConectado\"\r\n                                       (change)=\"info.matenhaConectado = $event.target.checked\">\r\n                                <span>Manter conectado</span>\r\n                            </ui-option>\r\n                        </ui-card-content>\r\n                        <div class=\"ui-button-container cover\">\r\n                            <button class=\"ui-button accent full\" uiRipple>Login</button>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"page bloqueado\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <ui-card-content>\r\n                    <div>{{info.nome}}, seu usuário está bloqueado.</div>\r\n                </ui-card-content>\r\n            </div>\r\n            <div class=\"page bloqueado-por-horario\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <ui-card-content>\r\n                    <div>{{info.nome}}, você está bloqueado à acessar neste horário.</div>\r\n                </ui-card-content>\r\n            </div>\r\n            <div class=\"page senha-expirada\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <form #senhaExpiradaForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"redefinirSenha(senhaExpiradaForm, senhaExpirada)\">\r\n                    <ui-card-content>\r\n                        <div class=\"info-text secondary-text\">{{senhaExpirada.nome}}, por motivos de segurança expiramos sua senha. Por favor crie uma nova.</div>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextSenhaAntiga ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.senha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"senhaAntiga\"\r\n                                   #senhaExpiradaAntiga=\"ngModel\"\r\n                                   id=\"senha-antiga\"\r\n                                   class=\"accent\">\r\n                            <label>Senha antiga</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextSenhaAntiga = !senhaExpirada.typeTextSenhaAntiga\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextSenhaAntiga ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaAntiga.errors && senhaExpiradaAntiga.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaAntiga.pristine && !senhaExpiradaAntiga.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaAntiga.errors.wrongPassword\">\r\n                                        Senha incorreta\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextNovaSenha ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.novaSenha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"novaSenha\"\r\n                                   #senhaExpiradaNovaSenha=\"ngModel\"\r\n                                   (ngModelChange)=\"validarSenhasDivergentes(senhaExpiradaForm)\"\r\n                                   id=\"nova-senha\"\r\n                                   class=\"accent\">\r\n                            <label>Nova senha</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextNovaSenha = !senhaExpirada.typeTextNovaSenha\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextNovaSenha ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaNovaSenha.errors && senhaExpiradaNovaSenha.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaNovaSenha.pristine && !senhaExpiradaNovaSenha.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextConfirmacaoNovaSenha ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.confirmacaoNovaSenha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"confirmacaoSenha\"\r\n                                   #senhaExpiradaConfirmacaoNovaSenha=\"ngModel\"\r\n                                   (ngModelChange)=\"validarSenhasDivergentes(senhaExpiradaForm)\"\r\n                                   id=\"confirmacao-nova-senha\"\r\n                                   class=\"accent\">\r\n                            <label>Confirmação de senha</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextConfirmacaoNovaSenha = !senhaExpirada.typeTextConfirmacaoNovaSenha\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextConfirmacaoNovaSenha ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaConfirmacaoNovaSenha.errors && senhaExpiradaConfirmacaoNovaSenha.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaConfirmacaoNovaSenha.pristine && !senhaExpiradaConfirmacaoNovaSenha.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaConfirmacaoNovaSenha.errors.notEqual\">\r\n                                        As senhas não conferem\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </ui-card-content>\r\n                    <div class=\"ui-button-container cover\">\r\n                        <button class=\"ui-button accent full\" uiRipple>Redefinir senha</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </ui-tabs-pages>\r\n    </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/deep/ app-root, :host {\n  height: 100%; }\n:host {\n  background: url(\"/assets/images/login-background.jpg\") center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host > .core {\n    max-width: 420px;\n    width: 100%; }\n:host > .core .logo {\n      width: 280px; }\n:host > .core ui-card {\n      position: relative;\n      overflow: hidden; }\n:host > .core ui-card .ui-progress {\n        position: absolute; }\n:host > .core ui-card ui-card-title {\n        font-size: 18px;\n        padding: 32px 32px 0; }\n:host > .core ui-card .ui-list li {\n        padding: 0 24px; }\n:host > .core ui-card ui-card-content {\n        padding: 32px; }\n:host > .core ui-card .ui-button-container {\n        padding: 0 32px 32px; }\n:host > .core ui-card .senha-expirada ui-card-content, :host > .core ui-card .bloqueado ui-card-content, :host > .core ui-card .bloqueado-por-horario ui-card-content {\n        padding-top: 16px; }\n:host > .core ui-card .senha-expirada .info-text, :host > .core ui-card .bloqueado .info-text, :host > .core ui-card .bloqueado-por-horario .info-text {\n        margin-bottom: 24px; }\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(titleService, router, element, api) {
        this.titleService = titleService;
        this.router = router;
        this.element = element;
        this.api = api;
        this.preLogin = {};
        this.info = {
            matenhaConectado: true
        };
        this.senhaExpirada = {};
        this.authByEmail = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_BY_EMAIL;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.headers = { 'Content-Type': 'application/json' };
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Cronos - Login');
    };
    LoginComponent.prototype.isBright = function (color) {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiColor"].isBright(color);
    };
    LoginComponent.prototype.getInfo = function (form, info) {
        var _this = this;
        console.log(info);
        if (form.invalid || this.loading) {
            form.controls.usuario.markAsTouched();
            form.controls.usuario.markAsDirty();
            this.focusElement('#pre-login-usuario');
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login/dados", { headers: this.headers })
            .call({ login: info.usuario })
            .subscribe(function (res) {
            res.content.user = Object.assign(res.content.user, {
                usuario: info.usuario,
                matenhaConectado: true
            });
            _this.info = res.content.user;
            _this.tabsPages.pagesGoToPage(2);
            _this.focusElement('#login-senha', true);
            _this.loginForm.reset();
        }, function (res) {
            switch (res._status) {
                case 404:
                    form.controls.usuario.setErrors({ notFound: true });
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.login = function (form, info) {
        var _this = this;
        var elementPassword = this.element.nativeElement.querySelector('#login-senha');
        if (form.invalid || this.loading) {
            form.controls.senha.markAsTouched();
            form.controls.senha.markAsDirty();
            elementPassword.focus();
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login", { headers: this.headers })
            .call({ login: info.usuario, senha: info.senha })
            .subscribe(function (res) {
            var content = res.content;
            _this.api.set(content.api, content.opcoes);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setToken(content.token, info.matenhaConectado);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setMenu(content.user.opcoes);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setUser(content.user);
            _this.router.navigate(['/']);
        }, function (res) {
            switch (res.status) {
                case 401:
                    switch (res.error.executionCode) {
                        case 2:
                            form.controls.senha.setErrors({ wrongPassword: true });
                            elementPassword.focus();
                            break;
                        case 3:
                            _this.tabsPages.pagesGoToPage(3);
                            form.reset();
                            break;
                        case 4:
                            _this.senhaExpirada = Object.assign({}, info);
                            delete _this.senhaExpirada.senha;
                            _this.focusElement('#senha-antiga', true);
                            _this.tabsPages.pagesGoToPage(5);
                            form.reset();
                            break;
                        case 5:
                            _this.tabsPages.pagesGoToPage(4);
                            form.reset();
                            break;
                    }
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.redefinirSenha = function (form, info) {
        var _this = this;
        if (form.invalid || this.loading) {
            ['senhaAntiga', 'novaSenha', 'confirmacaoSenha'].forEach(function (field) {
                form.controls[field].markAsTouched();
                form.controls[field].markAsDirty();
            });
            this.element.nativeElement.querySelector('.senha-expirada input.ng-invalid').focus();
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login/alterar-senha", { headers: this.headers })
            .call({
            login: info.usuario,
            senha: info.senha,
            novaSenha: info.novaSenha,
            confirmacaoNovaSenha: info.confirmacaoNovaSenha,
        })
            .subscribe(function (res) {
            _this.tabsPages.pagesGoToPage(2);
            setTimeout(function () {
                _this.senhaExpirada = {};
                form.reset();
            }, 280);
        }, function (res) {
            switch (res._status) {
                case 400:
                    _this.validarSenhasDivergentes(form);
                    break;
                case 401:
                    form.controls.senhaAntiga.setErrors({ wrongPassword: true });
                    _this.focusElement('#senha-antiga');
                    break;
                case 404:
                    ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                        text: 'Não conseguimos encontrar seu usuário',
                        actionText: 'Refazer login',
                        action: function (close) {
                            _this.tabsPages.pagesGoToPage(1);
                            form.reset();
                            close();
                        }
                    });
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.validarSenhasDivergentes = function (form) {
        if (this.senhaExpirada.novaSenha !== this.senhaExpirada.confirmacaoNovaSenha) {
            setTimeout(function () { return form.controls.confirmacaoSenha.setErrors({ notEqual: true }); });
        }
    };
    LoginComponent.prototype.focusElement = function (selector, withDelay) {
        var _this = this;
        setTimeout(function () {
            _this.element.nativeElement.querySelector(selector).focus();
        }, withDelay ? 280 : 0);
    };
    LoginComponent.prototype.backToLogin = function () {
        this.tabsPages.pagesGoToPage(1);
        this.focusElement('#pre-login-usuario');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabsPages'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "tabsPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginForm'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/views/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.module */ "./src/app/views/error/not-found/not-found.module.ts");
/* harmony import */ var _internal_internal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/internal.module */ "./src/app/views/error/internal/internal.module.ts");
/* harmony import */ var _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbidden/forbidden.module */ "./src/app/views/error/forbidden/forbidden.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundModule"],
                _internal_internal_module__WEBPACK_IMPORTED_MODULE_2__["InternalModule"],
                _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_3__["ForbiddenModule"]
            ],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/views/error/error.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/views/error/error.routes.ts ***!
  \*********************************************/
/*! exports provided: ERROR_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_ROUTES", function() { return ERROR_ROUTES; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");
/* harmony import */ var _internal_internal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/internal.component */ "./src/app/views/error/internal/internal.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/views/error/forbidden/forbidden.component.ts");



var ERROR_ROUTES = [
    { path: 'internal', component: _internal_internal_component__WEBPACK_IMPORTED_MODULE_1__["InternalComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__["ForbiddenComponent"] },
    { path: '**', redirectTo: 'not-found' }
];


/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Forbidden error</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.ts ***!
  \**************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/views/error/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/views/error/forbidden/forbidden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.module.ts ***!
  \***********************************************************/
/*! exports provided: ForbiddenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function() { return ForbiddenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/views/error/forbidden/forbidden.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForbiddenModule = /** @class */ (function () {
    function ForbiddenModule() {
    }
    ForbiddenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_forbidden_component__WEBPACK_IMPORTED_MODULE_1__["ForbiddenComponent"]],
            providers: [],
        })
    ], ForbiddenModule);
    return ForbiddenModule;
}());



/***/ }),

/***/ "./src/app/views/error/internal/internal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Internal error</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/internal/internal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/internal/internal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.ts ***!
  \************************************************************/
/*! exports provided: InternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalComponent", function() { return InternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternalComponent = /** @class */ (function () {
    function InternalComponent() {
    }
    InternalComponent.prototype.ngOnInit = function () {
    };
    InternalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internal',
            template: __webpack_require__(/*! ./internal.component.html */ "./src/app/views/error/internal/internal.component.html"),
            styles: [__webpack_require__(/*! ./internal.component.scss */ "./src/app/views/error/internal/internal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InternalComponent);
    return InternalComponent;
}());



/***/ }),

/***/ "./src/app/views/error/internal/internal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/error/internal/internal.module.ts ***!
  \*********************************************************/
/*! exports provided: InternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalModule", function() { return InternalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _internal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.component */ "./src/app/views/error/internal/internal.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InternalModule = /** @class */ (function () {
    function InternalModule() {
    }
    InternalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_internal_component__WEBPACK_IMPORTED_MODULE_1__["InternalComponent"]],
            providers: [],
        })
    ], InternalModule);
    return InternalModule;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Error 404</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/error/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/views/error/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.module.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]],
            providers: [],
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "./src/app/views/main/aluno/aluno.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/main/aluno/aluno.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/main/aluno/aluno.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/main/aluno/aluno.component.ts ***!
  \*****************************************************/
/*! exports provided: AlunoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoComponent", function() { return AlunoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoComponent = /** @class */ (function () {
    function AlunoComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    AlunoComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Alunos');
        this.toolbarService.set('Alunos');
    };
    AlunoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aluno-component',
            template: __webpack_require__(/*! ./aluno.component.html */ "./src/app/views/main/aluno/aluno.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"]])
    ], AlunoComponent);
    return AlunoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/aluno/aluno.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/main/aluno/aluno.module.ts ***!
  \**************************************************/
/*! exports provided: AlunoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoModule", function() { return AlunoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _aluno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aluno.component */ "./src/app/views/main/aluno/aluno.component.ts");
/* harmony import */ var _list_aluno_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/aluno-list.component */ "./src/app/views/main/aluno/list/aluno-list.component.ts");
/* harmony import */ var _info_aluno_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/aluno-info.component */ "./src/app/views/main/aluno/info/aluno-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlunoModule = /** @class */ (function () {
    function AlunoModule() {
    }
    AlunoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [],
            declarations: [_aluno_component__WEBPACK_IMPORTED_MODULE_2__["AlunoComponent"], _list_aluno_list_component__WEBPACK_IMPORTED_MODULE_3__["AlunoListComponent"], _info_aluno_info_component__WEBPACK_IMPORTED_MODULE_4__["AlunoInfoComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AlunoModule);
    return AlunoModule;
}());



/***/ }),

/***/ "./src/app/views/main/aluno/info/aluno-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/aluno/info/aluno-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s600\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" uiRipple (click)=\"router.navigate(['aluno'])\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n            <span class=\"title\">{{addingNew ? 'Novo aluno' : 'Alterando ' + (info.nome || 'aluno')}}</span>\r\n            <div class=\"align-right\">\r\n                <button *ngIf=\"!addingNew\" class=\"ui-button flat icon\" type=\"button\" uiRipple [uiMenuTrigger]=\"menuDelete\" align=\"right\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n\r\n        <ui-card-content>\r\n            <form #formAluno=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formAluno)\">\r\n                <div class=\"ui-flex-container breake-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoCodigo=\"ngModel\" type=\"text\" [(ngModel)]=\"info.codigo\" name=\"campoCodigo\" uiInput required readonly>\r\n                        <label>Código do aluno</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCodigo.errors && campoCodigo.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCodigo.pristine && !campoCodigo.errors.required\">Código é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCodigo.errors.parse\">Informe um código válido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input #campoCpf=\"ngModel\" type=\"text\" [(ngModel)]=\"info.cpf\" name=\"campoCpf\" (blur)=\"verificaCpf(info.cpf)\" uiInput required\r\n                            uiMaskCpf>\r\n                        <label>CPF</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCpf.errors && campoCpf.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCpf.pristine && !campoCpf.errors.required\">CPF é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCpf.errors.parse\">Informe um CPF válido\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCpf.errors.cpfExistente\">CPF já cadastrado\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                </div>\r\n\r\n                <ui-input-container>\r\n                    <input #campoNome=\"ngModel\" type=\"text\" [(ngModel)]=\"info.nome\" name=\"campoNome\" uiInput required uiMaxlength=\"70\">\r\n                    <label>Nome</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoNome.errors && campoNome.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.pristine && !campoNome.errors.required\">Nome é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.errors.uiMaxlength\">Nome não pode conter mais de 70 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.nome && info.nome.length > 70}\">\r\n                            {{info.nome ? info.nome.length : 0}}/70\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <input #campoEmail=\"ngModel\" type=\"text\" [(ngModel)]=\"info.email\" name=\"campoEmail\" uiInput required uiMaxlength=\"252\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                    <label>Email</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoEmail.errors && campoEmail.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoEmail.pristine && !campoEmail.errors.required\">Email é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoEmail.pristine && !campoEmail.errors.pattern\">Informe um email válido\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoEmail.errors.uiMaxlength\">Email não pode conter mais de 252 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.email && info.email.length > 252}\">\r\n                            {{info.email ? info.email.length : 0}}/252\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input type=\"text\" uiInput [(ngModel)]=\"info.dataNascimento\" name=\"date\" [uiDatePicker]=\"'dataNascimento'\" uiMaskDate #DataNascimento=\"ngModel\"\r\n                            required>\r\n                        <label>Data de Nascimento</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"DataNascimento.errors && DataNascimento.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!DataNascimento.errors.required\">\r\n                                    Data de nascimento é obrigatória\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!DataNascimento.errors.parse\">\r\n                                    Informe uma data válida\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat\" [uiDatePickerCaller]=\"'dataNascimento'\" type=\"button\">\r\n                                <i class=\"material-icons\">today</i>\r\n                            </button>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <ui-select #campoCurso=\"ngModel\" name=\"campoCurso\" [(ngModel)]=\"info.curso\" [options]=\"cursos\" [value]=\"'codigo'\" [label]=\"'nome'\"\r\n                            uiInput required [chosen]=\"cursos.length > 10\"></ui-select>\r\n                        <label>\r\n                            Curso\r\n                        </label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCurso.errors && campoCurso.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCurso.errors.required\">\r\n                                    Curso é obrigatório\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n                <ui-subheader>Endereço</ui-subheader>\r\n\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoCepCartao=\"ngModel\" type=\"text\" [(ngModel)]=\"info.cep\" uiInput name=\"campoCepCartao\" uiMaskCep required (blur)=\"getCep(formAluno, info.cep)\">\r\n                        <label>CEP</label>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat\" type=\"button\" (click)=\"getCep(formAluno, info.cep)\" uiRipple [disabled]=\"campoCepCartao.errors || !campoCepCartao.dirty\">\r\n                                <ui-progress-radial class=\"indeterminate primary\" *ngIf=\"buscandoCep\"></ui-progress-radial>\r\n                                <i class=\"material-icons\">search</i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCepCartao.errors && campoCepCartao.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCepCartao.pristine && !campoCepCartao.errors.required\">\r\n                                    CEP é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCepCartao.errors.parse && !campoCepCartao.hasError(['invalidCep'])\">\r\n                                    CEP inválido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <ui-select #campoEstadoCartao=\"ngModel\" name=\"campoEstadoCartao\" [(ngModel)]=\"info.uf\" [options]=\"estados\" value=\"uf\" label=\"nome\"\r\n                            uiInput required [chosen]=\"true\"></ui-select>\r\n                        <label>\r\n                            Estado\r\n                        </label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoEstadoCartao.errors && campoEstadoCartao.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoEstadoCartao.errors.required\">\r\n                                    Estado é obrigatório\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoCidade=\"ngModel\" type=\"text\" [(ngModel)]=\"info.cidade\" uiInput name=\"campoCidade\" required uiMaxlength=\"50\">\r\n                        <label>Cidade</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCidade.errors && campoCidade.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCidade.pristine && !campoCidade.errors.required\">\r\n                                    Cidade é obrigatória\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoCidade.errors.uiMaxlength\">\r\n                                    {{info.cidade ? info.cidade.length : 0}}/50\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <input #campoLogradouro=\"ngModel\" type=\"text\" [(ngModel)]=\"info.logradouro\" uiInput name=\"campoLogradouro\" required uiMaxlength=\"70\">\r\n                        <label>Logradouro</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoLogradouro.errors && campoLogradouro.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoLogradouro.pristine && !campoLogradouro.errors.required\">\r\n                                    Logradouro é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoLogradouro.errors.uiMaxlength\">\r\n                                    {{info.logradouro ? info.logradouro.length : 0}}/70\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoNumeroEnd=\"ngModel\" type=\"text\" [(ngModel)]=\"info.numero\" uiInput name=\"campoNumeroEnd\" required uiMaxlength=\"15\">\r\n                        <label>Número</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoNumeroEnd.errors && campoNumeroEnd.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoNumeroEnd.pristine && !campoNumeroEnd.errors.required\">\r\n                                    Número é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoNumeroEnd.errors.uiMaxlength\">\r\n                                    {{info.numero ? info.numero.length : 0}}/15\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input #campoBairroCartao=\"ngModel\" type=\"text\" [(ngModel)]=\"info.bairro\" uiInput name=\"campoBairroCartao\" required uiMaxlength=\"50\">\r\n                        <label>Bairro</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoBairroCartao.errors && campoBairroCartao.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoBairroCartao.pristine && !campoBairroCartao.errors.required\">\r\n                                    Bairro é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoBairroCartao.errors.uiMaxlength\">\r\n                                    {{info.bairro ? info.bairro.length : 0}}/50\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-fab-container\">\r\n                    <button class=\"ui-button accent fab\" uiRipple>\r\n                        <i class=\"material-icons\">save</i>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n</div>\r\n\r\n<ui-menu #menuDelete>\r\n    <div class=\"ui-menu-content size-2x\">\r\n        <ui-subheader>Deseja excluir?</ui-subheader>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"confirmDelete()\">\r\n            Sim\r\n        </div>\r\n        <div class=\"ui-menu-item\" uiRipple>\r\n            Não\r\n        </div>\r\n    </div>\r\n</ui-menu>"

/***/ }),

/***/ "./src/app/views/main/aluno/info/aluno-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/aluno/info/aluno-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ui-card {\n  margin-bottom: 16px; }\n  @media (max-width: 760px) {\n    :host ui-card {\n      margin-bottom: 85px; } }\n"

/***/ }),

/***/ "./src/app/views/main/aluno/info/aluno-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/aluno/info/aluno-info.component.ts ***!
  \***************************************************************/
/*! exports provided: AlunoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoInfoComponent", function() { return AlunoInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/utils/storage.service */ "./src/app/core/utils/storage.service.ts");
/* harmony import */ var _core_utils_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/utils/list.service */ "./src/app/core/utils/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlunoInfoComponent = /** @class */ (function () {
    function AlunoInfoComponent(titleService, toolbarService, storageService, element, router, activedRoute, api) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.storageService = storageService;
        this.element = element;
        this.router = router;
        this.activedRoute = activedRoute;
        this.api = api;
        this.info = {};
        this.estados = [];
        this.cursos = [];
    }
    AlunoInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnifaSystem - Alunos');
        this.toolbarService.set('Alunos');
        this.toolbarService.activateExtendedToolbar(600);
        this.listaAluno = new _core_utils_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]();
        this.listaCursos = new _core_utils_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"]();
        this.getLista();
        this.getListaDisciplinas().then(function () {
            var current = _this.listaCursos.getHead();
            for (var i = 0; i < _this.listaCursos.size(); i++) {
                _this.cursos.push(current.element);
                current = current.next;
            }
        }, function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Não foi possível carregar os cursos'
            });
            _this.router.navigate(['aluno']);
        });
        this.getEstados();
        setTimeout(function () {
            if (_this.activedRoute.snapshot.params['id']) {
                setTimeout(function () {
                    _this.addingNew = false;
                });
                var res = _this.listaAluno.contains('codigo', _this.activedRoute.snapshot.params['id']);
                _this.info = res.element;
                _this.index = res.index;
                _this.info.codigo = parseInt(_this.info.codigo, 10);
            }
            else {
                setTimeout(function () {
                    _this.addingNew = true;
                });
                _this.getCodigo();
            }
        });
    };
    AlunoInfoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    AlunoInfoComponent.prototype.onSubmit = function (form) {
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (!this.addingNew) {
            this.listaAluno.remove(this.listaAluno.contains('codigo', this.info.codigo).index);
        }
        this.listaAluno.append(this.info);
        var head = this.listaAluno.getHead();
        this.storageService.setNewItem('alunos', JSON.stringify(head));
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
            text: 'Aluno ' + (this.addingNew ? 'cadastrado' : 'alterado') + ' com sucesso!'
        });
        this.router.navigate(['aluno']);
    };
    AlunoInfoComponent.prototype.getLista = function () {
        var storage = this.storageService.getItem('alunos');
        if (storage) {
            var objectStorage = JSON.parse(storage);
            this.listaAluno.setHead(objectStorage);
            this.listaAluno.setSize();
        }
    };
    AlunoInfoComponent.prototype.confirmDelete = function () {
        this.listaAluno.remove(this.index);
        if (!this.listaAluno.size()) {
            this.storageService.removeItem('alunos');
        }
        else {
            var head = this.listaAluno.getHead();
            this.storageService.setNewItem('alunos', JSON.stringify(head));
        }
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
            text: 'Aluno removido com sucesso'
        });
        this.router.navigate(['aluno']);
    };
    AlunoInfoComponent.prototype.getEstados = function () {
        this.estados = [
            { uf: 'AC', nome: 'Acre' },
            { uf: 'AL', nome: 'Alagoas' },
            { uf: 'AP', nome: 'Amapá' },
            { uf: 'AM', nome: 'Amazonas' },
            { uf: 'BA', nome: 'Bahia' },
            { uf: 'CE', nome: 'Ceará' },
            { uf: 'DF', nome: 'Distrito Federal' },
            { uf: 'ES', nome: 'Espírito Santo' },
            { uf: 'GO', nome: 'Goiás' },
            { uf: 'MA', nome: 'Maranhão' },
            { uf: 'MT', nome: 'Mato Grosso' },
            { uf: 'MS', nome: 'Mato Grosso do Sul' },
            { uf: 'MG', nome: 'Minas Gerais' },
            { uf: 'PA', nome: 'Pará' },
            { uf: 'PB', nome: 'Paraíba' },
            { uf: 'PR', nome: 'Paraná' },
            { uf: 'PE', nome: 'Pernambuco' },
            { uf: 'PI', nome: 'Piauí' },
            { uf: 'RJ', nome: 'Rio de Janeiro' },
            { uf: 'RN', nome: 'Rio Grande do Norte' },
            { uf: 'RS', nome: 'Rio Grande do Sul' },
            { uf: 'RO', nome: 'Rondônia' },
            { uf: 'RR', nome: 'Roraima' },
            { uf: 'SC', nome: 'Santa Catarina' },
            { uf: 'SP', nome: 'São Paulo' },
            { uf: 'SE', nome: 'Sergipe' },
            { uf: 'TO', nome: 'Tocantins' }
        ];
    };
    AlunoInfoComponent.prototype.getListaDisciplinas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storage = _this.storageService.getItem('cursos');
            if (storage) {
                var objectStorage = JSON.parse(storage);
                _this.listaCursos.setHead(objectStorage);
                _this.listaCursos.setSize();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AlunoInfoComponent.prototype.getCodigo = function () {
        if (!this.listaAluno.size()) {
            this.info.codigo = 1000;
        }
        else {
            var current = this.listaAluno.getHead();
            while (current.next) {
                current = current.next;
            }
            this.info.codigo = parseInt(current.element.codigo, 10) + 1;
        }
    };
    AlunoInfoComponent.prototype.getCep = function (form, value) {
        var _this = this;
        if (!this.buscandoCep) {
            this.buscandoCep = true;
            this.api
                .http('GET', "https://viacep.com.br/ws/" + value + "/json/")
                .call()
                .subscribe(function (res) {
                if (!res.erro) {
                    _this.info.bairro = res.bairro;
                    _this.info.logradouro = res.logradouro;
                    _this.info.uf = res.uf;
                    _this.info.cidade = res.localidade;
                }
                else {
                    form.controls.campoCepCartao.setErrors({ invalidCep: true });
                    _this.info.bairro = '';
                    _this.info.logradouro = '';
                    _this.info.uf = null;
                    _this.info.cidade = '';
                }
            }, function (err) {
                console.log(err);
            }, function () {
                _this.buscandoCep = false;
            });
        }
    };
    AlunoInfoComponent.prototype.verificaCpf = function (value) {
        if (this.listaAluno.size()) {
            var current = this.listaAluno.getHead();
            for (var i = 0; i < this.listaAluno.size(); i++) {
                if ((!this.activedRoute.snapshot.params.id || current.element.codigo != this.activedRoute.snapshot.params.id) && current.element.cpf === value) {
                    this.formAluno.controls.campoCpf.setErrors({ cpfExistente: true });
                    return false;
                }
                current = current.next;
            }
            this.formAluno.controls.campoCpf.updateValueAndValidity();
            return true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formAluno'),
        __metadata("design:type", Object)
    ], AlunoInfoComponent.prototype, "formAluno", void 0);
    AlunoInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aluno-info-component',
            template: __webpack_require__(/*! ./aluno-info.component.html */ "./src/app/views/main/aluno/info/aluno-info.component.html"),
            styles: [__webpack_require__(/*! ./aluno-info.component.scss */ "./src/app/views/main/aluno/info/aluno-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], AlunoInfoComponent);
    return AlunoInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/aluno/list/aluno-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/aluno/list/aluno-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s600\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-data-table class=\"responsive\">\r\n            <tbody #elementInsert>\r\n                <tr>\r\n                    <th>\r\n                        Código\r\n                    </th>\r\n                    <th>\r\n                        Nome\r\n                    </th>\r\n                    <th>\r\n                        Curso\r\n                    </th>\r\n                </tr>\r\n                <tr class=\"empty\" *ngIf=\"!listaAluno.size()\">\r\n                    <td colspan=\"3\">{{loading ? 'Carregando...' : 'Nenhum aluno cadastrado'}}</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            </tfoot>\r\n        </ui-data-table>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n        <button class=\"ui-button accent fab\" uiRipple [routerLink]=\"['novo']\">\r\n            <i class=\"material-icons\">add</i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/main/aluno/list/aluno-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/aluno/list/aluno-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/aluno/list/aluno-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/aluno/list/aluno-list.component.ts ***!
  \***************************************************************/
/*! exports provided: AlunoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunoListComponent", function() { return AlunoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_utils_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/utils/list.service */ "./src/app/core/utils/list.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/utils/storage.service */ "./src/app/core/utils/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlunoListComponent = /** @class */ (function () {
    function AlunoListComponent(titleService, toolbarService, element, storageService, router) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
        this.storageService = storageService;
        this.router = router;
        this.cursos = [];
    }
    AlunoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnfaSystem - Alunos');
        this.toolbarService.set('Lista de alunos');
        this.toolbarService.activateExtendedToolbar(480);
        this.listaAluno = new _core_utils_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]();
        this.listaCursos = new _core_utils_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]();
        this.getInfo();
        this.getListaDisciplinas().then(function () {
            var current = _this.listaCursos.getHead();
            for (var i = 0; i < _this.listaCursos.size(); i++) {
                _this.cursos.push(current.element);
                current = current.next;
            }
            _this.initList(_this.listaAluno);
        }, function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__["UiSnackbar"].show({
                text: 'Não foi possível carregar os cursos'
            });
        });
    };
    AlunoListComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    AlunoListComponent.prototype.initList = function (list) {
        var length = list.size();
        var itemList = list.getHead();
        for (var i = 0; i < length; i++) {
            var node = "<tr class=\"item-list\" data-id=\"" + itemList.element.codigo + "\">\n            <td data-title=\"C\u00F3digo\" class=\"no-wrap\">" + itemList.element.codigo + "</td>\n            <td data-title=\"Nome\" class=\"no-wrap\">" + itemList.element.nome + "</td>\n            <td data-title=\"Curso\" class=\"no-wrap\">" + this.getNomeCurso(itemList.element.curso) + "</td>\n            </tr>";
            this.elementInsert.nativeElement.innerHTML += node;
            itemList = itemList.next;
        }
        this.elementList = this.element.nativeElement.querySelectorAll('tr.item-list');
        this.addFunction();
    };
    AlunoListComponent.prototype.addFunction = function () {
        var _this = this;
        this.elementList.forEach(function (el) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__["UiElement"].on(el, 'click', function (e) {
                _this.router.navigate(['aluno/' + e.target.parentElement.dataset.id]);
            });
        });
    };
    AlunoListComponent.prototype.getInfo = function () {
        var storage = this.storageService.getItem('alunos');
        if (storage) {
            var objectStorage = JSON.parse(storage);
            this.listaAluno.setHead(objectStorage);
            this.listaAluno.setSize();
        }
    };
    AlunoListComponent.prototype.getListaDisciplinas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storage = _this.storageService.getItem('cursos');
            if (storage) {
                var objectStorage = JSON.parse(storage);
                _this.listaCursos.setHead(objectStorage);
                _this.listaCursos.setSize();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AlunoListComponent.prototype.getNomeCurso = function (codigo) {
        var retorno = '';
        this.cursos.forEach(function (item) {
            if (item.codigo == codigo) {
                retorno = item.nome;
            }
        });
        return retorno;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('elementInsert'),
        __metadata("design:type", Object)
    ], AlunoListComponent.prototype, "elementInsert", void 0);
    AlunoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'aluno-list-component',
            template: __webpack_require__(/*! ./aluno-list.component.html */ "./src/app/views/main/aluno/list/aluno-list.component.html"),
            styles: [__webpack_require__(/*! ./aluno-list.component.scss */ "./src/app/views/main/aluno/list/aluno-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_3__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AlunoListComponent);
    return AlunoListComponent;
}());



/***/ }),

/***/ "./src/app/views/main/curso/curso.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/main/curso/curso.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/main/curso/curso.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/main/curso/curso.component.ts ***!
  \*****************************************************/
/*! exports provided: CursoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoComponent", function() { return CursoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CursoComponent = /** @class */ (function () {
    function CursoComponent(titleService, toolbarService, element) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
    }
    CursoComponent.prototype.ngOnInit = function () { };
    CursoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'curso-component',
            template: __webpack_require__(/*! ./curso.component.html */ "./src/app/views/main/curso/curso.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CursoComponent);
    return CursoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/curso/curso.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/main/curso/curso.module.ts ***!
  \**************************************************/
/*! exports provided: CursoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoModule", function() { return CursoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _curso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curso.component */ "./src/app/views/main/curso/curso.component.ts");
/* harmony import */ var _list_curso_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/curso-list.component */ "./src/app/views/main/curso/list/curso-list.component.ts");
/* harmony import */ var _info_curso_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/curso-info.component */ "./src/app/views/main/curso/info/curso-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CursoModule = /** @class */ (function () {
    function CursoModule() {
    }
    CursoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [],
            declarations: [_curso_component__WEBPACK_IMPORTED_MODULE_2__["CursoComponent"], _list_curso_list_component__WEBPACK_IMPORTED_MODULE_3__["CursoListComponent"], _info_curso_info_component__WEBPACK_IMPORTED_MODULE_4__["CursoInfoComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CursoModule);
    return CursoModule;
}());



/***/ }),

/***/ "./src/app/views/main/curso/info/curso-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/curso/info/curso-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s480\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" uiRipple (click)=\"router.navigate(['curso'])\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n            <span class=\"title\">{{addingNew ? 'Novo curso' : 'Alterando ' + (info.nome || 'curso')}}</span>\r\n            <div class=\"align-right\">\r\n                <button *ngIf=\"!addingNew\" class=\"ui-button flat icon\" type=\"button\" uiRipple\r\n                        [uiMenuTrigger]=\"menuDelete\" align=\"right\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n\r\n        <ui-card-content>\r\n            <form #formCurso=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formCurso)\">\r\n                <ui-input-container>\r\n                    <input #campoNome=\"ngModel\" type=\"text\" [(ngModel)]=\"info.nome\" name=\"campoNome\" uiInput required\r\n                           uiMaxlength=\"70\">\r\n                    <label>Nome</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoNome.errors && campoNome.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.pristine && !campoNome.errors.required\">\r\n                                Nome é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.errors.uiMaxlength\">Nome não pode conter\r\n                                mais de 70 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.nome && info.nome.length > 70}\">\r\n                            {{info.nome ? info.nome.length : 0}}/70\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <ui-select #campoCoordenador=\"ngModel\" name=\"campoCoordenador\" [(ngModel)]=\"info.idCoordenador\" [options]=\"professores\" [value]=\"'id'\" [label]=\"'nome'\"\r\n                               uiInput required></ui-select>\r\n                    <label>\r\n                        Coordenador\r\n                    </label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoCoordenador.errors && campoCoordenador.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoCoordenador.errors.required\">\r\n                                Coordenador é obrigatório\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <div class=\"ui-flex-container break-on-480\">\r\n                    <ui-input-container>\r\n                        <input #campoValor=\"ngModel\" type=\"text\" [(ngModel)]=\"info.valor\" name=\"campoValor\" uiInput\r\n                               uiMaskCurrency required>\r\n                        <label>Valor</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoValor.errors && campoValor.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoValor.pristine && !campoValor.errors.required\">Valor é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoValor.errors.parse\">Informe uma valor\r\n                                    válido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n                <ui-input-container>\r\n                    <textarea [(ngModel)]=\"info.descricao\" name=\"campoDescricao\" rows=\"4\" uiInput required\r\n                              uiMaxlength=\"250\" #campoDescricao=\"ngModel\"></textarea>\r\n                    <label>Descrição</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoDescricao.errors && campoDescricao.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoDescricao.pristine && !campoDescricao.errors.required\">Descrição é\r\n                                obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoDescricao.errors.uiMaxlength\">Descrição não\r\n                                pode conter mais de 250 caracteres\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\"\r\n                             [ngClass]=\"{'error': info.descricao && info.descricao.length > 250}\">\r\n                            {{info.descricao ? info.descricao.length : 0}}/250\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <div class=\"ui-fab-container\">\r\n                    <button class=\"ui-button accent fab\" uiRipple>\r\n                        <i class=\"material-icons\">save</i>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n</div>\r\n\r\n<ui-menu #menuDelete>\r\n    <div class=\"ui-menu-content size-2x\">\r\n        <ui-subheader>Deseja excluir?</ui-subheader>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"confirmDelete()\">\r\n            Sim\r\n        </div>\r\n        <div class=\"ui-menu-item\" uiRipple>\r\n            Não\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n"

/***/ }),

/***/ "./src/app/views/main/curso/info/curso-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/curso/info/curso-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ui-card {\n  margin-bottom: 16px; }\n  @media (max-width: 645px) {\n    :host ui-card {\n      margin-bottom: 85px; } }\n"

/***/ }),

/***/ "./src/app/views/main/curso/info/curso-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/curso/info/curso-info.component.ts ***!
  \***************************************************************/
/*! exports provided: CursoInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoInfoComponent", function() { return CursoInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CursoInfoComponent = /** @class */ (function () {
    function CursoInfoComponent(titleService, toolbarService, router, activedRoute, api, element) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.api = api;
        this.element = element;
        this.info = {};
        this.professores = [];
    }
    CursoInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnifaSystem - Cursos');
        this.toolbarService.set('Cursos');
        this.toolbarService.activateExtendedToolbar(600);
        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(function () {
                _this.addingNew = false;
            });
            this.getInfo();
        }
        else {
            setTimeout(function () {
                _this.addingNew = true;
            });
        }
        this.getProfessores();
    };
    CursoInfoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    CursoInfoComponent.prototype.onSubmit = function (form) {
        var _this = this;
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (this.addingNew) {
            this.api
                .prep('administracao', 'curso', 'inserir')
                .call(this.info)
                .subscribe(function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Curso cadastrado com sucesso!'
                });
                _this.router.navigate(['curso']);
            });
        }
        else {
            this.api
                .prep('administracao', 'curso', 'atualizar')
                .call(this.info)
                .subscribe(function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Curso alterado com sucesso!'
                });
                _this.router.navigate(['curso']);
            });
        }
    };
    CursoInfoComponent.prototype.getInfo = function () {
        var _this = this;
        this.api
            .prep('administracao', 'curso', 'selecionarPorId')
            .call({
            id: this.activedRoute.snapshot.params.id
        })
            .subscribe(function (data) {
            _this.info = data.content;
        }, function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Não foi possível buscar os dados'
            });
        });
    };
    CursoInfoComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.api
            .prep('administracao', 'curso', 'excluir')
            .call({ id: this.info.id })
            .subscribe(function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Curso removido com sucesso'
            });
            _this.router.navigate(['curso']);
        });
    };
    CursoInfoComponent.prototype.getProfessores = function () {
        var _this = this;
        this.api
            .prep('administracao', 'professor', 'selecionarSimples')
            .call()
            .subscribe(function (data) {
            _this.professores = data.content;
        }, function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Erro ao buscar professores'
            });
            _this.router.navigate(['curso']);
        });
    };
    CursoInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'curso-info-component',
            template: __webpack_require__(/*! ./curso-info.component.html */ "./src/app/views/main/curso/info/curso-info.component.html"),
            styles: [__webpack_require__(/*! ./curso-info.component.scss */ "./src/app/views/main/curso/info/curso-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CursoInfoComponent);
    return CursoInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/curso/list/curso-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/curso/list/curso-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s480\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-data-table class=\"responsive\">\r\n            <tbody>\r\n            <tr>\r\n                <th>\r\n                    Nome\r\n                </th>\r\n                <th>\r\n                    Status\r\n                </th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of list\" [routerLink]=\"['/curso', item.id]\">\r\n                <td data-title=\"Nome\" [class.empty]=\"!item.nome\">\r\n                    <span class=\"ellipsis\">\r\n                        {{item.nome}}\r\n                    </span>\r\n                </td>\r\n                <td data-title=\"Status\" [class.empty]=\"!item.ativo\">\r\n                    <span class=\"ellipsis\">\r\n                        {{item.ativo ? 'Ativo' : 'Inativo'}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"empty\" *ngIf=\"!list || !list.length\">\r\n                <td colspan=\"4\">{{loading ? 'Carregando...' : 'Nenhum curso encontrado'}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"align-right\">\r\n                    <div class=\"ui-button-container align-right\">\r\n                        <span class=\"pagination\" *ngIf=\"totalLinhas\">\r\n                            {{((pagina - 1) * 10) + 1}}-{{pagina * 10 < totalLinhas ? pagina * 10 : totalLinhas}} de {{totalLinhas}}\r\n                        </span>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"pagina < 2\"\r\n                                (click)=\"pagina = pagina - 1; getInfo();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                        </button>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"totalLinhas < pagina * 10\"\r\n                                (click)=\"pagina = pagina + 1; getInfo();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </ui-data-table>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n        <button class=\"ui-button accent fab\" uiRipple [routerLink]=\"['novo']\">\r\n            <i class=\"material-icons\">add</i>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/curso/list/curso-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/curso/list/curso-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/curso/list/curso-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/curso/list/curso-list.component.ts ***!
  \***************************************************************/
/*! exports provided: CursoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoListComponent", function() { return CursoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CursoListComponent = /** @class */ (function () {
    function CursoListComponent(titleService, toolbarService, element, router, api) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
        this.router = router;
        this.api = api;
        this.list = [];
        this.pagina = 1;
    }
    CursoListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('UnfaSystem - Cursos');
        this.toolbarService.set('Lista de cursos');
        this.toolbarService.activateExtendedToolbar(480);
        this.getInfo();
    };
    CursoListComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    CursoListComponent.prototype.getInfo = function () {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            this.api
                .prep('administracao', 'curso', 'selecionar')
                .call({
                filtro: '',
                pagina: this.pagina,
                linhas: 10
            })
                .subscribe(function (data) {
                _this.list = data.content;
                _this.totalLinhas = data.totalLinhas;
            }, function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Não foi possível carregar os cursos'
                });
            }, function () {
                _this.loading = false;
            });
        }
    };
    CursoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'curso-list-component',
            template: __webpack_require__(/*! ./curso-list.component.html */ "./src/app/views/main/curso/list/curso-list.component.html"),
            styles: [__webpack_require__(/*! ./curso-list.component.scss */ "./src/app/views/main/curso/list/curso-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CursoListComponent);
    return CursoListComponent;
}());



/***/ }),

/***/ "./src/app/views/main/disciplina/disciplina.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/main/disciplina/disciplina.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/main/disciplina/disciplina.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/main/disciplina/disciplina.component.ts ***!
  \***************************************************************/
/*! exports provided: DisciplinaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinaComponent", function() { return DisciplinaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinaComponent = /** @class */ (function () {
    function DisciplinaComponent(titleService, toolbarService, element) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
    }
    DisciplinaComponent.prototype.ngOnInit = function () { };
    DisciplinaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'disciplina-component',
            template: __webpack_require__(/*! ./disciplina.component.html */ "./src/app/views/main/disciplina/disciplina.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DisciplinaComponent);
    return DisciplinaComponent;
}());



/***/ }),

/***/ "./src/app/views/main/disciplina/disciplina.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/main/disciplina/disciplina.module.ts ***!
  \************************************************************/
/*! exports provided: DisciplinaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinaModule", function() { return DisciplinaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _disciplina_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disciplina.component */ "./src/app/views/main/disciplina/disciplina.component.ts");
/* harmony import */ var _list_disciplina_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/disciplina-list.component */ "./src/app/views/main/disciplina/list/disciplina-list.component.ts");
/* harmony import */ var _info_disciplina_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/disciplina-info.component */ "./src/app/views/main/disciplina/info/disciplina-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DisciplinaModule = /** @class */ (function () {
    function DisciplinaModule() {
    }
    DisciplinaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [],
            declarations: [_disciplina_component__WEBPACK_IMPORTED_MODULE_2__["DisciplinaComponent"], _list_disciplina_list_component__WEBPACK_IMPORTED_MODULE_3__["DisciplinaListComponent"], _info_disciplina_info_component__WEBPACK_IMPORTED_MODULE_4__["DisciplinaInfoComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DisciplinaModule);
    return DisciplinaModule;
}());



/***/ }),

/***/ "./src/app/views/main/disciplina/info/disciplina-info.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/main/disciplina/info/disciplina-info.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s480\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" uiRipple (click)=\"router.navigate(['disciplina'])\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n            <span class=\"title\">{{addingNew ? 'Nova disciplina' : 'Alterando ' + (info.nome || 'disciplina')}}</span>\r\n            <div class=\"align-right\">\r\n                <button *ngIf=\"!addingNew\" class=\"ui-button flat icon\" type=\"button\" uiRipple [uiMenuTrigger]=\"menuDelete\" align=\"right\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n\r\n        <ui-card-content>\r\n            <form #formDisciplina=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formDisciplina)\">\r\n                <div class=\"ui-flex-container break-on-480\">\r\n                    <!-- <ui-input-container>\r\n                        <input #campoCodigo=\"ngModel\" type=\"text\" [(ngModel)]=\"info.codigo\" name=\"campoCodigo\" uiInput required readonly>\r\n                        <label>Código</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCodigo.errors && campoCodigo.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCodigo.pristine && !campoCodigo.errors.required\">Código é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCodigo.errors.parse\">Informe um código válido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container> -->\r\n                    <ui-input-container>\r\n                        <input #campoCargaHoraria=\"ngModel\" type=\"text\" [(ngModel)]=\"info.cargaHoraria\" name=\"campoCargaHoraria\" uiInput uiMaskInteger\r\n                            required>\r\n                        <label>Carga horária</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCargaHoraria.errors && campoCargaHoraria.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCargaHoraria.pristine && !campoCargaHoraria.errors.required\">Carga horária é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCargaHoraria.errors.parse\">Informe uma carga horária válido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n\r\n                <ui-input-container>\r\n                    <input #campoNome=\"ngModel\" type=\"text\" [(ngModel)]=\"info.nome\" name=\"campoNome\" uiInput required uiMaxlength=\"70\">\r\n                    <label>Nome</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoNome.errors && campoNome.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.pristine && !campoNome.errors.required\">Nome é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.errors.uiMaxlength\">Nome não pode conter mais de 70 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.nome && info.nome.length > 70}\">\r\n                            {{info.nome ? info.nome.length : 0}}/70\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <textarea [(ngModel)]=\"info.descricao\" name=\"campoDescricao\" rows=\"4\" uiInput required uiMaxlength=\"250\" #campoDescricao=\"ngModel\"></textarea>\r\n                    <label>Descrição</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoDescricao.errors && campoDescricao.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoDescricao.pristine && !campoDescricao.errors.required\">Descrição é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoDescricao.errors.uiMaxlength\">Descrição não pode conter mais de 250 caracteres\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.descricao && info.descricao.length > 250}\">\r\n                            {{info.descricao ? info.descricao.length : 0}}/250\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <div class=\"ui-fab-container\">\r\n                    <button class=\"ui-button accent fab\" uiRipple>\r\n                        <i class=\"material-icons\">save</i>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n</div>\r\n\r\n<ui-menu #menuDelete>\r\n    <div class=\"ui-menu-content size-2x\">\r\n        <ui-subheader>Deseja excluir?</ui-subheader>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"confirmDelete()\">\r\n            Sim\r\n        </div>\r\n        <div class=\"ui-menu-item\" uiRipple>\r\n            Não\r\n        </div>\r\n    </div>\r\n</ui-menu>"

/***/ }),

/***/ "./src/app/views/main/disciplina/info/disciplina-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/main/disciplina/info/disciplina-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ui-card {\n  margin-bottom: 16px; }\n  @media (max-width: 645px) {\n    :host ui-card {\n      margin-bottom: 85px; } }\n"

/***/ }),

/***/ "./src/app/views/main/disciplina/info/disciplina-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/disciplina/info/disciplina-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisciplinaInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinaInfoComponent", function() { return DisciplinaInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisciplinaInfoComponent = /** @class */ (function () {
    function DisciplinaInfoComponent(titleService, toolbarService, element, router, activedRoute, api) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
        this.router = router;
        this.activedRoute = activedRoute;
        this.api = api;
        this.info = {};
    }
    DisciplinaInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnifaSystem - Disciplinas');
        this.toolbarService.set('Disciplinas');
        this.toolbarService.activateExtendedToolbar(600);
        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(function () {
                _this.addingNew = false;
            });
        }
        else {
            setTimeout(function () {
                _this.addingNew = true;
            });
        }
    };
    DisciplinaInfoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DisciplinaInfoComponent.prototype.onSubmit = function (form) {
        var _this = this;
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (this.addingNew) {
            this.api
                .prep('administracao', 'disciplina', 'inserir')
                .call(this.info)
                .subscribe(function (data) {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Disciplina ' + (_this.addingNew ? 'cadastrada' : 'alterada') + ' com sucesso!'
                });
                _this.router.navigate(['disciplina']);
            }, function (err) {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    message: 'Erro ao cadastrar disciplinas'
                });
            });
        }
    };
    DisciplinaInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'disciplina-info-component',
            template: __webpack_require__(/*! ./disciplina-info.component.html */ "./src/app/views/main/disciplina/info/disciplina-info.component.html"),
            styles: [__webpack_require__(/*! ./disciplina-info.component.scss */ "./src/app/views/main/disciplina/info/disciplina-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DisciplinaInfoComponent);
    return DisciplinaInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/disciplina/list/disciplina-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/main/disciplina/list/disciplina-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s480\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <div class=\"ui-progress\" [class.hide]=\"!(loading && !searching)\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"_location.back()\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n            <span class=\"title\" [ngClass]=\"{'hide': searchOpen}\">Lista de Disciplinas</span>\r\n            <div class=\"align-right\">\r\n                <form #searchForm=\"ngForm\" name=\"searchForm\" class=\"ui-validate on-dirty\" [ngClass]=\"{'open': searchOpen}\">\r\n                    <ui-input-container>\r\n                        <input #searchFormText=\"ngModel\" type=\"text\" name=\"searchText\" [(ngModel)]=\"searchText\" uiMaxlength=\"200\" uiInput [persistPlaceholder]=\"true\"\r\n                            placeholder=\"Pesquisa\" (keyup)=\"search(searchFormText.value)\">\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"searchFormText.errors && searchFormText.dirty\">\r\n                                <div class=\"ui-message counter error\">\r\n                                    {{searchText ? searchText.length : 0}}/200\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </form>\r\n                <button class=\"ui-button flat icon search\" uiRipple type=\"button\" (click)=\"toggleSearch()\">\r\n                    <ui-progress-radial class=\"indeterminate\" *ngIf=\"searching\"></ui-progress-radial>\r\n                    <i class=\"material-icons\" [ngClass]=\"{'show': !searchOpen}\">search</i>\r\n                    <i class=\"material-icons\" [ngClass]=\"{'show': searchOpen}\">close</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n        <ui-data-table class=\"responsive\">\r\n            <tbody #elementInsert>\r\n                <tr>\r\n                    <th>\r\n                        Nome\r\n                    </th>\r\n                    <th>\r\n                        Carga horária\r\n                    </th>\r\n                </tr>\r\n                <tr *ngFor=\"let item of disciplinas\" [routerLink]=\"['/disciplina', item._id]\">\r\n                    <td data-title=\"Nome\" class=\"no-wrap\">\r\n                        {{item.nome}}\r\n                    </td>\r\n                    <td data-title=\"Carga Horária\" class=\"no-wrap\">\r\n                        {{item.cargaHoraria}}\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"empty\" *ngIf=\"!disciplinas || !disciplinas.length\">\r\n                    <td colspan=\"2\">{{loading ? 'Carregando...' : 'Nenhuma disciplina encontrada'}}</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"align-right\">\r\n                        <div class=\"ui-button-container align-right\">\r\n                            <span class=\"pagination\" *ngIf=\"totalLinhas\">\r\n                                {{((pagina - 1) * 10) + 1}}-{{pagina * 10\r\n                                < totalLinhas ? pagina * 10 : totalLinhas}} de {{totalLinhas}} </span>\r\n                                    <button class=\"ui-button flat icon\" uiRipple [disabled]=\"pagina < 2\" (click)=\"pagina = pagina - 1; getDisciplinas();\" type=\"button\">\r\n                                        <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                                    </button>\r\n                                    <button class=\"ui-button flat icon\" uiRipple type=\"button\" [disabled]=\"totalLinhas <= pagina * 10\" (click)=\"pagina = pagina + 1; getDisciplinas();\">\r\n                                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                                    </button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </ui-data-table>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n        <button class=\"ui-button accent fab\" uiRipple [routerLink]=\"['nova']\">\r\n            <i class=\"material-icons\">add</i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/main/disciplina/list/disciplina-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/main/disciplina/list/disciplina-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host ui-card {\n  position: relative;\n  margin-bottom: 20px; }\n:host ui-card /deep/ header {\n    background-color: white;\n    color: black; }\n:host ui-card /deep/ .ui-button.search {\n    position: relative; }\n:host ui-card /deep/ .ui-button.search i {\n      position: absolute;\n      left: 6px;\n      top: 6px;\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      opacity: 0; }\n:host ui-card /deep/ .ui-button.search i:nth-of-type(1) {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n:host ui-card /deep/ .ui-button.search i:nth-of-type(2) {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n:host ui-card /deep/ .ui-button.search i.show {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n        opacity: 1; }\n@media (max-width: 763px) {\n    :host ui-card {\n      margin-bottom: 85px; } }\n:host ui-card .ui-progress {\n    position: absolute; }\n:host /deep/ form[name=\"searchForm\"] {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  position: absolute;\n  right: 60px;\n  left: 100%;\n  top: 14px; }\n:host /deep/ form[name=\"searchForm\"] ui-input-container {\n    width: 100%; }\n:host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap {\n      padding-top: 0;\n      margin-bottom: 0; }\n:host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n        transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host /deep/ form[name=\"searchForm\"]:not(.open) ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n    color: transparent; }\n:host /deep/ form[name=\"searchForm\"].open {\n    left: 65px; }\n:host ui-toolbar .title {\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n:host ui-toolbar .title.hide {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n"

/***/ }),

/***/ "./src/app/views/main/disciplina/list/disciplina-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/disciplina/list/disciplina-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisciplinaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisciplinaListComponent", function() { return DisciplinaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DisciplinaListComponent = /** @class */ (function () {
    function DisciplinaListComponent(titleService, toolbarService, element, api, _location, changeDetectorRef) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
        this.api = api;
        this._location = _location;
        this.changeDetectorRef = changeDetectorRef;
        this.searchTerms = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.disciplinas = [];
        this.totalLinhas = 0;
        this.pagina = 1;
    }
    DisciplinaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnfaSystem - Disciplinas');
        this.toolbarService.set('Lista de disciplinas');
        this.toolbarService.activateExtendedToolbar(480);
        this.searchTerms.pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.searchText || _this.searchText.length <= 200) {
                _this.searching = true;
                _this.getDisciplinas();
            }
        });
    };
    DisciplinaListComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    DisciplinaListComponent.prototype.ngAfterViewInit = function () {
        this.getDisciplinas();
    };
    DisciplinaListComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    DisciplinaListComponent.prototype.toggleSearch = function () {
        var inputSearch = this.element.nativeElement.querySelector('input[name="searchText"]');
        if (this.searchOpen) {
            this.searchOpen = false;
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(inputSearch, 'form').style.right = '';
            this.searchText = '';
            this.getDisciplinas();
        }
        else {
            this.searchOpen = true;
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(inputSearch, 'form').style.right = ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].closest(inputSearch, '.align-right').clientWidth + 'px';
            setTimeout(function () {
                inputSearch.focus();
            }, 280);
        }
    };
    DisciplinaListComponent.prototype.getDisciplinas = function () {
        var _this = this;
        if (!this.loading && (!this.searchText || this.searchText.length <= 200)) {
            this.loading = true;
            this.changeDetectorRef.detectChanges();
            this.api
                .prep('administracao', 'disciplina', 'selecionar')
                .call({
                filtro: this.searchText || '',
                pagina: this.pagina
            })
                .subscribe(function (res) {
                _this.disciplinas = res.content;
                _this.totalLinhas = res.totalLinhas;
            }, function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Não foi possível carregar as disciplinas'
                });
            }, function () {
                _this.loading = false;
                _this.searching = false;
            });
        }
    };
    DisciplinaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'disciplina-list-component',
            template: __webpack_require__(/*! ./disciplina-list.component.html */ "./src/app/views/main/disciplina/list/disciplina-list.component.html"),
            styles: [__webpack_require__(/*! ./disciplina-list.component.scss */ "./src/app/views/main/disciplina/list/disciplina-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DisciplinaListComponent);
    return DisciplinaListComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService, toolbarService, element) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Home');
        this.toolbarService.set('UnifaSystem - Home');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/views/main/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/views/main/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n    <button (click)=\"menuOpen = true\" class=\"ui-button flat icon\" uiRipple>\r\n        <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <!-- <div class=\"logo\">\r\n        <img src=\"assets/images/logotipo-negativo.png\" alt=\"Cronos logo\" title=\"Cronos logo\">\r\n    </div> -->\r\n    <span class=\"title\">{{title}}</span>\r\n    <div class=\"align-right\">\r\n        <!-- <button class=\"ui-button flat icon\" uiRipple>\r\n            <i class=\"material-icons\">notifications</i>\r\n            <span class=\"badge\">2</span>\r\n        </button> -->\r\n        <div class=\"avatar\"\r\n             [uiMenuTrigger]=\"menuUser\"\r\n             menu-align=\"right\"\r\n             theme-class=\"menu-user\"\r\n             [ngStyle]=\"{'background-image': user.imagem ? 'url(' + user.imagem + ')' : '',\r\n                         'background-color': user.imagem ? 'white' : user.cor,\r\n                         'color': isBright(user.cor) ? 'black': 'white'}\">\r\n            <span *ngIf=\"user && !user.imagem && user.nome\">{{user.nome.charAt(0)}}</span>\r\n        </div>\r\n    </div>\r\n</ui-toolbar>\r\n\r\n<!-- Add class 'persistent' para deixar o menu persistente, deve também descomentar o código no main.component -->\r\n<ui-nav-drawer [(open)]=\"menuOpen\">\r\n    <ui-toolbar class=\"flat\">\r\n        <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n            <i class=\"material-icons\">menu</i>\r\n        </button>\r\n        <div class=\"logo\">\r\n            <!-- <img src=\"assets/images/logotipo-menu.png\" alt=\"Cronos logo\" title=\"Cronos logo\"> -->\r\n        </div>\r\n    </ui-toolbar>\r\n    <div class=\"ui-nav-drawer-overflow\">\r\n        <div class=\"ui-list\">\r\n            <a class=\"ui-list-item\" uiRipple routerLink=\"/\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n        </div>\r\n        <ui-list [list]=\"menu\" [item-model]=\"menuConfig\"></ui-list>\r\n    </div>\r\n</ui-nav-drawer>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ui-menu #menuUser>\r\n    <header>\r\n        <div class=\"avatar\"\r\n             menu-align=\"right\"\r\n             [ngStyle]=\"{'background-image': user.imagem ? 'url(' + user.imagem + ')' : '',\r\n                         'background-color': user.imagem ? 'white' : user.cor,\r\n                         'color': isBright(user.cor) ? 'black': 'white'}\">\r\n            <span *ngIf=\"!user.imagem\">{{user.nome?.charAt(0)}}</span>\r\n        </div>\r\n        <div class=\"primary-text\">{{user.nome}}</div>\r\n    </header>\r\n    <div class=\"ui-menu-content size-3x\">\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"logoff()\">\r\n            Sair\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > /deep/ ui-nav-drawer ui-list .ui-list {\n  padding: 0; }\n\n:host > ui-toolbar .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n/deep/ .menu-user header {\n  display: flex;\n  align-items: center; }\n\n/deep/ .menu-user .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(titleService, toolbarService, router) {
        var _this = this;
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.router = router;
        toolbarService.change.subscribe(function (title) {
            _this.title = title;
        });
        this.menuConfig = {
            id: 'id',
            parentId: 'idmae',
            url: 'url',
            name: 'nome'
        };
        this.menu = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getMenu();
        this.user = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getUser();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('UnifaSystem');
        this.toolbarService.set('');
        this.menuOpen = false;
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
        /**
         * Descomentar o código para deixar o menu persistente
         * const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';
         * if (isNavDrawerPersistent) {
         *      this.menuOpen = true;
         * }
         * */
    };
    MainComponent.prototype.ngAfterViewInit = function () {
    };
    MainComponent.prototype.isBright = function (color) {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiColor"].isBright(color);
    };
    MainComponent.prototype.logoff = function () {
        _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].remove();
        this.router.navigate(['/login']);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/views/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/views/main/home/home.module.ts");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _professor_professor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professor/professor.module */ "./src/app/views/main/professor/professor.module.ts");
/* harmony import */ var _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/storage.service */ "./src/app/core/utils/storage.service.ts");
/* harmony import */ var _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aluno/aluno.module */ "./src/app/views/main/aluno/aluno.module.ts");
/* harmony import */ var _disciplina_disciplina_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disciplina/disciplina.module */ "./src/app/views/main/disciplina/disciplina.module.ts");
/* harmony import */ var _curso_curso_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./curso/curso.module */ "./src/app/views/main/curso/curso.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"],
                _professor_professor_module__WEBPACK_IMPORTED_MODULE_5__["ProfessorModule"],
                _aluno_aluno_module__WEBPACK_IMPORTED_MODULE_7__["AlunoModule"],
                _disciplina_disciplina_module__WEBPACK_IMPORTED_MODULE_8__["DisciplinaModule"],
                _curso_curso_module__WEBPACK_IMPORTED_MODULE_9__["CursoModule"]
            ],
            exports: [],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
            providers: [_core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _core_utils_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/views/main/main.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.routes.ts ***!
  \*******************************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/guard/auth.guard */ "./src/app/views/auth/guard/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/main/home/home.component.ts");
/* harmony import */ var _professor_professor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./professor/professor.component */ "./src/app/views/main/professor/professor.component.ts");
/* harmony import */ var _professor_list_professor_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./professor/list/professor-list.component */ "./src/app/views/main/professor/list/professor-list.component.ts");
/* harmony import */ var _professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./professor/info/professor-info.component */ "./src/app/views/main/professor/info/professor-info.component.ts");
/* harmony import */ var _aluno_aluno_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aluno/aluno.component */ "./src/app/views/main/aluno/aluno.component.ts");
/* harmony import */ var _aluno_list_aluno_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aluno/list/aluno-list.component */ "./src/app/views/main/aluno/list/aluno-list.component.ts");
/* harmony import */ var _aluno_info_aluno_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aluno/info/aluno-info.component */ "./src/app/views/main/aluno/info/aluno-info.component.ts");
/* harmony import */ var _disciplina_disciplina_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disciplina/disciplina.component */ "./src/app/views/main/disciplina/disciplina.component.ts");
/* harmony import */ var _disciplina_list_disciplina_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./disciplina/list/disciplina-list.component */ "./src/app/views/main/disciplina/list/disciplina-list.component.ts");
/* harmony import */ var _disciplina_info_disciplina_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./disciplina/info/disciplina-info.component */ "./src/app/views/main/disciplina/info/disciplina-info.component.ts");
/* harmony import */ var _curso_curso_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./curso/curso.component */ "./src/app/views/main/curso/curso.component.ts");
/* harmony import */ var _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./curso/list/curso-list.component */ "./src/app/views/main/curso/list/curso-list.component.ts");
/* harmony import */ var _curso_info_curso_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./curso/info/curso-info.component */ "./src/app/views/main/curso/info/curso-info.component.ts");















var MAIN_ROUTES = [{
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            {
                path: 'professor',
                component: _professor_professor_component__WEBPACK_IMPORTED_MODULE_3__["ProfessorComponent"],
                children: [
                    { path: '', component: _professor_list_professor_list_component__WEBPACK_IMPORTED_MODULE_4__["ProfessorListComponent"] },
                    { path: 'novo', component: _professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_5__["ProfessorInfoComponent"] },
                    { path: 'nova', redirectTo: 'novo' },
                    { path: ':id', component: _professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_5__["ProfessorInfoComponent"] }
                ]
            },
            {
                path: 'aluno',
                component: _aluno_aluno_component__WEBPACK_IMPORTED_MODULE_6__["AlunoComponent"],
                children: [
                    { path: '', component: _aluno_list_aluno_list_component__WEBPACK_IMPORTED_MODULE_7__["AlunoListComponent"] },
                    { path: 'novo', component: _aluno_info_aluno_info_component__WEBPACK_IMPORTED_MODULE_8__["AlunoInfoComponent"] },
                    { path: 'nova', redirectTo: 'novo' },
                    { path: ':id', component: _aluno_info_aluno_info_component__WEBPACK_IMPORTED_MODULE_8__["AlunoInfoComponent"] }
                ]
            },
            {
                path: 'disciplina',
                component: _disciplina_disciplina_component__WEBPACK_IMPORTED_MODULE_9__["DisciplinaComponent"],
                children: [
                    { path: '', component: _disciplina_list_disciplina_list_component__WEBPACK_IMPORTED_MODULE_10__["DisciplinaListComponent"] },
                    { path: 'nova', component: _disciplina_info_disciplina_info_component__WEBPACK_IMPORTED_MODULE_11__["DisciplinaInfoComponent"] },
                    { path: 'novo', redirectTo: 'nova' },
                    { path: ':id', component: _disciplina_info_disciplina_info_component__WEBPACK_IMPORTED_MODULE_11__["DisciplinaInfoComponent"] }
                ]
            },
            {
                path: 'curso',
                component: _curso_curso_component__WEBPACK_IMPORTED_MODULE_12__["CursoComponent"],
                children: [
                    { path: '', component: _curso_list_curso_list_component__WEBPACK_IMPORTED_MODULE_13__["CursoListComponent"] },
                    { path: 'novo', component: _curso_info_curso_info_component__WEBPACK_IMPORTED_MODULE_14__["CursoInfoComponent"] },
                    { path: 'nova', redirectTo: 'novo' },
                    { path: ':id', component: _curso_info_curso_info_component__WEBPACK_IMPORTED_MODULE_14__["CursoInfoComponent"] }
                ]
            },
        ]
    }];


/***/ }),

/***/ "./src/app/views/main/professor/info/professor-info.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/professor/info/professor-info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s600\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-toolbar class=\"flat\">\r\n            <button class=\"ui-button flat icon\" uiRipple (click)=\"router.navigate(['professor'])\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n            <span class=\"title\">{{addingNew ? 'Novo professor' : 'Alterando ' + (info.nome || 'professor')}}</span>\r\n            <div class=\"align-right\">\r\n                <button *ngIf=\"!addingNew\" class=\"ui-button flat icon\" type=\"button\" uiRipple\r\n                        [uiMenuTrigger]=\"menuDelete\" align=\"right\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n\r\n        <ui-card-content>\r\n            <form #formProfessor=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formProfessor)\">\r\n                <div class=\"ui-flex-container breake-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoCpf=\"ngModel\" type=\"text\" [(ngModel)]=\"info.cpf\" name=\"campoCpf\"\r\n                               (blur)=\"verificaCpf(info.cpf)\" uiInput required\r\n                               uiMaskCpf>\r\n                        <label>CPF</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCpf.errors && campoCpf.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoCpf.pristine && !campoCpf.errors.required\">CPF é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCpf.errors.parse\">Informe um CPF válido\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoCpf.errors.cpfExistente\">CPF já cadastrado\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input type=\"text\" uiInput [(ngModel)]=\"info.dataNascimento\" name=\"date\"\r\n                               [uiDatePicker]=\"'dataNascimento'\" uiMaskDate #DataNascimento=\"ngModel\"\r\n                               required>\r\n                        <label>Data de Nascimento</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"DataNascimento.errors && DataNascimento.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!DataNascimento.pristine && !DataNascimento.errors.required\">\r\n                                    Data de nascimento é obrigatória\r\n                                </div>\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!DataNascimento.pristine && !DataNascimento.errors.parse\">\r\n                                    Informe uma data válida\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat\" [uiDatePickerCaller]=\"'dataNascimento'\" type=\"button\">\r\n                                <i class=\"material-icons\">today</i>\r\n                            </button>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n                <ui-input-container>\r\n                    <input #campoNome=\"ngModel\" type=\"text\" [(ngModel)]=\"info.nome\" name=\"campoNome\" uiInput required\r\n                           uiMaxlength=\"30\">\r\n                    <label>Nome</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoNome.errors && campoNome.dirty\">\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.pristine && !campoNome.errors.required\">\r\n                                Nome é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoNome.errors.uiMaxlength\">Nome não pode conter\r\n                                mais de 30 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.nome && info.nome.length > 30}\">\r\n                            {{info.nome ? info.nome.length : 0}}/30\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <input #campoSobrenome=\"ngModel\" type=\"text\" [(ngModel)]=\"info.sobrenome\" name=\"campoSobrenome\"\r\n                           uiInput required uiMaxlength=\"30\">\r\n                    <label>Sobrenome</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoSobrenome.errors && campoSobrenome.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoSobrenome.pristine && !campoSobrenome.errors.required\">Nome é\r\n                                obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoSobrenome.errors.uiMaxlength\">Nome não pode\r\n                                conter mais de 30 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\"\r\n                             [ngClass]=\"{'error': info.sobrenome && info.sobrenome.length > 30}\">\r\n                            {{info.sobrenome ? info.sobrenome.length : 0}}/30\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <input #campoTelefone=\"ngModel\" type=\"text\" [(ngModel)]=\"info.telefone\" name=\"campoTelefone\" uiInput\r\n                           required uiMaskPhone>\r\n                    <label>Telefone</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoTelefone.errors && campoTelefone.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoTelefone.pristine && !campoTelefone.errors.required\">Email é\r\n                                obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoTelefone.pristine && !campoTelefone.errors.parse\">Insira um email\r\n                                válido\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n\r\n                <ui-input-container>\r\n                    <input #campoEmail=\"ngModel\" type=\"text\" [(ngModel)]=\"info.email\" name=\"campoEmail\" uiInput required\r\n                           uiMaxlength=\"252\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                    <label>Email</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoEmail.errors && campoEmail.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoEmail.pristine && !campoEmail.errors.required\">Email é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoEmail.pristine && !campoEmail.errors.pattern\">\r\n                                Insira um email válido\r\n                            </div>\r\n                            <div class=\"ui-message error\" [hidden]=\"!campoEmail.errors.uiMaxlength\">Email não pode\r\n                                conter mais de 252 caracteres.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"ui-message counter\" [ngClass]=\"{'error': info.email && info.email.length > 252}\">\r\n                            {{info.email ? info.email.length : 0}}/252\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n\r\n                <ui-input-container>\r\n                    <input #campoSalario=\"ngModel\" type=\"text\" [(ngModel)]=\"info.salario\" name=\"campoSalario\" uiInput\r\n                           required uiMaskCurrency>\r\n                    <label>Salário</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoSalario.errors && campoSalario.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoSalario.pristine && !campoSalario.errors.required\">\r\n                                Salário é obrigatório\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-subheader>Acesso ao sistema</ui-subheader>\r\n                <ui-input-container>\r\n                    <input #campoLogon=\"ngModel\" type=\"text\" [(ngModel)]=\"info.logon\" name=\"campoLogon\" uiInput required\r\n                           uiMaxlength=\"10\" (blur)=\"verifyLogon(formProfessor, info.logon)\">\r\n                    <label>Nome de usuário/Logon</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"campoLogon.errors && campoLogon.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoLogon.pristine && !campoLogon.errors.required\">\r\n                                Logon é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!campoLogon.pristine && !campoLogon.errors.uiMaxlength\">\r\n                                Máximo de 10 caracteres\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoSenha=\"ngModel\" #campoSenhaEv type=\"password\" [(ngModel)]=\"info.senha\" uiInput name=\"campoSenha\" [required]=\"!info.id\" uiMaxlength=\"30\"\r\n                               uiMinlength=\"6\" (blur)=\"senhasIguais(formProfessor)\">\r\n                        <label>{{info.id ? 'Nova senha' : 'Senha'}}</label>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat change-type\" type=\"button\" (click)=\"changeVisibility(campoSenhaEv, 0)\" uiRipple>\r\n                                <i class=\"material-icons\">visibility</i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoSenha.errors && campoSenha.dirty\">form\r\n                                <div class=\"ui-message error\" [hidden]=\"campoSenha.errors.required || !campoSenha.errors.wrongPass\">\r\n                                    Senhas não coincidem\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoSenha.errors.uiMinlength\">\r\n                                    A senha deve ter no mínimo 6 caracteres\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoSenha.pristine && !campoSenha.errors.required\">\r\n                                    Informe uma senha de até 30 caracteres\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoSenha.errors.uiMaxlength\">\r\n                                    {{info.senha ? info.senha.length : 0}}/30\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <input #campoConfirmaSenha=\"ngModel\" #campoConfirmaSenhaEv type=\"password\" [(ngModel)]=\"info.confirmaSenha\" uiInput name=\"campoConfirmaSenha\"\r\n                               [required]=\"!info.id\" uiMaxlength=\"30\" (blur)=\"senhasIguais(formProfessor)\">\r\n                        <label>Confirmação de senha</label>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat change-type\" type=\"button\" (click)=\"changeVisibility(campoConfirmaSenhaEv, 1)\" uiRipple>\r\n                                <i class=\"material-icons\">visibility</i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoConfirmaSenha.errors && campoConfirmaSenha.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"campoConfirmaSenha.errors.required || !campoConfirmaSenha.errors.wrongPass\">\r\n                                    Senhas não coincidem\r\n                                </div>\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoConfirmaSenha.pristine && !campoConfirmaSenha.errors.required\">\r\n                                    Por favor confirme sua senha\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoConfirmaSenha.errors.uiMaxlength\">\r\n                                    {{info.confirmaSenha ? info.confirmaSenha.length : 0}}/30\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n                <!--<ui-chips>\r\n                    <ui-input-container>\r\n                        <input #campoDisciplinas=\"ngModel\" type=\"text\" name=\"campoDisciplinas\" [(ngModel)]=\"chips.search\" uiInput uiAutocomplete\r\n                            (input)=\"loadChips()\" (focus)=\"loadChips()\" [list]=\"chips\" [primary]=\"'nome'\" [loading]=\"chips.loading\"\r\n                            [select]=\"chipSelect.bind(this)\">\r\n                        <label>Disciplinas</label>\r\n                    </ui-input-container>\r\n                    <div *ngFor=\"let selectedChip of info.disciplinas\" class=\"ui-chip\">\r\n                        {{selectedChip.nome}}\r\n                        <div class=\"close ripple-rounded\" uiRipple (click)=\"removeChip(selectedChip)\">\r\n                            <i class=\"material-icons\">add_circle</i>\r\n                        </div>\r\n                    </div>\r\n                </ui-chips>-->\r\n\r\n                <ui-subheader>Endereço</ui-subheader>\r\n\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoCepCartao=\"ngModel\" type=\"text\" [(ngModel)]=\"info.endereco.cep\" uiInput\r\n                               name=\"campoCepCartao\" uiMaskCep required (blur)=\"getCep(formProfessor, info.endereco.cep)\">\r\n                        <label>CEP</label>\r\n                        <div class=\"icon\">\r\n                            <button class=\"ui-button icon flat\" type=\"button\" (click)=\"getCep(formProfessor, info.endereco.cep)\"\r\n                                    uiRipple [disabled]=\"campoCepCartao.errors || !campoCepCartao.dirty\">\r\n                                <ui-progress-radial class=\"indeterminate primary\"\r\n                                                    *ngIf=\"buscandoCep\"></ui-progress-radial>\r\n                                <i class=\"material-icons\">search</i>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoCepCartao.errors && campoCepCartao.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoCepCartao.pristine && !campoCepCartao.errors.required\">\r\n                                    CEP é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoCepCartao.errors.parse && !campoCepCartao.hasError(['invalidCep'])\">\r\n                                    CEP inválido\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <ui-select #campoEstadoCartao=\"ngModel\" name=\"campoEstadoCartao\" [(ngModel)]=\"info.endereco.uf\"\r\n                                   [options]=\"estados\" value=\"sigla\" label=\"nome\"\r\n                                   uiInput required [chosen]=\"true\"></ui-select>\r\n                        <label>\r\n                            Estado\r\n                        </label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoEstadoCartao.errors && campoEstadoCartao.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoEstadoCartao.errors.required\">\r\n                                    Estado é obrigatório\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <ui-select #campoIdCidade=\"ngModel\" name=\"campoIdCidade\" [(ngModel)]=\"info.endereco.idCidade\"\r\n                                   [options]=\"cidades\" value=\"id\" label=\"nome\"\r\n                                   uiInput required [chosen]=\"true\"></ui-select>\r\n                        <label>\r\n                            Cidade\r\n                        </label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoIdCidade.errors && campoIdCidade.dirty\">\r\n                                <div class=\"ui-message error\" [hidden]=\"!campoIdCidade.errors.required\">\r\n                                    Cidade é obrigatória\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <ui-input-container>\r\n                        <input #campoLogradouro=\"ngModel\" type=\"text\" [(ngModel)]=\"info.endereco.logradouro\" uiInput\r\n                               name=\"campoLogradouro\" required uiMaxlength=\"70\">\r\n                        <label>Logradouro</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoLogradouro.errors && campoLogradouro.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoLogradouro.pristine && !campoLogradouro.errors.required\">\r\n                                    Logradouro é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoLogradouro.errors.uiMaxlength\">\r\n                                    {{info.endereco.logradouro ? info.endereco.logradouro.length : 0}}/70\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n                <div class=\"ui-flex-container break-on-s600\">\r\n                    <ui-input-container>\r\n                        <input #campoNumeroEnd=\"ngModel\" type=\"text\" [(ngModel)]=\"info.endereco.numero\" uiInput\r\n                               name=\"campoNumeroEnd\" required uiMaxlength=\"15\">\r\n                        <label>Número</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoNumeroEnd.errors && campoNumeroEnd.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoNumeroEnd.pristine && !campoNumeroEnd.errors.required\">\r\n                                    Número é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoNumeroEnd.errors.uiMaxlength\">\r\n                                    {{info.endereco.numero ? info.endereco.numero.length : 0}}/15\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n\r\n                    <ui-input-container>\r\n                        <input #campoBairroCartao=\"ngModel\" type=\"text\" [(ngModel)]=\"info.endereco.bairro\" uiInput\r\n                               name=\"campoBairroCartao\" required uiMaxlength=\"50\">\r\n                        <label>Bairro</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"campoBairroCartao.errors && campoBairroCartao.dirty\">\r\n                                <div class=\"ui-message error\"\r\n                                     [hidden]=\"!campoBairroCartao.pristine && !campoBairroCartao.errors.required\">\r\n                                    Bairro é obrigatório\r\n                                </div>\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!campoBairroCartao.errors.uiMaxlength\">\r\n                                    {{info.endereco.bairro ? info.endereco.bairro.length : 0}}/50\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </div>\r\n\r\n\r\n                <div class=\"ui-fab-container\">\r\n                    <button class=\"ui-button accent fab\" uiRipple>\r\n                        <i class=\"material-icons\">save</i>\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n</div>\r\n\r\n<ui-menu #menuDelete>\r\n    <div class=\"ui-menu-content size-2x\">\r\n        <ui-subheader>Deseja excluir?</ui-subheader>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"confirmDelete()\">\r\n            Sim\r\n        </div>\r\n        <div class=\"ui-menu-item\" uiRipple>\r\n            Não\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n"

/***/ }),

/***/ "./src/app/views/main/professor/info/professor-info.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/professor/info/professor-info.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ui-card {\n  margin-bottom: 16px; }\n  @media (max-width: 760px) {\n    :host ui-card {\n      margin-bottom: 85px; } }\n"

/***/ }),

/***/ "./src/app/views/main/professor/info/professor-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/main/professor/info/professor-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInfoComponent", function() { return ProfessorInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfessorInfoComponent = /** @class */ (function () {
    function ProfessorInfoComponent(titleService, toolbarService, router, activedRoute, api, element) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.router = router;
        this.activedRoute = activedRoute;
        this.api = api;
        this.element = element;
        this.info = {
            endereco: {}
        };
        this.estados = [];
        this.cidades = [];
    }
    ProfessorInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('UnifaSystem - Professor');
        this.toolbarService.set('Professor');
        this.toolbarService.activateExtendedToolbar(600);
        if (this.activedRoute.snapshot.params['id']) {
            setTimeout(function () {
                _this.addingNew = false;
            });
            this.getInfo();
        }
        else {
            setTimeout(function () {
                _this.addingNew = true;
            });
        }
        this.getEstados();
        this.getCidades();
    };
    ProfessorInfoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    ProfessorInfoComponent.prototype.onSubmit = function (form) {
        var _this = this;
        for (var control in form.controls) {
            if (form.controls.hasOwnProperty(control)) {
                form.controls[control].markAsTouched();
                form.controls[control].markAsDirty();
            }
        }
        if (!form.valid) {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiElement"].focus(this.element.nativeElement.querySelector('form .ng-invalid'));
            return false;
        }
        if (this.addingNew) {
            this.api
                .prep('administracao', 'professor', 'inserir')
                .call(this.info)
                .subscribe(function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Professor cadastrado com sucesso!'
                });
                _this.router.navigate(['professor']);
            });
        }
        else {
            this.api
                .prep('administracao', 'professor', 'atualizar')
                .call(this.info)
                .subscribe(function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Professor alterado com sucesso!'
                });
                _this.router.navigate(['professor']);
            });
        }
    };
    ProfessorInfoComponent.prototype.getInfo = function () {
        var _this = this;
        this.api
            .prep('administracao', 'professor', 'selecionarPorId')
            .call({
            id: this.activedRoute.snapshot.params.id
        })
            .subscribe(function (data) {
            _this.info = data.content;
        }, function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Não foi possível buscar os dados'
            });
        });
    };
    ProfessorInfoComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.api
            .prep('administracao', 'professor', 'excluir')
            .call({ id: this.info.id })
            .subscribe(function () {
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                text: 'Professor removido com sucesso'
            });
            _this.router.navigate(['professor']);
        });
    };
    ProfessorInfoComponent.prototype.getCep = function (form, value) {
        var _this = this;
        if (!this.buscandoCep) {
            this.buscandoCep = true;
            this.api
                .http('GET', "https://viacep.com.br/ws/" + value + "/json/")
                .call()
                .subscribe(function (res) {
                if (!res.erro) {
                    _this.info.bairro = res.bairro;
                    _this.info.logradouro = res.logradouro;
                    _this.info.uf = res.uf;
                    _this.info.idCidade = res.ibge;
                }
                else {
                    form.controls.campoCepCartao.setErrors({ invalidCep: true });
                    _this.info.bairro = '';
                    _this.info.logradouro = '';
                    _this.info.uf = null;
                    _this.info.idCidade = '';
                }
            }, function (err) {
                console.log(err);
            }, function () {
                _this.buscandoCep = false;
            });
        }
    };
    ProfessorInfoComponent.prototype.verifyLogon = function (form, logon) {
        var _this = this;
        if (logon.length) {
            this.api
                .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].AUTH_API + "/login/dados")
                .call({ login: logon })
                .subscribe(function (res) {
                form.controls.campoLogon.setErrors({ alreadyExist: true });
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Logon já cadastrado, por favor escolha outro'
                });
            }, null, function () {
                _this.buscandoCep = false;
            });
        }
    };
    ProfessorInfoComponent.prototype.getEstados = function () {
        var _this = this;
        this.api
            .prep('administracao', 'estado', 'selecionar')
            .call()
            .subscribe(function (data) {
            _this.estados = data.content;
        });
    };
    ProfessorInfoComponent.prototype.getCidades = function () {
        var _this = this;
        this.api
            .prep('administracao', 'cidade', 'selecionar')
            .call({ uf: this.info.uf || '' })
            .subscribe(function (data) {
            _this.cidades = data.content;
        });
    };
    ProfessorInfoComponent.prototype.senhasIguais = function (form) {
        if (this.info.senha && this.info.confirmaSenha) {
            if (this.info.senha !== this.info.confirmaSenha) {
                form.controls['campoSenha'].setErrors({ wrongPass: true });
                form.controls['campoConfirmaSenha'].setErrors({ wrongPass: true });
                return false;
            }
            form.controls['campoSenha'].updateValueAndValidity();
            form.controls['campoConfirmaSenha'].updateValueAndValidity();
        }
    };
    ProfessorInfoComponent.prototype.changeVisibility = function (el, btn) {
        if (el.type === 'text') {
            el.type = 'password';
            this.element.nativeElement.querySelectorAll('.change-type i')[btn].innerHTML = 'visibility';
        }
        else {
            el.type = 'text';
            this.element.nativeElement.querySelectorAll('.change-type i')[btn].innerHTML = 'visibility_off';
        }
    };
    ProfessorInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'professor-info-component',
            template: __webpack_require__(/*! ./professor-info.component.html */ "./src/app/views/main/professor/info/professor-info.component.html"),
            styles: [__webpack_require__(/*! ./professor-info.component.scss */ "./src/app/views/main/professor/info/professor-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProfessorInfoComponent);
    return ProfessorInfoComponent;
}());



/***/ }),

/***/ "./src/app/views/main/professor/list/professor-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/professor/list/professor-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s480\">\r\n    <ui-card class=\"elevate-on-toolbar\">\r\n        <ui-data-table class=\"responsive\">\r\n            <tbody>\r\n            <tr>\r\n                <th>\r\n                    Nome\r\n                </th>\r\n                <th>\r\n                    Status\r\n                </th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of list\" [routerLink]=\"['/professor', item.id]\">\r\n                <td data-title=\"Nome\" [class.empty]=\"!item.nome\">\r\n                    <span class=\"ellipsis\">\r\n                        {{item.nome}}\r\n                    </span>\r\n                </td>\r\n                <td data-title=\"Status\" [class.empty]=\"!item.ativo\">\r\n                    <span class=\"ellipsis\">\r\n                        {{item.ativo ? 'Ativo' : 'Inativo'}}\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr class=\"empty\" *ngIf=\"!list || !list.length\">\r\n                <td colspan=\"4\">{{loading ? 'Carregando...' : 'Nenhum curso encontrado'}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"align-right\">\r\n                    <div class=\"ui-button-container align-right\">\r\n                        <span class=\"pagination\" *ngIf=\"totalLinhas\">\r\n                            {{((pagina - 1) * 10) + 1}}-{{pagina * 10 < totalLinhas ? pagina * 10 : totalLinhas}} de {{totalLinhas}}\r\n                        </span>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"pagina < 2\"\r\n                                (click)=\"pagina = pagina - 1; getInfo();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                        </button>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"totalLinhas < pagina * 10\"\r\n                                (click)=\"pagina = pagina + 1; getInfo();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </ui-data-table>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n        <button class=\"ui-button accent fab\" uiRipple [routerLink]=\"['novo']\">\r\n            <i class=\"material-icons\">add</i>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/professor/list/professor-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/main/professor/list/professor-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/professor/list/professor-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/main/professor/list/professor-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorListComponent", function() { return ProfessorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfessorListComponent = /** @class */ (function () {
    function ProfessorListComponent(titleService, toolbarService, element, router, api) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.element = element;
        this.router = router;
        this.api = api;
        this.list = [];
        this.pagina = 1;
    }
    ProfessorListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('UnfaSystem - Professor');
        this.toolbarService.set('Lista de professores');
        this.toolbarService.activateExtendedToolbar(480);
        this.getInfo();
    };
    ProfessorListComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    ProfessorListComponent.prototype.getInfo = function () {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            this.api
                .prep('administracao', 'professor', 'selecionar')
                .call({
                filtro: '',
                pagina: this.pagina,
                linhas: 10
            })
                .subscribe(function (data) {
                _this.list = data.content;
                _this.totalLinhas = data.totalLinhas;
            }, function () {
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Não foi possível carregar os professores'
                });
            }, function () {
                _this.loading = false;
            });
        }
    };
    ProfessorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'professor-list-component',
            template: __webpack_require__(/*! ./professor-list.component.html */ "./src/app/views/main/professor/list/professor-list.component.html"),
            styles: [__webpack_require__(/*! ./professor-list.component.scss */ "./src/app/views/main/professor/list/professor-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProfessorListComponent);
    return ProfessorListComponent;
}());



/***/ }),

/***/ "./src/app/views/main/professor/professor.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/main/professor/professor.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/main/professor/professor.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/main/professor/professor.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorComponent", function() { return ProfessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorComponent = /** @class */ (function () {
    function ProfessorComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    ProfessorComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Professores');
        this.toolbarService.set('Professores');
    };
    ProfessorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'professor-component',
            template: __webpack_require__(/*! ./professor.component.html */ "./src/app/views/main/professor/professor.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"]])
    ], ProfessorComponent);
    return ProfessorComponent;
}());



/***/ }),

/***/ "./src/app/views/main/professor/professor.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/main/professor/professor.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorModule", function() { return ProfessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _professor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professor.component */ "./src/app/views/main/professor/professor.component.ts");
/* harmony import */ var _list_professor_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/professor-list.component */ "./src/app/views/main/professor/list/professor-list.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _info_professor_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info/professor-info.component */ "./src/app/views/main/professor/info/professor-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProfessorModule = /** @class */ (function () {
    function ProfessorModule() {
    }
    ProfessorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            exports: [],
            declarations: [_professor_component__WEBPACK_IMPORTED_MODULE_1__["ProfessorComponent"], _list_professor_list_component__WEBPACK_IMPORTED_MODULE_2__["ProfessorListComponent"], _info_professor_info_component__WEBPACK_IMPORTED_MODULE_4__["ProfessorInfoComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ProfessorModule);
    return ProfessorModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // Sistema
    SYSTEM_PREFIX: 'UnifaSystem',
    // SMN Auth
    AUTH_API: 'http://localhost:4200',
    AUTH_BY_EMAIL: false // O sistema faz o login atráves do e-mail
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ghilherme\Desktop\Projetos\Projeto UnifaSystem\unifasystem-web-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map