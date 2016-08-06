app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('projects.json').success(function (data) {
        $scope.contents = data;
    });
    $http.get('links.json').success(function (data) {
        $scope.links = data;
    });
}]);
