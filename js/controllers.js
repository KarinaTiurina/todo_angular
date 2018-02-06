myApp.controller('mainController', ['$scope', '$http', 'dbService', function($scope, $http, dbService) {
  dbService.setItems();
  $scope.months = dbService.getMonths();

  console.log($scope.months);

}]);
