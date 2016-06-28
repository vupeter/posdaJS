var data = {
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Time",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         },
         {
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Time",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         }
      ],
      "(0038,0064)[<0>](0040,0033)" : {
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
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0020,000d)" : {
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Unique identifier for the Study."
      },
      "(0024,0034)[<0>](0024,0054)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "False Positives Estimate",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "Estimated percentage of all patient responses that occurred at a time when no visual stimulus was present (false positive responses), as percent.",
            "Required if False Positives Estimate Flag (0024,0053) is YES."
         ]
      },
      "(0024,0120)" : {
         "usage" : "M",
         "name" : "Screening Baseline Measured",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1",
         "desc" : [
            "Whether visual field screening baseline was measured.",
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
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "name" : "Software Versions",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0114)[<0>](0024,0110)[<1>](0046,0135)" : {
         "desc" : [
            "The first value is a positive or negative integer numeric value such as +1, +2, +3, 0, -1, -2, or -3 used to indicate that the patient missed letters on the line referenced, or saw additional letters on the next smaller line.",
            "The second value is a positive or negative integer numeric value such as +1, +2, +3, 0, -1, -2, or -3, which in combination with the first value indicates that the patient both saw additional letters on the next smaller line and missed letters on the line referenced.",
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
                                    "When the modifier values are zero, the values are not typically displayed to the user."
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
                                    "See ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "chapter_RR",
                                          "targetdoc" : "PS3.17",
                                          "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.17"
                                       },
                                       "el" : "olink"
                                    },
                                    " for guidance regarding significance of modifiers."
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
         "req" : "3",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Visual Acuity Modifiers",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2",
            "table_C.8.25.12-2"
         ],
         "entity" : "Measurements",
         "usage" : "U"
      },
      "(0024,0067)" : {
         "usage" : "M",
         "name" : "Generalized Defect Sensitivity Deviation Algorithm Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1C",
         "desc" : [
            "Software algorithm used to provide the probability that the sensitivity deviation values at each test point belong to a normal visual field.",
            "Only a single Item shall be included in this sequence.",
            "Required if Test Point Normals Data Flag (0024,0057) is YES."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : [
         {
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
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Value Type",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1"
         },
         {
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Value Type",
            "entity" : "Series",
            "usage" : "M",
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
            ]
         }
      ],
      "(0008,0018)" : {
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0066,0030)" : {
         "req" : "3",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Name Code Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : [
         {
            "module" : "General Series",
            "name" : "Floating Point Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
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
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Floating Point Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0024,0067)[<0>](0066,0030)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Algorithm Name Code Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0024,0088)" : {
         "desc" : "Total time the visual field machine was actively presenting visual stimuli to patient, in seconds.",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Visual Field Test Duration",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1"
      },
      "(0018,1200)" : {
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
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
         "module" : "General Equipment",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : [
         {
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Protocol Context Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "req" : "3"
         },
         {
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "name" : "Protocol Context Sequence",
            "entity" : "Series",
            "req" : "3"
         }
      ],
      "(0010,2292)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0024,0011)" : {
         "desc" : "The maximum vertical angular subtend (diameter or height) of the tested visual field, in degrees.",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "name" : "Visual Field Vertical Extent",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0032)[<0>](0024,0035)" : {
         "usage" : "M",
         "name" : "Fixation Checked Quantity",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "The number of times that the patient's gaze fixation is checked.",
            "Required if Fixation Monitoring Code Sequence (0024,0033) contains an item with the value (111844, DCM, \"Blind Spot Monitoring\") or (111845, DCM, \"Macular Fixation Testing\"). May be present otherwise."
         ]
      },
      "(0020,0011)" : {
         "req" : "2",
         "module" : "General Series",
         "name" : "Series Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "A number that identifies this Series."
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0024,0042)" : {
         "req" : "3",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Stimuli Retesting Quantity",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M",
         "desc" : [
            "Total number of times in the course of a visual field exam that any location had to be retested at the same magnitude.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "An example is that the patient received 20 stimuli and blinked twice, therefore need to present the stimuli two additional times in which case the value is 2."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0024,0064)[<0>](0024,0072)" : {
         "desc" : [
            "Whether normals exist for the local deviation probability.",
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
            }
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Local Deviation Probability Normals Flag",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Time",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Time",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         }
      ],
      "(0012,0051)" : {
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : [
         {
            "req" : "1C",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Numeric Value",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Numeric Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Rational Numerator Value",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0024,0317)[<0>](0024,0325)" : {
         "name" : "Data Observation Sequence",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Information about various visual field global indexes.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The type of identifier in this item.",
            {
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
               ],
               "title" : "Defined Terms:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0066,0031)" : {
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "name" : "Algorithm Version",
         "entity" : "Measurements"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0008,0016)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "req" : "1",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : [
         {
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ]
         }
      ],
      "(0010,2299)" : {
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0024,0107)" : {
         "desc" : [
            "The horizontal coordinate of the patient's blind spot relative to the center of the patient's fixation, in degrees, such that toward the right is positive.",
            "Required if the value for Blind Spot Localized (0024,0106) is YES.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.26.4.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "name" : "Blind Spot X-Coordinate",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0024,0010)" : {
         "desc" : "The maximum horizontal angular subtend (diameter or width) of the tested visual field, in degrees.",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "module" : "Visual Field Static Perimetry Test Parameters",
         "name" : "Visual Field Horizontal Extent",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Referenced Segment Number",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0012,0062)" : {
         "req" : "3",
         "name" : "Patient Identity Removed",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0024,0021)" : {
         "desc" : [
            "Color of light stimulus presented to the patient.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Stimulus Color Code Sequence",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0064)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Results Normals Sequence",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "desc" : [
            "Information that represents the statistically normal results for patients from a referenced data base.",
            "Only a single Item shall be included in this sequence.",
            "Required if Visual Field Test Normals Flag (0024,0063) is YES."
         ]
      },
      "(0024,0058)[<0>](0024,0306)" : {
         "desc" : "The name assigned to the data set.",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Data Set Name",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-22"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0024,0341)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Index Probability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2"
         ],
         "usage" : "M",
         "desc" : "Probability for the index value within the normal population, in percent."
      },
      "(0018,1020)" : [
         {
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8"
            ],
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
            ]
         },
         {
            "desc" : [
               "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "req" : "1",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M"
         }
      ],
      "(fffa,fffa)[<0>](0400,0115)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "entity" : "Measurements",
         "usage" : "M",
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
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0024,0114)[<0>](0046,0044)" : {
         "desc" : "The horizontal diameter measurement of the pupil, in mm.",
         "req" : "2",
         "usage" : "U",
         "name" : "Pupil Size",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : [
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "req" : "1C",
            "name" : "Referenced SOP Sequence",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ]
         }
      ],
      "(0024,0070)" : {
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Visual Field Mean Sensitivity",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Average sensitivity of the test points of the visual field, in dB.",
            "Required if Content Item Modifier Sequence (0040,0441) within the Performed Protocol Code Sequence (0040,0260) contains an item with the value (R-408C3, SRT, \"Diagnostic\"). May be present otherwise."
         ]
      },
      "(0010,2294)" : {
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0032,1034)" : {
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0024,0089)[<0>](0024,0097)[<1>](0024,0102)" : {
         "desc" : [
            "Whether generalized defect corrected data are available for this point.",
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
            }
         ],
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : " Generalized Defect Corrected Sensitivity Deviation Flag",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
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
      "(0040,0275)[<0>](0008,0051)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Issuer of Accession Number Sequence",
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this sequence."
            ]
         },
         {
            "req" : "3",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Issuer of Accession Number Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this sequence."
            ]
         }
      ],
      "(0012,0064)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0024,0115)[<0>](0022,000d)" : {
         "req" : "2",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "name" : "Pupil Dilated",
         "entity" : "Measurements",
         "usage" : "U",
         "desc" : [
            "The patient's pupils were pharmacologically dilated for this acquisition.",
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
            "If this tag is empty, no information is available."
         ]
      },
      "(0024,0034)[<0>](0024,0048)" : {
         "desc" : [
            "Total number of times the patient's visual attention was tested using stimuli brighter than previously seen luminance (negative catch trials).",
            "Required if Catch Trials Data Flag (0024,0055) is YES."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Negative Catch Trials Quantity",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ]
      },
      "(0024,0122)[<0>](0024,0124)" : {
         "desc" : [
            "Method used to determine starting luminance screening values.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "CENTRAL",
                     null
                  ],
                  [
                     "PERIPHERAL",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "name" : "Screening Baseline Type",
         "entity" : "Measurements"
      },
      "(0008,0070)" : [
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "name" : "Manufacturer",
            "module" : "General Equipment",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "req" : "2"
         },
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances."
         }
      ],
      "(0024,0012)" : {
         "usage" : "M",
         "name" : "Visual Field Shape",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "req" : "1",
         "desc" : [
            "The shape of the visual field tested.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "RECTANGLE",
                     null
                  ],
                  [
                     "CIRCLE",
                     null
                  ],
                  [
                     "ELLIPSE",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0066,0036)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Algorithm Name",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "desc" : "The name assigned by a manufacturer to a specific software algorithm."
      },
      "(0010,0010)" : {
         "req" : "2",
         "module" : "Patient",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Patient's full name."
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Measurements",
         "req" : "1"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Time",
         "entity" : "Measurements",
         "req" : "1C"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0024,0067)[<0>](0066,0031)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "name" : "Algorithm Version",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm."
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "1C",
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
                                 "el" : "para",
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
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : [
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "req" : "1C",
            "module" : "General Series",
            "name" : "DateTime",
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
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "DateTime",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0034)[<0>](0024,0053)" : {
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "False Positives Estimate Flag",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Whether the device was able to estimate false positives.",
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
            }
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Time",
            "entity" : "Series"
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Time",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         }
      ],
      "(0040,0275)[<0>](0032,1064)" : [
         {
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Requested Procedure Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this sequence."
            ]
         },
         {
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this sequence."
            ],
            "req" : "3",
            "name" : "Requested Procedure Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "usage" : "M"
         }
      ],
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3"
      },
      "(0018,5100)" : {
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
         ],
         "name" : "Patient Position",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "2C"
      },
      "(0024,0058)" : {
         "desc" : [
            "Normative data base used for this test sequence.",
            "Only a single Item shall be included in this sequence.",
            "Required if Test Point Normals Data Flag (0024,0057) is YES."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Test Point Normals Sequence",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "entity" : "Measurements"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
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
            "req" : "1",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Concept Name Code Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Study",
         "name" : "Institution Name",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,0080)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institution Name",
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located."
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : [
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "General Series",
            "name" : "Numeric Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         },
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Numeric Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0008,0060)" : [
         {
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
            "name" : "Modality",
            "entity" : "Series",
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
            ]
         },
         {
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1"
            ],
            "name" : "Modality",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the measurements in this Series.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "OPV",
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
                        "linkend" : "sect_C.7.3.1.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ]
         }
      ],
      "(0024,0058)[<0>](0024,0309)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-22"
         ],
         "name" : "Data Set Description",
         "entity" : "Measurements",
         "desc" : "Description of the data set."
      },
      "(0008,1111)" : [
         {
            "req" : "3",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "entity" : "Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ]
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ]
         }
      ],
      "(0008,0050)" : {
         "name" : "Accession Number",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series"
      },
      "(0040,0275)[<0>](0040,100a)" : [
         {
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this sequence."
            ],
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Reason for Requested Procedure Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "req" : "3"
         },
         {
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this sequence."
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Reason for Requested Procedure Code Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "usage" : "M",
            "req" : "3"
         }
      ],
      "(0008,1052)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0028,0109)" : {
         "req" : "3",
         "name" : "Largest Pixel Value in Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series."
      },
      "(0008,0005)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0115)[<0>](0024,0110)[<1>](0046,0135)" : {
         "desc" : [
            "The first value is a positive or negative integer numeric value such as +1, +2, +3, 0, -1, -2, or -3 used to indicate that the patient missed letters on the line referenced, or saw additional letters on the next smaller line.",
            "The second value is a positive or negative integer numeric value such as +1, +2, +3, 0, -1, -2, or -3, which in combination with the first value indicates that the patient both saw additional letters on the next smaller line and missed letters on the line referenced.",
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
                                    "When the modifier values are zero, the values are not typically displayed to the user."
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
                                    "See ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.17",
                                          "targetptr" : "chapter_RR",
                                          "targetdoc" : "PS3.17"
                                       },
                                       "el" : "olink"
                                    },
                                    " for guidance regarding significance of modifiers."
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
         "usage" : "U",
         "name" : "Visual Acuity Modifiers",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2",
            "table_C.8.25.12-2"
         ]
      },
      "(0024,0089)[<0>](0024,0097)[<1>](0024,0104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Generalized Defect Corrected Sensitivity Deviation Probability Value",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "The percentile of the generalized defect corrected sensitivity deviation within the normal population of visual field, in percent.",
            "Required if Generalized Defect Corrected Sensitivity Deviation Flag (0024,0102) is YES."
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,1062)" : {
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : [
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "module" : "General Series",
            "name" : "DateTime",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "DateTime",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : [
         {
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Floating Point Value",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Floating Point Value",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0024,0320)[<0>](0024,0344)[<1>](0024,0202)" : {
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Source",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0100,0410)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ]
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0024,0028)" : {
         "name" : "Stimulus Presentation Time",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The duration of time that a light stimulus is presented to a patient per each individual test point, in milliseconds.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This time is the same for each stimulus presentation."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0066,0031)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "name" : "Algorithm Version",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm."
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0066,0030)" : {
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Algorithm Name Code Sequence",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         },
         {
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "name" : "Concept Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0317)[<0>](0024,0344)" : {
         "desc" : [
            "Probability value and software algorithm used to provide the index.",
            "Only a single Item shall be included in this sequence.",
            "Required if Index Normals Flag (0024,0338) is YES."
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Index Probability Sequence",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0024,0114)[<0>](0022,000d)" : {
         "usage" : "U",
         "name" : "Pupil Dilated",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "entity" : "Measurements",
         "req" : "2",
         "desc" : [
            "The patient's pupils were pharmacologically dilated for this acquisition.",
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
            "If this tag is empty, no information is available."
         ]
      },
      "(0024,0034)[<0>](0024,0052)" : {
         "name" : "Excessive False Negatives",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The false negative estimate is outside of implementation-specific limits.",
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
            "Required if Excessive False Negatives Data Flag (0024,0051) is YES."
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               }
            },
            "."
         ],
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0089)[<0>](0024,0096)" : {
         "desc" : [
            "If the Retest Stimulus Seen (0024,0095) is YES, then this value is the sensitivity, in dB.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this is not present, refer to the attribute Minimum Sensitivity Value (0024,0105)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Retest Sensitivity Value",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1030)" : {
         "module" : "General Series",
         "name" : "Protocol Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "desc" : "Description of the type of service episode."
      },
      "(0024,0081)" : {
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Corrected Localized Deviation From Normal Probability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The percentile of the Corrected Localized Deviation From Normal (0024,0079) value within the normal population, in percent.",
            "Required if Corrected Localized Deviation From Normal Probability Calculated (0024,0080) is YES."
         ]
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Measurements",
         "usage" : "M",
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
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0010)" : {
         "req" : "1",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "M",
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
         ]
      },
      "(0024,0064)[<0>](0024,0083)" : {
         "desc" : [
            "Probability value and software algorithm used to provide the normality for the global deviation.",
            "Only a single Item shall be included in this sequence.",
            "Required if Global Deviation Probability Normals Flag (0024,0059) is YES."
         ],
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Global Deviation Probability Sequence",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0066,0032)" : {
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "usage" : "M",
         "name" : "Algorithm Parameters",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0012,0072)" : {
         "req" : "3",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0024,0089)[<0>](0024,0097)[<1>](0024,0103)" : {
         "desc" : [
            "The age corrected sensitivity deviation after correction for the Generalized Defect, in dB. Generalized defect is proportional to the loss in sensitivity shared by all points in the visual field.",
            "Required if Generalized Defect Corrected Sensitivity Deviation Flag (0024,0102) is YES."
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Generalized Defect Corrected Sensitivity Deviation Value",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1C"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "2"
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Referenced Frame Number",
            "entity" : "Series",
            "usage" : "M",
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
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a30a)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Numeric Value",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0024,0079)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Corrected Localized Deviation From Normal",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "desc" : [
            "Weighted square root of loss variance corrected for short term fluctuation, in dB.",
            "Required if Corrected Localized Deviation From Normal Calculated (0024,0078) is YES."
         ]
      },
      "(0024,0320)" : {
         "req" : "3",
         "name" : "Visual Field Global Results Index Sequence",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Information about various visual field indexes related to test results.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0275)[<0>](0040,0009)" : [
         {
            "desc" : [
               "Identifier that identifies the Scheduled Procedure Step.",
               "Required if procedure was scheduled.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ],
                        "el" : "para"
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Scheduled Procedure Step ID",
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "req" : "1C"
         },
         {
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
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Scheduled Procedure Step ID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "req" : "1C"
         }
      ],
      "(0024,0034)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Visual Field Catch Trial Sequence",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "The reliability of the patient's responses to the visual field test.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0253)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "module" : "General Series",
            "name" : "Performed Procedure Step ID",
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
         },
         {
            "req" : "3",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Performed Procedure Step ID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "usage" : "M",
            "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
         }
      ],
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a163)" : {
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Measurements",
         "req" : "3"
      },
      "(0040,0280)" : [
         {
            "desc" : "User-defined comments on the Performed Procedure Step.",
            "req" : "3",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "name" : "Comments on the Performed Procedure Step",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "req" : "3",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "name" : "Comments on the Performed Procedure Step",
            "entity" : "Series",
            "desc" : "User-defined comments on the Performed Procedure Step."
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,0014)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "entity" : "Measurements",
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0008,0021)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Date the Series started."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "entity" : "Series",
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
            ]
         },
         {
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Concept Code Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : [
         {
            "usage" : "M",
            "name" : "Content Item Modifier Sequence",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "req" : "3",
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.4.10.1"
                  }
               },
               "."
            ]
         },
         {
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
            "req" : "3",
            "usage" : "M",
            "name" : "Content Item Modifier Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ]
         }
      ],
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "Name of the patient's referring physician"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Measurements",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Rational Denominator Value",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Rational Denominator Value",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         }
      ],
      "(0008,0051)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Value Type",
            "entity" : "Series",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ]
         },
         {
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
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Value Type",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0024,0064)[<0>](0024,0085)[<1>](0066,0030)" : {
         "req" : "3",
         "name" : "Algorithm Name Code Sequence",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0024,0032)[<0>](0024,0036)" : {
         "desc" : [
            "The number of times the patient's gaze is not properly fixated.",
            "Required if Fixation Monitoring Code Sequence (0024,0033) contains an item with the value (111844, DCM, \"Blind Spot Monitoring\") or (111845, DCM, \"Macular Fixation Testing\"). May be present otherwise."
         ],
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Patient Not Properly Fixated Quantity",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "req" : "1C"
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
         "req" : "1",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient"
      },
      "(0024,0064)[<0>](0024,0066)" : {
         "desc" : "Weighted average deviation from the age corrected normal field, in dB.",
         "req" : "1",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Global Deviation from Normal",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1001)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Requested Procedure ID",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : [
               "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
               "Required if procedure was scheduled. May be present otherwise.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ],
                        "el" : "para"
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Requested Procedure ID",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "req" : "1C",
            "desc" : [
               "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
               "Required if procedure was scheduled. May be present otherwise.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ],
                        "el" : "para"
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ]
         }
      ],
      "(0024,0016)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "name" : "Screening Test Mode Code Sequence",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "desc" : [
            "Mode used to determine how the starting luminance values and expected thresholds are chosen.",
            "Only a single Item shall be included in this sequence.",
            "Required if Content Item Modifier Sequence (0040,0441) within Performed Protocol Code Sequence (0040,0260) contains an item with the value (R-42453, SRT, \"Screening\"). May be present otherwise."
         ]
      },
      "(0024,0122)[<0>](0024,0126)" : {
         "desc" : "Visual Field screening baseline value, in dB.",
         "usage" : "M",
         "name" : "Screening Baseline Value",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1"
      },
      "(0024,0065)[<0>](0066,0030)" : {
         "usage" : "M",
         "name" : "Algorithm Name Code Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "req" : "3",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0024,0089)[<0>](0024,0098)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Quantified Defect",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Difference between the expected and the determined sensitivity, each in dB.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This field is only useful when the sensitivity is quantified. Some examples include Test Strategy Code Sequence (0024,0015) with items providing values such as Quantity-Defects, 2LT-Dynamic, 2LT-Normal."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : [
         {
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2"
      },
      "(0024,0115)[<0>](0024,0112)[<1>](0022,0007)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Measurements",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Spherical Lens Power",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "desc" : "Sphere value in diopters."
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Measurements",
         "usage" : "M",
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
      "(0008,1049)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0040,0244)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "module" : "General Series",
            "name" : "Performed Procedure Step Start Date",
            "entity" : "Series",
            "req" : "3",
            "desc" : "Date on which the Performed Procedure Step started."
         },
         {
            "desc" : "Date on which the Performed Procedure Step started.",
            "req" : "3",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Performed Procedure Step Start Date",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "entity" : "Series"
         }
      ],
      "(0008,0020)" : {
         "desc" : "Date the Study started.",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0024,0067)[<0>](0066,0032)" : {
         "usage" : "M",
         "name" : "Algorithm Parameters",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm."
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "desc" : "Ethnic group or race of the patient."
      },
      "(0024,0032)[<0>](0024,0039)" : {
         "desc" : [
            "Whether the device was able to determine excessive fixation losses.",
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
            }
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Excessive Fixation Losses Data Flag",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : [
         {
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
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Referenced Frame Number",
            "entity" : "Series",
            "usage" : "M"
         },
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
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0040,0251)" : [
         {
            "name" : "Performed Procedure Step End Time",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Time at which the Performed Procedure Step ended."
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "name" : "Performed Procedure Step End Time",
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Time at which the Performed Procedure Step ended."
         }
      ],
      "(0024,0034)[<0>](0024,0050)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "False Negatives Quantity",
         "entity" : "Measurements",
         "desc" : [
            "Total number of stimuli that were not seen by the patient but were previously seen at a lower luminance earlier in the visual field test (false negatives).",
            "Required if Catch Trials Data Flag (0024,0055) is YES."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : [
         {
            "req" : "1C",
            "module" : "General Series",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "usage" : "M",
            "name" : "Measurement Units Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Floating Point Value",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Referenced Frame Number",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
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
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Frame Number",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
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
         }
      ],
      "(0024,0034)[<0>](0024,0061)" : {
         "desc" : [
            "Whether the device was able to determine excessive false positives.",
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
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Excessive False Positives Data Flag",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M"
      },
      "(0024,0064)[<0>](0024,0068)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Localized Deviation From Normal",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "Weighted square root of loss variance, in dB."
      },
      "(0040,0275)[<0>](0008,0050)" : [
         {
            "req" : "3",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Accession Number",
            "entity" : "Series",
            "usage" : "M",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "name" : "Accession Number",
            "entity" : "Series",
            "req" : "3",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
         }
      ],
      "(0018,1008)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner."
      },
      "(0020,0060)" : {
         "req" : "2C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0024,0065)[<0>](0066,0032)" : {
         "usage" : "M",
         "name" : "Algorithm Parameters",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm."
      },
      "(0024,0065)[<0>](0066,0031)" : {
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "name" : "Algorithm Version",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,4000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Comments",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "User-defined additional information about the patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : [
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Person Name",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ]
         }
      ],
      "(0040,0275)[<0>](0008,1110)" : [
         {
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
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced Study Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ]
         },
         {
            "desc" : [
               "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
               "One or more items are permitted in this sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_10.6.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "req" : "3",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Study Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "entity" : "Series"
         }
      ],
      "(0024,0089)[<0>](0024,0097)[<1>](0024,0092)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Age Corrected Sensitivity Deviation Value",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "desc" : "Difference between the patient's local sensitivity and the age corrected normal sensitivity, in dB."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : [
         {
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         }
      ],
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,a390)" : {
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
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,2202)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
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
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
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
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0317)[<0>](0024,0325)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ]
      },
      "(0024,0114)[<0>](0024,0110)[<1>](0046,0137)" : {
         "desc" : [
            "A patient's visual acuity specified in decimal. The value is derived from two values in a fraction where the numerator of the fraction is the nominal distance to the chart that the patient is reading. The denominator represents the line of smallest optotypes of which the patient can see more than half.",
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
                                 "el" : "para",
                                 "content" : [
                                    "Typical examples: reference standard is 1, severe vision loss is 0.1"
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
                                    "See ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "chapter_RR",
                                          "targetdoc" : "PS3.17",
                                          "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.17"
                                       },
                                       "el" : "olink"
                                    },
                                    " for guidance in converting Decimal Visual Acuity to other customarily used display notation such as 20/20 in the US and 6/6 in Britain."
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
         "usage" : "U",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Decimal Visual Acuity",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2",
            "table_C.8.25.12-2"
         ],
         "entity" : "Measurements",
         "req" : "1"
      },
      "(0040,0245)" : [
         {
            "req" : "3",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "name" : "Performed Procedure Step Start Time",
            "entity" : "Series",
            "desc" : "Time on which the Performed Procedure Step started."
         },
         {
            "desc" : "Time on which the Performed Procedure Step started.",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Performed Procedure Step Start Time",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "req" : "3"
         }
      ],
      "(0024,0034)[<0>](0024,0055)" : {
         "req" : "1",
         "name" : "Catch Trials Data Flag",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M",
         "desc" : [
            "Whether catch trials data were performed.",
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
            }
         ]
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Text Value",
            "entity" : "Series",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Text Value",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0024,0114)[<0>](0024,0112)" : {
         "desc" : [
            "Refractive parameters used when performing visual field test.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Refractive Parameters Used on Patient Sequence",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "usage" : "U",
         "req" : "2"
      },
      "(0024,0087)" : {
         "desc" : [
            "Foveal Sensitivity is the reciprocal of foveal threshold (1/foveal threshold), in dB.",
            "Foveal Threshold is the minimum amount of luminance increment on a uniform background that can be detected by the patient at coordinates 0,0 (relative to the center of the patient's fixation).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.26.4.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value for Foveal Sensitivity Measured (0024,0086) is YES."
         ],
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "name" : "Foveal Sensitivity",
         "entity" : "Measurements",
         "req" : "1C"
      },
      "(0024,0114)[<0>](0024,0112)[<1>](0022,0008)" : {
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "name" : "Cylinder Lens Power",
         "entity" : "Measurements",
         "usage" : "U",
         "req" : "1",
         "desc" : "Cylinder value in diopters."
      },
      "(0024,0320)[<0>](0024,0325)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Data Observation Sequence",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Information about various visual field global indexes.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
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
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0024,0076)" : {
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "name" : "Short Term Fluctuation Probability Calculated",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Whether the short term fluctuation probability was calculated.",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : [
         {
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced Segment Number",
            "entity" : "Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
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
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0114)[<0>](0024,0110)" : {
         "desc" : [
            "Measurements of a patient's visual acuity.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Visual Acuity Measurement Sequence",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "req" : "3"
      },
      "(0024,0034)[<0>](0024,0046)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "False Negatives Estimate",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Estimated percentage of all stimuli that were not seen by the patient but were previously seen at a lower luminance earlier in the visual field test (false negative responses), as percent.",
            "Required if False Negatives Estimate Flag (0024,0045) is YES."
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-11"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Date",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         },
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Date",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ]
         }
      ],
      "(0012,0083)" : {
         "req" : "3",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0024,0064)[<0>](0024,0085)[<1>](0066,002f)" : {
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Family Code Sequence",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Date of Last Calibration",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution Description",
         "entity" : "Measurements",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0024,0077)" : {
         "desc" : [
            "The percentile of the Short Term Fluctuation (0024,0075) value within the normal population, in percent.",
            "Required if Short Term Fluctuation Probability Calculated (0024,0076) is YES."
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Short Term Fluctuation Probability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : [
         {
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Measurement Units Code Sequence",
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "name" : "Measurement Units Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "el" : "para"
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : [
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "module" : "General Series",
            "name" : "Date",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Date",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0024,0064)[<0>](0024,0059)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Global Deviation Probability Normals Flag",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "usage" : "M",
         "desc" : [
            "Whether normals exist for the global deviation probability.",
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
         ]
      },
      "(0008,1048)" : {
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for Performing Physician)"
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0024,0089)" : {
         "desc" : [
            "Information for each test point in the visual field.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Visual Field Test Point Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "2C"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0066,0032)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "name" : "Algorithm Parameters",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm."
      },
      "(0024,0064)[<0>](0024,0085)" : {
         "desc" : [
            "Probability value and software algorithm used to provide the normality for the local deviation.",
            "Only a single Item shall be included in this sequence.",
            "Required if Local Deviation Probability Normals Flag (0024,0072) is YES.."
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Localized Deviation Probability Sequence",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0010,2298)" : {
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0024,0074)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Short Term Fluctuation Calculated",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "desc" : [
            "Whether the short term fluctuation was calculated.",
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
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : [
         {
            "req" : "1C",
            "name" : "Rational Numerator Value",
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ]
         },
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0038,0064)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "entity" : "Study",
         "req" : "3"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0012,0042)" : {
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0058)[<0>](0024,0308)" : {
         "req" : "1",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Data Set Source",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-22"
         ],
         "usage" : "M",
         "desc" : "Source of the data set e.g., the name of the manufacturer, researcher, university, etc."
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,2210)" : {
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
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Anatomical Orientation Type",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1C"
      },
      "(0024,0064)[<0>](0024,0308)" : {
         "desc" : "Source of the data set e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Data Set Source",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-22"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0115)[<0>](0022,000b)" : {
         "req" : "3",
         "name" : "Intra Ocular Pressure",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "entity" : "Measurements",
         "usage" : "U",
         "desc" : "Value of intraocular pressure in mmHg."
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0066,002f)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Algorithm Family Code Sequence",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : [
         {
            "module" : "General Series",
            "name" : "Scheduled Procedure Step Description",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
         },
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Scheduled Procedure Step Description",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "req" : "3",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
         }
      ],
      "(0024,0065)[<0>](0066,0036)" : {
         "usage" : "M",
         "name" : "Algorithm Name",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm."
      },
      "(0024,0117)" : {
         "desc" : [
            "Existence of normative data base for the foveal point sensitivity.",
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
            }
         ],
         "name" : "Foveal Point Normative Data Flag",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0320)[<0>](0024,0338)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Index Normals Flag",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Whether normative data exists for this index.",
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
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located."
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "entity" : "Measurements"
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performing Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "desc" : "Occupation of the Patient."
      },
      "(0024,0064)[<0>](0024,0309)" : {
         "desc" : "Description of the data set.",
         "usage" : "M",
         "name" : "Data Set Description",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-22"
         ],
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "el" : "para"
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
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0034)[<0>](0024,0060)" : {
         "desc" : [
            "The total number of patient responses that occurred at a time when no visual stimulus was present (false positive responses).",
            "Required if Catch Trials Data Flag (0024,0055) is YES."
         ],
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "name" : "False Positives Quantity",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0089)[<0>](0024,0093)" : {
         "desc" : [
            "Whether the patient saw a stimulus presented at a luminance other than maximum, a presentation at maximum luminance, or did not see any presented stimulus.",
            {
               "list" : [
                  [
                     "SEEN",
                     "stimulus seen at a luminance value less than maximum"
                  ],
                  [
                     "NOT SEEN",
                     "stimulus not seen"
                  ],
                  [
                     "SEEN AT MAX",
                     "stimulus seen at the maximum luminance possible for the instrument"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "SEEN AT MAX is a value only relevant to Screening tests."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Stimulus Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M"
      },
      "(0018,1000)" : [
         {
            "usage" : "M",
            "module" : "General Equipment",
            "name" : "Device Serial Number",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "3",
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances."
         }
      ],
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0024,0341)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Index Probability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : "Probability for the index value within the normal population, in percent."
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "entity" : "Patient",
         "desc" : "An identification number or code used to identify the patient."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : [
         {
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "req" : "1C",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         ]
      },
      "(0012,0060)" : {
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               }
            },
            "."
         ],
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series"
      },
      "(0024,0118)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Foveal Point Probability Value",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "desc" : [
            "The percentile of the foveal point sensitivity within an age corrected normal visual field, in percent.",
            "Required if the value for Foveal Sensitivity Measured (0024,0086) is YES and Foveal Point Normative Data Flag (0024,0117) is YES."
         ]
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Text Value",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         },
         {
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0024,0067)[<0>](0024,0202)" : {
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3",
         "usage" : "M",
         "name" : "Algorithm Source",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : [
         {
            "usage" : "M",
            "name" : "DateTime",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "DateTime",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : [
         {
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "req" : "1C",
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "req" : "1C",
            "usage" : "M",
            "name" : "Concept Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series"
         }
      ],
      "(0010,0020)" : {
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "entity" : "Patient"
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "usage" : "U",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1050)" : {
         "desc" : "Name of the physician(s) administering the Series.",
         "req" : "3",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : "Identification number of an animal within the registry."
      },
      "(0024,0034)[<0>](0024,0062)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Excessive False Positives",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M",
         "desc" : [
            "The false positive estimate is outside of implementation-specific limit.",
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
            "Required if Excessive False Positives Data Flag (0024,0061) is YES."
         ]
      },
      "(0400,0500)" : {
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
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0024,0064)[<0>](0024,0085)[<1>](0066,0031)" : {
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "name" : "Algorithm Version",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ]
      },
      "(0008,001b)" : {
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "req" : "3"
      },
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "orderedlist",
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
                           ]
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
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "el" : "para"
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
                     ]
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0040,0254)" : [
         {
            "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
            "req" : "3",
            "name" : "Performed Procedure Step Description",
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "usage" : "M"
         },
         {
            "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
            "req" : "3",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Performed Procedure Step Description",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "usage" : "M"
         }
      ],
      "(0024,0089)[<0>](0024,0097)" : {
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "name" : "Visual Field Test Point Normals Sequence",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Information about normal values for each visual field test point.",
            "One or more items shall be included in this sequence.",
            "Required if Test Point Normals Data Flag (0024,0057) is YES."
         ]
      },
      "(0024,0105)" : {
         "usage" : "M",
         "name" : "Minimum Sensitivity Value",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1",
         "desc" : "The minimum sensitivity value generated by the equipment used for this visual field test, in dB."
      },
      "(0008,0031)" : {
         "desc" : "Time the Series started.",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0024,0065)[<0>](0024,0202)" : {
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "name" : "Algorithm Source",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : [
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Numeric Value",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Numeric Value",
            "entity" : "Series",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0008,1052)[<0>](0008,0080)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,0015)" : {
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
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "1C",
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
         ]
      },
      "(0024,0034)[<0>](0024,0051)" : {
         "desc" : [
            "Whether the device was able to determine excessive false negatives.",
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
         "name" : "Excessive False Negatives Data Flag",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Manufacturer",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0024,0067)[<0>](0066,0036)" : {
         "req" : "1",
         "name" : "Algorithm Name",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm."
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0032)" : {
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0024,0089)[<0>](0024,0094)" : {
         "desc" : [
            "If Stimulus Results (0024,0093) is SEEN then this value is the sensitivity, in dB.",
            "Required if Content Item Modifier Sequence (0040,0441) within Performed Protocol Code Sequence (0040,0260) contains an item with the value (R-408C3, SRT, \"Diagnostic\"). May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this is not present, refer to the attribute Minimum Sensitivity Value (0024,0105)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Sensitivity Value",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0065)[<0>](0066,002f)" : {
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Algorithm Family Code Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : [
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "module" : "General Series",
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0024,0320)[<0>](0024,0344)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Index Probability Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2"
         ],
         "usage" : "M",
         "desc" : [
            "Probability value and software algorithm used to provide the index.",
            "Only a single Item shall be included in this sequence.",
            "Required if Index Normals Flag (0024,0338) is YES."
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : [
         {
            "req" : "1C",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         },
         {
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0024,0317)[<0>](0024,0338)" : {
         "desc" : [
            "Whether normative data exists for this index.",
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
            }
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Index Normals Flag",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2"
         ]
      },
      "(0024,0115)[<0>](0024,0112)[<1>](0022,0009)" : {
         "desc" : "Axis value in degrees.",
         "req" : "1",
         "usage" : "U",
         "name" : "Cylinder Axis",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ]
      },
      "(0024,0089)[<0>](0024,0091)" : {
         "desc" : "The vertical coordinate of a single test point relative to the center of the patient fixation, in degrees, such that up is positive.",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Visual Field Test Point Y-Coordinate",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0024,0106)" : {
         "desc" : [
            "Whether the blind spot was measured.",
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
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Blind Spot Localized",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "req" : "1",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : [
         {
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Local Namespace Entity ID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "usage" : "M"
         },
         {
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "usage" : "M",
            "name" : "Local Namespace Entity ID",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-17"
            ],
            "req" : "1C"
         }
      ],
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : [
         {
            "req" : "1C",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Date",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         },
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "usage" : "M",
            "name" : "Date",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : [
         {
            "name" : "Concept Code Sequence",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Concept Code Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(0020,0013)" : {
         "req" : "3",
         "name" : "Instance Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : [
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "req" : "1",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Concept Name Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ]
         }
      ],
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a120)" : {
         "usage" : "M",
         "name" : "DateTime",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a120)" : {
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0275)" : [
         {
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this sequence."
            ],
            "req" : "3",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Request Attributes Sequence",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this sequence."
            ],
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Request Attributes Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1"
            ],
            "entity" : "Series",
            "req" : "3"
         }
      ],
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Station Name",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0024,0113)" : {
         "desc" : [
            "Laterality of body part (eye) examined.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.26.4.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
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
                  ],
                  [
                     "B",
                     "both left and right together"
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute is mandatory, in order to ensure that measurements may be positioned correctly relative to one another for display."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Laterality (0020,0060) is a Series level Attribute and must be the same for all Measurements in the Series, hence it must be absent if multiple instances from different eyes are encoded."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Measurement Laterality",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : [
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "name" : "Rational Numerator Value",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Rational Numerator Value",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0012,0050)" : {
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0010,0021)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration",
         "entity" : "Measurements"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "entity" : "Measurements",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(0024,0065)" : {
         "desc" : [
            "Software algorithm used to provide the probability that the age corrected sensitivity deviation values at each test point belong to a normal visual field.",
            "Only a single Item shall be included in this sequence.",
            "Required if Test Point Normals Data Flag (0024,0057) is YES."
         ],
         "name" : "Age Corrected Sensitivity Deviation Algorithm Sequence",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0115)[<0>](0046,0044)" : {
         "usage" : "U",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Pupil Size",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "entity" : "Measurements",
         "req" : "2",
         "desc" : "The horizontal diameter measurement of the pupil, in mm."
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0024,0202)" : {
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Source",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc."
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0066,002f)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Family Code Sequence",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ]
      },
      "(0024,0034)[<0>](0024,0056)" : {
         "desc" : [
            "The total number of times the device behaved as if it was going to present a visual stimulus but did not actually present the stimulus (positive catch trials).",
            "Required if Catch Trials Data Flag (0024,0055) is YES."
         ],
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Positive Catch Trials Quantity",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : [
         {
            "module" : "General Series",
            "name" : "Referenced SOP Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ]
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "req" : "1C",
            "name" : "Referenced SOP Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ]
         },
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Person Name",
            "entity" : "Series"
         }
      ],
      "(0024,0025)" : {
         "desc" : "Area of light stimulus presented to the patient, in degrees squared.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "module" : "Visual Field Static Perimetry Test Parameters",
         "name" : "Stimulus Area",
         "entity" : "Measurements",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : [
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0012,0083)[<0>](0012,0085)" : {
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
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "req" : "1",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ]
         }
      ],
      "(0024,0064)[<0>](0024,0085)[<1>](0024,0073)" : {
         "desc" : "The percentile of the Localized Deviation From Normal (0024,0068) value within the normal population, in percent.",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "name" : "Localized Deviation Probability",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "req" : "1"
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
            "req" : "1",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Value Type",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "req" : "1",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Value Type",
            "entity" : "Series",
            "usage" : "M",
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
         }
      ],
      "(0012,0030)" : {
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
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
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series"
         }
      ],
      "(0008,1052)[<0>](0008,0081)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0024,0034)[<0>](0024,0045)" : {
         "desc" : [
            "Whether the device was able to estimates false negatives.",
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
         "name" : "False Negatives Estimate Flag",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements"
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0066,0030)" : {
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Algorithm Name Code Sequence",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a168)" : {
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Concept Code Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "2"
      },
      "(0010,1010)" : {
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient."
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
         ]
      },
      "(0024,0018)" : {
         "name" : "Maximum Stimulus Luminance",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : "Maximum luminance of stimulus, in candelas per square meter (cd/m\u00b2)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : [
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "name" : "UID",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "UID",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ]
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "module" : "General Series",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0024,0057)" : {
         "desc" : [
            "Existence of normative data base for this set of test points.",
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
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Test Point Normals Data Flag",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : [
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "name" : "Rational Numerator Value",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Rational Numerator Value",
            "entity" : "Series",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Time",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         },
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "usage" : "M",
            "name" : "Time",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ]
         }
      ],
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a121)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,0096)" : {
         "req" : "3",
         "module" : "General Study",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0024,0108)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Blind Spot Y-Coordinate",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "desc" : [
            "The vertical coordinate of the patient's blind spot relative to the center of the patient fixation, in degrees, such that up is positive.",
            "Required if the value for Blind Spot Localized (0024,0106) is YES.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.26.4.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Date",
            "entity" : "Series",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         },
         {
            "req" : "1C",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Date",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         }
      ],
      "(0024,0114)[<0>](0024,0112)[<1>](0022,0009)" : {
         "desc" : "Axis value in degrees.",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "entity" : "Measurements",
         "name" : "Cylinder Axis",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : [
         {
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "req" : "1C",
            "usage" : "M",
            "name" : "Universal Entity ID",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series"
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-17"
            ],
            "name" : "Universal Entity ID",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
         }
      ],
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : [
         {
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series",
            "name" : "DateTime",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         },
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "usage" : "M",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "DateTime",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0008,1052)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Series",
         "desc" : "Person's mailing address"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : [
         {
            "name" : "Concept Name Code Sequence",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ]
         },
         {
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ]
         }
      ],
      "(0024,0317)[<0>](0024,0344)[<1>](0066,0031)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Algorithm Version",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : [
         {
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
            "req" : "3",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "name" : "Content Item Modifier Sequence",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.4.10.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Content Item Modifier Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "req" : "3"
         }
      ],
      "(0028,0303)" : {
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1002)" : [
         {
            "desc" : "Reason for requesting this procedure.",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "name" : "Reason for the Requested Procedure",
            "entity" : "Series",
            "usage" : "M"
         },
         {
            "desc" : "Reason for requesting this procedure.",
            "req" : "3",
            "name" : "Reason for the Requested Procedure",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : [
         {
            "module" : "General Series",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0018,a001)" : {
         "desc" : [
            "Sequence of Items containing descriptive attributes of related equipment that has contributed to the acquisition, creation or modification of the composite instance.",
            "One or more Items are permitted in this Sequence.",
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "entity" : "Measurements"
      },
      "(0024,0080)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "name" : "Corrected Localized Deviation From Normal Probability Calculated",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Whether the corrected localized deviation from Normal probability was calculated.",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : [
         {
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Measurement Units Code Sequence",
            "entity" : "Series"
         },
         {
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C"
         }
      ],
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0066,0036)" : {
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Name",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm."
      },
      "(0024,0067)[<0>](0066,002f)" : {
         "req" : "1",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Algorithm Family Code Sequence",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ]
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0066,002f)" : {
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Family Code Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Concept Name Code Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0063)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Visual Field Test Normals Flag",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "desc" : [
            "Whether normals exist for this patient's results.",
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
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396"
      },
      "(0040,0275)[<0>](0020,000d)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Study Instance UID",
            "entity" : "Series",
            "req" : "3",
            "desc" : "The unique identifier for the Study provided for this Requested Procedure."
         },
         {
            "req" : "3",
            "name" : "Study Instance UID",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : "The unique identifier for the Study provided for this Requested Procedure."
         }
      ],
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0031)" : {
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
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "2"
      },
      "(0024,0115)[<0>](0024,0112)[<1>](0022,0008)" : {
         "desc" : "Cylinder value in diopters.",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Cylinder Lens Power",
         "entity" : "Measurements"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Numeric Value",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Numeric Value",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : [
         {
            "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
            "module" : "General Series",
            "name" : "Requested Procedure Description",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         },
         {
            "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "name" : "Requested Procedure Description",
            "entity" : "Series",
            "usage" : "M",
            "req" : "3"
         }
      ],
      "(0024,0037)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Presented Visual Stimuli Data Flag",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Whether the device was able to determine presented visual stimuli.",
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
         ]
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "name" : "Text Value",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0024,0089)[<0>](0024,0090)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "name" : "Visual Field Test Point X-Coordinate",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "desc" : "The horizontal coordinate of a single test point relative to the center of the patient fixation, in degrees, such that toward the right is positive."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : [
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "UID",
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
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,2201)" : {
         "usage" : "M",
         "name" : "Patient Species Description",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0024,0078)" : {
         "desc" : [
            "Whether the corrected localized deviation from normal was calculated.",
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
         "req" : "1",
         "usage" : "M",
         "name" : "Corrected Localized Deviation From Normal Calculated",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : [
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "UID",
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "name" : "UID",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         }
      ],
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0044)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Comments on Patient's Performance of Visual Field",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "Operator's (test administrator) subjective comment on patient's performance."
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0012,0083)[<0>](0012,0020)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ]
      },
      "(0040,0250)" : [
         {
            "desc" : "Date on which the Performed Procedure Step ended.",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Performed Procedure Step End Date",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "usage" : "M",
            "req" : "3"
         },
         {
            "name" : "Performed Procedure Step End Date",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "usage" : "M",
            "req" : "3",
            "desc" : "Date on which the Performed Procedure Step ended."
         }
      ],
      "(0010,1021)" : {
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0024,0069)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "name" : "Patient Reliability Indicator",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "Vendor implementation specific text to provide an analysis and/or summary of patient reliability indicator/indices."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0024,0089)[<0>](0024,0097)[<1>](0024,0100)" : {
         "usage" : "M",
         "name" : "Age Corrected Sensitivity Deviation Probability Value",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1",
         "desc" : "The percentile of the age corrected sensitivity deviation within the normal population of visual field, in percent."
      },
      "(0010,1002)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Numerator Value",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ]
         },
         {
            "req" : "1C",
            "name" : "Rational Numerator Value",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ]
         }
      ],
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0024,0071)" : {
         "req" : "1",
         "name" : "Global Deviation Probability",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : "The percentile of the Global Deviation from Normal (0024,0066) value within the normal population, in percent.0024"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0040,a040)" : {
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Value Type",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0024,0064)[<0>](0024,0306)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "name" : "Data Set Name",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-22"
         ],
         "req" : "1",
         "desc" : "The name assigned to the data set."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
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
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : [
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced SOP Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0024,0024)" : {
         "desc" : [
            "Color of the background illumination of the visual field device.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "name" : "Background Illumination Color Code Sequence",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         },
         {
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         }
      ],
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "req" : "1C"
      },
      "(0024,0032)[<0>](0024,0040)" : {
         "desc" : [
            "The number of fixation losses is outside of implementation-specific limits.",
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
            "Required if Excessive Fixation Losses Data Flag (0024,0039) is YES."
         ],
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "name" : "Excessive Fixation Losses",
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0024,0064)[<0>](0024,0085)[<1>](0024,0202)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "name" : "Algorithm Source",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc."
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "entity" : "Measurements"
      },
      "(0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "req" : "3"
      },
      "(0024,0114)[<0>](0024,0112)[<1>](0022,0007)" : {
         "desc" : "Sphere value in diopters.",
         "req" : "1",
         "entity" : "Measurements",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Spherical Lens Power",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "usage" : "U"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C"
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2"
      },
      "(0024,0064)[<0>](0024,0085)[<1>](0066,0032)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Algorithm Parameters",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm."
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name",
         "entity" : "Measurements",
         "req" : "3"
      },
      "(0008,0053)" : {
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
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0114)[<0>](0022,000b)" : {
         "usage" : "U",
         "entity" : "Measurements",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Intra Ocular Pressure",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "req" : "3",
         "desc" : "Value of intraocular pressure in mmHg."
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0024,0317)" : {
         "desc" : [
            "Information about various visual field indices related to test reliability.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Visual Field Test Reliability Global Index Sequence",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Unique identifier of the Series."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Rational Denominator Value",
            "entity" : "Series",
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
         {
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "name" : "Rational Denominator Value",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0008,001a)" : {
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "usage" : "M"
      },
      "(0024,0075)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Short Term Fluctuation",
         "mod_tables" : [
            "table_C.8.26.5-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Average deviation of sensitivity for the repeated test locations, in dB. This is used to determine the consistency of the patient's responses.",
            "Required if Short Term Fluctuation Calculated (0024,0074) is YES."
         ]
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "SOP Common",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Scheduled Protocol Code Sequence",
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
         },
         {
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
            "req" : "3",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Scheduled Protocol Code Sequence",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0024,0064)[<0>](0024,0085)[<1>](0066,0036)" : {
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "name" : "Algorithm Name",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a040)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Value Type",
         "entity" : "Measurements",
         "usage" : "M",
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
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "entity" : "Measurements",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0024,0115)[<0>](0024,0110)[<1>](0046,0137)" : {
         "desc" : [
            "A patient's visual acuity specified in decimal. The value is derived from two values in a fraction where the numerator of the fraction is the nominal distance to the chart that the patient is reading. The denominator represents the line of smallest optotypes of which the patient can see more than half.",
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
                                 "el" : "para",
                                 "content" : [
                                    "Typical examples: reference standard is 1, severe vision loss is 0.1"
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
                                    "See ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.17",
                                          "targetdoc" : "PS3.17",
                                          "targetptr" : "chapter_RR"
                                       }
                                    },
                                    " for guidance in converting Decimal Visual Acuity to other customarily used display notation such as 20/20 in the US and 6/6 in Britain."
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
            }
         ],
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Decimal Visual Acuity",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2",
            "table_C.8.25.12-2"
         ],
         "entity" : "Measurements",
         "usage" : "U",
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "name" : "Person's Address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0008,1250)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
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
                     "el" : "orderedlist",
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
                           "content" : [
                              "\n                        ",
                              {
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
               ]
            }
         ]
      },
      "(0028,0108)" : {
         "desc" : "The minimum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0024,0317)[<0>](0024,0344)[<1>](0024,0202)" : {
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Algorithm Source",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "entity" : "Measurements"
      },
      "(0024,0114)" : {
         "desc" : [
            "Information used to represent a patient's clinical parameters during an ophthalmic test.",
            "Only a single Item shall be included in this sequence.",
            "Required if Measurement Laterality (0024,0113) is L or B."
         ],
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1"
         ],
         "name" : "Ophthalmic Patient Clinical Information Left Eye Sequence",
         "entity" : "Measurements",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0013)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0024,0058)[<0>](0024,0307)" : {
         "desc" : "The software version identifier assigned to the data set.",
         "req" : "1",
         "usage" : "M",
         "name" : "Data Set Version",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1",
            "table_10-22"
         ]
      },
      "(0012,0063)" : {
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "De-identification Method",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0024,0115)" : {
         "name" : "Ophthalmic Patient Clinical Information Right Eye Sequence",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1"
         ],
         "entity" : "Measurements",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Information used to represent a patient's clinical parameters during an ophthalmic test.",
            "Only a single Item shall be included in this sequence.",
            "Required if Measurement Laterality (0024,0113) is R or B."
         ]
      },
      "(0040,0260)" : [
         {
            "module" : "General Series",
            "name" : "Performed Protocol Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "3",
            "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence."
         },
         {
            "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
            "req" : "3",
            "usage" : "M",
            "name" : "Performed Protocol Code Sequence",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "entity" : "Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : [
         {
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
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Value Type",
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0008,1110)" : {
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Study",
         "req" : "3",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : [
         {
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : [
         {
            "req" : "1",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0008,1049)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(0024,0320)[<0>](0024,0344)[<1>](0066,0032)" : {
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "req" : "3",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-19"
         ],
         "name" : "Algorithm Parameters",
         "entity" : "Measurements"
      },
      "(0024,0317)[<0>](0024,0325)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "entity" : "Measurements",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8.26.3-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,0015)" : {
         "name" : "Body Part Examined",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L"
                  }
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
         ]
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "entity" : "Measurements",
         "req" : "1C"
      },
      "(0008,1090)" : [
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "module" : "General Equipment",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "req" : "3"
         },
         {
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "entity" : "Equipment",
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
         }
      ],
      "(0012,0021)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "req" : "2",
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
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : [
         {
            "req" : "1C",
            "module" : "General Series",
            "name" : "Universal Entity ID Type",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
            "usage" : "M",
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
         {
            "req" : "1C",
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Universal Entity ID Type",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-17"
            ],
            "entity" : "Series",
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
            ]
         }
      ],
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0024,0032)[<0>](0024,0033)" : {
         "desc" : [
            "The device strategy used to monitor the patient's fixation.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Fixation Monitoring Code Sequence",
         "entity" : "Measurements"
      },
      "(0024,0020)" : {
         "req" : "1",
         "name" : "Background Luminance",
         "module" : "Visual Field Static Perimetry Test Parameters",
         "mod_tables" : [
            "table_C.8.26.2-1"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "desc" : [
            "Background luminance of the device, in candelas per square meter (cd/m\u00b2).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This value is easily convertible to apostilb, which is used only in perimetry and is not a standardized unit."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : [
         {
            "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
            "req" : "3",
            "module" : "General Series",
            "name" : "Protocol Context Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "usage" : "M"
         },
         {
            "req" : "3",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "entity" : "Series",
            "name" : "Protocol Context Sequence",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16"
            ],
            "usage" : "M",
            "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence."
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Encrypted Content",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : [
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "module" : "General Series",
            "name" : "Person Name",
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
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Person Name",
            "entity" : "Series"
         }
      ],
      "(fffa,fffa)[<0>](0400,0305)" : {
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0200)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0024,0115)[<0>](0024,0112)" : {
         "req" : "2",
         "usage" : "U",
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "name" : "Refractive Parameters Used on Patient Sequence",
         "entity" : "Measurements",
         "desc" : [
            "Refractive parameters used when performing visual field test.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0024,0115)[<0>](0024,0110)" : {
         "desc" : [
            "Measurements of a patient's visual acuity.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.26.6-1",
            "table_C.8.26.6-2"
         ],
         "module" : "Ophthalmic Patient Clinical Information and Test Lens Parameters",
         "name" : "Visual Acuity Measurement Sequence",
         "entity" : "Measurements",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0010,2203)" : {
         "req" : "2C",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0024,0038)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Measurements",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Number of Visual Stimuli",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "desc" : [
            "The total number of visual stimuli presented to the patient. This includes the number of stimuli repetitions.",
            "Required if Presented Visual Stimuli Data Flag (0024,0037) is YES."
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-11"
            ],
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0024,0086)" : {
         "desc" : [
            "Whether foveal sensitivity was measured.",
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
            }
         ],
         "name" : "Foveal Sensitivity Measured",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
            "req" : "1",
            "entity" : "Series",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0012,0071)" : {
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
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "req" : "3"
      },
      "(0024,0032)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Reliability",
         "name" : "Fixation Sequence",
         "mod_tables" : [
            "table_C.8.26.3-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "The patient's gaze stability information during the visual field test.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0024,0064)[<0>](0024,0083)[<1>](0066,0036)" : {
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "usage" : "M",
         "name" : "Algorithm Name",
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-19"
         ],
         "entity" : "Measurements"
      },
      "(0024,0320)[<0>](0024,0325)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1C"
      },
      "(0024,0122)" : {
         "usage" : "M",
         "module" : "Visual Field Static Perimetry Test Measurements",
         "entity" : "Measurements",
         "name" : "Screening Baseline Measured Sequence",
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "req" : "1C",
         "desc" : [
            "Information about the starting luminance screening values.",
            "One or more Items shall be included in this sequence.",
            "Required if the value for Screening Baseline Measured (0024,0120) is YES."
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0024,0064)[<0>](0024,0307)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_10-22"
         ],
         "module" : "Visual Field Static Perimetry Test Results",
         "name" : "Data Set Version",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The software version identifier assigned to the data set."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : [
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Referenced SOP Sequence",
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "module" : "Visual Field Static Perimetry Measurements Series",
            "name" : "Referenced SOP Sequence",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.26.1-1",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C"
         }
      ],
      "(0024,0320)[<0>](0024,0325)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Visual Field Static Perimetry Test Results",
         "entity" : "Measurements",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.26.5-1",
            "table_C.8.26.3-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0024,0089)[<0>](0024,0095)" : {
         "desc" : [
            "Whether the retested stimulus presented was seen by the patient.",
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
            }
         ],
         "mod_tables" : [
            "table_C.8.26.4-1"
         ],
         "module" : "Visual Field Static Perimetry Test Measurements",
         "name" : "Retest Stimulus Seen",
         "entity" : "Measurements",
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
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.1-1:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.2-1 after (0024,0016))",
      "Can't handle table_8.8-1 (in table_C.8.26.2-1 after (0024,0021))",
      "Can't handle table_8.8-1 (in table_C.8.26.2-1 after (0024,0024))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1 after (0024,0033))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1:table_C.8.26.3-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1:table_C.8.26.3-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1:table_C.8.26.3-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1:table_C.8.26.3-2:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.3-1:table_C.8.26.3-2:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.26.4-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.4-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.26.4-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.4-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_C.8.26.3-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_C.8.26.3-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_C.8.26.3-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_C.8.26.3-2:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.26.5-1:table_C.8.26.3-2:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}