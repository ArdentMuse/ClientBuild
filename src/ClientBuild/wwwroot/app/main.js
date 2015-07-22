System.register(["Person"], function(exports_1) {
    var Person_1;
    var person;
    return {
        setters:[
            function (_Person_1) {
                Person_1 = _Person_1;
            }],
        execute: function() {
            //var person = new Person("Stacy Gay");
            person = Person_1.Person.factory();
            person.sayHello();
        }
    }
});
