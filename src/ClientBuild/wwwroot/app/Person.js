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
};System.register(["decorators/Factory"], function(exports_1) {
    var Factory_1;
    var Person;
    return {
        setters:[
            function (_Factory_1) {
                Factory_1 = _Factory_1;
            }],
        execute: function() {
            Person = (function () {
                function Person(name) {
                    this.name = name;
                }
                Person.prototype.sayHello = function () {
                    console.log(this.getHello());
                };
                Person.prototype.getHello = function () {
                    return "Hello " + this.name;
                };
                Person = __decorate([
                    Factory_1.Factory, 
                    __metadata('design:paramtypes', [String])
                ], Person);
                return Person;
            })();
            exports_1("Person", Person);
        }
    }
});
