/* */ 
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var _eventEmitter = require("./event-emitter");
exports['default'] = function(instance, element, $scope, events) {
  var subscriptions = [];
  var create = function create(eventKey, emitter) {
    return emitter.observer({next: function next(data) {
        var event = new Event(eventKey, {
          detail: data,
          bubbles: true
        });
        element.dispatchEvent(event);
      }});
  };
  for (var key in events) {
    if (instance[key] && instance[key] instanceof _eventEmitter.EventEmitter) {
      subscriptions.push(create(events[key], instance[key]));
    }
  }
  $scope.$on('$destroy', function() {
    subscriptions.forEach(function(subscription) {
      return subscription.dispose();
    });
  });
};
module.exports = exports['default'];
