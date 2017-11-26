(function () {
  'use strict';

  angular.module('gluabtekapp', [
    'ui.router'
  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $httpProvider, $stateProvider) {
	  	
	  $urlRouterProvider.when('', '/home');
	  	
	    $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: 'static/pages/index.html',
	      controller: 'LookupCtrl',
	    });

	    $stateProvider
	    .state('aboutus', {
	      url: '/aboutus',
	      templateUrl: 'static/pages/aboutus.html',
	      controller: 'LookupCtrl',
	    });
	    
	    $stateProvider
	    .state('services', {
	      url: '/services',
	      templateUrl: 'static/pages/services.html',
	      controller: 'LookupCtrl',
	    });
	    
	    $stateProvider
	    .state('portfolio', {
	      url: '/portfolio',
	      templateUrl: 'static/pages/portfolio.html',
	      controller: 'LookupCtrl',
	    });
	    
	    $stateProvider
	    .state('blog', {
	      url: '/blog',
	      templateUrl: 'static/pages/blog.html',
	      controller: 'LookupCtrl',
	    });
	    
	    $stateProvider
	    .state('contactus', {
	      url: '/contactus',
	      templateUrl: 'static/pages/contactus.html',
	      controller: 'LookupCtrl',
	    });

  }

})();
