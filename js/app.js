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
    $scope.entities = [];
    $scope.modules = [];
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

      //Test tabulate
      for(var dataRow in iodData){
        var dataRowMod = iodData[dataRow];
        dataRowMod['element'] = dataRow;
        $scope.tableData.push(dataRowMod);

          //Entity+module rendering starts here
            var entityExists = false;
            for (i=0;i<$scope.entities.length;i++){
              if (dataRowMod.entity == $scope.entities[i]){
                entityExists = true;
                var moduleExists = false;
                for (n=0;n<$scope.modules[i].length;n++){
                  if (dataRowMod.module == $scope.modules[i][n].name){
                    moduleExists = true;
                    break;
                  }
                }
                if (!moduleExists && dataRowMod.module != undefined){
                  $scope.modules[i].push({name:dataRowMod.module,selected:true});
                }
                break;
              }
            }
            if(!entityExists && dataRowMod.entity != undefined){
              $scope.entities.push(dataRowMod.entity);
              $scope.modules.push([]);
              $scope.modules[$scope.entities.length-1].push({name:dataRowMod.module,selected:true});
            }
          }

   $scope.tableSelected = true;
   $scope.filterModule();
   $scope.$apply();
    });
  }

  $scope.changeOrderBy = function(x) {
    $scope.orderByThis = x;
  }

  $scope.filterEntity = function(p){
    for(i=0;i<$scope.modules[p].length;i++){
      $scope.modules[p][i].selected = !$scope.modules[p][i].selected;
    }
    $scope.filterModule();
  }

  $scope.filterModule = function(){
    $scope.moduleFilter = [];
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        if($scope.modules[i][n].selected == true){
          $scope.moduleFilter.push($scope.modules[i][n].name);
        }
      }
    }
  }

  $scope.modulesChecked = function(row){
    if ($.inArray(row.module, $scope.moduleFilter) < 0){
      return;
    }
    return row;
  }

  $scope.selectAll = function(){
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        $scope.modules[i][n].selected = true;
      }
    }
    $scope.filterModule();
  }

  $scope.deselectAll = function(){
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        $scope.modules[i][n].selected = false;
      }
    }
    $scope.filterModule();
  }
});
