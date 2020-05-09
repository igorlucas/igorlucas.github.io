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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 20rem;\r\n}\r\n\r\nmat-spinner {\r\n    margin: 8rem auto !important;\r\n}\r\n\r\n.page {\r\n    margin-top: 3rem;\r\n}\r\n\r\nnav {\r\n    background-color: rgb(2, 2, 56);\r\n}\r\n\r\n.navbar{\r\n    color: white;\r\n}\r\n\r\n.nav_item{\r\n    color: white;\r\n}\r\n\r\n.menu {\r\n    color     : aliceblue;\r\n    margin-top: 20px;\r\n}\r\n\r\n/* .menu a:hover {\r\n    font-size: larger;\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [ngStyle]='containerStyle'>\n  <mat-sidenav [ngStyle]=\"sidenavStyle\" #sidenav [(opened)]=\"opened\" mode=\"over\">\n    <mat-nav-list>\n      <div class=\"container text-center menu\">\n        <p>INDICADORE</p>\n        <hr>\n        <a class=\"nav_item\" mat-list-item routerLink=\"#\">Data x Quantidade</a>\n      </div>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n      <div style=\"cursor: pointer;\" (click)=\"sidenav.toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </div>\n      <div style=\"margin-left:1rem\">ICovid19-CE</div>\n    </nav>\n    <!-- <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div> -->\n    <div class=\"container page\">\n      <div class=\"chart_filter\">\n        <mat-form-field>\n          <mat-label>Datas</mat-label>\n          <mat-select [(value)]=\"filtro.campoData\">\n            <mat-option *ngFor=\"let df of datasFiltro\" [value]=\"df\">\n              {{df.descricao}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>Data Início</mat-label>\n          <input matInput [matDatepicker]=\"picker1\" name=\"dataInicio\" [(ngModel)]=\"filtro.dataInicio\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>Data Fim</mat-label>\n          <input matInput [matDatepicker]=\"picker2\" name=\"dataFim\" [(ngModel)]=\"filtro.dataFim\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <mat-datepicker #picker2></mat-datepicker>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!filtro.dataFim\" (click)=\"filtrar()\">Filtrar</button>\n      </div>\n      <div class=\"chart\">\n        <div class=\"chart_title\">\n          <div>{{filtro.campoData.descricao}}</div>\n          <div *ngIf=\"filtro.dataInicio && filtro.dataFim\">{{filtro.dataInicio | date}} até {{filtro.dataFim | date}}</div>\n        </div>\n        <div class=\"chart_body\">\n          <div *ngIf=\"indicadores; else elseBlock\">\n            <app-line-chart *ngIf=\"indicadores\" id=\"1\" [data]=\"indicadores\"></app-line-chart>\n          </div>\n          <ng-template #elseBlock>\n            <mat-spinner></mat-spinner>\n          </ng-template>\n        </div>\n      </div>\n    </div>    \n  </mat-sidenav-content>\n</mat-sidenav-container>"

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
/* harmony import */ var _services_casos_covid_ce_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/casos-covid-ce.service */ "./src/app/services/casos-covid-ce.service.ts");
/* harmony import */ var _models_filtro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/filtro */ "./src/app/models/filtro.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(casosCovidService) {
        this.casosCovidService = casosCovidService;
        this.title = 'iCovid19';
        // stilos
        this.containerStyle = {
            'height': screen.height + "px"
        };
        this.sidenavStyle = {
            'background-color': 'rgb(2, 2, 56)',
            'width': "200px"
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadDatasFiltro();
        this.filtro = new _models_filtro__WEBPACK_IMPORTED_MODULE_2__["Filtro"](this.datasFiltro);
        this.loadIndicadores();
    };
    AppComponent.prototype.loadDatasFiltro = function () {
        this.datasFiltro = [
            { campo: 'dataEntradaUtisSvep', descricao: 'Data de entrada na UTI' },
            { campo: 'dataEvolucaoCasoSivep', descricao: 'Data do diagnóstico de evolução' },
            { campo: 'dataInicioSintomas', descricao: 'Data de início dos sintomas' },
            { campo: 'dataInternacaoSivep', descricao: 'Data de início dos sintomas' },
            { campo: 'dataNotificacao', descricao: 'Data de notificação do exame' },
            { campo: 'dataObito', descricao: 'Data do óbito' },
            { campo: 'dataResultadoExame', descricao: 'Data do resultado do exame' },
            { campo: 'dataSaidaUtisSvep', descricao: 'Data de saída da UTI' },
            { campo: 'dataSolicitacaoExame', descricao: 'Data de solicitação de exame' },
        ];
        //1 dataEntradaUtisSvep - Data de entrada na UTI - Data
        //2 dataEvolucaoCasoSivep - Data do diagnóstico de evolução - Data
        //3 dataInicioSintomas - Data de início dos sintomas - Data
        //4 dataInternacaoSivep - Data de internação do paciente - Data
        //5 dataNotificacao - Data de notificação do exame - Data
        //6 dataObito - Data do óbito - Data
        //7 dataResultadoExame - Data do resultado do exame - Data
        //8 dataSaidaUtisSvep - Data de saída da UTI - Data
        //9 dataSolicitacaoExame - Data de solicitação de exame - Data
    };
    AppComponent.prototype.loadIndicadores = function () {
        var _this = this;
        var dataInicio = this.filtro.dataInicio.getFullYear() + "-" + (this.filtro.dataInicio.getMonth() + 1) + "-" + this.filtro.dataInicio.getDate();
        var dataFim = this.filtro.dataFim.getFullYear() + "-" + (this.filtro.dataFim.getMonth() + 1) + "-" + this.filtro.dataFim.getDate();
        this.casosCovidService.getCasos(dataInicio, dataFim).subscribe(function (res) {
            var filtroData = _this.filtro.campoData.campo;
            _this.casos = res.filter(function (r) { return r[filtroData]; }).sort(function (a, b) { return b[filtroData] - a[filtroData]; });
            var datasAnteriores = new Array();
            var lista = [];
            _this.casos.forEach(function (c) {
                if (datasAnteriores && !datasAnteriores.includes(c[filtroData])) {
                    var data = new Date(c[filtroData]);
                    var total = _this.casos
                        .filter(function (e) { return e[filtroData] == c[filtroData]; })
                        .sort(function (a, b) { return b[filtroData] - a[filtroData]; })
                        .length;
                    lista.push({ data: data, total: total });
                }
                datasAnteriores.push(c.dataObito);
            });
            _this.indicadores = lista;
        });
    };
    AppComponent.prototype.filtrar = function () {
        this.indicadores = null;
        this.loadIndicadores();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_casos_covid_ce_service__WEBPACK_IMPORTED_MODULE_1__["CasosCovidCeService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]
            ],
            imports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/line-chart/line-chart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chartdiv_{{id}}\" style=\"width: 100%; height: 500px\"></div>\n"

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.ts ***!
  \****************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(zone) {
        this.zone = zone;
    }
    LineChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            //Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]("chartdiv_" + _this.id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            chart.dateFormatter.inputDateFormat = "dd-MM-yyyyy";
            //Add data
            chart.data = _this.data.sort(function (a, b) { return b.data.getTime() - a.data.getTime(); });
            //Create axes
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
            dateAxis.startLocation = 0.5;
            dateAxis.endLocation = 0.5;
            //Create value axis
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            //Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
            series.dataFields.valueY = "total";
            series.dataFields.dateX = "data";
            series.strokeWidth = 3;
            series.tooltipText = "{valueY.value}";
            series.fillOpacity = 0.1;
            //Create a range to change stroke for values below 0
            var range = valueAxis.createSeriesRange(series);
            range.value = 0;
            range.endValue = -1000;
            range.contents.stroke = chart.colors.getIndex(4);
            range.contents.fill = range.contents.stroke;
            range.contents.strokeOpacity = 0.7;
            range.contents.fillOpacity = 0.1;
            //Add cursor
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
            chart.cursor.xAxis = dateAxis;
            chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]();
            series.tooltip.getFillFromObject = false;
            series.tooltip.adapter.add("x", function (x, target) {
                if (series.tooltip.tooltipDataItem.valueY < 0) {
                    series.tooltip.background.fill = chart.colors.getIndex(4);
                }
                else {
                    series.tooltip.background.fill = chart.colors.getIndex(0);
                }
                return x;
            });
            _this.chart = chart;
        });
    };
    LineChartComponent.prototype.ngOnInit = function () {
        //this.container = "chartdiv_" + this.id;
        console.log(this);
    };
    LineChartComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LineChartComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LineChartComponent.prototype, "data", void 0);
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(/*! ./line-chart.component.html */ "./src/app/line-chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.css */ "./src/app/line-chart/line-chart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [Material],
            exports: [Material]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/filtro.ts":
/*!**********************************!*\
  !*** ./src/app/models/filtro.ts ***!
  \**********************************/
/*! exports provided: Filtro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filtro", function() { return Filtro; });
var Filtro = /** @class */ (function () {
    function Filtro(_campoData) {
        this.dataInicio = new Date("2020-03-01T03:00:00.000+0000");
        this.dataFim = new Date();
        this.campoData = _campoData.filter(function (c) { return c.campo == "dataObito"; })[0];
    }
    return Filtro;
}());



/***/ }),

/***/ "./src/app/services/casos-covid-ce.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/casos-covid-ce.service.ts ***!
  \****************************************************/
/*! exports provided: CasosCovidCeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasosCovidCeService", function() { return CasosCovidCeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CasosCovidCeService = /** @class */ (function () {
    function CasosCovidCeService(http) {
        this.http = http;
        this.dataPrimeiroCasoString = "2020-03-01";
        this.dataPrimeiroCasoDate = new Date("2020-03-01T03:00:00.000+0000");
        this.api = "https://indicadores.integrasus.saude.ce.gov.br/api/casos-coronavirus";
    }
    CasosCovidCeService.prototype.getCasos = function (dataInicio, dataFim) {
        return this.http.get(this.api + "?dataInicio=" + dataInicio + "&dataFim=" + dataFim);
    };
    CasosCovidCeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CasosCovidCeService);
    return CasosCovidCeService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\appCovid\iCovid19\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map