var app = angular.module("myapp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {templateUrl: 'views/projects.html', controller: 'mainController'});
	$routeProvider.when('/wiki', {templateUrl: 'views/wiki.html', controller: 'wikiController'});
});
