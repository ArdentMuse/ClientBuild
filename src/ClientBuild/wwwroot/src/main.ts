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
