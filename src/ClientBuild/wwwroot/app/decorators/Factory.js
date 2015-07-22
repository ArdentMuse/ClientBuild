System.register([], function(exports_1) {
    function Factory(target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            return new c();
        }
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log("New: " + original.name);
            return construct(original, args);
        };
        f.prototype = original.prototype;
        f.factory = function () { return new f("Stacy"); };
        return f;
    }
    exports_1("Factory", Factory);
    return {
        setters:[],
        execute: function() {
        }
    }
});
