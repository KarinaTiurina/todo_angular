var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
  setItems();

  $scope.months = [];

  for(var key in localStorage) {
    var month = JSON.parse(localStorage.getItem(key));
    $scope.months.push(month);
  }
  $scope.months = $scope.months.filter(function(e){return e});


  console.log($scope.months);

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
