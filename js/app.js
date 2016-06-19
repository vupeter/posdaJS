var app = angular.module('posdaJS', []);

app.controller("posdaCtrl", function ($scope) {

  $scope.showOnlyRequired = true;

  $scope.changeMode = function(){
    switch($scope.modeSelect) {
    case "svg":
        require(['lib/json/mode/svg.js'], function(){
          $scope.dataSelect = dataList;
          $scope.$apply();
        });
        break;
    case "book":
        require(['lib/json/mode/book.js'], function(){
          $scope.dataSelect = dataList;
          $scope.showTableSelect = true;
          $scope.$apply();
        });
        break;
    case "Composite IODs":
        require(['lib/json/mode/iod.js'], function(){
          $scope.dataSelect = dataList;
          $scope.showTableSelect = true;
          $scope.$apply();
        });
        break;
    default:
        break;
    }
  };

  $scope.commentRender = function(input,comment,i){
    if(input instanceof Array){
        for(i=0;i<input.length;i++){
          comment = $scope.commentRender(input[i], comment);
        }
    } else if (input instanceof Object){
      if(input.el == "note" || input.el == "itemizedlist" || input.el == "orderedlist" || input.el == "para" || input.el == "listitem"){
        comment = $scope.commentRender(input.content,comment); //this works
      } else if (input.el == "itemizedlist"){
        //comment = $scope.commentRender(input.content,comment); //depends on list items
      } else if (input.el == "orderedlist"){
        //comment = $scope.commentRender(input.content,comment); //depends on listitem
      } else if (input.el == "para"){
        //comment = $scope.commentRender(input.content,comment); //this works
      } else if (input.el == "listitem"){
        //comment = $scope.commentRender(input.content,comment); //this works
      } else if (input.el == "xref"){
        comment += input.attrs.linkend; //this works
      } else if (input.el == "olink"){
        comment += input.attrs.targetdoc; //this works
      } else if (input.el == "subscript"){
        //doesn't seem like posda does anything with this
      } else if (input.type == "variablelist"){
        comment = $scope.commentRender(input.list,comment); //this works too
      } else {
        console.log(input);
      }
    } else {
      if(input === null){
        input = "\r\n";
      }
      comment += input;
    }
    return comment;
  };

  $scope.getFromDataElement = function(tag, thing){
    for(i=0;i<dataElement.length;i++){
        if(tag == dataElement[i].Tag){
          return dataElement[i][thing];
        }
    }
  };

  $scope.vrvmClicked = false;

  $scope.updateVRVM = function(){
    for(n=0;n<$scope.tableData.length;n++){
      var lastElement = $scope.tableData[n].element.slice(-11);
      $scope.tableData[n].vr = $scope.getFromDataElement(lastElement,"VR");
      $scope.tableData[n].vm = $scope.getFromDataElement(lastElement,"VM");
    }
  };

  $scope.getVRVM = function(){
    if($scope.vrvmClicked === false){
      require(["lib/json/book/dicomDataElement"],function(){
        $scope.updateVRVM();
        $scope.$apply();
      });
      $scope.vrvmClicked = true;
    }
  };

  $scope.req3Elements = [];

  $scope.isReq3 = function(row){
    if(row.req == 3){
      $scope.req3Elements.push(row.element);
      return false;
    }
    return true;
  };

  $scope.requirementCheck = function(){
    for(i=0;i<$scope.tableData.length;i++){
      if($scope.tableData[i].required === true && $scope.tableData[i].element.length > 12){
        for(j=0;j<$scope.req3Elements.length;j++){
          if($scope.tableData[i].element.indexOf($scope.req3Elements[j]) > 0){
            $scope.tableData[i].required = false;
          }
        }
      }
    }
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
        dataRowMod.element = dataRow;
        dataRowMod.desc = $scope.commentRender(dataRowMod.desc,"");
        dataRowMod.required = $scope.isReq3(dataRowMod);
        $scope.tableData.push(dataRowMod);

          //Entity+module rendering starts here
            var entityExists = false;
            for (i=0;i<$scope.entities.length;i++){
              if (dataRowMod.entity == $scope.entities[i].name){
                entityExists = true;
                var moduleExists = false;
                for (n=0;n<$scope.modules[i].length;n++){
                  if (dataRowMod.module == $scope.modules[i][n].name){
                    moduleExists = true;
                    break;
                  }
                }
                if (!moduleExists && dataRowMod.module !== undefined){
                  $scope.modules[i].push({name:dataRowMod.module,selected:true});
                }
                break;
              }
            }
            if(!entityExists && dataRowMod.entity !== undefined){
              $scope.entities.push({name:dataRowMod.entity,selected:true});
              $scope.modules.push([]);
              $scope.modules[$scope.entities.length-1].push({name:dataRowMod.module,selected:true});
            }

      }
      if($scope.vrShow === true || $scope.vmShow === true){
        $scope.updateVRVM();
      }
      $scope.tableSelected = true;
      $scope.filterModule();
      $scope.changeOrderBy('element');
      $scope.requirementCheck();
      $scope.$apply();
    });
  };

  $scope.changeOrderBy = function(x) {
    $scope.orderByThis = x;
  };

  $scope.filterEntity = function(p,q){
    for(i=0;i<$scope.modules[p].length;i++){
      $scope.modules[p][i].selected = q;
    }
    $scope.filterModule();
  };

  $scope.filterModule = function(){
    $scope.moduleFilter = [];
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        if($scope.modules[i][n].selected === true){
          $scope.moduleFilter.push($scope.modules[i][n].name);
        }
      }
    }
  };

  $scope.modulesChecked = function(row){
    if ($.inArray(row.module, $scope.moduleFilter) < 0){
      return;
    }
    return row;
  };

  $scope.filterRequired = function(row){
    if (row.required === false && $scope.showOnlyRequired === true){
      return;
    }
    return row;
  };

  $scope.selectAll = function(){
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        $scope.modules[i][n].selected = true;
      }
    }
    for(i=0;i<$scope.entities.length;i++){
      $scope.entities[i].selected = true;
    }
    $scope.filterModule();
  };

  $scope.deselectAll = function(){
    for(i=0;i<$scope.modules.length;i++){
      for(n=0;n<$scope.modules[i].length;n++){
        $scope.modules[i][n].selected = false;
      }
    }
    for(i=0;i<$scope.entities.length;i++){
      $scope.entities[i].selected = false;
    }
    $scope.filterModule();
  };
});
