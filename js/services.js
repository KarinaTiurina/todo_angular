myApp.service('dbService', function(){
  this.setItems = function() {
    var feb = { "name": "Февраль",
      "weeks": [
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" }
              ]
            },
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" },
                { "task": "задание №3" },
                { "task": "задание №4" }
              ]
            },
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" },
                { "task": "задание №4" }
              ]
            }
      ]
    };

    localStorage.setItem("0", JSON.stringify(feb));

    var march = { "name": "Март",
      "weeks": [
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" }
              ]
            },
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" },
                { "task": "задание №3" }
              ]
            },
            { "week": [
                { "task": "задание №1" },
                { "task": "задание №2" },
                { "task": "задание №4" }
              ]
            }
      ]
    };

    localStorage.setItem("1", JSON.stringify(march));
  };

  this.getMonths = function() {
    var months = [];

    for(var key in localStorage) {
      var month = JSON.parse(localStorage.getItem(key));
      months.push(month);
    }

    return months.filter(function(e){return e});
  };

  this.refreshDB = function(months) {
    localStorage.clear();
    for (var i = 0; i < months.length; i++) {
      localStorage.setItem(i.toString(), JSON.stringify(months[i]));
    }
  };
});

myApp.service('addData', ['dbService', function(dbService) {
  this.addTask = function(newTask, monthIndex, weekIndex) {
    var months = dbService.getMonths();
    months[monthIndex].weeks[weekIndex].week.push(newTask);
    dbService.refreshDB(months);
  };
}]);

