
var angular = require('angular');

angular.module('fswd.userTools', [])
  .controller('QueryCtrl', function(){
    this.greeting='this is from the QueryCtrl';
  })
module.exports = angular.module('fswd.userTools');
