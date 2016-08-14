#posdaJS Online Live Demo

http://petervu.ca/posdajs/

##What is posdaJS?

posdaJS is a client sided DICOM table browser based on [posda](https://github.com/UAMS-DBMI/PosdaTools) originally coded as a Google Summer of Code project in primarily AngularJS.

##Installation

Simply download the zip file [here](#) or clone this repository and run 'index.html'.

#Updating Tables

Current NEMA DICOM standard files can be found here:
http://dicom.nema.org/medical/dicom/current/

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

TBD, Need to ask mentor.
