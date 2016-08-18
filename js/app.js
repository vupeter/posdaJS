//  This file only contains the controller and scope as well as angular module declaration
//  All services can be found in factory.js

var app = angular.module('posdaJS', ['ngSanitize']);

//  Main controller services include dataDump, IOD, bookTable, svg
app.controller("posdaCtrl", function($scope,dataDump,IOD,bookTable,render,svg,csv) {

  //stuff that needs to be changed/removed eventually
  $scope.showOnlyRequired = true;
  $scope.dataDump = dataDump;
  $scope.req3Elements = [];

  //Shows next select after switching modes
  $scope.changeMode = function() {
    //resetting ngshows
    $scope.iodSelected = $scope.bookSelected = $scope.showTableSelect = $scope.showBookSelect = $scope.svgSelected = false;
    switch ($scope.modeSelect) {
        case "svg":
            dataDump.getMode('lib/json/mode/svg.js').then(function(list){
              $scope.dataSelect = list;
              $scope.showTableSelect = true;
              $scope.svgSelected = true;
            });
            break;
        case "Tables by Part":
            dataDump.getMode('lib/json/mode/book.js').then(function(list){
              $scope.bookDataSelect = list;
              $scope.bookSelected = true;
              $scope.bookSelect = "";
              $scope.showBookSelect = true;
            });
            break;
        case "Composite IODs":
            dataDump.getMode('lib/json/mode/iod.js').then(function(list){
              $scope.dataSelect = list;
              $scope.showTableSelect = true;
              $scope.modeSelected = "iod";
              $scope.iodSelected = true;
            });
            break;
        default:
            break;
    }
    $scope.tableSelected = false;
    $scope.svgShow = false;
  };

  //Shows table by part select
  $scope.changeBook = function(){
    $scope.tableSelected = false;
    $scope.showTableSelect = false;
    dataDump.getBook($scope.bookDataSelect.path,$scope.bookSelect).then(function(list){
        $scope.dataSelect = list;
        $scope.showTableSelect = true;
     });
    };

  //renders table
  $scope.changeData = function() {
    //If in SVG Mode loads picture path for the image to know what source it is
    if($scope.svgSelected === true){
      $scope.svgPath = svg.getSRC($scope.tableSelect,$scope.dataSelect);
      $scope.svgShow = true;
    //If not SVG, it will get JSON data and render the table
    } else {
      var file = render.getFileName($scope.tableSelect,$scope.dataSelect);
      $scope.tableName = file.name;
      render.getTable(file.path).then(function(data){
        if ($scope.iodSelected === true) {
            var table = render.table(dataDump.getIOD($scope.tableSelect));
            $scope.tableData = table.data;
            $scope.entities = table.entities;
            $scope.modules = table.modules;

            if ($scope.vrShow === true && $scope.iodSelected || $scope.vmShow === true && $scope.iodSelected) {
                //if IOD table is changed this makes sure VR+VM is reloaded
                $scope.getVRVM();
            }
            $scope.filterModule();
            $scope.changeOrderBy('element');
            //this checks every row to see if its required (is type 3 or a sequence of)
            $scope.tableData = IOD.requirementCheck($scope.tableData);
        //this is when tables by parts is selected
        } else {
          var bookTableData = dataDump.getBookTable($scope.tableSelect);
          $scope.tableHeaders = bookTable.tableHeaders(bookTableData[1]);
          $scope.tableData = bookTable.tableData(bookTableData);
        }
        $scope.tableSelected = true;
        console.log($scope.tableData)
      });
    }
  };

  //Loads Registry DICOM elements to get VRVM and renders it into table, shows VRVM column
  $scope.getVRVM = function() {
        dataDump.getVRVM($scope.tableData).then(function(data){
          $scope.tableData = IOD.vrvmRender($scope.tableData,data);
          $scope.vrvmClicked = true;
        });
  };

  //Changes zoom of svg image
  $scope.svgScaleChange = function(){
    svg.svgScaleChange();
    $scope.svgScale = svg.svgScale;
    $scope.svgStyle = svg.svgStyle;
  };

  //||===========================||
  //||      Filter Functions     ||
  //||===========================||

  //Changes the ordering of table when column header is clicked
  $scope.changeOrderBy = function(x) {
      $scope.orderByThis = x;
  };

  //Reloads the module filter array from the checkboxes
  $scope.filterModule = function() {
    $scope.moduleFilter = render.loadFilter($scope.modules);
  };

  //Changes all modules in an entity to true or false on entity checkbox click
  $scope.filterEntity = function(p, q) {
      for (i = 0; i < $scope.modules[p].length; i++) {
          $scope.modules[p][i].selected = q;
      }
      $scope.filterModule();
  };

  //Selects/deselects all IOD module filters
  $scope.changeAll = function(bool) {
    $scope.modules = IOD.modulesAllChange($scope.modules,bool);
    $scope.entities = IOD.entitiesAllChange($scope.entities,bool);
    $scope.filterModule();
  };

  //Filter for modules for IOD table
  $scope.modulesChecked = function(row) {
      if ($.inArray(row.module, $scope.moduleFilter) < 0) {
          return;
      }
      return row;
  };

  //Filter for required (non type 3 and type 3 sequences) for IOD table
  $scope.filterRequired = function(row) {
      if (row.required === false && $scope.showOnlyRequired === true) {
          return;
      }
      return row;
  };

  //Load more button pagination function
  $scope.rowsDisplayed = 250; //default load value
  $scope.loadMore = function() {
      $scope.rowsDisplayed += 250;
      $scope.loadMoreCheck();
  };

  //Pagination/load more checker, shows/hides load more button
  $scope.loadMoreCheck = function() {
      if ($scope.filteredTable.length > $scope.rowsDisplayed) {
          $scope.endTable = "Load more...";
      } else {
          $scope.endTable = "";
      }
  };

  $scope.generateCSV = function(){

    csvData = csv.generate($scope.filteredTable,$scope.iodSelected,$scope.vrShow,$scope.vmShow,$scope.tableHeaders);
    var encodedUri = encodeURI(csvData);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", $scope.tableSelect+".csv");
    document.body.appendChild(link); // Required for FF

    link.click();
  };
});
