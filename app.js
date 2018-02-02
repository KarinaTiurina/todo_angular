var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.months = null;
    $http.get('json/timetable.json').success(function(data) {
        $scope.months = data.months;
    });
}]);


