import {Person} from "Person";
import {PersonController} from "controllers/PersonController";
import angular from "angular";

var person = new Person("Stacy Gay");
//var person = Person.factory();
person.sayHello();

var app = angular.module("app", []);

app.controller("PersonController", PersonController);