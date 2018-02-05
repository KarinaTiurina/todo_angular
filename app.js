var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.months = null;
    $http.get('json/timetable.json').success(function(data) {
        $scope.months = data.months;
    });
}]);

myApp.directive("taskDiv", function(){
  return {
    templateUrl: 'directives/taskDiv.html',
    replace: true,
    scope: {
      taskObject: "="
    }
  }
});

myApp.directive("weekDiv", function(){
  return {
    templateUrl: 'directives/weekDiv.html',
    replace: true,
    scope: {
      weeksObject: "=",
      index: '@'
    }
  }
});

myApp.directive("monthDiv", function(){
  return {
    templateUrl: 'directives/monthDiv.html',
    replace: true,
    scope: {
      monthObject: "="
    }
  }
});
