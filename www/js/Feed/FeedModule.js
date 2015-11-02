angular.module("FeedModule").
	.config(function($stateProvider, $urlRouterProvider) {
	 $stateProvider

		  // setup an abstract state for the tabs directive
		   .state('tab', {
		    url: '/tab',
		    abstract: true,
		    templateUrl: 'templates/tabs.html'
		  })
});