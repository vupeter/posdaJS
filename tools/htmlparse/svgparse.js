var fs = require('fs');
var path = require('path');

var svgOutput = {"path": "lib/svg/",
"prefix": "",
"suffix": "",
"table": []
};

var start = new Date().getTime();
var lastTime = start;

var parseSVGPaths = function(directory,i){
  var directoryStat = fs.statSync(directory);
  if(directoryStat.isDirectory()){
    if (!fs.existsSync(outputDirectory+"/"+directory.replace("chtml/",""))){
      if(directory == "chtml"){

      } else {
          fs.mkdirSync(outputDirectory+"/"+directory.replace("chtml/",""));
      }
    }
  }
  var dir = fs.readdirSync(directory);
  for(i=0;i<dir.length;i++){
          var itemPath = directory + '/' + dir[i];
          var stats = fs.statSync(itemPath);
          if(stats.isDirectory()){
            console.log("Starting new directory: " + itemPath);
            parseSVGPaths(itemPath);
          } else {
            if(path.extname(itemPath) == ".svg"){
              var currentTime = new Date().getTime();
              var fileTime = currentTime - lastTime;
              console.log(itemPath + " | " + (fileTime) + "ms");
              lastTime = currentTime;

              var partStart = itemPath.indexOf("p");
              var svgPath = itemPath.slice(partStart);
              var outputPath = outputDirectory+"/"+itemPath.replace("chtml/","");

              fs.createReadStream(itemPath).pipe(fs.createWriteStream(outputPath));
              svgOutput.table.push({Title : svgPath, Name : svgPath});
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
	parseSVGPaths(directoryInput);

	var jsonsvgOutput = "dataList = " + JSON.stringify(svgOutput) + ";";

  var outputSVGListPath = outputDirectory + "/svg.js";

	fs.writeFile(outputSVGListPath, jsonsvgOutput, function(err) {
	  if(err) {
		  return console.log(err);
	  }

	  console.log("The file was saved!");
	  var end = new Date().getTime();
	  var elapsed = end-start;
	  console.log("Operation took: " + elapsed + "ms");
	});
}
