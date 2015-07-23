System.register(["Person", "controllers/PersonController", "angular"], function(exports_1) {
    var Person_1, PersonController_1, angular_1;
    var person, app;
    return {
        setters:[
            function (_Person_1) {
                Person_1 = _Person_1;
            },
            function (_PersonController_1) {
                PersonController_1 = _PersonController_1;
            },
            function (_angular_1) {
                angular_1 = _angular_1;
            }],
        execute: function() {
            person = new Person_1.Person("Stacy Gay");
            //var person = Person.factory();
            person.sayHello();
            app = angular_1.default.module("app", []);
            app.controller("PersonController", PersonController_1.PersonController);
        }
    }
});
