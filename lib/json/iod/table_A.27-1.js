var data = {
   "tags" : {
      "(0018,1510)" : [
         {
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "req" : "3",
            "desc" : [
               "Position of the X-Ray beam about the patient from the RAO to LAO direction where movement from RAO to vertical is positive, if Positioner Type (0018,1508) is CARM.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation if Positioner Type (0018,1508) is CARM."
               ],
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "name" : "Positioner Primary Angle",
            "module" : "DX Positioning"
         },
         {
            "desc" : "Position in degrees of the X-Ray beam vector in the coronal anatomical plane as if the patient were standing where movement of the X-Ray source from right to vertical is positive, and vertical is zero.",
            "name" : "Positioner Primary Angle",
            "module" : "Mammography Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "req" : "3"
         }
      ],
      "(0018,7056)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "name" : "Filter Beam Path Length Minimum",
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ]
         },
         {
            "req" : "3",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration",
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "name" : "Filter Beam Path Length Minimum"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : [
         {
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
            "name" : "Value Type",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1",
            "name" : "Value Type",
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
            "module" : "Mammography Series"
         }
      ],
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : [
         {
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "name" : "Text Value",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0008,1072)[<0>](0040,1103)" : {
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "General Series",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,1150)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "desc" : "Duration of X-Ray exposure in msec.",
            "name" : "Exposure Time",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U"
         },
         {
            "desc" : "Duration of X-Ray exposure in msec.",
            "name" : "Exposure Time",
            "module" : "X-Ray Generation",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3"
         }
      ],
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen Identifier",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ]
      },
      "(0018,1511)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "entity" : "Image",
            "usage" : "U",
            "module" : "DX Positioning",
            "desc" : [
               "Position of the X-Ray beam about the patient from the CAU to CRA direction where movement from CAU to vertical is positive, if Positioner Type (0018,1508) is CARM.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation if Positioner Type (0018,1508) is CARM."
               ],
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.7",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "name" : "Positioner Secondary Angle"
         },
         {
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "req" : "3",
            "desc" : "Position in degrees of the X-Ray beam vector in the sagittal anatomical plane as if the patient were standing where movement of the X-Ray source from anterior to posterior is positive, and vertical is zero.",
            "name" : "Positioner Secondary Angle",
            "module" : "Mammography Image"
         }
      ],
      "(0018,7000)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Detector Conditions Nominal Flag",
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
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
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This flag is intended to indicate whether or not there may have been some compromise of the diagnostic quality of the image due to some condition such as over-temperature, etc."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "DX Detector"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "name" : "Patient Orientation",
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
         "req" : "1C"
      },
      "(0018,7041)" : {
         "module" : "X-Ray Grid",
         "desc" : "The spacing material used in the grid.",
         "name" : "Grid Spacing Material",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "usage" : "U"
      },
      "(0018,7042)" : {
         "module" : "X-Ray Grid",
         "name" : "Grid Thickness",
         "desc" : "The thickness in mm of the X-Ray absorbing material used in the grid.",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : [
         {
            "name" : "Person Name",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "name" : "Person Name",
            "module" : "Mammography Series"
         }
      ],
      "(0018,1200)" : {
         "module" : "General Equipment",
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
         "name" : "Date of Last Calibration",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,1151)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "X-Ray Tube Current in mA.",
            "name" : "X-Ray Tube Current"
         },
         {
            "module" : "X-Ray Generation",
            "name" : "X-Ray Tube Current",
            "desc" : "X-Ray Tube Current in mA.",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "entity" : "Image",
            "usage" : "U"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : [
         {
            "module" : "General Series",
            "name" : "Person Name",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "name" : "Person Name",
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         ],
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "General Study"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0018,115e)" : {
         "module" : "X-Ray Acquisition Dose",
         "name" : "Image and Fluoroscopy Area Dose Product",
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image plus any non-digitally recorded fluoroscopy that may have been performed to prepare for the acquisition of this image.",
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
                                 "el" : "para",
                                 "content" : [
                                    "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
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
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "name" : "Patient ID",
         "desc" : "An identification number or code used to identify the patient.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,6000)" : {
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
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
                                 "el" : "para",
                                 "content" : [
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "table_10-23"
                                       },
                                       "el" : "xref"
                                    },
                                    " 'Exposure Index Macro', which are recommended."
                                 ]
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Sensitivity",
         "module" : "DX Detector",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
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
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "name" : "Referenced Study Sequence",
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
         ],
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "module" : "Contrast/Bolus",
         "name" : "Additional Drug Sequence",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(0018,2041)[<0>](0018,2045)" : {
         "name" : "Target Label",
         "desc" : "Target description.",
         "module" : "Mammography Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
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
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "name" : "Bits Stored",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : [
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "name" : "DateTime",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "name" : "DateTime",
            "module" : "Mammography Series"
         }
      ],
      "(0040,9096)[<0>](0040,9211)" : {
         "module" : "General Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         "name" : "Real World Value Last Value Mapped",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "name" : "Rows",
         "desc" : "Number of rows in the image.",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "module" : "Specimen",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0050)" : [
         {
            "module" : "General Series",
            "name" : "Accession Number",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ]
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "req" : "3",
            "name" : "Accession Number",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
            "module" : "Mammography Series"
         }
      ],
      "(0008,001a)" : {
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
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0018,8151)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "name" : "X-Ray Tube Current in \u00b5A",
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ]
         },
         {
            "module" : "X-Ray Generation",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "name" : "X-Ray Tube Current in \u00b5A",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U"
         }
      ],
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Description",
         "module" : "Patient"
      },
      "(0018,1152)" : [
         {
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3",
            "name" : "Exposure",
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U",
            "module" : "X-Ray Generation",
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "name" : "Exposure"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(60xx,0045)" : {
         "module" : "Overlay Plane",
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
         "name" : "Overlay Subtype",
         "req" : "3",
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : [
         {
            "module" : "General Series",
            "name" : "Rational Denominator Value",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "name" : "Rational Denominator Value",
            "module" : "Mammography Series"
         }
      ],
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0012,0051)" : {
         "name" : "Clinical Trial Time Point Description",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0008,2218)" : [
         {
            "module" : "DX Anatomy Imaged",
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Zero or one Item shall be included in this Sequence."
            ],
            "name" : "Anatomic Region Sequence",
            "req" : "2",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6"
            ]
         },
         {
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Only a single Item shall be included in this sequence."
            ],
            "name" : "Anatomic Region Sequence",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : [
         {
            "module" : "General Series",
            "name" : "Text Value",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "module" : "Mammography Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0054,0414)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3",
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to the gantry.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Patient Gantry Relationship Code Sequence",
         "module" : "DX Positioning"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "2",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common"
      },
      "(0008,1084)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0012,0083)" : {
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0054,0220)" : [
         {
            "desc" : [
               "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "It is strongly recommended that this Attribute be present, in order to ensure that images may be positioned correctly relative to one another for display."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               [
                  "Shall be consistent with View Position (0018,5101). See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.5.1.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Only a single Item is permitted in this Sequence."
            ],
            "name" : "View Code Sequence",
            "module" : "DX Positioning",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "req" : "3"
         },
         {
            "module" : "Mammography Image",
            "name" : "View Code Sequence",
            "desc" : [
               "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
               "Only a single Item shall be included in this Sequence."
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "entity" : "Image",
            "usage" : "M"
         }
      ],
      "(0012,0071)" : {
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Series ID"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(60xx,0102)" : {
         "module" : "Overlay Plane",
         "name" : "Overlay Bit Position",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See PS3.3-2004."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0088,0200)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Icon Image Sequence",
         "module" : "General Image"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID"
         },
         {
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "DX Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : [
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "module" : "General Series"
         },
         {
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(60xx,1302)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "3",
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
         "name" : "ROI Mean",
         "module" : "Overlay Plane"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Universal Entity ID Type",
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
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "name" : "Text Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "req" : "1",
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5"
                  }
               },
               " for further explanation."
            ],
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1",
            "desc" : [
               "Most significant bit for pixel sample data.",
               "Shall be one less than the value in Bit Stored (0028,0101)."
            ],
            "name" : "High Bit",
            "module" : "DX Image"
         }
      ],
      "(4ffe,0001)[<0>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0560)" : {
         "module" : "Specimen",
         "name" : "Specimen Description Sequence",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0318)" : [
         {
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3",
            "name" : "Organ Exposed",
            "desc" : [
               "Organ to which Organ Dose (0040,0316) applies.",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "BREAST",
                        null
                     ],
                     [
                        "GONADS",
                        null
                     ],
                     [
                        "BONE MARROW",
                        null
                     ],
                     [
                        "FETUS",
                        null
                     ],
                     [
                        "LENS",
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
                           "The anatomic regions described by these terms are those that are particularly radiosensitive and for which it is conventional to obtain organ specific dose parameters."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "mod_tables" : [
               "table_C.8-74"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1",
            "name" : "Organ Exposed",
            "desc" : [
               "Organ to which Organ Dose (0040,0316) applies.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "BREAST",
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
                        "content" : [
                           "In the Mammography IOD, Organ Dose (0040,0316) refers to the mean glandular dose."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "Mammography Image"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "module" : "Specimen"
      },
      "(0008,3010)" : {
         "name" : "Irradiation Event UID",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0050,0004)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "req" : "3",
         "desc" : [
            "Indicates whether a reference object (phantom) of known size is present in the image and was used for calibration.",
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
            [
               "Device is identified using the Device module. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Calibration Image",
         "module" : "DX Image"
      },
      "(0040,0513)" : {
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2"
      },
      "(0020,0013)" : [
         {
            "desc" : [
               "A number that identifies this image.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "name" : "Instance Number",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "2"
         },
         {
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "req" : "3",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0020,0060)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Laterality",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : [
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "module" : "Mammography Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0008,1080)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series"
         },
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-11"
            ],
            "module" : "Mammography Series",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,2041)[<0>](0018,2042)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M",
         "module" : "Mammography Image",
         "desc" : [
            "Unique identifier for the target.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "To identify the same target in corresponding minus and plus stereo images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Target UID"
      },
      "(0010,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "desc" : "Birth time of the Patient."
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "module" : "General Image",
         "name" : "Referenced Frame Number",
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
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0040,0314)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "The thickness of Aluminum in mm required to reduce the X-Ray Output (0040,0312) by a factor of two.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Half Value Layer",
         "module" : "X-Ray Acquisition Dose"
      },
      "(0018,7005)" : {
         "module" : "DX Detector",
         "desc" : [
            "The physical configuration of the detector.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "name" : "Detector Configuration",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Software Versions",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0022)" : {
         "name" : "Acquisition Date",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,1712)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Radius of Circular Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Radius of the circular collimator with respect to pixels in the image given as a number of pixels along the row direction. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "X-Ray Collimator"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "name" : "Real World Value Slope"
      },
      "(0020,0062)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-69"
            ],
            "entity" : "Image",
            "usage" : "M",
            "module" : "DX Anatomy Imaged",
            "desc" : [
               "Laterality of (possibly paired) body part (as described in Anatomic Region Sequence (0008,2218)) examined.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "R",
                        "right"
                     ],
                     [
                        "L",
                        "left"
                     ],
                     [
                        "U",
                        "unpaired"
                     ],
                     [
                        "B",
                        "both left and right"
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
                        "content" : [
                           "This Attribute is mandatory, in order to ensure that images may be positioned correctly relative to one another for display."
                        ]
                     },
                     "\n                  "
                  ]
               },
               "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "Laterality (0020,0060) is a Series level Attribute and must be the same for all Images in the Series, hence it must be absent."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Image Laterality"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "entity" : "Image",
            "usage" : "M",
            "module" : "Mammography Image",
            "desc" : [
               "Laterality of the region examined.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "R",
                        "right"
                     ],
                     [
                        "L",
                        "left"
                     ],
                     [
                        "B",
                        "both (e.g., cleavage)"
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "name" : "Image Laterality"
         }
      ],
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0302)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "name" : "Recognizable Visual Features",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "module" : "Specimen",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "name" : "Specimen Short Description",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0008,0032)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "name" : "Acquisition Time",
         "module" : "General Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0018,7012)" : {
         "name" : "Detector Time Since Last Exposure",
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image.",
         "module" : "DX Detector",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : [
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Numeric Value",
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "name" : "Numeric Value",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Rational Denominator Value",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         },
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "Mammography Series",
            "name" : "Rational Denominator Value",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         }
      ],
      "(0010,1010)" : {
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study"
      },
      "(0060,3000)[<0>](0060,3002)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "req" : "1",
         "name" : "Histogram Number of Bins",
         "desc" : "The number of \"bins\" (entries) in the histogram.",
         "module" : "Image Histogram"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         },
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number",
            "module" : "Mammography Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2"
      },
      "(0028,1102)" : {
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1002)" : [
         {
            "desc" : "Reason for requesting this procedure.",
            "name" : "Reason for the Requested Procedure",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         },
         {
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "desc" : "Reason for requesting this procedure.",
            "name" : "Reason for the Requested Procedure"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "module" : "Patient"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen"
      },
      "(0028,2112)" : [
         {
            "module" : "General Image",
            "name" : "Lossy Image Compression Ratio",
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
                  "el" : "note",
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
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
                                    ]
                                 },
                                 "\n                      "
                              ],
                              "el" : "listitem"
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
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M",
            "module" : "DX Image",
            "name" : "Lossy Image Compression Ratio",
            "desc" : [
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Lossy Compression has been performed on the Image."
            ]
         }
      ],
      "(0040,0520)[<0>](0008,0070)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "name" : "Manufacturer"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1201)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
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
         "name" : "Time of Last Calibration",
         "module" : "General Equipment"
      },
      "(0060,3000)[<0>](0060,3008)" : {
         "desc" : "The number of consecutive stored pixel values included in a bin. All bins shall be of equal width.",
         "name" : "Histogram Bin Width",
         "module" : "Image Histogram",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "General Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
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
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(0028,0002)" : [
         {
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
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
            "name" : "Samples per Pixel"
         },
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "req" : "1",
            "desc" : [
               "Number of samples in this image.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ]
               }
            ],
            "name" : "Samples per Pixel",
            "module" : "DX Image"
         }
      ],
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "name" : "Date of Last Calibration",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "module" : "General Image",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0018,1706)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "name" : "Collimator Upper Horizontal Edge",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the upper edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,1400)" : {
         "name" : "Acquisition Device Processing Description",
         "desc" : [
            "Indicates any visual processing performed on the images prior to exchange.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.3.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Image",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "req" : "3"
      },
      "(0008,1140)" : {
         "module" : "General Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Image Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0028,0109)" : {
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Floating Point Value",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ]
         },
         {
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       },
                                       "el" : "olink"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
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
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para"
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(0028,1203)" : {
         "module" : "Image Pixel",
         "name" : "Blue Palette Color Lookup Table Data",
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
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0028,0107)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "Image Pixel"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         },
         {
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "name" : "Concept Code Sequence"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "name" : "Patient's Size",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : [
         {
            "usage" : "M",
            "entity" : "Series",
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
            ],
            "name" : "Measurement Units Code Sequence",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "name" : "Measurement Units Code Sequence",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0028,1351)" : {
         "module" : "Mammography Image",
         "desc" : [
            "Free text description of the portion of the breast captured in a partial view image.",
            "This Attribute shall not be present if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.16",
                              "targetdoc" : "PS3.16"
                           },
                           "el" : "olink"
                        },
                        "."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Partial View Description",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M"
      },
      "(0018,1411)" : [
         {
            "name" : "Exposure Index",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
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
                                       "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
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
                                    "content" : [
                                       "This index value is scaled as defined by IEC 62494-1."
                                    ],
                                    "el" : "para"
                                 },
                                 "\n                  "
                              ],
                              "el" : "listitem"
                           },
                           "\n                "
                        ],
                        "attrs" : {
                           "numeration" : "arabic"
                        }
                     },
                     "\n              "
                  ]
               }
            ],
            "module" : "DX Detector",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "req" : "3"
         },
         {
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "entity" : "Image",
            "usage" : "U",
            "req" : "3",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
               {
                  "el" : "note",
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
                              "el" : "listitem",
                              "content" : [
                                 "\n                    ",
                                 {
                                    "el" : "para",
                                    "content" : [
                                       "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
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
                                    "content" : [
                                       "This index value is scaled as defined by IEC 62494-1."
                                    ],
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
                  ]
               }
            ],
            "name" : "Exposure Index",
            "module" : "X-Ray Acquisition Dose"
         }
      ],
      "(0008,0030)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "Time the Study started.",
         "name" : "Study Time",
         "module" : "General Study"
      },
      "(0008,0020)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Date",
         "desc" : "Date the Study started."
      },
      "(0020,1040)" : {
         "name" : "Position Reference Indicator",
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
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "usage" : "C - Required if multiple images are obtained without releasing breast compression",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "name" : "Referenced Frame Number"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "module" : "Intervention",
         "desc" : "Time of completion of administration of the intervention drug.",
         "name" : "Intervention Drug Stop Time",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0018,700a)" : {
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "name" : "Detector ID",
         "module" : "DX Detector",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,1001)" : [
         {
            "module" : "General Series",
            "name" : "Requested Procedure ID",
            "desc" : [
               "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
               "Required if procedure was scheduled. May be present otherwise.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "el" : "para",
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ]
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M"
         },
         {
            "module" : "Mammography Series",
            "name" : "Requested Procedure ID",
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
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference"
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "name" : "Smallest Pixel Value in Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1001)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names"
      },
      "(0040,0302)" : {
         "mod_tables" : [
            "table_C.8-33"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Entrance Dose",
         "desc" : [
            "Average entrance dose value measured in dGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "X-Ray Acquisition Dose"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "name" : "Container Component Diameter",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Primary Anatomic Structure Sequence",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the container component.",
         "name" : "Manufacturer's Model Name",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0018,700c)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "module" : "DX Detector",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "name" : "Date of Last Detector Calibration"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "module" : "General Series"
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "module" : "General Image"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : [
         {
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
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
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
            "module" : "Mammography Series"
         }
      ],
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0040,0275)[<0>](0040,100a)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "Reason for Requested Procedure Code Sequence",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this sequence."
            ]
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "Mammography Series",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this sequence."
            ],
            "name" : "Reason for Requested Procedure Code Sequence"
         }
      ],
      "(0040,0560)[<0>](0040,059a)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Specimen Type Code Sequence"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
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
         "module" : "General Image",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0018,7024)" : {
         "desc" : [
            "Shape of the active area.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Detector Active Shape",
         "module" : "DX Detector",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0028,0034)" : {
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Pixel Aspect Ratio",
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0040,1012)" : {
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0021)" : {
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0018,1041)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "name" : "Contrast/Bolus Volume",
         "module" : "Contrast/Bolus"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "name" : "Distribution Type",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "name" : "Time",
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
         "req" : "1C"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the device",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0253)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "name" : "Type of Patient ID",
         "desc" : [
            "The type of identifier in this item.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "module" : "Specimen",
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
         "name" : "Value Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Time",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "Specimen"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Spatial Locations Preserved",
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
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
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
            }
         ]
      },
      "(0028,1202)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Green Palette Color Lookup Table Data",
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
         ]
      },
      "(0018,0036)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "module" : "Intervention",
         "name" : "Intervention Sequence",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0008,0068)" : {
         "desc" : [
            "Identifies the intent of the images that are contained within this Series.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FOR PRESENTATION",
                     null
                  ],
                  [
                     "FOR PROCESSING",
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
                     "linkend" : "sect_C.8.11.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Presentation Intent Type",
         "module" : "DX Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-68"
         ],
         "req" : "1"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history.",
         "name" : "Additional Patient History",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ]
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0306)" : {
         "module" : "X-Ray Acquisition Dose",
         "name" : "Distance Source to Entrance",
         "desc" : [
            "Distance in mm from the source to the surface of the patient closest to the source during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "usage" : "U"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Container Component Type Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0038,0064)" : {
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study"
      },
      "(0008,0033)" : {
         "module" : "General Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "name" : "Content Time",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0008,002a)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
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
         "name" : "Acquisition DateTime",
         "module" : "General Image"
      },
      "(0018,1480)" : {
         "desc" : "Time in seconds the source has taken to rotate the Tomo Angle during X-Ray acquisition.",
         "name" : "Tomo Time",
         "module" : "X-Ray Tomo Acquisition",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : [
         {
            "name" : "Rational Numerator Value",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "module" : "Mammography Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "name" : "Referenced Segment Number",
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
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0310)" : {
         "module" : "X-Ray Acquisition Dose",
         "name" : "Comments on Radiation Dose",
         "desc" : "User-defined comments on any special conditions related to radiation dose encountered during the acquisition of this image.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ]
      },
      "(60xx,0022)" : {
         "module" : "Overlay Plane",
         "name" : "Overlay Description",
         "desc" : "User-defined comments about the overlay.",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See "
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ],
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
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
               ]
            }
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,5100)" : [
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "2C",
            "name" : "Patient Position",
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
            "module" : "General Series"
         },
         {
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "req" : "3",
            "name" : "Patient Position",
            "desc" : [
               "Description of imaging subject's position relative to the equipment.",
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
               ],
               "If present, shall be consistent with Patient Gantry Relationship Code Sequence (0054,0414) and Patient Orientation Modifier Code Sequence (0054,0412)."
            ],
            "module" : "DX Positioning"
         }
      ],
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0028,0011)" : {
         "module" : "Image Pixel",
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : [
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
                        ]
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "name" : "Referenced Frame Number",
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "module" : "Mammography Series",
            "name" : "Referenced Frame Number",
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
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0088,0200)[<0>](0028,1102)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "name" : "Referenced Frame Number",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,7052)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "name" : "Filter Thickness Minimum",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "entity" : "Image",
            "usage" : "U"
         },
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "req" : "3",
            "name" : "Filter Thickness Minimum",
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "module" : "X-Ray Filtration"
         }
      ],
      "(0018,1030)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Protocol Name",
         "module" : "General Series"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0020,000d)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "name" : "Study Instance UID",
            "desc" : "The unique identifier for the Study provided for this Requested Procedure."
         },
         {
            "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
            "name" : "Study Instance UID",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         }
      ],
      "(60xx,3000)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "module" : "Overlay Plane",
         "desc" : [
            "Overlay pixel data.",
            "The order of pixels sent for each overlay is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on.",
            "Overlay data shall be contained in this Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Overlay Data"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,0010)" : {
         "name" : "Contrast/Bolus Agent",
         "desc" : "Contrast or bolus agent",
         "module" : "Contrast/Bolus",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "2"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "module" : "Device",
         "name" : "Device Volume",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            ".."
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(60xx,0040)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
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
         "name" : "Overlay Type",
         "module" : "Overlay Plane"
      },
      "(0018,5104)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "module" : "DX Positioning",
         "desc" : [
            "A Sequence that describes the radiographic method of patient, tube and detector positioning to achieve a well described projection or view.",
            "Only a single Item is permitted in this Sequence.",
            "Shall be consistent with the other Attributes in this Module, if present, but may more specifically describe the image acquisition."
         ],
         "name" : "Projection Eponymous Name Code Sequence"
      },
      "(0060,3000)[<0>](0060,3020)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "req" : "1",
         "name" : "Histogram Data",
         "desc" : "Histogram Data encoded as 32 bit unsigned counts of the number of pixel values in each bin.",
         "module" : "Image Histogram"
      },
      "(0010,2298)" : {
         "name" : "Responsible Person Role",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : [
         {
            "module" : "General Series",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "name" : "Universal Entity ID",
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "usage" : "M"
         },
         {
            "module" : "Mammography Series",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "name" : "Universal Entity ID",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0008,0005)" : {
         "name" : "Specific Character Set",
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
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0018,1049)" : {
         "name" : "Contrast/Bolus Ingredient Concentration",
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1138)" : {
         "module" : "DX Positioning",
         "name" : "Table Angle",
         "desc" : [
            "Angle of table plane in degrees relative to horizontal plane [Gravity plane]. Positive values indicate that the head of the table is upward.",
            "Only meaningful if Table Type (0018,113A) is TILTING."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0018,1000)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Device Serial Number"
      },
      "(0018,1495)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "U",
         "module" : "X-Ray Tomo Acquisition",
         "name" : "Number of Tomosynthesis Source Images",
         "desc" : "The number of source images used to construct this tomosynthetic image. Only meaningful if Tomo Class (0018,1491) is TOMOSYNTHESIS. These may be listed in Source Image Sequence (0008,2112) of the General Image Module."
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "name" : "Container Component ID",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient ID",
         "desc" : "Primary hospital identification number or code for the patient.",
         "module" : "Patient"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "name" : "Image Comments",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "req" : "2",
         "name" : "Intervention Status",
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
         "module" : "Intervention"
      },
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1021)" : {
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0020,000e)" : {
         "module" : "General Series",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,0021)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Date",
         "desc" : "Date the Series started."
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "module" : "Acquisition Context",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0028,1056)" : {
         "req" : "3",
         "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.3"
                  }
               },
               " for further explanation."
            ],
            {
               "title" : "Defined Terms:",
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
               ]
            },
            [
               "When this attribute is not present, the interpretation of the values of Window Center (0028,1050) and Window Width (0028,1051) is linear as in ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "VOI LUT Function"
      },
      "(0018,113a)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3",
         "name" : "Table Type",
         "desc" : {
            "title" : "Defined Terms:",
            "type" : "variablelist",
            "list" : [
               [
                  "FIXED",
                  null
               ],
               [
                  "TILTING",
                  null
               ],
               [
                  "NONE",
                  null
               ]
            ]
         },
         "module" : "DX Positioning"
      },
      "(0028,3010)[<0>](0028,3003)" : [
         {
            "req" : "3",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "name" : "LUT Explanation",
            "desc" : "Free form text explanation of the meaning of the LUT."
         },
         {
            "name" : "LUT Explanation",
            "desc" : "Free form text explanation of the meaning of the LUT.",
            "module" : "VOI LUT",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "req" : "3"
         }
      ],
      "(0018,1508)" : [
         {
            "name" : "Positioner Type",
            "desc" : [
               {
                  "list" : [
                     [
                        "CARM",
                        null
                     ],
                     [
                        "COLUMN",
                        null
                     ],
                     [
                        "MAMMOGRAPHIC",
                        null
                     ],
                     [
                        "PANORAMIC",
                        null
                     ],
                     [
                        "CEPHALOSTAT",
                        null
                     ],
                     [
                        "RIGID",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Defined Terms:"
               },
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
                              "content" : [
                                 "\n                        ",
                                 {
                                    "el" : "para",
                                    "content" : [
                                       "The term CARM can apply to any positioner with 2 degrees of freedom of rotation of the X-Ray beam about the Imaging Subject."
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
                                    "content" : [
                                       "The term COLUMN can apply to any positioner with 1 degree of freedom of rotation of the X-Ray beam about the Imaging Subject."
                                    ]
                                 },
                                 "\n                      "
                              ]
                           },
                           "\n                    "
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "DX Positioning",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "req" : "2"
         },
         {
            "desc" : {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "MAMMOGRAPHIC",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "name" : "Positioner Type",
            "module" : "Mammography Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "req" : "1"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
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
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1C"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0050)" : {
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "Acquisition Context"
      },
      "(0018,7010)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "name" : "Exposures on Detector Since Last Calibration"
      },
      "(0018,1608)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "name" : "Shutter Lower Horizontal Edge"
      },
      "(0018,8150)" : [
         {
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "name" : "Exposure Time in \u00b5S",
            "desc" : "Duration of X-Ray exposure in \u00b5sec."
         },
         {
            "module" : "X-Ray Generation",
            "desc" : "Duration of X-Ray exposure in \u00b5sec.",
            "name" : "Exposure Time in \u00b5S",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U"
         }
      ],
      "(0018,1413)" : [
         {
            "name" : "Deviation Index",
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
            "module" : "DX Detector",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "req" : "3"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "entity" : "Image",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "name" : "Deviation Index",
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116."
         }
      ],
      "(0050,0010)[<0>](0018,1003)" : {
         "desc" : "User-supplied identifier for the device",
         "name" : "Device ID",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0018,1450)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "DX Positioning",
         "desc" : [
            "Angle of the X-Ray beam in degree relative to an orthogonal axis to the detector plane. Positive values indicate that the tilt is toward the head of the table.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The detector plane is assumed to be parallel to the table plane."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Only meaningful if Positioner Type (0018,1508) is COLUMN."
         ],
         "name" : "Column Angulation"
      },
      "(60xx,0011)" : {
         "name" : "Overlay Columns",
         "desc" : "Number of Columns in Overlay.",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "1"
      },
      "(0018,1622)" : {
         "name" : "Shutter Presentation Value",
         "desc" : [
            "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
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
         "module" : "Display Shutter",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0280)" : {
         "module" : "General Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0556)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Acquisition Context Description",
         "desc" : "Free-text description of the image-acquisition context."
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Occupation",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "name" : "Real World Value LUT Data",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ]
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,2114)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Lossy Image Compression Method",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5"
                  },
                  "el" : "xref"
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
         ],
         "module" : "General Image"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,1191)" : [
         {
            "name" : "Anode Target Material",
            "desc" : [
               "The primary material in the anode of the X-Ray source.",
               {
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "TUNGSTEN",
                        null
                     ],
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "entity" : "Image",
            "usage" : "U",
            "req" : "3"
         },
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U",
            "req" : "3",
            "name" : "Anode Target Material",
            "desc" : [
               "The primary material in the anode of the X-Ray source.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "TUNGSTEN",
                        null
                     ],
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ]
                  ],
                  "title" : "Defined Terms:"
               }
            ],
            "module" : "X-Ray Generation"
         }
      ],
      "(0040,0303)" : {
         "module" : "X-Ray Acquisition Dose",
         "desc" : [
            "Typical dimension of the exposed area at the detector plane. If Rectangular: row dimension followed by column; if Round: diameter. Measured in cm.",
            {
               "el" : "note",
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
                                 "el" : "para",
                                 "content" : [
                                    "The exposed area should be consistent with values specified in the X-Ray Collimator Module, if present."
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
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
                                 "content" : [
                                    "This attribute is used in the Radiation Dose Module with units in mm (see ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.4.16"
                                       }
                                    },
                                    ", ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "table_C.4-16",
                                          "xrefstyle" : "select: labelquotedtitle"
                                       }
                                    },
                                    ")."
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
               ]
            }
         ],
         "name" : "Exposed Area",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ]
      },
      "(0040,9096)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Real World Value Mapping Sequence"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0040)" : {
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "module" : "Specimen"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
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
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : [
         {
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ]
         },
         {
            "req" : "1",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "General Series",
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "name" : "Local Namespace Entity ID"
         },
         {
            "module" : "Mammography Series",
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "name" : "Local Namespace Entity ID",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID"
      },
      "(0060,3000)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram",
         "desc" : [
            "Defines a sequence of Histograms.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Histogram Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(2050,0020)" : [
         {
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               },
               "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
            ],
            "name" : "Presentation LUT Shape",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3"
         },
         {
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, other than to account for the value of Photometric Interpretation (0028,0004), such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "list" : [
                     [
                        "IDENTITY",
                        "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2."
                     ],
                     [
                        "INVERSE",
                        "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Presentation LUT Shape",
            "module" : "DX Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1"
         }
      ],
      "(0088,0200)[<0>](0028,0100)" : {
         "name" : "Bits Allocated",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0100,0426)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Photometric Interpretation",
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
         "module" : "General Image"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "module" : "Specimen",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0018,2041)[<0>](0018,2043)" : {
         "desc" : "Coordinates of localizing cursor position with respect to pixels in the image specified by a column (delimiter) row pair. The values shall be in the range 0\\0 (TLHC) to Columns\\Rows (BRHC).",
         "name" : "Localizing Cursor Position",
         "module" : "Mammography Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "req" : "1"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
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
         "name" : "Specimen Preparation Sequence"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Pixel Representation",
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
         ]
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "name" : "Patient's Sex",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0054,0220)[<0>](0054,0222)" : [
         {
            "desc" : [
               "View modifier.",
               "One or more Items are permitted in this Sequence."
            ],
            "name" : "View Modifier Code Sequence",
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "entity" : "Image",
            "usage" : "U",
            "req" : "3"
         },
         {
            "module" : "Mammography Image",
            "desc" : [
               "View modifier.",
               "Zero or more Items shall be included in this Sequence."
            ],
            "name" : "View Modifier Code Sequence",
            "req" : "2",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "usage" : "M"
         }
      ],
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen"
      },
      "(0028,1103)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
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
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0018,700e)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "DX Detector",
         "name" : "Time of Last Detector Calibration",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated."
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "Specimen"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,1300)" : {
         "desc" : [
            "Whether or not the imaged breast contains a breast implant regardless of the visibility of a breast implant in the Pixel Data.",
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
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The value is expected to be YES for all images acquired on a breast that contains a breast implant, even when a breast implant is displaced during image acquisition."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Breast Implant Present",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1620)" : {
         "module" : "Display Shutter",
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertexcolumn of the origin vertex",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "name" : "Vertices of the Polygonal Shutter",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(60xx,0010)" : {
         "module" : "Overlay Plane",
         "desc" : "Number of Rows in Overlay.",
         "name" : "Overlay Rows",
         "req" : "1",
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : [
         {
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "name" : "Protocol Context Sequence",
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence."
         },
         {
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
            "name" : "Protocol Context Sequence",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         }
      ],
      "(0008,2112)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "module" : "General Image",
         "name" : "Referenced Frame Number",
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
      "(0018,1600)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "figure_C.7-4b"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Shutter Shape",
         "module" : "Display Shutter"
      },
      "(0008,0015)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "name" : "Instance Coercion DateTime"
      },
      "(0028,1050)" : [
         {
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1C",
            "name" : "Window Center",
            "desc" : [
               "Defines a Window Center for display.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and VOI LUT Sequence (0028,3010) is not present. May also be present if VOI LUT Sequence (0028,3010) is present."
            ],
            "module" : "DX Image"
         },
         {
            "module" : "VOI LUT",
            "desc" : [
               "Window Center for display.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.11.2.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
            ],
            "name" : "Window Center",
            "req" : "1C",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise."
         }
      ],
      "(0010,2202)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Code Sequence",
         "module" : "Patient"
      },
      "(0018,1110)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "req" : "3",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.7",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "name" : "Distance Source to Detector",
            "module" : "DX Positioning"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "name" : "Distance Source to Detector"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "entity" : "Image",
            "usage" : "M",
            "module" : "Mammography Image",
            "desc" : [
               "Distance in mm from source to detector center on the chest wall line",
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
                                       "This value is traditionally referred to as Source Image Distance (SID)."
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
                                       "See ",
                                       {
                                          "el" : "xref",
                                          "attrs" : {
                                             "xrefstyle" : "select: label",
                                             "linkend" : "sect_C.8.11.7.1.1"
                                          }
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
                        }
                     },
                     "\n                  "
                  ]
               }
            ],
            "name" : "Distance Source to Detector"
         }
      ],
      "(0020,1002)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Images in Acquisition",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0028,1350)" : {
         "desc" : [
            "Indicates whether this image is a partial view, that is a subset of a single view of the breast.",
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
            "If this Attribute is absent, then the image may or may not be a partial view.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may occur when a breast is larger than the active area of the detector."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "If this Attribute is present, its value shall be NO if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.16",
                              "targetdoc" : "PS3.16"
                           },
                           "el" : "olink"
                        },
                        "."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Partial View",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "module" : "Specimen",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0020,0012)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Acquisition Number",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : [
         {
            "usage" : "M",
            "entity" : "Series",
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
            ],
            "name" : "Measurement Units Code Sequence",
            "module" : "General Series"
         },
         {
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Measurement Units Code Sequence",
            "module" : "Mammography Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : [
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "name" : "Concept Code Sequence",
            "module" : "General Series"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "name" : "Concept Code Sequence",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0018,1612)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "name" : "Radius of Circular Shutter",
         "module" : "Display Shutter"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Inter-Marker Distance"
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
         "name" : "Derivation Code Sequence",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0010)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "name" : "Time",
         "module" : "Acquisition Context"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : "Further description in free form text describing the device.",
         "name" : "Device Description"
      },
      "(0008,2228)[<0>](0008,2230)" : [
         {
            "module" : "DX Anatomy Imaged",
            "name" : "Primary Anatomic Structure Modifier Sequence",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this sequence."
            ],
            "req" : "3",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6",
               "table_10-8"
            ]
         },
         {
            "req" : "3",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5",
               "table_10-8"
            ],
            "module" : "Mammography Image",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this sequence."
            ],
            "name" : "Primary Anatomic Structure Modifier Sequence"
         }
      ],
      "(0018,0014)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Contrast/Bolus Administration Route Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : [
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "name" : "DateTime",
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "module" : "Mammography Series",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0018,1006)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "desc" : "Identifier of the grid",
         "name" : "Grid ID"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "req" : "3",
            "name" : "Scheduled Protocol Code Sequence",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
            "module" : "General Series"
         },
         {
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
            "name" : "Scheduled Protocol Code Sequence"
         }
      ],
      "(0008,2112)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "General Image",
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
         "name" : "Source Image Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : [
         {
            "module" : "General Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "req" : "1",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence"
         }
      ],
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "General Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
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
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "SOP Common"
      },
      "(0018,702b)" : {
         "module" : "DX Detector",
         "name" : "Detector Manufacturer's Model Name",
         "desc" : "Model name of the detector component of the acquisition system",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0028,0006)" : {
         "name" : "Planar Configuration",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               }
            },
            " for further explanation."
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C"
      },
      "(0028,0004)" : [
         {
            "module" : "Image Pixel",
            "name" : "Photometric Interpretation",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.2"
                  }
               },
               " for further explanation."
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "MONOCHROME1",
                        null
                     ],
                     [
                        "MONOCHROME2",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "name" : "Photometric Interpretation"
         }
      ],
      "(0018,1460)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomo Acquisition",
         "desc" : "Distance in mm between the table surface and the sharp image plane.",
         "name" : "Tomo Layer Height"
      },
      "(0010,2160)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "name" : "Ethnic Group"
      },
      "(0008,2228)" : [
         {
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6",
               "table_10-8"
            ],
            "req" : "3",
            "name" : "Primary Anatomic Structure Sequence",
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this sequence."
            ],
            "module" : "DX Anatomy Imaged"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5",
               "table_10-8"
            ],
            "usage" : "M",
            "module" : "Mammography Image",
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this sequence."
            ],
            "name" : "Primary Anatomic Structure Sequence"
         }
      ],
      "(0028,1040)" : {
         "mod_tables" : [
            "table_C.8-70"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The relationship between the Pixel sample values and the X-Ray beam intensity.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "LIN",
                     "Linearly proportional to X-Ray beam intensity"
                  ],
                  [
                     "LOG",
                     "Logarithmically proportional to X-Ray beam intensity"
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Pixel Intensity Relationship",
         "module" : "DX Image"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common"
      },
      "(0018,7001)" : {
         "module" : "DX Detector",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "name" : "Detector Temperature",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "name" : "Device Diameter Units",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "title" : "Defined Terms:",
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
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "2C"
      },
      "(0040,8302)" : {
         "desc" : [
            "Average entrance dose value measured in mGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Entrance Dose in mGy",
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0018,1470)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "req" : "3",
         "desc" : "Angle span in degrees of rotation of X-Ray Source during X-Ray acquisition.",
         "name" : "Tomo Angle",
         "module" : "X-Ray Tomo Acquisition"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "module" : "Specimen",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1704)" : {
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the right edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Collimator Right Vertical Edge",
         "module" : "X-Ray Collimator"
      },
      "(0028,2110)" : [
         {
            "module" : "General Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "type" : "variablelist",
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
                  "title" : "Enumerated Values:"
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
            "name" : "Lossy Image Compression",
            "req" : "3",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "module" : "DX Image",
            "name" : "Lossy Image Compression",
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
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
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
               "table_C.8-70"
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date"
      },
      "(0060,3000)[<0>](0060,3010)" : {
         "module" : "Image Histogram",
         "name" : "Histogram Explanation",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "desc" : "Width in mm of container component.",
         "name" : "Container Component Width",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,2041)[<0>](0018,2044)" : {
         "name" : "Calculated Target Position",
         "desc" : [
            "The calculated target position (x, y, z) in mm in an equipment relative right-handed coordinate system where the origin is under the central X-Ray beam at the chest wall, and a z value of zero is located at the surface that the breast is in contact with that is closest to the detector.",
            "X is parallel to the chest wall, y is positive toward the patient's nipple, and z is positive toward the X-Ray source."
         ],
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0028,1052)" : {
         "module" : "DX Image",
         "name" : "Rescale Intercept",
         "desc" : [
            "The value b in the relationship between stored values (SV) in Pixel Data (7FE0,0010) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            {
               "list" : [
                  [
                     "0",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0400,0500)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.4.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Encrypted Attributes Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0060,3000)[<0>](0060,3004)" : {
         "module" : "Image Histogram",
         "name" : "Histogram First Bin Value",
         "desc" : [
            "The stored pixel value corresponding to the lowest pixel value counted in the first bin. All image pixel values less than this value are not included in the histogram.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "usage" : "U"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0018,7046)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Grid Aspect Ratio",
         "desc" : "Ratio of the vertical spacing and horizontal spacing of the X-Ray absorbing material used in the grid. Specified by a pair of integer values where the first value is the vertical size, and the second value is the horizontal size.",
         "module" : "X-Ray Grid"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.4"
                  }
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "name" : "Pixel Data"
      },
      "(0008,114a)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time",
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time",
            "module" : "Mammography Series"
         }
      ],
      "(0008,1090)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "name" : "Manufacturer's Model Name"
      },
      "(60xx,1500)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "name" : "Overlay Label"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "module" : "Acquisition Context",
         "name" : "Referenced Frame Numbers",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0018,1048)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
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
         "name" : "Contrast/Bolus Ingredient",
         "module" : "Contrast/Bolus"
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight",
         "module" : "Patient Study"
      },
      "(0040,0518)" : {
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Container Type Code Sequence",
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence"
         }
      ],
      "(0018,1405)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "name" : "Relative X-Ray Exposure",
         "desc" : [
            "Indication of the applied dose, in manufacturer specific units.",
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
                                 "content" : [
                                    "This may be a calculated or measured value. Examples are the detector entrance dose (K",
                                    {
                                       "el" : "subscript",
                                       "content" : [
                                          "B"
                                       ]
                                    },
                                    "), the CR sensitivity value (S), or the logarithmic median (lgM)."
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
                                    "DICOM specifies standard Attributes in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "table_10-23"
                                       }
                                    },
                                    " 'Exposure Index Macro', which are recommended."
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
         ]
      },
      "(0018,702a)" : {
         "module" : "DX Detector",
         "name" : "Detector Manufacturer Name",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0020,0011)" : {
         "module" : "General Series",
         "name" : "Series Number",
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "name" : "Specimen Localization Content Item Sequence",
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
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "module" : "Specimen"
      },
      "(0008,0070)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "name" : "Manufacturer"
      },
      "(0020,0020)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "req" : "2C",
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
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "name" : "Patient Orientation",
            "module" : "General Image"
         },
         {
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1C",
            "desc" : [
               "Patient direction of the rows and columns of the image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if View Code Sequence (0054,0220) is not present or is present with an Item value other than (G-8300, SRT, \"tissue specimen\") or (G-8310, SRT, \"tissue specimen from breast\"). May be present otherwise."
            ],
            "name" : "Patient Orientation",
            "module" : "DX Image"
         }
      ],
      "(0008,1250)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "2"
      },
      "(60xx,0050)" : {
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Overlay Origin",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "1"
      },
      "(0020,0010)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study ID",
         "desc" : "User or equipment generated Study identifier."
      },
      "(0040,0275)[<0>](0032,1060)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "name" : "Requested Procedure Description",
            "desc" : "Institution-generated administrative description or classification of Requested Procedure."
         },
         {
            "module" : "Mammography Series",
            "name" : "Requested Procedure Description",
            "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0018,1005)" : {
         "module" : "X-Ray Generation",
         "name" : "Generator ID",
         "desc" : "Identifier of the generator",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0018,7006)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "DX Detector",
         "name" : "Detector Description",
         "desc" : "Free text description of detector."
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "name" : "Intervention Drug Start Time",
         "desc" : "Time of administration of the interventional drug.",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
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
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "2C"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0018,2041)[<0>](0018,2046)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "name" : "Displayed Z Value",
         "desc" : [
            "The z value in mm displayed to the user at the time of biopsy.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This may be the same as the z value of Calculated Target Position or different in direction or reference point, such as relative to the compression paddle."
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
                                    "This is not the distance that the needle was inserted, particularly for a lateral (parallel) approach."
                                 ],
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : [
         {
            "name" : "Issuer of Accession Number Sequence",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this sequence."
            ],
            "module" : "General Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "req" : "3"
         },
         {
            "module" : "Mammography Series",
            "name" : "Issuer of Accession Number Sequence",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this sequence."
            ],
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0018,1490)" : {
         "module" : "X-Ray Tomo Acquisition",
         "name" : "Tomo Type",
         "desc" : [
            "Type of tomography.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ]
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "module" : "General Image",
         "name" : "Samples per Pixel",
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,001b)" : {
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Procedure Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0028,1352)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M",
         "module" : "Mammography Image",
         "name" : "Partial View Code Sequence",
         "desc" : [
            "Sequence that describes the portion or section of the breast captured in a partial view image.",
            "Only one or two Items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7.1.3"
                  }
               },
               "."
            ],
            "If this Attribute is absent, then the image may or may not be a partial view.",
            "This Attribute shall not be present if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.16",
                              "targetptr" : "PS3.16",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        "."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "module" : "Specimen",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,7060)" : {
         "name" : "Exposure Control Mode",
         "desc" : [
            "Type of exposure control.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MANUAL",
                     null
                  ],
                  [
                     "AUTOMATIC",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "X-Ray Generation",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,7040)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "X-Ray Grid",
         "desc" : "The X-Ray absorbing material used in the grid.",
         "name" : "Grid Absorbing Material"
      },
      "(0040,0254)" : {
         "module" : "General Series",
         "name" : "Performed Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0028,0300)" : {
         "name" : "Quality Control Image",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "name" : "Person Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
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
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime"
      },
      "(0018,1710)" : {
         "module" : "X-Ray Collimator",
         "name" : "Center of Circular Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Location of the center of the circular collimator with respect to pixels in the image given as row and column. See ",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0018,11a2)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : "The compression force applied to the body part during exposure, measured in Newtons.",
         "name" : "Compression Force"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : [
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Series"
         },
         {
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "Mammography Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1"
         }
      ],
      "(0018,1153)" : [
         {
            "name" : "Exposure in \u00b5As",
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3"
         },
         {
            "name" : "Exposure in \u00b5As",
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
            "module" : "X-Ray Generation",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,1624)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "desc" : [
            "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Shutter Presentation Color CIELab Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Certified Timestamp",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
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
         "name" : "Universal Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Reason for the attribute modification.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "COERCE",
                     "Replace values of attributes such as Patient Name, ID, Accession Number, for example, during import of media from an external institution, or reconciliation against a master patient index."
                  ],
                  [
                     "CORRECT",
                     "Replace incorrect values, such as Patient Name or ID, for example, when incorrect worklist item was chosen or operator input error."
                  ]
               ]
            }
         ],
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common"
      },
      "(0018,1040)" : {
         "module" : "Contrast/Bolus",
         "desc" : "Administration route of contrast agent",
         "name" : "Contrast/Bolus Route",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0050,001a)" : {
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
         "name" : "Container Component Material",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0028,1041)" : {
         "module" : "DX Image",
         "desc" : [
            "The sign of the relationship between the Pixel sample values stored in Pixel Data (7FE0,0010) and the X-Ray beam intensity.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1",
                     "Lower pixel values correspond to less X-Ray beam intensity"
                  ],
                  [
                     "-1",
                     "Higher pixel values correspond to less X-Ray beam intensity"
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Pixel Intensity Relationship Sign",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0060,3000)[<0>](0060,3006)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Histogram Last Bin Value",
         "desc" : [
            "The stored pixel value corresponding to the highest pixel value counted in the last bin. All image pixel values greater than this value are not included in the histogram.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Image Histogram"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Numeric Value",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Numeric Value",
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : [
         {
            "name" : "Content Item Modifier Sequence",
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
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         },
         {
            "name" : "Content Item Modifier Sequence",
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.4.10.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "req" : "3"
         }
      ],
      "(0018,7011)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "name" : "Exposures on Detector Since Manufactured",
         "module" : "DX Detector"
      },
      "(0018,7020)" : {
         "module" : "DX Detector",
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as Detector Element Spacing (0018,7022) due to the presence of spacing material between detector elements."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Detector Element Physical Size",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0028,0101)" : [
         {
            "name" : "Bits Stored",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " for further explanation."
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "module" : "DX Image",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "6",
                        null
                     ],
                     [
                        "7",
                        null
                     ],
                     [
                        "8",
                        null
                     ],
                     [
                        "9",
                        null
                     ],
                     [
                        "10",
                        null
                     ],
                     [
                        "11",
                        null
                     ],
                     [
                        "12",
                        null
                     ],
                     [
                        "13",
                        null
                     ],
                     [
                        "14",
                        null
                     ],
                     [
                        "15",
                        null
                     ],
                     [
                        "16",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ]
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0050,0010)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Sequence",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,7026)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Detector Active Dimension(s)",
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
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Dimensions (0018,1149), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "DX Detector"
      },
      "(0008,2218)[<0>](0008,2220)" : [
         {
            "module" : "DX Anatomy Imaged",
            "name" : "Anatomic Region Modifier Sequence",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance",
               "One or more Items are permitted in this sequence."
            ],
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6"
            ],
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "3",
            "name" : "Anatomic Region Modifier Sequence",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance.",
               "One or more Items are permitted in this sequence."
            ],
            "module" : "Mammography Image"
         }
      ],
      "(0018,7048)" : {
         "module" : "X-Ray Grid",
         "desc" : [
            "Period in mSec of reciprocation cycle.",
            "Only meaningful if a value of Grid (0018,1166) is RECIPROCATING."
         ],
         "name" : "Grid Period",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ]
      },
      "(0018,1530)" : {
         "module" : "DX Positioning",
         "desc" : [
            "Angle of the X-Ray beam in the row direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward higher numbered columns. Negative values indicate that the X-Ray beam is tilted toward lower numbered columns.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  }
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "name" : "Detector Primary Angle",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ]
      },
      "(0018,7054)" : [
         {
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "name" : "Filter Thickness Maximum",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "entity" : "Image",
            "usage" : "U",
            "req" : "3"
         },
         {
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "req" : "3",
            "name" : "Filter Thickness Maximum",
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "module" : "X-Ray Filtration"
         }
      ],
      "(0040,0520)[<0>](0050,0013)" : {
         "module" : "Specimen",
         "name" : "Container Component Thickness",
         "desc" : "Thickness in mm of container component",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "module" : "General Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "name" : "High Bit",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Digital Signature DateTime"
      },
      "(0008,1111)" : [
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "req" : "3"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-68"
            ],
            "module" : "DX Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "name" : "Referenced Performed Procedure Step Sequence"
         }
      ],
      "(0040,0316)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Organ Dose",
         "desc" : [
            "Average organ dose value measured in dGy during the acquisition of this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be an estimated value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition Dose"
      },
      "(0008,1030)" : {
         "module" : "General Study",
         "name" : "Study Description",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0010,2299)" : {
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0028,1101)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0012,0050)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0008,1040)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "name" : "Patient Breed Description",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0018,1046)" : {
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "name" : "Contrast Flow Rate",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject"
      },
      "(0018,7064)" : {
         "module" : "X-Ray Generation",
         "name" : "Exposure Status",
         "desc" : [
            "Whether the exposure was normally completed or not.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NORMAL",
                     null
                  ],
                  [
                     "ABORTED",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0028,0120)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "desc" : "Instance UID of Study to which the related Series belongs",
         "name" : "Study Instance UID",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "module" : "General Image",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1250)" : {
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Related Series Sequence",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
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
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                 "el" : "para",
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
               ]
            }
         ]
      },
      "(0018,1702)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the left edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ],
         "name" : "Collimator Left Vertical Edge"
      },
      "(0018,1602)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "module" : "Display Shutter",
         "name" : "Shutter Left Vertical Edge",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "name" : "Retrieve URI",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common"
      },
      "(7fe0,0010)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Pixel Data",
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
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,11a0)" : [
         {
            "module" : "DX Positioning",
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
            "name" : "Body Part Thickness",
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-72"
            ]
         },
         {
            "req" : "3",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
            "name" : "Body Part Thickness"
         }
      ],
      "(0100,0424)" : {
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0028,1051)" : [
         {
            "module" : "DX Image",
            "name" : "Window Width",
            "desc" : [
               [
                  "Window Width for display. See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Window Center (0028,1050) is sent."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "entity" : "Image",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT",
            "name" : "Window Width",
            "desc" : [
               [
                  "Window Width for display. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.2.1.2"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Window Center (0028,1050) is sent."
            ]
         }
      ],
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "General Image",
         "name" : "Planar Configuration",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0018,1531)" : {
         "module" : "DX Positioning",
         "name" : "Detector Secondary Angle",
         "desc" : [
            "Angle of the X-Ray beam in the column direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward lower numbered rows. Negative values indicate that the X-Ray beam is tilted toward higher numbered rows.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-72"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Value Type",
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
      "(0028,0103)" : [
         {
            "name" : "Pixel Representation",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
               {
                  "title" : "Enumerated Values:",
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
                  ]
               }
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "name" : "Pixel Representation",
            "desc" : [
               "Data representation of the pixel samples.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0000H",
                        "Unsigned Integer"
                     ]
                  ]
               }
            ],
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0007)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "req" : "3",
            "name" : "Scheduled Procedure Step Description",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
            "module" : "General Series"
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
            "name" : "Scheduled Procedure Step Description",
            "module" : "Mammography Series"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         "module" : "Patient"
      },
      "(60xx,1301)" : {
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "3",
         "name" : "ROI Area",
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
         "module" : "Overlay Plane"
      },
      "(0018,1156)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "Type of rectification used in the X-Ray generator.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "SINGLE PHASE",
                        null
                     ],
                     [
                        "THREE PHASE",
                        null
                     ],
                     [
                        "CONST POTENTIAL",
                        null
                     ]
                  ],
                  "title" : "Defined Terms:"
               }
            ],
            "name" : "Rectification Type",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U"
         },
         {
            "desc" : [
               "Type of rectification used in the X-Ray generator.",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "SINGLE PHASE",
                        null
                     ],
                     [
                        "THREE PHASE",
                        null
                     ],
                     [
                        "CONST POTENTIAL",
                        null
                     ]
                  ]
               }
            ],
            "name" : "Rectification Type",
            "module" : "X-Ray Generation",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3"
         }
      ],
      "(0010,0200)" : {
         "name" : "Quality Control Subject",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,7065)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "req" : "3",
         "name" : "Phototimer Setting",
         "desc" : "Nominal percentage phototimer setting, where a more positive value indicates greater exposure and a more negative value indicates less exposure.",
         "module" : "X-Ray Generation"
      },
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "name" : "Modality",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "module" : "General Series"
         },
         {
            "module" : "DX Series",
            "name" : "Modality",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "DX",
                        null
                     ],
                     [
                        "PX",
                        null
                     ],
                     [
                        "IO",
                        null
                     ],
                     [
                        "MG",
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
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-68"
            ],
            "usage" : "M"
         },
         {
            "module" : "Mammography Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MG",
                        null
                     ]
                  ]
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.3.1.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Modality",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0275)" : [
         {
            "module" : "General Series",
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this sequence."
            ],
            "name" : "Request Attributes Sequence",
            "req" : "3",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M"
         },
         {
            "module" : "Mammography Series",
            "name" : "Request Attributes Sequence",
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this sequence."
            ],
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73"
            ]
         }
      ],
      "(0018,1606)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C",
         "name" : "Shutter Upper Horizontal Edge",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "module" : "Display Shutter"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "Mammography Series",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0040,9096)[<0>](0040,9216)" : {
         "module" : "General Image",
         "name" : "Real World Value First Value Mapped",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "General Series",
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
                        "el" : "para"
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "name" : "Referenced Frame Number"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
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
            "name" : "Referenced Frame Number"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "Specimen"
      },
      "(0018,1114)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : "Ratio of Source Image Receptor Distance (SID) over Source Object Distance (SOD).",
         "name" : "Estimated Radiographic Magnification Factor"
      },
      "(0028,2000)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
         ],
         "name" : "ICC Profile",
         "module" : "Image Pixel"
      },
      "(0028,1054)" : {
         "module" : "DX Image",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            {
               "list" : [
                  [
                     "US",
                     "Unspecified"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Rescale Type",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-70"
         ]
      },
      "(0018,1401)" : {
         "module" : "DX Image",
         "name" : "Acquisition Device Processing Code",
         "desc" : [
            "Code representing the device-specific processing associated with the image (e.g., Organ Filtering code)",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Code is manufacturer specific but provides useful annotation information to the knowledgeable observer."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-70"
         ]
      },
      "(0018,11a4)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "DX Positioning",
         "desc" : "Description of the compression paddle, if compression was applied to the body part during exposure.",
         "name" : "Paddle Description"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
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
            "name" : "Universal Entity ID Type"
         },
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "Mammography Series",
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
            "name" : "Universal Entity ID Type"
         }
      ],
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Referring Physician Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0018,7044)" : {
         "module" : "X-Ray Grid",
         "name" : "Grid Pitch",
         "desc" : "The pitch in mm of the X-Ray absorbing material used in the grid.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ]
      },
      "(0054,0410)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "DX Positioning",
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to gravity.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Patient Orientation Code Sequence"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(60xx,0100)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "1",
         "name" : "Overlay Bits Allocated",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See PS3.3-2004."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Overlay Plane"
      },
      "(0018,a001)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
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
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         },
         {
            "module" : "Mammography Series",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "name" : "Numeric Value"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "name" : "Name of Physician(s) Reading Study",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0054,0410)[<0>](0054,0412)" : {
         "name" : "Patient Orientation Modifier Code Sequence",
         "desc" : [
            "Patient Orientation Modifier.",
            "Required if needed to fully specify the orientation of the patient with respect to gravity.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "DX Positioning",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "name" : "Specimen Detailed Description"
      },
      "(0008,1050)" : {
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performing Physician's Name",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "Acquisition Context"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1020)" : {
         "module" : "General Equipment",
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
         "name" : "Software Versions",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0008,1048)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Physician(s) of Record",
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
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : [
         {
            "module" : "General Series",
            "name" : "Requested Procedure Code Sequence",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this sequence."
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this sequence."
            ],
            "name" : "Requested Procedure Code Sequence",
            "module" : "Mammography Series"
         }
      ],
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,7050)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "entity" : "Image",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "The X-Ray absorbing material used in the filter. May be multi-valued.",
               {
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "ALUMINUM",
                        null
                     ],
                     [
                        "COPPER",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ],
                     [
                        "NIOBIUM",
                        null
                     ],
                     [
                        "EUROPIUM",
                        null
                     ],
                     [
                        "LEAD",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "name" : "Filter Material"
         },
         {
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration",
            "desc" : [
               "The X-Ray absorbing material used in the filter. May be multi-valued.",
               {
                  "list" : [
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "ALUMINUM",
                        null
                     ],
                     [
                        "COPPER",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ],
                     [
                        "NIOBIUM",
                        null
                     ],
                     [
                        "EUROPIUM",
                        null
                     ],
                     [
                        "LEAD",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Defined Terms:"
               }
            ],
            "name" : "Filter Material"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Identifier Type Code",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,7022)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3",
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Detector Element Spacing",
         "module" : "DX Detector"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0018,0012)" : {
         "name" : "Contrast/Bolus Agent Sequence",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : [
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "name" : "UID",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "module" : "General Series"
         },
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID",
            "module" : "Mammography Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Content Item Modifier Sequence"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
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
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "el" : "para"
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
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate of Signer",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID",
            "module" : "Mammography Series"
         }
      ],
      "(0018,704c)" : {
         "module" : "X-Ray Grid",
         "desc" : "Focal distance in mm of a FOCUSED grid.",
         "name" : "Grid Focal Distance",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ]
      },
      "(0008,2111)" : [
         {
            "module" : "General Image",
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
            "name" : "Derivation Description",
            "req" : "3",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "req" : "3",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "A text description of how this image was derived.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.4",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Derivation Description"
         }
      ],
      "(0028,3010)[<0>](0028,3006)" : [
         {
            "module" : "DX Image",
            "name" : "LUT Data",
            "desc" : "LUT Data in this Sequence.",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ]
         },
         {
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "entity" : "Image",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "req" : "1",
            "desc" : "LUT Data in this Sequence.",
            "name" : "LUT Data",
            "module" : "VOI LUT"
         }
      ],
      "(0088,0200)[<0>](0028,0106)" : {
         "module" : "General Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "name" : "Value Type",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "3"
      },
      "(0012,0062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Identity Removed",
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
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "desc" : [
            "Uniquely identifies the SOP Class. See ",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "module" : "Specimen",
         "name" : "Container Component Length",
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U"
      },
      "(0028,0106)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value"
      },
      "(0018,1610)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "name" : "Center of Circular Shutter",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,1047)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "name" : "Contrast Flow Duration",
         "module" : "Contrast/Bolus"
      },
      "(0018,0060)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "name" : "KVP"
         },
         {
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3",
            "name" : "KVP",
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "module" : "X-Ray Generation"
         }
      ],
      "(0018,0036)[<0>](0054,0302)" : {
         "module" : "Intervention",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Administration Route Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "General Series"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "name" : "Performed Protocol Code Sequence",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,7004)" : {
         "desc" : [
            "The type of detector used to acquire this image.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Detector Type",
         "module" : "DX Detector",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "req" : "2"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Specimen"
      },
      "(0018,1708)" : {
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the lower edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ],
         "name" : "Collimator Lower Horizontal Edge",
         "module" : "X-Ray Collimator"
      },
      "(0008,0023)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Content Date"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0028,3010)" : [
         {
            "module" : "DX Image",
            "name" : "VOI LUT Sequence",
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "One or more Items shall be included in this Sequence.",
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and Window Center (0028,1050) is not present. May also be present if Window Center (0028,1050) is present."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "name" : "VOI LUT Sequence",
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               "One or more Items shall be included in this sequence.",
               "Required if Window Center (0028,1050) is not present. May be present otherwise."
            ],
            "module" : "VOI LUT",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "entity" : "Image",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "req" : "1C"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "General Image"
      },
      "(0040,0520)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Container Component Sequence",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0028,0301)" : [
         {
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
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
            "name" : "Burned In Annotation",
            "module" : "General Image"
         },
         {
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1",
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
               }
            ],
            "name" : "Burned In Annotation",
            "module" : "DX Image"
         }
      ],
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0028,0010)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "name" : "Rows",
         "module" : "Image Pixel"
      },
      "(0018,7028)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3",
         "name" : "Detector Active Origin",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the active detector area from the TLHC of a rectangle circumscribing the physical detector area, measured in physical detector pixels as a row offset followed by a column offset.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.4.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Detector"
      },
      "(0010,0010)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "module" : "Patient"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Container Component Description",
         "desc" : "Container component text description.",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "name" : "Device Diameter",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0040,a390)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Consent for Distribution Flag",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "title" : "Enumerated Values:",
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
               ]
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0012,0042)" : {
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
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "General Image"
      },
      "(0028,1055)" : [
         {
            "module" : "DX Image",
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "name" : "Window Center & Width Explanation",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "module" : "VOI LUT",
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "name" : "Window Center & Width Explanation"
         }
      ],
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
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
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "name" : "Container Identifier",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "module" : "General Series"
         },
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "name" : "Date",
            "module" : "Mammography Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0028,3010)[<0>](0028,3002)" : [
         {
            "module" : "DX Image",
            "desc" : [
               "Specifies the format of the LUT Data in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "name" : "LUT Descriptor",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M"
         },
         {
            "req" : "1",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT",
            "name" : "LUT Descriptor",
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
            ]
         }
      ],
      "(0010,1000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0018,701a)" : {
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "name" : "Detector Binning",
         "module" : "DX Detector",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the device"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : [
         {
            "module" : "General Series",
            "name" : "Time",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "module" : "Mammography Series",
            "name" : "Time",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         }
      ],
      "(0012,0082)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0018,1111)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "module" : "DX Positioning",
            "name" : "Distance Source to Patient",
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
               {
                  "el" : "note",
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
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
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
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
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
                                    "el" : "para",
                                    "content" : [
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
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
                                    "content" : [
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
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
                  ]
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ]
         },
         {
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
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
                                    "el" : "para",
                                    "content" : [
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
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
                                    "el" : "para",
                                    "content" : [
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
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
                                    "el" : "para",
                                    "content" : [
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
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
                                    "content" : [
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
                                    ]
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
               }
            ],
            "name" : "Distance Source to Patient"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "module" : "Mammography Image",
            "desc" : [
               "Distance in mm from source to the breast support side that is closest to the Imaging Subject, as measured along the X-Ray beam vector.",
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
                              "content" : [
                                 "\n                        ",
                                 {
                                    "content" : [
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
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
                                       "See notes for this attribute in ",
                                       {
                                          "attrs" : {
                                             "linkend" : "sect_C.8.11.5",
                                             "xrefstyle" : "select: label"
                                          },
                                          "el" : "xref"
                                       },
                                       " DX Positioning Module."
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
                                       "See ",
                                       {
                                          "attrs" : {
                                             "xrefstyle" : "select: label",
                                             "linkend" : "sect_C.8.11.7.1.1"
                                          },
                                          "el" : "xref"
                                       },
                                       " for description of X-Ray beam vector."
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
            "name" : "Distance Source to Patient"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "name" : "Referenced SOP Sequence",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "module" : "General Series"
         },
         {
            "module" : "Mammography Series",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,1044)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "name" : "Contrast/Bolus Total Dose"
      },
      "(0040,051a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Container Description",
         "desc" : "Description of the container."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "module" : "General Image",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "name" : "LUT Label",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,1201)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
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
         ],
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0012,0020)" : {
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Red Palette Color Lookup Table Data",
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
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
         "name" : "Purpose of Reference Code Sequence",
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "module" : "General Image"
      },
      "(0018,5101)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "name" : "View Position",
         "desc" : [
            "Radiographic view of the image relative to the imaging subject's orientation.",
            [
               "Shall be consistent with View Code Sequence (0054,0220). See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.5.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "module" : "Acquisition Context"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Series Description",
         "module" : "Clinical Trial Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)" : [
         {
            "module" : "General Series",
            "desc" : [
               "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
               "One or more items are permitted in this sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_10.6.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "name" : "Referenced Study Sequence",
            "req" : "3",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "req" : "3",
            "name" : "Referenced Study Sequence",
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
            "module" : "Mammography Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series"
      },
      "(0040,0312)" : {
         "name" : "X-Ray Output",
         "desc" : [
            "The X-Ray output at the patient entrance surface and kVp used to acquire the image, measured in mGy/mAs.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition Dose",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.1",
                     "xrefstyle" : "select: label"
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
         "name" : "ICC Profile",
         "module" : "General Image",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "desc" : [
            "Length in mm of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "name" : "Device Length"
      },
      "(0040,0512)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Container Identifier",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : [
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Concept Name Code Sequence",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ]
         },
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "module" : "Mammography Series",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1"
         }
      ],
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "title" : "Defined Terms:",
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
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
         "name" : "MAC Algorithm",
         "module" : "SOP Common"
      },
      "(0008,0018)" : {
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "module" : "Intervention",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Intervention Drug Code Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0020,0052)" : {
         "module" : "Frame of Reference",
         "name" : "Frame of Reference UID",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "C - Required if multiple images are obtained without releasing breast compression"
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "req" : "3",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "name" : "Intervention Description",
         "module" : "Intervention"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,7058)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "name" : "Filter Beam Path Length Maximum",
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "entity" : "Image",
            "usage" : "U"
         },
         {
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "req" : "3",
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "name" : "Filter Beam Path Length Maximum",
            "module" : "X-Ray Filtration"
         }
      ],
      "(0018,1190)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "req" : "3",
         "name" : "Focal Spot(s)",
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "module" : "X-Ray Generation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "name" : "Value Type",
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
      "(0018,1604)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "name" : "Shutter Right Vertical Edge",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0012,0063)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "De-identification Method",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                 "el" : "para",
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0018,1412)" : [
         {
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "3",
            "name" : "Target Exposure Index",
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "module" : "DX Detector"
         },
         {
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "req" : "3",
            "name" : "Target Exposure Index",
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "module" : "X-Ray Acquisition Dose"
         }
      ],
      "(0008,1049)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "name" : "Identifier Type Code"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0018,1491)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Form of tomography:",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Tomo Class",
         "module" : "X-Ray Tomo Acquisition"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1720)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Vertices of the Polygonal Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "module" : "X-Ray Collimator"
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "req" : "1"
         },
         {
            "module" : "DX Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "SOP Instance Status",
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(60xx,1303)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "3",
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
         "name" : "ROI Standard Deviation",
         "module" : "Overlay Plane"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "General Series",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0515)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Alternate Container Identifier Sequence",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence."
      },
      "(0028,1053)" : {
         "mod_tables" : [
            "table_C.8-70"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1",
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
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Rescale Slope",
         "module" : "DX Image"
      },
      "(0018,1043)" : {
         "desc" : "Time of end of contrast injection",
         "name" : "Contrast/Bolus Stop Time",
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0100)" : [
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "name" : "Bits Allocated",
            "module" : "Image Pixel",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "desc" : [
               "Number of bits allocated for each pixel sample.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "8",
                        null
                     ],
                     [
                        "16",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "name" : "Bits Allocated",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0008,114a)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1042)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "U",
         "module" : "Contrast/Bolus",
         "name" : "Contrast/Bolus Start Time",
         "desc" : "Time of start of injection"
      },
      "(0008,1115)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
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
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "General Series"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "Mammography Series"
         }
      ],
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "name" : "Station Name",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0009)" : [
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Identifier that identifies the Scheduled Procedure Step.",
               "Required if procedure was scheduled.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "el" : "para",
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ]
                     },
                     "\n              "
                  ]
               }
            ],
            "name" : "Scheduled Procedure Step ID",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "desc" : [
               "Identifier that identifies the Scheduled Procedure Step.",
               "Required if procedure was scheduled.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "el" : "para",
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ]
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Scheduled Procedure Step ID"
         }
      ],
      "(0008,0008)" : [
         {
            "name" : "Image Type",
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
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3"
         },
         {
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.3.1.1"
                     }
                  },
                  " for specialization."
               ]
            ],
            "name" : "Image Type",
            "module" : "DX Image"
         },
         {
            "mod_tables" : [
               "table_C.8-74"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "1",
            "name" : "Image Type",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7.1.4"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "module" : "Mammography Image"
         }
      ],
      "(0040,9096)[<0>](0040,9224)" : {
         "module" : "General Image",
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "name" : "Real World Value Intercept",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "module" : "SOP Common"
      },
      "(0040,0555)" : {
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "name" : "Acquisition Context Sequence",
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "2"
      },
      "(0018,2041)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "name" : "Biopsy Target Sequence",
         "desc" : "Sequence that identifies the targets of a biopsy procedure. One or more Items are permitted in this sequence, where the coordinate system is the same for all Items within a pair of stereo images."
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
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
         "name" : "Signature",
         "module" : "SOP Common"
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L",
                     "targetdoc" : "PS3.16"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Body Part Examined",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
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
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "module" : "General Series"
      },
      "(0018,7062)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "req" : "3",
         "desc" : [
            "Text description of the mechanism of exposure control.",
            "May describe the number and type of exposure sensors or position of the sensitive area of the imaging detector."
         ],
         "name" : "Exposure Control Mode Description",
         "module" : "X-Ray Generation"
      },
      "(0008,0051)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : "Manufacturer of the device",
         "name" : "Manufacturer"
      },
      "(0018,1160)" : [
         {
            "desc" : [
               "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "STRIP",
                        null
                     ],
                     [
                        "WEDGE",
                        null
                     ],
                     [
                        "BUTTERFLY",
                        null
                     ],
                     [
                        "MULTIPLE",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ]
               },
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "name" : "Filter Type",
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "req" : "3"
         },
         {
            "req" : "3",
            "usage" : "U",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration",
            "desc" : [
               "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "STRIP",
                        null
                     ],
                     [
                        "WEDGE",
                        null
                     ],
                     [
                        "BUTTERFLY",
                        null
                     ],
                     [
                        "MULTIPLE",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ]
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Filter Type"
         }
      ],
      "(0040,0555)[<0>](0040,a121)" : {
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
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
         "name" : "Date",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen"
      },
      "(0018,7008)" : {
         "desc" : "Text description of operating mode of detector (implementation specific).",
         "name" : "Detector Mode",
         "module" : "DX Detector",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "req" : "3"
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
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,002A))",
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
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0018,5104))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0410))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0412))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0414))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0028,1352))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}