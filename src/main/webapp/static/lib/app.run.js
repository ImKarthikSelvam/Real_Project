(function () {
  'use strict';

  angular.module('gluabtekapp', [
    'ui.router', 'ngSanitize'
  ]).run(['$rootScope', function ($rootScope) {

       //create a new instance
       new WOW().init();

    $rootScope.$on('$routeChangeSuccess', function (next, current) {
        //when the view changes sync wow
        new WOW().sync();
    });
}]);

})();  