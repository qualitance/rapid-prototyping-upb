angular.module("ProfileModule")
	.config(function($stateProvider, $urlRouterProvider) {
	 $stateProvider

	 .state('tab.profile', {
	      url: '/profile',
	      views: {
	        'tab-profile': {
	          templateUrl: 'templates/tab-profile.html',
	          controller: 'ProfileController'
	        }
	      }
	    })
});
