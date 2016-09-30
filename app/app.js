angular.module('heroApp', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/', {
		template: '<hero-list></hero-list>'
	}).otherwise({ redirectTo: '/' });
});