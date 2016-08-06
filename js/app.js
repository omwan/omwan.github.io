var app = angular.module("myapp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {templateUrl: 'views/main.html', controller: 'mainController'});
	$routeProvider.when('/projects', {templateUrl: 'views/projects.html', controller: 'projectController'});
	$routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'aboutController'});
});
