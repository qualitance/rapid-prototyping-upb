angular.module("FeedModule").
	.config(function($stateProvider, $urlRouterProvider) {
	 $stateProvider

	 .state('tab.tab-feed', {
	      url: '/feed/',
	      views: {
	        'tab-feed': {
	          templateUrl: 'templates/tab-feed.html',
	          controller: 'FeedController'
	        }
	      }
	    })
});