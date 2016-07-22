var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');

var start = new Date().getTime();
var lastTime = start;

var currentDir;
var bookPartOutput = {"path": "lib/json/book/",
"prefix": "",
"suffix": "",
"table": []
};

var parsebookTablePaths = function(directory,i){
  var bookOutput = {"path": "lib/json/book/",
  "prefix": "",
  "suffix": "",
  "table": []
  };
  var directoryStat = fs.statSync(directory);
  var dir = fs.readdirSync(directory);
  for(i=0;i<dir.length;i++){
          var itemPath = directory + '/' + dir[i];
          var stats = fs.statSync(itemPath);
          if(stats.isDirectory() && itemPath.indexOf("figures") < 0 && itemPath.indexOf("release") < 0){
            console.log("Starting new directory: " + itemPath);
            currentDir = dir[i];
            if (!fs.existsSync(outputDirectory+"/"+dir[i])){
              fs.mkdirSync(outputDirectory+"/"+dir[i]);
            }
            parsebookTablePaths(itemPath);
          } else {
            if(path.extname(itemPath) == ".xml"){
              bookOutput.path += currentDir + "/";

              var $ = cheerio.load(fs.readFileSync(itemPath),{
                normalizeWhitespace: true,
                xmlMode: true
              });

              $('table').each(function(i, element){
                var tableData = [];
                var tableName = $(this).attr('xml:id');
                var tableXML = $(this).html();
                var $$ = cheerio.load(tableXML,{
                  normalizeWhitespace: true,
                  xmlMode: true
                });

                var tableTitle = tableName + ":caption - " + $$('caption').text();

                bookOutput.table.push({Title : tableTitle, Name : tableName});

                var tableHeaders = [];
                $$('th').each(function(i,element){
                  tableHeaders.push($$(this).text().replace(/^\s+|\s+$/g,''));
                });
                if (tableHeaders[0] === "" && tableHeaders[1] === undefined){
                  tableHeaders[0] = "Title";
                  tableHeaders[1] = "Comment";
                }
                for(a=0;a<tableHeaders.length;a++){
                  if(tableHeaders[a] === undefined){
                    tableHeaders[a] = " ";
                  }
                }

                $$('tr').each(function(i,element){
                  var tableRow = $$(this).html();
                  var tableRowObj = {};
                  var $$$ = cheerio.load(tableRow,{
                    normalizeWhitespace: true,
                    xmlMode: true
                  });
                  $$$('td').each(function(n,element){

                    tableRowObj[tableHeaders[n]] = $$$(this).text().replace(/^\s+|\s+$/g,'');
                  });
                  tableData.push(tableRowObj);

                });
                var jsonTableBookOutput = "datab = " + JSON.stringify(tableData) + ";";
                var outputTableBookPath = outputDirectory + "/" +  currentDir + "/" + tableName + ".js";
                fs.writeFileSync(outputTableBookPath, jsonTableBookOutput);

              });

              var jsonBookOutput = "dataList = " + JSON.stringify(bookOutput) + ";";
              var tableIndexPath = currentDir + "/tables.js";
              var outputBookListPath = outputDirectory + "/" + tableIndexPath;
              bookPartOutput.table.push({Title: currentDir, Path: tableIndexPath});

            	fs.writeFileSync(outputBookListPath, jsonBookOutput);
              var currentTime = new Date().getTime();
              var fileTime = currentTime - lastTime;
              console.log(itemPath + " | " + (fileTime) + "ms");
              lastTime = currentTime;
            }
          }
    }
};

var directoryInput = process.argv[2];
var outputDirectory = process.argv[3];
if(outputDirectory === undefined || directoryInput === undefined){
  console.log("The program accepts arguments:");
  console.log("node linkanchorparse.js <input directory> <outputDirectorypath>");
} else {
  if (!fs.existsSync(outputDirectory)){
      fs.mkdirSync(outputDirectory);
  }
	parsebookTablePaths(directoryInput);

  jsonBookPartOutput = "bookList = " + JSON.stringify(bookPartOutput) + ";";

  fs.writeFileSync(outputDirectory+"/book.js", jsonBookPartOutput);
  var currentTime = new Date().getTime();
  var fileTime = currentTime - lastTime;
}

  console.log("Operation Complete");
  var end = new Date().getTime();
  var elapsed = end-start;
  console.log("Operation took: " + elapsed + "ms");
