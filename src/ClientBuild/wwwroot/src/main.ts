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


import "angular";
import "angular-ui-router";
//import {Component, View, Inject, EventEmitter, bootstrap} from "ng-forward";
import {Component, View, bootstrap} from "ng-forward";
@Component({ selector: 'nested' })
@View({ template: '<h3>Nested</h3>' })
class Nested { }

bootstrap(Nested);