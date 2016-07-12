var data = {
   "tags" : {
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0280)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : "Number of rows in the image.",
         "req" : "1"
      },
      "(0008,0022)" : {
         "name" : "Acquisition Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "req" : "3",
         "desc" : "The date the acquisition of data that resulted in this image started"
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      "(0008,0117)" : {
         "usage" : "M",
         "name" : "Context UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
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
         ]
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0000H",
                     "unsigned integer."
                  ],
                  [
                     "0001H",
                     "2's complement"
                  ]
               ]
            }
         ]
      },
      "(0040,0250)" : {
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
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
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "req" : "1C",
         "name" : "Patient Orientation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0028,0107)" : {
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.1"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Samples per Pixel",
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M"
      },
      "(0028,0302)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Recognizable Visual Features",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               "If this Attribute is absent, then the image may or may not contain recognizable visual features."
            ]
         },
         {
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "usage" : "M",
            "name" : "Recognizable Visual Features",
            "desc" : [
               "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
               "If this Attribute is absent, then the image may or may not contain recognizable visual features."
            ],
            "req" : "3"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Data",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0028,0003)" : {
         "desc" : [
            "The number of samples (planes) containing information.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "2",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if different from Samples per Pixel (0028,0002).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.17.2.1.2"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "req" : "1C",
         "name" : "Samples per Pixel Used",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.2-1"
         ],
         "module" : "Ophthalmic Photography Image",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Start Time",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Time of start of administration.",
         "req" : "3"
      },
      "(0020,0200)" : {
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "usage" : "M",
         "name" : "Synchronization Frame of Reference UID",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         "req" : "1"
      },
      "(0012,0051)" : {
         "req" : "3",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
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
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
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
         ]
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "req" : "1",
         "desc" : "Primary identifier for an individual subject.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "name" : "Contrast Flow Duration",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0008,0106)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Version",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0028,0300)" : {
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Quality Control Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: title"
                  }
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
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization Comment"
      },
      "(0028,0100)" : {
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Image Pixel",
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
         ]
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "name" : "Spatial Locations Preserved",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "req" : "3",
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
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
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,0040)" : {
         "desc" : [
            "Sex of the named patient.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "desc" : "Label that is used to identify the transformation of this Item.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "LUT Label",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,0015)" : {
         "req" : "3",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16"
                  }
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Body Part Examined",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,4000)" : {
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "usage" : "M"
      },
      "(0022,0015)" : {
         "desc" : [
            "Describes the type of acquisition device",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "name" : "Acquisition Device Type Code Sequence",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0028,0301)" : [
         {
            "entity" : "Image",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Burned In Annotation",
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
               {
                  "type" : "variablelist",
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
                  ]
               },
               "If this Attribute is absent, then the image may or may not contain burned in annotation."
            ]
         },
         {
            "req" : "1",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
               {
                  "type" : "variablelist",
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
                  ]
               }
            ],
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "usage" : "M",
            "name" : "Burned In Annotation",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ]
         }
      ],
      "(0020,0052)" : {
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "name" : "Frame of Reference UID",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0028,1101)" : {
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel",
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0022,1525)" : {
         "mod_tables" : [
            "table_C.8.17.13-1"
         ],
         "name" : "Wide Field Ophthalmic Photography Quality Rating Sequence",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Type of metric and metric value used to evaluate the quality of the projection or mapping used for the wide field ophthalmic photography image for this SOP Instance.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,2142)" : {
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "name" : "Start Trim",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,1102)" : {
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C"
      },
      "(0018,1802)" : {
         "name" : "Time Distribution Protocol",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "req" : "3",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.3"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Distribution Type",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
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
         "module" : "Patient",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C"
      },
      "(0008,0201)" : {
         "req" : "3",
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
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 }
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 }
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "For example:"
                     ],
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "content" : [
                        "UTC = 5.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Offset = -0200"
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Timezone Offset From UTC"
      },
      "(0028,0034)" : {
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel",
         "req" : "1C",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
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
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Type of Instances",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Type of object instances referenced.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         "req" : "1"
      },
      "(0008,2228)" : [
         {
            "req" : "3",
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "entity" : "Image",
            "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
            "usage" : "M",
            "name" : "Primary Anatomic Structure Sequence",
            "mod_tables" : [
               "table_C.8.17.11-1",
               "table_10-5",
               "table_10-8"
            ]
         },
         {
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "req" : "3",
            "usage" : "M",
            "name" : "Primary Anatomic Structure Sequence",
            "mod_tables" : [
               "table_C.8.17.5-1",
               "table_10-5",
               "table_10-8"
            ],
            "module" : "Ocular Region Imaged",
            "entity" : "Image"
         }
      ],
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1062)" : {
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "req" : "1",
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "name" : "Channel Identification Code",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "module" : "Cine",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U"
      },
      "(0022,1517)" : {
         "req" : "3",
         "desc" : "The field of view used to capture the ophthalmic image, in degrees. The field of view is the maximum image size displayed on the image plane, expressed as the angle subtended at the exit pupil of the eye by the maximum dimension 2r (where r equals the radius).",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "name" : "Ophthalmic FOV",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.11-1"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0028,0120)" : {
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Padding Range Limit (0028,0121) is present and either Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present. May be present otherwise only if Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "el" : "para"
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
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "el" : "para"
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value"
      },
      "(0012,0042)" : {
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0022,1525)[<0>](0066,002f)" : {
         "req" : "1",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Algorithm Family Code Sequence",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ],
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image"
      },
      "(0008,001a)" : {
         "req" : "3",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Related General SOP Class UID"
      },
      "(0018,1061)" : {
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "M",
         "name" : "Trigger Source or Type",
         "module" : "Synchronization",
         "entity" : "Frame of Reference"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,0034)" : {
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1C"
      },
      "(0010,0216)" : {
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0020,1040)" : {
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Position Reference Indicator",
         "usage" : "M",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "req" : "3"
      },
      "(0008,009c)" : {
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician's Name",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         ],
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,2160)" : {
         "req" : "3",
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(0010,1020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0020,0062)" : {
         "mod_tables" : [
            "table_C.8.17.5-1"
         ],
         "usage" : "M",
         "name" : "Image Laterality",
         "module" : "Ocular Region Imaged",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Laterality of object imaged (as described in Anatomic Region Sequence (0008,2218)) examined.",
            {
               "list" : [
                  [
                     "R",
                     "right eye"
                  ],
                  [
                     "L",
                     "left eye"
                  ],
                  [
                     "B",
                     "both left and right eye"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Laterality (0020,0060) is a Series level Attribute and must be the same for all Images in the Series. Since most Ophthalmic Photographic Image studies contain images of both eyes, the series level attribute will rarely be present."
                     ],
                     "attrs" : {
                        "xml:id" : "para_837225a0-5580-420e-8930-120a51d8485c"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1110)" : {
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
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0008,2112)[<0>](0062,000b)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1",
               "table_10-3"
            ],
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0018,5100)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Patient Position",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2C",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0022,0005)" : {
         "name" : "Patient Eye Movement Commanded",
         "mod_tables" : [
            "table_C.8.17.4-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "desc" : {
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
         "req" : "2"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "req" : "1",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1"
                                       }
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Series Instance UID"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context",
         "name" : "Concept Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Accession Number",
         "usage" : "M",
         "req" : "3",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0028,1103)" : {
         "req" : "1C",
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
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,1090)" : [
         {
            "req" : "3",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Manufacturer's Model Name",
            "usage" : "M"
         },
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Manufacturer's Model Name",
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0010,0033)" : {
         "name" : "Patient's Birth Date in Alternative Calendar",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "desc" : [
            "Encrypted data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.4.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "req" : "2",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "name" : "Contrast/Bolus Ingredient Concentration"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      "(0010,0032)" : {
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0038,0062)" : {
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Strain Source",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "name" : "Contrast/Bolus Ingredient Opaque",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.4b.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "req" : "1C",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "req" : "1",
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  }
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n",
                  {
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URI",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,2144)" : {
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Recommended Display Frame Rate"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "req" : "1C"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Bits Allocated",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "req" : "1C",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Real World Value Slope",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0028,0101)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Bits Stored",
         "usage" : "M",
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
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Bits Stored",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0012,0021)" : {
         "req" : "2",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1"
      },
      "(0012,0020)" : {
         "req" : "1",
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0022,0058)[<0>](0022,0042)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Mydriatic Agent Concentration Units Sequence",
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "req" : "1C",
         "desc" : [
            "Units of measure for the Mydriatic Agent Concentration.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Mydriatic Agent Concentration (0022,004E) is present."
         ]
      },
      "(0040,0254)" : {
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0018,1065)" : {
         "req" : "1C",
         "desc" : [
            [
               "An array that contains the real time increments (in msec) between frames for a Multi-frame image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time Vector."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_00128047-7815-4707-8295-c0dff1a814e3"
                     },
                     "content" : [
                        "Frame Time Vector arrays may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "Cine",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Frame Time Vector",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0012,0071)" : {
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
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
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,0013)" : {
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0022,000e)" : {
         "desc" : [
            "The degree of the dilation in mm.",
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "name" : "Degree of Dilation",
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "req" : "3",
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
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "General Study",
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
         "req" : "1C"
      },
      "(0022,0006)" : {
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1"
         ],
         "name" : "Patient Eye Movement Command Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded value for patient movement or orientation, which is the intent, and not necessarily the result, based on what the patient is capable of.",
            "Required if the value of Patient Eye Movement Commanded (0022,0005) is YES.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,0008)" : {
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "name" : "Number of Frames",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Multi-frame"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0022,1525)[<0>](0066,0030)" : {
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "name" : "Algorithm Name Code Sequence",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ],
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,1140)" : {
         "req" : "3",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3"
      },
      "(0022,1513)[<0>](0066,002f)" : {
         "req" : "1",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ],
         "usage" : "M",
         "name" : "Algorithm Family Code Sequence"
      },
      "(0022,000d)" : {
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "name" : "Pupil Dilated",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "desc" : [
            "Whether or not the patient's pupils were pharmacologically dilated for this acquisition.",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this tag is empty, no information is available."
         ],
         "req" : "2"
      },
      "(0018,1242)" : {
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Actual Frame Duration",
         "req" : "3",
         "desc" : "Elapsed time of data acquisition in msec per each frame."
      },
      "(0022,1525)[<0>](0066,0036)" : {
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "name" : "Algorithm Name",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ],
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "el" : "note",
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0020,0012)" : {
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Acquisition Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0022,0017)" : {
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M",
         "name" : "Light Path Filter Type Stack Code Sequence",
         "req" : "2",
         "desc" : [
            "Filters used in the light source path",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0022,001b)[<0>](0022,0007)" : {
         "req" : "1",
         "desc" : "Sphere value in diopters",
         "name" : "Spherical Lens Power",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters"
      },
      "(0028,2112)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression Ratio",
            "entity" : "Image",
            "module" : "General Image",
            "req" : "3",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ]
         },
         {
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ],
               "Required if Lossy Image Compression (0028,2110) is \"01\"."
            ],
            "req" : "1C",
            "name" : "Lossy Image Compression Ratio",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image"
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0012,0030)" : {
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               }
            },
            "."
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "1C"
      },
      "(0022,001b)[<0>](0022,0008)" : {
         "req" : "1",
         "desc" : "Cylinder value in diopters",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Cylinder Lens Power",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0020,0020)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Patient Orientation",
         "usage" : "M",
         "req" : "2C",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  }
               },
               " for further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ],
                     "attrs" : {
                        "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.1"
               }
            },
            " for further explanation. See also ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Data Element Characteristics Sequence",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "req" : "3",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Image Comments",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0022,1525)[<0>](0040,a043)" : {
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-26"
         ],
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Name",
         "req" : "2",
         "desc" : "Patient's full name."
      },
      "(0008,0070)" : [
         {
            "usage" : "M",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "entity" : "Equipment",
            "module" : "General Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "2"
         },
         {
            "name" : "Manufacturer",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "1"
         }
      ],
      "(0100,0420)" : {
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3"
      },
      "(0022,1525)[<0>](0040,a30a)" : {
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-26"
         ],
         "name" : "Numeric Value",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "desc" : "Numeric value for this name-value Item.",
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0010,1002)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,0122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The name of the Mapping Resource.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0010,0218)" : {
         "req" : "3",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
         "usage" : "M"
      },
      "(0022,1525)[<0>](0024,0202)" : {
         "name" : "Algorithm Source",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ],
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc."
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Mapping Resource Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value First Value Mapped",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     },
                     "el" : "para"
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
         "req" : "1C"
      },
      "(0022,000a)" : {
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Emmetropic Magnification",
         "usage" : "M",
         "req" : "2",
         "desc" : "Emmetropic magnification value (dimensionless). Zero length means the emmetropic magnification was not measured."
      },
      "(0010,2180)" : {
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
         "usage" : "U",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a8c76dec-9c64-427d-9278-7ac6f369d5a7"
                     },
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "usage" : "M"
      },
      "(0018,1050)" : {
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
                  },
                  "\n              "
               ]
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
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C"
      },
      "(0010,2201)" : {
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1111)" : {
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "usage" : "M"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0010,1100)" : {
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Photo Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0064)" : {
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method Code Sequence"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ]
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0010,0213)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Nomenclature",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     },
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0028,0109)" : {
         "req" : "3",
         "desc" : "The maximum value of all images in this Series.",
         "usage" : "M",
         "name" : "Largest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Multi-frame Source SOP Instance UID",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "entity" : "Image",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "req" : "1"
      },
      "(0008,0015)" : {
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9213)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Double Float Real World Value Last Value Mapped",
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ]
            }
         ],
         "req" : "1C"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0022,1019)" : {
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "name" : "Ophthalmic Axial Length",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.11-1"
         ],
         "desc" : "The axial length measurement used for the stereographic projection, in mm.",
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1155)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.17.2-1",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1"
      },
      "(0028,0011)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "usage" : "M",
         "name" : "Subject Relative Position in Image",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "name" : "Color Space",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  }
               },
               "."
            ]
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0212)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0012)" : {
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C"
      },
      "(0022,001a)" : {
         "req" : "1C",
         "desc" : [
            "Describes the light color used for each channel to generate the image. Required if this differs from the natural interpretation.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Interpretation and representation of RGB images rely on the assumption that the red channel really contains the red wavelength range of illumination light, the blue channel the blue wavelength range, etc. Some modalities use the RGB Photometric Interpretation as a container representing 3 channels of any illumination wavelength."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6f4b429e-49e5-48c8-8e96-eb606cc4af7d"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Shall have the same number of items as the Value of Samples per Pixel Used (0028,0003) if present, or otherwise the value of Samples per Pixel (0028,0002). The channels shall be described in the order in which the channels are encoded."
         ],
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "name" : "Channel Description Code Sequence"
      },
      "(0008,0008)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Image Type",
            "usage" : "M",
            "entity" : "Image",
            "module" : "General Image",
            "req" : "3",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         },
         {
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.17.2.1.4",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "req" : "1",
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "usage" : "M"
         }
      ],
      "(0008,1164)[<0>](0008,1163)" : {
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "name" : "Time Range",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "WADO Retrieval Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "req" : "1",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,2203)" : {
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,1001)" : {
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "req" : "1C",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value First Value Mapped (0040,9216) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                     },
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
         "name" : "Double Float Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0018,1803)" : {
         "req" : "3",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "M",
         "name" : "NTP Source Address"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0008,114a)" : {
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "req" : "1",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Repository Unique ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
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
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U",
         "name" : "Value Type",
         "req" : "3",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "PNAME",
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
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0118)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Stock Number",
         "usage" : "M",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1"
      },
      "(0028,0108)" : {
         "req" : "3",
         "desc" : "The minimum value of all images in this Series.",
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,2293)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.1"
                  }
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0022,1515)" : {
         "desc" : [
            "The method used to obtain the Ophthalmic Axial Length.",
            {
               "list" : [
                  [
                     "MEASURED",
                     "Measured axial length."
                  ],
                  [
                     "ESTIMATED",
                     "An estimated value based upon performing the examination (i.e. based upon surrogate markers of axial length)."
                  ],
                  [
                     "POPULATION",
                     "A length that represents a population norm (i.e. not based upon a measured axial length or surrogate markers of axial length)."
                  ]
               ],
               "title" : "Enumerated values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.11-1"
         ],
         "name" : "Ophthalmic Axial Length Method"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C"
      },
      "(003a,0300)" : {
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "entity" : "Image",
         "req" : "2C",
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.5.1.3",
                     "xrefstyle" : "select: label"
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
         ]
      },
      "(0008,009d)" : {
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Consulting Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para"
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0012,0082)" : {
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0022,1513)[<0>](0066,0032)" : {
         "name" : "Algorithm Parameters",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ],
         "usage" : "M",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Content Qualification",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Content Qualification Indicator",
            {
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
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "req" : "1C",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ],
               "el" : "note"
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
         "usage" : "M",
         "name" : "Real World Value Last Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0038,0064)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0022,0002)" : {
         "module" : "Ophthalmic Photographic Parameters",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M",
         "name" : "Light Path Filter Pass Band",
         "desc" : [
            "Pass band of light path filter in nm. This Attribute has two Values. The first is the shorter and the second the longer wavelength relative to the peak. The values are for the - 3dB nominal (1/2 of peak) pass through intensity",
            "One of the two Values may be zero length, in which case it is a cutoff filter."
         ],
         "req" : "3"
      },
      "(0028,2002)" : [
         {
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.15.1.2"
                     }
                  },
                  "."
               ]
            ],
            "req" : "3",
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Color Space",
            "usage" : "M"
         },
         {
            "module" : "ICC Profile",
            "entity" : "Image",
            "name" : "Color Space",
            "usage" : "C - Required if Photometric Interpretation (0028,0004) is not MONOCHROME2",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.15.1.2"
                     }
                  },
                  "."
               ]
            ],
            "req" : "3"
         }
      ],
      "(0008,1052)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3"
      },
      "(0040,0260)" : {
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0022,1525)[<0>](0022,1526)[<1>](0022,1527)" : {
         "mod_tables" : [
            "table_C.8.17.13-1"
         ],
         "name" : "Wide Field Ophthalmic Photography Threshold Quality Rating",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Quality rating threshold value for acceptable wide field ophthalmic photography projection or mapping.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The units of this Attribute is the same as defined in Measurement Units Code Sequence (0040,08EA) of the Wide Field Ophthalmic Photography Quality Rating Sequence (0022,1525). The threshold value is not the same as the attribute Numeric Value (0049,A30A) of the Wide Field Ophthalmic Photography Quality Rating Sequence (0022,1525). Therefore, it conveys the least stringent value that is acceptable, not the actual rating for this SOP Instance."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3a16a6bf-3940-44a9-a3b8-47c5cf6b22c7"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1164)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Frame Extraction Sequence",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
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
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
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
            }
         ]
      },
      "(0008,2112)" : [
         {
            "entity" : "Image",
            "module" : "General Image",
            "usage" : "M",
            "name" : "Source Image Sequence",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "desc" : [
               "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
               "One or more Items are permitted in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.4",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "3"
         },
         {
            "usage" : "M",
            "name" : "Source Image Sequence",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "desc" : [
               "A Sequence that identifies the Images that were used to derive this Image.",
               "Required if Image Type Value 1 is DERIVED.",
               "Zero or more Items shall be included in this Sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.4",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "req" : "2C"
         }
      ],
      "(0008,010f)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Context Identifier",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "The identifier of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,2218)" : [
         {
            "req" : "1",
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Anatomic Region Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.11-1",
               "table_10-5"
            ],
            "entity" : "Image",
            "module" : "Wide Field Ophthalmic Photography Stereographic Projection"
         },
         {
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Only a single Item shall be included in this Sequence."
            ],
            "req" : "1",
            "name" : "Anatomic Region Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.5-1",
               "table_10-5"
            ],
            "entity" : "Image",
            "module" : "Ocular Region Imaged"
         }
      ],
      "(003a,0300)[<0>](003a,0208)" : {
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Channel Source Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "module" : "Cine",
         "req" : "1",
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID",
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,106c)" : {
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Channel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3"
      },
      "(0010,0026)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,a390)" : {
         "req" : "1C",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Sequence",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description",
         "req" : "3",
         "desc" : "Description of the Series"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "req" : "1C",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,0303)" : {
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "title" : "Enumerated Values:",
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
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M"
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0008,0105)" : {
         "req" : "1",
         "desc" : [
            "The identifier of the Mapping Resource.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Mapping Resource",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0008,9215)" : {
         "req" : "3",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.3"
                  }
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Derivation Code Sequence",
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
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
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 }
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
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
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "el" : "para"
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
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0018,1801)" : {
         "req" : "3",
         "desc" : "ID of equipment or system providing time reference",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "name" : "Time Source",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(7fe0,0010)" : {
         "req" : "1C",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operators' Name",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0022,1525)[<0>](0066,0031)" : {
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ],
         "name" : "Algorithm Version",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Quality Rating"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "req" : "1",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0040,a170)" : [
         {
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "module" : "General Image",
            "req" : "3",
            "desc" : [
               "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
               "Only a single Item is permitted in this Sequence."
            ]
         },
         {
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "usage" : "M",
            "name" : "Purpose of Reference Code Sequence",
            "req" : "1",
            "desc" : [
               "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
               "Only a single Item shall be included in this Sequence."
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "req" : "1"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C"
      },
      "(0020,0013)" : [
         {
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "2",
            "module" : "General Image",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Instance Number"
         },
         {
            "req" : "1",
            "desc" : "A number that identifies this image.",
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "name" : "Instance Number"
         },
         {
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "entity" : "Image",
            "module" : "SOP Common",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number",
            "usage" : "M"
         }
      ],
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1"
      },
      "(0040,1012)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
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
         "req" : "3"
      },
      "(0018,0012)" : {
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Agent Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Creator Reference",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "DateTime",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0022,0028)" : {
         "req" : "3",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.6.1.3"
                  }
               },
               "for further explanation."
            ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "module" : "Multi-frame",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "M",
         "name" : "Stereo Pairs Present"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,0020)" : {
         "desc" : "Date the Study started.",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Date",
         "usage" : "M"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "usage" : "U",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0022,0058)" : {
         "desc" : [
            "Information about the agent administered.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "An empty sequence indicates that an agent was used for dilation, but the name was not entered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_38770545-2bdc-4057-b5b1-b04ccdc2a7c7"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "req" : "2C",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "name" : "Mydriatic Agent Sequence",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,2112)[<0>](0008,1150)" : [
         {
            "entity" : "Image",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.17.2-1",
               "table_10-3",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,2218)[<0>](0008,2220)" : [
         {
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "name" : "Anatomic Region Modifier Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.11-1",
               "table_10-5"
            ],
            "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
            "entity" : "Image"
         },
         {
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "usage" : "M",
            "name" : "Anatomic Region Modifier Sequence",
            "mod_tables" : [
               "table_C.8.17.5-1",
               "table_10-5"
            ],
            "entity" : "Image",
            "module" : "Ocular Region Imaged"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C"
      },
      "(0018,1800)" : {
         "req" : "1",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "usage" : "M",
         "name" : "Acquisition Time Synchronized",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "req" : "1",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0008,2143)" : {
         "req" : "3",
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed.",
         "entity" : "Image",
         "module" : "Cine",
         "name" : "Stop Trim",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames"
      },
      "(0010,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Alternative Calendar",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3"
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Laterality",
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0022,001b)[<0>](0022,0009)" : {
         "desc" : "Axis value in degrees",
         "req" : "1",
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Cylinder Axis"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(2050,0020)" : [
         {
            "name" : "Presentation LUT Shape",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "entity" : "Image",
            "desc" : [
               "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
               {
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
            ],
            "req" : "3"
         },
         {
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "IDENTITY",
                        "output is in P-Values."
                     ]
                  ]
               },
               "Required if Photometric Interpretation (0028,0004) is MONOCHROME2"
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "name" : "Presentation LUT Shape",
            "usage" : "M",
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image"
         }
      ],
      "(0008,0023)" : [
         {
            "desc" : [
               "The date the image pixel data creation started.",
               "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute was formerly known as Image Date."
                        ],
                        "attrs" : {
                           "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "2C",
            "module" : "General Image",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Content Date",
            "usage" : "M"
         },
         {
            "req" : "1",
            "desc" : "The date the image pixel data creation started.",
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "name" : "Content Date",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "name" : "Referenced Frame Numbers",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "req" : "1C"
      },
      "(0028,0103)" : [
         {
            "name" : "Pixel Representation",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1",
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
            ]
         },
         {
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "name" : "Pixel Representation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "req" : "1",
            "desc" : [
               "Data representation of the pixel samples.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ]
         }
      ],
      "(0022,0058)[<0>](0022,004e)" : {
         "name" : "Mydriatic Agent Concentration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "desc" : "The concentration of the agent.",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0028,0102)" : {
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "High Bit"
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "usage" : "U",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "req" : "1C"
      },
      "(0018,106a)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "M",
         "name" : "Synchronization Trigger",
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "1"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0008,0031)" : {
         "desc" : "Time the Series started.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Time"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "High Bit",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Position",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  }
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
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0022,0019)" : {
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "name" : "Lenses Code Sequence",
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Lenses that were used during the image acquisition",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0033)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Content Time",
            "desc" : [
               "The time the image pixel data creation started.",
               "Required if image is part of a series in which the images are temporally related. May be present otherwise."
            ],
            "req" : "2C"
         },
         {
            "desc" : "The time the image pixel data creation started.",
            "req" : "1",
            "name" : "Content Time",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image"
         }
      ],
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "req" : "1C",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,a001)" : {
         "desc" : [
            "Sequence of Items containing descriptive attributes of related equipment that has contributed to the acquisition, creation or modification of the composite instance.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
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
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0022,1513)[<0>](0024,0202)" : {
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "name" : "Algorithm Source",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3"
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0253)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0028,2114)" : [
         {
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Lossy Image Compression Method",
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "name" : "Lossy Image Compression Method",
            "req" : "1C",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ],
               "Required if Lossy Image Compression (0028,2110) is \"01\"."
            ]
         }
      ],
      "(0022,1513)[<0>](0066,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ],
         "name" : "Algorithm Version",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value LUT Data",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Manufacturer",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,2111)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Derivation Description",
         "usage" : "M",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.3"
               }
            },
            " for further explanation."
         ],
         "req" : "3"
      },
      "(0028,0004)" : [
         {
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         },
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.17.2.1.3",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  }
               ]
            ],
            "req" : "1",
            "entity" : "Image",
            "module" : "Ophthalmic Photography Image",
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ]
         }
      ],
      "(0088,0200)[<0>](0028,0107)" : {
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0020,0011)" : {
         "req" : "2",
         "desc" : "A number that identifies this Series.",
         "name" : "Series Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0088,0200)" : {
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Icon Image Sequence",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "usage" : "U"
      },
      "(0008,1084)" : {
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "req" : "2",
         "desc" : "Total volume administered in milliliters of diluted contrast agent."
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,2228)[<0>](0008,2230)" : [
         {
            "entity" : "Image",
            "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
            "name" : "Primary Anatomic Structure Modifier Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.11-1",
               "table_10-5",
               "table_10-8"
            ],
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.17.5-1",
               "table_10-5",
               "table_10-8"
            ],
            "name" : "Primary Anatomic Structure Modifier Sequence",
            "usage" : "M",
            "entity" : "Image",
            "module" : "Ocular Region Imaged",
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ]
         }
      ],
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,0040)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Cine Rate",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "entity" : "Image",
         "module" : "Cine",
         "desc" : "Number of frames per second.",
         "req" : "3"
      },
      "(0022,1529)" : {
         "req" : "1",
         "desc" : [
            "The vertical angle covered on the sphere by the center pixel of the projected image, as measured from the center of the sphere, in degrees. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.17.11.1.1"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "mod_tables" : [
            "table_C.8.17.11-1"
         ],
         "usage" : "M",
         "name" : "Y Coordinates Center Pixel View Angle"
      },
      "(0022,001d)" : {
         "req" : "3",
         "desc" : [
            "The position of this image on the retina (as defined by a specified nomenclature; the nomenclature is implicit in the code used).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Ocular Region Imaged",
         "entity" : "Image",
         "name" : "Relative Image Position Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.5-1"
         ]
      },
      "(0022,0004)" : {
         "desc" : [
            "Pass band of image path filter in nm. This Attribute has two Values. The first is the shorter and the second the longer wavelength relative to the peak. The values are for the - 3dB nominal (1/2 of peak) pass through intensity",
            "One of the two Values may be zero length, in which case it is a cutoff filter"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "name" : "Image Path Filter Pass Band",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0020,1002)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Images in Acquisition",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U",
         "name" : "Concept Name Code Sequence",
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Private Group Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0096)" : {
         "req" : "3",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0080)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1160)" : {
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
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "req" : "3"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "req" : "1C"
      },
      "(0012,0040)" : {
         "req" : "1C",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0008,1050)" : {
         "req" : "3",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0028,0030)" : {
         "entity" : "Image",
         "module" : "Ophthalmic Photography Image",
         "name" : "Pixel Spacing",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.2-1"
         ],
         "desc" : [
            [
               "Nominal physical distance at the focal plane (in the retina) between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation of the value order."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "These values are specified as nominal because the physical distance may vary across the field of the images and the lens correction is likely to be imperfect."
                     ],
                     "attrs" : {
                        "xml:id" : "para_83eb778d-101f-42ae-8491-e10d279d2e9a"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Shall not be sent when Two Dimensional to Three Dimensional Map Sequence (0022,1518) or X Coordinates Center Pixel View Angle (0022,1528) and Y Coordinates Center Pixel View Angle (0022,1529) are present. Otherwise, required when Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (R-1021A, SRT, \"Fundus Camera\"). May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "req" : "1"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,1067)" : {
         "req" : "3",
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Image Trigger Delay",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "entity" : "Image"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Type of Patient ID",
         "desc" : [
            "The type of identifier in this item.",
            {
               "type" : "variablelist",
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
               ]
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
      "(0010,2210)" : {
         "req" : "1C",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            [
               "Required if the patient is an animal and the anatomical frame of reference is not bipedal. May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)" : {
         "usage" : "M",
         "name" : "Real World Value Mapping Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
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
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                        ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,0555)" : {
         "req" : "2",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Sequence",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Planar Configuration",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "module" : "Frame Extraction",
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Calculated Frame List",
         "req" : "1C",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0022,1513)[<0>](0066,0036)" : {
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "usage" : "M",
         "name" : "Algorithm Name",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ]
      },
      "(0008,2112)[<0>](0008,1160)" : [
         {
            "desc" : [
               "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute may be multi-valued."
                        ],
                        "attrs" : {
                           "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                        }
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "name" : "Referenced Frame Number",
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.8.17.2-1",
               "table_10-3"
            ],
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "desc" : [
               "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "attrs" : {
                           "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                        },
                        "content" : [
                           "This Attribute may be multi-valued."
                        ],
                        "el" : "para"
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "req" : "1C"
         }
      ],
      "(0008,0090)" : {
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,2292)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0028,1102)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,2000)" : {
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
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Real World Value Intercept",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
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
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     },
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
            ]
         ],
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0022,001e)" : {
         "desc" : "The aperture angle of the camera, in degrees",
         "req" : "3",
         "module" : "Ophthalmic Photographic Parameters",
         "entity" : "Image",
         "name" : "Camera Angle of View",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Channel Mode",
         "entity" : "Image",
         "module" : "Cine"
      },
      "(0028,2110)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "usage" : "M",
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "req" : "3"
         },
         {
            "usage" : "M",
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
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
            "req" : "1"
         }
      ],
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "name" : "Photometric Interpretation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admission ID"
      },
      "(0022,0016)" : {
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "name" : "Illumination Type Code Sequence",
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Coded value for illumination",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0008,1200)" : {
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0022,1513)" : {
         "desc" : [
            "Software algorithm used for stereographic projection.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image",
         "name" : "Transformation Algorithm Sequence",
         "mod_tables" : [
            "table_C.8.17.11-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0100,0426)" : {
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3"
      },
      "(0008,0032)" : {
         "desc" : "The time the acquisition of data that resulted in this image started",
         "req" : "3",
         "usage" : "M",
         "name" : "Acquisition Time",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0028,1202)" : {
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "Image Pixel",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M"
      },
      "(0008,0021)" : {
         "usage" : "M",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Date the Series started.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,1202)" : {
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
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1"
      },
      "(0050,0004)" : {
         "req" : "3",
         "desc" : [
            "Indicates whether a reference object (phantom) of known size is present in the image and was used for calibration.",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "name" : "Calibration Image",
         "mod_tables" : [
            "table_C.8.17.2-1"
         ],
         "entity" : "Image",
         "module" : "Ophthalmic Photography Image"
      },
      "(0018,0072)" : {
         "req" : "3",
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Effective Duration"
      },
      "(0018,1000)" : [
         {
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "module" : "General Equipment",
            "entity" : "Equipment",
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                        },
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "3"
         },
         {
            "req" : "1",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Device Serial Number",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0088,0200)[<0>](0028,1101)" : {
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "req" : "1",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "name" : "Time",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1072)" : {
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0018,1201)" : {
         "desc" : [
            "Time when the image acquisition device calibration was last changed in any way. Multiple entries may be used. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0022,1528)" : {
         "req" : "1",
         "desc" : [
            "The horizontal angle covered on the sphere by the center pixel of the projected image, as measured from the center of the sphere, in degrees. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.17.11.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.8.17.11-1"
         ],
         "name" : "X Coordinates Center Pixel View Angle",
         "usage" : "M",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "entity" : "Image"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
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
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
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
         "req" : "3"
      },
      "(0012,0010)" : {
         "req" : "1",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0010,0030)" : {
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Birth Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0028,0106)" : {
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3"
      },
      "(0040,0556)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Description",
         "desc" : "Free-text description of the image-acquisition context.",
         "req" : "3"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
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
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,002a)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Acquisition DateTime",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
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
                        ],
                        "attrs" : {
                           "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                        }
                     },
                     "\n                  "
                  ]
               }
            ]
         },
         {
            "desc" : [
               "The date and time that the acquisition of data started.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time Synchronized (0018,1800)."
                        ],
                        "attrs" : {
                           "xml:id" : "para_c2fe9ff0-fd28-4290-9eb1-6f1a3f8b6d2f"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               "Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
            ],
            "req" : "1C",
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "usage" : "M",
            "name" : "Acquisition DateTime"
         }
      ],
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "req" : "3",
         "desc" : "Time of end of administration.",
         "name" : "Contrast/Bolus Stop Time",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0018,1063)" : {
         "name" : "Frame Time",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "entity" : "Image",
         "module" : "Cine",
         "desc" : [
            "Nominal time (in msec) per individual frame. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.5.1.1"
               },
               "el" : "xref"
            },
            " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time."
         ],
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
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
         "usage" : "M",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "req" : "1",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0022,0001)" : {
         "desc" : "Nominal pass-through wavelength of light path filter in nm",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M",
         "name" : "Light Path Filter Pass-Through Wavelength",
         "module" : "Ophthalmic Photographic Parameters",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0008,1052)[<0>](0040,1104)" : {
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
                                 "el" : "para",
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 }
                              },
                              "\n                  "
                           ]
                        },
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
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
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0022,001b)" : {
         "req" : "2",
         "desc" : [
            "The refractive state of the imaged eye at the time of acquisition.",
            "Zero or one Itemshall be included in this Sequence.",
            "Zero length means the refractive state was not measured."
         ],
         "entity" : "Image",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Refractive State Sequence",
         "usage" : "M"
      },
      " (0010,0027) " : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Group of Patients Identification Sequence",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "req" : "\n                  3 "
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "req" : "1",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "LUT Explanation"
      },
      "(0008,3010)" : {
         "req" : "3",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Irradiation Event UID"
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Strain Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp Type"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0009)" : {
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
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M"
      },
      "(0022,000b)" : {
         "req" : "2",
         "desc" : [
            "Value of intraocular pressure in mmHg.",
            "Zero length means the pressure was not measured"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "name" : "Intra Ocular Pressure",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0022,1525)[<0>](0066,0032)" : {
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "req" : "3",
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "name" : "Algorithm Parameters",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-19"
         ]
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "2",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Series",
         "module" : "General Series",
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
         ]
      },
      "(0022,0018)" : {
         "desc" : [
            "Describes stack of filters used in image path",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "name" : "Image Path Filter Type Stack Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ]
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Contrast Administration Profile Sequence",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image"
      },
      "(0400,0500)" : {
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
            [
               "Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.4.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Quantity Definition Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,1250)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Related Series Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ]
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
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
         ]
      },
      "(0028,1203)" : {
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "Image Pixel",
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0028,2000)" : [
         {
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "ICC Profile",
            "usage" : "M",
            "req" : "3",
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
                        "content" : [
                           "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                        ],
                        "attrs" : {
                           "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                        }
                     },
                     "\n                  "
                  ]
               }
            ]
         },
         {
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "req" : "1",
            "usage" : "C - Required if Photometric Interpretation (0028,0004) is not MONOCHROME2",
            "name" : "ICC Profile",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "entity" : "Image",
            "module" : "ICC Profile"
         }
      ],
      "(0010,0200)" : {
         "req" : "3",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C"
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus T1 Relaxivity",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "desc" : [
            "T1 Relaxivity of the MR Contrast/Bolus used specified in s",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            "*mmol",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            " specified at body temperature in human blood plasma."
         ],
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "req" : "1",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Character Set that expands or replaces the Basic Graphic Set.",
            "Required if an expanded or replacement character set is used.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,0002)" : [
         {
            "usage" : "M",
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "module" : "Image Pixel",
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
            "req" : "1"
         },
         {
            "desc" : [
               "Number of samples (planes) in this image.",
               {
                  "list" : [
                     [
                        "1",
                        null
                     ],
                     [
                        "3",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.17.2.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "usage" : "M",
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image"
         }
      ],
      "(0008,0016)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the SOP Class. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.1"
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
         ]
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "M",
         "name" : "Block Identifying Information Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ],
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0018,1020)" : [
         {
            "desc" : [
               "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
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
            "usage" : "M",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "entity" : "Equipment",
            "module" : "General Equipment"
         },
         {
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "req" : "1",
            "desc" : [
               "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.3"
                  }
               },
               "."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "usage" : "M",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "usage" : "M"
      },
      "(0008,0060)" : [
         {
            "entity" : "Series",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Modality",
            "usage" : "M",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "req" : "1"
         },
         {
            "entity" : "Series",
            "module" : "Ophthalmic Photography Series",
            "name" : "Modality",
            "mod_tables" : [
               "table_C.8.17.1-1"
            ],
            "usage" : "M",
            "desc" : [
               "Source equipment that produced the Ophthalmic Photography Series.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "OP",
                        null
                     ]
                  ]
               }
            ],
            "req" : "1"
         }
      ],
      "(0022,0003)" : {
         "desc" : "Nominal pass-through wavelength of image path filter in nm",
         "req" : "3",
         "module" : "Ophthalmic Photographic Parameters",
         "entity" : "Image",
         "name" : "Image Path Filter Pass-Through Wavelength",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M"
      },
      "(0028,0006)" : [
         {
            "name" : "Planar Configuration",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         },
         {
            "module" : "Ophthalmic Photography Image",
            "entity" : "Image",
            "usage" : "M",
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.8.17.2-1"
            ],
            "req" : "1C",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel.",
               "Required if Samples per Pixel (0028,0002) has a value greater than 1.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "0",
                        "color-by-pixel"
                     ]
                  ]
               }
            ]
         }
      ],
      "(0018,7004)" : {
         "req" : "2",
         "desc" : [
            "Type of detector used for creating this image.",
            {
               "list" : [
                  [
                     "CCD",
                     "Charge Coupled Devices"
                  ],
                  [
                     "CMOS",
                     "Complementary Metal Oxide Semiconductor"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "module" : "Ophthalmic Photographic Parameters",
         "mod_tables" : [
            "table_C.8.17.3-1"
         ],
         "usage" : "M",
         "name" : "Detector Type"
      },
      "(0022,1525)[<0>](0022,1526)" : {
         "desc" : [
            "Quality threshold value and software algorithm used to provide the wide field ophthalmic photography projection or mapping quality rating for this SOP Instance.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "name" : "Wide Field Ophthalmic Photography Quality Threshold Sequence",
         "mod_tables" : [
            "table_C.8.17.13-1"
         ],
         "usage" : "C - Required if a quality rating value exists for this SOP Instance"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "req" : "2"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0022,1513)[<0>](0066,0030)" : {
         "entity" : "Image",
         "module" : "Wide Field Ophthalmic Photography Stereographic Projection",
         "name" : "Algorithm Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.11-1",
            "table_10-19"
         ],
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0028,0009)" : {
         "req" : "1",
         "desc" : [
            "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.6.1.2"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "name" : "Frame Increment Pointer",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "module" : "Multi-frame",
         "entity" : "Image"
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
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "name" : "Preferred Playback Sequencing"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0022,1525)[<0>](0040,08ea)" : {
         "module" : "Wide Field Ophthalmic Photography Quality Rating",
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "usage" : "C - Required if a quality rating value exists for this SOP Instance",
         "mod_tables" : [
            "table_C.8.17.13-1",
            "table_10-26"
         ],
         "req" : "1",
         "desc" : [
            "Units of Numeric Value (0040,A30A) in this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "name" : "Contrast/Bolus Agent Number",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "req" : "1"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0022,0058)[<0>](0022,001c)" : {
         "usage" : "M",
         "name" : "Mydriatic Agent Code Sequence",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "entity" : "Image",
         "desc" : [
            "The actual agent administered to dilate the pupil.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0012,0063)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.12.1",
                                          "xrefstyle" : "select: title"
                                       },
                                       "el" : "xref"
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
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
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0018,1066)" : {
         "req" : "3",
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "usage" : "C - Required if there is a sequential temporal relationship between all frames",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Frame Delay",
         "module" : "Cine",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "usage" : "C - Required if contrast was administered; see A.76.4.2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Rate",
         "req" : "3",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present."
      },
      "(0100,0410)" : {
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status"
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
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle table_8.8-1 (in table_C.7-13 after (003A,0208))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.17.2-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.17.11-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.17.13-1:table_10-26 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.17.13-1:table_10-26 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.17.13-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.17.13-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1 after (0022,001D))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1 after (0022,0006))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1:table_C.8.17.8-2 after (0022,001C))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1:table_C.8.17.8-2 after (0022,0042))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,0015))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,0016))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,0017))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,0018))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,0019))",
      "Can't handle table_8.8-1 (in table_C.8.17.3-1 after (0022,001A))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
