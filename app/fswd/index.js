
var angular = require('angular');

angular.module("fswd", [require('./registration').name, require('./userTools').name, require('angular-route/index')])

angular.element(function() {
    angular.bootstrap(document, ['fswd']);
});
