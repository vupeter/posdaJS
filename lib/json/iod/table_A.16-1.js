var data = {
   "tags" : {
      "(0018,1803)" : {
         "name" : "NTP Source Address",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Synchronization"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Floating Point Value",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0012,0051)" : {
         "req" : "3",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point Description"
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "req" : "1C"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "entity" : "Image",
         "module" : "Intervention",
         "desc" : "Time of completion of administration of the intervention drug.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Stop Time"
      },
      "(0010,0218)" : {
         "entity" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Additional Information"
      },
      "(0008,0050)" : {
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0028,6023)" : {
         "mod_tables" : [
            "table_C.7-15"
         ],
         "usage" : "U",
         "name" : "Frame of Interest Type",
         "module" : "Frame Pointers",
         "req" : "3",
         "desc" : [
            "A Defined Term for each one of the Frame(s) of Interest (0028,6020) that identifies the significance of the frame. If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "HIGHMI",
                     "a frame acquired at the time of the high power pulse that destroys acoustic contrast"
                  ],
                  [
                     "RWAVE",
                     "the frame closest to the R-Wave"
                  ],
                  [
                     "TRIGGER",
                     "a trigger frame, for example a set delay from the R Wave"
                  ],
                  [
                     "ENDSYSTOLE",
                     "the frame closest to end of systole, at the end of the T-wave"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Image"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "General Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0018,7011)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Exposures on Detector Since Manufactured",
         "module" : "DX Detector",
         "req" : "3",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Description"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID"
      },
      "(0018,1155)" : {
         "entity" : "Image",
         "desc" : [
            "Identify the general level of X-Ray dose exposure.",
            {
               "list" : [
                  [
                     "SC",
                     "low dose exposure generally corresponding to fluoroscopic settings (e.g., preparation for diagnostic quality image acquisition)"
                  ],
                  [
                     "GR",
                     "high dose for diagnostic quality image acquisition (also called digital spot or cine)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "X-Ray Acquisition",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Radiation Setting"
      },
      "(0018,1154)" : {
         "entity" : "Image",
         "desc" : "Average width of X-Ray pulse in msec.",
         "req" : "3",
         "module" : "X-Ray Acquisition",
         "name" : "Average Pulse Width",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Last Value Mapped",
         "entity" : "Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ]
                  },
                  "\n                      "
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(0018,1063)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Frame Time",
         "entity" : "Image",
         "desc" : [
            "Nominal time (in msec) per individual frame. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.5.1.1"
               }
            },
            " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time."
         ],
         "req" : "1C",
         "module" : "Cine"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Drug Start Time",
         "module" : "Intervention",
         "req" : "3",
         "desc" : "Time of administration of the interventional drug.",
         "entity" : "Image"
      },
      "(0018,7004)" : {
         "name" : "Detector Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "req" : "2",
         "module" : "DX Detector",
         "desc" : [
            "The type of detector used to acquire this image.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DIRECT",
                     "X-Ray photoconductor"
                  ],
                  [
                     "SCINTILLATOR",
                     "Phosphor used"
                  ],
                  [
                     "STORAGE",
                     "Storage phosphor"
                  ],
                  [
                     "FILM",
                     "Scanned film/screen"
                  ]
               ]
            }
         ]
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "name" : "LUT Data",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "desc" : "LUT Data in this Sequence.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Group Reference",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer's Model Name",
         "module" : "Specimen",
         "desc" : "Manufacturer's model name of the container component.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ]
            }
         ],
         "name" : "Value Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "LUT Explanation",
         "entity" : "Image",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "module" : "General Image",
         "req" : "1"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "module" : "General Image",
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
            {
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Spatial Locations Preserved",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0028,6100)[<0>](0028,6102)" : {
         "req" : "1C",
         "desc" : [
            [
               "Each pair of numbers in this multi-valued attribute specify a beginning and ending frame number inclusive of a range where this particular mask operation is valid. Discontinuous ranges are represented by multiple pairs of numbers. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. If this Attribute is missing in this particular sequence item, then the mask operation is applicable throughout the entire Multi-frame Image, subject to certain limits as described in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Mask Operation (0028,6101) equals REV_TID. May be present otherwise."
         ],
         "module" : "Mask",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "name" : "Applicable Frame Range"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "req" : "1C",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0105)" : {
         "entity" : "Image",
         "desc" : [
            "The identifier of the Mapping Resource.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0040,0512)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "module" : "Specimen",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,1043)" : {
         "module" : "Contrast/Bolus",
         "desc" : "Time of end of contrast injection",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast/Bolus Stop Time",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "ALTERED",
                     "Altered/Neutered"
                  ],
                  [
                     "UNALTERED",
                     "Unaltered/intact"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study",
         "req" : "2C",
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,1008)" : {
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(60xx,1303)" : {
         "name" : "ROI Standard Deviation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : [
            "ROI standard deviation.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Overlay Plane",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,700a)" : {
         "entity" : "Image",
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "module" : "DX Detector",
         "req" : "3",
         "name" : "Detector ID",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "Patient's full name.",
         "req" : "2",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0028,6100)[<0>](0028,6110)" : {
         "name" : "Mask Frame Numbers",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "entity" : "Image",
         "desc" : "Specifies the frame numbers of the pixel data used to generate this mask. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. Required if Mask Operation (0028,6101) is AVG_SUB.",
         "module" : "Mask",
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(60xx,0011)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Overlay Plane",
         "desc" : "Number of Columns in Overlay.",
         "name" : "Overlay Columns",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0018,1413)" : {
         "name" : "Deviation Index",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ],
         "module" : "DX Detector",
         "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1480)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Tomography Acquisition",
         "desc" : "Time in seconds the source has taken to rotate the Tomo Angle during X-Ray acquisition.",
         "name" : "Tomo Time",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,1136)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Lateral Increment",
         "req" : "2C",
         "desc" : [
            [
               "Incremental change in Lateral position of the table relative to first frame of Multi-frame image given in mm. Table motion towards +90\u00b0position of the secondary angle of the positioner is positive. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.4.1.3"
                  }
               },
               "."
            ],
            "Required if Table Motion is DYNAMIC."
         ],
         "module" : "X-Ray Table",
         "entity" : "Image"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0020,0060)" : {
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
               "list" : [
                  [
                     "R",
                     "right"
                  ],
                  [
                     "L",
                     "left"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Occupation",
         "entity" : "Study",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "req" : "3"
      },
      "(60xx,0015)" : {
         "mod_tables" : [
            "table_C.9-3"
         ],
         "usage" : "C - Required if Overlay Data contains multiple frames",
         "name" : "Number of Frames in Overlay",
         "req" : "1",
         "module" : "Multi-frame Overlay",
         "desc" : "Number of Frames in Overlay. Required if Overlay data contains multiple frames.",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,2110)" : [
         {
            "module" : "General Image",
            "req" : "3",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "00",
                        "Image has NOT been subjected to lossy compression."
                     ],
                     [
                        "01",
                        "Image has been subjected to lossy compression."
                     ]
                  ],
                  "type" : "variablelist"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  "."
               ]
            ],
            "entity" : "Image",
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M"
         },
         {
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "00",
                        "Image has NOT been subjected to lossy compression."
                     ],
                     [
                        "01",
                        "Image has been subjected to lossy compression."
                     ]
                  ],
                  "type" : "variablelist"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  }
               ],
               "Required if Lossy Compression has been performed on the Image. May be present otherwise."
            ],
            "module" : "X-Ray Image",
            "req" : "1C",
            "entity" : "Image"
         }
      ],
      "(0018,7006)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "DX Detector",
         "desc" : "Free text description of detector.",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Description"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Time"
      },
      "(0028,0301)" : {
         "name" : "Burned In Annotation",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ]
            },
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "req" : "3"
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "module" : "Patient"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,0515)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7"
         ],
         "usage" : "M",
         "name" : "Anatomic Region Modifier Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "X-Ray Image",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "General Image"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "name" : "Specimen Type Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "module" : "General Series",
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,1044)" : {
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Total Dose",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "entity" : "Image"
      },
      "(0018,1610)" : {
         "req" : "1C",
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Center of Circular Shutter"
      },
      "(0018,1137)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Longitudinal Increment",
         "entity" : "Image",
         "desc" : [
            [
               "Incremental change in Longitudinal position of the table relative to first frame of Multi-frame image in mm. Table motion towards +90\u00b0position of the primary angle of the positioner is positive. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.4.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Table Motion is DYNAMIC."
         ],
         "module" : "X-Ray Table",
         "req" : "2C"
      },
      "(0018,1138)" : {
         "mod_tables" : [
            "table_C.8-29"
         ],
         "usage" : "U",
         "name" : "Table Angle",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Angle of table plane in degrees relative to horizontal plane [Gravity plane]. Positive values indicate that the head of the table is upwards.",
         "module" : "X-Ray Table"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0018,7028)" : {
         "name" : "Detector Active Origin",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the active detector area from the TLHC of a rectangle circumscribing the physical detector area, measured in physical detector pixels as a row offset followed by a column offset.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "module" : "DX Detector",
         "entity" : "Image"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "name" : "Comments on the Performed Procedure Step",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution"
      },
      "(0008,1120)" : {
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Study"
      },
      "(0028,0101)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.5"
                  }
               },
               " for further explanation."
            ],
            "module" : "Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Bits Stored"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "Bits Stored",
            "module" : "X-Ray Image",
            "req" : "1",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.7"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "entity" : "Image"
         }
      ],
      "(0028,0030)" : {
         "req" : "1C",
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
            {
               "attrs" : {
                  "linkend" : "sect_10.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               }
            },
            ". Required if the image has been calibrated. May be present otherwise."
         ],
         "module" : "X-Ray Acquisition",
         "entity" : "Image",
         "name" : "Pixel Spacing",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "module" : "Device",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0028,0011)" : {
         "module" : "Image Pixel",
         "desc" : "Number of columns in the image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Columns",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC ID Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,7012)" : {
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image.",
         "req" : "3",
         "module" : "DX Detector",
         "entity" : "Image",
         "name" : "Detector Time Since Last Exposure",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "req" : "1",
         "module" : "General Series",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0216)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "name" : "Bits Stored",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "module" : "General Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Status",
         "module" : "Intervention",
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PRE",
                     null
                  ],
                  [
                     "INTERMEDIATE",
                     null
                  ],
                  [
                     "POST",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,2142)" : {
         "entity" : "Image",
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "module" : "Cine",
         "req" : "3",
         "name" : "Start Trim",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data"
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Description",
         "req" : "3",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "module" : "Intervention",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Volume",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Device"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0028,0004)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "module" : "Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Photometric Interpretation"
         },
         {
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "desc" : "Specifies the intended interpretation of the pixel data. Only MONOCHROME2 may be used.",
            "module" : "X-Ray Image",
            "req" : "1"
         }
      ],
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0028,6100)[<0>](0028,9454)" : {
         "req" : "3",
         "module" : "Mask",
         "desc" : [
            "Specifies the method of selection of the mask operations of this item.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SYSTEM",
                     null
                  ],
                  [
                     "USER",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image",
         "name" : "Mask Selection Mode",
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0028,6100)[<0>](0028,6120)" : {
         "entity" : "Image",
         "req" : "2C",
         "module" : "Mask",
         "desc" : [
            "If Mask Operation is TID, specifies the offset to be subtracted from the current frame number in order to locate the mask frame in TID mode.",
            [
               "If Mask Operation is REV_TID, specifies the initial offset to be subtracted from the first contrast frame number. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.10.1.1"
                  }
               },
               "."
            ],
            "If zero length, TID Offset defaults to 1. Required if Mask Operation (0028,6101) is TID or REV_TID."
         ],
         "name" : "TID Offset",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(0040,051a)" : {
         "entity" : "Image",
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Description"
      },
      "(0018,1030)" : {
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Simple Frame List",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "module" : "Frame Extraction"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "req" : "3"
      },
      "(003a,0300)" : {
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "module" : "Cine",
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or more Items may be included in this Sequence.",
            [
               "Required if the Transfer Syntax used to encode the multi-frame image contains multiplexed (interleaved) audio channels, such as is possible with MPEG2 Systems (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "biblio_ISOIEC13818-1"
                  }
               },
               ")."
            ]
         ],
         "req" : "2C",
         "entity" : "Image"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "module" : "X-Ray Image",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7",
            "table_10-8"
         ]
      },
      "(0020,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Patient Orientation",
         "req" : "2C",
         "module" : "General Image",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                     },
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0008,0118)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource UID",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series"
      },
      "(0008,010f)" : {
         "desc" : [
            "The identifier of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.6"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "Context Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,103e)" : {
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Description of the Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "req" : "1C",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Patient Orientation"
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies the SOP Class. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation. See also ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,0072)" : {
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Effective Duration"
      },
      "(0028,0034)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               }
            },
            "."
         ],
         "req" : "1C",
         "module" : "Image Pixel"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "req" : "1",
         "module" : "Frame Extraction",
         "entity" : "Image",
         "name" : "Multi-frame Source SOP Instance UID",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para",
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ]
                  },
                  "\n                "
               ]
            },
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "D",
                     "replace with a non-zero length value that may be a dummy value and consistent with the VR"
                  ],
                  [
                     "Z",
                     "replace with a zero length value, or a non-zero length value that may be a dummy value and consistent with the VR"
                  ],
                  [
                     "X",
                     "remove"
                  ],
                  [
                     "U",
                     "replace with a non-zero length UID that is internally consistent within a set of Instance"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 }
                              },
                              "\n                    "
                           ]
                        },
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       }
                                    },
                                    "."
                                 ]
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Deidentification Action"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "General Series"
      },
      "(0018,1042)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast/Bolus Start Time",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "desc" : "Time of start of injection",
         "req" : "3"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(60xx,0045)" : {
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.9.2.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "Overlay Plane",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "name" : "Overlay Subtype"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Study"
      },
      "(0018,1620)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Vertices of the Polygonal Shutter",
         "entity" : "Image",
         "module" : "Display Shutter",
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            {
               "attrs" : {
                  "mark" : "none"
               },
               "el" : "itemizedlist",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "para",
                           "attrs" : {
                              "xml:id" : "para_d59cd0c0-b975-4ac4-adee-bb16895e809c"
                           },
                           "content" : [
                              "row of the origin vertex\\column of the origin vertex"
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "listitem"
                  },
                  "\n                  "
               ]
            },
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "req" : "1C"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 }
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 }
                              },
                              "\n                  "
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               ")."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
                              },
                              "\n                        "
                           ]
                        },
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1140)[<0>](0008,1155)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "module" : "General Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Image"
         },
         {
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "X-Ray Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,0035)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Alternative Calendar"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Image",
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,2297)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person",
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0020,0012)" : {
         "name" : "Acquisition Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C"
      },
      "(0028,1202)" : {
         "entity" : "Image",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "General Image",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "entity" : "Patient",
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "name" : "Patient's Size",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0038,0062)" : {
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Service Episode Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Image",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0018,1151)" : {
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : "X-Ray Tube Current in mA. Required if Exposure (0018,1152) is not present. May be present otherwise.",
         "req" : "2C",
         "name" : "X-Ray Tube Current",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ]
      },
      "(0010,0040)" : {
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "desc" : [
            "Sex of the named patient.",
            {
               "list" : [
                  [
                     "M",
                     "male"
                  ],
                  [
                     "F",
                     "female"
                  ],
                  [
                     "O",
                     "other"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Sex"
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "module" : "General Series",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Material",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Material of container component.",
            {
               "list" : [
                  [
                     "GLASS",
                     null
                  ],
                  [
                     "PLASTIC",
                     null
                  ],
                  [
                     "METAL",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0028,1102)" : {
         "req" : "1C",
         "module" : "Image Pixel",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0008,0117)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Context UID",
         "entity" : "Image",
         "desc" : [
            "The unique identifier of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.6"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0028,1050)" : {
         "entity" : "Image",
         "desc" : [
            "Window Center for display.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
         ],
         "module" : "VOI LUT",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "Window Center"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0245)" : {
         "name" : "Performed Procedure Step Start Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "General Series"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0028,0106)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "Image Pixel",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0028,6100)[<0>](0028,6114)" : {
         "entity" : "Image",
         "desc" : [
            [
               "A pair of floating point numbers specifying the fractional vertical [adjacent row spacing] and horizontal [adjacent column spacing] pixel shift applied to the mask before subtracting it from the contrast frame. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "When the Frame Pixel Shift Functional Group is present the values of the Mask Pixel Shift attribute of that Functional Group prevails over the values specified in this module."
                     ],
                     "attrs" : {
                        "xml:id" : "para_ba00d9b2-ccac-4347-a36b-df304811ee58"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "name" : "Mask Sub-pixel Shift"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,702b)" : {
         "name" : "Detector Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Model name of the detector component of the acquisition system",
         "module" : "DX Detector"
      },
      "(0018,702a)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "DX Detector",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "name" : "Detector Manufacturer Name",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(60xx,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Origin",
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ],
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "Overlay Plane",
         "entity" : "Image"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence",
         "entity" : "Patient",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "req" : "1"
      },
      "(0010,2202)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Image"
      },
      "(0018,1600)" : {
         "req" : "1",
         "module" : "Display Shutter",
         "desc" : [
            "Shape(s) of the shutter defined for display.",
            {
               "list" : [
                  [
                     "RECTANGULAR",
                     null
                  ],
                  [
                     "CIRCULAR",
                     null
                  ],
                  [
                     "POLYGONAL",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "This multi-valued Attribute shall contain at most one of each Enumerated Value. When multiple values are present, and the shutter is applied to a displayed image, then all of the shapes shall be combined and applied simultaneously, that is, the least amount of image remaining shall be visible (unoccluded). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "figure_C.7-4b"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Shutter Shape",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Contribution Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(60xx,1500)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "name" : "Overlay Label",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "req" : "3"
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "Image Pixel"
      },
      "(0018,1153)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
         "module" : "X-Ray Acquisition",
         "name" : "Exposure in \u00b5As",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content",
         "desc" : [
            "Encrypted data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.4.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(0018,1067)" : {
         "name" : "Image Trigger Delay",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "req" : "3",
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0018,7026)" : {
         "req" : "3",
         "module" : "DX Detector",
         "desc" : [
            "Dimensions in mm of the active area.",
            "If Detector Active Shape (0018,7024) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of a circumscribed circle.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a751e372-85ed-439c-bc34-7e5509e1268c"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Dimensions (0018,1149), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Active Dimension(s)"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,1706)" : {
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the upper edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C",
         "module" : "X-Ray Collimator",
         "entity" : "Image",
         "name" : "Collimator Upper Horizontal Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Retrieve URI",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "content" : [
                  "\n",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "module" : "Image Pixel",
            "req" : "1",
            "name" : "Samples per Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1",
            "module" : "X-Ray Image",
            "desc" : "Number of samples (color planes) in this image shall have a value of 1.",
            "entity" : "Image",
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M"
         }
      ],
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "entity" : "Image",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common"
      },
      "(0008,0123)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,1111)" : {
         "module" : "XRF Positioner",
         "desc" : [
            "Distance in mm from source to center of field of view.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This value is traditionally referred to as Source Object Distance (SOD)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a76a0412-34b4-4d56-ab7e-a111ad76a2db"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Distance Source to Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-31"
         ]
      },
      "(0008,1140)[<0>](0062,000b)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "req" : "1C",
            "module" : "General Image",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "module" : "X-Ray Image",
            "req" : "1C",
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3"
            ]
         }
      ],
      "(0018,1602)" : {
         "name" : "Shutter Left Vertical Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "module" : "Display Shutter",
         "req" : "1C"
      },
      "(0008,9215)" : {
         "name" : "Derivation Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0028,1052)" : {
         "name" : "Rescale Intercept",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "req" : "1C",
         "module" : "Modality LUT",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0028,6100)[<0>](0028,6112)" : {
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Contrast Frame Averaging",
         "desc" : "Specifies the number of contrast frames to average together before performing the mask operation. If the Attribute is missing, no averaging is performed.",
         "module" : "Mask",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,0015)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Body Part Examined",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
                  }
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "module" : "Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component Diameter"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Stock Number",
         "req" : "1",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence"
      },
      "(0028,3000)" : {
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this Sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "module" : "Modality LUT",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Modality LUT Sequence",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP"
      },
      "(0028,1056)" : {
         "name" : "VOI LUT Function",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "VOI LUT",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "SIGMOID",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            [
               "When this attribute is not present, the interpretation of the values of Window Center (0028,1050) and Window Width (0028,1051) is linear as in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : [
            "Time when the image acquisition device calibration was last changed in any way. Multiple entries may be used. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               }
            },
            " for further explanation."
         ]
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient Position"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0008,0033)" : {
         "name" : "Content Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Image",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing descriptive attributes of related equipment that has contributed to the acquisition, creation or modification of the composite instance.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0010,0034)" : {
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(0028,0107)" : {
         "entity" : "Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "Image Pixel",
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,8151)" : {
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "desc" : "X-Ray Tube Current in \u00b5A.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "X-Ray Tube Current in \u00b5A"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID"
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "VOI LUT",
         "name" : "LUT Descriptor",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen Identifier",
         "module" : "Specimen",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Inter-Marker Distance",
         "entity" : "Image",
         "module" : "Device",
         "req" : "3",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,0023)" : {
         "name" : "Content Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "2C",
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number"
      },
      "(0018,1164)" : {
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : [
            [
               "Physical distance measured at the front plane of the Image Receptor housing between the center of each pixel specified by a numeric pair - row spacing value(delimiter) column spacing value in mm. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.7.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation of the value order."
            ],
            "The value of this attribute shall never be adjusted to account for correction for the effect of geometric magnification or calibration against an object of known size; Pixel Spacing (0028,0030) is specified for that purpose."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Imager Pixel Spacing"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,2112)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Source Image Sequence",
         "desc" : [
            "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0028,6100)[<0>](0028,9416)" : {
         "name" : "Subtraction Item ID",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Identification of the Subtraction Item used to associate a certain Mask Sub-Pixel Shift (0028,6114) in the Frame Pixel Shift Functional Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.14.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if SOP Class UID (0008,0016) equals \"1.2.840.10008.5.1.4.1.1.12.1.1\" or \"1.2.840.10008.5.1.4.1.1.12.2.1\". May be present otherwise."
         ],
         "module" : "Mask"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Image",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0028,6020)" : {
         "name" : "Frame Numbers Of Interest (FOI)",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "usage" : "U",
         "desc" : "Frame number(s) selected as frames of interest. A frame number may appear more than once.",
         "req" : "3",
         "module" : "Frame Pointers",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0018,1000)" : {
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Equipment",
         "req" : "3"
      },
      "(0018,1061)" : {
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "req" : "3",
         "name" : "Trigger Source or Type",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U"
      },
      "(0010,0213)" : {
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Nomenclature"
      },
      "(0008,1140)[<0>](0008,1160)" : [
         {
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
            "module" : "General Image",
            "desc" : [
               "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "This Attribute may be multi-valued."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                        }
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ]
         },
         {
            "desc" : [
               "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "This Attribute may be multi-valued."
                        ],
                        "attrs" : {
                           "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                        },
                        "el" : "para"
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "req" : "1C",
            "module" : "X-Ray Image",
            "entity" : "Image",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3"
            ],
            "usage" : "M"
         }
      ],
      "(0018,1708)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "name" : "Collimator Lower Horizontal Edge",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the lower edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "X-Ray Collimator",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series"
      },
      "(0008,002a)" : {
         "name" : "Acquisition DateTime",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                     },
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: title",
                              "linkend" : "sect_C.7.4.2"
                           }
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number"
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.12.1"
                                       }
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0028,0006)" : {
         "entity" : "Image",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration"
      },
      "(0018,1490)" : {
         "name" : "Tomo Type",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO",
         "entity" : "Image",
         "module" : "X-Ray Tomography Acquisition",
         "desc" : [
            "Type of tomography.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "SPIRAL",
                     null
                  ],
                  [
                     "POLYCYCLOIDAL",
                     null
                  ],
                  [
                     "CIRCULAR",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0513)" : {
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0008,0018)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation. See also ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Creator Reference",
         "entity" : "Image",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0018,1802)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Time Distribution Protocol",
         "req" : "3",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "list" : [
                  [
                     "NTP",
                     "Network Time Protocol"
                  ],
                  [
                     "IRIG",
                     "Inter Range Instrumentation Group"
                  ],
                  [
                     "GPS",
                     "Global Positioning System"
                  ],
                  [
                     "SNTP",
                     "Simple Network Time Protocol"
                  ],
                  [
                     "PTP",
                     "IEEE 1588 Precision Time Protocol"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference"
      },
      "(0100,0424)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization Comment"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type"
      },
      "(0018,1704)" : {
         "entity" : "Image",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the right edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "X-Ray Collimator",
         "req" : "1C",
         "name" : "Collimator Right Vertical Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U"
      },
      "(0008,2228)" : {
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7",
            "table_10-8"
         ],
         "usage" : "M",
         "name" : "Primary Anatomic Structure Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "X-Ray Image",
         "entity" : "Image"
      },
      "(0008,0008)" : [
         {
            "name" : "Image Type",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms and further explanation."
            ],
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "req" : "1",
            "module" : "X-Ray Image",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Image Type"
         }
      ],
      "(0008,1084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Localization Content Item Sequence"
      },
      "(0028,1040)" : {
         "req" : "1",
         "desc" : [
            "The relationship between the Pixel sample values and the X-Ray beam intensity.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "X-Ray Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "name" : "Pixel Intensity Relationship"
      },
      "(0010,0026)" : {
         "name" : "Source Patient Group Identification Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0018,1152)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Exposure",
         "entity" : "Image",
         "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current. Required if either Exposure Time (0018,1150) or X-Ray Tube Current (0018,1151) are not present. May be present otherwise.",
         "req" : "2C",
         "module" : "X-Ray Acquisition"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site Name"
      },
      "(0008,0030)" : {
         "req" : "2",
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "name" : "Study Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1111)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,1604)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Shutter Right Vertical Edge",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "req" : "1C",
         "module" : "Display Shutter",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Type of Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "The type of identifier in this item.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "RFID",
                     null
                  ],
                  [
                     "BARCODE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "module" : "General Image",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.1"
                  }
               },
               "."
            ],
            "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "ICC Profile"
      },
      "(0028,0108)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "module" : "Image Pixel",
         "req" : "1",
         "entity" : "Image",
         "name" : "Rows",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0028,0102)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "High Bit",
            "req" : "1",
            "module" : "Image Pixel",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "High Bit",
            "module" : "X-Ray Image",
            "desc" : [
               "Most significant bit for pixel sample data.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.8"
                     }
                  },
                  "."
               ]
            ],
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0018,1134)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Motion",
         "entity" : "Image",
         "desc" : {
            "list" : [
               [
                  "STATIC",
                  null
               ],
               [
                  "DYNAMIC",
                  null
               ]
            ],
            "type" : "variablelist",
            "title" : "Defined Terms:"
         },
         "module" : "X-Ray Table",
         "req" : "2"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "name" : "Container Component ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0018,106c)" : {
         "entity" : "Frame of Reference",
         "req" : "1C",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "module" : "Synchronization",
         "name" : "Synchronization Channel",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(0018,1460)" : {
         "name" : "Tomo Layer Height",
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "desc" : "Distance in mm between the table surface and the sharp image plane.",
         "req" : "1",
         "module" : "X-Ray Tomography Acquisition",
         "entity" : "Image"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.7"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Study",
         "req" : "2"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution DateTime",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0028,0009)" : [
         {
            "usage" : "C - Required if pixel data is Multi-frame Cine Data",
            "mod_tables" : [
               "table_C.7-14"
            ],
            "name" : "Frame Increment Pointer",
            "entity" : "Image",
            "desc" : [
               "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.6.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "module" : "Multi-frame",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Required if Multi-frame Image.",
               [
                  "Contains the Data Element Tag of the attribute that is used as the Frame increment in Multi-frame image pixel data (see ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.6"
                     },
                     "el" : "xref"
                  },
                  ")."
               ],
               {
                  "list" : [
                     [
                        "00181063H",
                        "Frame Time (0018,1063)"
                     ],
                     [
                        "00181065H",
                        "Frame Time Vector (0018,1065)"
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "module" : "X-Ray Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Frame Increment Pointer"
         }
      ],
      "(0088,0200)[<0>](0028,1203)" : {
         "entity" : "Image",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ]
            }
         ],
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0028,1055)" : {
         "name" : "Window Center & Width Explanation",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "module" : "VOI LUT",
         "req" : "3",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "entity" : "Image"
      },
      "(0028,2002)" : {
         "req" : "3",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Color Space",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0012,0030)" : {
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site ID"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "req" : "3",
         "module" : "Device",
         "desc" : "User-supplied identifier for the device",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device ID"
      },
      "(0008,0032)" : {
         "name" : "Acquisition Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "module" : "General Image"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID"
      },
      "(0008,1050)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0018,6000)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Sensitivity",
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_0936da47-cfae-4167-a653-765f69cfd218"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_31cfc173-5434-4f4d-a128-dc4aa6aeb079"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_10-23",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    " 'Exposure Index Macro', which are recommended."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "DX Detector",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0018,700c)" : {
         "entity" : "Image",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "module" : "DX Detector",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Date of Last Detector Calibration"
      },
      "(0028,0300)" : {
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
            {
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               },
               ". See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Quality Control Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0088,0200)" : {
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Image",
         "req" : "3"
      },
      "(0008,009d)" : {
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Consulting Physician Identification Sequence"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Breed Description"
      },
      "(0028,1053)" : {
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "Rescale Slope",
         "entity" : "Image",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "req" : "1C",
         "module" : "Modality LUT"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0038,0060)" : {
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Image",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "LUT Label",
         "module" : "General Image",
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "req" : "2",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "name" : "Study Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,7001)" : {
         "module" : "DX Detector",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Temperature",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Reason for the attribute modification.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "COERCE",
                     "Replace values of attributes such as Patient Name, ID, Accession Number, for example, during import of media from an external institution, or reconciliation against a master patient index."
                  ],
                  [
                     "CORRECT",
                     "Replace incorrect values, such as Patient Name or ID, for example, when incorrect worklist item was chosen or operator input error."
                  ]
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0302)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Recognizable Visual Features",
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "entity" : "Image"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Image",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ]
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Repository Unique ID"
      },
      "(0008,0022)" : {
         "name" : "Acquisition Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "req" : "3"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "MONO",
                     "1 signal"
                  ],
                  [
                     "STEREO",
                     "2 simultaneously acquired (left and right) signals"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Cine",
         "req" : "1",
         "entity" : "Image",
         "name" : "Channel Mode",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series"
      },
      "(0018,0010)" : {
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Agent",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "req" : "2",
         "desc" : "Contrast or bolus agent"
      },
      "(0018,1150)" : {
         "module" : "X-Ray Acquisition",
         "req" : "2C",
         "desc" : [
            "Duration of X-Ray exposure in msec. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Required if Exposure (0018,1152) is not present. May be present otherwise."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Exposure Time"
      },
      "(2050,0020)" : {
         "name" : "Presentation LUT Shape",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2 or any color photometric interpretation."
                  ],
                  [
                     "INVERSE",
                     "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
         ],
         "module" : "General Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Time when the image acquisition device calibration was last changed in any way. Multiple entries may be used. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Value Type"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(60xx,1302)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Overlay Plane",
         "desc" : [
            "ROI Mean.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Mean"
      },
      "(0018,1046)" : {
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast Flow Rate"
      },
      "(0008,2111)" : [
         {
            "name" : "Derivation Description",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "desc" : [
               "A text description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "req" : "3",
            "module" : "General Image"
         },
         {
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Derivation Description",
            "entity" : "Image",
            "desc" : [
               "A text description of how this image was derived.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.5"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "3",
            "module" : "X-Ray Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence"
      },
      "(0018,1491)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Form of tomography:",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "MOTION",
                     null
                  ],
                  [
                     "TOMOSYNTHESIS",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "X-Ray Tomography Acquisition",
         "name" : "Tomo Class",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
                              },
                              "\n                  "
                           ]
                        },
                        "\n                "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information"
      },
      "(0018,7008)" : {
         "name" : "Detector Mode",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "module" : "DX Detector",
         "desc" : "Text description of operating mode of detector (implementation specific)."
      },
      "(0008,3010)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Irradiation Event UID",
         "entity" : "Image",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "module" : "General Image"
      },
      "(0028,3010)[<0>](0028,3006)" : {
         "desc" : "LUT Data in this Sequence.",
         "req" : "1",
         "module" : "VOI LUT",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "LUT Data"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Intervention",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Drug Code Sequence"
      },
      "(0012,0082)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Image"
      },
      "(0018,1470)" : {
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "name" : "Tomo Angle",
         "desc" : "Angle span in degrees of rotation of X-Ray Source during X-Ray acquisition.",
         "module" : "X-Ray Tomography Acquisition",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0018,1166)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Grid",
         "req" : "3",
         "desc" : [
            "Identify the grid. Only a single value shall be present.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "IN",
                     "A Grid is positioned;"
                  ],
                  [
                     "NONE",
                     "No Grid is used."
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "X-Ray Acquisition",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ]
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Study"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,0212)" : {
         "name" : "Strain Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "The strain of the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3"
      },
      "(0018,1065)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Frame Time Vector",
         "entity" : "Image",
         "desc" : [
            [
               "An array that contains the real time increments (in msec) between frames for a Multi-frame image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time Vector."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Frame Time Vector arrays may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_00128047-7815-4707-8295-c0dff1a814e3"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "module" : "Cine"
      },
      "(0008,2218)" : {
         "entity" : "Image",
         "module" : "X-Ray Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7"
         ],
         "usage" : "M",
         "name" : "Anatomic Region Sequence"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,1041)" : {
         "module" : "Contrast/Bolus",
         "req" : "3",
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "entity" : "Image",
         "name" : "Contrast/Bolus Volume",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image"
      },
      "(0008,1115)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "DateTime",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen"
      },
      "(0018,0040)" : {
         "desc" : "Number of frames per second.",
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image",
         "name" : "Cine Rate",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Image",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Station Name"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ]
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "desc" : "Thickness in mm of container component",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(0008,1140)[<0>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "module" : "General Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID"
         },
         {
            "entity" : "Image",
            "module" : "X-Ray Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0040,0560)[<0>](0040,0562)" : {
         "name" : "Issuer of the Specimen Identifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,1049)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Color Space",
         "entity" : "Image",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "name" : "Primary Anatomic Structure Modifier Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "name" : "DateTime",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0028,0100)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "req" : "1",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Bits Allocated"
         },
         {
            "module" : "X-Ray Image",
            "desc" : [
               "Number of bits allocated for each pixel sample.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.1.1.6",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "Bits Allocated"
         }
      ],
      "(0050,0010)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the device",
         "req" : "3",
         "module" : "Device"
      },
      "(0010,0200)" : {
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.1"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,1147)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Field of View Shape",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "desc" : [
            [
               "Shape of the Image Intensifier Field of View. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.2.1.2"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "ROUND",
                     null
                  ],
                  [
                     "RECTANGLE",
                     null
                  ]
               ]
            }
         ]
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Manufacturer",
         "module" : "Device",
         "req" : "3",
         "desc" : "Manufacturer of the device",
         "entity" : "Image"
      },
      "(60xx,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Rows",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "req" : "1",
         "desc" : "Number of Rows in Overlay."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "name" : "Manufacturer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Image",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Deidentification Action Sequence"
      },
      "(0040,0253)" : {
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,2112)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Lossy Image Compression Ratio",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.2"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "req" : "3",
         "desc" : "Length in mm of container component.",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Length",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,1100)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Referenced Patient Photo Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Home Community ID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "module" : "General Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(003a,0300)[<0>](003a,0208)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Channel Source Sequence",
         "entity" : "Image",
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Cine"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "entity" : "Image"
      },
      "(0018,1411)" : {
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ],
         "usage" : "U",
         "name" : "Exposure Index",
         "req" : "3",
         "desc" : [
            "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
                                 }
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This index value is scaled as defined by IEC 62494-1."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
                                 }
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "DX Detector",
         "entity" : "Image"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0251)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step End Time"
      },
      "(0018,1624)" : {
         "module" : "Display Shutter",
         "desc" : [
            "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Presentation Color CIELab Value"
      },
      "(0040,0250)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "module" : "General Series"
      },
      "(0028,1090)" : {
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Recommended Viewing Mode",
         "entity" : "Image",
         "module" : "Mask",
         "req" : "2",
         "desc" : [
            "Specifies the recommended viewing protocol(s).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SUB",
                     "For subtraction with mask images."
                  ],
                  [
                     "NAT",
                     "Native viewing of image as sent."
                  ]
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If an implementation does not recognize the Defined Term for Recommended Viewing Mode (0028,1090), reverting to native display mode is recommended."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_9f1cf042-4cd2-4cab-8d21-b07b36cf64cd"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0020,0013)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Instance Number",
            "entity" : "Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "General Image",
            "req" : "2"
         },
         {
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M",
            "name" : "Instance Number"
         }
      ],
      "(0008,1010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address"
      },
      "(0018,115a)" : {
         "name" : "Radiation Mode",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Specifies X-Ray radiation mode.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CONTINUOUS",
                     null
                  ],
                  [
                     "PULSED",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "X-Ray Acquisition"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "desc" : "Primary identifier for an individual subject.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0028,3000)[<0>](0028,3004)" : {
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "Modality LUT Type",
         "req" : "1",
         "module" : "Modality LUT",
         "desc" : [
            "Specifies the output values of this Modality LUT.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "name" : "Container Component Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1400)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "name" : "Acquisition Device Processing Description",
         "entity" : "Image",
         "desc" : [
            "Indicates any visual processing performed on the images prior to exchange.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "X-Ray Image",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "desc" : [
            "Type of object instances referenced.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DICOM",
                     null
                  ],
                  [
                     "CDA",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Type of Instances"
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "list" : [
                  [
                     "BIPED",
                     null
                  ],
                  [
                     "QUADRUPED",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "Required if the patient is an animal and the anatomical frame of reference is not bipedal. May be present otherwise. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C"
      },
      "(0010,2201)" : {
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0032,1034)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0018,701a)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Binning",
         "module" : "DX Detector",
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0012,0071)" : {
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Series ID"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CLASSIC",
                     null
                  ],
                  [
                     "ENHANCED",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "entity" : "Image"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "entity" : "Image",
         "module" : "VOI LUT",
         "req" : "3",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "LUT Explanation"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Additional Patient History"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "SOP Common"
      },
      "(0018,7000)" : {
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6c5ebe11-778a-40a1-864a-36d3cf8598c8"
                     },
                     "content" : [
                        "This flag is intended to indicate whether or not there may have been some compromise of the diagnostic quality of the image due to some condition such as over-temperature, etc."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "DX Detector",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Conditions Nominal Flag"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "module" : "General Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Operators' Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1048)" : {
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.1"
               },
               "el" : "xref"
            },
            " for Performing Physician)"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0005)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "desc" : [
            "Character Set that expands or replaces the Basic Graphic Set.",
            "Required if an expanded or replacement character set is used.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Concept Name Code Sequence"
      },
      "(0028,1054)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Rescale Intercept is present."
         ],
         "module" : "Modality LUT",
         "name" : "Rescale Type",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0018,8150)" : {
         "req" : "3",
         "desc" : "Duration of X-Ray exposure in \u00b5sec.",
         "module" : "X-Ray Acquisition",
         "entity" : "Image",
         "name" : "Exposure Time in \u00b5S",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID"
      },
      "(0050,0010)" : {
         "name" : "Device Sequence",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Device"
      },
      "(0018,1244)" : {
         "desc" : [
            "Describes the preferred playback sequencing for a multi-frame image.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n-1,\u20262,1,2,\u2026n,\u2026)"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Preferred Playback Sequencing"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0560)" : {
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Specimen Description Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Image"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "req" : "1C",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NAMED_PROTOCOL",
                     null
                  ],
                  [
                     "RESTRICTED_REUSE",
                     null
                  ],
                  [
                     "PUBLIC_RELEASE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0018,0060)" : {
         "name" : "KVP",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "req" : "2",
         "desc" : "Peak kilo voltage output of the X-Ray generator used.",
         "module" : "X-Ray Acquisition",
         "entity" : "Image"
      },
      "(0018,1450)" : {
         "entity" : "Image",
         "desc" : [
            "Angle of the X-Ray beam in degree relative to an orthogonal axis to the detector plane. Positive values indicate that the tilt is towards the head of the table.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The detector plane is assumed to be parallel to the table plane."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a50e77c4-b6eb-425a-ad4b-bae0851ba6af"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "XRF Positioner",
         "req" : "3",
         "name" : "Column Angulation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-31"
         ]
      },
      "(0020,0200)" : {
         "name" : "Synchronization Frame of Reference UID",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.2.1.1"
               }
            },
            "."
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference"
      },
      "(0018,1801)" : {
         "entity" : "Frame of Reference",
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Time Source"
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,1622)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Shutter Presentation Value",
         "entity" : "Image",
         "desc" : [
            "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "attrs" : {
                        "xml:id" : "para_ffd1df8a-26f5-4fb0-aeb7-f15acf3c3a88"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "module" : "Display Shutter"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0012,0040)" : {
         "name" : "Clinical Trial Subject ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "Patient"
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "req" : "1C"
      },
      "(0028,6100)" : {
         "module" : "Mask",
         "desc" : [
            "Defines a sequence that describes mask subtraction operations for a Multi-frame Image.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Mask Subtraction Sequence",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Channel Identification Code",
         "entity" : "Image",
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "req" : "1",
         "module" : "Cine"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "module" : "Device",
         "desc" : [
            "Length in mm of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Length"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Device",
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "name" : "Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     },
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ]
                  },
                  "\n                      "
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Type Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve AE Title",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0018,1048)" : {
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Ingredient",
         "desc" : [
            "Active ingredient of agent.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "IODINE",
                     null
                  ],
                  [
                     "GADOLINIUM",
                     null
                  ],
                  [
                     "CARBON DIOXIDE",
                     null
                  ],
                  [
                     "BARIUM",
                     null
                  ]
               ]
            }
         ],
         "module" : "Contrast/Bolus",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "name" : "Strain Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,1135)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Vertical Increment",
         "desc" : [
            "Incremental change in Vertical position of the table relative to first frame of Multi-frame image given in mm.",
            "Required if Table Motion is DYNAMIC."
         ],
         "req" : "2C",
         "module" : "X-Ray Table",
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence"
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "module" : "Clinical Trial Subject"
      },
      "(0018,1606)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Shutter Upper Horizontal Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0028,6022)" : {
         "name" : "Frame Of Interest Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "module" : "Frame Pointers",
         "desc" : "Description of each one of the Frame(s) of Interest selected in (0028,6020). If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
         "req" : "3",
         "entity" : "Image"
      },
      "(0020,1002)" : {
         "desc" : "Number of images that resulted from this acquisition of data",
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Images in Acquisition",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,1710)" : {
         "name" : "Center of Circular Collimator",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Location of the center of the circular collimator with respect to pixels in the image given as row and column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "X-Ray Collimator",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,115e)" : {
         "name" : "Image and Fluoroscopy Area Dose Product",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image plus any non-digitally recorded fluoroscopy that may have been performed to prepare for the acquisition of this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d97d6892-c4b3-4ef8-920c-cb138c6428c9"
                     },
                     "content" : [
                        "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Calculated Frame List",
         "module" : "Frame Extraction",
         "req" : "1C",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "entity" : "Image"
      },
      "(0008,1250)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 }
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ]
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0022,0028)" : {
         "name" : "Stereo Pairs Present",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.6.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "for further explanation."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Multi-frame"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "req" : "1",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0010,2298)" : {
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person Role"
      },
      "(0018,700e)" : {
         "req" : "3",
         "module" : "DX Detector",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Time of Last Detector Calibration"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Denominator Value"
      },
      "(60xx,0040)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "name" : "Overlay Type",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Indicates whether this overlay represents a region of interest or other graphics.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "G",
                     "Graphics"
                  ],
                  [
                     "R",
                     "ROI"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Overlay Plane"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0028,000a)" : {
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "Frame Dimension Pointer",
         "req" : "3",
         "module" : "X-Ray Image",
         "desc" : [
            [
               "Contains the Data Element Tags of one or more attributes that vary or increment for the frames of a multi-frame image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.1.1.12"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Shall not be present if it would contain only one value and that value would be Frame Time (0018,1063) or Frame Time Vector (0018,1065)."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1164)" : {
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "req" : "1",
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,0012)" : {
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "req" : "3",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Agent Sequence"
      },
      "(0018,7024)" : {
         "module" : "DX Detector",
         "desc" : [
            "Shape of the active area.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "RECTANGLE",
                     null
                  ],
                  [
                     "ROUND",
                     null
                  ],
                  [
                     "HEXAGONAL",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2036c76a-84bc-4d95-b280-e8192289ded7"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Active Shape",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0040,0518)" : {
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Type Code Sequence"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen Preparation Sequence",
         "entity" : "Image",
         "req" : "2",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "req" : "2",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0028,6100)[<0>](0028,6101)" : {
         "name" : "Mask Operation",
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "req" : "1",
         "desc" : [
            "Defined Term identifying the type of mask operation to be performed. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Mask",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Study",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
                  },
                  "el" : "olink"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SAFE",
                     "no data elements within the block contain identifying information"
                  ],
                  [
                     "UNSAFE",
                     "all data elements within the block may contain identifying information"
                  ],
                  [
                     "MIXED",
                     "some data elements within the block may contain identifying information"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "req" : "3",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 }
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 }
                              },
                              "\n                  "
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Diameter Units",
         "entity" : "Image",
         "module" : "Device",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "FR",
                     "French"
                  ],
                  [
                     "GA",
                     "Gauge"
                  ],
                  [
                     "IN",
                     "Inch"
                  ],
                  [
                     "MM",
                     "Millimeter"
                  ]
               ]
            }
         ],
         "req" : "2C"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value Slope",
         "entity" : "Image",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "req" : "1C",
         "module" : "General Image"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "0000H",
                     "unsigned integer."
                  ],
                  [
                     "0001H",
                     "2's complement"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ]
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 }
                              },
                              "\n                    "
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ]
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "content" : [
                        "For example:"
                     ]
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "el" : "para",
                     "content" : [
                        "UTC = 5.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     }
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "content" : [
                        "Offset = -0200"
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1020)" : {
         "req" : "3",
         "desc" : [
            "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Software Versions",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence"
      },
      "(0018,7005)" : {
         "module" : "DX Detector",
         "desc" : [
            "The physical configuration of the detector.",
            {
               "list" : [
                  [
                     "AREA",
                     "single or tiled detector"
                  ],
                  [
                     "SLOT",
                     "scanned slot, slit or spot"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Configuration",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "list" : [
                  [
                     "NS",
                     "Not Specified; implies that this SOP Instance has no special storage status, and hence no special actions need be taken"
                  ],
                  [
                     "OR",
                     "Original; implies that this is the primary SOP instance for the purpose of storage, but that it has not yet been authorized for diagnostic use"
                  ],
                  [
                     "AO",
                     "Authorized Original; implies that this is the primary SOP instance for the purpose of storage, which has been authorized for diagnostic use"
                  ],
                  [
                     "AC",
                     "Authorized Copy; implies that this is a copy of an Authorized Original SOP Instance; any copies of an Authorized Original should be given the status of Authorized Copy"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(7fe0,0010)" : {
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "1C",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "entity" : "Image"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Image",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "req" : "2",
         "name" : "Source of Previous Values",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(60xx,0051)" : {
         "mod_tables" : [
            "table_C.9-3"
         ],
         "usage" : "C - Required if Overlay Data contains multiple frames",
         "name" : "Image Frame Origin",
         "desc" : "Frame number of Multi-frame Image to which this overlay applies; frames are numbered from 1.",
         "module" : "Multi-frame Overlay",
         "req" : "3",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ]
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certified Timestamp"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "General Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "Number of columns in the image",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "High Bit",
         "module" : "General Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series"
      },
      "(0028,2000)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "ICC Profile"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "name" : "Primary Anatomic Structure Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,9096)" : {
         "req" : "3",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Real World Value Mapping Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "Image"
      },
      "(0028,1201)" : {
         "entity" : "Image",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "Image Pixel",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "entity" : "Patient",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,0122)" : {
         "entity" : "Image",
         "desc" : [
            "The name of the Mapping Resource.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.4"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Mapping Resource Name"
      },
      "(0018,9004)" : {
         "entity" : "Image",
         "desc" : [
            "Content Qualification Indicator",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PRODUCT",
                     null
                  ],
                  [
                     "RESEARCH",
                     null
                  ],
                  [
                     "SERVICE",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification"
      },
      "(0028,0008)" : {
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Number of Frames",
         "entity" : "Image",
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Multi-frame",
         "req" : "1"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,5100)" : {
         "req" : "2C",
         "module" : "General Series",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Patient Position"
      },
      "(0018,1612)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Radius of Circular Shutter"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0028,3000)[<0>](0028,3002)" : {
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "name" : "LUT Descriptor",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "Modality LUT"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Specimen",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1110)" : {
         "name" : "Distance Source to Detector",
         "mod_tables" : [
            "table_C.8-31"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Distance in mm from source to detector center.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6df3514f-6a57-496f-897c-c55b128aa3e2"
                     },
                     "el" : "para",
                     "content" : [
                        "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "XRF Positioner",
         "req" : "3"
      },
      "(0018,7022)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Element Spacing",
         "desc" : [
            [
               "Physical distance between the center of each detector element, specified by a numeric pair - row spacing value(delimiter) column spacing value in mm. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the value order."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as the Imager Pixel Spacing (0018,1164), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c26ba93-41a1-420b-8b9f-77c9ccf7b22d"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "DX Detector",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "DATETIME",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,0060)" : {
         "name" : "Modality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Type of equipment that originally acquired the data used to create the images in this Series. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.1.1.1"
               },
               "el" : "xref"
            },
            " for Defined Terms."
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NO",
                     null
                  ],
                  [
                     "YES",
                     null
                  ],
                  [
                     "WITHDRAWN",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Clinical Trial Study",
         "req" : "1",
         "entity" : "Study"
      },
      "(0028,1051)" : {
         "entity" : "Image",
         "module" : "VOI LUT",
         "desc" : [
            [
               "Window Width for display. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Window Center (0028,1050) is sent."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "name" : "Window Width"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Time",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
                              },
                              "\n                  "
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0018,1242)" : {
         "desc" : "Elapsed time of data acquisition in msec per each frame.",
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Actual Frame Duration"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0028,0a02)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The type of correction for the effect of geometric magnification or calibration against an object of known size, if any. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "X-Ray Acquisition",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ],
         "usage" : "M",
         "name" : "Pixel Spacing Calibration Type"
      },
      "(60xx,3000)" : {
         "name" : "Overlay Data",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Overlay pixel data.",
            "The order of pixels sent for each overlay is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on.",
            "Overlay data shall be contained in this Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Overlay Plane",
         "req" : "1"
      },
      "(0008,0012)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date"
      },
      "(0018,0036)" : {
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Intervention",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Sequence"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Image Comments",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "2",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "module" : "Contrast/Bolus",
         "req" : "3",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Additional Drug Sequence",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "name" : "Real World Value Intercept",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0018,106a)" : {
         "module" : "Synchronization",
         "req" : "1",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "list" : [
                  [
                     "SOURCE",
                     "this equipment provides synchronization channel or trigger to other equipment"
                  ],
                  [
                     "EXTERNAL",
                     "this equipment receives synchronization channel or trigger from other equipment"
                  ],
                  [
                     "PASSTHRU",
                     "this equipment receives synchronization channel or trigger and forwards it"
                  ],
                  [
                     "NO TRIGGER",
                     "data acquisition not synchronized by common channel or trigger"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Frame of Reference",
         "name" : "Synchronization Trigger",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0040,9096)[<0>](0040,9213)" : {
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     },
                     "el" : "para",
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Double Float Real World Value Last Value Mapped"
      },
      "(60xx,0022)" : {
         "module" : "Overlay Plane",
         "desc" : "User-defined comments about the overlay.",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "name" : "Overlay Description"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Signature",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " and encrypted using the algorithm, parameters, and private key associated with the Certificate of the Signer (0400,0115). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               }
            },
            "."
         ],
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio"
      },
      "(0018,1702)" : {
         "name" : "Collimator Left Vertical Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "module" : "X-Ray Collimator",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the left edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0028,0a04)" : {
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "req" : "1C",
         "desc" : [
            "A free text description of the type of correction or calibration performed.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_cb0a4553-0609-49d4-aa1d-d7729e6e761b"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "In the case of correction, the text might include description of the assumptions made about the body part and geometry and depth within the patient."
                                 ]
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "in the case of calibration, the text might include a description of the fiducial and where it is located (e.g., \"XYZ device applied to the skin over the greater trochanter\")."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_3e55ce77-b039-4a90-a885-81bf899e5d08"
                                 },
                                 "el" : "para"
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_7b55048d-2d71-4d58-9f30-fe8339442849"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Though it is not required, the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.7.6.12",
                                          "xrefstyle" : "select: title"
                                       }
                                    },
                                    " may be used to describe the specific characteristics and size of the calibration device."
                                 ]
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if Pixel Spacing Calibration Type (0028,0A02) is present."
         ],
         "name" : "Pixel Spacing Calibration Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ]
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,009c)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician's Name",
         "entity" : "Study",
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "module" : "General Study"
      },
      "(0018,1114)" : {
         "desc" : "Ratio of SID (Source Image Receptor Distance) over SOD (Source Object Distance).",
         "module" : "XRF Positioner",
         "req" : "3",
         "entity" : "Image",
         "name" : "Estimated Radiographic Magnification Factor",
         "mod_tables" : [
            "table_C.8-31"
         ],
         "usage" : "U"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study"
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time"
      },
      "(0028,0103)" : [
         {
            "name" : "Pixel Representation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0000H",
                        "unsigned integer."
                     ],
                     [
                        "0001H",
                        "2's complement"
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "req" : "1",
            "module" : "Image Pixel",
            "entity" : "Image"
         },
         {
            "req" : "1",
            "desc" : [
               "Data representation of the pixel samples.",
               "Shall have the value:",
               "0000H = Unsigned Integer."
            ],
            "module" : "X-Ray Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "Pixel Representation"
         }
      ],
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            [
               "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  }
               },
               "."
            ],
            {
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC ID Number"
      },
      "(0018,7010)" : {
         "req" : "3",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "module" : "DX Detector",
         "entity" : "Image",
         "name" : "Exposures on Detector Since Last Calibration",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "req" : "1",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     null
                  ],
                  [
                     "N",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Acquisition Time Synchronized"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1040)" : {
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Image",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(0028,6040)" : {
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "R Wave Pointer",
         "module" : "X-Ray Image",
         "req" : "3",
         "desc" : "Marks the location(s) of the R Wave in the cardiac cycles by referencing frame numbers; frame numbers begin with 1.",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Description",
         "entity" : "Image",
         "module" : "Device",
         "desc" : "Further description in free form text describing the device.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common"
      },
      "(0018,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Image"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "module" : "General Image",
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Description",
         "entity" : "Image",
         "desc" : "Container component text description.",
         "req" : "3",
         "module" : "Specimen"
      },
      "(60xx,1301)" : {
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : [
            "Number of pixels in ROI area.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "name" : "ROI Area",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Concept Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1140)[<0>](0040,a170)" : [
         {
            "module" : "General Image",
            "req" : "3",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this Sequence."
            ],
            "entity" : "Image",
            "name" : "Purpose of Reference Code Sequence",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this Sequence."
            ],
            "req" : "3",
            "module" : "X-Ray Image",
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ]
         }
      ],
      "(0010,1100)[<0>](0020,000e)" : {
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "module" : "Intervention",
         "req" : "3",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Administration Route Code Sequence",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
         "module" : "Patient Study",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "list" : [
                  [
                     "DNS",
                     "An Internet dotted name. Either in ASCII or as integers"
                  ],
                  [
                     "EUI64",
                     "An IEEE Extended Unique Identifier"
                  ],
                  [
                     "ISO",
                     "An International Standards Organization Object Identifier"
                  ],
                  [
                     "URI",
                     "Uniform Resource Identifier"
                  ],
                  [
                     "UUID",
                     "The DCE Universal Unique Identifier"
                  ],
                  [
                     "X400",
                     "An X.400 MHS identifier"
                  ],
                  [
                     "X500",
                     "An X.500 directory name"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0018,1162)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Diameter of X-Ray intensifier in mm",
         "module" : "X-Ray Acquisition",
         "name" : "Intensifier Size",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ]
      },
      "(0008,0021)" : {
         "desc" : "Date the Series started.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date"
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "req" : "2",
         "module" : "Clinical Trial Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Person Name",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      " (0010,0027) " : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "req" : "\n                  3 ",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,2002)" : {
         "name" : "Frame Label Vector",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "module" : "X-Ray Image",
         "desc" : "A multi-valued attribute that contains a descriptive label for each of the image frames. The number of values shall equal the number of frames.",
         "req" : "3",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0028,1101)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Time",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Time the Series started.",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "module" : "Specimen",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Numeric Value"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Detailed Description"
      },
      "(0018,1040)" : {
         "name" : "Contrast/Bolus Route",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "entity" : "Image",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "desc" : "Administration route of contrast agent"
      },
      "(0018,7020)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "DX Detector",
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as Detector Element Spacing (0018,7022) due to the presence of spacing material between detector elements."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b8e80148-8f52-4061-a6fd-2c55bb61e623"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Element Physical Size"
      },
      "(0008,0090)" : {
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name"
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0028,6010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "name" : "Representative Frame Number",
         "desc" : "The frame number selected for use as a pictorial representation (e.g., icon) of the Multi-frame Image",
         "req" : "3",
         "module" : "Frame Pointers",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Container Identifier Sequence"
      },
      "(0028,6100)[<0>](0028,6190)" : {
         "name" : "Mask Operation Explanation",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "desc" : "Free form explanation of this particular mask operation.",
         "module" : "Mask",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,2143)" : {
         "entity" : "Image",
         "module" : "Cine",
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed.",
         "req" : "3",
         "name" : "Stop Trim",
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0008,2144)" : {
         "name" : "Recommended Display Frame Rate",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "entity" : "Image",
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "module" : "Cine",
         "req" : "3"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
            [
               "Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.4.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image"
      },
      "(0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "module" : "Image Pixel",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0028,2114)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Lossy Image Compression Method",
         "module" : "General Image",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.1"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1066)" : {
         "module" : "Cine",
         "req" : "3",
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine Data",
         "name" : "Frame Delay"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "RIPEMD160",
                     null
                  ],
                  [
                     "MD5",
                     null
                  ],
                  [
                     "SHA1",
                     null
                  ],
                  [
                     "SHA256",
                     null
                  ],
                  [
                     "SHA384",
                     null
                  ],
                  [
                     "SHA512",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0050,0004)" : {
         "name" : "Calibration Image",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Indicates whether a reference object (phantom) of known size is present in the image and was used for calibration.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "Device is identified using the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ". See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  }
               },
               "."
            ]
         ],
         "module" : "X-Ray Image",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "UNMODIFIED",
                     null
                  ],
                  [
                     "MODIFIED",
                     null
                  ],
                  [
                     "REMOVED",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Date of Last Calibration"
      },
      "(0008,0106)" : {
         "entity" : "Image",
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Context Group Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1190)" : {
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Focal Spot(s)"
      },
      "(0008,1140)" : [
         {
            "name" : "Referenced Image Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "module" : "General Image",
            "desc" : [
               "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
               "One or more Items are permitted in this Sequence."
            ],
            "entity" : "Image"
         },
         {
            "name" : "Referenced Image Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "entity" : "Image",
            "req" : "1C",
            "module" : "X-Ray Image",
            "desc" : [
               "Other images significantly related to this image. Shall be present if Image Type (0008,0008) Value 3 is BIPLANE A or BIPLANE B. May be present otherwise.",
               "One or more Items shall be included in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.13"
                     }
                  },
                  "."
               ]
            ]
         }
      ],
      "(0010,1100)[<0>](0040,e023)" : {
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "module" : "Contrast/Bolus",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast/Bolus Ingredient Concentration"
      },
      "(0028,3000)[<0>](0028,3003)" : {
         "name" : "LUT Explanation",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "req" : "3",
         "module" : "Modality LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Image"
      },
      "(0040,1012)" : {
         "req" : "3",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "module" : "Patient Study",
         "name" : "Patient's Weight",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,1608)" : {
         "name" : "Shutter Lower Horizontal Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C",
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "name" : "Time",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0018,1047)" : {
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast Flow Duration",
         "entity" : "Image",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "req" : "3",
         "module" : "Contrast/Bolus"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "req" : "1",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "entity" : "Image",
         "module" : "General Image",
         "req" : "3",
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Quantity Definition Sequence"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "entity" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,1161)" : {
         "req" : "3",
         "module" : "X-Ray Acquisition",
         "desc" : "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
         "entity" : "Image",
         "name" : "Type of Filters",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "req" : "3",
         "desc" : "Width in mm of container component.",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Width",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,1712)" : {
         "entity" : "Image",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Radius of the circular collimator with respect to pixels in the image given as a number of pixels along the row direction. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ],
         "req" : "1C",
         "module" : "X-Ray Collimator",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "name" : "Radius of Circular Collimator"
      },
      "(0018,0014)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Contrast/Bolus",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Administration Route Sequence"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0018,1149)" : {
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "desc" : "Dimensions of the Image Intensifier Field of View in mm. If Rectangle, row dimension followed by column; if Round, diameter.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Field of View Dimension(s)"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "name" : "Real World Value LUT Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0018,1412)" : {
         "entity" : "Image",
         "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
         "req" : "3",
         "module" : "DX Detector",
         "name" : "Target Exposure Index",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ]
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value First Value Mapped (0040,9216) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                     }
                  },
                  "\n                      "
               ]
            }
         ],
         "module" : "General Image",
         "req" : "1C",
         "name" : "Double Float Real World Value First Value Mapped",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(60xx,0102)" : {
         "name" : "Overlay Bit Position",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "req" : "1",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See ",
                        {
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "el" : "link",
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0028,3010)" : {
         "name" : "VOI LUT Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "req" : "1C",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0018,0022)" : {
         "name" : "Scan Options",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Parameters of scanning sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "X-Ray Image",
         "req" : "3"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID"
      },
      "(0018,1495)" : {
         "name" : "Number of Tomosynthesis Source Images",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "C - Required if Scan Option (0018,0022) is TOMO",
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Tomography Acquisition",
         "desc" : [
            "The number of source images used to construct this tomosynthetic image. Only meaningful if Tomo Class (0018,1491) is TOMOSYNTHESIS. These may be listed in Source Image Sequence (0008,2112) of the ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.7.6.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(60xx,0100)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     },
                     "el" : "para",
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See ",
                        {
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "el" : "link",
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           }
                        },
                        "."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Overlay Plane",
         "name" : "Overlay Bits Allocated",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U"
      },
      "(0010,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "req" : "3",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,2293)" : {
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0018,1720)" : {
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "module" : "X-Ray Collimator",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Vertices of the Polygonal Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "2C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Specimen",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Photometric Interpretation",
         "entity" : "Image",
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "req" : "1"
      },
      "(0028,0120)" : {
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Pixel Padding Range Limit (0028,0121) is present and either Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present. May be present otherwise only if Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 }
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ]
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0008,1060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study"
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.7-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,2202))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,2293))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,2296))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,0219))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,0215))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0012,0064))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-3 after (0032,1034))",
      "Can't handle table_8.8-1 (in table_C.7-3 after (0008,1032))",
      "Can't handle table_8.8-1 (in table_C.7-3 after (0040,1012))",
      "Can't handle table_8.8-1 (in table_C.7-4a after (0008,1084))",
      "Can't handle table_8.8-1 (in table_C.7-4a after (0010,1021))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-5a after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-5a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,002A))",
      "Can't handle table_8.8-1 (in table_C.7-13 after (003A,0208))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0036))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0040,0518))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0050,0012))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0040,059A))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-26 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
