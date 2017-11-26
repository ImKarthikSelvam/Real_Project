(function () {
  'use strict';

  angular.module('gluabtekapp')
      .controller('LookupCtrl', LookupCtrl);

  /** @ngInject */
  function LookupCtrl($scope, $http) {
	console.log("inside LookupCtrl");
  }

})();
