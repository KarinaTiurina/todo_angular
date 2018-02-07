myApp.controller('mainController', ['$scope', '$http', 'dbService', function($scope, $http, dbService) {
  // dbService.setItems();
  $scope.months = dbService.getMonths();
}]);

myApp.controller('WeekCtrl', ['$scope', 'addData', function($scope, addData) {
  $scope.newTask = {};

  $scope.submit = function(weeksObject, weekIndex, monthIndex) {
    var wi = parseInt(weekIndex)-1;
    var mi = parseInt(monthIndex)-1;
    weeksObject.week.push($scope.newTask);
    addData.addTask($scope.newTask, mi, wi);
    $scope.newTask = {};
  }
}]);

