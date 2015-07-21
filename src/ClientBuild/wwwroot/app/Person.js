System.register([], function(exports_1) {
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person(name) {
                    this.name = name;
                }
                Person.prototype.sayHello = function () {
                    console.log("Hello " + this.name);
                };
                return Person;
            })();
            exports_1("Person", Person);
        }
    }
});
