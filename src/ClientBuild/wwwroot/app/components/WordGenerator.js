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
};System.register(["ng-decorate"], function(exports_1) {
    var ng_decorate_1;
    var WordGenerator;
    return {
        setters:[
            function (_ng_decorate_1) {
                ng_decorate_1 = _ng_decorate_1;
            }],
        execute: function() {
            WordGenerator = (function () {
                function WordGenerator() {
                }
                WordGenerator = __decorate([
                    ng_decorate_1.Component({
                        selector: "word-generator"
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordGenerator);
                return WordGenerator;
            })();
            exports_1("default", WordGenerator);
        }
    }
});
