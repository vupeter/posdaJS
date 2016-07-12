var data = {
   "tags" : {
      "(0020,4000)" : {
         "name" : "Image Comments",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "module" : "Ophthalmic Tomography Image",
         "usage" : "M",
         "desc" : "User-defined comments about the image"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "name" : "Contrast Administration Profile Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "C - Required if contrast was administered"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "name" : "Spatial Resolution",
         "entity" : "Image"
      },
      "(0018,1084)" : {
         "name" : "Intervals Rejected",
         "req" : "2C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "usage" : "C - Required if cardiac synchronization was used"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3"
      },
      "(0028,0004)" : [
         {
            "entity" : "Image",
            "name" : "Photometric Interpretation",
            "req" : "1",
            "usage" : "M",
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "module" : "Ophthalmic Tomography Image",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "usage" : "M",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MONOCHROME2",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "req" : "1",
            "name" : "Photometric Interpretation",
            "entity" : "Image"
         }
      ],
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,1115)" : {
         "usage" : "U",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "req" : "1C"
      },
      "(0008,2228)" : {
         "name" : "Primary Anatomic Structure Sequence",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.5-1",
            "table_10-5",
            "table_10-8"
         ],
         "module" : "Ocular Region Imaged",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
         ]
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "usage" : "C - Required if contrast was administered",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "name" : "Contrast Flow Rate",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Image",
         "name" : "Time of Last Calibration",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "usage" : "M",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Ocular Region Imaged",
         "mod_tables" : [
            "table_C.8.17.5-1",
            "table_10-5"
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Anatomic Region Modifier Sequence"
      },
      "(0018,1803)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available",
         "req" : "3",
         "name" : "NTP Source Address",
         "entity" : "Frame of Reference"
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
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
            "req" : "1",
            "name" : "Modality",
            "entity" : "Series"
         },
         {
            "name" : "Modality",
            "req" : "1",
            "entity" : "Series",
            "module" : "Ophthalmic Tomography Series",
            "mod_tables" : [
               "table_C.8.17.6-1"
            ],
            "usage" : "M",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "OPT",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ]
         }
      ],
      "(0008,0123)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         ],
         "usage" : "M"
      },
      "(0008,0070)" : [
         {
            "req" : "2",
            "name" : "Manufacturer",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "desc" : "Manufacturer of the equipment that produced the composite instances."
         },
         {
            "req" : "1",
            "name" : "Manufacturer",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "usage" : "M"
         }
      ],
      "(0008,009d)[<0>](0008,0080)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1250)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Related Series Sequence",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 }
                              },
                              "\n                      "
                           ]
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
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
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3"
      },
      "(0028,2110)" : {
         "entity" : "Image",
         "name" : "Lossy Image Compression",
         "req" : "1",
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
               },
               "."
            ]
         ],
         "usage" : "M",
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ]
      },
      "(0012,0050)" : {
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
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID",
         "req" : "2"
      },
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "req" : "3",
         "name" : "Service Episode Description",
         "entity" : "Study"
      },
      "(0022,0048)" : {
         "entity" : "Image",
         "name" : "Across-scan Spatial Resolution",
         "req" : "1C",
         "desc" : "The inherent limiting resolution in microns of the acquisition equipment perpendicular to the slice. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Image",
         "name" : "Retrieve URI",
         "req" : "3",
         "desc" : [
            [
               "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with",
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
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0022,001b)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Refractive State Sequence",
         "desc" : [
            "The refractive state of the imaged eye at the time of acquisition.",
            "Zero or one Itemshall be included in this Sequence.",
            "Zero length means the refractive state was not measured."
         ],
         "usage" : "M",
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.6-1",
               "table_10-11"
            ],
            "module" : "Ophthalmic Tomography Series"
         }
      ],
      " (0010,0027) " : {
         "req" : "\n                  3 ",
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
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
         ]
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "name" : "Certificate of Signer",
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
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
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0012,0071)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Clinical Trial Series ID",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,1008)" : {
         "usage" : "M",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3"
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
         "req" : "1C",
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creation Time",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "name" : "Functional Group Pointer",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ]
      },
      "(2050,0020)" : {
         "usage" : "M",
         "desc" : [
            "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values."
                  ]
               ]
            }
         ],
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "entity" : "Image",
         "name" : "Presentation LUT Shape",
         "req" : "1"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "U"
      },
      "(0018,9070)" : {
         "req" : "1C",
         "name" : "Cardiac RR Interval Specified",
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d7ca2bf8-8847-414d-ae35-6145b3c61f88"
                     },
                     "content" : [
                        "Heart Rate (0018,1088) is not used in this Module, since its value can be derived as 1/ Cardiac RR Interval Specified (0018,9070)."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if cardiac synchronization was used"
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
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
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "name" : "Dimension Description Label",
         "req" : "3",
         "entity" : "Image",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : "Free text description that explains the meaning of the dimension.",
         "usage" : "M"
      },
      "(0028,2000)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "ICC Profile",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,1052)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Date",
         "entity" : "Image"
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sex of the named patient.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "2",
         "name" : "Patient's Sex",
         "entity" : "Patient"
      },
      "(0010,0213)" : {
         "name" : "Strain Nomenclature",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ]
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "entity" : "Series",
         "name" : "Person's Telecom Information",
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
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.1"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "usage" : "M",
         "name" : "Quality Control Subject",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "name" : "Digital Signature UID",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
                     "xrefstyle" : "select: label"
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
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0028,1201)" : {
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data",
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
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "desc" : "Instance UID of Related Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Series Instance UID",
         "req" : "1"
      },
      "(0028,0107)" : {
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "name" : "Software Versions",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Series"
      },
      "(0010,0218)" : {
         "req" : "3",
         "name" : "Strain Additional Information",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         ]
      },
      "(0028,0002)" : [
         {
            "name" : "Samples per Pixel",
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
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
            ]
         },
         {
            "desc" : [
               [
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
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "module" : "Ophthalmic Tomography Image",
            "entity" : "Image",
            "name" : "Samples Per Pixel",
            "req" : "1"
         }
      ],
      "(0008,1120)" : {
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para"
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
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "el" : "para"
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
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "el" : "para"
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
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Deidentification Action",
         "req" : "1"
      },
      "(0008,1090)" : [
         {
            "entity" : "Equipment",
            "req" : "3",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "usage" : "M",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "entity" : "Equipment",
            "name" : "Manufacturer's Model Name",
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.2"
               }
            },
            " for further explanation."
         ],
         "name" : "Dimension Organization UID",
         "req" : "1",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "usage" : "M"
      },
      "(0022,0058)" : {
         "name" : "Mydriatic Agent Sequence",
         "req" : "2C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "usage" : "M",
         "desc" : [
            "Information about the agent administered.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "An empty sequence indicates that an agent was used for dilation, but the name was not entered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_38770545-2bdc-4057-b5b1-b04ccdc2a7c7"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Floating Point Value"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
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
               ]
            }
         ],
         "req" : "3",
         "name" : "Person's Telecom Information",
         "entity" : "Series"
      },
      "(0400,0561)" : {
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M"
      },
      "(0020,0013)" : {
         "usage" : "M",
         "desc" : "A number that identifies this Composite object instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Instance Number",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series"
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Description of the Series",
         "req" : "3",
         "name" : "Series Description",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
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
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study"
      },
      "(0010,0212)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Description",
         "usage" : "M",
         "desc" : [
            "The strain of the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "entity" : "Image"
      },
      "(0008,0008)" : {
         "name" : "Image Type",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "module" : "Ophthalmic Tomography Image",
         "desc" : [
            "Image identification characteristics. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.2"
               }
            },
            " for Enumerated Values and Defined Terms and further explanation."
         ],
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "usage" : "M",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Numbers"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0018,1800)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "req" : "1",
         "name" : "Acquisition Time Synchronized"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0010,0219)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "name" : "Strain Code Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "usage" : "M",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "name" : "Date of Last Calibration",
         "entity" : "Image"
      },
      "(0018,1064)" : {
         "entity" : "Image",
         "name" : "Cardiac Framing Type",
         "req" : "1C",
         "desc" : [
            [
               "Description of type of framing performed. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.18.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description and Defined Terms."
            ],
            "Required if type of framing is not time forward from trigger, may be present otherwise."
         ],
         "usage" : "C - Required if cardiac synchronization was used",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0018,1020)" : [
         {
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
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
            "req" : "3",
            "name" : "Software Versions",
            "entity" : "Equipment"
         },
         {
            "entity" : "Equipment",
            "name" : "Software Versions",
            "req" : "1",
            "usage" : "M",
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
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0244)" : {
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "DICOM Media Retrieval Sequence",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series"
      },
      "(0022,0017)[<0>](0022,0002)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Light Path Filter Pass Band",
         "desc" : [
            "Pass band of light path filter in nm. This Attribute has two Values. The first is the shorter and the second the longer wavelength relative to the peak. The values are for the - 3dB nominal (1/2 of peak) pass through intensity.",
            "One of the two Values may be zero length, in which case it is a cutoff filter."
         ],
         "usage" : "M",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ]
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Responsible Organization",
         "req" : "2C",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0018,9004)" : {
         "req" : "3",
         "name" : "Content Qualification",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Content Qualification Indicator",
            {
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
               ],
               "title" : "Enumerated Values:"
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value",
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
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Digital Signature DateTime",
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
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
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
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "usage" : "M",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "HL7 Instance Identifier",
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "name" : "Dimension Index Private Creator",
         "req" : "1C"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0022,000e)" : {
         "req" : "2C",
         "name" : "Degree of Dilation",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "desc" : [
            "The degree of the dilation in mm.",
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0021)" : {
         "entity" : "Patient",
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate Type",
         "entity" : "Image"
      },
      "(0022,0038)" : {
         "entity" : "Image",
         "name" : "Maximum Along-scan Distortion",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Maximum distortion in along-scan direction in % of Along-scan Spatial Resolution. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "XDS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "name" : "Data Elements Signed",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M"
      },
      "(0020,9228)" : {
         "req" : "1",
         "name" : "Concatenation Frame Offset Number",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "module" : "Ophthalmic Tomography Image",
         "desc" : [
            "Offset of the first frame in a multi-frame image of a concatenation.",
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
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "entity" : "Patient",
         "name" : "Series Instance UID",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Context Identifier"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "Strain Stock Number",
         "entity" : "Patient"
      },
      "(0018,1802)" : {
         "req" : "3",
         "name" : "Time Distribution Protocol",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0008,009d)" : {
         "entity" : "Study",
         "name" : "Consulting Physician Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0020,9163)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "In-concatenation Total Number",
         "desc" : [
            "The number of SOP Instances sharing the same Concatenation UID (0020,9161).",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "module" : "Ophthalmic Tomography Image"
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "req" : "2",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Time",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
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
         "usage" : "M",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0022,0049)" : {
         "entity" : "Image",
         "name" : "Maximum Across-scan Distortion",
         "req" : "1C",
         "desc" : "Maximum distortion in across-scan direction in % of cross-scan Spatial Resolution. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "usage" : "M",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ]
      },
      "(0020,9222)" : {
         "usage" : "M",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1",
         "name" : "Dimension Index Sequence"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institutional Department Name"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1164)" : {
         "req" : "1",
         "name" : "Frame Extraction Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast was administered",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Contrast/Bolus Administration Route Sequence"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "entity" : "Image",
         "name" : "Simple Frame List",
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
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0022,0035)" : {
         "name" : "Depth Spatial Resolution",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "usage" : "M",
         "desc" : "The inherent limiting resolution in microns for depth of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable, the value at the center of the scanning volume. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise."
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "name" : "Private Creator Reference",
         "entity" : "Image"
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "name" : "Private Group Reference",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value"
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
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient"
      },
      "(0028,1102)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,0035)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "name" : "Patient's Alternative Calendar",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "req" : "1",
         "name" : "Storage Media File-Set UID",
         "entity" : "Patient"
      },
      "(0008,0106)" : {
         "entity" : "Image",
         "name" : "Context Group Version",
         "req" : "1",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Subject Relative Position in Image",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0022,0036)" : {
         "usage" : "M",
         "desc" : "Maximum distortion in depth direction in % of Depth Spatial Resolution. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Maximum Depth Distortion"
      },
      "(0038,0010)" : {
         "entity" : "Study",
         "name" : "Admission ID",
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0012,0010)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient"
      },
      "(0010,0033)" : {
         "entity" : "Patient",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "req" : "3",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "name" : "Study Instance UID",
         "req" : "3",
         "usage" : "M",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Birth date of the patient.",
         "req" : "2",
         "name" : "Patient's Birth Date",
         "entity" : "Patient"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "name" : "Contrast Flow Duration",
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "usage" : "C - Required if contrast was administered"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0008,0110)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0010,1020)" : {
         "name" : "Patient's Size",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "req" : "1",
         "name" : "Retrieve AE Title",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0022,0056)" : {
         "entity" : "Image",
         "name" : "Illumination Power",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Power of the illuminator in microwatts at corneal plane. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ]
      },
      "(0028,0102)" : [
         {
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
            "name" : "High Bit",
            "req" : "1"
         },
         {
            "req" : "1",
            "name" : "High Bit",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "module" : "Ophthalmic Tomography Image",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit.",
               "High Bit (0028,0102) shall be one less than Bits Stored"
            ],
            "usage" : "M"
         }
      ],
      "(0010,1010)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient.",
         "usage" : "U",
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study",
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
         "usage" : "M"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Service Episode ID"
      },
      "(0028,0100)" : [
         {
            "name" : "Bits Allocated",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "usage" : "M"
         },
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               {
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "module" : "Ophthalmic Tomography Image",
            "entity" : "Image",
            "req" : "1",
            "name" : "Bits Allocated"
         }
      ],
      "(0008,1164)[<0>](0008,1167)" : {
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Multi-frame Source SOP Instance UID"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Performing Physician)"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record",
         "entity" : "Study"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0008,009c)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Consulting physician(s) for this patient visit.",
         "usage" : "M",
         "req" : "3",
         "name" : "Consulting Physician's Name",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0022,000a)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Emmetropic Magnification",
         "usage" : "M",
         "desc" : "Emmetropic magnification value (dimensionless). Zero length means the emmetropic magnification was not measured.",
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "req" : "1",
         "name" : "Breed Registration Number",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M"
      },
      "(0040,1012)" : {
         "req" : "3",
         "name" : "Reason For Performed Procedure Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(0040,0280)" : {
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0020,1040)" : {
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "req" : "2",
         "name" : "Position Reference Indicator"
      },
      "(0040,a390)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Type of object instances referenced.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Type of Instances",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0028,0010)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "req" : "1",
         "name" : "Rows",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "req" : "2",
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered",
         "desc" : "Total volume administered in milliliters of diluted contrast agent."
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0022,0017)" : {
         "desc" : [
            "Filters used in the light source path.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters",
         "entity" : "Image",
         "name" : "Light Path Filter Type Stack Code Sequence",
         "req" : "2"
      },
      "(0028,0011)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0008,0020)" : {
         "name" : "Study Date",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Date the Study started."
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "req" : "3",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "usage" : "C - Required if contrast was administered",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0028,1202)" : {
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Image",
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0022,0058)[<0>](0022,001c)" : {
         "desc" : [
            "The actual agent administered to dilate the pupil.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "entity" : "Image",
         "name" : "Mydriatic Agent Code Sequence",
         "req" : "1"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Time",
         "usage" : "M",
         "desc" : "Time the Series started.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "req" : "1C",
         "name" : "Requested Procedure ID",
         "entity" : "Series",
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
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0010,1000)" : {
         "req" : "3",
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
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
         "req" : "1C",
         "entity" : "Image"
      },
      "(0028,0301)" : {
         "entity" : "Image",
         "name" : "Burned In Annotation",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "list" : [
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "usage" : "M",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Position",
         "req" : "3"
      },
      "(0100,0426)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "usage" : "M",
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "usage" : "C - Required if contrast was administered",
         "req" : "2",
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image"
      },
      "(0018,1801)" : {
         "name" : "Time Source",
         "req" : "3",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : "ID of equipment or system providing time reference",
         "usage" : "C - Required if Ophthalmic Photography Reference Image available"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
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
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
         "name" : "Strain Source",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         ]
      },
      "(0008,002a)" : {
         "usage" : "M",
         "desc" : [
            "The date and time that the acquisition of data started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9e21547c-5ca3-464d-98b8-1f1dc4ea0d43"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Acquisition DateTime"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Creator UID"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "req" : "3",
         "name" : "Institutional Department Name",
         "entity" : "Image"
      },
      "(0018,0015)" : {
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Body Part Examined"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Image",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U"
      },
      "(0022,0015)" : {
         "usage" : "M",
         "desc" : [
            "Describes the type of acquisition device.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Acquisition Device Type Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Image",
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0042)" : {
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
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Reason for the Attribute Modification"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0028,0302)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Recognizable Visual Features",
         "usage" : "M",
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
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference"
      },
      "(0010,0010)" : {
         "usage" : "M",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Patient's Name",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)" : {
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0018,0012)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast was administered",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Contrast/Bolus Agent Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Study Instance UID"
      },
      "(0028,0108)" : {
         "entity" : "Series",
         "name" : "Smallest Pixel Value in Series",
         "req" : "3",
         "desc" : "The minimum value of all images in this Series.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast was administered",
         "desc" : [
            "T1 Relaxivity of the MR Contrast/Bolus used specified in s",
            {
               "content" : [
                  "-1"
               ],
               "el" : "superscript"
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
         "req" : "3",
         "name" : "Contrast/Bolus T1 Relaxivity",
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
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
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0016)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "SOP Class UID",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,1110)" : {
         "entity" : "Study",
         "name" : "Referenced Study Sequence",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
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
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
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
               "el" : "note",
               "content" : [
                  "\n",
                  {
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "Retrieve URI",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
               "el" : "note",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 }
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "De-identification Method",
         "req" : "1C"
      },
      "(0018,1086)" : {
         "req" : "3",
         "name" : "Skip Beats",
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "usage" : "C - Required if cardiac synchronization was used"
      },
      "(0038,0064)" : {
         "req" : "3",
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U"
      },
      "(0028,0106)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast was administered",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "usage" : "M",
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
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
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
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
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
                           "el" : "listitem",
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
         ]
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "usage" : "C - Required if contrast was administered",
         "req" : "1",
         "name" : "Contrast/Bolus Agent Number",
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Largest Pixel Value in Series"
      },
      "(0100,0410)" : {
         "entity" : "Image",
         "name" : "SOP Instance Status",
         "req" : "3",
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3"
      },
      "(0018,106c)" : {
         "req" : "1C",
         "name" : "Synchronization Channel",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Image",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,106a)" : {
         "entity" : "Frame of Reference",
         "req" : "1",
         "name" : "Synchronization Trigger",
         "usage" : "C - Required if Ophthalmic Photography Reference Image available",
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
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0022,001b)[<0>](0022,0009)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Cylinder Axis",
         "usage" : "M",
         "desc" : "Axis value in degrees",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Tomography Acquisition Parameters"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "req" : "2C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "entity" : "Image"
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Comments",
         "usage" : "M",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(0010,0216)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0090)" : {
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referring Physician's Name",
         "req" : "2"
      },
      "(0028,0101)" : [
         {
            "entity" : "Image",
            "name" : "Bits Stored",
            "req" : "1",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "name" : "Bits Stored",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "8",
                        null
                     ],
                     [
                        "12",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "module" : "Ophthalmic Tomography Image"
         }
      ],
      "(0020,9222)[<0>](0020,9164)" : {
         "usage" : "M",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "name" : "Dimension Organization UID",
         "req" : "1C"
      },
      "(0018,9085)" : {
         "entity" : "Image",
         "name" : "Cardiac Signal Source",
         "req" : "1C",
         "usage" : "C - Required if cardiac synchronization was used",
         "desc" : [
            "Cardiac Signal Source.",
            {
               "list" : [
                  [
                     "ECG",
                     "electrocardiogram"
                  ],
                  [
                     "VCG",
                     "vector cardiogram"
                  ],
                  [
                     "PP",
                     "peripheral pulse"
                  ],
                  [
                     "MR",
                     "magnetic resonance, i.e., M-mode or cardiac navigator"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0018,9169)" : {
         "req" : "1C",
         "name" : "Cardiac Beat Rejection Technique",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "RR_INTERVAL",
                     "rejection based on deviation from average RR interval"
                  ],
                  [
                     "QRS_LOOP",
                     "rejection based on deviation from regular QRS loop"
                  ],
                  [
                     "PVC",
                     "rejection based on PVC criteria"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "usage" : "C - Required if cardiac synchronization was used"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
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
         "name" : "Assigning Facility Sequence",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series"
      },
      "(0012,0082)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0028,2112)" : {
         "usage" : "M",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "entity" : "Image",
         "name" : "Lossy Image Compression Ratio",
         "req" : "1C"
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
         ],
         "name" : "Mapping Resource Name",
         "req" : "3",
         "entity" : "Image"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "3",
         "name" : "Patient Identity Removed",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "usage" : "M"
      },
      "(0010,0026)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Source Patient Group Identification Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "entity" : "Image"
      },
      "(0022,000d)" : {
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "desc" : [
            "Whether or not the patient's pupils were pharmacologically dilated for this acquisition.",
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
            "If this tag is empty, no information is available."
         ],
         "name" : "Pupil Dilated",
         "req" : "2",
         "entity" : "Image"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0022,001b)[<0>](0022,0007)" : {
         "usage" : "M",
         "desc" : "Sphere value in diopters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "entity" : "Image",
         "req" : "1",
         "name" : "Spherical Lens Power"
      },
      "(0020,0060)" : {
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Laterality",
         "req" : "2C"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Identifying Private Elements",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
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
      "(0040,0555)[<0>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "name" : "Value Type",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "usage" : "U"
      },
      "(0018,9073)" : {
         "name" : "Acquisition Duration",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "desc" : [
            "The scan time in seconds used to create all frames of an Ophthalmic Tomography image.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
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
      "(0008,0117)" : {
         "entity" : "Image",
         "name" : "Context UID",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "name" : "Contrast/Bolus Ingredient Opaque",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.4b.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "C - Required if contrast was administered"
      },
      "(0018,1030)" : {
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Protocol Name",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
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
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series"
      },
      "(0018,1061)" : {
         "req" : "3",
         "name" : "Trigger Source or Type",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "usage" : "C - Required if Ophthalmic Photography Reference Image available"
      },
      "(0020,9221)" : {
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
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "name" : "Dimension Organization Sequence",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0018,1000)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "usage" : "M",
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ],
                        "attrs" : {
                           "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "3",
            "name" : "Device Serial Number",
            "entity" : "Equipment"
         },
         {
            "entity" : "Equipment",
            "name" : "Device Serial Number",
            "req" : "1",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series"
      },
      "(0010,2298)" : {
         "name" : "Responsible Person Role",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "name" : "Study Description",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0105)" : {
         "req" : "1",
         "name" : "Mapping Resource",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         "usage" : "M"
      },
      "(0022,0055)" : {
         "name" : "Illumination Wave Length",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters",
         "usage" : "M",
         "desc" : "Wavelength of the illuminator in nm. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise."
      },
      "(0028,2002)" : {
         "name" : "Color Space",
         "req" : "3",
         "entity" : "Image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         ]
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "name" : "Patient's Weight",
         "req" : "3",
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0022,000b)" : {
         "usage" : "M",
         "desc" : [
            "Value of intraocular pressure in mmHg.",
            "Zero length means the pressure was not measured"
         ],
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "entity" : "Image",
         "name" : "Intra Ocular Pressure",
         "req" : "2"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image"
      },
      "(0008,2218)" : {
         "module" : "Ocular Region Imaged",
         "mod_tables" : [
            "table_C.8.17.5-1",
            "table_10-5"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Anatomic Region Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0020,9162)" : {
         "desc" : [
            "Identifier for one SOP Instance belonging to a concatenation.",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "module" : "Ophthalmic Tomography Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "In-concatenation Number"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M"
      },
      "(0022,0057)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Illumination Bandwidth",
         "usage" : "M",
         "desc" : "Bandwidth of the illuminator in nm. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0028,1203)" : {
         "usage" : "M",
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0018,9037)" : {
         "name" : "Cardiac Synchronization Technique",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was used",
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "REALTIME",
                     "total time for the acquisition is shorter than cardiac cycle, no gating is applied"
                  ],
                  [
                     "PROSPECTIVE",
                     "certain thresholds have been set for a gating window that defines the acceptance of measurement data during the acquisition"
                  ],
                  [
                     "RETROSPECTIVE",
                     "certain thresholds have been set for a gating window that defines the acceptance of measurement data after the acquisition"
                  ],
                  [
                     "PACED",
                     "there is a constant RR interval (e.g., Pacemaker), which makes thresholding not required"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "Patient",
         "name" : "Repository Unique ID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0022,001d)" : {
         "usage" : "M",
         "desc" : [
            "The position of this image on the retina (as defined by a specified nomenclature; the nomenclature is implicit in the code used).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.17.5-1"
         ],
         "module" : "Ocular Region Imaged",
         "entity" : "Image",
         "req" : "3",
         "name" : "Relative Image Position Code Sequence"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "MAC Algorithm",
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
               "el" : "note",
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
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0040,0556)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : "Free-text description of the image-acquisition context.",
         "usage" : "M",
         "req" : "3",
         "name" : "Acquisition Context Description",
         "entity" : "Image"
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0021)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
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
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.1"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "name" : "Dimension Index Pointer",
         "entity" : "Image"
      },
      "(0012,0064)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0201)" : {
         "entity" : "Image",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
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
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
               ],
               "el" : "note"
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "content" : [
                        "For example:"
                     ],
                     "el" : "para"
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Primary identifier for an individual subject.",
         "req" : "1",
         "name" : "Patient ID",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "entity" : "Study"
      },
      "(0008,0124)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series"
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "name" : "Ethnic Group",
         "req" : "3",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "req" : "2",
         "name" : "Study ID",
         "entity" : "Study"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.5-1",
            "table_10-5",
            "table_10-8"
         ],
         "module" : "Ocular Region Imaged",
         "entity" : "Image",
         "req" : "3",
         "name" : "Primary Anatomic Structure Modifier Sequence"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
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
         ]
      },
      "(0020,0052)" : {
         "req" : "1",
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "C - Required if Ophthalmic Photography Reference Image available"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "Storage Media File-Set ID",
         "req" : "2"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "name" : "Type of Patient ID",
         "entity" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Manufacturer",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0020)" : {
         "req" : "2",
         "name" : "Patient ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Certified Timestamp",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ]
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "usage" : "U",
         "req" : "3",
         "name" : "Additional Patient History",
         "entity" : "Study"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "usage" : "M",
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
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "entity" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Mapping Resource UID",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,1111)" : [
         {
            "entity" : "Series",
            "req" : "3",
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "mod_tables" : [
               "table_C.8.17.6-1"
            ],
            "module" : "Ophthalmic Tomography Series",
            "entity" : "Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "req" : "1C"
         }
      ],
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
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
         ]
      },
      "(0008,0021)" : {
         "usage" : "M",
         "desc" : "Date the Series started.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Date"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,1201)" : {
         "req" : "3",
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "usage" : "M"
      },
      "(0010,2202)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Code Sequence"
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "SOP Instance UID",
         "req" : "1"
      },
      "(0020,0062)" : {
         "entity" : "Image",
         "name" : "Image Laterality",
         "req" : "1",
         "desc" : [
            "Laterality of object imaged (as described in Anatomic Region Sequence (0008,2218)) examined.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_837225a0-5580-420e-8930-120a51d8485c"
                     },
                     "content" : [
                        "Laterality (0020,0060) is a Series level Attribute and must be the same for all Images in the Series. Since most Ophthalmic Photographic Image studies contain images of both eyes, the series level attribute will rarely be present."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.5-1"
         ],
         "module" : "Ocular Region Imaged"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "name" : "Occupation",
         "entity" : "Study"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
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
         ],
         "req" : "1C",
         "name" : "Time Range",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0022,0058)[<0>](0022,004e)" : {
         "desc" : "The concentration of the agent.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "entity" : "Image",
         "req" : "3",
         "name" : "Mydriatic Agent Concentration"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "req" : "1C",
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.2"
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 }
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
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "el" : "para"
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,1081)" : {
         "usage" : "C - Required if cardiac synchronization was used",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "name" : "Low R-R Value",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Image",
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0100,0424)" : {
         "entity" : "Image",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M"
      },
      "(0028,0103)" : [
         {
            "entity" : "Image",
            "req" : "1",
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
            ],
            "usage" : "M",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "module" : "Ophthalmic Tomography Image",
            "mod_tables" : [
               "table_C.8.17.7-1"
            ],
            "usage" : "M",
            "desc" : [
               "Data representation of pixel samples.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0",
                        null
                     ]
                  ]
               }
            ],
            "req" : "1",
            "name" : "Pixel Representation",
            "entity" : "Image"
         }
      ],
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0012,0020)" : {
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "module" : "General Series",
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
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "usage" : "C - Required if contrast was administered",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
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
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "name" : "Requested Procedure Description",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0100,0420)" : {
         "entity" : "Image",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1083)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "usage" : "C - Required if cardiac synchronization was used",
         "name" : "Intervals Acquired",
         "req" : "2C",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "name" : "Calculated Frame List",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
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
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "name" : "Contrast/Bolus Start Time",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast was administered",
         "desc" : "Time of start of administration."
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Home Community ID",
         "usage" : "M",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "usage" : "M"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Functional Group Private Creator"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ],
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0028,0006)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Planar Configuration",
         "req" : "1C"
      },
      "(0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "usage" : "M"
      },
      "(0010,0024)" : {
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Encrypted data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.4.2"
               }
            },
            "."
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Reason for Requested Procedure Code Sequence"
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
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
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence"
      },
      "(0028,1101)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Series Description Code Sequence",
         "req" : "3"
      },
      "(0010,0034)" : {
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0028,0034)" : {
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
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "usage" : "M"
      },
      "(0022,0058)[<0>](0022,0042)" : {
         "req" : "1C",
         "name" : "Mydriatic Agent Concentration Units Sequence",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "desc" : [
            "Units of measure for the Mydriatic Agent Concentration.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Mydriatic Agent Concentration (0022,004E) is present."
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series"
      },
      "(0020,0012)" : {
         "name" : "Acquisition Number",
         "req" : "1",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
         "usage" : "M",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image."
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "req" : "2C",
         "name" : "Patient Breed Description",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID",
         "desc" : "Primary identifier for the group of subjects.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Modifying System",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
      "(0010,2203)" : {
         "usage" : "U",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "name" : "Patient's Sex Neutered",
         "req" : "2C"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Clinical Trial Protocol ID",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
      "(0012,0031)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
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
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0018,7004)" : {
         "usage" : "M",
         "desc" : [
            "Type of detector used for creating this image.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "CCD",
                     "Charge Coupled Device"
                  ],
                  [
                     "CMOS",
                     "Complementary Metal Oxide Semiconductor"
                  ],
                  [
                     "PHOTO",
                     "Photodetector"
                  ],
                  [
                     "INT",
                     "Interferometer"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters",
         "entity" : "Image",
         "req" : "1",
         "name" : "Detector Type"
      },
      "(0020,9311)" : {
         "desc" : [
            "Dimension organization of the instance.",
            {
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of equally spaced parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of equally spaced parallel-plane 3D volume sets."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Dimension Organization Type"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
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
         "usage" : "M"
      },
      "(0018,5100)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2C",
         "name" : "Patient Position"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "usage" : "M",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Requested Procedure Code Sequence"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "entity" : "Study",
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1062)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study"
      },
      "(0040,0555)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Acquisition Context Sequence",
         "usage" : "M",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0012,0030)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Clinical Trial Site ID"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "name" : "Contrast/Bolus Stop Time",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast was administered",
         "desc" : "Time of end of administration."
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Instance UID of Study to which the related Series belongs",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,1070)" : {
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series."
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0020,0200)" : {
         "req" : "1",
         "name" : "Synchronization Frame of Reference UID",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
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
         "usage" : "C - Required if Ophthalmic Photography Reference Image available"
      },
      "(0022,0017)[<0>](0022,0001)" : {
         "name" : "Light Path Filter Pass-Through Wavelength",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ],
         "module" : "Ophthalmic Tomography Parameters",
         "usage" : "M",
         "desc" : "Nominal pass-through wavelength of light path filter in nm"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "entity" : "Series"
         },
         {
            "module" : "Ophthalmic Tomography Series",
            "mod_tables" : [
               "table_C.8.17.6-1",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "entity" : "Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0028,2114)" : {
         "req" : "1C",
         "name" : "Lossy Image Compression Method",
         "entity" : "Image",
         "module" : "Ophthalmic Tomography Image",
         "mod_tables" : [
            "table_C.8.17.7-1"
         ],
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
         ],
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "entity" : "Image",
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study"
      },
      "(7fe0,0010)" : {
         "req" : "1C",
         "name" : "Pixel Data",
         "entity" : "Image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
      "(0022,001b)[<0>](0022,0008)" : {
         "module" : "Ophthalmic Tomography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "desc" : "Cylinder value in diopters",
         "req" : "1",
         "name" : "Cylinder Lens Power",
         "entity" : "Image"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "entity" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0020,0011)" : [
         {
            "req" : "2",
            "name" : "Series Number",
            "entity" : "Series",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "desc" : "A number that identifies this Series."
         },
         {
            "desc" : "A number that identifies this Series.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.17.6-1"
            ],
            "module" : "Ophthalmic Tomography Series",
            "entity" : "Series",
            "req" : "1",
            "name" : "Series Number"
         }
      ],
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0018,1082)" : {
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was used",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "name" : "High R-R Value",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "req" : "1C",
         "name" : "Specific Character Set",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series"
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
                     "xrefstyle" : "select: labelnumber",
                     "linkend" : "sect_C.2.2.1.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "name" : "Performed Protocol Code Sequence",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M"
      },
      "(0022,0037)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Along-scan Spatial Resolution",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in microns of the acquisition equipment in the direction of a row. Required if Acquisition Device Type Code Sequence (0022,0015) contains an item with the value (A-00FBE, SRT, \"Optical Coherence Tomography Scanner\"). May be present otherwise.",
         "module" : "Ophthalmic Tomography Parameters",
         "mod_tables" : [
            "table_C.8.17.9-1"
         ]
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Clinical Trial Series Description",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
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
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.52.3-1",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.17.8-2 after (0022,001C))",
      "Can't handle table_8.8-1 (in table_C.8.17.8-2 after (0022,0042))",
      "Can't handle table_8.8-1 (in table_C.8.17.9-1 after (0022,0015))",
      "Can't handle table_8.8-1 (in table_C.8.17.9-1 after (0022,0017))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1 after (0022,001D))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.17.5-1:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
