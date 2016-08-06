app.controller('wikiController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/projects.json').success(function (data) {
        $scope.contents = data;
    });
    $http.get('js/links.json').success(function (data) {
        $scope.links = data;
    });
}]);
