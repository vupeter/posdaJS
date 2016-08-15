//  This file contains all the services

//  Linking app angular module 'posdaJS' declared in app.js
var app = angular.module('posdaJS');

//All select functions as well as data dumping functions lead here
app.factory('dataDump', function($q) {
  //For use in returned functions
  var self = this;

  //Datastructure declaration
  this.data = {
    "book": [],
    "iod": [],
    "mode": {
        "svg": undefined,
        "book": undefined,
        "iod": undefined,
        "bookTable": []
    }
  };

  //function loading js file that changes mode
  this.getMode = function(path){
    var deferred = $q.defer();
    require([path], function() {
      if (self.data.mode[path] === undefined) {
          self.data.mode[path] = {};
          self.data.mode[path].data = dataList;
      }
          deferred.resolve(self.data.mode[path].data);
    });
    return deferred.promise;
  };

  //function loading js file that contains table by part list and dumps into dump
  this.getBook = function(path,fileLoc){
    var deferred = $q.defer();
    var filePath = path + fileLoc + "/tables.js";
    require([filePath], function() {
      if (self.data.mode.bookTable[fileLoc] === undefined) {
          self.data.mode.bookTable[fileLoc] = {};
          self.data.mode.bookTable[fileLoc].book = fileLoc;
          self.data.mode.bookTable[fileLoc].data = dataList;
      }
      deferred.resolve(self.data.mode.bookTable[fileLoc].data);
    });
    return deferred.promise;
  };

  //dumps IOD data and retreives it
  this.getIOD = function(name){
    if (self.data.iod[name] === undefined) {
        self.data.iod[name] = {
            "table": name,
            "data": data.tags
        };
    }
    return self.data.iod[name].data;
  };

  //gets tablebypart table and dumps it
  this.getBookTable = function(name){
    if (self.data.book[name] === undefined) {
        self.data.book[name] = {};
        self.data.book[name].table = name;
        self.data.book[name].data = datab;
    }
    return self.data.book[name].data;
  };

  //gets the Registry Elements for VRVM rendering
  this.getVRVM = function(table){
    var deferred = $q.defer();
    require(["lib/json/book/part06/table_6-1"], function() {
      if (self.data.book["table_6-1:caption - Registry of DICOM Data Elements"] === undefined) {
          self.data.book["table_6-1:caption - Registry of DICOM Data Elements"] = {};
          self.data.book["table_6-1:caption - Registry of DICOM Data Elements"].table = "table_6-1:caption - Registry of DICOM Data Elements";
          self.data.book["table_6-1:caption - Registry of DICOM Data Elements"].data = datab;
      }
      deferred.resolve(self.data.book["table_6-1:caption - Registry of DICOM Data Elements"].data);
    });
    return deferred.promise;
  };

  //Return objects for factory service
  return {
    book: this.data.book,
    iod: this.data.iod,
    mode: this.data.mode,

    getMode: function(path){
      return self.getMode(path);
    },
    getBook: function(path,fileLoc){
      return self.getBook(path,fileLoc);
    },
    getIOD: function(name){
      return self.getIOD(name);
    },
    getBookTable: function(name){
      return self.getBookTable(name);
    },
    getVRVM: function(table){
      return self.getVRVM(table);
    }
  };
});

