var cheerio = require('cheerio');
var fs = require('fs');

var titleOutput = [];

var start = new Date().getTime();
var lastTime = start;

var parseHTMLTitles = function(directory,i){
  var dir = fs.readdirSync(directory);
  for(i=0;i<dir.length;i++){
          var itemPath = directory + '/' + dir[i];
          var stats = fs.statSync(itemPath);
          if(stats.isDirectory()){
            console.log("Starting new directory: " + itemPath);
            parseHTMLTitles(itemPath);
          } else {
            var $ = cheerio.load(fs.readFileSync(itemPath));
            $('.title').each(function(i, element){
              var singleTitle = $(this).html();
              var linkStart = singleTitle.indexOf('<');
              singleTitle = singleTitle.slice(linkStart);

              titleName = $(singleTitle).text();
              anchorLink = $(singleTitle).attr('id');

              if(anchorLink !== undefined){
                titleOutput.push({name: titleName, anchor: anchorLink, filepath: itemPath});
                var currentTime = new Date().getTime()
                var fileTime = currentTime - lastTime;
                console.log(itemPath + " | " + (fileTime) + "ms");
                lastTime = currentTime;
              }
            });
          }
    }
};

var directoryInput = process.argv[2];
console.log(directoryInput);
var outputFile = process.argv.slice(3);
if(outputFile === undefined){
  outputFile = "xreflinks.json";
}
parseHTMLTitles(directoryInput);

var jsonTitleOutput = JSON.stringify(titleOutput);

setTimeout( function() {
  fs.writeFile("HTMLTitleParse.json", jsonTitleOutput, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
      var end = new Date().getTime();
      var elapsed = end-start;
      console.log("Operation took: " + elapsed + "ms");
  });
}, 2000 );
