var app = angular.module('posdaJS', []);

app.controller("posdaCtrl", function ($scope, $http) {

  $scope.changeMode = function(){
    switch($scope.modeSelect) {
    case "svg":
        require(['lib/json/mode/svg.js'], function(){
          $scope.dataSelect = dataList;;
        });
        break;
    case "book":
        require(['lib/json/mode/book.js'], function(){
          $scope.dataSelect = dataList;
        });
        break;
    case "Composite IODs":
        require(['lib/json/mode/iod.js'], function(){
          $scope.dataSelect = dataList;
        });
        break;
    default:
        break;
    }
    $scope.modeSelected = true;
  };

  $scope.changeData = function(){
    var filename;
    var iodData;
    $scope.tableData = [];
    for(i=0;i<$scope.dataSelect.table.length;i++){
      if ($scope.tableSelect == $scope.dataSelect.table[i].Title){
        filename = $scope.dataSelect.table[i].Name;
        $scope.tableName = $scope.dataSelect.table[i].Name;
        break;
      }
    }
    var filepath = $scope.dataSelect.path + $scope.dataSelect.prefix + filename + $scope.dataSelect.suffix;
    require([filepath], function(){
      iodData = data.tags;
      for(var dataRow in iodData){
      var dataRowMod = iodData[dataRow];
      dataRowMod['element'] = dataRow;
      $scope.tableData.push(dataRowMod);
   }
   $scope.tableSelected = true;
   $scope.$apply();
    });
  }

  $scope.changeOrderBy = function(x) {
    $scope.orderByThis = x;
  }
});
