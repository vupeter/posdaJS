var fs = require('fs');

var linkParent = "http://dicom.nema.org/medical/dicom/current/output/";
var start = lastTime = new Date().getTime();
var outputFile;
var linkList;
var data;
var noLinkList = [];

function fileOutput(){
  var jsondata = "data = " + JSON.stringify(data) + ";";

  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }
  fs.writeFile(outputDir+"/"+outputFile, jsondata, function(err) {
    if(err) {
      return console.log(err);
    }
  });
}

function commentExpand(input, i) {
    if (input instanceof Array) {
            for (i = 0; i < input.length; i++) {
                commentExpand(input[i]);
        }
    } else if (input instanceof Object) {
        if (input.el == "note") {
            commentExpand(input.content);
        } else if (input.el == "itemizedlist") {
            commentExpand(input.content);
        } else if (input.el == "orderedlist") {
            commentExpand(input.content);
        } else if (input.el == "para") {
            commentExpand(input.content);
        } else if (input.el == "listitem") {
            commentExpand(input.content);
        } else if (input.el == "xref") {
          var noLink = true;
          for(L=0;L<linkList.length;L++){
            if(input.attrs.linkend == "biblio_IEC60601-2-33"){
              input.linkOut = "https://webstore.iec.ch/publication/22705";
              noLink = false;
              break;
            } else if(input.attrs.linkend == "note_C.8.8.8_1"){
              input.linkOut = "http://dicom.nema.org/medical/dicom/2014c/output/chtml/part03/sect_C.8.8.8.html#sect_C.8.8.8.1";
              noLink = false;
              break;
            } else if(input.attrs.linkend == "note_C.8.8.8_2"){
              input.linkOut = "http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.8.8.8.2.html";
              noLink = false;
              break;
            } else if(input.attrs.linkend == "biblio_ISOIEC13818-1"){
              input.linkOut = "https://webstore.iec.ch/publication/22802";
              noLink = false;
              break;
            } else if(input.attrs.linkend == "biblio_RFC_3986"){
              input.linkOut = "https://tools.ietf.org/html/rfc3986";
              noLink = false;
              break;
            } else if(input.attrs.linkend =="biblio_AAPM_TG220"){
              input.linkOut = "https://www.aapm.org/pubs/reports/RPT_220.pdf";
              noLink = false;
              break;
            } else if(linkList[L].anchor == input.attrs.linkend){
              input.linkOut = linkParent + linkList[L].filepath + "#" + input.attrs.linkend;
              noLink= false;
              break;
            }
          }
          if(noLink){
            noLinkList.push(input.attrs.linkend);
          }
        } else if (input.el == "olink") {
          var noLink = true;
          for(L=0;L<linkList.length;L++){
            if(input == "biblio_RFC_3986"){
              input.linkOut = "https://tools.ietf.org/html/rfc3986";
              noLink = false;
              break;
            } else if(linkList[L].anchor == input.attrs.targetdoc){
              input.linkOut = linkParent + linkList[L].filepath + "#" + input.attrs.targetdoc;
              noLink= false;
              break;
            }
          }
          if(noLink){
            noLinkList.push(input.attrs.linkend);
          }
        } else if (input.type == "variablelist") {
            commentExpand(input.list);
        }
    }
}

rowTraverse = function(){
  for(var dataRow in data.tags){
    commentExpand(data.tags[dataRow].desc,"tags."+ dataRow + ".desc");
  }
};

parseHTMLTitles = function(directory,i){
  var dir = fs.readdirSync(directory);
  for(i=0;i<dir.length;i++){
          var itemPath = directory + '/' + dir[i];
          var stats = fs.statSync(itemPath);
          if(stats.isDirectory()){
            console.log("Starting new directory: " + itemPath);
            parseHTMLTitles(itemPath);
          } else {
            outputFile = dir[i];
            data =  JSON.parse(fs.readFileSync(itemPath));
            rowTraverse();
            fileOutput();
            var currentTime = new Date().getTime();
            var fileTime = currentTime - lastTime;
            console.log(itemPath + " | " + (fileTime) + "ms    ||    Starting: "+ dir[i+1] );
            lastTime = currentTime;
          }
    }
};

var directoryInput = process.argv[2];
var linkFile = process.argv[3];
var outputDir = process.argv[4];
if(outputDir === undefined || directoryInput === undefined || linkFile === undefined){
  console.log("The program accepts arguments:");
  console.log("node linkupdate.js <input directory> <link file> <outputdirectorypath>");
} else {
  linkList = JSON.parse(fs.readFileSync(linkFile));
  parseHTMLTitles(directoryInput);

  console.log("No links were found for: ");
  console.log(noLinkList);

  console.log("The file was saved!");
  var end = new Date().getTime();
  var elapsed = end-start;
  console.log("Operation took: " + elapsed + "ms");
	}
