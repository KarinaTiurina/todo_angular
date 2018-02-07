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
      weekIndex: '@',
      monthIndex: '@'
    },
    controller: 'WeekCtrl'
  }
});

myApp.directive("monthDiv", function(){
  return {
    templateUrl: 'directives/monthDiv.html',
    replace: true,
    scope: {
      monthObject: "=",
      monthIndex: '@'
    }
  }
});
