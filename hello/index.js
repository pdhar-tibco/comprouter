"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// This module was fully migrated to Angular 2
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var helloworld_cmp_1 = require("./helloworld_cmp");
var world_cmp_1 = require("./world_cmp");
var hello_cmp_1 = require("./hello_cmp");
var HelloWorldNgModule = (function () {
    function HelloWorldNgModule() {
    }
    return HelloWorldNgModule;
}());
HelloWorldNgModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'helloworld',
                    component: helloworld_cmp_1.HelloWorldCmp,
                    children: [
                        { path: 'hello', component: hello_cmp_1.HelloCmp },
                        { path: 'world', component: world_cmp_1.WorldCmp },
                        { path: '', redirectTo: "hello" },
                    ] },
            ])
        ],
        declarations: [helloworld_cmp_1.HelloWorldCmp, hello_cmp_1.HelloCmp, world_cmp_1.WorldCmp]
    }),
    __metadata("design:paramtypes", [])
], HelloWorldNgModule);
exports.HelloWorldNgModule = HelloWorldNgModule;
//# sourceMappingURL=index.js.map