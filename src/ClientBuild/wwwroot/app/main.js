/*
import {Person} from "Person";

import PersonController from "controllers/PersonController";
import "angular";
import WordGenerator from "components/WordGenerator";
//import "bootstrap";

var person = new PersonController();
//var person = Person.factory();
console.log(person.getHello());

var app = angular.module("app", []);

app.controller("PersonController", PersonController);
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(["angular", "angular-ui-router", "ng-forward"], function(exports_1) {
    var ng_forward_1;
    var Nested;
    return {
        setters:[
            function (_) {},
            function (_) {},
            function (_ng_forward_1) {
                ng_forward_1 = _ng_forward_1;
            }],
        execute: function() {
            Nested = (function () {
                function Nested() {
                }
                Nested = __decorate([
                    ng_forward_1.Component({ selector: 'nested' }),
                    ng_forward_1.View({ template: '<h3>Nested</h3>' }), 
                    __metadata('design:paramtypes', [])
                ], Nested);
                return Nested;
            })();
            ng_forward_1.bootstrap(Nested);
        }
    }
});
