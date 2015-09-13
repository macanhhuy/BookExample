'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		})
		.state('setup_keyboard', {
			url: '/setup_keyboard',
			templateUrl: 'modules/core/views/setup_keyboard.client.view.html'
		})
		.state('subscribe', {
			url: '/subscribe',
			templateUrl: 'modules/core/views/subscribe.client.view.html'
		})
		.state('leave_feedback', {
			url: '/leave_feedback',
			templateUrl: 'modules/core/views/leave_feedback.client.view.html'
		});
	}
]);
