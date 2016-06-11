var data = {
   "tags" : {
      "(0040,0520)[<0>](0050,0013)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Container Component Thickness",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Thickness in mm of container component"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0062,0002)[<0>](0062,000f)[<1>](0062,0011)" : {
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "Sequence defining the modifier of the property type of this segment.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Segmented Property Type Modifier Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0018,1000)" : [
         {
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "3",
            "name" : "Device Serial Number",
            "usage" : "M",
            "entity" : "Equipment"
         },
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Device Serial Number",
            "req" : "1",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0070,0087)" : {
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Alternate Content Description Sequence"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "name" : "Rows",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0062,0002)[<0>](0062,0004)" : {
         "req" : "1",
         "name" : "Segment Number",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "Identification number of the segment. The value of Segment Number (0062,0004) shall be unique within the Segmentation instance in which it is created. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.20.2.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Functional Group Pointer",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ]
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Referenced Instance Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0028,2110)" : [
         {
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
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
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "entity" : "Segmentation",
            "usage" : "M",
            "req" : "3",
            "name" : "Lossy Image Compression"
         },
         {
            "usage" : "M",
            "entity" : "Segmentation",
            "req" : "1",
            "name" : "Lossy Image Compression",
            "module" : "Segmentation Image",
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime), or is derived from lossy compressed images.",
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
                        "linkend" : "sect_C.8.20.2.2"
                     }
                  },
                  " and ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ]
         }
      ],
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1200)" : {
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Context Sequence"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Coding Scheme Name",
         "req" : "3"
      },
      "(0028,0101)" : [
         {
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Segmentation",
            "usage" : "M",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image",
            "desc" : [
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.20.2.1"
                     }
                  },
                  "."
               ],
               {
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is BINARY:"
               },
               {
                  "list" : [
                     [
                        "8",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is not BINARY:"
               }
            ],
            "req" : "1",
            "name" : "Bits Stored",
            "usage" : "M",
            "entity" : "Segmentation"
         }
      ],
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "entity" : "Segmentation",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "name" : "Container Component ID",
         "req" : "3",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0028,0100)" : [
         {
            "usage" : "M",
            "entity" : "Segmentation",
            "req" : "1",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " for further explanation."
            ]
         },
         {
            "entity" : "Segmentation",
            "usage" : "M",
            "name" : "Bits Allocated",
            "req" : "1",
            "desc" : [
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.20.2.1"
                     },
                     "el" : "xref"
                  },
                  "."
               ],
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is BINARY:"
               },
               {
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is not BINARY:",
                  "list" : [
                     [
                        "8",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image"
         }
      ],
      "(0008,0080)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0012,0010)" : {
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1"
      },
      "(0062,000e)" : {
         "desc" : "Specifies the value that represents 100%. There shall be no values in Pixel Data (7FE0,0010) greater than this value. Required if Segmentation Type (0062,0001) is FRACTIONAL.",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Maximum Fractional Value",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Digital Signatures Sequence",
         "req" : "3"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.4.1"
                  }
               },
               "."
            ]
         ],
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0028,2000)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "ICC Profile",
         "req" : "3",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0070,0084)" : {
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "2",
         "name" : "Content Creator's Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Manufacturer"
      },
      "(0010,1010)" : {
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Age",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient."
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
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
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1050)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "name" : "ICC Profile",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
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
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Date",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0040,051a)" : {
         "req" : "3",
         "name" : "Container Description",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0020,0012)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Acquisition Number",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image."
      },
      "(0028,2114)" : [
         {
            "usage" : "M",
            "entity" : "Segmentation",
            "name" : "Lossy Image Compression Method",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  " for further explanation."
               ],
               "May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  " for further explanation. May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112)."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                        ]
                     },
                     "\n                  "
                  ]
               },
               [
                  "Required if present in the source images or this IOD instance has been compressed. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.20.2.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image",
            "req" : "1C",
            "name" : "Lossy Image Compression Method",
            "entity" : "Segmentation",
            "usage" : "M"
         }
      ],
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,0040)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0020,4000)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "User-defined comments about the image",
         "req" : "3",
         "name" : "Image Comments",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "name" : "Measurement Units Code Sequence",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0028,1102)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
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
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,0060)" : [
         {
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  }
               },
               " for Defined Terms."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Modality",
            "req" : "1",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "req" : "1",
            "name" : "Modality",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Segmentation Series",
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "desc" : [
               "Modality Type",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "SEG",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ]
         }
      ],
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Person Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0040,1012)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,2112)" : {
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Source Image Sequence",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1250)" : {
         "req" : "3",
         "name" : "Related Series Sequence",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
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
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
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
                                 "el" : "para",
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0008,0023)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Content Date",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Columns",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0028,0300)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "name" : "Quality Control Image",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "U"
      },
      "(0008,114a)" : {
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0024,0202)" : {
         "req" : "3",
         "name" : "Algorithm Source",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ]
      },
      "(0040,0245)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "req" : "1C",
         "name" : "Referenced Series Sequence"
      },
      "(0008,9215)" : {
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Derivation Code Sequence",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is not present. May be present otherwise.",
         "entity" : "Frame of Reference",
         "req" : "1",
         "name" : "Frame of Reference UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "req" : "3"
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0009)" : {
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Scheduled Procedure Step ID"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "name" : "Ethnic Group",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,0051)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0038,0010)" : {
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Admission ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1C",
         "name" : "Real World Value Intercept",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Referenced Series Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Birth Date"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Segmentation Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0008,0201)" : {
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "For example:"
                     ],
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "UTC = 5.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Offset = -0200"
                     ]
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Timezone Offset From UTC"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Segmentation Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "name" : "Referenced Instance Sequence",
         "req" : "1"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Instance UID of Related Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol ID",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Container Component Type Code Sequence",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0062,0002)[<0>](0062,0006)" : {
         "name" : "Segment Description",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "User-defined description for this segment.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "module" : "Segmentation Image"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "name" : "Bits Allocated",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ]
      },
      "(0008,3010)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Irradiation Event UID"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Time of Last Calibration",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
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
                     ]
                  },
                  "\n              "
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0028,0002)" : [
         {
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "usage" : "M",
            "entity" : "Segmentation",
            "name" : "Samples per Pixel",
            "req" : "1"
         },
         {
            "desc" : {
               "type" : "variablelist",
               "list" : [
                  [
                     "1",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "module" : "Segmentation Image",
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "entity" : "Segmentation",
            "usage" : "M",
            "name" : "Samples Per Pixel",
            "req" : "1"
         }
      ],
      "(0070,0086)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Container Component Description",
         "req" : "3",
         "desc" : "Container component text description.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0066,002f)" : {
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Algorithm Family Code Sequence",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0008,0020)" : {
         "req" : "2",
         "name" : "Study Date",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Date the Study started."
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Signature",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Dimension Index Pointer",
         "req" : "1",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.17.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0100,0424)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "desc" : [
            "Encrypted data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.4.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1",
         "name" : "Encrypted Content"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,001b)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0083)" : {
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
            ]
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Certificate Type",
         "req" : "1"
      },
      "(0028,0302)" : {
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Recognizable Visual Features",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(2050,0020)" : {
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Presentation LUT Shape",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "req" : "1C",
         "name" : "Real World Value LUT Data",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ]
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Address",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0008,1111)" : [
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ]
         },
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "module" : "Segmentation Series",
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "req" : "1C",
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0028,0034)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,1120)" : {
         "req" : "3",
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "U",
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series"
      },
      "(0008,2112)[<0>](0028,135a)" : {
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
               "content" : [
                  "\n                    ",
                  {
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
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Spatial Locations Preserved",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "LUT Label",
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0020,9221)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Dimension Organization Sequence"
      },
      "(0012,0021)" : {
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0513)" : {
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "desc" : "Number of rows in the image."
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1",
         "name" : "Container Identifier",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "DateTime"
      },
      "(0008,001a)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,2111)" : {
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Derivation Description",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,1060)" : {
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Series Instance UID"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "module" : "General Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ],
         "module" : "Segmentation Image",
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present.",
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Language Code Sequence"
      },
      "(0008,1140)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Referenced Image Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Time",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0028,1202)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
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
         ],
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0066,0036)" : {
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ],
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "name" : "Algorithm Name",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(7fe0,0010)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "1C",
         "name" : "Pixel Data",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3"
      },
      "(0020,9311)" : {
         "desc" : [
            "Dimension organization of the instance.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of parallel-plane 3D volume sets."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Dimension Organization Type",
         "req" : "3"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "3",
         "name" : "Specimen Short Description",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Time",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ]
      },
      "(0020,0010)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study ID",
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Specimen Type Code Sequence",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Floating Point Value"
      },
      "(0028,1203)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(0040,9096)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Real World Value Mapping Sequence",
         "req" : "3",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0062,0002)[<0>](0062,000c)" : {
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the maximum pixel value in this segment be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "req" : "3",
         "name" : "Recommended Display Grayscale Value",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Bits Stored",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Software Versions",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2298)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "req" : "1C",
         "name" : "Responsible Person Role",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0062,0002)[<0>](0008,2218)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Anatomic Region Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4",
            "table_10-7"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "req" : "1",
         "name" : "Real World Value Last Value Mapped",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0010,4000)" : {
         "req" : "3",
         "name" : "Patient Comments",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient."
      },
      "(0008,0012)" : {
         "req" : "3",
         "name" : "Instance Creation Date",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0062,0002)[<0>](0062,0008)" : {
         "desc" : [
            "Type of algorithm used to generate the segment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "AUTOMATIC",
                     "calculated segment"
                  ],
                  [
                     "SEMIAUTOMATIC",
                     "calculated segment with user assistance"
                  ],
                  [
                     "MANUAL",
                     "user-entered segment"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "req" : "1",
         "name" : "Segment Algorithm Type",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "An identification number or code used to identify the patient.",
         "name" : "Patient ID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Patient's Size",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "U"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Container Component Diameter",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0020,0060)" : {
         "req" : "2C",
         "name" : "Laterality",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
      "(0012,0071)" : {
         "name" : "Clinical Trial Series ID",
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0018,1200)" : {
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0018,1020)" : [
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Software Versions",
            "req" : "3",
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
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
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
            ],
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "usage" : "M",
            "req" : "1",
            "name" : "Software Versions"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Time of Last Calibration"
      },
      "(0062,0002)[<0>](0062,0005)" : {
         "desc" : "User-defined label identifying this segment. This may be the same as Code Meaning (0008,0104) of Segmented Property Type Code Sequence (0062,000F).",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Segment Label",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Gantry ID",
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0008,1040)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "req" : "3"
      },
      "(0008,1030)" : {
         "req" : "3",
         "name" : "Study Description",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Segmentation",
         "name" : "Date of Last Calibration",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "High Bit",
         "req" : "1"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
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
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "req" : "3",
         "name" : "Service Episode Description",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Description",
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
         "module" : "Patient"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Specimen Localization Content Item Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "req" : "1",
         "name" : "LUT Explanation",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
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
      "(0040,9096)[<0>](0040,9216)" : {
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1",
         "name" : "Real World Value First Value Mapped"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Pixel Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         ]
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Multi-frame Source SOP Instance UID",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : "SOP Instance from which the frames of this instance are extracted."
      },
      "(0028,0107)" : {
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Container Identifier",
         "req" : "1",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0028,0006)" : {
         "req" : "1C",
         "name" : "Planar Configuration",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0008,0032)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Acquisition Time",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Retrieve URI",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,2297)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Responsible Person",
         "req" : "2C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0040,0560)" : {
         "req" : "1",
         "name" : "Specimen Description Sequence",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creator UID"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0018,a001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0062,0002)[<0>](0062,0009)" : {
         "name" : "Segment Algorithm Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "desc" : "Name of algorithm used to generate the segment. Required if Segment Algorithm Type (0062,0008) is not MANUAL."
      },
      "(0012,0082)" : {
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "name" : "Specimen Detailed Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
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
         "usage" : "M",
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,1103)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The maximum value of all images in this Series.",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Largest Pixel Value in Series",
         "req" : "3"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2",
         "name" : "Patient's Name",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Institution Name",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "name" : "Samples per Pixel",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0008,1164)" : {
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Segmentation"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0028,0011)" : {
         "name" : "Columns",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0018,5100)" : {
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Patient Position",
         "req" : "2C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Sex Neutered",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0040,0515)" : {
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "3",
         "name" : "Alternate Container Identifier Sequence"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Dimension Organization UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Time",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID"
      },
      "(0008,1062)" : {
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Material of container component.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "3",
         "name" : "Container Component Material",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "name" : "Breed Registration Sequence"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "req" : "1C",
         "name" : "Functional Group Private Creator",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0020,0011)" : [
         {
            "desc" : "A number that identifies this Series.",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "req" : "2",
            "name" : "Series Number"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "req" : "1",
            "name" : "Series Number",
            "module" : "Segmentation Series",
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "desc" : "A number that identifies this Series"
         }
      ],
      "(0020,9222)[<0>](0020,9421)" : {
         "desc" : "Free text description that explains the meaning of the dimension.",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Dimension Description Label"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,0254)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0088,0200)[<0>](0028,1103)" : {
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
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "name" : "Certified Timestamp",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.3"
               }
            },
            "."
         ]
      },
      "(0008,0070)" : [
         {
            "req" : "2",
            "name" : "Manufacturer",
            "entity" : "Equipment",
            "usage" : "M",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment"
         },
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer",
            "req" : "1"
         }
      ],
      "(0012,0064)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
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
         ],
         "name" : "Calculated Frame List",
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Segmentation"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8.20-1",
               "table_10-11"
            ],
            "module" : "Segmentation Series"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "UID"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Study Time",
         "req" : "2",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Referenced SOP Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Type of Patient ID",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The type of identifier in this item.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3"
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0066,0031)" : {
         "name" : "Algorithm Version",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ],
         "module" : "Segmentation Image"
      },
      "(0040,0518)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Container Type Code Sequence",
         "req" : "2"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "req" : "3",
         "name" : "Accession Number",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Real World Value Slope",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ]
      },
      "(0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "Photometric Interpretation",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "name" : "Time",
         "usage" : "U",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "usage" : "U",
         "name" : "Occupation",
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,0033)" : {
         "req" : "2C",
         "name" : "Content Time",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0066,0030)" : {
         "req" : "3",
         "name" : "Algorithm Name Code Sequence",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Additional Patient History",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1090)" : [
         {
            "req" : "3",
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment",
            "usage" : "M",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "usage" : "M",
            "entity" : "Equipment",
            "name" : "Manufacturer's Model Name",
            "req" : "1"
         }
      ],
      "(0088,0200)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Icon Image Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0062,0002)" : {
         "desc" : [
            "Describes the segments that are contained within the data.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Segment Sequence",
         "req" : "1"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0062,0002)[<0>](0066,002d)[<1>](0066,0032)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Algorithm Parameters",
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-19"
         ],
         "module" : "Segmentation Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,0303)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
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
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,0004)" : [
         {
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "req" : "1",
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "entity" : "Segmentation"
         },
         {
            "module" : "Segmentation Image",
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "desc" : {
               "list" : [
                  [
                     "MONOCHROME2",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "usage" : "M",
            "entity" : "Segmentation",
            "name" : "Photometric Interpretation",
            "req" : "1"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0062,0010)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Segmentation Fractional Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "For fractional segmentation encoding, the meaning of the fractional value.",
            "Required if Segmentation Type (0062,0001) is FRACTIONAL.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.20.2.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Enumerated Values."
            ]
         ]
      },
      "(0018,0015)" : {
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L",
                     "targetdoc" : "PS3.16"
                  }
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Body Part Examined",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para"
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
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0062,0002)[<0>](0008,2218)[<1>](0008,2220)" : {
         "name" : "Anatomic Region Modifier Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4",
            "table_10-7"
         ],
         "module" : "Segmentation Image",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0260)" : {
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "2",
         "name" : "Specimen Preparation Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "req" : "1C",
         "name" : "Date",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0010,1001)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Procedure Code Sequence"
      },
      "(0020,1040)" : {
         "entity" : "Frame of Reference",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is not present. May be present otherwise.",
         "req" : "2",
         "name" : "Position Reference Indicator",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0010,1021)" : {
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,0090)" : {
         "req" : "2",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0070,0080)" : {
         "name" : "Content Label",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "A label that is used to identify this SOP Instance.",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ]
      },
      "(0008,0018)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1",
         "name" : "SOP Instance UID",
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
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0062,0002)[<0>](0062,000f)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Segmented Property Type Code Sequence",
         "req" : "1",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ],
         "desc" : [
            "Sequence defining the specific property type of this segment.",
            "Only a single item shall be included in this sequence."
         ]
      },
      "(0028,0103)" : [
         {
            "req" : "1",
            "name" : "Pixel Representation",
            "entity" : "Segmentation",
            "usage" : "M",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
               {
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
                  ],
                  "type" : "variablelist"
               }
            ],
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "entity" : "Segmentation",
            "req" : "1",
            "name" : "Pixel Representation",
            "module" : "Segmentation Image",
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "desc" : {
               "type" : "variablelist",
               "list" : [
                  [
                     "0",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Date",
         "req" : "1C"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Character Set that expands or replaces the Basic Graphic Set.",
            "Required if an expanded or replacement character set is used.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.2"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "name" : "Specific Character Set",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : "Width in mm of container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Segmentation",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  }
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
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ]
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0020,1002)" : {
         "req" : "3",
         "name" : "Images in Acquisition",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Primary Anatomic Structure Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "name" : "Source of Previous Values",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "usage" : "U",
         "entity" : "Segmentation",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0062,0002)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4",
            "table_10-7",
            "table_10-8"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "req" : "3"
      },
      "(0028,0102)" : [
         {
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "High Bit",
            "req" : "1",
            "entity" : "Segmentation",
            "usage" : "M"
         },
         {
            "desc" : [
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.20.2.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ],
               {
                  "list" : [
                     [
                        "0",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is BINARY:"
               },
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "7",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values if Segmentation Type (0062,0001) is not BINARY:"
               }
            ],
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image",
            "req" : "1",
            "name" : "High Bit",
            "entity" : "Segmentation",
            "usage" : "M"
         }
      ],
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0010,1030)" : {
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms."
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0062,0002)[<0>](0062,000d)" : {
         "desc" : [
            "A default triplet value in which it is recommended that segment be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Recommended Display CIELab Value"
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ]
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "name" : "Distribution Type",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "req" : "2",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1C",
         "name" : "Dimension Index Private Creator",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Identity Removed",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "2",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0020,9222)" : {
         "name" : "Dimension Index Sequence",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0400,0561)" : {
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
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
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "1",
         "name" : "Content Description",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ]
      },
      "(0062,0001)" : {
         "desc" : [
            "The type of encoding used to indicate the presence of the segmented property at a pixel/voxel location.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "BINARY",
                     null
                  ],
                  [
                     "FRACTIONAL",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.20.2.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "module" : "Segmentation Image",
         "name" : "Segmentation Type",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "req" : "3",
         "name" : "Manufacturer",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence",
         "req" : "3"
      },
      "(0008,0053)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,2210)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Anatomical Orientation Type",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "BIPED",
                     null
                  ],
                  [
                     "QUADRUPED",
                     null
                  ]
               ]
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
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
                     "el" : "para",
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Patient Orientation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "req" : "1C"
      },
      "(0008,0016)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "SOP Class UID",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the SOP Class. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.1"
               }
            },
            " for further explanation. See also ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0028,0301)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Burned In Annotation",
         "req" : "3",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0008,002a)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Acquisition DateTime",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "name" : "Operators' Name",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0040,0520)" : {
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "3",
         "name" : "Container Component Sequence"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0070,0086)" : {
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Content Creator's Identification Code Sequence"
      },
      "(0008,0022)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Acquisition Date",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0010,2293)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "desc" : "Length in mm of container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Container Component Length",
         "req" : "3"
      },
      "(0100,0410)" : {
         "req" : "3",
         "name" : "SOP Instance Status",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "name" : "Breed Registration Number",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0020,0013)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "2",
            "name" : "Instance Number",
            "usage" : "M",
            "entity" : "Segmentation"
         },
         {
            "desc" : "A number that identifies this SOP Instance.",
            "module" : "Segmentation Image",
            "mod_tables" : [
               "table_C.8.20-2",
               "table_10-12"
            ],
            "name" : "Instance Number",
            "req" : "1",
            "entity" : "Segmentation",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "usage" : "M",
            "entity" : "Segmentation",
            "req" : "3",
            "name" : "Instance Number"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "name" : "Modifying System",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Planar Configuration",
         "req" : "1C"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Quality Control Subject",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0028,0108)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Smallest Pixel Value in Series",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Segmentation"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
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
         "name" : "Simple Frame List",
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Segmentation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Segmentation",
         "usage" : "C - Required if Derivation Image Functional Group (C.7.16.2.6) is present.",
         "name" : "Study Instance UID",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "MAC Parameters Sequence",
         "req" : "3"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1",
            "name" : "Referenced SOP Instance UID"
         },
         {
            "module" : "Segmentation Series",
            "mod_tables" : [
               "table_C.8.20-1",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "entity" : "Series"
         }
      ],
      "(0008,1110)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Referenced Study Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
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
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Station Name"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Segmentation",
         "usage" : "U"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0081)" : {
         "desc" : "A description of the content of the SOP Instance.",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_10-12"
         ],
         "module" : "Segmentation Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Content Description",
         "req" : "2"
      },
      "(0062,0002)[<0>](0062,0003)" : {
         "name" : "Segmented Property Category Code Sequence",
         "req" : "1",
         "entity" : "Segmentation",
         "usage" : "M",
         "desc" : [
            "Sequence defining the general category of this segment.",
            "Only a single item shall be included in this sequence."
         ],
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0062,0002)[<0>](0066,002d)" : {
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2"
         ],
         "desc" : [
            "A description of how this segment was derived.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Segmentation",
         "name" : "Segment Surface Generation Algorithm Identification Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Segmentation",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "req" : "1C"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "entity" : "Study",
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0010,2202)" : {
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Segmentation",
         "usage" : "M",
         "req" : "3",
         "name" : "Largest Image Pixel Value"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Segmentation",
         "usage" : "U",
         "name" : "Text Value",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "entity" : "Segmentation",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "req" : "1C"
      },
      "(0012,0060)" : {
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name"
      },
      "(0012,0042)" : {
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "req" : "1",
         "name" : "Specimen Identifier",
         "usage" : "U",
         "entity" : "Segmentation"
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3"
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Description of the Series",
         "req" : "3",
         "name" : "Series Description",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Consent for Distribution Flag",
         "req" : "1",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0028,2112)" : [
         {
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "May be multivalued if successive lossy compression steps have been applied.",
               {
                  "content" : [
                     "\n                    ",
                     {
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
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                    "el" : "para",
                                    "content" : [
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
                                    ]
                                 },
                                 "\n                      "
                              ],
                              "el" : "listitem"
                           },
                           "\n                    "
                        ],
                        "el" : "orderedlist"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "usage" : "M",
            "entity" : "Segmentation",
            "name" : "Lossy Image Compression Ratio",
            "req" : "3"
         },
         {
            "name" : "Lossy Image Compression Ratio",
            "req" : "1C",
            "entity" : "Segmentation",
            "usage" : "M",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  },
                  " for further explanation. May be multivalued if successive lossy compression steps have been applied."
               ],
               {
                  "content" : [
                     "\n                    ",
                     {
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
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                    "content" : [
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
                                    ],
                                    "el" : "para"
                                 },
                                 "\n                      "
                              ],
                              "el" : "listitem"
                           },
                           "\n                    "
                        ],
                        "el" : "orderedlist"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               "Required if present in the source images or this IOD instance has been compressed."
            ],
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image"
         }
      ],
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step ID"
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Segmentation",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "entity" : "Segmentation",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "req" : "3",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "entity" : "Segmentation",
         "req" : "3",
         "name" : "Spatial Resolution"
      },
      "(0010,0032)" : {
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Time"
      },
      "(0008,0008)" : [
         {
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ],
            "usage" : "M",
            "entity" : "Segmentation",
            "name" : "Image Type",
            "req" : "3"
         },
         {
            "desc" : "Value 1 shall be DERIVED. Value 2 shall be PRIMARY. No other values shall be present.",
            "mod_tables" : [
               "table_C.8.20-2"
            ],
            "module" : "Segmentation Image",
            "entity" : "Segmentation",
            "usage" : "M",
            "name" : "Image Type",
            "req" : "1"
         }
      ],
      "(0020,0020)" : {
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "2C",
         "name" : "Patient Orientation",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "usage" : "U",
         "entity" : "Segmentation",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
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
         ]
      },
      "(0062,0002)[<0>](0008,2228)" : {
         "req" : "3",
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "M",
         "entity" : "Segmentation",
         "module" : "Segmentation Image",
         "mod_tables" : [
            "table_C.8.20-2",
            "table_C.8.20-4",
            "table_10-7",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Segmentation",
         "usage" : "M"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Operators' Name"
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
      "Can't handle table_8.8-1 (in table_C.7-1 after (0012,0064))",
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
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_10-12:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4 after (0062,0003))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4 after (0062,000F))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_C.8.20-4 after (0062,0011))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.20-2:table_10-19 after (0066,0030))",
      "Can't handle processing of table_C.7.6.16-1 in Segmentation:Multi-frame Functional Groups of table_A.51-1",
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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}