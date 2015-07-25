System.register(["controllers/PersonController", "angular"], function(exports_1) {
    var PersonController_1;
    var person, app;
    return {
        setters:[
            function (_PersonController_1) {
                PersonController_1 = _PersonController_1;
            },
            function (_) {}],
        execute: function() {
            person = new PersonController_1.default();
            //var person = Person.factory();
            console.log(person.getHello());
            app = angular.module("app", []);
            app.controller("PersonController", PersonController_1.default);
        }
    }
});
