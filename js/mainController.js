app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/projects.json').success(function (data) {
        $scope.contents = data;
    });
    $http.get('js/links.json').success(function (data) {
        $scope.links = data;
    });
    $scope.navigation = [
        {
            'title' : "home",
            'href' : "/",
        },
        {
            'title' : "about",
            'href' : "/about"
        },
        {
            'title' : "projects",
            'href' : "/projects"
        }
    ];
}]);
