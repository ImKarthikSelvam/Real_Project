/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('gluabtekapp')
      .directive('pageHeader', pageHeader);

  /** @ngInject */
  function pageHeader() {
    return {
      restrict: 'E',
      templateUrl: 'static/pages/pageHeader.html'
    };
  }

})();