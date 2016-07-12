var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.32.1-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.32.1-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.32.1-1 after (0028,7022))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.1-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.1-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.2-1 after (0028,702C))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.2-1 after (0028,702E))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.1-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.3-1 after (0028,702D))",
      "Can't handle table_8.8-1 (in table_C.32.3-1:table_C.32.3.1-1 after (0040,4009))"
   ],
   "tags" : {
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Station Name",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0028,7026)" : {
         "name" : "Measured Characteristics",
         "req" : [
            "Characteristic(s) which are measured by the measurement equipment.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "UNIFORMITY",
                     "Luminance uniformity"
                  ],
                  [
                     "LUMINANCE",
                     "Luminance"
                  ],
                  [
                     "CHROMATICITY",
                     "Chromaticity"
                  ],
                  [
                     "ILLUMINANCE",
                     "Illuminance"
                  ]
               ],
               "type" : "variablelist"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of measuring multiple characteristics."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0028,7026)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : [
            "Characteristic(s) which are measured by the measurement equipment.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "UNIFORMITY",
                     "Luminance uniformity"
                  ],
                  [
                     "LUMINANCE",
                     "Luminance"
                  ],
                  [
                     "CHROMATICITY",
                     "Chromaticity"
                  ],
                  [
                     "ILLUMINANCE",
                     "Illuminance"
                  ]
               ],
               "type" : "variablelist"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of measuring multiple characteristics."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Measured Characteristics"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0018,1000)" : {
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "req" : "The measurement equipment serial number.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Device Serial Number"
      },
      "(0028,7000)[<0>](0040,1104)" : {
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ]
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 }
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
         ],
         "req" : "3",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Person's Telecom Information"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "usage" : "Contains SOP Common information.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,701c)[<4>](0028,701f)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "req" : [
            [
               "Luminance in candelas per square meter (cd/m",
               {
                  "content" : [
                     "2"
                  ],
                  "el" : "superscript"
               },
               ") at the measurement location."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c5467ca3-bcb6-42c6-a021-62e740cd2457"
                     },
                     "el" : "para",
                     "content" : [
                        "Each measured luminance includes both ambient light and light from the display device."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Luminance Value"
      },
      "(0028,7008)[<0>](0028,7025)" : {
         "name" : "Ambient Light Value Source",
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "req" : [
            "Source of the reflected ambient light value.",
            {
               "list" : [
                  [
                     "DEFAULT",
                     "a configured default value was used."
                  ],
                  [
                     "MEASURED",
                     "the value was measured at the time of the other measurements."
                  ],
                  [
                     "PROVIDED",
                     "the value was provided by an external source."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Reflected Ambient Light (2010,0160) is present."
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "entity" : "",
         "module" : "Target Luminance Characteristics"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4035)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : [
            "Human performer(s) responsible for the results.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Actual Human Performer Sequence"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4035)[<4>](0040,4037)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Name of the human performer.",
         "name" : "Human Performer's Name"
      },
      "(0028,7008)[<0>](0028,7020)" : {
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "desc" : null,
         "req" : "User defined text to describe the user defined target luminance curve.",
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "Luminance Response Description"
      },
      "(0028,7023)[<0>](0028,700a)[<1>](0028,700c)" : {
         "name" : "Configuration Name",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "User-defined name for the Display Subsystem Configuration.",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "Display System"
      },
      "(0028,700f)[<0>](0028,7003)" : {
         "name" : "Display Subsystem ID",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "The Display Subsystem ID of the item in the Display Subsystem Sequence (0028,7023) to which these results apply.",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "entity" : "",
         "module" : "QA Results"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0028,7023)[<0>](0028,7006)" : {
         "req" : [
            "Current overall status of the Display Subsystem.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.32.1.1"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "System Status",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Deidentification Action",
         "module" : "SOP Common",
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
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "el" : "para"
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
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       },
                                       "el" : "olink"
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
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0018,1202)" : {
         "name" : "DateTime of Last Calibration",
         "req" : [
            "Date and time of the last calibration of the measurement equipment.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This is likely different than the date of the calibration of the Display System itself."
                     ],
                     "attrs" : {
                        "xml:id" : "para_724463d9-49fc-4e52-92db-0d214891fa0b"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,701c)[<4>](0028,7018)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "req" : [
            "A single measured white point recorded for the display subsystem.",
            "The white point is recorded as a CIE xy chromaticity with two dimensionless floating point values where the first is the x value and the second is the y value."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "CIExy White Point"
      },
      "(0008,0110)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0018,1000)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "The measurement equipment serial number.",
         "name" : "Device Serial Number",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0123)" : {
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Instance Number",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0028,7014)" : {
         "name" : "Measurement Equipment Type",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Type of measurement equipment.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.32.1.2"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0008,1090)" : {
         "req" : "Manufacturer's model name of the measurement equipment.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Manufacturer's Model Name",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "MAC Algorithm",
         "usage" : "Contains SOP Common information.",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
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
               ]
            }
         ],
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4035)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results",
         "name" : "Actual Human Performer Sequence",
         "req" : [
            "Human performer(s) responsible for the results.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "Contains SOP Common information.",
         "req" : "1C"
      },
      "(0028,7000)[<0>](0040,1103)" : {
         "module" : "Display System",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,7023)[<0>](0028,7022)" : {
         "req" : "Type of technology used in the Display Device",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Display Device Type Code Sequence",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4035)[<4>](0040,4009)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "module" : "QA Results",
         "name" : "Human Performer Code Sequence",
         "req" : [
            "Coded identification of the human performer.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0028,7013)" : {
         "name" : "Measurement Functions",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Measurement functions of the measurement equipment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PHOTOMETER",
                     "measurement of light intensity"
                  ],
                  [
                     "COLORIMETER",
                     "measurement of energy along the visible spectrum"
                  ],
                  [
                     "ILLUMINOMETER",
                     "measurement of illumination (ambient luminance)"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of performing multiple functions."
         ],
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4035)[<4>](0040,4037)" : {
         "req" : "Name of the human performer.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Human Performer's Name",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null
      },
      "(0028,7023)[<0>](0028,700a)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Available Display Subsystem Configurations.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Display Subsystem Configuration Sequence",
         "module" : "Display System",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common"
      },
      "(0028,7008)[<0>](0028,7009)" : {
         "req" : [
            "Number that identifies this Luminance Characteristics item.",
            "The value shall be unique within the Target Luminance Characteristics Sequence (0028,7008)."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "Luminance Characteristics ID",
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ]
      },
      "(0008,0016)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "SOP Class UID",
         "module" : "SOP Common",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0028,7001)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System",
         "name" : "Number of Display Subsystems",
         "req" : "Number of Display Subsystems in the Display System.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0028,7014)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : [
            "Type of measurement equipment.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.32.1.2"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Measurement Equipment Type"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](2010,0160)" : {
         "name" : "Reflected Ambient Light",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Reflected ambient light in candelas per square meter (cd/m",
            {
               "el" : "superscript",
               "content" : [
                  "2"
               ]
            },
            ") when the measurements were taken."
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,702e)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Visual Evaluation Method Code Sequence",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Coded description of the methodology used during this visual evaluation.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,700f)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Results of QA activities.",
            "Exactly one Item shall be included for each Display Subsystem present in the Display System."
         ],
         "name" : "QA Results Sequence",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "entity" : ""
      },
      "(0028,7023)[<0>](0028,700a)[<1>](0028,700b)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Number that identifies a specific display subsystem configuration within the Display Subsystem Configuration Sequence (0028,700A).",
            "The value shall be unique within the Display Subsystem Configuration Sequence (0028,700A)."
         ],
         "name" : "Configuration ID",
         "module" : "Display System",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "Digital Signature DateTime"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4035)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Actual Human Performer Sequence",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Human performer(s) responsible for the results.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4035)[<4>](0040,4036)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Human Performer's Organization",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Organization to which the human performer is accountable for the results."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,701c)" : {
         "req" : [
            "Measured Luminance Response Values",
            "The number of Items shall match the value of Number of Luminance Points (0028,701B)."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Luminance Response Sequence",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "desc" : null
      },
      "(0028,7008)[<0>](0028,701e)" : {
         "req" : [
            "The maximum luminance value of the target luminance curve, in candelas per square meter (cd/m",
            {
               "el" : "superscript",
               "content" : [
                  "2"
               ]
            },
            ")."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "Target Maximum Luminance",
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Private Group Reference"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Mapping Resource UID"
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0008,1090)" : {
         "req" : "Manufacturer's model name of the measurement equipment.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Manufacturer's Model Name",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null
      },
      "(0008,1010)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : "",
         "module" : "Display System",
         "name" : "Station Name",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "User defined name identifying the Display System."
      },
      "(0028,7008)[<0>](0028,701c)[<1>](0028,701f)" : {
         "name" : "Luminance Value",
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "req" : [
            "Luminance in candelas per square meter (cd/m",
            {
               "content" : [
                  "2"
               ],
               "el" : "superscript"
            },
            ") corresponding to the DDL Value."
         ],
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "Target Luminance Characteristics"
      },
      "(0008,0105)" : {
         "desc" : [
            "The identifier of the Mapping Resource.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.4"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Mapping Resource",
         "usage" : "Contains SOP Common information.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0028,7014)" : {
         "name" : "Measurement Equipment Type",
         "req" : [
            "Type of measurement equipment.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.32.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     }
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
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0028,7023)[<0>](0028,700a)[<1>](0028,700e)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System",
         "name" : "Referenced Target Luminance Characteristics ID",
         "req" : [
            "References the intended luminance characteristics for this Configuration of this Display Subsystem.",
            [
               "The value is the Luminance Characteristics ID (0028,7009) within the Target Luminance Characteristics Sequence (0028,7008) of the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.32.2"
                  }
               },
               "."
            ]
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Certified Timestamp"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,7008)[<0>](0028,701a)" : {
         "name" : "Gamma Value",
         "req" : [
            "The Gamma value for generating the target luminance curve.",
            "Required if the value of Display Function Type (0028,7019) is GAMMA."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "desc" : null,
         "module" : "Target Luminance Characteristics"
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "Manufacturer of the measurement equipment.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "module" : "Display System"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0100,0426)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)" : {
         "req" : [
            "Describes the measurement equipment (if any) used in deriving the results. This may describe standalone equipment or may re-iterate details of equipment built into the Display System.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Measurement Equipment Sequence",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Contribution DateTime"
      },
      "(0028,7008)[<0>](2010,0160)" : {
         "name" : "Reflected Ambient Light",
         "req" : [
            "Reflected ambient light in candelas per square meter (cd/m",
            {
               "content" : [
                  "2"
               ],
               "el" : "superscript"
            },
            ") when the measurements were taken."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "module" : "Target Luminance Characteristics"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)[<4>](0008,1140)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "module" : "QA Results",
         "name" : "Referenced Image Sequence",
         "req" : [
            "Reference to the image instance containing the test pattern presented for visual evaluation.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Test Pattern Code Sequence (0028,702C) is absent in this item. May be present otherwise."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0018,1202)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results",
         "name" : "DateTime of Last Calibration",
         "req" : [
            "Date and time of the last calibration of the measurement equipment.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_724463d9-49fc-4e52-92db-0d214891fa0b"
                     },
                     "el" : "para",
                     "content" : [
                        "This is likely different than the date of the calibration of the Display System itself."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,7008)[<0>](0028,701c)" : {
         "req" : [
            "Luminance Response Values for the user defined target luminance curve.",
            "The number of Items shall match the value of Number of Luminance Points (0028,701B).",
            "Required if the value of Display Function Type (0028,7019) is USER_DEFINED."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "Luminance Response Sequence",
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "desc" : null
      },
      "(0028,7000)[<0>](0040,1101)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Display System",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7025)" : {
         "name" : "Ambient Light Value Source",
         "req" : [
            "Source of the ambient light value.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DEFAULT",
                     "a configured default value was used."
                  ],
                  [
                     "MEASURED",
                     "the value was measured at the time of the other measurements."
                  ],
                  [
                     "PROVIDED",
                     "the value was provided by an external source."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "desc" : null,
         "module" : "QA Results"
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0028,7026)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Characteristic(s) which are measured by the measurement equipment.",
            {
               "list" : [
                  [
                     "UNIFORMITY",
                     "Luminance uniformity"
                  ],
                  [
                     "LUMINANCE",
                     "Luminance"
                  ],
                  [
                     "CHROMATICITY",
                     "Chromaticity"
                  ],
                  [
                     "ILLUMINANCE",
                     "Illuminance"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of measuring multiple characteristics."
         ],
         "name" : "Measured Characteristics",
         "module" : "Display System",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : ""
      },
      "(0008,1090)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "Manufacturer's model name of the Display System.",
         "name" : "Manufacturer's Model Name",
         "module" : "Display System",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,701c)[<4>](0028,701f)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            [
               "Luminance in candelas per square meter (cd/m",
               {
                  "content" : [
                     "2"
                  ],
                  "el" : "superscript"
               },
               ") at the measurement location."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e3992e1e-2ce0-4195-b658-0b95153319c4"
                     },
                     "content" : [
                        "Each measured luminance includes both ambient light and light from the display device."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Luminance Value",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)[<4>](0028,7029)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "desc" : null,
         "module" : "QA Results",
         "name" : "Test Result",
         "req" : [
            "Result of a test.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PASS",
                     "Evaluated as acceptable"
                  ],
                  [
                     "FAIL",
                     "Evaluated as not acceptable"
                  ],
                  [
                     "SKIP",
                     "Not evaluated"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)" : {
         "req" : [
            "The most recent luminance uniformity result.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Luminance Uniformity Result Sequence",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ]
      },
      "(0100,0420)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4051)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Date and Time at which the QA job that generated the results ended.",
         "name" : "Performed Procedure Step End DateTime",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](2010,0160)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "entity" : "",
         "module" : "QA Results",
         "name" : "Reflected Ambient Light",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Reflected ambient light in candelas per square meter (cd/m",
            {
               "el" : "superscript",
               "content" : [
                  "2"
               ]
            },
            ") when the measurements were taken."
         ]
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0018,1000)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "The measurement equipment serial number.",
         "name" : "Device Serial Number",
         "module" : "Display System",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : ""
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : ""
      },
      "(0100,0424)" : {
         "entity" : "",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0028,7023)[<0>](0008,0070)" : {
         "req" : [
            "Manufacturer of the Display Device in the Display Subsystem.",
            "If the Display Subsystem is provided integrated into the Display System (e.g. for a tablet) and the Manufacturer is not otherwise known, the Manufacturer of the Display System may be recorded here.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_4740404c-caa0-41ff-830f-3c7a0a8354b2"
                     },
                     "el" : "para",
                     "content" : [
                        "Each Display Subsystem is considered to have a single Display Device."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Manufacturer",
         "module" : "Display System",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4050)" : {
         "name" : "Performed Procedure Step Start DateTime",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Date and Time at which the QA job that generated the results started.",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,7000)[<0>](0008,0080)" : {
         "module" : "Display System",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4035)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "module" : "QA Results",
         "name" : "Actual Human Performer Sequence",
         "req" : [
            "Human performer(s) responsible for the results.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "entity" : "",
         "module" : "QA Results",
         "name" : "Display Calibration Result Sequence",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "The most recent calibration result.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "MAC ID Number"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Describes the measurement equipment (if any) used in deriving the results. This may describe standalone equipment or may re-iterate details of equipment built into the Display System.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Measurement Equipment Sequence",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0028,7013)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : [
            "Measurement functions of the measurement equipment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PHOTOMETER",
                     "measurement of light intensity"
                  ],
                  [
                     "COLORIMETER",
                     "measurement of energy along the visible spectrum"
                  ],
                  [
                     "ILLUMINOMETER",
                     "measurement of illumination (ambient luminance)"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of performing multiple functions."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Measurement Functions"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0008,0070)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : "Manufacturer of the measurement equipment.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Manufacturer"
      },
      "(0008,0117)" : {
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Context UID",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0008,0106)" : {
         "name" : "Context Group Version",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.5"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0018,1000)" : {
         "req" : "The measurement equipment serial number.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Device Serial Number",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ]
      },
      "(0018,9004)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)" : {
         "req" : [
            "The most recent visual evaluation result.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Visual Evaluation Result Sequence",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "desc" : null
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0018,1202)" : {
         "module" : "Display System",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : "",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Date and time of the last calibration of the measurement equipment.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This is likely different than the date of the calibration of the Display Subsystem itself."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c1f76490-7cc2-42ad-91e8-7614b019d42e"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "DateTime of Last Calibration"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0028,7000)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Person's Address",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "usage" : "Contains SOP Common information.",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,7023)[<0>](0028,7012)" : {
         "name" : "Measurement Equipment Sequence",
         "req" : [
            "Describes measurement equipment (if any) built into the Display Subsystem.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "module" : "Display System"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0028,700f)[<0>](0028,7010)" : {
         "name" : "Display Subsystem QA Results Sequence",
         "req" : [
            "Results of QA activities for the identified Display Subsystem.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "module" : "QA Results"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4051)" : {
         "name" : "Performed Procedure Step End DateTime",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Date and Time at which the QA job that generated the results ended.",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7025)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "req" : [
            "Source of the ambient light value.",
            {
               "list" : [
                  [
                     "DEFAULT",
                     "a configured default value was used."
                  ],
                  [
                     "MEASURED",
                     "the value was measured at the time of the other measurements."
                  ],
                  [
                     "PROVIDED",
                     "the value was provided by an external source."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Ambient Light Value Source"
      },
      "(0028,7023)[<0>](0028,7012)[<1>](0028,7013)" : {
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "req" : [
            "Measurement functions of the measurement equipment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PHOTOMETER",
                     "measurement of light intensity"
                  ],
                  [
                     "COLORIMETER",
                     "measurement of energy along the visible spectrum"
                  ],
                  [
                     "ILLUMINOMETER",
                     "measurement of illumination (ambient luminance)"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of performing multiple functions."
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Measurement Functions"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4035)[<4>](0040,4009)" : {
         "req" : [
            "Coded identification of the human performer.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Human Performer Code Sequence",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)" : {
         "name" : "Luminance Result Sequence",
         "req" : [
            "The most recent luminance result.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,700b)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "req" : [
            "The Configuration ID of the item in the Display Subsystem Configuration Sequence (0028,700A) under which the QA was performed.",
            "A given Configuration ID value shall not appear more than once in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Configuration ID"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0040,4035)[<4>](0040,4036)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "module" : "QA Results",
         "name" : "Human Performer's Organization",
         "req" : "Organization to which the human performer is accountable for the results.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0008,1090)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Manufacturer's Model Name",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Manufacturer's model name of the measurement equipment."
      },
      "(0028,7000)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "Display System"
      },
      "(0008,0013)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,701c)[<4>](0028,7017)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "req" : [
            "The integer Digital Driving Level (DDL) at which this luminance value was measured.",
            "The DDL Value for the first item in the sequence shall be 0. The DDL Value of the last item in the sequence shall be the maximum DDL value. Two items in the sequence shall not have the same DDL value. The DDL Value of the items in the sequence shall increase monotonically."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "DDL Value"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0028,7008)[<0>](0028,7019)" : {
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "req" : [
            "The type of Display Function used to define the target luminance curve.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.32.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Enumerated Values."
            ]
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "Display Function Type"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0008,0070)" : {
         "req" : "Manufacturer of the measurement equipment.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Manufacturer",
         "module" : "QA Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null
      },
      "(0008,0201)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "el" : "para",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "el" : "para",
                     "content" : [
                        "For example:"
                     ]
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     }
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "el" : "para"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0028,7023)[<0>](0028,7007)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System",
         "name" : "System Status Comment",
         "req" : "A free text comment about the status of the Display Subsystem.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,701b)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "The number of luminance measurements recorded.",
            "The number depends on the test pattern specified in the Measurement Pattern Code Sequence (0028,702D).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Most commonly the value is 5, which is a total of the locations on the faceplate of the Display Device (center and four corners) as defined by the TG18-UNL80 or TG18-UNL10 test pattern."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a747fd37-c584-402a-986e-5139294643ad"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Number of Luminance Points"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4051)" : {
         "name" : "Performed Procedure Step End DateTime",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Date and Time at which the QA job that generated the results ended.",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ],
         "module" : "QA Results",
         "name" : "Configuration QA Results Sequence",
         "req" : "Results of QA activities for the identified Display Subsystem in the identified configuration",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0028,7008)[<0>](0028,701c)[<1>](0028,7017)" : {
         "module" : "Target Luminance Characteristics",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "req" : [
            "The integer Digital Driving Level (DDL) for this luminance value.",
            "The DDL Value for the first item in the sequence shall be 0. The DDL Value of the last item in the sequence shall be the maximum DDL value. Two items in the sequence shall not have the same DDL value. The DDL Value of the items in the sequence shall increase monotonically."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "name" : "DDL Value"
      },
      "(0008,1040)" : {
         "req" : "Department name in the institution where the Display System is located.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Institutional Department Name",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null
      },
      "(0028,7023)[<0>](0008,1090)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : "",
         "module" : "Display System",
         "name" : "Manufacturer's Model Name",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Manufacturer's model name of the Display Device in the Display Subsystem.",
            "If the Display Subsystem is provided integrated into the Display System (e.g. for a tablet) and the Model Name is not otherwise known, the Model Name of the Display System may be recorded here."
         ]
      },
      "(0008,0053)" : {
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0028,7000)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : "",
         "module" : "Display System",
         "name" : "Equipment Administrator Sequence",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Point of contact for problems with the equipment.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7017)" : {
         "module" : "QA Results",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "The integer Digital Driving Level (DDL) at which the luminance values were measured.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Luminance Uniformity measurement uses the same DDL value for all measurements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_626c22ec-66cc-4dbb-baea-5bb8920d89ac"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "DDL Value"
      },
      "(0028,7000)[<0>](0040,a123)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System",
         "name" : "Person Name",
         "req" : "Name of the person or role that is administrating the equipment.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common"
      },
      "(0008,0122)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4050)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Date and Time at which the QA job that generated the results started.",
         "name" : "Performed Procedure Step Start DateTime",
         "module" : "QA Results",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,701b)" : {
         "name" : "Number of Luminance Points",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "The number of luminance measurements recorded.",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.4-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0018,a001)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0028,7026)" : {
         "name" : "Measured Characteristics",
         "req" : [
            "Characteristic(s) which are measured by the measurement equipment.",
            {
               "list" : [
                  [
                     "UNIFORMITY",
                     "Luminance uniformity"
                  ],
                  [
                     "LUMINANCE",
                     "Luminance"
                  ],
                  [
                     "CHROMATICITY",
                     "Chromaticity"
                  ],
                  [
                     "ILLUMINANCE",
                     "Illuminance"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of measuring multiple characteristics."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Time of Last Calibration"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0028,7023)[<0>](0018,1000)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "module" : "Display System",
         "name" : "Device Serial Number",
         "req" : [
            "Manufacturer's serial number of the Display Device (i.e. monitor device) in the Display Subsystem.",
            "If the Display Subsystem is provided integrated into the Display System (e.g. for a tablet) and the Device Serial Number is not otherwise known, the Device Serial Number of the Display System may be recorded here."
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)[<4>](0028,702c)" : {
         "req" : [
            "Coded identification of the test pattern presented for visual evaluation.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Test Pattern Code Sequence",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,701c)" : {
         "name" : "Luminance Response Sequence",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Recorded Luminance Response Values",
            "The number of Items shall match the value of Number of Luminance Points (0028, 701B).",
            "The Items shall be stored in major row order (from left to right then from top to bottom)."
         ],
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,7008)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "module" : "Target Luminance Characteristics",
         "name" : "Target Luminance Characteristics Sequence",
         "req" : [
            "Target luminance characteristics to which the Display Subsystem can be calibrated.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "req" : "Manufacturer's model name of the measurement equipment.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "module" : "QA Results"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0028,7008)[<0>](0028,701b)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "entity" : "",
         "module" : "Target Luminance Characteristics",
         "name" : "Number of Luminance Points",
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "req" : [
            "The number of luminance points in the user defined target luminance curve.",
            "Required if the value of Display Function Type (0028,7019) is USER_DEFINED."
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0008,0070)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Manufacturer of the measurement equipment.",
         "name" : "Manufacturer"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : ""
      },
      "(0008,0070)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "Manufacturer of the Display System.",
         "name" : "Manufacturer",
         "module" : "Display System",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "entity" : ""
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Encrypted Content",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Test Results of a visual evaluation of the display subsystem output.",
            "May include evaluation of multiple test pattern images, as long as all items in this Sequence are generated in a single QA test session.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Visual Evaluation Test Sequence"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)" : {
         "name" : "Measurement Equipment Sequence",
         "req" : [
            "Describes the measurement equipment (if any) used in deriving the results. This may describe standalone equipment or may re-iterate details of equipment built into the Display System.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results"
      },
      "(0008,010f)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The identifier of the Context Group.",
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
         "module" : "SOP Common",
         "name" : "Context Identifier",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)[<4>](0028,702a)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "User comment on the result or performance of the test.",
            "Might include scoring values that are not intended to be machine readable."
         ],
         "name" : "Test Result Comment",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7009)" : {
         "req" : "The Luminance Characteristics ID of the item in the Target Luminance Characteristics Sequence (0028,7008) that represents the target values used during this calibration.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Luminance Characteristics ID",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4035)[<4>](0040,4036)" : {
         "req" : "Organization to which the human performer is accountable for the results.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Human Performer's Organization",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0028,7014)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results",
         "name" : "Measurement Equipment Type",
         "req" : [
            "Type of measurement equipment.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.32.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0028,7008)[<0>](0028,701d)" : {
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "Target Luminance Characteristics",
         "name" : "Target Minimum Luminance",
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "req" : [
            "The minimum luminance value of the target luminance curve, in candelas per square meter (cd/m",
            {
               "el" : "superscript",
               "content" : [
                  "2"
               ]
            },
            ")."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.1"
               },
               "el" : "xref"
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
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "name" : "SOP Instance UID"
      },
      "(0008,0012)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0028,7023)" : {
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : [
            "Description of each Display Subsystem.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Display Subsystem Sequence",
         "module" : "Display System",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0028,7014)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : "",
         "module" : "QA Results",
         "name" : "Measurement Equipment Type",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Type of measurement equipment.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.32.1.2"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0018,1000)" : {
         "req" : "The measurement equipment serial number.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Device Serial Number",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0028,7013)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Measurement Functions",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Measurement functions of the measurement equipment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PHOTOMETER",
                     "measurement of light intensity"
                  ],
                  [
                     "COLORIMETER",
                     "measurement of energy along the visible spectrum"
                  ],
                  [
                     "ILLUMINOMETER",
                     "measurement of illumination (ambient luminance)"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of performing multiple functions."
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7012)[<4>](0008,1090)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Manufacturer's model name of the measurement equipment.",
         "name" : "Manufacturer's Model Name",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4035)[<4>](0040,4037)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "module" : "QA Results",
         "name" : "Human Performer's Name",
         "req" : "Name of the human performer.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "",
         "usage" : "Contains SOP Common information.",
         "req" : "2",
         "name" : "Source of Previous Values"
      },
      "(0028,7023)[<0>](0028,7002)" : {
         "module" : "Display System",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "req" : [
            "References the current configuration of the Display Subsystem.",
            "The value is the Configuration ID (0028,700B) of the item in the Display Subsystem Configuration Sequence (0028,700A)."
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Current Configuration ID"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
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
         "module" : "SOP Common"
      },
      "(0028,7023)[<0>](0028,7005)" : {
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null,
         "req" : "A free text description of the Display Subsystem.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Display Subsystem Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,7021)" : {
         "name" : "White Point Flag",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Whether white point values were also recorded at each location.",
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
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,701c)[<4>](0028,7018)" : {
         "name" : "CIExy White Point",
         "req" : [
            "White Point at the measurement location,",
            "The white point is recorded as a CIE xy chromaticity with two dimensionless floating point values where the first is the x value and the second is the y value."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "module" : "QA Results"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0008,0081)" : {
         "req" : "Mailing address of institution where the Display System is located.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Institution Address",
         "module" : "Display System",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ]
      },
      "(0028,7023)[<0>](0028,7004)" : {
         "req" : "User-defined name for the Display Subsystem.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Display Subsystem Name",
         "module" : "Display System",
         "entity" : "",
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "desc" : null
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0040,4050)" : {
         "req" : "Date and Time at which the QA job that generated the results started.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Performed Procedure Step Start DateTime",
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4035)[<4>](0040,4037)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : "Name of the human performer.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Human Performer's Name"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0008,0070)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results",
         "name" : "Manufacturer",
         "req" : "Manufacturer of the measurement equipment.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common"
      },
      "(0028,7023)[<0>](0028,7003)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "module" : "Display System",
         "name" : "Display Subsystem ID",
         "req" : [
            "Number that identifies a specific display subsystem within a Display System.",
            "The value shall be unique within the Display Subsystem Sequence (0028,7023)."
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device."
      },
      "(0028,7023)[<0>](0028,700a)[<1>](0028,700d)" : {
         "module" : "Display System",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "entity" : "",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "A free text description of the Display Subsystem Configuration.",
         "name" : "Configuration Description"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4035)[<4>](0040,4036)" : {
         "module" : "QA Results",
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Organization to which the human performer is accountable for the results.",
         "name" : "Human Performer's Organization"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0028,7000)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.32.1-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "",
         "module" : "Display System",
         "name" : "Institution Address",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "req" : "3"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0028,7013)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Measurement Functions",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Measurement functions of the measurement equipment.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PHOTOMETER",
                     "measurement of light intensity"
                  ],
                  [
                     "COLORIMETER",
                     "measurement of energy along the visible spectrum"
                  ],
                  [
                     "ILLUMINOMETER",
                     "measurement of illumination (ambient luminance)"
                  ]
               ],
               "type" : "variablelist"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of performing multiple functions."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Person's Address",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)[<4>](0018,1202)" : {
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Date and time of the last calibration of the measurement equipment.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This is likely different than the date of the calibration of the Display System itself."
                     ],
                     "attrs" : {
                        "xml:id" : "para_724463d9-49fc-4e52-92db-0d214891fa0b"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "DateTime of Last Calibration",
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : ""
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Related General SOP Class UID"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7024)[<3>](0028,7012)[<4>](0028,7026)" : {
         "name" : "Measured Characteristics",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Characteristic(s) which are measured by the measurement equipment.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "UNIFORMITY",
                     "Luminance uniformity"
                  ],
                  [
                     "LUMINANCE",
                     "Luminance"
                  ],
                  [
                     "CHROMATICITY",
                     "Chromaticity"
                  ],
                  [
                     "ILLUMINANCE",
                     "Illuminance"
                  ]
               ],
               "type" : "variablelist"
            },
            "This multi-valued attribute shall contain at most one of each enumerated value. When multiple values are present, the equipment is capable of measuring multiple characteristics."
         ],
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4035)[<4>](0040,4009)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "Human Performer Code Sequence",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Coded identification of the human performer.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7027)[<3>](0028,702d)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.3-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : "Definition of the locations on the display device at which luminance measurements were taken. One measurement is recorded for each location.",
         "name" : "Measurement Pattern Code Sequence"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4051)" : {
         "module" : "QA Results",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "req" : "Date and Time at which the QA job that generated the results ended.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "name" : "Performed Procedure Step End DateTime"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0040,4050)" : {
         "name" : "Performed Procedure Step Start DateTime",
         "req" : "Date and Time at which the QA job that generated the results started.",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results"
      },
      "(0018,1000)" : {
         "module" : "Display System",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "req" : [
            "Manufacturer's serial number of the Display System.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The components of the Display System may also have their own serial numbers."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1e8dd9de-3837-41ea-9344-93d7c741a821"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "name" : "Device Serial Number"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Identifying Private Elements",
         "usage" : "Contains SOP Common information.",
         "req" : "1"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7012)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "module" : "QA Results",
         "name" : "Measurement Equipment Sequence",
         "req" : [
            "Describes the measurement equipment (if any) used in deriving the results. This may describe standalone equipment or may re-iterate details of equipment built into the Display System.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the results of QA performed on the Display Subsystem(s)."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : ""
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0040,4035)[<4>](0040,4009)" : {
         "module" : "QA Results",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "entity" : "",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Coded identification of the human performer.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Human Performer Code Sequence"
      },
      "(0008,0015)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "usage" : "Contains SOP Common information.",
         "req" : "1",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7015)[<3>](0028,7028)[<4>](0008,1140)[<5>](0028,702b)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.2-1"
         ],
         "entity" : "",
         "module" : "QA Results",
         "name" : "Test Image Validation",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Indication of whether the test image was validated as matching the characteristics of the display system (e.g., resolution and bit depth).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MATCHED",
                     "the test image was determined to match"
                  ],
                  [
                     "UNMATCHED",
                     "the test image was not determined to match"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0028,7008)[<0>](0028,7018)" : {
         "usage" : "Describes the target luminance characteristics of the Display Subsystem(s)",
         "req" : [
            "A single measured White Point recorded for the Display Subsystem.",
            "The white point is recorded as a CIE xy chromaticity with two dimensionless floating point values where the first is the x value and the second is the y value."
         ],
         "name" : "CIExy White Point",
         "module" : "Target Luminance Characteristics",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.2-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information."
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "Contains SOP Common information.",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Institution Address"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information.",
         "name" : "Certificate of Signer"
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "req" : "Institution where the Display System is located.",
         "usage" : "Describes the Display System. The Display System has one or more Display Subsystem. A Display Subsystem corresponds to one Display Device.",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.32.1-1"
         ],
         "module" : "Display System"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "usage" : "Contains SOP Common information.",
         "name" : "Coding Scheme UID"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "usage" : "Contains SOP Common information.",
         "req" : "3"
      },
      "(0008,001b)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information.",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "usage" : "Contains SOP Common information."
      },
      "(0028,700f)[<0>](0028,7010)[<1>](0028,7011)[<2>](0028,7016)[<3>](0028,7012)[<4>](0018,1202)" : {
         "mod_tables" : [
            "table_C.32.3-1",
            "table_C.32.3.1-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "QA Results",
         "name" : "DateTime of Last Calibration",
         "usage" : "Describes the results of QA performed on the Display Subsystem(s).",
         "req" : [
            "Date and time of the last calibration of the measurement equipment.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_724463d9-49fc-4e52-92db-0d214891fa0b"
                     },
                     "content" : [
                        "This is likely different than the date of the calibration of the Display System itself."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      }
   }
}
