var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person;
})();
exports.Person = Person;
