app.controller('projectController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/projects.json').success(function (data) {
        $scope.contents = data;
    });
}]);
