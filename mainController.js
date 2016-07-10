app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.title = "Olivia Wan";
    $scope.subtitle = "Computer Science + Biology"
    $http.get('projects.json').success(function (data) {
        $scope.contents = data;
    });
    $http.get('links.json').success(function (data) {
        $scope.links = data;
    });
    $scope.footer = "© Olivia Wan, 2016. Made with AngularJS and Materialize Framework.";
}]);
