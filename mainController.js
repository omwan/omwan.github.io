app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "Olivia Wan";
    $scope.subtitle = "Computer Science + Biology"
    $http.get('projects.json').success(function (data) {
        $scope.contents = data;
    });
    $http.get('links.json').success(function (data) {
        $scope.links = data;
    });
    $scope.footer = "See other things I've done on my LinkedIn or resume, or contant me via my email. Made with GitHub Pages and AngularJS. Olivia Wan, 2016";
}]);
