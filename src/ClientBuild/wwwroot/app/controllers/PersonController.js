System.register(["../Person"], function(exports_1) {
    var Person_1;
    var PersonController;
    return {
        setters:[
            function (_Person_1) {
                Person_1 = _Person_1;
            }],
        execute: function() {
            PersonController = (function () {
                function PersonController() {
                    this.person = new Person_1.Person("stacy");
                }
                return PersonController;
            })();
            exports_1("PersonController", PersonController);
        }
    }
});
