#posdaJS Online Live Demo

http://petervu.ca/posdajs/

##What is posdaJS?

posdaJS is a client sided DICOM table browser based on [posda](https://github.com/UAMS-DBMI/PosdaTools) originally coded as a Google Summer of Code project in primarily AngularJS.

The ultimate goal of this project is to have a stand-alone program coded in JavaScript (and presented in HTML) wrapped into a package that is capable of displaying customizable DICOM IOD Tables similar to POSDA quickly and efficiently in an easy to use UI on any client (with a web browser) from pre-converted JSON-formatted files. This will help anyone who needs to access this program such as engineers or medical professionals have access at all times and not require the server to be up and as well have a faster more efficient program.

This project exists in order to provide researchers and engineers a quick and simple reference to the DICOM standard in a reliable package that is up to date and easy to use and pull data from.

posdaJS meets these goals as well as having new features such as being fully searchable, exporting tables as CSV, showing VR + VM of IOD elements, hiding all un-required (req 3 and req 3 sequences) elements, and rendering proper link outputs to NEMA DICOM sections from element comments.

#Installation and Setup

Simply download the zip file [here](https://github.com/vupeter/posdaJS/blob/master/posdaJS.zip) or clone this repository and run 'index.html' to start the program.

#Updating Tables

You only need to do this if you want to update the rendered tables to a specific version of the DICOM standard.

Current NEMA DICOM standard files can be found here:
http://dicom.nema.org/medical/dicom/current/
All versions can be found here:
http://dicom.nema.org/medical/dicom/

All Posda Perl scripts and tools can be found in the Posda repository maintained by [UAMS-DBMI](https://github.com/UAMS-DBMI)

All node.JS scripts can be found in the 'tools/htmlparse' directory of this repository. To run these scripts you need to make sure [Node.JS](https://nodejs.org/en/) is installed.

##Updating IOD Tables

###Parsing Perl Structures from XML

Run Perl script 'BuildParsedDicom.pl' (found in directory: 'DicomXml/bin') to parse the tables from the XML docbook into Perl datastructures.

```
perl DicomXml/bin/BuildParsedDicom.pl <XMLDocbookDirectory> <ParsedTablesOutputDirectory>
```

###Generating Perl Parsed IOD tables

First Parse Perl Structures from XML. Using 'part03.xml.perl' generated from that step run script:

```
<path to part03.xml.perl> |awk -F: '{print "DicomXml/binpath to ExpandIodModules.pl <path to part03.xml.perl> "$1" > <IODOutputDirectory>/"$1".perl"}'|/bin/sh
```

to parse IOD tables from the parsed docbook. 'ExpandIodModules.pl' can be found in directory: 'DicomXml/bin'

###Convert IOD  to JSON

Because posdaJS primarily runs on javascript, having the files in JSON format is easier to work with.

Before running make sure you are in the Parsed IOD directory.
Run the 'PerlStructToJson.pl' script:
```
for i in *.perl;do ../Posda/bin/PerlStructToJson.pl $i > JSONOutput/$i.js; done
```

'ExpandIodModules.pl' can be found in directory: 'Posda/bin'

###Update Link Paths for IOD JSON files

Get the cHTML files from NEMA website either through the current files index or through wget.


Run 'linkanchorparse.js' found in 'tools/htmlparse':

```
node linkanchorparse.js <CHTMLDirectory> <OutputLinkListFile>
```

Now to look through the IOD files and update all the links within the descriptions run:

```
node linkupdate.js <ParsedJSONIODInputDirectory> <LinkListFile> <LinkedIODOutputDirectory>
```

If any errors are thrown, look through the parsed JSON IODs directory and make sure there are no broken files which have a filesize of 0 or a very low filesize that contains no tags.

After this the files should be ready for use in posdaJS, just replace the files in the 'lib/json/iod' directory.

##Updating Book Tables

Download HTML files from NEMA website and run 'booktableparse.js' found in 'tools/htmlparse':

```
node linkanchorparse.js <HTMLDirectory> <JSONTableByPartOutputDirectory>
```

##Updating svg List

Download HTML files from NEMA website and run 'svgparse.js' found in 'tools/htmlparse':

```
node svgparse.js <HTMLDirectory> <SVGListOutputFile>
```

To enable SVG viewing modify uncomment '<option>svg</option>' from the 'index.html' page.

#License

MIT License. For more information please see Lincense.md
