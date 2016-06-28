var app = angular.module('posdaJS', ['ngSanitize']);

app.controller("posdaCtrl", function ($scope) {

  $scope.showOnlyRequired = true;

  $scope.dataDump = {"book" : [], "iod" : [],"mode": {"svg":undefined,"book":undefined,"iod":undefined}};

  $scope.changeMode = function(){
    switch($scope.modeSelect) {
    case "svg":
        require(['lib/json/mode/svg.js'], function(){
          $scope.dataSelect = dataList;
          $scope.modeSelected = "svg";
          $scope.$apply();
        });
        break;
    case "book":
        require(['lib/json/mode/book.js'], function(){
          if($scope.dataDump.mode.book === undefined){
            $scope.dataDump.mode.book = {};
            $scope.dataDump.mode.book.data = dataList;
          }
          $scope.dataSelect = $scope.dataDump.mode.book.data;
          $scope.showTableSelect = true;
          $scope.iodSelected = false;
          $scope.$apply();
        });
        break;
    case "Composite IODs":
        require(['lib/json/mode/iod.js'], function(){
          if($scope.dataDump.mode.iod === undefined){
            $scope.dataDump.mode.iod = {};
            $scope.dataDump.mode.iod.data = dataList;
          }
          $scope.dataSelect = $scope.dataDump.mode.iod.data;
          $scope.showTableSelect = true;
          $scope.modeSelected = "iod";
          $scope.iodSelected = true;
          $scope.$apply();
        });
        break;
    default:
        break;
    }
    $scope.tableSelected = false;
  };

  $scope.commentRender = function(input,comment,iType,i){
    if(input instanceof Array){
      if (iType == "variablelist"){
        for(i=0;i<input.length;i++){
          comment += "<li>";
          for(j=0;j<input[i].length;j++){
            if(input[i][j] !== null){
              comment += input[i][j];
            }
            if(j===0 && input[i][j+1] !== null){
              comment += " -- ";
            }
          }
          comment += "</li>";
        }
      } else {
        for(i=0;i<input.length;i++){
          comment = $scope.commentRender(input[i], comment, iType);
        }
      }
    } else if (input instanceof Object){
      if (input.el == "subscript"){
        //doesn't seem like posda does anything with this
      //} else if(input.el == "note" || input.el == "itemizedlist" || input.el == "orderedlist" || input.el == "para" || input.el == "listitem"){
        //comment = $scope.commentRender(input.content,comment); //this works
      } else if (input.el == "note"){
        comment += "<br><strong>Note:</strong>";
        comment = $scope.commentRender(input.content,comment); //depends on list items
      } else if (input.el == "itemizedlist"){
        comment = $scope.commentRender(input.content,comment); //depends on list items
      } else if (input.el == "orderedlist"){
        comment = $scope.commentRender(input.content,comment); //depends on listitem
      } else if (input.el == "para"){
        if (iType == "listitem"){
          comment += "<li><p>";
          comment = $scope.commentRender(input.content,comment); //this works
          comment += "</p></li>";
        } else {
          comment += "<p>";
          comment = $scope.commentRender(input.content,comment); //this works
          comment += "</p>";
        }
      } else if (input.el == "listitem"){
        comment = $scope.commentRender(input.content,comment,"listitem"); //this works
      } else if (input.el == "xref"){
        comment += input.attrs.linkend; //this works
      } else if (input.el == "olink"){
        comment += input.attrs.targetdoc; //this works
      } else if (input.type == "variablelist"){
        comment += "<br><br><p><strong>" + input.title + "</strong></p>" + "<ul>";
        comment = $scope.commentRender(input.list,comment,"variablelist"); //this works too
        comment += "</ul>";
      } else {
        console.log(input);
      }
    } else {
      if(input === null){
        input = ""; //input = "\r\n";
      }
      comment += " " + input;
    }
    return comment;
  };

  $scope.getFromDataElement = function(tag, thing){
    for(i=0;i<datab.length;i++){
        if(tag == datab[i].Tag){
          return datab[i][thing];
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
      require(["lib/json/book/part06/table_6-1"],function(){
        var bookDataInDump = false;
        for(i=0;i<$scope.dataDump.book.length;i++){
          if("table_6-1:caption - Registry of DICOM Data Element" == $scope.dataDump.book[i].table){
            datab = $scope.dataDump.book[i].data;
            bookDataInDump = true;
            break;
          }
        }
        if(!bookDataInDump){
          $scope.dataDump.book.push({"table":datab,"data":datab});
        }
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

    if($scope.tableSelect == "table_A-1:caption - UID Values"){
      $scope.uidSelected = true;
      $scope.dataElementSelected = false;
      $scope.iodSelected = false;
    } else if ($scope.tableSelect == "table_6-1:caption - Registry of DICOM Data Element"){
      $scope.uidSelected = false;
      $scope.dataElementSelected = true;
      $scope.iodSelected = false;
    } else {
      $scope.uidSelected = false;
      $scope.dataElementSelected = false;
      $scope.iodSelected = true;
    }

    var filepath = $scope.dataSelect.path + $scope.dataSelect.prefix + filename + $scope.dataSelect.suffix;
    require([filepath], function(){

      if($scope.iodSelected === true){
        var iodDataInDump = false;
        for(i=0;i<$scope.dataDump.iod.length;i++){
          if($scope.tableSelect == $scope.dataDump.iod[i].table){
            iodData = $scope.dataDump.iod[i].data;
            iodDataInDump = true;
            break;
          }
        }
        if(!iodDataInDump){
          iodData = data.tags;
          $scope.dataDump.iod.push({"table":$scope.tableSelect,"data":data.tags});
        }
      } else {
        var bookDataInDump = false;
        for(i=0;i<$scope.dataDump.book.length;i++){
          if($scope.tableSelect == $scope.dataDump.book[i].table){
            $scope.tableData = $scope.dataDump.book[i].data;
            bookDataInDump = true;
            break;
          }
        }
        if(!bookDataInDump){
          $scope.tableData = datab;
          $scope.dataDump.book.push({"table":$scope.tableSelect,"data":datab});
        }
      }

      //if (iodData === undefined){
      //  $scope.tableData = datab;
      //}

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

      if($scope.vrShow === true && $scope.iodSelected || $scope.vmShow === true && $scope.iodSelected){
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
    if ($scope.iodSelected === false){
      return row;
    }
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