//Contains services for rendering
app.factory('render', function($q) {
  //For use in returned functions
  var self = this;

  //Gets filename to do the require js request
  this.getFileName = function(name,list){
    for (i = 0; i < list.table.length; i++) {
        if (name == list.table[i].Title) {
            filename = list.table[i].Name;
            return {path: list.path + list.prefix + filename + list.suffix, name: list.table[i].Name};
        }
    }
  };

  //require request to get the table returns a promise
  this.getTable = function(path){
    var deferred = $q.defer();
    require([path], function() {
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  //This function returns the array that renders the table
  this.table = function(data){
    var entities = [];
    var modules = [];
    var tableArray = [];
    for (var dataRow in data) {
        var dataRowMod = data[dataRow];
          dataRowMod.element = dataRow;
          dataRowMod.desc = self.commentRender(dataRowMod.desc, "");
          tableArray.push(dataRowMod);

          //Entity+module filter render
          entMod = self.entityModuleRender(dataRowMod,entities,modules);
          entities = entMod.entities;
          modules = entMod.modules;
    }
    return {
      data: tableArray,
      entities: entities,
      modules: modules
    };
  };

  //Renders the entity and module array for checkboxes in filter
  this.entityModuleRender = function(row,entities,modules){
    var entityExists = false;
    if(entities === undefined){
      entities = [];
    }
    if(modules === undefined){
      modules = [];
    }
    for(i = 0; i < entities.length; i++){
        if (row.entity == entities[i].name) {
            entityExists = true;
            var moduleExists = false;
            for (n = 0; n < modules[i].length; n++) {
                if (row.module == modules[i][n].name) {
                    moduleExists = true;
                    break;
                }
            }
            if (!moduleExists && row.module !== undefined) {
                modules[i].push({
                    name: row.module,
                    selected: true
                });
            }
            break;
        }
    }
    if (!entityExists && row.entity !== undefined) {
        entities.push({
            name: row.entity,
            selected: true
        });
        modules.push([]);
        modules[entities.length - 1].push({
            name: row.module,
            selected: true
        });
    }
    return {entities: entities, modules: modules};
  };

  //Recursive function that renders the IOD description/comment field in HTML
  this.commentRender = function(input, comment, iType, i){
    //Iterates through arrays
    if (input instanceof Array) {
        if (iType == "variablelist") {
            for (i = 0; i < input.length; i++) {
                comment += "<li>";
                for (j = 0; j < input[i].length; j++) {
                    if (input[i][j] !== null) {
                        comment += input[i][j];
                    }
                    if (j === 0 && input[i][j + 1] !== null) {
                        comment += " -- ";
                    }
                }
                comment += "</li>";
            }
        } else {
            for (i = 0; i < input.length; i++) {
                comment = this.commentRender(input[i], comment, iType);
            }
        }
    //when it gets down to object checks what the object is and adds it to the rendered comment string (unless its a list which iterates again)
    } else if (input instanceof Object) {
        if (input.el == "subscript") {
            //doesn't seem like posda does anything with this
            //The current (2016c+) DICOM standard includes a superscript too now
        } else if (input.el == "note") {
            comment += "<br><strong>Note:</strong>";
            comment = this.commentRender(input.content, comment); //depends on list items
        } else if (input.el == "itemizedlist") {
            comment = this.commentRender(input.content, comment); //depends on list items
        } else if (input.el == "orderedlist") {
            comment = this.commentRender(input.content, comment); //depends on listitem
        } else if (input.el == "para") {
            if (iType == "listitem") {
                comment += "<li><p>";
                comment = this.commentRender(input.content, comment);
                comment += "</p></li>";
            } else {
                comment += "<p>";
                comment = this.commentRender(input.content, comment);
                comment += "</p>";
            }
        } else if (input.el == "listitem") {
            comment = this.commentRender(input.content, comment, "listitem");
        } else if (input.el == "xref") {

          var linkText = input.attrs.linkend.slice(5);
          if(input.attrs.linkend.slice(0,7) != "sect_C."){
            if(input.attrs.linkend.slice(0,7) == "biblio_"){
              linkText = input.attrs.linkend;
            }
          }
            comment += '<a href="' + input.linkOut + '" target="_blank">' + linkText + '</a>';
        } else if (input.el == "olink") {
          comment += '<a href="' + input.linkOut + '" target="_blank">' + input.attrs.targetdoc + '</a>';
        } else if (input.type == "variablelist") {
            comment += "<br><br><p><strong>" + input.title + "</strong></p>" + "<ul>";
            comment = this.commentRender(input.list, comment, "variablelist");
            comment += "</ul>";
        } else if (input.el == "link"){
            comment += '<a href="' + input.attrs['xl:href'] + '" target="_blank">' + input.content[0] + '</a>';
        } else {
            console.log(input);
        }
    } else {
        if (input === null) {
            input = ""; //input = "\r\n";
        }
        comment += " " + input;
    }
    return comment;
  };

  //returns an array to be put into the filter to filter out modules
  this.loadFilter = function(modules){
    var filterArray = [];
    for (i = 0; i < modules.length; i++) {
        for (n = 0; n < modules[i].length; n++) {
            if (modules[i][n].selected === true) {
                filterArray.push(modules[i][n].name);
            }
        }
    }
    return filterArray;
  };

  //Return objects for factory service
  return{
    getFileName: function(name,list){
      return self.getFileName(name,list);
    },
    getTable: function(path){
      return self.getTable(path);
    },
    table: function(data){
      return self.table(data);
    },
    entityModuleRender: function(row,entity,modules){
      return self.entityModuleRender(row,entity,modules);
    },
    commentRender: function(input, comment){
      return self.commentRender(input, comment);
    },
    loadFilter: function(modules){
      return self.loadFilter(modules);
    }
  };
});

app.factory('IOD', function() {
  //For use in returned functions
  var self = this;

  //selects or deselects all modules
  this.modulesAllChange = function(modArray, bool){
    for (i = 0; i < modArray.length; i++) {
        for (n = 0; n < modArray[i].length; n++) {
            modArray[i][n].selected = bool;
        }
    }
    return modArray;
  };
  //selects or deselects all entities
  this.entitiesAllChange = function(entArray, bool){
    for (i = 0; i < entArray.length; i++) {
        entArray[i].selected = bool;
    }
    return entArray;
  };

  //generates the list of req 3 elements
  this.req3Array = [];
  this.req3Check = function(row){
    if (row.req == 3) {
        self.req3Array.push(row.element);
    }
  };
  //checks if rows are required (req3 or sequence containing req3) returns table with requirements included
  this.requirementCheck = function(table){
    for(i=0;i<table.length;i++){
      self.req3Check(table[i]);
    }
    for (n=0;n<table.length;n++) {
      for (j = 0; j < self.req3Array.length; j++) {
          if (table[n].element.indexOf(self.req3Array[j]) >= 0) {
              table[n].required = false;
          }
      }
    }
    return table;
  };

  //Loads Registry DICOM elements to get VRVM and renders it into table
  this.vrvmRender = function(table, registry){
    var vrvmData = {};
    for(m=0;m<registry.length;m++){
      if (registry[m].Tag !== undefined){
        vrvmData[registry[m].Tag.text] = {};
        vrvmData[registry[m].Tag.text].vr = registry[m].VR.text;
        vrvmData[registry[m].Tag.text].vm = registry[m].VM.text;
      }
    }
    for (n = 0; n < table.length; n++) {
        var lastElement = table[n].element.slice(-11);
        if(vrvmData[lastElement] !== undefined){
          table[n].vr = vrvmData[lastElement].vr;
          table[n].vm = vrvmData[lastElement].vm;
        }
    }
    return table;
  };

  //Return objects for factory service
  return{
    modulesAllChange: function(modArray,bool){
      return self.modulesAllChange(modArray,bool);
    },
    entitiesAllChange: function(entArray,bool){
      return self.entitiesAllChange(entArray,bool);
    },
    requirementCheck: function(table){
      return self.requirementCheck(table);
    },
    vrvmRender: function(table,registry){
      return self.vrvmRender(table,registry);
    }
  };
});

app.factory('bookTable', function() {
  //For use in returned functions
  var self = this;

  //returns table headers in array
  this.tableHeaders = function(row){
    var headerArray = [];
    for(var i in row){
      headerArray.push(i);
    }
    return headerArray;
  };

  //returns the actual table thats rendered
  this.tableData = function(data){
    var bookTableArray = [];
    for(j=0;j<data.length;j++){
      var rowCells = [];
      for(var prop in data[j]){
        rowCells.push(data[j][prop]);
      }
      if(rowCells != []){
        bookTableArray.push(rowCells);
      }
    }
    return bookTableArray;
  };

  return{
    tableHeaders: function(row){
      return self.tableHeaders(row);
    },
    tableData: function(data){
      return self.tableData(data);
    }
  };
});

//  Factory containing services dealing with SVGs
app.factory('svg', function() {
  //For use in returned functions
  var self = this;

  //Returns svg SRC
  this.getSRC = function(name,list){
    for (i = 0; i < list.table.length; i++) {
        if (name == list.table[i].Title) {
            filename = list.table[i].Name;
            return list.path + filename;
        }
    }
  };

  return {
    svgScale: this.svgScale,
    svgStyle:  this.svgStyle,
    svgScaleChange: function() {
      this.svgScale = document.getElementById('svgScaleInput').value;
      this.svgStyle="height: auto; width: " + this.svgScale + "%;";
    },
    getSRC: function(name,list){
      return self.getSRC(name,list);
    }
  };
});
