/* */ 
(function(process) {
  'use strict';
  Object.defineProperty(exports, '__esModule', {value: true});
  exports['default'] = bundle;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {'default': obj};
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0,
          arr2 = Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var _writers = require("./writers");
  var _module2 = require("./module");
  var _module3 = _interopRequireDefault(_module2);
  var _utilEvents = require("./util/events");
  var _utilEvents2 = _interopRequireDefault(_utilEvents);
  var _utilFilterBindings = require("./util/filter-bindings");
  var _utilFilterBindings2 = _interopRequireDefault(_utilFilterBindings);
  function bundle(moduleName, provider) {
    var _Module;
    var bindings = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var getProviders = function getProviders(t) {
      return _writers.appWriter.get('providers', t) || [];
    };
    var getModules = function getModules(t) {
      return _writers.appWriter.get('modules', t) || [];
    };
    var _filterBindings = (0, _utilFilterBindings2['default'])([provider].concat(_toConsumableArray(bindings)));
    var startingModules = _filterBindings.modules;
    var startingProviders = _filterBindings.providers;
    var providers = new Set();
    var modules = new Set(startingModules);
    function parseProvider(provider) {
      if (provider && !providers.has(provider)) {
        providers.add(provider);
        getModules(provider).forEach(function(mod) {
          return modules.add(mod);
        });
        getProviders(provider).forEach(parseProvider);
      }
    }
    startingProviders.forEach(parseProvider);
    return (_Module = (0, _module3['default'])(moduleName, [].concat(_toConsumableArray(modules.values())))).add.apply(_Module, _toConsumableArray(_utilEvents2['default'].resolve()).concat(_toConsumableArray(providers.values())));
  }
  module.exports = exports['default'];
})(require("process"));
