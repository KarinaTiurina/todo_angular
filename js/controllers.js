myApp.controller('mainController', ['$scope', '$http', 'dbService', function($scope, $http, dbService) {
  dbService.setItems();
  $scope.months = dbService.getMonths();

  $scope.newTask = {};

  $scope.submit = function() {
    // alert("hello");
    // alert(JSON.stringify($scope.newTask));
  }

}]);
